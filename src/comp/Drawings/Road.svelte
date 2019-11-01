<script>
	import { tweened } from "svelte/motion";
	import { derived, get } from "svelte/store";
	import { road, ambulance } from "./drawings.js";

	export let color = "yellow";
	export let show_ambulance = false;
	export let flash = false;
	let route;

	$: neenaw = flash;

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

	const progress = tweened(0, { duration: 10000, easing: x => x });

	export function drive(p) {
		neenaw = false;
		progress.set(p);
	}

	$: coords = !route
		? tweened({ x: 0, y: 0, r: 0 })
		: follow_path(progress, route);

	function follow_path(progress_store, path) {
		const length = path.getTotalLength();
		const getSlope = ({ x: x1, y: y1 }, { x: x2, y: y2 }) =>
			(Math.atan2(y2 - y1, x2 - x1) * 180) / Math.PI;
		let old;

		const _derived = derived(progress_store, $progress_store => {
			if (!path) return { x: 0, y: 0, r: 0 };
			if (!old) {
				old = path.getPointAtLength($progress_store * length);
				return { x: 319, y: 386, r: -35 };
			}
			const coords = path.getPointAtLength($progress_store * length);

			const r = ~~getSlope(old, coords);
			old = coords;
			return { x: +coords.x.toFixed(3), y: +coords.y.toFixed(3), r: ~~+r };
		});

		//progress_store.set(length, { hard: true });

		return _derived;
	}

	let road_meta = [];

	for (let p = 0; p < road.length; p++) {
		if (p === 0) {
			road_meta.push({
				...road[p],
				delay: 0,
			});
		} else {
			road_meta.push({
				...road[p],
				delay:
					road_meta[road_meta.length - 1].delay +
					road_meta[road_meta.length - 1].duration,
			});
		}
	}

	let ambulance_meta = [];

	for (let p = 0; p < ambulance.length; p++) {
		if (p === 0) {
			ambulance_meta.push({
				...ambulance[p],
				delay: 0,
			});
		} else {
			ambulance_meta.push({
				...ambulance[p],
				delay:
					ambulance_meta[ambulance_meta.length - 1].delay +
					ambulance_meta[ambulance_meta.length - 1].duration,
			});
		}
	}
</script>

