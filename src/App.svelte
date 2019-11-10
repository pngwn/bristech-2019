<script>
	import { fade } from "svelte/transition";
	import { onDestroy } from "svelte";
	import { router } from "~router";
	import { routes } from "./router_config.js";

	const { component, destroy, route, current } = router(routes);

	let steps;
	let step = 0;

	onDestroy(destroy);

	const next = () => {
		if (!steps || !steps[step]) {
			route(routes[current() + 1][0]);
			step = 0;
		} else {
			steps[step++]();
		}
	};

	$: console.log(step, steps);

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

<svelte:window use:on_right={next} />

<svelte:component this={$component} bind:steps />
