<script>
	import { fly } from "svelte/transition";

	let show = false;
</script>

<div class="outer">
	<h1 on:click={() => (show = !show)}>Fly</h1>

	{#if show}
		<div in:fly={{ x: 100 }} out:fly={{ x: -100 }} class="inner" />
	{/if}

</div>

<style>
	h1 {
		background: #555;
		border-radius: 3px;
		color: #eee;
		padding: 5px 10px;
		display: inline-block;
		cursor: pointer;
	}

	h1:hover {
		background: #333;
	}

	.inner {
		height: 100px;
		width: 100px;
		border-radius: 5px;
		background: cadetblue;
	}

	.outer {
		position: relative;
		height: 180px;
		margin-bottom: 40px;
	}
</style>
