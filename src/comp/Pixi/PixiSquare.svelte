<script context="module">
	import * as PIXI from "pixi.js";

	const generateSquareTexture = (renderer, size, color) => {
		const gfx = new PIXI.Graphics();
		const texture = PIXI.RenderTexture.create(size, size);
		gfx.beginFill(color);
		gfx.drawRect(size / 2, size / 2, size, size);
		gfx.endFill();
		renderer.render(gfx, texture);
		return texture;
	};

	let square;
</script>

<script>
	import { getContext } from "svelte";
	import { lerp } from "~math/interpolate";

	import { _PIXI } from "./Pixi.svelte";

	export let positions,
		colors,
		size = 16;

	let created = false;

	const { app, margin, width, height } = getContext(_PIXI);
	const sprites = drawSquare(positions, colors);

	function drawSquare(_positions, _colors) {
		square = generateSquareTexture(app.renderer, size, 0xffffff);

		const _sprites = _positions.map(
			({ position: _position, radius: _r, alpha }, i) => {
				const squareSprite = new PIXI.Sprite(square);

				squareSprite.x = lerp(margin, width - margin, _position[0]);
				squareSprite.y = lerp(margin, height - margin, _position[1]);
				squareSprite.tint = _colors[i];
				squareSprite.scale.set(_r);
				squareSprite.alpha = alpha;

				return squareSprite;
			},
		);

		const container = new PIXI.ParticleContainer(80000, {
			scale: true,
			tint: true,
		});

		container.addChild(..._sprites);
		app.stage.addChild(container);
		created = true;

		return _sprites;
	}

	function updateSquare() {
		if (!created) return;
		const pivot = sprites[0].width / 2;
		sprites.forEach((squareSprite, i) => {
			squareSprite.x = lerp(margin, width - margin, positions[i].position[0]);
			squareSprite.y = lerp(margin, height - margin, positions[i].position[1]);
			squareSprite.tint = colors[i];
			squareSprite.scale.set(positions[i].radius);
			squareSprite.alpha = positions[i].alpha;
		});
	}

	$: updateSquare(positions, colors);
</script>
