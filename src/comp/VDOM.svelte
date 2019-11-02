<script>
	import { onMount, afterUpdate, tick } from "svelte";

	export let heading;
	export let list;
	export let clicks;

	$: list_parts = list.split("\n");

	let _list = list.split("\n");
	let _heading = heading;
	let _clicks = clicks;
	let changing;
	let timer;
	let h1;
	let h2;

	afterUpdate(async () => {
		if (timer) {
			clearTimeout(timer);
			timer = false;
		}

		timer = setTimeout(() => {
			_heading = heading;
			_clicks = clicks;
			_list = list_parts.slice();
		}, 3000);
	});

	const transition = cb => node => {
		cb(node);

		return {
			delay: 0,
			duration: 5000,
			easing: x => x,
			css: x => "",
		};
	};

	const remove = transition(node => {
		changing = true;
		node.children[1].children[0].children[0].style.transition = "0s";
		node.children[1].style.borderColor = "#fff";

		node.style.color = "white";
		node.style.transition = "0.5s";
		node.style.background = "crimson";
		node.style.borderRadius = "3px";
	});

	const add = transition(node => {
		changing = true;
		node.children[1].style.transition = "0.5s";
		node.style.transition = "0.5s";
		node.style.background = "lightgreen";
		node.style.borderRadius = "3px";

		setTimeout(() => {
			changing = false;
			node.children[1].children[0].children[0].style.transition = "0.5";
			node.style.background = "none";
		}, 5000);
	});
</script>

<div class="container" style="height: {h1 + h2 + 60}px">
	<span class="root" bind:offsetHeight={h1}>
		element
		<span class="element">div</span>
	</span>
	<ul bind:offsetHeight={h2}>
		<li class="whatever">
			children
			<ul>
				<li class="el">
					element
					<span class="element">h1</span>
					<ul>
						<li>className: "verybig"</li>
						<li>
							children
							<ul>
								<li>
									text:
									<span class:changed={heading !== _heading}>"{heading}"</span>
								</li>
							</ul>

						</li>
					</ul>
				</li>
				<li class="el">
					element
					<span class="element">ul</span>
					<ul>

						{#each list_parts as l, i}
							<li in:add|local out:remove|local>
								<span class="element" element>li</span>
								<ul>
									<li>
										text:
										<span
											class:changed={!changing && list_parts[i] !== _list[i]}>
											"{l}"
										</span>
									</li>
								</ul>
							</li>
						{/each}

					</ul>
				</li>
				<li>
					element
					<span class="element">button</span>
					<ul>
						<li>
							clicks:
							<span class:changed={clicks !== _clicks}>{clicks}</span>
						</li>
					</ul>
				</li>

			</ul>
		</li>
	</ul>
</div>

<style>
	.container {
		border-radius: 5px;
		background: #fff;
		margin: 30px;
		padding: 20px 30px;
		font-size: 1.3rem;
		font-family: "Fira Mono";
		font-size: 2rem;
	}

	ul {
		margin: 0;
		padding: 0;
		list-style: none;
		border-left: 1px solid #000;
	}

	li {
		margin: 0.5rem 1rem;
	}

	.whatever {
		margin: 2rem;
	}

	ul > li > ul > li > ul > li {
		margin: 0.4rem 1rem;
		padding: 0.7rem 0.5rem;
	}

	ul > li > ul > li > ul > li > ul > li {
		margin: 1rem 1rem;
		padding: 0;
	}

	ul ul ul {
		margin: 10px;
		padding: 0;
	}

	ul ul ul > li {
		margin: 0.2rem 0;
		padding: 0;
	}

	.el {
		margin: 1rem 1rem;
	}

	.element {
		background: #ddd;
		padding: 3px 8px;
		border-radius: 2px;
		color: #000;
	}

	.root {
		margin-left: -10px;
	}

	span {
		transition: 0.5s;
		padding: 0 5px;
	}

	.changed {
		background: darkorange !important;
		color: #fff;
	}
</style>
