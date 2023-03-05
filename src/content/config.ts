import { z, defineCollection } from "astro:content"

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    category: z.string(),
    tags: z.array(z.string()).optional(),
    author: z.string(),
    draft: z.boolean().optional(),
  }),
})

export const collections = {
  blog: blogCollection,
}
