<script context="module">
	export let _PIXI = {};
</script>

<script>
	import { onMount, setContext } from "svelte";
	import * as PIXI from "pixi.js";

	export let transition = () => ({ duration: 0, delay: 0, css: () => "" });
	export let margin = 0;
	export let width = window.innerWidth;
	export let height = window.innerHeight;
	export let background = "#fff";
	let container;

	PIXI.settings.RESOLUTION = devicePixelRatio;
	const w = window.innerWidth;
	const h = window.innerHeight;
	const app = new PIXI.Application({
		width: w,
		height: h,
		transparent: true,
		antialias: true,
		autoResize: true,
	});

	setContext(_PIXI, { app, margin, width, height, ww: w, wh: h });

	onMount(() => {
		container.appendChild(app.view);
		app.view.style.pointerEvents = "none";
		app.view.style.position = "absolute";
		app.view.style.right = 0;
		app.view.style.bottom = 0;
		app.view.style.left = 0;
		app.view.style.top = 0;

		return () => {
			app.destroy(true, true);
		};
	});
</script>

<div
	transition:transition
	bind:this={container}
	class="container"
	on:click
	style="background-color:{background}" />
<slot />

<style>
	:global(body) {
		margin: 0;
		padding: 0;
	}

	div {
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
	}
</style>
