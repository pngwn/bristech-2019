<script>
	let done = false;
	let error = false;

	let promise = new Promise((res, rej) => {
		const timer = setInterval(() => {
			if (done) {
				clearInterval(timer);
				res("oh hello there!");
			} else if (error) {
				rej("rejected again...");
			}
		}, 10);
	});
</script>

{#await promise}
	<h1>Hi...</h1>
{:then data}
	<h1>{data}</h1>
{:catch error}
	<h1>{error}</h1>
{/await}

<button on:click={() => (done = true)}>Resolve</button>
<button on:click={() => (error = true)}>Reject</button>
