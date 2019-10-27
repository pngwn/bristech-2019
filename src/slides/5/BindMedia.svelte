<script>
	import Repl from "../../comp/Repl.svelte";
	import content from "../../samples/bind-media/";

	export let done;
	export const next = () => done();
</script>

<Repl {content} />
