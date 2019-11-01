<script>
	import { multiplier } from "./stores.js";
</script>

<button on:click={() => ($multiplier -= 1)}>-</button>
<button on:click={() => ($multiplier += 1)}>+</button>
<strong>Multiplier: {$multiplier}</strong>

<style>
	strong {
		margin-left: 10px;
		font-size: 20px;
		text-transform: uppercase;
	}
</style>
