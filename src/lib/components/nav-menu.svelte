<script lang="ts">
	import Button from './ui/button/button.svelte';
	import {
		Command as Cmd,
		Calculator,
		Calendar,
		CreditCard,
		Settings,
		Smile,
		User,
		Sun,
		Moon
	} from 'lucide-svelte/icons';
	import { onMount } from 'svelte';
	import * as Command from '$lib/components/ui/command';
	import { toggleMode } from 'mode-watcher';
	import getMenuState from '$lib/menu-state.svelte';
	import { page } from '$app/stores';
	import { cn } from '$lib/utils';

	const routes = [
		// { name: 'Home', path: '/' },
		{ name: 'About', path: '/about' },
		{ name: 'Projects', path: '/projects' },
		{ name: 'Contact', path: '/contact' }
	];

	let menuState = getMenuState();
	let currentPage = $derived($page.url.pathname);

	onMount(() => {
		function handleKeydown(e: KeyboardEvent) {
			if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
				e.preventDefault();
				menuState.toggle();
			}
		}

		document.addEventListener('keydown', handleKeydown);
		return () => {
			document.removeEventListener('keydown', handleKeydown);
		};
	});
</script>

<nav class="grid w-full grid-cols-[300px_1fr_300px] p-4 tracking-widest text-muted-foreground">
	<Button variant="ghost" class="mr-auto " href="/">V</Button>
	<div class="flex justify-center">
		<!-- <Button variant="ghost" href="/">Home</Button> -->
		{#each routes as { name, path }}
			<Button variant="ghost" href={path} class="block uppercase"
				><span class={cn('mb-1 block', currentPage === path && 'text-foreground')}>{name}</span>
				<hr
					class={cn(
						'border-1.5 mx-auto w-4 transition-colors',
						currentPage === path ? 'border-muted-foreground' : 'border-transparent'
					)}
				/>
			</Button>
		{/each}
	</div>
	<div class="flex items-center justify-end">
		<Button variant="ghost" onclick={menuState.toggle}><Cmd class="size-5" /></Button>
		<Button variant="ghost" onclick={toggleMode}
			><Sun
				class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
			/>
			<Moon
				class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
			/>
			<span class="sr-only">Toggle theme</span></Button
		>
	</div>
</nav>

<Command.Dialog bind:open={menuState.open}>
	<Command.Input placeholder="Type a command or search..." />
	<Command.List>
		<Command.Empty>No results found.</Command.Empty>
		<Command.Group heading="Suggestions">
			<Command.Item>
				<Calendar class="mr-2 h-4 w-4" />
				<span>Calendar</span>
			</Command.Item>
			<Command.Item>
				<Smile class="mr-2 h-4 w-4" />
				<span>Search Emoji</span>
			</Command.Item>
			<Command.Item>
				<Calculator class="mr-2 h-4 w-4" />
				<span>Calculator</span>
			</Command.Item>
		</Command.Group>
		<Command.Separator />
		<Command.Group heading="Settings">
			<Command.Item>
				<User class="mr-2 h-4 w-4" />
				<span>Profile</span>
				<Command.Shortcut>⌘P</Command.Shortcut>
			</Command.Item>
			<Command.Item>
				<CreditCard class="mr-2 h-4 w-4" />
				<span>Billing</span>
				<Command.Shortcut>⌘B</Command.Shortcut>
			</Command.Item>
			<Command.Item>
				<Settings class="mr-2 h-4 w-4" />
				<span>Settings</span>
				<Command.Shortcut>⌘S</Command.Shortcut>
			</Command.Item>
		</Command.Group>
	</Command.List>
</Command.Dialog>
