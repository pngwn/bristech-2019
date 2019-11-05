import { writable } from "svelte/store";
import { loop, now } from "svelte/internal";

export function is_date(obj) {
	return Object.prototype.toString.call(obj) === "[object Date]";
}

function tick_spring(ctx, last_value, current_value, target_value, index) {
	if (typeof current_value === "number" || is_date(current_value)) {
		const delta = target_value - current_value;

		const velocity = (current_value - last_value) / (ctx.dt || 1 / 60);
		const spring = ctx.opts.stiffness(index) * delta;
		const damper = ctx.opts.damping(index) * velocity;
		const acceleration = (spring - damper) * ctx.inv_mass;
		const d = (velocity + acceleration) * ctx.dt;

		if (
			Math.abs(d) < ctx.opts.precision &&
			Math.abs(delta) < ctx.opts.precision
		) {
			return target_value;
		} else {
			ctx.settled[index] = false;
			return is_date(current_value)
				? new Date(current_value.getTime() + d)
				: current_value + d;
		}
	} else if (Array.isArray(current_value)) {
		return current_value.map((_, i) =>
			tick_spring(ctx, last_value[i], current_value[i], target_value[i], index),
		);
	} else if (typeof current_value === "object") {
		const next_value = {};
		// @ts-ignore
		for (const k in current_value)
			next_value[k] = tick_spring(
				ctx,
				last_value[k],
				current_value[k],
				target_value[k],
				index,
			);

		return next_value;
	} else {
		throw new Error(`Cannot spring ${typeof current_value} values`);
	}
}

export function spring_group(value, opts = {}) {
	const store = writable(value);
	const { stiffness = 0.15, damping = 0.8, precision = 0.01 } = opts;

	let last_time;
	let task;
	let current_token;
	let last_value = value;
	let target_value = value;

	let inv_mass = 1;
	let inv_mass_recovery_rate = 0;
	let cancel_task = false;

	function set(new_value, opts = {}) {
		target_value = new_value;
		const token = (current_token = {});

		if (opts.hard || (spring.stiffness >= 1 && spring.damping >= 1)) {
			cancel_task = true; // cancel any running animation
			last_time = now();
			last_value = value;
			store.set((value = target_value));
			return new Promise(f => f()); // fulfil immediately
		} else if (opts.soft) {
			const rate = opts.soft === true ? 0.5 : +opts.soft;
			inv_mass_recovery_rate = 1 / (rate * 60);
			inv_mass = 0; // infinite mass, unaffected by spring forces
		}

		if (!task) {
			last_time = now();
			cancel_task = false;

			task = loop(now => {
				if (cancel_task) {
					cancel_task = false;
					task = null;
					return false;
				}

				inv_mass = Math.min(inv_mass + inv_mass_recovery_rate, 1);

				const ctx = {
					inv_mass,
					opts: spring,
					settled: target_value.map(_ => true),
					dt: ((now - last_time) * 60) / 1000,
				};

				const next_value = target_value.map((v, i) =>
					tick_spring(ctx, last_value[i], value[i], target_value[i], i),
				);

				last_time = now;
				last_value = value;

				store.set((value = next_value));

				if (ctx.settled.every(v => v)) task = null;
				return !ctx.settled.every(v => v);
			});
		}

		return new Promise(fulfil => {
			task.promise.then(() => {
				if (token === current_token) fulfil();
			});
		});
	}

	const spring = {
		set,
		update: (fn, opts) => set(fn(target_value, value), opts),
		subscribe: store.subscribe,
		stiffness,
		damping,
		precision,
	};

	return spring;
}
