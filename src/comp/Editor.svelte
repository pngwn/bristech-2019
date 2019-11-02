<script>
	import { text_area_resize } from "./autoresize.js";

	export let heading = "Heading";
	export let paragraph = "Hello friends. I am a document!";
	export let list = "This\nis\na list";
	export let clicks = 0;

	$: list_length = list.split("\n").length;
</script>

<div>

	<input class="heading" bind:value={heading} />

	<!-- <textarea class="paragraph" bind:value={paragraph} /> -->
	<div class="list-container">
		<textarea use:text_area_resize class="list" bind:value={list} />
		<div class="bullets">
			{#each { length: list_length } as _, i}
				<span />
				•
			{/each}
		</div>
	</div>
	<button class="button" on:click={() => clicks++}>Click</button>
</div>

<style>
	.heading,
	.list,
	.button {
		display: block;
		font-family: "Lato";
		font-size: 3.5rem;
	}

	.heading,
	.list {
		width: 100%;
		border: none;
		resize: none;
		outline: none;
		background: none;
		color: #eee;
	}

	.heading {
		font-size: 4rem;
		margin-bottom: 0rem;
		font-weight: bold;
		margin-top: 50px;
	}

	.list-container {
		position: relative;

		margin-top: 20px;
		padding-left: 35px;
	}

	.list {
		height: 140px;
	}

	.bullets {
		position: absolute;
		display: grid;
		height: calc(100%);
		top: 5px;
		left: 5px;
		color: #eee;
		font-size: 3.5rem;
	}

	.button {
		font-size: 3.5rem;
		margin-top: 40px;
		background: #eee;
		color: #333;
		border-radius: 4px;
		padding: 5px 8px;
	}
</style>
