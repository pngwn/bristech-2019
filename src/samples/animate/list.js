export const make_list = () =>
	Array(20)
		.fill(0)
		.map((_, i) => i + 1);

export const add_random = (list, item) => {
	const _list = [...list];
	const _index = ~~(Math.random() * list.length);
	_list.splice(_index, 0, item);
	return _list;
};

export const remove_random = list => {
	const _index = ~~(Math.random() * list.length);
	return list.filter((v, i) => i !== _index);
};

export const shuffle_list = list => {
	let r;
	let t;
	let l = list.length;
	let n = list.slice();

	while (l) {
		r = ~~(Math.random() * l--);
		t = n[l];
		n[l] = n[r];
		n[r] = t;
	}

	return n;
};
