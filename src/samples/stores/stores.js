import { writable, derived } from "svelte/store";

export const count = writable(1);
export const multiplier = writable(2);

export const total = derived(
	[count, multiplier],
	([$count, $multiplier]) => $count * $multiplier,
);
