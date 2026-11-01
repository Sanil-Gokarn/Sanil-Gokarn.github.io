import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

export const categories = ['AI & Apps', 'BI Dashboards', 'Data Analysis', 'Business Analysis'] as const;

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      // One sentence shown on project cards.
      summary: z.string(),
      category: z.enum(categories),
      // Shown as-is, e.g. "Aug 2026 – Present".
      period: z.string(),
      // Start date, used for sorting (newest first).
      date: z.coerce.date(),
      status: z.enum(['Completed', 'In progress', 'Live']).default('Completed'),
      tech: z.array(z.string()),
      metrics: z.array(z.object({ value: z.string(), label: z.string() })).default([]),
      // Leave out to show a generated placeholder cover.
      cover: image().optional(),
      coverAlt: z.string().optional(),
      gallery: z.array(z.object({ src: image(), alt: z.string() })).default([]),
      // Animated GIF or video under /public, shown on the project page.
      demo: z.string().optional(),
      demoAlt: z.string().optional(),
      links: z
        .object({
          live: z.url().optional(),
          repo: z.url().optional(),
          report: z.url().optional(),
          certificate: z.url().optional(),
        })
        .default({}),
      // Featured projects appear on the homepage, sorted by `order`.
      featured: z.boolean().default(false),
      order: z.number().default(99),
    }),
});

export const collections = { projects };
