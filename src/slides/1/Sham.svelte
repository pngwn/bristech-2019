<script>
	import { fly, fade, scale } from "svelte/transition";
	import { flip } from "svelte/animate";
	import {
		TriangleIcon,
		SquareIcon,
		HexagonIcon,
		RefreshCwIcon,
	} from "svelte-feather-icons";

	let id = 0;
	let shapes = [
		{ comp: TriangleIcon, color: "white", id: id++ },
		{ comp: SquareIcon, color: "darkorange", id: id++ },
		{ comp: HexagonIcon, color: "lime", id: id++ },
	];

	let shapes_pos = { x: 0, y: 0 };
	let sham_pos = { x: 0, y: -300 };
	let show_sham = false;
	let sham_letters = "ShapeManager"
		.split("")
		.map((v, i) => ({ l: v, id: id++ }));
	let sham_width = 700;
	let sham_obj_show = false;
	let sham_obj = [
		["Triangle", "White", id++, ""],
		["Square", "Orange", id++, ""],
		["Hexagon", "Green", id++, ""],
	];

	let show_v_sham = false;
	let v_sham_pos = { x: 0 - (sham_width / 2 - 150), y: -300 };
	let v_sham_obj = [
		["Triangle", "White", id++],
		["Hexagon", "Magenta", id++],
		["Hexagon", "Green", id++],
	];
	let sync = { show: false, p: -120, r: 0 };
	let sync_status = "";

	const timer = delay => new Promise(res => setTimeout(res, delay));

	const letter_in = (node, { delay }) => ({
		delay,
		duration: 0,
		css: t => `opacity: ${t};`,
	});

	let w;

	export const steps = [
		() => {
			shapes_pos.y = 300;
			show_sham = true;
		},
		async () => {
			sham_letters = [
				{ l: "S", id: 3 },
				{ l: "h", id: 4 },
				{ l: "a", id: 5 },
				{ l: "M", id: 8 },
			];
			await timer(800);
			sham_width = 300;
		},
		() => (sham_obj_show = true),
		() => (sham_obj[1] = ["Hexagon", "Magenta", id++]),
		() => (shapes[1] = { comp: HexagonIcon, color: "magenta", id: id++ }),
		async () => {
			sham_pos.x = sham_width / 2 + 50;
			await timer(1000);
			show_v_sham = true;
		},
		() => {
			v_sham_obj[0] = ["Hexagon", "Green", id++];
			v_sham_obj[2] = ["Hexagon", "Magenta", id++];
		},
		() => (sync.show = true),
		async () => {
			sync.r += 720;
			await timer(5000);
			sync_status = "dirty";
		},
		() => (sham_obj[0][3] = "change"),
		async () => {
			sync.p = -20;
			await timer(5000);
			sync.r += 720;
			await timer(5000);
			sync_status = "match";
		},
		() => (sham_obj[1][3] = "same"),
		async () => {
			sync.p = 85;
			await timer(5000);
			sync.r += 720;
			await timer(5000);
			sync_status = "patch";
		},
		() => {
			sham_obj[2][3] = "edit";
			sync.show = false;
		},
		() => {
			sham_obj[0] = ["Hexagon", "Green", id++, ""];
			sham_obj[1][3] = "";
			sham_obj[2][1] = "Magenta";
			sham_obj[2][3] = "";
		},
		() => (shapes[0] = { comp: HexagonIcon, color: "limegreen", id: id++ }),
		() => (shapes[2].color = "magenta"),

		// oh boy
	];
</script>

<svelte:window bind:innerWidth={w} />

