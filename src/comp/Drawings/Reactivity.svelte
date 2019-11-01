<script>
	import { tweened } from "svelte/motion";
	import { reactivity } from "./drawings.js";

	export let color = "yellow";

	function draw(path, opts = {}) {
		const length = path.getTotalLength();
		path.style.strokeDasharray = length;
		const dash = tweened(length, opts);
		const u = dash.subscribe(v => (path.style.strokeDashoffset = v));
		dash.set(0);

		return {
			destroy: u,
		};
	}

	let delay = 0;
	let reactivity_meta = [];

	for (let p = 0; p < reactivity.length; p++) {
		if (p === 0) {
			reactivity_meta.push({
				...reactivity[p],
				delay: 0,
			});
		} else {
			reactivity_meta.push({
				...reactivity[p],
				delay:
					reactivity_meta[reactivity_meta.length - 1].delay +
					reactivity_meta[reactivity_meta.length - 1].duration,
			});
		}
	}

	console.log(reactivity_meta);
</script>

<svg
	class="reactivity"
	width="100%"
	height="100%"
	viewBox="0 0 744 230"
	version="1.1"
	xmlns="http://www.w3.org/2000/svg"
	xmlns:xlink="http://www.w3.org/1999/xlink"
	xml:space="preserve"
	xmlns:serif="http://www.serif.com/"
	style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;">

	<defs>
		<filter
			id="chalk"
			height="2"
			width="1.6"
			color-interpolation-filters="sRGB"
			y="-0.5"
			x="-0.3">
			<feTurbulence
				baseFrequency="50"
				seed="115"
				result="result1"
				numOctaves="1"
				type="turbulence" />
			<feOffset result="result2" dx="-5" dy="-5" />
			<feDisplacementMap
				scale="10"
				yChannelSelector="G"
				in2="result1"
				xChannelSelector="R"
				in="SourceGraphic" />
			<feGaussianBlur stdDeviation="0.8" />
		</filter>
	</defs>

	{#each reactivity_meta as { d, delay, duration, style }}
		<path
			filter="url(#chalk)"
			use:draw={{ delay, duration }}
			style="stroke: {color};{style}"
			{d} />
	{/each}

</svg>

<style>
	svg {
		height: 70%;
	}
</style>
