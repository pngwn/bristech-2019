<script>
	import Ebbinghaus from "../../comp/Ebbinghaus.svelte";

	export let done;

	export function next() {
		done();
	}
</script>

<div class="container">
	<Ebbinghaus />
</div>

<style>
	.container {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		height: 100vh;
		width: 100vw;
		background: #333;
	}
</style>
