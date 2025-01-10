<script>
	import {
		Body,
		Container,
		Head,
		Heading,
		Hr,
		Html,
		Link,
		Preview,
		Section,
		Text
	} from 'svelte-email-tailwind';

	let {
		name = 'Vrishank',
		message = 'Hi vrishank, i was wondering if you could help me with my project. I need help with the backend. It was cool meeting you at the hackathon.'
	} = $props();
</script>

<Html>
	<Head />
	<Preview preview={`Thanks for reaching out, ${name}`} />
	<Body class="mx-auto my-auto bg-white font-sans">
		<Container
			class="mx-auto my-[40px] w-[465px] rounded-lg border-2 border-solid border-zinc-300 p-[20px]"
		>
			<Container>
				<Section class="my-[10px]">
					<Container class=" h-[75px] w-[75px] rounded-full bg-indigo-400">
						<Text class="rounded-full text-center text-[40px]">👋</Text>
					</Container>
					<Heading class="mx-0 mb-0 p-0 text-center text-[28px] font-semibold text-indigo-600">
						Thanks for reaching out!
					</Heading>
				</Section>
				<Section class="my-0 font-medium">
					<Text class="text-[14px] leading-[10px] text-black">Hi {name},</Text>
					<Text class="text-[14px] leading-[30px] text-black">
						{"I'm"} so glad you reached out! {"I'll"} get back to you as soon as I can. If you have anything
						else to say in the meantime, feel free to reply to reply to this email, or send me another
						email at{' '}
						<Link href="mailto:vrishank@utexas.edu" class="text-indigo-600 italic underline">
							vrishank@utexas.edu
						</Link>
					</Text>
				</Section>
				<Hr class="mx-0 my-[22px] w-full rounded border border-solid border-zinc-300" />
				<Text class=" text-[14px] leading-[10px] font-semibold text-black">
					{"Here's a copy of the message you sent me:"}
				</Text>
				<Text
					class="rounded-md bg-indigo-100 p-[10px] text-[13px] leading-[24px] font-medium text-indigo-900 italic"
				>
					{message}
				</Text>
			</Container>
		</Container>
	</Body>
</Html>
