<script>
	import { fade, fly } from "svelte/transition";

	export let done;
	let current = 0;

	let show = false;
	let phrases = [];
	let phrases_2 = [];
	const move = [
		() => (phrases = [...phrases, "svelte.dev/docs/"]),
		() => (phrases = [...phrases, "svelte.dev/chat"]),
		() => (phrases = [...phrases, "svelte.dev/tutorial"]),
		() => (phrases = [...phrases, "svelte.dev/repl"]),
		() => (phrases_2 = [...phrases_2, "github.com/pngwn"]),
		() => (phrases_2 = [...phrases_2, "twitter.com/evilpingwin"]),
		() => done(),
	];

	export const next = () => move[current++]();
</script>

<div class="container">
	<h1 style="color:cyan">More Information</h1>
	{#each phrases as phrase}
		<h1 in:fly={{ duration: 600, y: 60 }} out:fade class="phrase">{phrase}</h1>
	{/each}
	<span />
	{#each phrases_2 as phrase}
		<h1 in:fly={{ duration: 600, y: 60 }} out:fade class="phrase">{phrase}</h1>
	{/each}
</div>

<style>
	h1 {
		font-family: "Fira Mono";
		color: #eee;
		font-size: 5rem;
		text-align: center;
		font-weight: 400;
		line-height: 9rem;
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
		padding-top: 100px;
	}

	span {
		display: block;
		margin-top: 100px;
	}

	/* .inner {
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
	} */

	.phrase {
		display: block;
		margin: 0 20px;
	}
</style>
