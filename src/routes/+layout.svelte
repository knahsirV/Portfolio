<script lang="ts">
	import type { Snippet } from 'svelte';
	import '../styles/app.css';
	import '../styles/font.css';
	import '@fontsource-variable/outfit';
	import { ModeWatcher } from 'mode-watcher';
<<<<<<< HEAD
	import Nav from '$lib/components/nav.svelte';
	import Footer from '$lib/components/footer.svelte';
=======
	import NavMenu from '$lib/components/nav-menu.svelte';
>>>>>>> dd3159b (all changes before react-email)

	let { children }: { children: Snippet } = $props();
</script>

<<<<<<< HEAD
<ModeWatcher />
<div class="grid min-h-dvh grid-rows-[auto_1fr_auto]">
	<Nav />
	{@render children()}
	<Footer />
=======
<div class="grid min-h-dvh grid-rows-[auto_1fr]">
	<ModeWatcher />
	<NavMenu />
	{@render children()}
>>>>>>> dd3159b (all changes before react-email)
</div>
