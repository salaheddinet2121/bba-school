import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedDate: z.coerce.date(),
    author: z.string(),
    image: z.string().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

const docs = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/docs' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    order: z.number().default(0),
    section: z.string(),
    draft: z.boolean().default(false),
  }),
});

const changelog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/changelog' }),
  schema: z.object({
    version: z.string(),
    date: z.coerce.date(),
    title: z.string(),
    type: z.enum(['major', 'minor', 'patch']),
    draft: z.boolean().default(false),
  }),
});

const testimonials = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/testimonials' }),
  schema: z.object({
    quote: z.string(),
    author: z.string(),
    role: z.string(),
    company: z.string(),
    avatar: z.string().optional(),
    featured: z.boolean().default(false),
    order: z.number().default(0),
    draft: z.boolean().default(false),
  }),
});

const formations = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/formations' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    objectifs: z.string(),
    public: z.string(),
    prerequis: z.string().default('Aucun prérequis spécifique'),
    objectifsPoints: z.array(z.string()).default([]),
    programmeModules: z
      .array(
        z.object({
          title: z.string(),
          items: z.array(z.string()).default([]),
        })
      )
      .default([]),
    programmePdf: z.string().optional(),
    icon: z.string().default('lucide:graduation-cap'),
    domain: z.string().default('Informatique'),
    subdomain: z.string().optional(),
    badgeLabel: z.string().default('INCONTOURNABLES'),
    badgeTone: z.enum(['incontournable', 'nouveaute', 'expert', 'certifiant']).default('incontournable'),
    image: z.string().optional(),
    duration: z.string().default('2 jours'),
    format: z.string().default('Présentiel / à distance'),
    level: z.string().default('Fondamentaux'),
    distancielAvailable: z.boolean().default(false),
    distancielPriceHT: z.coerce.number().optional(),
    presentielAvailable: z.boolean().default(false),
    presentielPriceHT: z.coerce.number().optional(),
    priceHT: z.coerce.number().default(1290),
    pricingText: z.string().optional(),
    reference: z.string().default('SOD0001'),
    nextSessionCity: z.string().default('À définir'),
    nextSessionDate: z.string().default('Nous contacter'),
    rating: z.coerce.number().default(4.8),
    reviews: z.coerce.number().default(64),
    eligibleCPF: z.boolean().default(true),
    guaranteedSession: z.boolean().default(false),
    archived: z.boolean().default(false),
    order: z.number().default(0),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog, docs, changelog, testimonials, formations };
