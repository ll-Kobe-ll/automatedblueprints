import { defineCollection, z } from 'astro:content';

// Blog content collection. Add a post by dropping a .md file in src/content/blog/
// with this frontmatter. No other file needs to change; it shows up automatically.
const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),           // also used as the meta description
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    keyword: z.string().optional(),    // the primary keyword you are targeting
    category: z.string().default('Guides'),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
