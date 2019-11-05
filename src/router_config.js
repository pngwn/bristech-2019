import Intro from "./slides/01_Intro.svelte";
import ImageDots from "./slides/_ImageDots.svelte";
import RandomDots from "./slides/_RandomDots.svelte";

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
import Transition from "./slides/5/Transition.svelte";
import Animate from "./slides/5/Animate.svelte";
import Tweened from "./slides/5/Tweened.svelte";
import Ebbinghaus from "./slides/5/Ebbinghaus.svelte";
import Spring from "./slides/5/Spring.svelte";

import Follow from "./slides/5/Follow.svelte";
import Cards from "./slides/5/Cards.svelte";

import Stores from "./slides/5/Stores.svelte";
import StoresCustom from "./slides/5/StoresCustom.svelte";

import History from "./slides/0/History.svelte";
import Misha from "./slides/0/Misha.svelte";

import Title from "./slides/0/Title.svelte";

import Sham from "./slides/1/Sham.svelte";
import HTMLStructure from "./slides/1/HTMLStructure.svelte";
import VirtualDOM from "./slides/1/VirtualDOM.svelte";
import Svelte from "./slides/1/Svelte.svelte";
import SvelterUpdates from "./slides/1/SvelterUpdates.svelte";
import How from "./slides/1/How.svelte";

import ReactivityChalkboard from "./slides/2/ReactivityChalkboard.svelte";
import ReactivitySpreadsheet from "./slides/2/ReactivitySpreadsheet.svelte";
import ReactivityClock from "./slides/2/ReactivityClock.svelte";

export const routes = [
	// Part 1 - Intro
	// Part 2 - Updating the DOM
	// Part 3 - Reactivity
	["/", RandomDots],
	["/0-history", History],
	["/0-momentous", Misha],
	["/0-title", Title],
	// Part 1 - Updating the DOM
	//["/1-shape-model", ShapeModel],
	["/1-sham", Sham],
	["/1-html-structure", HTMLStructure],
	// ["/1-ebbinghaus", Ebbinghaus],
	["/1-virtual-dom", VirtualDOM],
	["/1-svelte", Svelte],
	["/1-svelter-updates", SvelterUpdates],
	["/1-how", How],

	// simplicity / compiler
	// why being a compiler is good - small bundles, simpler syntax for complex work
	["/dots", ImageDots],
	// Part 2 - Reactivity

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
	["/5-transition", Transition],
	["/5-animate", Animate],
	["/5-stores", Stores],
	["/5-stores-custom", StoresCustom],
	["/5-tweened", Tweened],
	["/5-ebbinghaus", Ebbinghaus],
	["/5-spring", Spring],
	["/5-follow", Follow],
	["/5-cards", Cards],

	// Outro - Resources and Me
];
