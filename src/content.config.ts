import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { PILLAR_KEYS } from './consts';

const blog = defineCollection({
	// Un post por idioma: src/content/blog/es/<slug>.mdx y src/content/blog/en/<slug>.mdx
	loader: glob({ base: './src/content/blog', pattern: '{es,en}/**/[^_]*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: z.optional(image()),
			// Pilar de contenido (ver PILLARS en src/consts.ts)
			pillar: z.enum(PILLAR_KEYS),
			tags: z.array(z.string()).default([]),
			// Los borradores se ven en `astro dev` pero no se publican en el build.
			draft: z.boolean().default(false),
			// Ficha "Engineering Summary" que aparece al inicio del post.
			summary: z
				.object({
					stack: z.array(z.string()),
					complexity: z.enum(['baja', 'media', 'alta', 'crítica']),
					coverage: z.string().optional(), // ej. "92% (Vitest)"
					impact: z.string(), // ej. "Bundle inicial de 12 KB · Lighthouse 100"
					role: z.string().optional(), // ej. "Arquitecto y único desarrollador"
				})
				.optional(),
			repo: z.string().url().optional(),
			demo: z.string().url().optional(),
		}),
});

export const collections = { blog };
