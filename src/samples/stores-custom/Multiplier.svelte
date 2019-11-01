<script>
	import { multiplier } from "./stores.js";
</script>

<button on:click={multiplier.dec}>-</button>
<button on:click={multiplier.inc}>+</button>
<strong>Multiplier: {$multiplier}</strong>

<style>
	strong {
		margin-left: 10px;
		font-size: 20px;
		text-transform: uppercase;
	}
</style>
