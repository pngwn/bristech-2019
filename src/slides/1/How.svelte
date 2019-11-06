<script>
	import { onMount, tick } from "svelte";
	import { fade, fly } from "svelte/transition";
	import { typewriter } from "~actions";

	let title = false;
	let title_pos = 300;
	let source = false;
	let output = false;
	let active_1 = false;
	let active_2 = false;
	let active_3 = false;

	export let done;
	let current = 0;

	const move = [
		() => (title = true),
		() => (title_pos = 100),
		() => (source = true),
		() => (active_1 = true),
		() => (active_2 = true),
		() => (active_3 = true),
		() => done(),
	];

	export const next = () => move[current++]();

	const source_text = [
		[
			{ color: "teal", text: "<", l: 0 },
			{ color: "blue", text: "script", l: 1 },
			{ color: "teal", text: ">", l: 7 },
		],
		[
			{ color: "orange", text: "let ", l: 8 },
			{ color: "grey", text: "name", l: 12 },
			{ color: "red", text: " = ", l: 16 },
			{ color: "green", text: `'Lilitha'`, l: 19 },
			{ color: "grey", text: ";", l: 28 },
		],
		[
			{ color: "teal", text: "</", l: 29 },
			{ color: "blue", text: "script", l: 31 },
			{ color: "teal", text: ">", l: 37 },
		],
		[
			{ color: "teal", text: "<", l: 38 },
			{ color: "blue", text: "h1", l: 38 + 1 },
			{ color: "yellow", text: " on:click", l: 38 + 3 },
			{ color: "grey", text: "=", l: 38 + 12 },
			{ color: "teal", text: "{", l: 38 + 13 },
			{ color: "grey", text: "()", l: 38 + 14 },
			{ color: "red", text: " => ", l: 38 + 16 },
			{ color: "grey", text: "name", l: 38 + 20 },
			{ color: "red", text: " = ", l: 38 + 24 },
			{ color: "green", text: `'Frank'`, l: 38 + 27 },
			{ color: "teal", text: "}>", l: 38 + 33 },
		],
		[
			{ color: "grey", text: "Hello ", l: 38 + 35 },
			{ color: "blue", text: "{", l: 38 + 41 },
			{ color: "grey", text: "name", l: 38 + 42 },
			{ color: "blue", text: "}", l: 38 + 46 },
		],
		[
			{ color: "teal", text: "</", l: 38 + 47 },
			{ color: "blue", text: "h1", l: 38 + 49 },
			{ color: "teal", text: ">", l: 38 + 51 },
		],
	];

	const output_text = [
		[
			{ color: "orange", text: "if ", l: 0 },
			{ color: "grey", text: "(changed", l: 3 },
			{ color: "red", text: ".", l: 11 },
			{ color: "grey", text: "name) {", l: 12 },
		],
		[
			{ color: "grey", text: "text", l: 19 },
			{ color: "red", text: ".", l: 23 },
			{ color: "grey", text: "data", l: 24 },
			{ color: "red", text: " = ", l: 28 },
			{ color: "green", text: "`Hello ${", l: 31 },
			{ color: "grey", text: "name", l: 41 },
			{ color: "green", text: "}`", l: 45 },
			{ color: "grey", text: ";", l: 47 },
		],
		[{ color: "grey", text: "}", l: 48 }],
	];

	const colors = {
		yellow: "#fdfd96",
		teal: "teal",
		blue: "cyan",
		green: "#98fb98",
		grey: "#ccc",
		red: "#fa8072",
		orange: "darkorange",
	};

	const is_active = (i, j, a, b, c) => {
		return (
			(i === 1 && j === 1 && a) ||
			(i === 3 && j === 7 && b) ||
			(i === 4 && j === 2 && c)
		);
	};
</script>

<div class="container" in:fly={{ opacity: 1, duration: 1000 }}>
	{#if title}
		<h1 style="transform: translateY({title_pos}px)">
			{#each 'svelte is a compiler'.split(' ') as word, i}
				<span in:fly={{ duration: 600, y: 60, delay: i * 500 }}>{word}</span>
			{/each}
		</h1>
	{/if}
	<div class="inner">
		{#if source}
			<div class="source">
				{#each source_text as line, i}
					<div class="line line-{i}">
						{#each line as { color, text, l }, j}
							<span
								in:typewriter={{ delay: l * 50 }}
								style="color: {colors[color]}"
								class:active={is_active(i, j, active_1, active_2, active_3)}>
								{text}
							</span>
						{/each}
					</div>
				{/each}
			</div>
		{/if}

	</div>
</div>

<style>
	.container {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		width: 100vw;
		height: 100vh;
		background: #222;
	}

	h1 {
		transition: 1s;
	}

	.inner {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		width: 550px;
		height: 280px;
		margin: auto;
		display: grid;
		/* grid-template-columns: repeat(3, 1fr); */
		grid-template-rows: repeat(2, 1fr);
		grid-gap: 50px;
	}

	.source,
	.output {
		font-size: 2.4rem;
		font-family: "Fira Mono";
	}

	.source {
		/* grid-column: 1 / span 2; */
		grid-row: 1;
	}

	.output {
		/* grid-column: 2 / span 2; */
		grid-row: 2;
	}

	.line {
		margin: 10px 0;
	}

	.line-1,
	.line-4 {
		margin-left: 4rem;
	}

	.line-2 {
		margin-bottom: 4rem;
	}

	h1 {
		font-size: 7rem;
		font-family: "Fira Mono";
		color: #eee;
		text-align: center;
		font-weight: 500;
	}

	h1 span {
		display: inline-block;
		margin: 0 20px;
	}

	.active {
		/* border-bottom: 5px solid lime;*/
		transition: 0.5s;
		background: lime;
		color: #000 !important;
	}
</style>
