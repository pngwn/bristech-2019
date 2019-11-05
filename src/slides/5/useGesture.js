export function gesture(node, callback) {
	let x = 0,
		y = 0,
		down = 0,
		_x = 0,
		_y = 0;

	function respond({ clientX, clientY, type, touches }) {
		if (type === "mousedown" || type === "touchstart") {
			if (touches) {
				_x = touches[0].clientX - x;
				_y = touches[0].clientY - y;
			} else {
				_x = clientX - x;
				_y = clientY - y;
			}
			down = 1;
			callback([x, y, down]);
		}
		if (type === "mouseup" || type === "touchend") {
			down = 0;
			callback([x, y, 0]);
		}

		if (down && (type === "mousemove" || type === "touchmove")) {
			if (touches) {
				x = touches[0].clientX - _x;
				y = touches[0].clientY - _y;
			} else {
				x = clientX - _x;
				y = clientY - _y;
			}

			callback([x, y, down]);
		}
	}
	node.addEventListener("mousedown", respond);
	node.addEventListener("mouseup", respond);
	node.addEventListener("mousemove", respond);
	node.addEventListener("touchstart", respond);
	node.addEventListener("touchend", respond);
	node.addEventListener("touchmove", respond);

	return {
		destroy() {
			node.removeEventListener("mousedown", respond);
			node.removeEventListener("mouseup", respond);
			node.removeEventListener("mousemove", respond);
			node.removeEventListener("touchstart", respond);
			node.removeEventListener("touchend", respond);
			node.removeEventListener("touchmove", respond);
		},
	};
}
