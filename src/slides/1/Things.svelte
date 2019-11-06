<script>
	import { fade, fly } from "svelte/transition";

	export let done;
	let current = 0;

	let show = false;
	let phrase_1 = "";
	let phrase_2 = "";
	let phrase_3 = "";
	const move = [
		() => (phrase_1 = "Svelte is a compiler"),
		() => (phrase_2 = "There is no virtual DOM"),
		() => (phrase_3 = "Components do not rerender"),
		() => done(),
	];

	export const next = () => move[current++]();
</script>

<div class="container">
	<div class="inner">

		<span>
			{#if phrase_1}
				<h1 in:fly={{ duration: 600, y: 60 }} out:fade class="phrase">
					{phrase_1}
				</h1>
			{/if}

			{#if phrase_2}
				<h1 in:fly={{ duration: 600, y: 60 }} out:fade class="phrase">
					{phrase_2}
				</h1>
			{/if}

			{#if phrase_3}
				<h1 in:fly={{ duration: 600, y: 60 }} out:fade class="phrase">
					{phrase_3}
				</h1>
			{/if}

		</span>

	</div>
</div>

<style>
	h1 {
		font-family: Lato;
		color: #eee;
		font-size: 6rem;
		text-align: center;
		line-height: 20rem;
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
		height: 600px;
		margin: auto;
		display: grid;
		grid-template-rows: repeat(2, 1fr);
		grid-gap: 50px;
	}

	.phrase {
		display: block;
		margin: 0 20px;
	}
</style>
