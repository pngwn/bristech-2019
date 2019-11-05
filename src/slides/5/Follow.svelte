<script>
	import { spring } from "svelte/motion";

	export let done;
	export const next = () => done();

	const init = Array(5)
		.fill(0)
		.map((v, i) => ({ x: 50, y: 50 }));

	let springs = spring(init, {
		stiffness: 0.1,
		damping: 0.4,
	});

	$: $springs &&
		springs.update(v => {
			return v.map((c, i) => (i === 0 ? c : $springs[i - 1]));
		});
</script>

<svg
	on:mousemove={e => springs.update(v => {
			v[0].x = e.clientX;
			v[0].y = e.clientY;
			return v;
		})}>
	{#each $springs as { x, y }}
		<circle cx={x} cy={y} r={15} />
	{/each}
</svg>

<style>
	svg {
		width: 100%;
		height: 100%;
		margin: -8px;
	}
	circle {
		fill: #ff3e00;
	}
</style>
