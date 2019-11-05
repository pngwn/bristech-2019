<script>
	import { fade, fly } from "svelte/transition";
	export let done;

	let current = 0;
	let current_image = 0;
	const move = [() => current_image++, () => current_image++, () => done()];

	export const next = () => move[current++]();

	const image = [
		"/images/penguin-desk.jpg",
		"/images/penguin-desk.jpg",
		"/images/penguin-desk.jpg",
	];
</script>

<div class="container" out:fade>

	{#each image as image, i (i)}
		{#if i === current}
			<img
				src="/images/penguin-desk.jpg"
				alt="a penguin"
				in:fade={{ delay: 1000, duration: 1000 }}
				out:fly={{ duration: 1000, x: -1000 }} />
		{/if}
	{/each}
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
		display: flex;
		justify-content: center;
		align-items: center;
	}

	img {
		position: absolute;
	}
</style>
