import { defineCollection, reference, z } from 'astro:content';

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
	image: z.string().optional(),
	hp: z.string(),
	mp: z.string(),
}

const obj_pc = {
	class: z.string(),
	level: z.string(),
	background: z.string(),
	xp: z.string(),
	attributes: z.object({
		str: z.string(),
		str_mod: z.string(),
		str_sav: z.string(),
		dex: z.string(),
		dex_mod: z.string(),
		dex_sav: z.string(),
		con: z.string(),
		con_mod: z.string(),
		con_sav: z.string(),
		wis: z.string(),
		wis_mod: z.string(),
		wis_sav: z.string(),
		int: z.string(),
		int_mod: z.string(),
		int_sav: z.string(),
		cha: z.string(),
		cha_mod: z.string(),
		cha_sav: z.string(),
		inspiration: z.string(),
		proficiency: z.string(),
	}),
	skills: z.object({
		acrobatics: z.string(),
		animalHandling: z.string(),
		ether: z.string(),
		athletics: z.string(),
		deception: z.string(),
		history: z.string(),
		insight: z.string(),
		intimidation: z.string(),
		investigation: z.string(),
		medicine: z.string(),
		nature: z.string(),
		perception: z.string(),
		performance: z.string(),
		persuasion: z.string(),
		religion: z.string(),
		sleightOfHand: z.string(),
		stealth: z.string(),
		survival: z.string(),
	}),
	passiveWisdom: z.string(),
	otherProficienciesAndLanguages: z.string(),
	combat: z.object({
		armorClass: z.number(),
		initiative: z.number(),
		speed: z.number(),
		hp: z.number(),
		hp_max: z.number(),
		hp_temp: z.number(),
		hitDice: z.string(),
		hitDice_total: z.string(),
		deathsave_success: z.number(),
		deathsave_failure: z.number(),
	}),
	equipment: z.array(reference('item')),
	attacksSpells: z.array(reference('attackSpell')),
	money: z.number(),
	flavor: z.object({
		personality: z.array(z.string()),
		ideals: z.array(z.string()),
		bonds: z.array(z.string()),
		flaws: z.array(z.string()),
		featuresTraits: z.array(z.string()),
	}),
}

const glossary = defineCollection({
	type: 'data',
	schema: z.object({
		id: z.string(),
		word: z.string(),
		definition: z.string(),
		image: z.string().optional(),
		seeAlso: z.array(z.string()).optional(),
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

const attackSpell = defineCollection({
	type: 'data',
	schema: z.object({
		id: z.string(),
		name: z.string(),
		description: z.string(),
		atkBonus: z.number(),
		damageType: z.string(),
	}),
})

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
		...obj_pc,
	}),
});

export const collections = { glossary, item, pc, npc, mob, attackSpell };
