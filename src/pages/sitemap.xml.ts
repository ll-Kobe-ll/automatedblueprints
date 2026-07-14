import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { templates } from '../data/templates';
import { lessons } from '../data/lessons';
import { site } from '../data/site';

// Hand-rolled sitemap so new blog posts, template pages, lessons, and topic
// hubs are picked up automatically on build. (We avoid @astrojs/sitemap because
// of a Windows path bug.) robots.txt already points here.

const fmt = (d: Date) => d.toISOString().split('T')[0];

export const GET: APIRoute = async () => {
  const now = fmt(new Date());

  type Entry = { path: string; changefreq: string; priority: string; lastmod: string };
  const entries: Entry[] = [];
  const add = (path: string, priority: string, changefreq = 'monthly', lastmod = now) =>
    entries.push({ path, priority, changefreq, lastmod });

  // Core pages
  add('/', '1.0', 'weekly');
  add('/audit', '1.0', 'monthly');
  add('/websites', '0.9');
  add('/templates', '0.9');
  add('/course', '0.8');
  add('/how-it-works', '0.9');
  add('/learn', '0.8');
  add('/blog', '0.8', 'weekly');
  add('/about', '0.7');
  add('/contact', '0.8');
  add('/industries/precision-manufacturing', '0.8');
  add('/industries/med-spas', '0.8');
  add('/industries/home-services', '0.8');

  // Per-template landing pages
  for (const t of templates) add(`/templates/${t.slug}-website-template`, '0.8');

  // Lessons
  for (const l of lessons) add(`/learn/${l.slug}`, '0.7');

  // Blog posts + topic hubs
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  const clusters = new Set<string>();
  for (const p of posts) {
    const last = fmt(p.data.updatedDate ?? p.data.pubDate);
    add(`/blog/${p.slug}`, '0.7', 'monthly', last);
    if (p.data.cluster) clusters.add(p.data.cluster);
  }
  for (const c of clusters) add(`/blog/topic/${c}`, '0.6', 'weekly');

  const urls = entries
    .map(
      (e) => `  <url>
    <loc>${site.domain}${e.path}</loc>
    <lastmod>${e.lastmod}</lastmod>
    <changefreq>${e.changefreq}</changefreq>
    <priority>${e.priority}</priority>
  </url>`
    )
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
