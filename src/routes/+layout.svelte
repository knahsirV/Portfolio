<script lang="ts">
	import type { Snippet } from 'svelte';
	import '../styles/app.css';
	import '../styles/font.css';
	import '@fontsource-variable/outfit';
	import { ModeWatcher } from 'mode-watcher';
	import Nav from '$lib/components/nav.svelte';
	import Footer from '$lib/components/footer.svelte';

	let { children }: { children: Snippet } = $props();
</script>

<ModeWatcher />
<div class="grid min-h-dvh grid-rows-[auto_1fr_auto]">
	<Nav />
	{@render children()}
	<Footer />
</div>
