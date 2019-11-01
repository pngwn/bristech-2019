<script>
	import Scale from "./Scale.svelte";
	import Fly from "./Fly.svelte";
	import Blur from "./Blur.svelte";
</script>

<div>
	<Scale />
	<Blur />
	<Fly />
</div>

<style>
	div {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
	}
</style>
