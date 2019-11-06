<script>
	import { typewriter } from "~actions";

	import { fade, fly } from "svelte/transition";

	export let done;
	let current = 0;

	let show = false;

	const move = [() => (show = true), () => done()];

	export const next = () => move[current++]();

	const words = [
		"in",
		"no",
		"instance ",
		"has",
		"a",
		"website",
		"ever",
		"benefitted ",
		"from ",
		"a",
		"prolonged ",
		"DOM",
		"update",
		"— Sun Tzu",
	];
</script>

<div class="container" in:fly={{ opacity: 1, duration: 1000 }}>
	{#if show}
		<div class="inner">
			<h1>
				<span>
					{#each words as word, i}
						<span
							class:author={word === '— Sun Tzu'}
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
		background: #222;
	}

	.inner {
		position: absolute;
		top: -300px;
		left: 0;
		right: 0;
		bottom: 0;
		width: 1300px;
		height: 280px;
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
	.website,
	.DOM,
	.update {
		background: yellow;
		color: black;
		font-weight: 1000;
	}

	.author {
		display: block;
		transform: translateY(150px);
		font-weight: 300;
		font-size: 10rem;
	}
</style>
