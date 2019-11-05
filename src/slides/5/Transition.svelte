<script>
	import Repl from "../../comp/Repl.svelte";
	import content from "../../samples/transition/";

	export let done;
	export const next = () => done();
</script>

<Repl {content} />
