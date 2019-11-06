<script>
	import { fade } from "svelte/transition";
	import { onDestroy } from "svelte";
	import { router } from "~router";
	import { routes } from "./router_config.js";

	const { component, destroy, route, current } = router(routes);

	let comp;

	onDestroy(destroy);

	const done = () => route(routes[current() + 1][0]);

	const on_right = (node, cb) => {
		const handle_down = ({ which }) => {
			if (which === 39) cb();
		};

		node.addEventListener("keydown", handle_down);

		return {
			destroy: () => {
				node.removeEventListener("keydown", handle_down);
			},
		};
	};
</script>

<svelte:window use:on_right={() => comp.next()} />

<svelte:component this={$component} bind:this={comp} {done} />
