import { z } from 'zod';

export const contactSchema = z.object({
	name: z.string().min(1, "I'd prefer to know who you are, please enter your name"),
	email: z.string().email("I'd prefer to be able to get back to you, please enter your email"),
	organization: z.string().optional(),
	subject: z.string().min(1, "I'd prefer to know what your message is about"),
	message: z.string().min(1, "I'd really prefer to not receive blank messages")
});

export type ContactSchema = typeof contactSchema;
