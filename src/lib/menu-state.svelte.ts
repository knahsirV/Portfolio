let open = $state(false);

export default function getMenuState() {
	return {
		get open() {
			return open;
		},
		set open(value) {
			open = value;
		},
		toggle: () => (open = !open)
	};
}
