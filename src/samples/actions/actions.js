export function pengwinning(node) {
	const tooltip = document.createElement("div");
	const { top, right, bottom } = node.getBoundingClientRect();

	Object.assign(tooltip.style, {
		background: `url('images/penguingif.gif')`,
		position: "absolute",
		top: `${bottom}px`,
		left: "-64px",
		width: "64px",
		height: "70px",
		color: "white",
		pointerEvents: "none",
		transition: "8s linear",
	});

	function startAnimation() {
		tooltip.style.transform = "translateX(calc(100vw + 64px))";
	}

	document.body.appendChild(tooltip);
	requestAnimationFrame(() => requestAnimationFrame(startAnimation));
}
