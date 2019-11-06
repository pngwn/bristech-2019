<script>
	import { GlobeIcon } from "svelte-feather-icons";
	import { onDestroy } from "svelte";
	export let done;

	let show = false;

	export const next = done;

	const a = new Audio("/images/dialup.mp3");
	let faded;

	let timer = setInterval(() => {
		if (faded) return;
		if (a.currentTime > 6) fade(a);
	}, 100);

	function fade(audio) {
		faded = true;
		const tick = 1 / 30;
		let v;
		const t = setInterval(() => {
			if ((v = audio.volume - tick) <= 0) {
				audio.volume = 0;
				clearInterval(v);
			} else {
				audio.volume = v;
			}
		}, 100);
	}

	onDestroy(() => clearInterval(timer));
</script>

<div class="container">
	<div class="icon" on:click={() => a.play()}>
		<GlobeIcon />
	</div>
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
		background: #222;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.icon {
		width: 500px;
		height: 500px;
	}
</style>
