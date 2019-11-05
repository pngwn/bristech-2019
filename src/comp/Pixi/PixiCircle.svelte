<script context="module">
	import * as PIXI from "pixi.js";

	const generateCircleTexture = (renderer, radius, color) => {
		const gfx = new PIXI.Graphics();
		const tileSize = radius * 3;
		const texture = PIXI.RenderTexture.create(tileSize, tileSize);

		gfx.beginFill(color);
		gfx.drawCircle(tileSize / 2, tileSize / 2, radius);
		gfx.endFill();

		renderer.render(gfx, texture);

		return texture;
	};

	let circle;
</script>

<script>
	import { getContext } from "svelte";

	import { lerp } from "~math/interpolate";

	import { _PIXI } from "./Pixi.svelte";

	export let positions,
		colors,
		radius = 16;

	let created = false;

	const { app, margin, width, height } = getContext(_PIXI);
	const sprites = drawCircle(positions, colors);

	function drawCircle(_positions, _colors) {
		circle = generateCircleTexture(app.renderer, radius, 0xffffff);

		const _sprites = _positions.map(
			({ position: _position, radius: _r, alpha }, i) => {
				const circleSprite = new PIXI.Sprite(circle);

				circleSprite.anchor.set(0.5);
				circleSprite.x = lerp(margin, width - margin, _position[0]);
				circleSprite.y = lerp(margin, height - margin, _position[1]);
				circleSprite.tint = _colors[i];

				return circleSprite;
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

	function updateCircle() {
		if (!created) return;
		const pivot = sprites[0].width / 2;
		sprites.forEach((circleSprite, i) => {
			circleSprite.x = lerp(margin, width - margin, positions[i].position[0]);
			circleSprite.y = lerp(margin, height - margin, positions[i].position[1]);
			circleSprite.scale.set(positions[i].radius);
			circleSprite.tint = colors[i];
		});
	}

	$: updateCircle(positions, colors);
</script>
