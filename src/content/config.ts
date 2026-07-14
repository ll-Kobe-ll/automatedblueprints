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
    // Who the post is for. Drives the CTA: owner -> /audit, freelancer -> /templates.
    audience: z.enum(['owner', 'freelancer']).default('owner'),
    // Topic cluster slug. Groups posts into hubs at /blog/topic/<cluster> and
    // powers "read next" related posts.
    cluster: z.string().optional(),
    image: z.string().optional(),      // hero / OG image (falls back to global og-image)
    faq: z.array(z.object({ q: z.string(), a: z.string() })).optional(),
    related: z.array(z.string()).optional(), // manual related slugs (else auto by cluster)
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
