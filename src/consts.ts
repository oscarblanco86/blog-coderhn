// Datos globales del sitio. Edita aquí nombre, enlaces y pilares de contenido.

export const SITE_TITLE = 'coderhn.dev/blog';
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
		label: 'Backend, Datos & DevOps',
		short: 'backend',
		icon: '⚙️',
		description:
			'Arquitectura de servidores, bases de datos relacionales, contenedores y despliegues reproducibles.',
	},
	frontend: {
		label: 'Frontend & Performance',
		short: 'frontend',
		icon: '⚡',
		description:
			'Interfaces rápidas, hidratación parcial, Core Web Vitals y diseño bajo picos de tráfico.',
	},
	calidad: {
		label: 'Calidad de Software (ISO 9000)',
		short: 'calidad',
		icon: '📐',
		description:
			'Gestión de calidad formal aplicada al código: procesos, documentación, deuda técnica y prevención de fallos.',
	},
	opensource: {
		label: 'Open Source & Proyectos con Propósito',
		short: 'opensource',
		icon: '🧪',
		description:
			'Librerías, herramientas y aplicaciones con impacto: ciencia del deporte, educación y más.',
	},
} as const;

export type PillarKey = keyof typeof PILLARS;
export const PILLAR_KEYS = Object.keys(PILLARS) as [PillarKey, ...PillarKey[]];

// Analítica sin cookies: define PUBLIC_CF_ANALYTICS_TOKEN en el entorno de despliegue.
export const CF_ANALYTICS_TOKEN = import.meta.env.PUBLIC_CF_ANALYTICS_TOKEN ?? '';
