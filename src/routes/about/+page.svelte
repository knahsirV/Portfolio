<script lang="ts">
	const experiences = [
		{
			role: 'Fullstack Engineering Intern',
			company: 'Dun & Bradstreet',
			location: 'Austin, Texas',
			start: 'Jun 2024',
			end: 'Aug 2024',
			duration: '3 months',
			description: [
				'Developed Next.js dashboard with SAML auth system for legal teams to manage terms and acceptance of 37 products.',
				'Optimized compliance as a service API to generate acceptance reports 46% faster and implemented cacheing of API results with Redis.',
				'Migrated API compliance API data from MongoDB to SQL to allow for easier querying and data analysis.',
				'Consolidated 264 product hierarchy mappings into a single database and devised dashboard to manage SMB product info.'
			]
		},
		// {
		// 	role: 'Computer Vision Researcher',
		// 	company: 'UT Austin',
		// 	location: 'Austin, Texas',
		// 	start: 'Jun 2023',
		// 	end: 'Aug 2023',
		// 	duration: '3 months',
		// },
		{
			role: 'Data Science Research Assistant',
			company: 'UT Austin',
			location: 'Austin, Texas',
			start: 'Aug 2022',
			end: 'Dec 2022',
			duration: '5 months',
			description: [
				'Performed copy number variant analysis on multiple myeloma cell line data with Python, expanding dataset by 14%.',
				'Wrote BASH scripts to replicate cell data processing and streamline input directories, boosting team efficiency by 12%.',
				'Centralized 70 characterized cell lines in R-based web application to help research team view genomic data visualizations.'
			]
		},
		{
			role: 'Fullstack Engineering Intern',
			company: 'Root Translation',
			location: 'Austin, Texas',
			start: 'Sep 2021',
			end: 'Sep 2022',
			duration: '1 Year',
			description: [
				'Actualized from end-to-end Angular chat and voice UI for smooth patient-provider interaction and effective translation.',
				'Implemented C# language translation service for 61 languages in 121 regions utilizing Microsoft Cognitive Services SDK.',
				'Merged medical terms into app to minimize patient-doctor miscommunication, increasing translation accuracy by 20%.'
			]
		},
		{
			role: 'UX Engineering Intern',
			company: 'Third Wheel Co.',
			location: 'Austin, Texas',
			start: 'Dec 2021',
			end: 'Jun 2022',
			duration: '6 months',
			description: [
				'Engineered artful React UI for subscription service that curates monthly interest-based gift bundles for loved ones.',
				'Constructed scalable Django backend with AWS relational database, handling 50 monthly users’ data and authentication.',
				'Merged medical terms into app to minimize patient-doctor miscommunication, increasing translation accuracy by 20%.'
			]
		},
		{
			role: 'Backend Engineering Intern',
			company: 'Staples',
			location: 'Austin, Texas',
			start: 'Feb 2022',
			end: 'May 2022',
			duration: '3 months',
			description: [
				'Expanded C# based REST API in agile environment to modify order details, boosting client satisfaction by 11%.',
				'Debugged 13 backend errors to maintain API functionality and facilitate smooth frontend implementation of API.',
				'Integrated bug fixes and feature developments into devops CI/CD environment to ensure code was production ready.'
			]
		}
	];
</script>

<div
	class=" mx-auto mb-10 w-full max-w-4xl px-6 selection:bg-red-300 selection:text-background md:p-10 md:pb-20"
>
	<h1
		class="mb-4 inline-block bg-gradient-to-r from-red-300 to-orange-500 bg-clip-text p-1 text-5xl font-semibold tracking-wide text-transparent md:mb-8"
	>
		In case you're wondering,
	</h1>
	<div class="mb-16 gap-12 md:flex">
		<!-- <div
			style="background-image:url('/me.jpg')"
			class="aspect-square w-5/12 shrink-0 rounded-xl bg-cover bg-center grayscale saturate-150"
		></div> -->
		<div
			class=" mb-4 grid h-96 shrink-0 grid-cols-7 grid-rows-6 gap-2 rounded-xl bg-muted *:rounded-md *:bg-blue-400 md:w-5/12"
		>
			<div class="col-start-2 row-start-2"></div>
			<div class="col-start-2 row-start-3"></div>
			<div class="col-start-3 row-start-4"></div>
			<div class="col-start-4 row-start-5"></div>
			<div class="col-start-5 row-start-4"></div>
			<div class="col-start-6 row-start-3"></div>
			<div class="col-start-6 row-start-2"></div>
		</div>
		<div class="space-y-4 text-muted-foreground *:leading-loose">
			<p>
				<span class="font-medium text-foreground">I'm Vrishank Viswanath.</span> I have been coding since
				2019, my junior year of highschool.
			</p>
			<p>
				I will be graduating from the <span class="font-medium text-foreground"
					>University of Texas at Austin</span
				>
				in December 2024 with a Bachelor's in Computer Science. I'm also head of user experience in
				my startup
				<a href="https://raindropjobs.com/" target="_blank" class="font-medium text-primary"
					>Raindrop</a
				>, a platform for students to seamless track and find internships.
			</p>
			<p>
				When I'm not coding, I like <span class="font-medium text-foreground">reading</span> comics
				(LOVE Marvel and DC), <span class="font-medium text-foreground">singing</span> Indian songs,
				going to the <span class="font-medium text-foreground">gym</span>, and exploring new
				<span class="font-medium text-foreground">restaurants</span>.
			</p>
			<p>
				Also, I will be biking from Austin to Alaska in summer 2025 as part of Texas 4000 for Cancer
				and would <a
					href="https://texas4000-bloom.kindful.com/2025-team-fundraising-2024/vrishank-viswanath1"
					target="_blank"
					class="font-medium text-primary">love your support</a
				>!
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
				<h4 class="mb-3 text-muted-foreground">
					{experience.start} - {experience.end} • {experience.duration}
				</h4>
				<div class="space-y-1.5">
					{#each experience.description as description}
						<p class=" text-muted-foreground">{description}</p>
					{/each}
				</div>
			</div>
		{/each}
	</div>
</div>
