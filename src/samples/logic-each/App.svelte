<script>
	let is_penguin;
</script>

<style>
	:global(body) {
		text-align: center;
	}
</style>

<h1>Are you a penguin?</h1>
<button on:click={() => (is_penguin = true)}>Yes</button>
<button on:click={() => (is_penguin = false)}>No</button>

{#if is_penguin === undefined}
	<h2>It isn't a difficult question. Click something.</h2>
{:else if is_penguin}
	<h2>Welcome Friend!</h2>
{:else}
	<h2>Shame.</h2>
{/if}