<svg
	class="road"
	width="100%"
	height="100%"
	viewBox="1100 -180 500 800"
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

	{#each road_meta as { d, delay, duration, style }}
		<path
			filter="url(#chalk)"
			use:draw={{ delay, duration }}
			style="stroke: {color};{style}"
			{d} />
	{/each}

	{#if neenaw}
		<g class="neenaw" style="transform: translate(-80px, -50px) rotate(25deg)">
			<path
				filter="url(#chalk)"
				d="M122.956,44.638C121.948,44.534 123.038,52.794
				122.683,58.465C121.994,69.498 118.608,81.078 118.608,91.882"
				style="fill:none;stroke:#fff;stroke-width:7.38px;" />
			<path
				filter="url(#chalk)"
				d="M122.718,46.484C122.408,44.308 126.316,56.212
				126.758,57.65C128.83,64.384 130.817,81.686 138.169,85.362C148.892,90.723
				147.949,45.277 147.949,42.98"
				style="fill:none;stroke:#fff;stroke-width:7.38px;" />
			<path
				filter="url(#chalk)"
				d="M170.235,49.72C168.348,48.236 167.714,64.584
				167.51,67.431C167.426,68.612 166.788,88.622
				168.325,88.622C170.312,88.622 174.421,82.023
				178.106,81.286C186.562,79.595 195.222,85.556 195.222,73.951"
				style="fill:none;stroke:#fff;stroke-width:7.38px;" />
			<path
				filter="url(#chalk)"
				d="M170.324,71.833C169.38,70.996 188.671,65.016 191.146,62.54"
				style="fill:none;stroke:#fff;stroke-width:7.38px;" />
			<path
				filter="url(#chalk)"
				d="M169.344,50.259C166.482,51.04 175.291,49.623
				178.106,48.685C182.324,47.279 186.378,45.351 190.331,42.98"
				style="fill:none;stroke:#fff;stroke-width:7.38px;" />
			<path
				filter="url(#chalk)"
				d="M218.792,53.06C218.954,52.32 218.251,54.477
				218.043,55.205C217.1,58.504 213.391,76.635 216.413,79.656C219.269,82.512
				223.825,76.152 227.823,75.581C230.816,75.153 243.309,76.247
				243.309,73.136"
				style="fill:none;stroke:#fff;stroke-width:7.38px;" />
			<path
				filter="url(#chalk)"
				d="M218.258,68.058C217.224,68.962 220.744,66.616
				222.118,66.616C227.612,66.616 231.28,64.789 235.159,60.91"
				style="fill:none;stroke:#fff;stroke-width:7.38px;" />
			<path
				filter="url(#chalk)"
				d="M211.873,52.852C210.988,52.619 214.986,51.305
				215.598,51.13C221.116,49.553 226.39,48.076 231.898,46.24"
				style="fill:none;stroke:#fff;stroke-width:7.38px;" />
			<path
				filter="url(#chalk)"
				d="M272.338,50.902C272.727,51.186 271.235,49.885
				271.02,50.315C268.153,56.049 259.257,75.229 265.315,81.286"
				style="fill:none;stroke:#fff;stroke-width:7.38px;" />
			<path
				filter="url(#chalk)"
				d="M270.378,50.363C266.158,49.191 280.681,85.829
				286.506,82.916C290.89,80.724 293.841,52.797 293.841,47.87"
				style="fill:none;stroke:#fff;stroke-width:7.38px;" />
			<path
				filter="url(#chalk)"
				d="M300.819,82.848C306.708,83.972 310.069,64.683
				310.957,58.465C311.229,56.563 311.501,54.662
				311.772,52.76C313.558,40.258 316.729,53.275 319.923,64.986C321.32,70.11
				325.628,75.824 325.628,81.286"
				style="fill:none;stroke:#fff;stroke-width:7.38px;" />
			<path
				filter="url(#chalk)"
				d="M308.392,71.19C310.792,77.519 327.691,66.182 329.703,64.171"
				style="fill:none;stroke:#fff;stroke-width:7.38px;" />
			<path
				filter="url(#chalk)"
				d="M342.159,37.958C334.817,42.139 336.145,79.578
				343.559,86.992C344.746,88.179 354.611,54.847
				356.599,56.835C357.306,57.542 357.696,93.868
				368.01,86.992C375.024,82.315 380.236,41.024 380.236,47.055"
				style="fill:none;stroke:#fff;stroke-width:7.38px;" />
			<path
				filter="url(#chalk)"
				d="M399.477,44.43C401.795,45.733 399.796,36.459
				399.796,36.459L399.796,70.691"
				style="fill:none;stroke:#fff;stroke-width:7.38px;" />
			<path
				filter="url(#chalk)"
				d="M398.735,83.056C399.902,82.397 398.524,85.819 399.796,84.546"
				style="fill:none;stroke:#fff;stroke-width:7.38px;" />
		</g>
	{/if}

	{#if show_ambulance}
		<g
			style="transform: translate({$coords.x - 319}px, {$coords.y - 345}px)
			rotate({$coords.r + 35}deg);">

			{#if flash}
				<path
					class="flash"
					filter="url(#chalk)"
					d="M170.889,126.438C166.06,128.117 149.287,116.108
					144.64,113.204C141.938,111.514 136.745,112.978 135.437,111.67"
					style="fill:none;stroke:lime;stroke-width:7.38px;transform:
					rotate(240deg) translate(16px, 56px); transform-origin: 160px 125px;" />
				<path
					class="flash"
					filter="url(#chalk)"
					d="M179.553,110.665C177.659,110.421 174.036,101.398
					172.763,99.398C169.825,94.781 160.491,86.598 160.491,80.99"
					style="fill:none;stroke:lime;stroke-width:7.38px;" />
				<path
					class="flash"
					filter="url(#chalk)"
					d="M170.889,126.438C166.06,128.117 149.287,116.108
					144.64,113.204C141.938,111.514 136.745,112.978 135.437,111.67"
					style="fill:none;stroke:lime;stroke-width:7.38px;" />
			{/if}

			{#each ambulance_meta as { d, delay, duration, style, className }}
				<path
					filter="url(#chalk)"
					class:flash={className && flash}
					use:draw={{ delay, duration }}
					style="stroke: {color};{style}"
					{d} />
			{/each}
		</g>
	{/if}

	<path
		bind:this={route}
		d="M319.08,386.346C472.517,271.079 625.127,193.549
		822.391,183.514C871.573,181.012 1046.44,229.051
		1091.85,247.526C1231.83,304.477 1325.05,433.529
		1478.77,453.557C1613.79,471.148 1667.51,459.668
		1799.77,427.738C1852.16,415.087 1960.78,369.113
		2011.7,350.937C2158.21,298.632 2220.5,240.64 2352.84,161.015"
		style="fill:none;stroke-width:6.5px;opacity: 1;opacity: 0;" />
</svg>

<style>
	g {
		transform-origin: 319px 386px;
		transition: 0.3s;
	}

	.flash {
		animation: 0.5s neenaw infinite alternate;
	}

	.edge {
		fill: none;
		stroke: lime;
		stroke-width: 6px;
		stroke-dasharray: 30px;
		transform: translateY(-85px, 0);
	}

	@keyframes neenaw {
		0% {
			opacity: 0.3;
		}

		100% {
			opacity: 1;
		}
	}
</style>
