<script>
	import Nested from "./Nested.svelte";

	let data = "";
	let data_from_component = {};

	const handler = () => (data = "boo!");
</script>

<button on:click={handler}>Clicky</button>
<Nested on:hello={e => (data_from_component = e.detail)} />

<pre>{JSON.stringify(data_from_component, null, 2)}</pre>
