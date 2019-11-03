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
import Stores from "./slides/5/Stores.svelte";
import StoresCustom from "./slides/5/StoresCustom.svelte";

import Ebbinghaus from "./slides/1/Ebbinghaus.svelte";

import Sham from "./slides/1/Sham.svelte";
import HTMLStructure from "./slides/1/HTMLStructure.svelte";

import VirtualDom from "./slides/1/VirtualDom.svelte";

import ReactivityChalkboard from "./slides/2/ReactivityChalkboard.svelte";
import ReactivitySpreadsheet from "./slides/2/ReactivitySpreadsheet.svelte";
import ReactivityClock from "./slides/2/ReactivityClock.svelte";

export const routes = [
	// Part 1 - Intro
	// Part 2 - Updating the DOM
	// Part 3 - Reactivity
	["/", Intro],
	// Part 1 - Updating the DOM
	//["/1-shape-model", ShapeModel],
	["/1-sham", Sham],
	["/1-html-structure", HTMLStructure],
	["/1-ebbinghaus", Ebbinghaus],
	["/1-virtual-dom", VirtualDom],
	// Part 2 - Reactivity
	["/dots", ImageDots],
	["/2-reactivity-basics", ReactivityChalkboard],
	["/2-reactivity-spreadsheet", ReactivitySpreadsheet],
	["/2-reactivity-clock", ReactivityClock],
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
	["/5-stores", Stores],
	["/5-stores-custom", StoresCustom],
	// Outro - Resources and Me
];
