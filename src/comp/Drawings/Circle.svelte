<script>
	export let color;
	export let fill;
</script>

<svg class="circle" viewBox="0 0 500 500">
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

	<circle
		filter="url(#chalk)"
		class:ohno={fill}
		cx="50%"
		cy="50%"
		r="200"
		stroke-width="5"
		stroke-dasharray={(Math.PI * (200 * 2)) / 50} />
</svg>

<style>
	svg {
		margin: -15%;
		width: 130%;
		animation: zoomy 1s;
	}

	circle {
		fill: rgba(255, 0, 0, 0);
		stroke: rgba(255, 0, 0, 0.5);
	}

	.ohno {
		animation: ohno 1s 4 alternate;
	}

	@keyframes zoomy {
		from {
			transform: scale(0);
		}

		to {
			transform: scale(1);
		}
	}

	@keyframes ohno {
		from {
			fill: rgba(255, 0, 0, 0);
		}
		to {
			fill: rgba(255, 0, 0, 0.5);
		}
	}
</style>
