<script>
	/* prettier-ignore */
	import { onMount } from "svelte";
	import Repl from "@sveltejs/svelte-repl";

	export let content;

	let repl;

	onMount(() => {
		repl.set({
			components: content,
		});
	});
</script>

<div class="viewport" on:keydown|stopPropagation>
	<Repl
		bind:this={repl}
		workersUrl="workers"
		svelteUrl="PACKAGE_URL"
		packagesUrl="/packages/"
		relaxed={true} />
</div>

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
