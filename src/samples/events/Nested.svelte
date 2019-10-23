<script>
	import { createEventDispatcher } from "svelte";

	const dispatch = createEventDispatcher();
</script>

<button on:click={() => dispatch('hello', { data: 'I am the payload' })}>
	From a component
</button>
