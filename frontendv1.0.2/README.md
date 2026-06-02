# Portafolio v1.0.2

Portafolio personal construido con Next.js y Tailwind CSS.

## Desarrollo local

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Publicacion en Vercel

En la configuracion del proyecto existente de Vercel:

1. Cambia `Root Directory` de `frontend` a `frontendv1.0.2`.
2. Agrega `NEXT_PUBLIC_SITE_URL` con la URL publica final, por ejemplo `https://tu-dominio.com`.
3. Ejecuta un nuevo deployment.

La variable `NEXT_PUBLIC_SITE_URL` se utiliza para canonical URL, sitemap, robots y datos estructurados. Si todavia no tienes dominio propio, usa la URL de produccion asignada por Vercel.

## SEO

La aplicacion incluye metadata, canonical URL, Open Graph, Twitter Card, JSON-LD, `robots.txt`, `sitemap.xml` y manifest.
