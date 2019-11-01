import { writable, derived } from "svelte/store";

const _count = writable(1);

export const count = {
	subscribe: _count.subscribe,
	set: _count.set,
	inc: () => _count.update(v => v + 1),
	dec: () => _count.update(v => v - 1),
};

const _multiplier = writable(2);

export const multiplier = {
	subscribe: _multiplier.subscribe,
	set: _multiplier.set,
	inc: () => _multiplier.update(v => v + 1),
	dec: () => _multiplier.update(v => v - 1),
};

export const total = derived(
	[count, multiplier],
	([$count, $multiplier]) => $count * $multiplier,
);
