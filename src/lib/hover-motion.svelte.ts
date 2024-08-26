export function hoverMotion() {
	let left = $state(0);
	let width = $state(0);
	let opacity = $state(0);
	let ref = $state();

	const positionMotion = (node: HTMLElement) => {
		const refNode = () => {
			const mint = node.getBoundingClientRect();
			left = node.offsetLeft;
			width = mint.width;
			opacity = 1;
		};
		node.addEventListener('mouseenter', refNode);
		return {
			destroy() {
				node.removeEventListener('mouseenter', refNode);
			}
		};
	};

	return {
		get left() {
			return left;
		},
		set left(value) {
			left = value;
		},
		get width() {
			return width;
		},
		set width(value) {
			width = value;
		},
		get opacity() {
			return opacity;
		},
		set opacity(value) {
			opacity = value;
		},
		get ref() {
			return ref;
		},
		set ref(value) {
			ref = value;
		},
		positionMotion
	};
}
