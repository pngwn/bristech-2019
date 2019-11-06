<script>
	import { fade } from "svelte/transition";
	import { onMount } from "svelte";
	import N from "noisejs";
	import palettes from "nice-color-palettes";

	import { animation } from "~animate";
	import { rangeFloor, shuffle, pick } from "~math/random";
	import { lerp, lerp_color } from "~math/interpolate";

	import { Pixi, PixiCircle } from "../../comp/Pixi/";

	export let done;
	export const next = done;

	const h = Math.round(window.innerHeight / 10);
	const w = Math.round(window.innerWidth / 10);

	const createGrid = () => {
		const colorCount = rangeFloor(1, 6);
		const palette = shuffle(pick(palettes)).slice(0, colorCount);

		const positions = [];
		const noise = new N.Noise(Math.random());

		for (let y = 0; y < h; y++) {
			for (let x = 0; x < w; x++) {
				const u = w <= 1 ? 0.5 : x / (w - 1);
				const v = h <= 1 ? 0.5 : y / (h - 1);
				const random_noise =
					Math.random() > 0.5 ? Math.abs(noise.simplex2(u, v)) : 0;

				positions.push({
					position: [u, v],
					radius: random_noise,
					color: parseInt(pick(palette).replace("#", "0x"), 16),
				});
			}
		}

		return positions;
	};

	let grid = createGrid();

	const getPositions = ({ position, radius }) => ({ position, radius });
	const getColors = ({ color }) => color;

	let pos = animation(grid.map(getPositions), {});
	let col = animation(grid.map(getColors), {
		interpolate: (a, b) => t => lerp_color(a, b, t),
	});

	async function rejig() {
		grid = createGrid();
		pos.set(grid.map(getPositions), {
			delay: i => i / 20,
			duration: () => (a, b) => {
				return (
					1500 +
					10 *
						Math.sqrt(
							a.position[0] * b.position[0] + a.position[1] + b.position[1],
						)
				);
			},
		});
		col.set(grid.map(getColors), { delay: i => i / 20 });
	}

	onMount(() => {
		const interval = setInterval(rejig, 3000);

		return () => clearInterval(interval);
	});
</script>

<Pixi background="#222" margin={15} transition={fade}>
	<PixiCircle positions={$pos} colors={$col} radius={4} />
</Pixi>
