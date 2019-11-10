<script>
	import { fade, fly } from "svelte/transition";
	import { circOut } from "svelte/easing";
	import { animation } from "~animate";
	import { lerp_color, rgb_to_hex } from "~math/interpolate";
	import { shuffle } from "~math/random";

	import { Pixi, PixiCircle } from "../../comp/Pixi/";
	import { einstein } from "../../../scripts/processed/einstein.js";

	const { data, meta } = einstein;

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
		return shuffle([x >= 0.5 ? x + 2 : x - 2, y <= 0.5 ? y + 2 : y - 2]);
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

	export let done;
	let quote = false;
	let dots = true;

	const words = [
		"Do",
		"not",
		"judge",
		"the",
		"intelligence",
		"of",
		"a",
		"developer",
		"by",
		"their",
		"ability",
		"to",
		"understand",
		"low-level",
		"DOM",
		"APIs",
	];

	export const steps = [() => (quote = true), () => (dots = false)];
</script>

{#if dots}

	<Pixi
		margin={15}
		on:click={() => console.log('clicked')}
		width={meta[0] * 2}
		height={meta[1] * 2}
		background="transparent">
		<PixiCircle positions={$pos} colors={col} radius={2.5} fullscreen={true} />
	</Pixi>
{/if}

{#if quote}
	<div class="container" in:fly={{ opacity: 1, duration: 1000 }}>
		{#if quote}
			<div class="inner">
				<h1>
					<span>
						{#each words as word, i}
							<span
								in:fly={{ duration: 600, y: 60, delay: i * 300 }}
								out:fade
								class="word {word}">
								{word}
							</span>
						{/each}

					</span>
				</h1>

			</div>
		{/if}
	</div>
{/if}

<style>
	h1 {
		font-family: Lato;
		color: #eee;
		font-size: 6rem;
		text-align: left;
		line-height: 6rem;
	}
	.container {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		width: 100vw;
		height: 100vh;
	}

	.inner {
		position: absolute;
		top: 0;
		left: -770px;
		right: 0;
		bottom: 0;
		width: 700px;
		height: 600px;
		margin: auto;
		display: grid;
		grid-template-rows: repeat(2, 1fr);
		grid-gap: 50px;
	}

	.word {
		display: inline-block;
		margin: 20px 0;
		padding: 10px 20px;
	}
	.DOM,
	.APIs,
	.low-level,
	.developer {
		background: yellow;
		color: black;
		font-weight: 1000;
	}
</style>
