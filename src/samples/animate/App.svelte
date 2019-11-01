<script>
	import {
		make_list,
		add_random,
		remove_random,
		shuffle_list,
	} from "./list.js";

	let list = make_list();
	let id = list[0] + 1;

	const add = () => (list = add_random(list, id++));
	const remove = () => (list = remove_random(list));
	const reverse = () => (list = list.reverse());
	const shuffle = () => (list = shuffle_list(list));
	const rotate = () => (list = list.slice(1).concat(list[0]));
</script>

<div class="controls">
	<button on:click={add}>Add</button>
	<button on:click={remove}>Remove</button>
	<button on:click={rotate}>Rotate</button>
	<button on:click={reverse}>Reverse</button>
	<button on:click={shuffle}>Shuffle</button>
</div>

<div class="container">
	{#each list as key (key)}
		<div class="item">{key}</div>
	{/each}
</div>

<style>
	.controls {
		height: 75px;
		display: grid;
		grid-gap: 5px;
		grid-template-columns: repeat(5, 1fr);
	}
	.container {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		grid-template-rows: repeat(5, 1fr);
		grid-gap: 5px;
		width: 100%;
		height: calc(100% - 75px);
	}

	.item {
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 4px;
		background: cadetblue;
		font-size: 30px;
		font-weight: bold;
		color: #fff;
	}
</style>
