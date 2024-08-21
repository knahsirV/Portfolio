<script>
<<<<<<< HEAD
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
=======
	import { SquarePlay, Newspaper, Calendar, AppWindowMac } from 'lucide-svelte';
	import { Github } from 'svelte-bootstrap-icons';

	const featured = [
		{
			name: 'Raindrop',
			description:
				'Platform for students to track internship cycle, view performance insights, and find exclusive opportunities',
			tech: ['Next.js', 'Firebase', 'NLP', 'OpenAI API'],
			date: 'Jan 2024 - Present',
			link: 'https://raindropjobs.com/'
		},
		{
			name: 'Comment Sense',
			description: 'Sentiment analysis tool and dashboard for YouTube video comment sections',
			tech: ['Next.js', 'Huggingface', 'Flask', 'Pandas', 'Amazon EBS'],
			date: 'Jun 2023',
			code: 'https://github.com/knahsirV/CommentSense',
			link: 'comment-sense-frontend.vercel.app'
		},
		{
			name: 'News Archiver',
			description:
				'Application that allows users to view and visit the headlines of both CNN and Fox news for any given date',
			tech: ['React', 'Express JS', 'Firebase', 'Puppeteer'],
			code: 'https://github.com/knahsirV/NewsArchiver',
			link: 'news-archiver-d0853.web.app/',
			date: 'Jun 2022'
		}
	];
</script>

<div class=" mx-auto w-full max-w-4xl p-10 pb-20 selection:bg-blue-400 selection:text-background">
>>>>>>> dd3159b (all changes before react-email)
	<h1
		class="mb-8 inline-block bg-gradient-to-r from-blue-400 to-indigo-600 bg-clip-text p-1 px-4 text-5xl font-semibold tracking-wide text-transparent"
	>
		When I have downtime,
	</h1>
	<p class="mb-12 px-4 leading-loose text-muted-foreground">
<<<<<<< HEAD
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
=======
		I like to code a little too. Here's a compilation of every side project I've made, starting from
		my highschool days up until today. I'm excited to watch this list to grow as time goes on. Have
		a look at what I've built!👇🏼
	</p>
	<h2 class="mb-6 p-1 px-4 text-3xl font-medium tracking-wide">Featured Projects</h2>
	<div class="mb-12 flex justify-between gap-8">
		{#each featured as { name, description, tech, date, code, link }, i}
			<div class="relative flex w-1/3 shrink-0 flex-col rounded-xl p-4 hover:bg-primary-foreground">
				<div class="flex items-center gap-4">
					{#if i === 0}
						<img
							src="/raindrop_logo_mono.png"
							alt="Raindrop jobs logo"
							class=" mb-4 h-6 w-max invert dark:invert-0"
						/>
					{:else if i === 1}
						<SquarePlay class="mb-4 size-6" />
					{:else if i === 2}
						<Newspaper class="mb-4 size-6" />
					{/if}
					<h3 class="mb-3 text-lg font-medium">{name}</h3>
>>>>>>> dd3159b (all changes before react-email)
				</div>
				<span class="mb-4 flex w-max items-center gap-2 text-muted-foreground"
					><Calendar class="size-5" />
					{date}</span
				>
<<<<<<< HEAD
				<div
					class="no-scrollbar mb-4 flex max-w-xs gap-x-2 overflow-x-auto rounded-md text-sm *:shrink-0"
				>
=======
				<div class="no-scrollbar mb-4 flex gap-x-2 overflow-x-auto rounded-md text-sm *:shrink-0">
>>>>>>> dd3159b (all changes before react-email)
					{#each tech as t}
						<span class="rounded-full bg-foreground px-3 py-0.5 text-background">{t}</span>
					{/each}
				</div>

<<<<<<< HEAD
				<p class="mb-4 max-w-xs overflow-hidden text-muted-foreground md:max-w-none">
					{description}
				</p>
=======
				<p class="mb-4 text-muted-foreground">{description}</p>
>>>>>>> dd3159b (all changes before react-email)

				<div class="mt-auto flex gap-2 text-muted-foreground">
					{#if code}
						<a
							href={code}
<<<<<<< HEAD
							class="hover flex items-center gap-2 transition-all hover:text-foreground hover:underline"
=======
							class="hover flex items-center gap-2 transition-colors hover:text-foreground hover:underline"
>>>>>>> dd3159b (all changes before react-email)
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
<<<<<<< HEAD
							class="hover flex items-center gap-2 transition-all hover:text-foreground hover:underline"
=======
							class="hover flex items-center gap-2 transition-colors hover:text-foreground hover:underline"
>>>>>>> dd3159b (all changes before react-email)
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
<<<<<<< HEAD
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
=======
		<div class="px-4">
			<h3 class="mb-3 text-lg font-medium">2024</h3>
			<ul class="space-y-3">
				<li class="mb-2 ml-10 list-disc">
					<h4 class="underline">Raindrop</h4>
					<p class="text-muted-foreground">
						Platform for students to track internship cycle, view performance insights, and find
						exclusive opportunities
					</p>
				</li>
			</ul>
		</div>
		<div class="px-4">
			<h3 class="mb-3 text-lg font-medium">2023</h3>
			<ul class="space-y-3">
				<li class="ml-10 list-disc">
					<h4 class="underline">Comment Sense</h4>
					<p class="text-muted-foreground">
						Sentiment analysis tool and dashboard for YouTube video comment sections
					</p>
				</li>
			</ul>
		</div>
		<div class="px-4">
			<h3 class="mb-3 text-lg font-medium">2022</h3>
			<ul>
				<li class=" ml-10 list-disc">
					<h4 class="underline">News Archiver</h4>
					<p class="text-muted-foreground">
						Application that allows users to view and visit the headlines of both CNN and Fox news
						for any given date.
					</p>
				</li>
			</ul>
		</div>
		<div class="px-4">
			<h3 class="mb-3 text-lg font-medium">2021</h3>
			<ul class="space-y-3">
				<li class="ml-10 list-disc">
					<h4 class="underline">Familead</h4>
					<p class="text-muted-foreground">
						An app designed to provide a streamlined communication platform for families and stay
						connected with a task scheduler, chat service, calendar, maps, and location tracking.
					</p>
				</li>
			</ul>
		</div>
		<div class="px-4">
			<h3 class="mb-3 text-lg font-medium">2020</h3>
			<ul class="space-y-3">
				<li class="ml-10 list-disc">
					<h4 class="underline">Prescribemate</h4>
					<p class="text-muted-foreground">
						At PrescribeMate, we understand that it's hard to keep up with the copious amounts of
						medication given you by doctors. We want to make it easier know what you're taking and
						when to take it.
					</p>
				</li>
				<li class="ml-10 list-disc">
					<h4 class="underline">Ecohome</h4>
					<p class="text-muted-foreground">
						A simple solution to make your home more environmentally and economically friendly
					</p>
				</li>
				<li class="ml-10 list-disc">
					<h4 class="underline">PrankAid</h4>
					<p class="text-muted-foreground">
						Every once in a while, it's important to just joke around. But we understand that not
						all of us can easily think of a prank on their own. PrankAid is here to solve that.
					</p>
				</li>
				<li class="ml-10 list-disc">
					<h4 class="underline">Sepio</h4>
					<p class="text-muted-foreground">
						This concept is based on the idea of warning Roman troops about arriving invaders and
						aiding them in battle through the use of an updating inventory of weapons and GPS
						navigation.
					</p>
				</li>
			</ul>
		</div>
>>>>>>> dd3159b (all changes before react-email)
	</div>
</div>
