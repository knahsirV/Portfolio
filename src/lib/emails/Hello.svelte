<script>
	import { Button, Hr, Html, Text, Head } from 'svelte-email-tailwind';

	let { name = 'world' } = $props();
</script>

<Html lang="en">
	<Head />
	<Text class="text-[24px] md:text-[50px]">
		Hello, {name}!
	</Text>
	<Hr />
	<Button href="https://svelte.dev">Visit Svelte</Button>
</Html>
