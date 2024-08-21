let open = $state(false);

export default function getMenuState() {
	return {
		get open() {
			return open;
		},
		set open(value) {
			open = value;
		},
<<<<<<< HEAD
		toggle: () => (open = !open),
		close: () => (open = false)
=======
		toggle: () => (open = !open)
>>>>>>> dd3159b (all changes before react-email)
	};
}
