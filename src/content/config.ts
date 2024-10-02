import { defineCollection, z } from 'astro:content';

const obj_character = {
	id: z.string(),
	title: z.string().optional(),
	name: z.string(),
	lastName: z.string().optional(),
	alias: z.string().optional(),
	gender: z.string(),
	race: z.string(),
	description: z.string(),
	location: z.string(),
	subtype: z.string().optional(),
	image: z.string().optional(),
	hp: z.string(),
	mp: z.string(),
}

const blog = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date().optional(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
	}),
});

const glossary = defineCollection({
	type: 'data',
	schema: z.object({
		id: z.string(),
		word: z.string(),
		definition: z.string(),
		image: z.string().optional(),
	}),
});

const item = defineCollection({
	type: 'data',
	schema: z.object({
		id: z.string(),
		name: z.string(),
		description: z.string(),
		type: z.string(),
		subtype: z.string().optional(),
		image: z.string().optional(),
	}),
});

const npc = defineCollection({
	type: 'data',
	schema: z.object({
		...obj_character,
	}),
});

const mob = defineCollection({
	type: 'data',
	schema: z.object({
		...obj_character,
	}),
});

const pc = defineCollection({
	type: 'data',
	schema: z.object({
		...obj_character,
	}),
});

export const collections = { blog, glossary, item, pc, npc, mob };
