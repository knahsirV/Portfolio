import { createEmail, emailList } from 'svelte-email-tailwind/preview';

export async function load() {
	return emailList({
		path: '/src/lib/emails',
		root: process.cwd() // Explicitly provide the project root path
	});
}

export const actions = {
	// Pass in the two actions. Provide your Resend API key.
	...createEmail
	// ...sendEmail({})
};
