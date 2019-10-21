import { readdir, readFileSync, writeFile } from "fs";
import { resolve, join, parse } from "path";

const SAMPLES_DIR = resolve(process.cwd(), "./src/samples/");
const make_path = (base, part) => resolve(join(base, part));

readdir(SAMPLES_DIR, (e, dirs) => {
	if (e) throw new Error(e.message);
	//
	dirs.forEach(subdir => {
		const path = make_path(SAMPLES_DIR, subdir);
		readdir(path, (e, file_paths) => {
			let components = [];

			file_paths
				.filter(f => f !== "index.js")
				.forEach(file_path => {
					const abs_file_path = make_path(path, file_path);
					const { ext, name } = parse(abs_file_path);
					const content = readFileSync(abs_file_path, { encoding: "utf8" });

					components.push({
						type: ext.replace(".", ""),
						name: name,
						source: content,
					});
				});

			const data = `// generated file -- no touchy
export default ${JSON.stringify(components, null, 2)}`;

			writeFile(`${path}/index.js`, data, () => {});
		});
	});
});
