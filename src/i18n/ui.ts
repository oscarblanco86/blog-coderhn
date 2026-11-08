// Idiomas del sitio. Español en la raíz (/), inglés bajo /en/.

export const LANGS = ['es', 'en'] as const;
export type Lang = (typeof LANGS)[number];
export const DEFAULT_LANG: Lang = 'es';

export const LANG_META: Record<Lang, { label: string; locale: string; og: string }> = {
	es: { label: 'Español', locale: 'es-HN', og: 'es_ES' },
	en: { label: 'English', locale: 'en-US', og: 'en_US' },
};

const es = {
	'site.description':
		'Ingeniería de soluciones reales: arquitectura backend, DevOps, rendimiento web y gestión de calidad. Por Oscar Blanco.',

	'nav.blog': 'blog',
	'nav.pillars': 'pilares',
	'nav.about': 'about',
	'nav.lang': 'Idioma',
	'nav.switchTo': 'Read in English',

	'theme.label': 'Tema',
	'theme.auto': 'automático (sistema)',
	'theme.light': 'claro',
	'theme.dark': 'oscuro',

	'home.h1': 'Ingeniería de soluciones reales, con rigor de calidad.',
	'home.lead':
		'Escribo casos de estudio sobre <strong>arquitectura backend y DevOps</strong>, <strong>rendimiento web</strong> y <strong>gestión de calidad (ISO 9000)</strong> aplicada al software: el problema, las restricciones, la arquitectura, el código y las métricas.',
	'home.pillars': './pilares',
	'home.recent': './recientes',
	'home.empty': 'Primer artículo en camino.',

	'blog.title': 'Blog',
	'blog.description': 'Todos los artículos: casos de estudio, arquitectura y calidad de software.',
	'blog.empty': 'Todavía no hay artículos publicados.',
	'blog.filters': 'Pilares',

	'pillars.title': 'Pilares',
	'pillars.description': 'Las cuatro áreas sobre las que escribo.',
	'pillars.articles': 'artículos',
	'pillars.soon': '// próximamente',

	'post.draft': 'borrador',
	'post.updated': 'actualizado',
	'post.writtenBy': 'Escrito por',
	'post.feedback': '¿Comentarios o propuestas? Escríbeme vía',
	'post.back': '← cd ../blog',
	'post.onlyIn': 'Este artículo solo está disponible en español.',

	'summary.pillar': 'pilar',
	'summary.complexity': 'complejidad',
	'summary.coverage': 'cobertura',
	'summary.role': 'rol',
	'summary.impact': 'impacto',
	'summary.code': 'código',
	'complexity.baja': 'baja',
	'complexity.media': 'media',
	'complexity.alta': 'alta',
	'complexity.crítica': 'crítica',
};

export type UIKey = keyof typeof es;

const en: Record<UIKey, string> = {
	'site.description':
		'Engineering real-world solutions: backend architecture, DevOps, web performance and quality management. By Oscar Blanco.',

	'nav.blog': 'blog',
	'nav.pillars': 'pillars',
	'nav.about': 'about',
	'nav.lang': 'Language',
	'nav.switchTo': 'Leer en español',

	'theme.label': 'Theme',
	'theme.auto': 'auto (system)',
	'theme.light': 'light',
	'theme.dark': 'dark',

	'home.h1': 'Engineering real-world solutions, with quality rigor.',
	'home.lead':
		'I write case studies on <strong>backend architecture and DevOps</strong>, <strong>web performance</strong> and <strong>quality management (ISO 9000)</strong> applied to software: the problem, the constraints, the architecture, the code and the metrics.',
	'home.pillars': './pillars',
	'home.recent': './recent',
	'home.empty': 'First article on its way.',

	'blog.title': 'Blog',
	'blog.description': 'All articles: case studies, architecture and software quality.',
	'blog.empty': 'No articles published yet.',
	'blog.filters': 'Pillars',

	'pillars.title': 'Pillars',
	'pillars.description': 'The four areas I write about.',
	'pillars.articles': 'articles',
	'pillars.soon': '// coming soon',

	'post.draft': 'draft',
	'post.updated': 'updated',
	'post.writtenBy': 'Written by',
	'post.feedback': 'Comments or ideas? Reach me via',
	'post.back': '← cd ../blog',
	'post.onlyIn': 'This article is only available in English.',

	'summary.pillar': 'pillar',
	'summary.complexity': 'complexity',
	'summary.coverage': 'coverage',
	'summary.role': 'role',
	'summary.impact': 'impact',
	'summary.code': 'code',
	'complexity.baja': 'low',
	'complexity.media': 'medium',
	'complexity.alta': 'high',
	'complexity.crítica': 'critical',
};

const ui: Record<Lang, Record<UIKey, string>> = { es, en };

export function useTranslations(lang: Lang) {
	return (key: UIKey) => ui[lang][key];
}

/** Idioma a partir de la URL actual. */
export function getLangFromUrl(url: URL): Lang {
	return /^\/en(\/|$)/.test(url.pathname) ? 'en' : 'es';
}

/** Ruta sin el prefijo de idioma: "/en/blog/x/" → "/blog/x/". */
export function stripLang(pathname: string): string {
	return pathname.replace(/^\/en(?=\/|$)/, '') || '/';
}

/** Convierte una ruta "neutra" ("/blog/x/") a la de un idioma ("/en/blog/x/"). */
export function localizePath(path: string, lang: Lang): string {
	const clean = stripLang(path);
	return lang === DEFAULT_LANG ? clean : `/en${clean}`;
}

export const otherLang = (lang: Lang): Lang => (lang === 'es' ? 'en' : 'es');
