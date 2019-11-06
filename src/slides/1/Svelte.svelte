<script>
	import { onMount, tick } from "svelte";
	import { fade, fly } from "svelte/transition";

	let logo = false;
	let type = false;
	let reposition = false;
	let comp_fw = false;
	let bad_bitch = false;

	export let done;
	let current = 0;

	const move = [
		() => {
			logo = true;
			setTimeout(() => (type = true), 1500);
		},
		() => (reposition = true),
		() => (comp_fw = true),
		() => (bad_bitch = true),
		() => done(),
	];

	export const next = () => move[current++]();
</script>

<div class="container">
	<div class="logo">
		{#if logo}
			<svg
				class:reposition
				in:fade={{ duration: 2000 }}
				xmlns="http://www.w3.org/2000/svg"
				width="256"
				height="300"
				viewBox="0 0 256 300">
				<title>svelte-vertical</title>

				<path
					d="M191.8716,52.1065c-16.3379-23.3845-48.6074-30.3158-71.9383-15.45L78.9574,62.7719A47.0092,47.0092,0,0,0,57.72,94.2591a49.5083,49.5083,0,0,0,4.882,31.7842,47.14,47.14,0,0,0-7.032,17.5683,50.097,50.097,0,0,0,8.5576,37.8858c16.3419,23.3867,48.61,30.3149,71.9383,15.45l40.9759-26.1158a47.001,47.001,0,0,0,21.2378-31.4872A49.5286,49.5286,0,0,0,193.4,107.56a47.13,47.13,0,0,0,7.0291-17.5676,50.0832,50.0832,0,0,0-8.5576-37.8857"
					style="fill:#ff3e00" />
				<path
					d="M115.93,183.6976A32.5485,32.5485,0,0,1,80.996,170.7485a30.1218,30.1218,0,0,1-5.1475-22.7834,28.582,28.582,0,0,1,.9792-3.8266l.7717-2.3529,2.0992,1.5418a52.8582,52.8582,0,0,0,16.029,8.0087l1.5229.4621-.14,1.52a9.1869,9.1869,0,0,0,1.6528,6.0925,9.8011,9.8011,0,0,0,10.5181,3.9039,9.0254,9.0254,0,0,0,2.5168-1.1062l40.9769-26.1128a8.5317,8.5317,0,0,0,3.85-5.7043,9.1034,9.1034,0,0,0-1.5515-6.8672,9.8084,9.8084,0,0,0-10.5221-3.9061,9.02,9.02,0,0,0-2.5138,1.1054l-15.6366,9.9678a29.8952,29.8952,0,0,1-8.3206,3.6539A32.5485,32.5485,0,0,1,83.146,121.3959a30.1208,30.1208,0,0,1-5.1475-22.7834A28.261,28.261,0,0,1,90.7712,79.68l40.9729-26.115a29.8528,29.8528,0,0,1,8.3258-3.6584A32.5482,32.5482,0,0,1,175.004,62.8556a30.1218,30.1218,0,0,1,5.1475,22.7834,28.9008,28.9008,0,0,1-.9792,3.8265l-.7717,2.353L176.3024,90.28a52.8164,52.8164,0,0,0-16.03-8.0117l-1.5229-.462.14-1.52a9.2036,9.2036,0,0,0-1.6528-6.0924A9.8011,9.8011,0,0,0,146.7189,70.29a9.0252,9.0252,0,0,0-2.5168,1.1061L103.2252,97.5085a8.5183,8.5183,0,0,0-3.847,5.7035,9.09,9.09,0,0,0,1.5485,6.8681,9.8085,9.8085,0,0,0,10.5221,3.9061,9.0586,9.0586,0,0,0,2.5168-1.1062L129.6,102.9159a29.8159,29.8159,0,0,1,8.32-3.6569,32.5484,32.5484,0,0,1,34.9341,12.9492,30.1207,30.1207,0,0,1,5.1475,22.7834A28.275,28.275,0,0,1,165.23,153.9271l-40.9738,26.112a29.8538,29.8538,0,0,1-8.3257,3.6585"
					style="fill:#fff" />
			</svg>
		{/if}
		{#if type}
			<div class="text" class:reposition>
				{#each 'SVELTE'.split('') as l, i}
					<span in:fly={{ duration: 400, y: 20, delay: i * 200 }}>{l}</span>
				{/each}
			</div>
		{/if}

		{#if comp_fw}
			<div class="text two" in:fly={{ y: 30 }}>
				<span>is a component framework</span>
			</div>
		{/if}

		{#if bad_bitch}
			<div class="text two three" in:fly={{ y: 30 }}>
				<span>by Rich Harris</span>
				<span class="scholar">(scholar and gentleman)</span>
			</div>
		{/if}
	</div>
</div>

<style>
	.container {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		width: 100vw;
		height: 100vh;
		background: #fff;
	}

	.logo {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		width: 50%;
		height: 70%;
		margin: auto;
		transform: translateY(-60px);
	}

	svg {
		width: 100%;
		height: 100%;
		transition: 1s;
	}

	.text {
		position: absolute;
		bottom: -10px;
		font-family: "Overpass";
		font-size: 14rem;
		left: 0;
		right: 0;
		letter-spacing: 1.2rem;
		margin: auto;
		text-align: center;
		font-weight: 200;
		transition: 1s;
	}

	.text span {
		display: inline-block;
	}

	svg.reposition {
		transform: scale(1.3) translateY(200px);
		opacity: 0.1;
	}

	.text.reposition {
		transform: translateY(-55vh);
	}

	.two {
		color: #333;
		font-size: 5rem;
		font-weight: 400;
		letter-spacing: 0.1rem;
		bottom: 290px;
	}

	.three {
		bottom: 110px;
	}

	.scholar {
		font-size: 4rem;
		font-weight: 200;
		color: #555;
	}
</style>
