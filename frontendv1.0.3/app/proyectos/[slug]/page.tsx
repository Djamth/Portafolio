import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectBySlug, projects } from "../../lib/portfolio";
import { getSiteUrl, siteConfig } from "../../lib/site";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Proyecto no encontrado" };
  }

  const path = `/proyectos/${project.slug}`;

  return {
    title: `${project.nombre} | Denis Jamil Tineo Huancas`,
    description: project.descripcion,
    keywords: [project.nombre, ...project.tecnologiasutilizadas, "Denis Jamil Tineo Huancas", "proyecto desarrollo de software"],
    alternates: { canonical: path },
    openGraph: {
      title: `${project.nombre} | Denis Jamil Tineo Huancas`,
      description: project.descripcion,
      url: path,
      type: "article",
      images: [{ url: project.imagenes[0], alt: project.nombre }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.nombre} | Denis Jamil Tineo Huancas`,
      description: project.descripcion,
      images: [project.imagenes[0]],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  const projectUrl = new URL(`/proyectos/${project.slug}`, getSiteUrl()).toString();
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.nombre,
    description: project.descripcion,
    url: projectUrl,
    image: new URL(project.imagenes[0], getSiteUrl()).toString(),
    author: {
      "@type": "Person",
      name: siteConfig.name,
      url: getSiteUrl().toString(),
    },
    codeRepository: project.url,
    keywords: project.tecnologiasutilizadas.join(", "),
  };

  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-black text-white">
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[850px] bg-[radial-gradient(ellipse_at_80%_15%,rgba(0,123,255,.18),transparent_60%)]" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />

      <header className="border-b border-white/10 bg-black/70">
        <div className="section-shell flex min-h-20 items-center justify-between gap-4">
          <Link href="/" aria-label="Denis Jamil, ir al inicio" className="flex shrink-0 items-center gap-3 font-black uppercase tracking-[-0.03em] text-white transition hover:opacity-80"><Image src="/dj-logo.svg" alt="" width={44} height={44} priority /><span className="hidden sm:inline">Denis Jamil</span></Link>
          <Link href="/#projects" className="rounded-full border border-white/15 px-4 py-2 text-xs font-medium text-white/70 transition hover:border-blue-400 hover:text-white">← Volver a proyectos</Link>
        </div>
      </header>

      <article className="section-shell py-14 md:py-20">
        <div className="mx-auto max-w-4xl">
          <p className="font-mono text-[10px] font-bold uppercase tracking-[.22em] text-[#8dc4ff]">Proyecto / {String(projects.findIndex(item => item.slug === project.slug) + 1).padStart(2, "0")}</p>
          <h1 className="mt-4 text-4xl font-semibold leading-[1.08] tracking-[-.055em] md:text-6xl">{project.nombre}</h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-white/60 md:text-lg">{project.resumen}</p>

          <div className="mt-7 flex flex-wrap gap-2">
            {project.tecnologiasutilizadas.map((tech) => (
              <span key={tech} className="rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1.5 font-mono text-[10px] text-blue-200">{tech}</span>
            ))}
          </div>

          <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-[28px] border border-white/10 bg-[#080e18] shadow-[0_24px_80px_rgba(0,123,255,.10)]">
            <Image src={project.imagenes[0]} alt={`Captura del proyecto ${project.nombre}`} fill priority sizes="(min-width: 1024px) 896px, 100vw" className="object-contain" />
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <section className="rounded-[28px] border border-white/10 bg-[#080b10] p-6 sm:p-8">
              <p className="font-mono text-[10px] uppercase tracking-[.2em] text-[#8dc4ff]">01 / El problema</p>
              <h2 className="mt-4 text-2xl font-semibold tracking-[-.035em]">Qué necesitaba resolver</h2>
              <p className="mt-4 text-sm leading-7 text-white/60">{project.problema}</p>
            </section>
            <section className="rounded-[28px] border border-blue-400/20 bg-[linear-gradient(145deg,#080b10,#07162b)] p-6 sm:p-8">
              <p className="font-mono text-[10px] uppercase tracking-[.2em] text-[#8dc4ff]">02 / Mi aporte</p>
              <h2 className="mt-4 text-2xl font-semibold tracking-[-.035em]">Cómo lo desarrollé</h2>
              <p className="mt-4 text-sm leading-7 text-white/60">{project.solucion}</p>
            </section>
          </div>

          <section className="mt-6 rounded-[28px] border border-white/10 bg-[#080b10] p-6 sm:p-8">
            <p className="font-mono text-[10px] uppercase tracking-[.2em] text-[#8dc4ff]">03 / Funcionalidades</p>
            <h2 className="mt-4 text-2xl font-semibold tracking-[-.035em]">Puntos principales del proyecto</h2>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {project.funcionalidades.map((feature) => (
                <li key={feature} className="flex items-start gap-3 rounded-2xl border border-white/5 bg-white/[.025] px-4 py-4 text-sm leading-6 text-white/70"><span aria-hidden="true" className="text-blue-400">✓</span>{feature}</li>
              ))}
            </ul>
          </section>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href={project.url} target="_blank" rel="noopener noreferrer" className="rounded-full bg-[#007bff] px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-500">Ver repositorio en GitHub ↗</a>
            <Link href="/#projects" className="rounded-full border border-white/25 bg-white/[.03] px-6 py-3 text-sm font-semibold text-white/80 transition hover:border-blue-400 hover:text-white">Ver otros proyectos</Link>
          </div>
        </div>
      </article>
    </main>
  );
}
