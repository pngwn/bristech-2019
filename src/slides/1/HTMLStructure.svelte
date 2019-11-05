<script>
	import { fly } from "svelte/transition";
	import { quintOut } from "svelte/easing";

	let visual;
	let dom;
	let html;

	const lines = [
		[["<h1>", "Hello!", "</h1>"], "h1"],
		[["<p>", "I am a paragraph!", "</p>"], "p"],
		[["<ul>", "", ""], "ul"],
		[["<li>", "Look!", "</ul>"], "li"],
		[["<li>", "a!", "</ul>"], "li"],
		[["<li>", "List!", "</ul>"], "li"],
		[["", "", "</ul>"], "ul"],
	];

	let lines_class = "";

	const node_lines = [
		`type: h1
children:
    type: text
    value: 'Hello!'
`,
		`type: p
children:
    type: text
    value: 'I am a paragraph!'
`,
		`type: ul
children:
`,
		`    type: li
    children:
        type: text
        value: 'Look!!'
`,
		`    type: li
    children:
      type: text
      value: 'A!'
`,
		`    type: li
    children:
        type: text
        value: 'List!'
`,
	];

	$: filtered_lines = lines.filter(v => v[3]);

	$: visual_lines = lines.map(([p, e]) => [["", p[1], ""], e]);

	$: html_lines = visual_lines;

	export let done;

	let current = 0;
	const move = [
		() => (visual = true),
		() => (html = true),
		() => (dom = true),
		() => (lines_class = "with-lines"),
		() => done(),
	];
	export const next = () => move[current++]();
</script>

<div class="container">
	<div class="grid-underlay {lines_class}">
		{#if visual}
			<div in:fly={{ y: 200 }} class="document visual {lines_class}">

				{#each visual_lines as [parts, el]}
					<div class="line {el}">
						<span>
							{#each parts as p, i}
								{#if p !== ''}
									<span class="part_{i}">{p}</span>
								{/if}
							{/each}
						</span>
					</div>
				{/each}

			</div>
		{/if}

		{#if html}
			<div in:fly={{ y: 200 }} class="document html {lines_class}">
				{#each lines as [parts, el]}
					<div class="line {el}">
						<span>
							{#each parts as p, i (i)}
								<span class="part_{i}">{p}</span>
							{/each}
						</span>
					</div>
				{/each}
			</div>
		{/if}

		{#if dom}
			<div in:fly={{ y: 200 }} class="document {lines_class}">
				{#each node_lines as n}
					<div class="line">
						<span>
							<pre>{n}</pre>
						</span>
					</div>
				{/each}
				<div class="line" />
			</div>
		{/if}
	</div>
</div>

<style>
	.container {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		width: 100vw;
		height: 100vh;
		background: #222;
	}

	.grid-underlay {
		display: grid;
		grid-template-rows: 1fr;
		grid-template-columns: repeat(3, 1fr);
		grid-gap: 1px;
		transition: 0.5s;
	}

	.with-lines {
		background: cadetblue;
	}

	.document {
		display: grid;
		grid-template-rows: repeat(7, 1fr);
		grid-gap: 1px;
		font-size: 3rem;
		font-family: "Fira Mono";
		color: #eee;
		height: 100vh;
		transition: 0.5s;
	}

	.line {
		padding: 0 30px;
		background: #222;
		display: flex;
		justify-content: center;
		flex-direction: column;
	}

	.visual {
		font-family: "Lato";
	}

	.visual .h1 {
		font-weight: 1000;
		font-size: 7rem;
	}

	.li > span::before {
		content: "•";
		margin-right: 20px;
	}

	/* .html > .li {
		padding-left: 100px;
	} */

	.html > .li > span::before {
		content: "";
		margin-right: 75px;
	}

	.part_0,
	.part_2 {
		color: cyan;
	}
</style>
