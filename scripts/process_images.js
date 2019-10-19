import { writeFileSync } from "fs";
import { resolve } from "path";
import Jimp from "jimp";

// iterate over the cells, executing a callback for each
// zero index
function process_image(w, h, cb) {
	for (let y = 0; y < h; y += 1) {
		for (let x = 0; x < w; x += 1) {
			cb(y * h + x, x, y);
		}
	}
}

const mode = ns => {
	let mode = [ns[0], 0];
	const map = [];

	ns.forEach((n, i) => {
		const _i = map.findIndex(([key]) => n.join("-") === key);
		if (_i > -1) {
			map[_i][1]++;
			if (map[_i][1] > mode[1]) mode = [n, map[_i][1]];
		} else {
			map.push([n.join("-"), 1]);
		}
	});

	return mode[0];
};

const get_cols = v =>
	v.map(({ cols, pos }) => ({
		pos,
		col: cols[0] ? mode(cols) : [0, 0, 0],
	}));

const f = resolve(process.cwd(), "./scripts/images/einstein_reduced.jpg");
const r = 3;

Jimp.read(f)
	.then(image => {
		const {
			bitmap: { width, height },
		} = image;

		console.log(width, height);

		const res = [];

		try {
			process_image(width / r, height / r, (i, x, y) => {
				const u = width / r <= 1 ? 0.5 : x / (width / r - 1);
				const v = height / r <= 1 ? 0.5 : y / (height / r - 1);
				let a = { pos: [u, v], cols: [] };
				if (res[y]) res[y].push(a);
				else res.push([a]);

				image.scan(x * r, y * r, r, r, function(x, y, _i) {
					a.cols.push([
						this.bitmap.data[_i + 0],
						this.bitmap.data[_i + 1],
						this.bitmap.data[_i + 2],
					]);
				});
			});
		} catch (e) {
			console.log(e);
		}

		let averaged;
		try {
			averaged = res.map(get_cols);
		} catch (e) {
			console.log(e);
		}

		try {
			writeFileSync(
				resolve(process.cwd(), "./scripts/processed/einstein.js"),
				`export const einstein = ${JSON.stringify({
					data: averaged,
					meta: [width, height],
				})};`,
			);
		} catch (e) {
			console.log(e);
		}
	})
	.catch(err => {
		// Handle an exception.
	});
