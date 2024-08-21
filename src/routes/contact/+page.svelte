<script lang="ts">
	import * as Form from '$lib/components/ui/form';
	import { Input } from '$lib/components/ui/input';
	import { Textarea } from '$lib/components/ui/textarea';
	import { contactSchema, type ContactSchema } from './schema';
	import { type SuperValidated, type Infer, superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import { SendHorizontal } from 'lucide-svelte/icons';

	let { data }: { data: { form: SuperValidated<Infer<ContactSchema>> } } = $props();

	const form = superForm(data.form, {
		validators: zodClient(contactSchema)
	});

	const { form: formData, enhance } = form;
</script>

<<<<<<< HEAD
<div
	class=" mx-auto w-full max-w-4xl px-6 selection:bg-green-400 selection:text-background md:p-10 md:pb-20"
>
=======
<div class=" mx-auto w-full max-w-4xl p-10 pb-20 selection:bg-green-400 selection:text-background">
>>>>>>> dd3159b (all changes before react-email)
	<h1
		class="mb-8 inline-block bg-gradient-to-r from-green-400 to-teal-300 bg-clip-text p-1 text-5xl font-semibold tracking-wide text-transparent"
	>
		If you need anything,
	</h1>
<<<<<<< HEAD
	<p class="mb-8 leading-loose text-muted-foreground">
=======
	<p class="mb-12 leading-loose text-muted-foreground">
>>>>>>> dd3159b (all changes before react-email)
		I'm always open to new opportunities and collaborations. If you have any questions or just want
		to chat, feel free to reach out to me. I'm always happy to help!
	</p>
	<form method="POST" use:enhance>
		<div class="mb-2 flex gap-6">
			<span class="text-muted-foreground">01</span>
			<Form.Field {form} name="name" class="w-full">
				<Form.Control let:attrs>
<<<<<<< HEAD
					<Form.Label class="text-xl">What's your name?</Form.Label>
=======
					<Form.Label class="text-2xl">What's your name?</Form.Label>
>>>>>>> dd3159b (all changes before react-email)
					<Input
						{...attrs}
						bind:value={$formData.name}
						placeholder="Clark Kent"
<<<<<<< HEAD
						class="border-0 px-1 py-0 text-teal-300 placeholder:text-opacity-50"
=======
						class="border-0 px-1 py-0 text-lg text-teal-300 placeholder:text-opacity-50"
>>>>>>> dd3159b (all changes before react-email)
					/>
				</Form.Control>
				<Form.FieldErrors />
			</Form.Field>
		</div>
<<<<<<< HEAD
		<hr class="mb-4" />
=======
		<hr class="mb-6" />
>>>>>>> dd3159b (all changes before react-email)
		<div class="mb-2 flex gap-6">
			<span class="text-muted-foreground">02</span>
			<Form.Field {form} name="email" class="w-full">
				<Form.Control let:attrs>
<<<<<<< HEAD
					<Form.Label class="text-xl">What's your email?</Form.Label>
=======
					<Form.Label class="text-2xl">What's your email?</Form.Label>
>>>>>>> dd3159b (all changes before react-email)
					<Input
						{...attrs}
						bind:value={$formData.email}
						placeholder="clark.kent@dailyplanet.com"
<<<<<<< HEAD
						class="border-0 px-1 py-0 text-teal-300 placeholder:text-opacity-50"
=======
						class="border-0 px-1 py-0 text-lg placeholder:text-opacity-50"
>>>>>>> dd3159b (all changes before react-email)
					/>
				</Form.Control>
				<Form.FieldErrors class="mb-2" />
			</Form.Field>
		</div>
<<<<<<< HEAD
		<hr class="mb-4" />
=======
		<hr class="mb-6" />
>>>>>>> dd3159b (all changes before react-email)
		<div class="mb-2 flex gap-6">
			<span class="text-muted-foreground">03</span>
			<Form.Field {form} name="organization" class="w-full">
				<Form.Control let:attrs>
<<<<<<< HEAD
					<Form.Label class="text-xl">What's the name of your organization?</Form.Label>
=======
					<Form.Label class="text-2xl">What's the name of your organization?</Form.Label>
>>>>>>> dd3159b (all changes before react-email)

					<Input
						{...attrs}
						bind:value={$formData.organization}
						placeholder="Daily Planet"
<<<<<<< HEAD
						class="border-0 px-1 py-0 text-teal-300 placeholder:text-opacity-50"
=======
						class="border-0 px-1 py-0 text-lg placeholder:text-opacity-50"
>>>>>>> dd3159b (all changes before react-email)
					/>
				</Form.Control>
				<Form.FieldErrors class="mb-2" />
			</Form.Field>
		</div>
<<<<<<< HEAD
		<hr class="mb-4" />
		<div class="mb-2 flex gap-6">
			<span class="text-muted-foreground">04</span>
			<Form.Field {form} name="subject" class="w-full">
				<Form.Control let:attrs>
					<Form.Label class="text-xl">What's did you want to talk about?</Form.Label>

					<Input
						{...attrs}
						bind:value={$formData.subject}
						placeholder="Just wanted to say hi!"
						class="border-0 px-1 py-0 text-teal-300 placeholder:text-opacity-50"
					/>
				</Form.Control>
				<Form.FieldErrors class="mb-2" />
			</Form.Field>
		</div>
		<hr class="mb-4" />
		<div class=" flex gap-6">
			<span class="text-muted-foreground">05</span>
			<Form.Field {form} name="message" class="w-full">
				<Form.Control let:attrs>
					<Form.Label class="text-xl">Your message</Form.Label>
=======
		<hr class="mb-6" />
		<div class="mb-2 flex gap-6">
			<span class="text-muted-foreground">04</span>
			<Form.Field {form} name="message" class="w-full">
				<Form.Control let:attrs>
					<Form.Label class="text-2xl">Your message</Form.Label>
>>>>>>> dd3159b (all changes before react-email)

					<Textarea
						{...attrs}
						bind:value={$formData.message}
						placeholder="Hi Vrishank, my name is Clark Kent and I'm a reporter..."
<<<<<<< HEAD
						class="resize-none border-0 px-1 py-0 text-teal-300 placeholder:text-opacity-50"
=======
						class="resize-none border-0 px-1 py-0 text-lg placeholder:text-opacity-50"
>>>>>>> dd3159b (all changes before react-email)
					/>
				</Form.Control>
				<Form.FieldErrors class="mb-2" />
			</Form.Field>
		</div>
<<<<<<< HEAD
		<Form.Button class="ml-auto flex items-center gap-2 "
=======
		<Form.Button class="ml-auto flex items-center gap-2 text-lg" size="lg"
>>>>>>> dd3159b (all changes before react-email)
			>Message me <SendHorizontal class="size-5" /></Form.Button
		>
	</form>
</div>
