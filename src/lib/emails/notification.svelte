<script>
	import {
		Button,
		Hr,
		Html,
		Text,
		Head,
		Body,
		Container,
		Heading,
		Link,
		Preview,
		Section
	} from 'svelte-email-tailwind';

	let {
		name = 'Vrishank',
		message = 'Hi vrishank, i was wondering if you could help me with my project. I need help with the backend. It was cool meeting you at the hackathon.',
		email = ' vrishank@vrishank.net'
	} = $props();
</script>

<Html>
	<Head />
	<Preview preview={message.length >= 90 ? message.slice(0, 89) : message} />
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
						New message from {name}
					</Heading>
				</Section>
				<Section class="my-0 font-medium">
					<Text class="text-[14px] leading-[10px] text-black">
						{"Here's what they said:"}
					</Text>
					<Text
						class="rounded-md bg-indigo-100 p-[15px] text-[14px] leading-[30px] text-indigo-900 italic"
					>
						{message}
					</Text>
					<Text class=" text-[14px] leading-[30px] text-black">
						Respond to them at{' '}
						<Link href={`mailto: ${email}`} class="text-indigo-600 italic underline">
							{email}
						</Link>
					</Text>
				</Section>
			</Container>
		</Container>
	</Body>
</Html>
