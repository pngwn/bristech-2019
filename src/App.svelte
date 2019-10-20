<script>
	import { onMount } from "svelte";
	import { router } from "~router";
	import ImageDots from "./slides/_ImageDots.svelte";

	let component;

	const routes = {
		"/": async () => {
			component = (await import("./slides/01_Intro.svelte")).default;
			console.log(component);
		},
		"/dots": async () =>
			(component = (await import("./slides/_ImageDots.svelte")).default),
		"/actions": async () =>
			(component = (await import("./slides/Actions.svelte")).default),
	};

	onMount(() => router(routes));
</script>

<svelte:component this={component} />
