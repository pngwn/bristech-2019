<script>
	let animals = [
		{ name: "Dog", icon: "🐶" },
		{ name: "Cat", icon: "🐱" },
		{ name: "Cow", icon: "🐮" },
		{ name: "Fox", icon: "🦊" },
		{ name: "Octopus", icon: "🐙" },
		{ name: "Penguin", icon: "🐧" },
	];

	let selected_animals = ["Penguin"];
</script>

<h1>Favourite animals:</h1>

{#each animals as { name, icon }}
	<div>
		<input
			id={name}
			type="checkbox"
			value={name}
			bind:group={selected_animals} />

		<label for={name}>
			<span class="icon">{icon}</span>
			{name}
		</label>
	</div>
{/each}

<pre>{JSON.stringify(selected_animals, null, 2)}</pre>

{#if !selected_animals.includes('Penguin')}
	<h1>You seem to have deselected Penguin</h1>
	<h2>Must have been a misclick</h2>
{/if}

<style>
	div {
		height: 50px;
		display: flex;
		align-items: center;
	}

	h1,
	h2 {
		margin-left: 20px;
	}

	label {
		font-size: 30px;
	}

	.icon {
		margin-right: 10px;
	}

	input {
		margin: -5px 20px 0 20px;
	}

	pre {
		font-size: 2em;
	}
</style>
