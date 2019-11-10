<script>
	import Spreadsheet from "../../comp/Spreadsheet.svelte";
	let checked = false;

	export const steps = false;
</script>

<div class="container">
	<div class="spreadsheet">
		<Spreadsheet rows={5} cols={4} bind:connections={checked} />
	</div>

	<div class="button">
		<label for="spread_box">
			Show
			<span style="color: lime">inputs</span>
			and
			<span style="color: violet">outputs</span>
		</label>
		<input id="spread_box" type="checkbox" bind:checked />
	</div>
</div>

<style>
	.container {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		margin: auto;
		width: 60%;
		height: calc(8em * 5 + 4px);
		display: flex;
		flex-direction: column;
	}

	.spreadsheet {
		height: calc(100% - 40px);
	}

	label {
		color: #fff;
		font-family: var(--font);
	}

	.button {
		width: 100%;
		background: #222;
		padding: 10px;
		margin-top: 10px;
		border-radius: 5px;
		font-size: 2rem;
	}

	input {
		transform: translate(10px, -2px);
	}
</style>
