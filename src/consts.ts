// Datos globales del sitio. Edita aquí nombre, enlaces y pilares de contenido.

export const SITE_TITLE = 'coderhn.dev/blog';
// Descripción por defecto (español). Las traducciones viven en src/i18n/ui.ts.
export const SITE_DESCRIPTION =
	'Ingeniería de soluciones reales: arquitectura backend, DevOps, rendimiento web y gestión de calidad. Por Oscar Blanco.';
export const SITE_URL = 'https://blog.coderhn.dev';

export const AUTHOR = {
	name: 'Oscar Blanco',
	role: 'Backend-Oriented Software Engineer · Frontend Performance · Quality Management',
	location: 'Honduras',
	github: 'https://github.com/oscarblanco86',
	githubUser: 'oscarblanco86',
	// Completa estos enlaces cuando los tengas a mano (deja '' para ocultarlos).
	linkedin: '',
	email: '',
	portfolio: 'https://coderhn.dev',
};

// Pilares de contenido. La clave es la que se usa en el frontmatter (`pillar:`).
export const PILLARS = {
	backend: {
		short: 'backend',
		icon: '⚙️',
		label: { es: 'Backend, Datos & DevOps', en: 'Backend, Data & DevOps' },
		description: {
			es: 'Arquitectura de servidores, bases de datos relacionales, contenedores y despliegues reproducibles.',
			en: 'Server architecture, relational databases, containers and reproducible deployments.',
		},
	},
	frontend: {
		short: 'frontend',
		icon: '⚡',
		label: { es: 'Frontend & Performance', en: 'Frontend & Performance' },
		description: {
			es: 'Interfaces rápidas, hidratación parcial, Core Web Vitals y diseño bajo picos de tráfico.',
			en: 'Fast interfaces, partial hydration, Core Web Vitals and design for traffic spikes.',
		},
	},
	calidad: {
		short: 'calidad',
		icon: '📐',
		label: { es: 'Calidad de Software (ISO 9000)', en: 'Software Quality (ISO 9000)' },
		description: {
			es: 'Gestión de calidad formal aplicada al código: procesos, documentación, deuda técnica y prevención de fallos.',
			en: 'Formal quality management applied to code: processes, documentation, technical debt and failure prevention.',
		},
	},
	opensource: {
		short: 'opensource',
		icon: '🧪',
		label: { es: 'Open Source & Proyectos con Propósito', en: 'Open Source & Purpose-Driven Projects' },
		description: {
			es: 'Librerías, herramientas y aplicaciones con impacto: ciencia del deporte, educación y más.',
			en: 'Libraries, tools and apps with impact: sports science, education and more.',
		},
	},
} as const;

export type PillarKey = keyof typeof PILLARS;
export const PILLAR_KEYS = Object.keys(PILLARS) as [PillarKey, ...PillarKey[]];

// Analítica sin cookies: define PUBLIC_CF_ANALYTICS_TOKEN en el entorno de despliegue.
export const CF_ANALYTICS_TOKEN = import.meta.env.PUBLIC_CF_ANALYTICS_TOKEN ?? '';
