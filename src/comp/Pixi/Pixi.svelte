<script context="module">
	export let _PIXI = {};
</script>

<script>
	import { onMount, setContext } from "svelte";
	import * as PIXI from "pixi.js";

	export let margin = 0;
	export let width = window.innerWidth;
	export let height = window.innerHeight;
	export let background = "#fff";
	let container;

	PIXI.settings.RESOLUTION = devicePixelRatio;

	const app = new PIXI.Application({
		width,
		height,
		transparent: true,
		antialias: true,
		autoResize: true,
	});

	setContext(_PIXI, { app, margin, width, height });

	onMount(() => {
		container.appendChild(app.view);
		app.view.style.pointerEvents = "none";
		app.view.style.position = "absolute";
		app.view.style.right = 0;
		app.view.style.bottom = 0;
	});
</script>

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

<div
	bind:this={container}
	class="container"
	on:click
	style="background-color:{background}" />
<slot />
