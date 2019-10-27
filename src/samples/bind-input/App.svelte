<script>
	let text_value = "Hello";
	let number_value = 10;
	let date_value = "2019-10-05";
</script>

<div>

	<input bind:value={text_value} />
	<p>
		<code>{text_value}</code>
	</p>

	<input type="number" bind:value={number_value} />
	<p>
		<code>{number_value}</code>
	</p>

	<input type="date" bind:value={date_value} />
	<p>
		<code>{date_value}</code>
	</p>

</div>

<style>
	div {
		display: grid;
		grid-template-columns: 180px 1fr;
		grid-template-rows: repeat(3, 40px);
		grid-gap: 10px;
	}

	input {
		margin: 0;
	}

	p {
		display: flex;
		align-items: center;
		padding: 0;
		margin: 0;
	}

	code {
		display: flex;
		align-items: center;
		height: 100%;
		padding: 0 10px;
		border-radius: 3px;
		background: #333;
		color: #eee;
		font-size: 1.5em;
		font-weight: bold;
		box-sizing: border-box;
	}
</style>
