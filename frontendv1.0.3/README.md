# Portafolio v1.0.3

Portafolio personal construido con Next.js y Tailwind CSS.

## Desarrollo local

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Publicacion en Vercel

En la configuracion del proyecto existente de Vercel:

1. Configura `Root Directory` como `frontendv1.0.3` (relativo a la raíz del repositorio Git).
2. Agrega `NEXT_PUBLIC_SITE_URL` con la URL publica final, por ejemplo `https://tu-dominio.com`.
3. Confirma que `Framework Preset` sea `Next.js` y deja `Output Directory` sin override.
4. Ejecuta un nuevo deployment.

La variable `NEXT_PUBLIC_SITE_URL` se utiliza para canonical URL, sitemap, robots y datos estructurados. Si todavia no tienes dominio propio, usa la URL de produccion asignada por Vercel.

## SEO

La aplicacion incluye metadata, canonical URL, Open Graph, Twitter Card, JSON-LD, `robots.txt`, `sitemap.xml` y manifest.

## Antes de publicar

- Ejecuta `npm ci`, `npm run lint` y `npm run build`.
- Configura `NEXT_PUBLIC_SITE_URL` con la URL real de producción, sin rutas adicionales.
- Revisa el preview de Vercel en escritorio y móvil: menú, abanico de proyectos, filtros y páginas individuales.
- Comprueba `/sitemap.xml`, `/robots.txt`, `/manifest.webmanifest` y `/opengraph-image`.
- El formulario de contacto abre la aplicación de correo mediante `mailto:`; no envía mensajes desde un servidor.
- Verifica el enlace de LinkedIn configurado en `app/lib/site.ts`.
