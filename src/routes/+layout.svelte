<script lang="ts">
	import type { Snippet } from 'svelte';
	import '../styles/app.css';
	import '../styles/font.css';
	import '@fontsource-variable/outfit';
	import { ModeWatcher } from 'mode-watcher';
	import NavMenu from '$lib/components/nav-menu.svelte';

	let { children }: { children: Snippet } = $props();
</script>

<div class="grid min-h-dvh grid-rows-[auto_1fr]">
	<ModeWatcher />
	<NavMenu />
	{@render children()}
</div>
