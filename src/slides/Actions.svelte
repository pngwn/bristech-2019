<script>
	/* prettier-ignore */
	import { onMount } from "svelte";
	import Repl from "@sveltejs/svelte-repl";

	import content from "../samples/actions/";

	let repl;

	onMount(() => {
		repl.set({
			components: content,
		});
	});
</script>

<style>
	:global(body) {
		background: #333;
	}

	.viewport {
		width: 90%;
		height: 90%;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		margin: auto;
		background: #fff;
		border-radius: 5px;
		box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.2);
		overflow: hidden;
	}

	.viewport :global(.tab-content),
	.viewport :global(.tab-content.visible) {
		pointer-events: all;
		opacity: 1;
	}
	.viewport :global(.tab-content) {
		visibility: hidden;
	}
	.viewport :global(.tab-content.visible) {
		visibility: visible;
	}
</style>

<div class="viewport">
	<Repl bind:this={repl} workersUrl="workers" />
</div>
