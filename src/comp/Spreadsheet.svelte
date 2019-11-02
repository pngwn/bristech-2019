<script>
	import { tick, onMount } from "svelte";
	import { draw } from "svelte/transition";
	import * as calc from "./calc.js";

	const arr = [12, 13, 15, 16, 24, 15, 22, 10, 9, 13, 13, 18, 16, 25, 23, 24];
	for (const key in calc) {
		console.log(key, ": ", calc[key](arr));
	}
	export let rows = 5;
	export let cols = 5;
	export let connections = false;

	let cell_input = Array(rows)
		.fill(0)
		.map(_ =>
			Array(cols)
				.fill(0)
				.map(v => ({
					input: "",
					value: "",
					formula: false,
					editing: false,
					focused: false,
					el: null,
					inputs: [],
					outputs: [],
				})),
		);

	$: gridRows = `grid-template-rows: repeat(${rows}, 1fr);`;
	$: gridCols = `grid-template-columns: repeat(${cols},1fr);`;
	$: not_editing = cell_input.every(r => r.every(c => c.editing === false));

	const is_formula = str => str.match(/^=([^]+)$/);
	const is_function = f => f.match(/^([a-zA-Z]+)\((.+)\)$/);
	const base_code = "a".charCodeAt(0);
	const handle_formula = (f, _i, _j) => {
		let _vals = is_function(f);
		if (_vals) {
			let [, fn, cells] = _vals;
			cells = cells.split(",").map(cs =>
				cs.split(":").map(c => {
					const [, col, row] = c.match(/^([a-zA-Z+])([0-9+])/);
					return [col.toLowerCase().charCodeAt(0) - base_code, +row - 1];
				}),
			);

			let vals = [];
			let inputs = [];
			let outputs = [];

			cells.forEach(([[col_start, row_start], [col_end, row_end]]) => {
				outer: for (let i = row_start; i <= row_end; i += 1) {
					inner: for (let j = col_start; j <= col_end; j += 1) {
						if (cell_input[i][j].value === "") continue inner;
						const cell_val = +cell_input[i][j].value;
						if (isNaN(cell_val)) throw new Error("NUMBERS ONLY");
						vals.push(cell_val);
						inputs.push(cell_input[i][j].el);
						outputs.push([i, j, cell_input[_i][_j].el]);
					}
				}
			});

			return [calc[fn](vals), inputs, outputs];
		}
	};

	const process_field = (i, j) => {
		const input = cell_input[i][j].input;
		let formula;
		if (input === "") {
			return;
		} else if (!isNaN(+input)) {
			cell_input[i][j].formula = false;
			cell_input[i][j].value = +input;
		} else if (!(formula = is_formula(input, i, j))) {
			cell_input[i][j].formula = false;
			cell_input[i][j].value = input;
		} else {
			cell_input[i][j].formula = `=${formula[1]}`;
			const [newVal, inputs, outputs] = handle_formula(formula[1], i, j);
			cell_input[i][j].value = newVal;
			cell_input[i][j].inputs = inputs;
			outputs.forEach(([_i, _j, el]) => cell_input[_i][_j].outputs.push(el));
			cell_input = cell_input;
		}
	};

	const process_fields = (i, j) => {
		cell_input.forEach((c, i) =>
			c.forEach((_, j) => (cell_input[i][j].outputs = [])),
		);
		cell_input[i][j].focused = false;
		cell_input.forEach((c, i) => c.forEach((_, j) => process_field(i, j)));
		console.log(cell_input);
	};

	const handle_click = (e, i, j) => {
		cell_input.forEach((c, i) =>
			c.forEach((_, j) => (cell_input[i][j].focused = false)),
		);
		row = i;
		col = j;
		cell_input[i][j].focused = true;
	};

	const handle_dblclick = (e, i, j) => {
		cell_input.forEach((c, i) =>
			c.forEach((_, j) => (cell_input[i][j].editing = false)),
		);
		cell_input[i][j].editing = true;
		process_fields(i, j);
	};

	const handle_input = ({ target, key }, i, j) => {
		if (key !== "Enter") return;
		cell_input[i][j].editing = false;
		process_fields(i, j);
	};

	let row = 0;
	let col = 0;
	let container;

	const make_coords = (base, self) => ({
		x: self.x - base.x + self.width / 2,
		y: self.y - base.y + self.height / 2,
	});

	const make_path = (start, end, flip = false) =>
		`M${start.x}, ${start.y} A 600 600 45 0 ${flip ? 1 : 0} ${end.x}, ${end.y}`;

	const make_drawing = (base, from, to, color, flip) => {
		const start = make_coords(base, from);
		const end = make_coords(base, to);

		return {
			start: { ...start, color },
			path: { d: make_path(start, end, flip), color },
			end: { ...end, color },
		};
	};

	function get_parts({ el, inputs, outputs }) {
		const _inputs = inputs.filter(v => !!v);
		const _outputs = outputs.filter(v => !!v);

		if (!container || (!_inputs.length && !_outputs.length)) return [];

		const base = container.getBoundingClientRect();
		const self = el.getBoundingClientRect();

		return [
			..._inputs.map(el =>
				make_drawing(base, self, el.getBoundingClientRect(), "lime"),
			),
			..._outputs.map(el =>
				make_drawing(base, self, el.getBoundingClientRect(), "violet", true),
			),
		];
	}

	$: current = get_parts(cell_input[row][col]);

	onMount(() => {
		let i = 0;
		cell_input[0] = cell_input[0].map(v => ({
			...v,
			input: ~~(Math.random() * 100) + 1,
		}));
		cell_input[1] = cell_input[1].map(v => ({
			...v,
			input: ~~(Math.random() * 100) + 1,
		}));
		cell_input[2] = cell_input[2].map(v => ({
			...v,
			input: ~~(Math.random() * 100) + 1,
		}));
		cell_input[0][3].input = "=sum(a1:c1)";
		cell_input[1][3].input = "=sum(a2:c2)";
		cell_input[2][3].input = "=sum(a3:c3)";
		cell_input[3][3].input = "=sum(d1:d3)";
		process_fields(0, 0);
	});
