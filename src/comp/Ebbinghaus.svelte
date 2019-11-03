<script>
	import { onMount } from "svelte";
	import { tweened } from "svelte/motion";
	import { cubicInOut } from "svelte/easing";

	let w;
	let h;

	const opts = { duration: 3000, easing: cubicInOut };
	const s = tweened(1, opts);
	const r = tweened(0, opts);
	const p = tweened(0, opts);

	let pos = [
		{ top: 125 - 75, left: 125 * 2 - 75, origin: `50% 105%` },
		{ top: 125 * 2 - 75, left: 125 * 3 - 75, origin: `-5% 50%` },
		{ top: 125 * 2 - 75, left: 125 * 1 - 75, origin: `105% 50%` },
		{ top: 125 * 3 - 75, left: 125 * 2 - 75, origin: `50% -5%` },
	];

	async function change({ key }) {
		if (key !== "Enter") return;
		s.set(0.25);
		r.set(45);
		await p.set(w - 400);

		s.set(1);
		r.set(0);
		await p.set(0);
	}
</script>

<svelte:window on:keypress={change} bind:innerWidth={w} bind:innerHeight={h} />

<div class="container" style="transform: translate({$p}px, {h / 2 - 250}px);">
	{#each { length: 4 } as _, i}
		<div
			class="circle circle-{i + 1}"
			style="top: {pos[i].top}px; left: {pos[i].left}px; transform-origin:{pos[i].origin};transform:
			scale({$s});" />
	{/each}

	<div class="group" style="transform:rotate({$r}deg)">
		{#each { length: 4 } as _, i}
			<div
				class="circle circle-{i + 1}"
				style="top: {pos[i].top}px; left: {pos[i].left}px; transform-origin:{pos[i].origin};transform:
				scale({$s});" />
		{/each}
	</div>
	<div
		class="circle circle-0"
		style="top: {125 * 2 - 35}px; left: {125 * 2 - 35}px" />
</div>

<style>
	.container,
	.group {
		width: 500px;
		height: 500px;
		position: absolute;
	}

	.circle {
		position: absolute;
		width: 150px;
		height: 150px;
		background: crimson;
		border-radius: 50%;
	}
	.circle-0 {
		top: 250;
		width: 70px;
		height: 70px;
		background: cadetblue;
	}
</style>
