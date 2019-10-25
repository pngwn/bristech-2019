<script>
	import { circOut } from "svelte/easing";
	import { animation } from "~animate";
	import { lerp_color, rgb_to_hex } from "~math/interpolate";
	import { shuffle } from "~math/random";

	import { Pixi, PixiCircle } from "../comp/Pixi/";
	import { einstein } from "../../scripts/processed/einstein.js";

	const { data, meta } = einstein;

	export let done;
	export const next = () => done();

	const _cols = data.map(v => v.map(({ col }) => col));

	const bg_col = parseInt(rgb_to_hex(...data[0][0].col).replace("#", "0x"), 16);

	const _pos = data
		.map((v, i) =>
			v.map(({ pos, col }, j, arr) => {
				const color = parseInt(rgb_to_hex(...col).replace("#", "0x"), 16);
				return {
					color,
					position: pos,
					radius: color === bg_col ? 0 : 1,
				};
			}),
		)
		.map(v => v.filter(v => v.radius))
		.filter(a => a.length)
		.map((v, i, arr) =>
			v.map((x, j) => ({
				...x,
				i: Math.random() * 1500 + 1000,
				length: arr.length,
				alpha: 1,
			})),
		)
		.reduce((a, n) => a.concat(n), []);

	const get_random_oob = () => {
		const x = Math.random(),
			y = Math.random();
		return shuffle([
			x >= 0.5 ? x + 0.6 : x - 0.6,
			y <= 0.5 ? y + 0.6 : y - 0.6,
		]);
	};

	let pos = animation(
		_pos.map(v => ({
			...v,
			position: get_random_oob(),
			alpha: 0,
		})),
		{
			duration: 5500,
			delay: (_, __, { i }) => i,
			easing: circOut,
		},
	);

	pos.set(_pos);

	let col = _pos.map(({ color }) => color);
</script>

<Pixi
	margin={15}
	on:click={() => console.log('clicked')}
	width={meta[0] * 2.5}
	height={meta[1] * 2.5}
	background="#333">
	<PixiCircle positions={$pos} colors={col} radius={2.5} />
</Pixi>
