<script>
	import House from "../../comp/Drawings/House.svelte";
	import Dog from "../../comp/Drawings/Dog.svelte";
	import Reactivity from "../../comp/Drawings/Reactivity.svelte";
	import Road from "../../comp/Drawings/Road.svelte";
	import Ambulance from "../../comp/Drawings/Ambulance.svelte";
	import Circle from "../../comp/Drawings/Circle.svelte";

	let things = {
		houses: Array(3).fill(false),
		dogs: Array(3).fill(false),
		circles: Array(3).fill(false),
		active_dog: Array(3).fill(false),
		awoo: Array(3).fill(false),
	};
	let house_opacity = 1;
	let dog_pos = "100%";

	let title = false;
	let road = false;
	let road_c;
	let route;
	let ambulance = false;
	let ambulance_flash = false;

	const stagger_things = (thing, amount, time) => {
		let i = 0;
		things[thing][i++] = true;
		const interval = setInterval(() => {
			if (i === amount) clearInterval(interval);
			things[thing][i++] = true;
		}, time);
	};

	const timer = delay => new Promise(res => setTimeout(res, delay));

	export const steps = [
		() => (title = true),
		() => stagger_things("houses", 3, 4000),
		() => stagger_things("dogs", 3, 3000),
		() => {
			house_opacity = 0;
			dog_pos = "30%";
		},
		() => (road = true),
		() => (ambulance = true),
		() => stagger_things("circles", 3, 1000),
		() => (ambulance_flash = true),
		() => road_c.drive(0.25),
		async () => (
			stagger_things("active_dog", 3, 5000),
			await timer(4000),
			() => stagger_things("awoo", 3, 5000),
			road_c.drive(1)
		),
	];
</script>

<div class="main-container">

	<div class="container">
		{#if title}
			<Reactivity color="#fff" />
		{/if}

		{#if things.houses[0]}
			<House color="yellow" opacity={house_opacity} />
		{/if}

		{#if things.houses[1]}
			<House color="lime" opacity={house_opacity} />
		{/if}

		{#if things.houses[2]}
			<House color="cyan" opacity={house_opacity} />
		{/if}

		{#if things.dogs[0]}
			<Dog color="yellow" position={dog_pos} awoo={things.awoo[0]} />
		{/if}

		{#if things.dogs[1]}
			<Dog color="lime" position={dog_pos} awoo={things.awoo[1]} />
		{/if}

		{#if things.dogs[2]}
			<Dog color="cyan" position={dog_pos} awoo={things.awoo[2]} />
		{/if}

		{#if things.circles[0]}
			<Circle fill={things.active_dog[0]} />
		{/if}

		{#if things.circles[1]}
			<Circle color="lime" fill={things.active_dog[1]} />
		{/if}

		{#if things.circles[2]}
			<Circle color="cyan" fill={things.active_dog[2]} />
		{/if}

		{#if road}
			<Road
				color="#fff"
				bind:route
				show_ambulance={ambulance}
				flash={ambulance_flash}
				bind:this={road_c} />
		{/if}
	</div>
</div>

<style>
	.main-container {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: #000 !important;
		overflow: hidden;
	}
	.container {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		grid-template-rows: 150px 1fr 1fr 1fr;
		margin: 50px;
		width: calc(100vw - 100px);
		height: calc(100vh - 100px);
	}

	.container :global(.house) {
		grid-row: 2 / span 1;
	}

	.container :global(.dog) {
		grid-row: 2 / span 1;
	}

	.container :global(.circle) {
		grid-row: 2 / span 1;
	}

	div :global(svg:nth-child(3n + 2)) {
		grid-column: 2 / span 1;
	}
	div :global(svg:nth-child(3n + 3)) {
		grid-column: 3 / span 1;
	}
	div :global(svg:nth-child(3n + 4)) {
		grid-column: 4 / span 1;
	}

	div :global(svg.reactivity) {
		grid-column: 2 / span 3;
		grid-row: 1;
	}

	div :global(svg.road) {
		grid-column: 1 / span 5;
		grid-row: 3 / span 2;
	}

	div :global(svg.ambulance) {
		grid-column: 1 / span 2;
		grid-row: 3 / span 2;
		transform-origin: 24% 33%;
	}
</style>
