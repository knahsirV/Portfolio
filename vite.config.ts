import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import type { TailwindConfig } from 'tw-to-css';
import svelteEmailTailwind from 'svelte-email-tailwind/vite';

const emailTwConfig: TailwindConfig = {
	theme: {
		screens: {
			md: { max: '767px' },
			sm: { max: '475px' }
		},
		extend: {
			colors: {
				brand: 'rgb(255, 62, 0)'
			}
		}
	}
};

const config: UserConfig = {
	plugins: [
		sveltekit(),
		svelteEmailTailwind({ tailwindConfig: emailTwConfig }) // processes .svelte files inside the default '/src/lib/emails' folder
	]
};

export default config;