</script>

<div class="container" style={gridCols + gridRows} bind:this={container}>

	<div class="row_id" style={gridRows}>
		{#each cell_input as r, i}
			<span>{i + 1}</span>
		{/each}
	</div>

	<div class="col_id" style={gridCols}>
		{#each cell_input[0] as c, i}
			<span>{String.fromCharCode(base_code + i).toUpperCase()}</span>
		{/each}
	</div>

	{#if connections && not_editing}
		<svg>
			<g>
				{#each current as { start, path, end } (start)}
					<circle cx={start.x} cy={start.y} r="6" fill={start.color} />
					<circle cx={end.x} cy={end.y} r="6" fill={end.color} />
					<path
						in:draw
						d={path.d}
						stroke={path.color}
						stroke-width="3"
						fill="none" />
				{/each}
			</g>
		</svg>
	{/if}

	{#each cell_input as row, i (i)}
		{#each row as { value, formula, editing, focused }, j (j)}
			<div
				class:last={i + 1 === cell_input.length || j + 1 === row.length}
				class:focus={focused}
				on:click={e => handle_click(e, i, j)}
				on:dblclick={e => handle_dblclick(e, i, j)}
				bind:this={cell_input[i][j].el}
				class="cell">
				{#if editing}
					<input
						autofocus
						on:input={({ target }) => (cell_input[i][j].input = target.value)}
						on:keypress={e => handle_input(e, i, j)}
						class="input"
						value={formula ? formula : value} />
				{/if}

				<span class="display">{value}</span>
			</div>
		{/each}
	{/each}
</div>

<style>
	:global(body) {
		background: #000;
	}
	.container {
		position: relative;
		font-size: 2rem;
		width: 100%;
		height: 100%;
		display: grid;
		grid-gap: 1px;
		background: darkorange;
		border: 1px solid darkorange;
		border-radius: 2px;
	}

	.cell {
		background: #222;
		display: flex;
		color: #eee;
		padding: none;
		outline: none;
		position: relative;
	}

	.display,
	.input {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		width: 100%;
		height: 100%;
		margin: 0;
		display: flex;
		align-items: center;
		font-size: 2.2rem;
		font-family: var(--font);
	}

	.display {
		box-sizing: border-box;
		padding: 0 calc(3px + 1.8rem);
		z-index: 1;
		user-select: none;
		justify-content: flex-end;
	}

	.input {
		border: 3px solid darkorange;
		padding: 0 0.5rem;
		border-radius: 0;
		background: #eee;
		color: #333;
		z-index: 2;
		outline: none;
	}

	.focus {
		outline: none;
		border: 3px solid darkorange;
	}

	.last {
		font-weight: bold;
	}

	.last .display {
		font-size: 3rem;
	}

	svg {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		width: 100%;
		height: 100%;
		z-index: 9;
		pointer-events: none;
		overflow: visible;
	}

	.row_id,
	.col_id {
		position: absolute;
		display: grid;
		color: #eee;
		font-size: 2rem;
		font-family: var(--font);
	}

	.row_id span {
		display: flex;
		align-items: center;
	}

	.col_id span {
		display: flex;
		justify-content: center;
	}

	.row_id {
		height: 100%;
		width: 50px;
		left: -50px;
	}

	.col_id {
		height: 50px;
		width: 100%;
		top: -50px;
	}
</style>
