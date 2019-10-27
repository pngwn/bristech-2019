<script>
	import Keypad from "./Keypad.svelte";

	let pin;
	$: view = pin ? pin : "enter your pin";

	function handleSubmit() {
		alert(`submitted ${pin}`);
	}
</script>

<div>
	<h1 style="color: {pin ? '#333' : '#ccc'}">{view}</h1>
	<Keypad bind:value={pin} on:submit={handleSubmit} />
</div>

<style>
	div {
		width: 22em;
		margin: auto;
		margin-top: 4em;
	}

	h1 {
		font-size: 30px;
		text-align: center;
	}
</style>
