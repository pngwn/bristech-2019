<script>
	let penguins = [
		{
			type: "Baby",
			image: "./images/baby_penguin.gif",
			description: "A baby penguin, running around",
		},
		{
			type: "Not baby",
			image: "./images/not_baby_penguin.gif",
			description: "An adult penguin, falling over",
		},
	];
</script>

<style>
	:global(body) {
		text-align: center;
	}
</style>

<h1>Types of Penguin?</h1>

{#each penguins as { type, image }}
	<h2>{type}</h2>
	<img src={image} />
{/each}
