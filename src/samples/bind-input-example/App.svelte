<script>
	import Check from "./Check.svelte";
	import Cross from "./Cross.svelte";
	import { RE_EMAIL } from "./regexp.js";

	let text_value = "";
	$: match = text_value.match(RE_EMAIL);
</script>

<div>
	<input bind:value={text_value} />

	{#if !match}
		<Cross color="red" />
	{:else}
		<Check color="green" />
	{/if}

</div>

<style>
	div {
		height: 40px;
		display: flex;
	}

	input {
		height: 100%;
	}

	:global(body) {
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
