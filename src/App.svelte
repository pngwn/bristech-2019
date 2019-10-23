<script>
	import { onDestroy } from "svelte";
	import { router } from "~router";
	import { routes } from "./router_config.js";

	const { component, destroy } = router(routes);

	onDestroy(destroy);
</script>

<svelte:component this={$component} />
