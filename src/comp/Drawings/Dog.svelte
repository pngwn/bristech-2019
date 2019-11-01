<script>
	import { tweened } from "svelte/motion";
	import { dog } from "./drawings.js";

	export let color = "yellow";
	export let position = 0;
	export let awoo;

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
	let dog_meta = [];

	for (let p = 0; p < dog.length; p++) {
		if (p === 0) {
			dog_meta.push({
				...dog[p],
				delay: 0,
			});
		} else {
			dog_meta.push({
				...dog[p],
				delay:
					dog_meta[dog_meta.length - 1].delay +
					dog_meta[dog_meta.length - 1].duration,
			});
		}
	}

	console.log(dog_meta);
</script>

<svg
	class="dog"
	width="100%"
	height="100%"
	viewBox="550 300 1000 800"
	version="1.1"
	xmlns="http://www.w3.org/2000/svg"
	xmlns:xlink="http://www.w3.org/1999/xlink"
	xml:space="preserve"
	xmlns:serif="http://www.serif.com/"
	style=" transform: translateY({position});
	fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;">

	<defs>
		<filter
			id="chalk"
			height="2"
			width="1.6"
			color-interpolation-filters="sRGB"
			y="-0.5"
			x="-0.3">
			<feTurbulence
				baseFrequency="150"
				seed="115"
				result="result1"
				numOctaves="1"
				type="turbulence" />
			<feOffset result="result2" dx="-5" dy="-5" />
			<feDisplacementMap
				scale="12"
				yChannelSelector="G"
				in2="result1"
				xChannelSelector="R"
				in="SourceGraphic" />
			<feGaussianBlur stdDeviation="0.6" />
		</filter>
	</defs>
	{#if awoo}
		<g style="transform:scale(1.8) translate(-30px, 130px)">
			<path
				filter="url(#chalk)"
				d="M535.941,413.791C536.32,413.972 535.536,413.725
				535.536,413.233C535.536,407.266 538.016,402.294
				539.718,396.508C546.353,373.947 544.054,347.726
				553.655,326.124C554.205,324.886 554.391,322.639
				555.746,322.639C556.329,322.639 560.943,351.12
				568.289,374.208C569.745,378.782 578.331,400.975 578.046,400.69"
				style="fill:none;stroke:#fff;stroke-width:7.38px;" />
			<path
				filter="url(#chalk)"
				d="M541.4,393.127C538.729,392.171 543.372,391.98
				544.596,391.63C552.763,389.297 559.623,384.844 566.896,380.48"
				style="fill:none;stroke:#fff;stroke-width:7.38px;" />
			<path
				filter="url(#chalk)"
				d="M590.865,374.77C589.652,375.365 590.59,369.372
				590.59,370.724C590.59,376.845 591.585,383.939
				594.074,389.54C595.226,392.131 598.055,399.198
				598.952,396.508C599.761,394.082 602.254,370.633
				606.618,372.815C610.289,374.65 611.918,400.827
				620.555,396.508C625.162,394.205 624.409,367.482
				625.433,362.361C625.687,361.095 626.255,359.002 627.524,360.271"
				style="fill:none;stroke:#fff;stroke-width:7.38px;" />
			<path
				filter="url(#chalk)"
				d="M640.229,390.733C638.995,392.267 643.43,396.508
				641.462,396.508C640.423,396.508 640.454,394.685
				640.068,393.721C637.341,386.903 642.321,359.307
				654.005,365.149C674.569,375.431 644.946,421.006 644.946,389.54"
				style="fill:none;stroke:#fff;stroke-width:7.38px;" />
			<path
				filter="url(#chalk)"
				d="M670.878,396.639C660.636,387.557 673.998,362.199
				682.577,368.633C692.868,376.352 679.896,406.772 672.124,395.115"
				style="fill:none;stroke:#fff;stroke-width:7.38px;" />
			<path
				filter="url(#chalk)"
				d="M706.326,340.254C702.94,328.422 710.452,368.404 710.452,374.208"
				style="fill:none;stroke:#fff;stroke-width:7.38px;" />
			<path
				d="M707.977,402.439C707.722,402.718 709.437,402.78 709.059,402.78"
				style="fill:none;stroke:#fff;stroke-width:7.38px;" />
		</g>
	{/if}

	{#each dog_meta as { d, delay, duration, style }}
		<path
			filter="url(#chalk)"
			use:draw={{ delay, duration }}
			style="stroke: {color};{style}"
			{d} />
	{/each}

</svg>

<style>
	svg {
		transition: 0.5s;
	}
</style>
