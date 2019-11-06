// import Intro from "./slides/01_Intro.svelte";
// import ImageDots from "./slides/_ImageDots.svelte";
// import RandomDots from "./slides/0/_RandomDots.svelte";

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
import Ebbinghaus from "./slides/5/Ebbinghaus.svelte";

import Follow from "./slides/5/Follow.svelte";
import Cards from "./slides/5/Cards.svelte";
import More from "./slides/5/More.svelte";

import Stores from "./slides/5/Stores.svelte";
import StoresCustom from "./slides/5/StoresCustom.svelte";

import History from "./slides/0/History.svelte";
import Dialup from "./slides/0/Dialup.svelte";
import Misha from "./slides/0/Misha.svelte";

import Title from "./slides/0/Title.svelte";

import Sham from "./slides/1/Sham.svelte";
import HTMLStructure from "./slides/1/HTMLStructure.svelte";
import VirtualDOM from "./slides/1/VirtualDOM.svelte";
import SunTzu from "./slides/1/SunTzu.svelte";

import Svelte from "./slides/1/Svelte.svelte";
import SvelterUpdates from "./slides/1/SvelterUpdates.svelte";
import How from "./slides/1/How.svelte";
import Things from "./slides/1/Things.svelte";

import Compiler from "./slides/2/Compiler.svelte";
import Benefits from "./slides/2/Benefits.svelte";

import ReactivityChalkboard from "./slides/2/ReactivityChalkboard.svelte";
import ReactivitySpreadsheet from "./slides/2/ReactivitySpreadsheet.svelte";
import ReactivityClock from "./slides/2/ReactivityClock.svelte";
import Assignment from "./slides/2/Assignment.svelte";
import AssignmentExample from "./slides/2/AssignmentExample.svelte";

export const routes = [
	// Part 1 - Intro
	["/", History],
	// ["/0-dialup", Dialup],
	// ["/0-momentous", Misha],

	// Part 1 - Updating the DOM
	["/1-sham", Sham],
	["/1-html-structure", HTMLStructure],
	["/1-virtual-dom", VirtualDOM],
	// ["/1-sun-tzu", SunTzu],
	["/0-title", Title],
	["/1-svelte", Svelte],
	["/1-svelter-updates", SvelterUpdates],
	["/1-how", How],
	["/1-things-to-remember", Things],

	// Part 2 - Reactivity
	["/2-assignment", Assignment],
	["/2-assignment-example", AssignmentExample],
	["/2-reactivity-basics", ReactivityChalkboard],
	["/2-reactivity-spreadsheet", ReactivitySpreadsheet],

	["/2-reactivity-clock", ReactivityClock],
	// Compiler ?
	["/2-compiler-benefits", Benefits],
	["/2-simplicity", Compiler],
	// Part 5 - Svelte API
	["/5-basics", Basics],
	["/5-logic-if", LogicEach],
	["/5-logic-each", LogicIf],
	["/5-logic-await", LogicAwait],
	["/5-events", Events],
	["/5-bind-input", BindInput],
	// ["/5-bind-input-example", BindInputExample],
	// ["/5-bind-group", BindGroup],
	// ["/5-bind-component", BindComponent],
	["/5-bind-media", BindMedia],
	["/5-actions", Actions],
	["/5-transition", Transition],
	["/5-animate", Animate],
	["/5-stores", Stores],
	// ["/5-stores-custom", StoresCustom],
	// ["/5-tweened", Tweened],
	["/5-ebbinghaus", Ebbinghaus],
	// ["/5-spring", Spring],
	["/5-follow", Follow],
	["/5-cards", Cards],
	["/5-the-end", More],

	// Outro - Resources and Me
];
