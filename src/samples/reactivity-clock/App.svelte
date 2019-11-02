<script>
	import { onMount } from "svelte";
	import Clock from "./Clock.svelte";

	let time = new Date();
	let hours, minutes, seconds;

	hours = time.getHours();
	minutes = time.getMinutes();
	seconds = time.getSeconds();

	onMount(() => {
		const interval = setInterval(() => {
			time = new Date();
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	});
</script>

<Clock {hours} {minutes} {seconds} />
