<script lang="ts">
	const experiences = [
		{
			role: 'Fullstack Engineering Intern',
			company: 'Dun & Bradstreet',
			location: 'Austin, Texas',
			start: 'Jun 2024',
			end: 'Aug 2024',
			duration: '3 months'
		},
		{
			role: 'Computer Vision Researcher',
			company: 'UT Austin',
			location: 'Austin, Texas',
			start: 'Jun 2023',
			end: 'Aug 2023',
			duration: '3 months'
		},
		{
			role: 'Data Science Research Assistant',
			company: 'UT Austin',
			location: 'Austin, Texas',
			start: 'Aug 2022',
			end: 'Dec 2022',
			duration: '5 months'
		},
		{
			role: 'Fullstack Engineering Intern',
			company: 'Root Translation',
			location: 'Austin, Texas',
			start: 'Sep 2021',
			end: 'Sep 2022',
			duration: '1 Year'
		},
		{
			role: 'UX Engineering Intern',
			company: 'Third Wheel Co.',
			location: 'Austin, Texas',
			start: 'Dec 2021',
			end: 'Jun 2022',
			duration: '6 months'
		},
		{
			role: 'Backend Engineering Intern',
			company: 'Staples',
			location: 'Austin, Texas',
			start: 'Feb 2022',
			end: 'May 2022',
			duration: '3 months'
		}
	];
</script>

<div class=" mx-auto w-full max-w-4xl p-10 pb-20 selection:bg-red-300 selection:text-background">
	<h1
		class="mb-8 inline-block bg-gradient-to-r from-red-300 to-orange-500 bg-clip-text p-1 text-5xl font-semibold tracking-wide text-transparent"
	>
		In case you're wondering,
	</h1>
	<div class="mb-16 flex gap-12">
		<div class="aspect-square w-5/12 shrink-0 rounded-xl bg-muted"></div>
		<div class="space-y-4 text-muted-foreground *:leading-loose">
			<p>
				<span class="text-foreground">I'm Vrishank Viswanath.</span> I have been coding since 2019, my
				junior year of highschool.
			</p>
			<p>
				I will be graduating from the University of Texas at Austin in December 2024 with a
				Bachelor's in Computer Science. I'm also head of user experience in my startup <a
					href="https://raindropjobs.com/"
					target="_blank"
					class="text-primary">Raindrop</a
				>, a platform for students to seamless track and find internships.
			</p>
			<p>
				When I'm not coding, i like reading comics (LOVE Marvel and DC), singing Indian songs, going
				to the gym, and exploring new restaurants.
			</p>
			<p>
				Also, I will be biking from Austin to Alaska in summer 2025 as part of Texas 4000 for Cancer
				and would love your support!
			</p>
		</div>
	</div>
	<h2 class="mb-6 p-1 text-3xl font-medium tracking-wide">Experience</h2>
	<div class="space-y-12">
		{#each experiences as experience}
			<div>
				<h3 class="mb-3 text-xl font-medium">{experience.role}</h3>
				<h4 class="mb-1.5 text-muted-foreground">
					<span class="text-foreground">{experience.company}</span> • {experience.location}
				</h4>
				<h4 class="text-muted-foreground">
					{experience.start} - {experience.end} • {experience.duration}
				</h4>
			</div>
		{/each}
	</div>
</div>
