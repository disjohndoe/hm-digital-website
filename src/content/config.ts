import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tech: z.array(z.string()),
    date: z.coerce.date(),
    featured: z.boolean().default(false),
    locale: z.enum(['hr', 'en']).default('hr'),
  }),
});

export const collections = { projects };
