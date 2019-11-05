<script>
	import { onMount, tick } from "svelte";
	import { fade, fly } from "svelte/transition";

	let source = false;
	let output = false;

	export let done;
	let current = 0;

	const move = [() => (source = true), () => (output = true), () => done()];

	export const next = () => move[current++]();

	const source_text = [
		[
			{ color: "teal", text: "<", l: 0 },
			{ color: "blue", text: "h1", l: 1 },
			{ color: "yellow", text: " on:click", l: 3 },
			{ color: "grey", text: "=", l: 12 },
			{ color: "teal", text: "{", l: 13 },
			{ color: "grey", text: "()", l: 14 },
			{ color: "red", text: " => ", l: 16 },
			{ color: "grey", text: "name", l: 20 },
			{ color: "red", text: " = ", l: 24 },
			{ color: "green", text: `'Frank'`, l: 27 },
			{ color: "teal", text: "}>", l: 33 },
		],
		[
			{ color: "grey", text: "Hello ", l: 35 },
			{ color: "blue", text: "{", l: 41 },
			{ color: "grey", text: "name", l: 42 },
			{ color: "blue", text: "}", l: 46 },
		],
		[
			{ color: "teal", text: "</", l: 47 },
			{ color: "blue", text: "h1", l: 49 },
			{ color: "teal", text: ">", l: 51 },
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
	// if (changed.name) {
	// 	text.data = `Hello ${name}`;
	// }
	// const outp;

	const colors = {
		yellow: "#fdfd96",
		teal: "teal",
		blue: "cyan",
		green: "#98fb98",
		grey: "#ccc",
		red: "#fa8072",
		orange: "darkorange",
	};

	function typewriter(node, { speed = 50, delay }) {
		const valid =
			node.childNodes.length === 1 && node.childNodes[0].nodeType === 3;
		if (!valid) return {};

		const text = node.textContent;
		const duration = text.length * speed;

		return {
			duration,
			delay,
			tick: (t, u) => {
				const i = ~~(text.length * t);
				node.textContent = text.slice(0, i);
			},
		};
	}
</script>

<div class="container" in:fly={{ opacity: 1, duration: 1000 }}>
	<div class="inner">
		{#if source}
			<div class="source">
				{#each source_text as line, i}
					<div class="line line-{i}">
						{#each line as { color, text, l }, j}
							<span
								in:typewriter={{ delay: l * 50 }}
								style="color: {colors[color]}">
								{text}
							</span>
						{/each}
					</div>
				{/each}
			</div>
		{/if}

		{#if output}
			<div class="output">
				{#each output_text as line, i}
					<div class="line line-{i}">
						{#each line as { color, text, l }, j}
							<span
								in:typewriter={{ delay: l * 50 }}
								style="color: {colors[color]}">
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

	.inner {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		width: 550px;
		height: 60vh;
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

	.line-1 {
		margin-left: 4rem;
	}
</style>
