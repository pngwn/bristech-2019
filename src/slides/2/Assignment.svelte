<script>
	import { scale, fade } from "svelte/transition";
	import { elasticOut } from "svelte/easing";
	export let done;
	let current = 0;

	let show = false;
	let phrase_1 = "";
	let phrase_2 = "";
	let phrase_3 = "";
	const move = [
		() => (phrase_1 = "="),
		() => (phrase_2 = "+="),
		() => (phrase_3 = "++"),
		() => done(),
	];

	export const next = () => move[current++]();
</script>

<div class="container">
	<span>
		<div class="inner">
			{#if phrase_1}
				<h1
					in:scale={{ duration: 1000, easing: elasticOut }}
					out:fade
					class="phrase">
					{phrase_1}
				</h1>
			{/if}

			{#if phrase_2}
				<h1
					in:scale={{ duration: 1000, easing: elasticOut }}
					out:fade
					class="phrase">
					{phrase_2}
				</h1>
			{/if}

			{#if phrase_3}
				<h1
					in:scale={{ duration: 1000, easing: elasticOut }}
					out:fade
					class="phrase">
					{phrase_3}
				</h1>
			{/if}
		</div>
	</span>

</div>

<style>
	h1 {
		font-family: Lato;
		color: #eee;
		font-size: 26rem;
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
		width: 100vw;
		height: 200px;
		margin: auto;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-gap: 50px;
	}

	.phrase {
		display: block;
		margin: 0 20px;
	}
</style>
