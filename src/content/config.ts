import { defineCollection, z } from 'astro:content';

const blocsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    blockId: z.string(),
    number: z.union([z.string(), z.number()]),
    title: z.string(),
    duration: z.string(),
    audience: z.string(),
    summary: z.string(),
    objective: z.string(),
    order: z.number(),
    keyTopics: z.array(
      z.object({
        name: z.string(),
        duration: z.string(),
      })
    ),
    practiceExercise: z.object({
      title: z.string(),
      description: z.string(),
    }),
    commands: z.array(
      z.object({
        label: z.string().optional(),
        language: z.string().default('bash'),
        code: z.string(),
      })
    ),
    screenshots: z.array(
      z.object({
        src: z.string(),
        alt: z.string(),
        caption: z.string().optional(),
      })
    ),
    artifact: z.array(z.string()),
    pdfFile: z.string(),
    prevBlock: z.object({ id: z.string(), title: z.string() }).nullable().optional(),
    nextBlock: z.object({ id: z.string(), title: z.string() }).nullable().optional(),
  }),
});

export const collections = {
  blocs: blocsCollection,
};
