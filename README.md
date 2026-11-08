# blog.coderhn.dev

Blog técnico de Oscar Blanco: casos de estudio de arquitectura backend, DevOps, rendimiento web y
gestión de calidad. Hecho con Astro + MDX y sin frameworks de UI en el cliente.

## Comandos

| Comando         | Acción                                      |
| --------------- | ------------------------------------------- |
| `bun install`   | Instala dependencias                        |
| `bun run dev`   | Servidor local en `localhost:4321` (muestra borradores) |
| `bun run build` | Build de producción en `./dist/` (excluye borradores) |
| `bun run preview` | Previsualiza el build                     |

## Escribir un post

Cada post existe por idioma, con el **mismo nombre de archivo** en ambas carpetas:

```sh
cp src/content/blog/_plantilla.mdx src/content/blog/es/mi-nuevo-post.mdx   # → /blog/mi-nuevo-post/
cp src/content/blog/_plantilla.mdx src/content/blog/en/mi-nuevo-post.mdx   # → /en/blog/mi-nuevo-post/
```

1. Rellena el frontmatter: `pillar` (`backend` | `frontend` | `calidad` | `opensource`), `tags` y el
   bloque `summary` (es la ficha **Engineering Summary** que aparece al inicio del post).
2. Sigue la estructura: Problema → Restricciones → Arquitectura → Código clave → Resultados → Repo.
3. Mientras tenga `draft: true` solo se verá en `bun run dev`. Quítalo para publicar (en cada idioma
   por separado: puedes publicar la versión en español antes que la inglesa).

Los archivos que empiezan con `_` nunca se publican.

## Idiomas y tema

- **Rutas:** español en la raíz (`/`, `/blog/…`), inglés bajo `/en/`.
- **Detección automática:** si el visitante nunca eligió idioma, se usa el del navegador (español →
  `es`, cualquier otro → `en`). Solo redirige si existe la misma página en el otro idioma, y nunca a
  bots. Al pulsar `ES · EN` la elección se guarda y la detección deja de aplicarse.
- **Textos de la interfaz:** `src/i18n/ui.ts`. Las páginas viven en `src/views/` y `src/pages/` y
  `src/pages/en/` solo las envuelven.
- **Tema:** botón claro / oscuro / auto junto al icono de GitHub; se guarda en `localStorage` y en
  modo auto sigue al sistema. Los colores están en `src/styles/global.css` con `light-dark()`.

## Dónde personalizar

- `src/consts.ts`: nombre, enlaces (LinkedIn, email), pilares de contenido.
- `src/styles/global.css`: tokens de color (claro y oscuro con `light-dark()`).
- `src/i18n/ui.ts`: textos de la interfaz en español e inglés.
- `src/components/Terminal.astro`: comandos de la terminal de la portada.
- `src/content.config.ts`: esquema del frontmatter.

## Analítica

Cloudflare Web Analytics (sin cookies). Define `PUBLIC_CF_ANALYTICS_TOKEN` en las variables de
entorno de Netlify/Vercel; el script solo se inyecta en producción y si el token existe.
