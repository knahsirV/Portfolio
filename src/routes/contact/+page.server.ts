import type { PageServerLoad, Actions } from './$types';
import { superValidate } from 'sveltekit-superforms';
import { contactSchema } from './schema';
import { zod } from 'sveltekit-superforms/adapters';
<<<<<<< HEAD
import { fail, redirect } from '@sveltejs/kit';
=======
import { fail } from '@sveltejs/kit';
>>>>>>> dd3159b (all changes before react-email)

export const load = (async () => {
	return {
		form: await superValidate(zod(contactSchema))
	};
}) satisfies PageServerLoad;

export const actions: Actions = {
	default: async (event) => {
		const form = await superValidate(event, zod(contactSchema));
		if (!form.valid) {
			return fail(400, {
				form
			});
		}
<<<<<<< HEAD
		redirect(
			303,
			`mailto:vrishank@utexas.edu?subject=${form.data.subject}&body=${form.data.message}`
		);
=======
>>>>>>> dd3159b (all changes before react-email)

		return {
			form
		};
	}
};
