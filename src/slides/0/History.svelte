<script>
	import { typewriter } from "~actions";
	import { fade, fly } from "svelte/transition";

	let show = false;
	const words = ["the", "story", " so", " far "];

	export const steps = [() => (show = true)];
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
	<div class="overlay">
		<p>
			Desktop only. Move forwards with the right arrow key. Move to a previous
			screen using the browser back button.
		</p>
	</div>
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
		color: #85c1e9;
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

	.overlay {
		position: absolute;
		background: #fff;
		opacity: 0.7;
		bottom: 20px;
		left: 0;
		right: 0;
		margin: auto;
		width: 50%;
		font-size: 2.5rem;
		padding: 20px 20px 0 20px;
		border-radius: 5px;
		font-family: "Lato";
		text-align: center;
	}

	@media only screen and (max-width: 600px) {
		.overlay {
			width: 90%;
			font-size: 2rem;
		}
	}
</style>
