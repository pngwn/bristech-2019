<script>
	import { count } from "./stores.js";
</script>

<button on:click={count.dec}>-</button>
<button on:click={count.inc}>+</button>
<strong>Count: {$count}</strong>

<br />

<style>
	strong {
		margin-left: 10px;
		font-size: 20px;
		text-transform: uppercase;
	}
</style>
