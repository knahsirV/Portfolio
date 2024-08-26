<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import { Command, ArrowRight } from 'lucide-svelte/icons';
	import getMenuState from '$lib/menu-state.svelte';

	let menuState = getMenuState();
</script>

<div class="grid h-full place-items-center">
	<div class="text-left">
		<div class="mb-4 px-4">
			<h1 class="mb-6 text-5xl font-semibold tracking-wider">Nice to meet you! I'm Vrishank</h1>
			<p class=" mb-2 text-lg text-secondary-foreground">
				Fullstack developer & Senior at UT Austin
			</p>
			<p class=" text-lg text-muted-foreground">I like to build stuff when I'm bored</p>
		</div>
		<Button variant="ghost" class=" group flex items-center text-lg" onclick={menuState.toggle}>
			<div class="hidden items-center md:flex">
				<span>Press</span>
				<kbd
					class="mx-1.5 grid h-6 w-6 place-items-center rounded-sm bg-muted text-muted-foreground transition-colors group-hover:bg-foreground group-hover:text-background"
				>
					<Command class="size-4" />
				</kbd>
				<kbd
					class="mr-1.5 h-6 w-6 place-items-center rounded-sm bg-muted text-center text-base text-muted-foreground transition-colors group-hover:bg-foreground group-hover:text-background"
				>
					K
				</kbd>
			</div>
			<div class="block md:hidden">Tap &nbsp;</div>
			to start
			<ArrowRight class="ml-1.5 size-4 transition-transform group-hover:translate-x-1" />
		</Button>
	</div>
</div>
