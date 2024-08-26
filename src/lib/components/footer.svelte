<script lang="ts">
	import { userInfo } from '$lib/info';
	import { GithubAltBrands as Github, LinkedinBrands as Linkedin } from 'svelte-awesome-icons';
	import { Mail, FileText } from 'lucide-svelte/icons';

	const quicklinks = [
		{
			name: 'GitHub',
			href: userInfo.github,
			icon: Github
		},
		{
			name: 'LinkedIn',
			href: userInfo.linkedin,
			icon: Linkedin
		},
		{
			name: 'Email',
			href: `mailto:${userInfo.email}`,
			icon: Mail
		},
		{
			name: 'Resume',
			href: userInfo.resume,
			icon: FileText
		}
	];
</script>

<footer class="flex justify-center gap-6 p-4">
	{#each quicklinks as { name, href, icon: Icon }, i}
		<a
			{href}
			target="_blank"
			rel="noopener noreferrer"
			class=" group flex items-center gap-2 lowercase text-muted-foreground transition-colors hover:text-foreground"
		>
			{name}
			<Icon class="colors size-4 text-transparent transition group-hover:text-foreground" />
		</a>
	{/each}
</footer>