<div class="container" out:fly={{ x: 0 - w, duration: 1000 }}>
	{#if show_sham}
		<div
			in:fly={{ y: 300 }}
			class="glowybox sham"
			style="transform:translate({sham_pos.x}px, {sham_pos.y}px); width: {sham_width}px;">
			{#each sham_letters as { l, id }, i (id)}
				<span
					animate:flip={{ duration: 400, delay: 200 }}
					in:letter_in={{ delay: i * 150 + 500 }}
					out:fly>
					{l}
				</span>
			{/each}
		</div>
	{/if}

	{#if sham_obj_show}
		<div
			in:fly={{ y: 300 }}
			class="glowybox sham_obj"
			style="transform:translate({sham_pos.x}px, {sham_pos.y + 280}px); width: {sham_width}px;
			height: 370px;">
			{#each sham_obj as [shape, color, key, change], i (key)}
				<div out:fly in:fly={{ delay: 500 }} class="obj_{i} {change}">
					<div>
						Shape:
						<span class="val">{shape}</span>
					</div>
					<div class="prop">
						Color:
						<span class="val">{color}</span>
					</div>
				</div>
			{/each}

		</div>
	{/if}

	{#if show_v_sham}
		<div
			in:fly={{ y: 300 }}
			class="glowybox sham"
			style="transform:translate({v_sham_pos.x}px, {v_sham_pos.y}px); width: {sham_width}px;">
			<span>vShaM</span>
		</div>
	{/if}

	{#if show_v_sham}
		<div
			in:fly={{ y: 300 }}
			class="glowybox sham_obj"
			style="transform:translate({v_sham_pos.x}px, {v_sham_pos.y + 280}px);
			width: {sham_width}px; height: 370px;">
			{#each v_sham_obj as [shape, color, key], i (key)}
				<div out:fly in:fly={{ delay: 500 }} class="obj_{i}">
					<div>
						Shape:
						<span class="val">{shape}</span>
					</div>
					<div>
						Color:
						<span class="val">{color}</span>
					</div>
				</div>
			{/each}
		</div>
	{/if}

	{#if sync.show}
		<span
			transition:fade
			class="icon"
			style="transform:translateY({sync.p}px);">
			<span
				class={sync_status}
				style="display:block; transform: rotate({sync.r}deg);">
				<RefreshCwIcon />
			</span>
		</span>
	{/if}

	<div
		class="shapes glowybox"
		style="transform:translate({shapes_pos.x}px, {shapes_pos.y}px)">
		{#each shapes as { comp, color, id }, i (id)}
			<span
				out:scale={{ duration: 750 }}
				in:scale={{ duration: 750, delay: 1000 }}
				style="color:{color}"
				class="shape_{i}">
				<svelte:component this={comp} />
			</span>
		{/each}
	</div>

</div>

<style>
	.container {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		height: 100vh;
		width: 100vw;
		background: #333;
	}

	.glowybox {
		padding: 30px;
		border-radius: 5px;
		border: 1px solid cyan;
		background: #222;
		box-shadow: 0 0 5px 3px rgba(255, 255, 255, 0.1);
	}

	.shapes {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		margin: auto;
		width: 700px;
		height: 200px;
		display: flex;
		justify-content: center;
		transition: 0.5s;
	}

	.shape_1 {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		margin: auto;
		height: 150px;
		width: 150px;
	}

	.shape_0 {
		position: absolute;
		top: 0;
		left: 30px;
		bottom: 0;
		margin: auto;
		height: 150px;
		width: 150px;
	}

	.shape_2 {
		position: absolute;
		top: 0;
		right: 30px;
		bottom: 0;
		margin: auto;
		right: 30px;
		height: 150px;
		width: 150px;
	}

	.sham {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		margin: auto;
		height: 130px;
		display: flex;
		justify-content: center;
		transition: 0.4s;
	}

	.sham span {
		font-size: 8rem;
		color: #fff;
		font-family: Lato;
		margin-top: -12px;
		font-weight: 1000;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.sham_obj {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		margin: auto;
		color: #fff;
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 2.3rem;
		flex-direction: column;
		text-align: left;
		font-family: "Fira Mono";
		transition: 0.4s;
	}

	.sham_obj > div {
		width: 270px;
		padding: 20px;
		border-radius: 5px;
		transition: 0.5s;
		border: 1px solid transparent;
	}

	.sham_obj > div > div {
		padding: 3px 5px;
		border-radius: 3px;
		border: 1px solid transparent;
		transition: 0.5s;
	}

	.sham_obj > div.obj_0 {
		position: absolute;
		top: 30px;
	}

	.sham_obj > div.obj_1 {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		margin: auto;
		height: 114px;
	}

	.sham_obj > div.obj_2 {
		position: absolute;
		bottom: 30px;
	}
	.sham_obj .val {
		color: cyan;
	}

	.icon {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		margin: auto;
		width: 40px;
		height: 40px;
		color: white;
		transition: 5s;
		transform-origin: 50% calc(50% - 120px);
	}

	.icon > span {
		transition: 5s;
		width: 40px;
		height: 40px;
		animation-duration: 0.5s;
		animation-direction: alternate;
		animation-iteration-count: 5;
	}

	.dirty {
		animation-name: dirty;
	}
	.match {
		animation-name: match;
	}

	.patch {
		animation-name: patch;
	}

	.change {
		border: 1px solid orangered !important;
		background: #0f0f0f;
	}

	.same {
		opacity: 0.5;
	}

	.prop {
		border: 1px solid transparent !important;
	}
	.edit .prop {
		border: 1px solid yellow !important;
		background: #0f0f0f;
	}

	.shape_1 :global(svg path),
	.shape_2 :global(svg path),
	.shape_3 :global(svg path),
	.shape_1 :global(svg rect),
	.shape_2 :global(svg rect),
	.shape_3 :global(svg rect) {
		transition: 0.5s;
	}

	@keyframes match {
		from {
			color: #fff;
		}

		to {
			color: limegreen;
		}
	}

	@keyframes patch {
		from {
			color: #fff;
		}

		to {
			color: yellow;
		}
	}

	@keyframes dirty {
		from {
			color: #fff;
		}

		to {
			color: crimson;
		}
	}
</style>
