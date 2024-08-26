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

	let menuState = getMenuState();
	let hovered = $state('');
	let currentPage = $derived($page.url.pathname);

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
			const commandPushed = (letter: string): boolean =>
				e.key === letter && (e.metaKey || e.ctrlKey) && e.shiftKey;

			if (commandPushed('e')) window.open('mailto:vrishank@utexas.edu');
			if (commandPushed('r'))
				window.open(
					'https://docs.google.com/document/d/1YfUxro-xYViLZKnkdRNI3wH28u6jbkA4FBssYvDHDUo/edit?usp=sharing',
					'_blank'
				);
			if (commandPushed('h')) navTo('/');
			if (commandPushed('a')) navTo('/about');
			if (commandPushed('p')) navTo('/projects');
			if (commandPushed('c')) navTo('/contact');
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
	<Command.Input placeholder="Type a command or search..." />
	<Command.List>
		<Command.Empty>No results found.</Command.Empty>
		<Command.Group heading="Quick Actions">
			<Command.Item onSelect={() => window.open('mailto:vrishank@utexas.edu')}>
				<MailPlusIcon class="mr-2 h-4 w-4" />
				<span>Email me</span>
				<Command.Shortcut>⌘ Shift E</Command.Shortcut>
			</Command.Item>
			<Command.Item
				onSelect={() =>
					window.open(
						'https://docs.google.com/document/d/1YfUxro-xYViLZKnkdRNI3wH28u6jbkA4FBssYvDHDUo/edit?usp=sharing',
						'_blank'
					)}
			>
				<FileText class="mr-2 h-4 w-4" />
				<span>View Resume</span>
				<Command.Shortcut>⌘ Shift R</Command.Shortcut>
			</Command.Item>
		</Command.Group>
		<Command.Separator />
		<Command.Group heading="Navigate">
			<Command.Item onSelect={() => navTo('/')}>
				<Home class="mr-2 h-4 w-4" />
				<span>Home</span>
				<Command.Shortcut>⌘ Shift H</Command.Shortcut>
			</Command.Item>
			<Command.Item onSelect={() => navTo('/about')}>
				<UserRound class="mr-2 h-4 w-4" />
				<span>About</span>
				<Command.Shortcut>⌘ Shift A</Command.Shortcut>
			</Command.Item>
			<Command.Item onSelect={() => navTo('/projects')}>
				<CodeXml class="mr-2 h-4 w-4" />
				<span>Projects</span>
				<Command.Shortcut>⌘ Shift P</Command.Shortcut>
			</Command.Item>
			<Command.Item onSelect={() => navTo('/contact')}>
				<MessageSquare class="mr-2 h-4 w-4" />
				<span>Contact</span>
				<Command.Shortcut>⌘ Shift C</Command.Shortcut>
			</Command.Item>
		</Command.Group>
	</Command.List>
</Command.Dialog>
