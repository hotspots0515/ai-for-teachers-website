import { defineCollection, z } from 'astro:content';

const newsletter = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    excerpt: z.string(),
    season: z.enum(['Advent', 'Christmas', 'Lent', 'Easter', 'Ordinary Time']).optional(),
  }),
});

export const collections = { newsletter };
