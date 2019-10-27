<script>
	import { createEventDispatcher } from "svelte";

	export let value = "";

	const dispatch = createEventDispatcher();
	const keys = ["🐧", "🐱", "🐙", "🐮", "🐼", "🐸", "🐯", "🐷", "🦁"];

	const select = num => () => (value += num);
	const clear = () => (value = "");
	const submit = () => dispatch("submit");
</script>

<div class="keypad">
	{#each keys as key}
		<button on:click={select(key)}>{key}</button>
	{/each}

	<button class="text" disabled={!value} on:click={clear}>clear</button>
	<button on:click={select('🐨')}>🐨</button>
	<button class="text" disabled={!value} on:click={submit}>submit</button>
</div>

<style>
	.keypad {
		display: grid;
		grid-template-columns: repeat(3, 6fr);
		grid-template-rows: repeat(4, 6fr);
		grid-gap: 0.5em;
	}

	button {
		margin: 0;
		font-size: 50px;
	}

	.text {
		font-size: 20px;
	}
</style>
