<script>
	import { fly, fade } from "svelte/transition";
	import Editor from "../../comp/Editor.svelte";
	import VDOM from "../../comp/VDOM.svelte";

	let heading = "Hello friends";
	let paragraph = "I am a document.";
	let list = "Look\na list";
	let clicks = 0;

	$: list_length = list.split("\n").length;

	export const steps = false;
</script>

<div class="container">
	<div class="box">
		<div in:fly={{ delay: 200, y: 200, duration: 500 }}>
			<Editor bind:heading bind:paragraph bind:list bind:clicks />
		</div>

		<div in:fly={{ delay: 400, x: 1000 }}>
			<VDOM {heading} {paragraph} {list} {clicks} />
		</div>
	</div>
</div>

<style>
	.container {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		height: 100vh;
		width: 100vw;
		background: #333;
		overflow: hidden;
	}
	.box {
		display: grid;
		grid-template-columns: 40% 60%;
		width: 70%;
		height: 80%;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		margin: auto;
	}
</style>
