import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import svelteEmailTailwind from 'svelte-email-tailwind/vite';

const config: UserConfig = {
	plugins: [
		sveltekit(),
		svelteEmailTailwind({}) // processes .svelte files inside the default '/src/lib/emails' folder
	]
};

export default config;
