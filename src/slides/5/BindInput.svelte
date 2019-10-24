<script>
	let text_value = "Hello";
	let number_value = 10;
	let date_value = "2019-10-05";
</script>

<input bind:value={text_value} />
<p>Current: {text_value}</p>

<br />

<input type="number" bind:value={number_value} />
<p>Current: {number_value}</p>

<br />

<input type="date" bind:value={date_value} />
<p>Current: {date_value}</p>

<style>
	p {
		display: inline;
		margin-left: 20px;
	}

	input {
		width: 180px;
	}
</style>
