import Intro from "./slides/01_Intro.svelte";
import ImageDots from "./slides/_ImageDots.svelte";
import Basics from "./slides/5/Basics.svelte";
import LogicEach from "./slides/5/LogicEach.svelte";
import LogicIf from "./slides/5/LogicIf.svelte";
import LogicAwait from "./slides/5/LogicAwait.svelte";
import Events from "./slides/5/Events.svelte";
import BindInput from "./slides/5/BindInput.svelte";
import BindInputExample from "./slides/5/BindInputExample.svelte";
import BindGroup from "./slides/5/BindGroup.svelte";
import BindComponent from "./slides/5/BindComponent.svelte";
import BindMedia from "./slides/5/BindMedia.svelte";
import Actions from "./slides/5/Actions.svelte";

export const routes = [
	// Part 1 - Intro
	// Part 2 - Updating the DOM
	// Part 3 - Reactivity
	// Part 4 - Who Cares?
	["/", Intro],
	["/dots", ImageDots],

	// Part 5 - Svelte API
	["/5-basics", Basics],
	["/5-logic-if", LogicEach],
	["/5-logic-each", LogicIf],
	["/5-logic-await", LogicAwait],
	["/5-events", Events],
	["/5-bind-input", BindInput],
	["/5-bind-input-example", BindInputExample],
	["/5-bind-group", BindGroup],
	["/5-bind-component", BindComponent],
	["/5-bind-media", BindMedia],
	["/5-actions", Actions],

	// Outro - Resources and Me
];
