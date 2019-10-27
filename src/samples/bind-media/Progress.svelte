<script>
	export let current_time;
	export let duration;

	let width;

	$: progress = current_time / duration;

	const handle_click = e => {
		const { x } = e.target.getBoundingClientRect();
		current_time = ((e.clientX - x) / width) * duration;
	};
</script>

<div on:click={handle_click} class="container" bind:offsetWidth={width}>
	<div style="width:{progress * width}px" class="line" />
	<span style="transform:translateX({progress * width}px)" class="bobbler" />
</div>

<style>
	.container {
		width: 100%;
		height: 6px;
		border-radius: 2.5px;
		background: #666;
		position: relative;
		cursor: pointer;
	}

	.line {
		border-radius: 3px;
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		width: 0;
		background: #ccc;
	}

	.bobbler {
		position: absolute;
		top: -2px;
		left: -2px;
		width: 10px;
		height: 10px;
		background: #fff;
		border-radius: 50%;
		box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.2);
	}
</style>
