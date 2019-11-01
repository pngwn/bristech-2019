<script>
	import { count } from "./stores.js";
</script>

<button on:click={() => ($count -= 1)}>-</button>
<button on:click={() => ($count += 1)}>+</button>
<strong>Count: {$count}</strong>

<br />

<style>
	strong {
		margin-left: 10px;
		font-size: 20px;
		text-transform: uppercase;
	}
</style>
