const isEven = n => n % 2 === 0;

export const min = ns => Math.min(...ns);
export const max = ns => Math.max(...ns);
export const range = ns => max(ns) - min(ns);
export const count = ns => ns.reduce((a, _) => a + 1, 0);
export const sum = ns => ns.reduce((a, n) => a + n, 0);
export const mean = ns => sum(ns) / count(ns);
export const med = ns => {
	const l = count(ns);
	const sorted = ns.sort((a, b) => a - b);
	const mid = Math.floor(l / 2);
	return !isEven(l) ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
};
export const mid = ns => (min(ns) + max(ns)) / 2;
export const mode = ns => {
	let mode = ns[0];
	const map = {};
	ns.forEach(n => {
		map[n] = map[n] ? map[n] + 1 : 1;
		if (map[n] > map[mode]) mode = n;
	});

	return mode;
};
