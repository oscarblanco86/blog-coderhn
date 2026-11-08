import { getCollection, type CollectionEntry } from 'astro:content';
import { localizePath, type Lang } from '../i18n/ui';

export type Post = CollectionEntry<'blog'>;

/** Idioma del post según su carpeta: "es/stack/docker" → "es". */
export const postLang = (post: Post): Lang => post.id.split('/')[0] as Lang;

/** Slug sin idioma: "es/stack/docker" → "stack/docker". Las traducciones comparten slug. */
export const postSlug = (post: Post): string => post.id.split('/').slice(1).join('/');

export const postUrl = (post: Post): string => localizePath(`/blog/${postSlug(post)}/`, postLang(post));

/**
 * Borradores visibles en `astro dev` y en las vistas previas de Netlify (rama `preview` y PRs).
 * Netlify define CONTEXT en cada build: "production", "branch-deploy" o "deploy-preview".
 * En producción nunca se muestran, aunque PUBLIC_SHOW_DRAFTS esté definida por error.
 * PUBLIC_SHOW_DRAFTS (true/True/1) sirve para probarlo en local: PUBLIC_SHOW_DRAFTS=true bun run build
 */
const NETLIFY_CONTEXT = process.env.CONTEXT ?? '';
const IS_NETLIFY_PREVIEW = NETLIFY_CONTEXT === 'branch-deploy' || NETLIFY_CONTEXT === 'deploy-preview';
const FLAG_ON = /^(true|1)$/i.test(String(import.meta.env.PUBLIC_SHOW_DRAFTS ?? ''));

export const SHOW_DRAFTS =
	import.meta.env.DEV || (NETLIFY_CONTEXT !== 'production' && (IS_NETLIFY_PREVIEW || FLAG_ON));

const isVisible = (post: Post) => SHOW_DRAFTS || !post.data.draft;

/** Posts publicados de un idioma (en dev también incluye borradores), del más reciente al más antiguo. */
export async function getPosts(lang: Lang): Promise<Post[]> {
	const posts = await getCollection('blog', (p) => postLang(p) === lang && isVisible(p));
	return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

/** La traducción visible de un post en otro idioma, si existe. */
export async function getTranslation(post: Post, lang: Lang): Promise<Post | undefined> {
	const [match] = await getCollection('blog', (p) => p.id === `${lang}/${postSlug(post)}` && isVisible(p));
	return match;
}

/** Minutos de lectura aproximados (~220 palabras/min). */
export function readingTime(body: string | undefined): number {
	const words = (body ?? '').trim().split(/\s+/).filter(Boolean).length;
	return Math.max(1, Math.round(words / 220));
}
