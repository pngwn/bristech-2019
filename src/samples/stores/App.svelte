<script>
	import { count, multiplier, total } from "./stores.js";
	import Counter from "./Counter.svelte";
	import Multiplier from "./Multiplier.svelte";
</script>

<Counter />
<Multiplier />

<h1>{$count} x {$multiplier} = {$total}</h1>
