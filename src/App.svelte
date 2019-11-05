<script>
	import { onDestroy } from "svelte";
	import { router } from "~router";
	import { routes } from "./router_config.js";

	const { component, destroy, route, current } = router(routes);

	let comp;

	onDestroy(destroy);

	const done = () => route(routes[current() + 1][0]);

	const cmd_k = (node, cb) => {
		// let cmd = false;

		const handle_down = ({ which }) => {
			if (which === 39) cb();
			// if (which === 91) cmd = true;
			// if (cmd && which === 75) cb();
		};

		// const handle_up = ({ which }) => {
		// 	if (which === 91) cmd = false;
		// };

		node.addEventListener("keydown", handle_down);
		// node.addEventListener("keyup", handle_up);

		return {
			destroy: () => {
				node.removeEventListener("keydown", handle_down);
				// node.removeEventListener("keyup", handle_up);
			},
		};
	};
</script>

<svelte:window use:cmd_k={() => comp.next()} />

<svelte:component this={$component} bind:this={comp} {done} />
