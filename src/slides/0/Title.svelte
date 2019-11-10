<script>
	import { typewriter } from "~actions";

	import { fade, fly } from "svelte/transition";

	let show = false;

	const source_text = [
		[
			{ color: "purple", text: "props", l: 0 },
			{ color: "red", text: " => ", l: 5 },
			{ color: "yellow", text: "svelte", l: 9 },
			{ color: "grey", text: "(", l: 15 },
			{ color: "teal", text: "<", l: 16 },
			{ color: "blue", text: "Perceptions ", l: 17 },
			{ color: "teal", text: "/>", l: 28 },
			{ color: "grey", text: ")", l: 30 },
		],
	];

	const colors = {
		yellow: "#fdfd96",
		teal: "teal",
		blue: "cyan",
		green: "#98fb98",
		grey: "#ccc",
		red: "#fa8072",
		orange: "darkorange",
		purple: "#bf9fff",
	};

	export const steps = [() => (show = true)];
</script>

<div class="container" in:fly={{ opacity: 1, duration: 1000 }}>
	{#if show}
		<div class="inner">
			<div class="source">
				{#each source_text as line, i}
					<div class="line line-{i}">
						{#each line as { color, text, l }, j}
							<span
								in:typewriter={{ speed: 100, delay: l * 100 }}
								style="color: {colors[color]}">
								{text}
							</span>
						{/each}
					</div>
				{/each}
			</div>

		</div>
	{/if}
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
		width: 1550px;
		height: 280px;
		margin: auto;
		display: grid;
		/* grid-template-columns: repeat(3, 1fr); */
		grid-template-rows: repeat(2, 1fr);
		grid-gap: 50px;
	}

	.source,
	.output {
		font-size: 4.4rem;
		font-family: "Fira Mono";
		text-align: center;
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
</style>
