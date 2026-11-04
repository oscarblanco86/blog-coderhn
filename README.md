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

```sh
cp src/content/blog/_plantilla.mdx src/content/blog/mi-nuevo-post.mdx
```

1. Rellena el frontmatter: `pillar` (`backend` | `frontend` | `calidad` | `opensource`), `tags` y el
   bloque `summary` (es la ficha **Engineering Summary** que aparece al inicio del post).
2. Sigue la estructura: Problema → Restricciones → Arquitectura → Código clave → Resultados → Repo.
3. Mientras tenga `draft: true` solo se verá en `bun run dev`. Quítalo para publicar.

Los archivos que empiezan con `_` nunca se publican.

## Dónde personalizar

- `src/consts.ts`: nombre, enlaces (LinkedIn, email), pilares de contenido.
- `src/styles/global.css`: tokens de color (tema oscuro y claro).
- `src/components/Terminal.astro`: comandos de la terminal de la portada.
- `src/content.config.ts`: esquema del frontmatter.

## Analítica

Cloudflare Web Analytics (sin cookies). Define `PUBLIC_CF_ANALYTICS_TOKEN` en las variables de
entorno de Netlify/Vercel; el script solo se inyecta en producción y si el token existe.
