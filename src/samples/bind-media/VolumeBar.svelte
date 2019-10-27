<script>
	export let volume;

	const handle_click = e => {
		const { bottom } = e.target.getBoundingClientRect();
		const new_volume = (bottom - e.clientY) / 100;
		volume = new_volume > 1 ? 0 : new_volume;
	};
</script>

<div class="container" on:click|stopPropagation={handle_click}>
	<div style="transform: scaleY({volume})" class="current" />
</div>

<style>
	.container {
		position: absolute;
		bottom: 0;
		left: -6px;
		border-radius: 2px;
		width: 20px;
		height: 100px;
		background: #ccc;
		z-index: -1;
		overflow: hidden;
	}

	.current {
		transform-origin: 100% 100%;
		width: 100%;
		height: 100%;
		bottom: 0;
		position: absolute;
		background: cyan;
	}
</style>
