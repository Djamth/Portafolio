'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Icon from "./Icon";
import ScrollReveal from "./ScrollReveal";
import { certificates, projects } from "../lib/portfolio";

const technologies = ["Todas", ...Array.from(new Set(projects.flatMap((project) => project.tecnologiasutilizadas)))];

export default function Projects() {
  const [selectedTechnology, setSelectedTechnology] = useState("Todas");
  const visibleProjects = selectedTechnology === "Todas" ? projects : projects.filter((project) => project.tecnologiasutilizadas.includes(selectedTechnology));

  return (
    <section id="projects" className="relative overflow-hidden bg-[#02020f] py-28 text-white">
      <div className="section-shell relative">
        <ScrollReveal className="mx-auto max-w-3xl text-center">
          <p className="text-[10px] font-bold uppercase tracking-[.22em] text-[#a88dff]">03 / Proyectos</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-.055em] sm:text-6xl">Trabajo real, presentado <span className="text-white/35">como producto.</span></h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/42">Una selección de proyectos donde combino backend, integración de servicios y experiencias pensadas para usuarios reales.</p>
        </ScrollReveal>

        <div aria-label="Filtrar proyectos por tecnología" role="group" className="mt-10 flex flex-wrap justify-center gap-2">
          {technologies.map((technology) => {
            const active = selectedTechnology === technology;
            return <button key={technology} type="button" aria-pressed={active} onClick={() => setSelectedTechnology(technology)} className={`rounded-full border px-4 py-2 text-[10px] font-bold transition ${active ? "border-[#8f70f0] bg-[#7653df] text-white shadow-[0_0_25px_rgba(118,83,223,.2)]" : "border-white/10 bg-white/[.035] text-white/42 hover:border-white/20 hover:text-white/75"}`}>{technology}</button>;
          })}
        </div>
        <p aria-live="polite" className="mt-4 text-center font-mono text-[9px] uppercase tracking-[.15em] text-white/25">{visibleProjects.length} {visibleProjects.length === 1 ? "proyecto" : "proyectos"}</p>

        <div className="mt-12 grid gap-8">
          {visibleProjects.map((project, index) => (
            <ScrollReveal key={project.slug}>
              <article className="group relative overflow-hidden rounded-[34px] border border-white/10 bg-[#070717] shadow-[0_32px_90px_rgba(0,0,0,.35)]">
                <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-[55%] bg-[radial-gradient(ellipse_at_50%_115%,rgba(123,67,255,.62),rgba(72,35,168,.18)_42%,transparent_72%)] opacity-70 transition duration-500 group-hover:opacity-100" />
                <div className={`relative grid min-h-[500px] gap-8 p-6 sm:p-9 lg:grid-cols-2 lg:items-center lg:p-12 ${index % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}>
                  <div className="relative z-10">
                    <span className="font-mono text-[9px] uppercase tracking-[.2em] text-[#a88dff]">Project / {String(index + 1).padStart(2, "0")}</span>
                    <h3 className="mt-4 max-w-lg text-3xl font-semibold tracking-[-.045em] sm:text-4xl"><Link href={`/proyectos/${project.slug}`} className="transition hover:text-[#c2b2ff]">{project.nombre}</Link></h3>
                    <p className="mt-5 max-w-lg text-sm leading-7 text-white/45">{project.descripcion}</p>
                    <div className="mt-6 flex flex-wrap gap-2">{project.tecnologiasutilizadas.map((tech)=><span key={tech} className="rounded-full border border-white/10 bg-white/[.04] px-3 py-1.5 font-mono text-[9px] text-white/48">{tech}</span>)}</div>
                    <div className="mt-8 flex flex-wrap gap-5"><Link href={`/proyectos/${project.slug}`} className="inline-flex items-center gap-2 text-xs font-bold text-white">Explorar proyecto <Icon name="arrow" className="size-4" /></Link><a href={project.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs font-semibold text-white/40 transition hover:text-white">GitHub <Icon name="external" className="size-3.5" /></a></div>
                  </div>
                  <Link href={`/proyectos/${project.slug}`} className="relative z-10 block" aria-label={`Ver detalles de ${project.nombre}`}>
                    <div className="relative aspect-[16/10] overflow-hidden rounded-[24px] border border-white/12 bg-[#0b0b20] shadow-[0_28px_70px_rgba(0,0,0,.4)] transition duration-500 group-hover:-translate-y-2 group-hover:rotate-[.5deg] motion-reduce:transform-none">
                      <div className="flex h-8 items-center gap-1.5 border-b border-white/8 bg-[#0b0b1b] px-4"><span className="size-1.5 rounded-full bg-white/15" /><span className="size-1.5 rounded-full bg-white/15" /><span className="size-1.5 rounded-full bg-white/15" /></div>
                      <div className="relative h-[calc(100%-2rem)]"><Image src={project.imagenes[0]} alt={`Vista previa de ${project.nombre}`} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover opacity-85 transition duration-700 group-hover:scale-[1.025] group-hover:opacity-100 motion-reduce:transform-none" /></div>
                    </div>
                  </Link>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

        <div id="certificates" className="mt-28">
          <ScrollReveal className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="text-[10px] font-bold uppercase tracking-[.22em] text-[#a88dff]">04 / Certificados</p><h2 className="mt-3 text-3xl font-semibold tracking-[-.045em]">Aprendizaje continuo.</h2></div><p className="max-w-sm text-xs leading-6 text-white/35">Formación complementaria que fortalece mi perfil técnico.</p></ScrollReveal>
          <div className="mt-8 grid gap-3 md:grid-cols-2">{certificates.map((certificate,index)=><ScrollReveal key={certificate.id ?? certificate.nombre} delay={(index%2)*90}><a href={certificate.url} target="_blank" rel="noopener noreferrer" className="flex min-h-36 gap-4 rounded-[22px] border border-white/9 bg-[#080817] p-5 transition hover:border-[#8f70f0]/40 hover:bg-[#0c0b20]"><span className="grid size-10 shrink-0 place-items-center rounded-xl border border-[#8f70f0]/20 bg-[#8f70f0]/10 text-[#ad96ff]"><Icon name="graduation" className="size-4" /></span><span><strong className="block text-sm text-white/78">{certificate.nombre}</strong><span className="mt-1 block font-mono text-[9px] text-[#a88dff]">{certificate.institucion} · {certificate.fecha}</span><span className="mt-3 block text-xs leading-5 text-white/35">{certificate.descripcion}</span></span></a></ScrollReveal>)}</div>
        </div>
      </div>
    </section>
  );
}
