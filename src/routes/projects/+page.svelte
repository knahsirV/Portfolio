<script>
	import {
		GithubAltBrands as Github,
		GitlabBrands as Gitlab,
		BitbucketBrands as Bitbucket
	} from 'svelte-awesome-icons';
	import { Calendar, AppWindowMac } from 'lucide-svelte';
	import { projects } from '$lib/info';

	const featured = projects.filter((p) => p.featured);
	const uniqueYears = [...new Set(projects.map((p) => p.year))].sort(
		(a, b) => parseInt(b) - parseInt(a)
	);
</script>

<div
	class=" mx-auto w-full max-w-4xl px-6 pb-20 selection:bg-blue-400 selection:text-background md:p-10"
>
	<h1
		class="mb-8 inline-block bg-gradient-to-r from-blue-400 to-indigo-600 bg-clip-text p-1 px-4 text-5xl font-semibold tracking-wide text-transparent"
	>
		When I have downtime,
	</h1>
	<p class="mb-12 px-4 leading-loose text-muted-foreground">
		I like to code a little too. Here's a compilation of every project I've made, starting from my
		highschool days up until today. I'm excited to watch this list to grow as time goes on. Have a
		look at what I've built!👇🏼
	</p>
	<h2 class="mb-6 p-1 px-4 text-3xl font-medium tracking-wide">Featured Projects</h2>
	<div class=" mb-12 justify-between gap-8 space-y-8 md:flex md:space-y-0">
		{#each featured as { name, description, tech, date, code, link, image, icon: Icon }, i}
			<div
				class="relative flex shrink-0 flex-col rounded-xl p-4 transition-colors hover:bg-primary-foreground md:w-1/3"
			>
				<div class="mb-2 flex items-center gap-4">
					{#if image}
						<img src={image.src} alt={image.alt} class="  w-6 invert dark:invert-0" />
					{:else if Icon}
						<Icon class=" size-6" />
					{/if}
					<h3 class=" text-lg font-medium">{name}</h3>
				</div>
				<span class="mb-4 flex w-max items-center gap-2 text-muted-foreground"
					><Calendar class="size-5" />
					{date}</span
				>
				<div class=" mb-4 flex max-w-xs gap-x-2 overflow-x-auto rounded-md text-sm *:shrink-0">
					{#each tech as t}
						<span class="rounded-full bg-foreground px-3 py-0.5 text-background">{t}</span>
					{/each}
				</div>

				<p class="mb-4 max-w-xs overflow-hidden text-muted-foreground md:max-w-none">
					{description}
				</p>

				<div class="mt-auto flex gap-2 text-muted-foreground">
					{#if code}
						<a
							href={code}
							class="hover flex items-center gap-2 transition-all hover:text-foreground hover:underline"
						>
							<Github class="size-4" />
							<span>View code</span></a
						>
					{/if}
					{#if link && code}
						<span class="text-muted-foreground">•</span>
					{/if}
					{#if link}
						<a
							href={link}
							class="hover flex items-center gap-2 transition-all hover:text-foreground hover:underline"
							><AppWindowMac class="size-4" />
							<span>Try it out</span></a
						>
					{/if}
				</div>
			</div>
		{/each}
	</div>
	<h2 class="mb-6 p-1 px-4 text-3xl font-medium tracking-wide">All Projects</h2>
	<div class="space-y-8">
		{#each uniqueYears as year}
			<div class="px-4">
				<h3 class="mb-3 text-lg font-medium">{year}</h3>
				<ul class="space-y-6">
					{#each projects.filter((p) => p.year === year) as { name, description, tech, date, code, link, image, icon: Icon, schoolProject }, i}
						<div class="ml-4 flex gap-2">
							{#if image}
								<img
									src={image.src}
									alt={image.alt}
									class=" mt-0.5 h-5 w-max invert dark:invert-0"
								/>
							{:else if Icon}
								<Icon class="mt-0.5 w-5 shrink-0 " />
							{/if}
							<li class="space-y-2">
								<h4 class=" font-medium">
									{name}
									{#if schoolProject}
										<span class="text-muted-foreground">(School Project)</span>
									{/if}
								</h4>
								<div
									class="no-scrollbar mb-4 flex max-w-xs gap-x-2 overflow-x-auto rounded-md text-sm *:shrink-0"
								>
									{#each tech as t}
										<span class="rounded-full bg-foreground px-3 py-0.5 text-background">{t}</span>
									{/each}
								</div>
								<p class="max-w-xs text-muted-foreground md:max-w-none">
									{description}
								</p>
								<div class="flex items-center gap-x-2 text-muted-foreground">
									{#if !schoolProject}
										{#if code}
											<a
												href={code}
												target="_blank"
												class="hover flex items-center gap-2 transition-all hover:text-foreground hover:underline"
											>
												{#if code.includes('github')}
													<Github class="size-4" />
												{:else if code.includes('gitlab')}
													<Gitlab class="size-4" />
												{:else if code.includes('bitbucket')}
													<Bitbucket class="size-4" />
												{/if}
												<span>View code</span></a
											>
										{/if}
										{#if link && code}
											<span class="text-muted-foreground">•</span>
										{/if}
										{#if link}
											<a
												href={link}
												class="hover flex items-center gap-2 transition-all hover:text-foreground hover:underline"
												><AppWindowMac class="size-4" />
												<span>Try it out</span></a
											>
										{/if}
									{/if}
								</div>
							</li>
						</div>
					{/each}
				</ul>
			</div>
		{/each}
	</div>
</div>
