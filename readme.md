# Portafolio — Denis Jamil Tineo Huancas

Portafolio personal enfocado en desarrollo backend con Java, Spring Boot, APIs REST y PostgreSQL.

Sitio publicado: https://portafolio-five-lemon-79.vercel.app/

## Estructura

- `frontendv1.0.3/`: aplicación vigente, desarrollada con Next.js, React, TypeScript y Tailwind CSS.
- `backend/`: proyecto Java / Spring Boot conservado para su desarrollo independiente.

La web incluye un Hero geométrico, galería interactiva de proyectos, páginas individuales, navegación adaptable y metadatos SEO. El contacto abre el cliente de correo mediante `mailto:`.

## Desarrollo local

```bash
cd frontendv1.0.3
npm ci
npm run dev
```

Abre http://localhost:3000. Para validar los cambios:

```bash
npm run lint
npm run build
```

## Despliegue

Vercel publica la rama `main` con **Root Directory = `frontendv1.0.3`**. Mantén esa ruta mientras siga configurada en Vercel.

Consulta [la documentación del frontend](frontendv1.0.3/README.md) para configurar la URL pública y revisar el despliegue.

## Versiones

Las versiones se conservan mediante tags y [releases de GitHub](https://github.com/Djamth/Portafolio/releases), sin duplicar carpetas en la rama actual:

- [v1.0.3](https://github.com/Djamth/Portafolio/releases/tag/v1.0.3): nueva interfaz publicada.
- [v1.0.1](https://github.com/Djamth/Portafolio/releases/tag/v1.0.1): versión publicada anterior; su aplicación estaba en `frontendv1.0.2`.

Los nombres de las carpetas históricas no equivalen necesariamente a los tags. Para consultar una versión sin modificar tu directorio de trabajo:

```bash
git worktree add --detach ../Portafolio-v1.0.1 v1.0.1
```

Las carpetas y la web estática retiradas siguen disponibles en el historial de Git. Las nuevas mejoras deben partir de `main` y entrar mediante pull requests.
