<script context="module">
	export const GRAPHICS = {};
</script>

<script>
	import { setContext, getContext } from "svelte";
	import * as PIXI from "pixi.js";
	import { _PIXI } from "./Pixi.svelte";

	const { app } = getContext(_PIXI);

	const generateCircleTexture = (renderer, size, color) => {
		const gfx = new PIXI.Graphics();
		const texture = PIXI.RenderTexture.create(size, size);
		gfx.beginFill(color);
		gfx.drawRect(size / 2, size / 2, size, size);
		gfx.endFill();
		renderer.render(gfx, texture);
		return texture;
	};

	export let circle = generateCircleTexture(app.renderer, 16, 0xffffff);

	setContext(GRAPHICS, { circle });
</script>

<slot />
