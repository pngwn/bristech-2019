<script>
	import { typewriter } from "~actions";

	import { fade, fly } from "svelte/transition";

	export let done;
	let current = 0;

	let show = false;

	const move = [() => (show = true), () => done()];

	export const next = () => move[current++]();

	const words = [
		"a ",
		"very",
		" short",
		" but ",
		"highly",
		" accurate",
		" history",
		" of",
		" front-end",
		" development",
	];
</script>

<div class="container" in:fly={{ opacity: 1, duration: 1000 }}>
	{#if show}
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

<style>
	h1 {
		font-family: Lato;
		color: #eee;
		font-size: 6rem;
		text-align: center;
		line-height: 10rem;
	}
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
		width: 1150px;
		height: 280px;
		margin: auto;
		display: grid;
		grid-template-rows: repeat(2, 1fr);
		grid-gap: 50px;
	}

	.word {
		display: inline-block;
		margin: 0 20px;
	}
	.highly {
		color: magenta;
		font-weight: 1000;
	}

	.very {
		color: orange;
		font-style: italic;
		font-weight: 300;
	}

	.front-end,
	.development {
		color: #85c1e9;
	}
</style>
