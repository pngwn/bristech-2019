<script>
	import { spring_group } from "./spring_group.js";
	import { gesture } from "./useGesture.js";

	let card = spring_group(
		[0, 1, 2].map((_, i) => ({
			x: 0,
			y: 30 * (i - 2),
			r: 0,
			s: 1 + 0.05 * (i - 2),
		})),
		{
			stiffness: i => [0.02, 0.03, 0.15][i],
			damping: i => [0.15, 0.2, 0.8][i],
		},
	);

	const handleGesture = ([x, y, down]) =>
		card.set(
			$card.map((_, i) => ({
				x: x + down * (40 * ((i - 2) * -1)),
				y: y - 30 * (i - 2) * -1 - down * (120 * (i - 2) * -1),
				r: down * (10 * ((i - 2) * -1)),
				s: 1 + 0.05 * (i - 2),
			})),
		);

	export let done;
	export const next = () => done();
</script>

<div class="bg">

	<div id="root" use:gesture={handleGesture}>
		{#each $card as { x, y, r, s }}
			<div
				class="rect"
				style="transform: translate3d({x}px,{y}px, 0) scale({s}) rotateZ({r}deg)" />
		{/each}
	</div>
</div>

<style>
	.bg {
		width: 100%;
		height: 100%;
		margin: 0;
		padding: 0;
	}

	.bg {
		font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir,
			helvetica neue, helvetica, ubuntu, roboto, noto, segoe ui, arial,
			sans-serif;
		background: transparent;
		-webkit-touch-callout: none;
		-webkit-user-select: none;
		-khtml-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
		cursor: default;
		cursor: url("https://github.com/chenglou/react-motion/raw/master/demos/demo8-draggable-list/cursor.png")
				39 39,
			auto;
		/* background: #fed35c; */
	}

	.bg::after {
		content: "";
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		background-image: url(https://uploads.codesandbox.io/uploads/user/b3e56831-8b98-4fee-b941-0e27f39883ab/ljhw-Untitled%206.png);
		background-size: cover;
		background-position: center;
		z-index: -1;
		filter: blur(0px);
		transition: filter 0.5s;
		will-change: filter;
	}

	.bg:active::after {
		filter: blur(40px);
	}

	#root {
		overflow: hidden;
		margin: 0;
		padding: 0;
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		perspective: 350px;
		perspective-origin: 50% 50%;
	}

	#root > div {
		position: absolute;
		background-size: cover;
		width: 24em;
		height: 14.5em;
		border-radius: 20px;
		will-change: transform;
	}

	#root > div::after {
		content: "John Doe";
		position: absolute;
		left: 40px;
		top: 40px;
		color: #efefefd5;
		font-size: 1em;
		text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.5);
	}

	#root > div::before {
		content: "XYZ CORP LTD";
		position: absolute;
		left: 40px;
		top: 60px;
		color: #cececed5;
		font-size: 0.7em;
		text-shadow: 0px 2px 1px rgba(0, 0, 0, 0.5);
	}

	#root > div:nth-child(1) {
		background-image: url(https://uploads.codesandbox.io/uploads/user/b3e56831-8b98-4fee-b941-0e27f39883ab/9qWx-1.png);
		box-shadow: 0px -10px 15px -5px rgba(0, 0, 0, 0.2),
			0 12.5px 60px -10px rgb(89, 112, 206), 0 10px 10px -10px rgb(60, 75, 138);
	}

	#root > div:nth-child(2) {
		background-image: url(https://uploads.codesandbox.io/uploads/user/b3e56831-8b98-4fee-b941-0e27f39883ab/T0hA-3.png);
		box-shadow: 0px -10px 15px -5px rgba(0, 0, 0, 0.2),
			0 12.5px 60px -10px rgb(239, 214, 23), 0 10px 10px -10px rgb(239, 214, 23);
	}

	#root > div:nth-child(3) {
		background-image: url(https://uploads.codesandbox.io/uploads/user/b3e56831-8b98-4fee-b941-0e27f39883ab/QoXU-2.png);
		box-shadow: 0px -10px 15px -5px rgba(0, 0, 0, 0.2),
			0 12.5px 60px -10px rgb(187, 60, 64), 0 10px 10px -10px rgb(233, 75, 80);
	}
</style>
