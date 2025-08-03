<script lang="ts">
	import Button from './ui/button/button.svelte';
	import {
		Command as Cmd,
		Sun,
		Moon,
		MailPlusIcon,
		FileText,
		UserRound,
		Home,
		CodeXml,
		MessageSquare
	} from 'lucide-svelte/icons';
	import { onMount } from 'svelte';
	import * as Command from '$lib/components/ui/command';
	import { toggleMode } from 'mode-watcher';
	import getMenuState from '$lib/menu-state.svelte';
	import { page } from '$app/stores';
	import { cn } from '$lib/utils';
	import { goto } from '$app/navigation';
	import { Motion, AnimateSharedLayout } from 'svelte-motion';

	const routes = [
		{ name: 'Home', path: '/' },
		{ name: 'About', path: '/about' },
		{ name: 'Projects', path: '/projects' },
		{ name: 'Contact', path: '/contact' }
	];

	const baseCommands = [
		{
			name: 'Email me',
			icon: MailPlusIcon,
			type: 'quick action',
			action: () => window.open('mailto:vrishank@utexas.edu'),
			shortcut: 'E'
		},
		{
			name: 'View Resume',
			icon: FileText,
			type: 'quick action',
			action: () =>
				window.open(
					'https://docs.google.com/document/d/1YfUxro-xYViLZKnkdRNI3wH28u6jbkA4FBssYvDHDUo/edit?usp=sharing',
					'_blank'
				),
			shortcut: 'R'
		},
		{ name: 'Home', icon: Home, type: 'nav', action: () => navTo('/'), shortcut: 'GH' },
		{ name: 'About', icon: UserRound, type: 'nav', action: () => navTo('/about'), shortcut: 'GA' },
		{
			name: 'Projects',
			icon: CodeXml,
			type: 'nav',
			action: () => navTo('/projects'),
			shortcut: 'GP'
		},
		{
			name: 'Contact',
			icon: MessageSquare,
			type: 'nav',
			action: () => navTo('/contact'),
			shortcut: 'GC'
		}
	];

	let menuState = getMenuState();
	let currentPage = $derived($page.url.pathname);
	let searched = $state('');
	let commands = $derived(
		!searched
			? baseCommands
			: baseCommands.filter(
					(c) =>
						c.name.toLowerCase().includes(searched.toLowerCase()) ||
						c.shortcut.toLowerCase().includes(searched.toLowerCase())
				)
	);

	$effect(() => {
		if (!menuState.open) {
			searched = '';
		}
	});

	function navTo(path: string) {
		menuState.close();
		goto(path);
	}

	onMount(() => {
		function handleKeydown(e: KeyboardEvent) {
			if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
				e.preventDefault();
				menuState.toggle();
			}
		}

		document.addEventListener('keydown', handleKeydown);
	});
</script>

<nav class="grid w-full p-4 tracking-widest text-muted-foreground md:grid-cols-[300px_1fr_300px]">
	<div class="flex md:block">
		<Button variant="ghost" class="mr-auto p-2" href="/">
			<img src="/logo.png" alt="logo" class="size-7" />
		</Button>
		<div class="flex items-center justify-end md:hidden">
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
	</div>
	<div class="flex justify-center overflow-auto text-sm">
		<!-- <Button variant="ghost" href="/">Home</Button> -->
		{#each routes as { name, path }}
			<Button href={path} variant="ghost" class="relative block uppercase">
				<span class={cn('mb-1 block', currentPage === path && 'text-foreground')}>{name}</span>
				<hr
					class={cn(
						'border-1.5 mx-auto w-4 transition-colors',
						currentPage === path ? 'border-muted-foreground' : 'border-transparent'
					)}
				/>
			</Button>
		{/each}
	</div>
	<div class="hidden items-center justify-end md:flex">
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
	<Command.Input bind:value={searched} placeholder="Type a command or search..." />
	<Command.List>
		<Command.Empty>No results found.</Command.Empty>
		<Command.Group heading="Quick Actions">
			{#each commands.filter((c) => c.type === 'quick action') as { name, icon: Icon, action, shortcut }}
				<Command.Item onSelect={action}>
					<Icon class="mr-2 h-4 w-4" />
					<span>{name}</span>
					<Command.Shortcut>{shortcut}</Command.Shortcut>
				</Command.Item>
			{/each}
		</Command.Group>
		<Command.Separator />
		<Command.Group heading="Navigate">
			{#each commands.filter((c) => c.type === 'nav') as { name, icon: Icon, action, shortcut }}
				<Command.Item onSelect={action}>
					<Icon class="mr-2 h-4 w-4" />
					<span>{name}</span>
					<Command.Shortcut>{shortcut}</Command.Shortcut>
				</Command.Item>
			{/each}
		</Command.Group>
	</Command.List>
</Command.Dialog>
