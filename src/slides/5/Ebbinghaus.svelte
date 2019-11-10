<script>
	import Ebbinghaus from "../../comp/Ebbinghaus.svelte";

	export const steps = false;
</script>

<div class="container">
	<Ebbinghaus />
	<p>Press return to play animation</p>
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

	p {
		position: absolute;
		bottom: 0;
		right: 2rem;
		background: #eee;
		font-size: 2rem;
		padding: 1rem 1.5rem;
		font-family: "Lato";
		border-radius: 5px;
	}
</style>
