<script>
	export let done;
	export const next = () => done();
</script>

<div class="container">
	<div />
	<div />
	<div />
</div>

<style>
	.container {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		width: 100vw;
		height: 100vh;
	}
</style>
