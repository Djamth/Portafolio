'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Icon from "./Icon";
import { certificates, projects } from "../lib/portfolio";

const technologies = ["Todas", ...Array.from(new Set(projects.flatMap((project) => project.tecnologiasutilizadas)))];

export default function Projects() {
  const [selectedTechnology, setSelectedTechnology] = useState("Todas");
  const visibleProjects = selectedTechnology === "Todas" ? projects : projects.filter((project) => project.tecnologiasutilizadas.includes(selectedTechnology));

  return (
    <section id="projects" className="bg-[#0b1220] py-24 text-[#f5faff]">
      <div className="section-shell">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-[#00d9ff]">Proyectos</p>
          <h2 className="mt-3 text-4xl font-black tracking-[-0.05em] text-[#f5faff]">Soluciones que he construido</h2>
          <p className="mt-4 text-sm leading-6 text-[#a8b8cc]">Proyectos donde aplico backend, integraciones y una interfaz pensada para usuarios reales.</p>
        </div>

        <div aria-label="Filtrar proyectos por tecnología" role="group" className="mt-10 flex flex-wrap justify-center gap-2">
          {technologies.map((technology) => {
            const active = selectedTechnology === technology;
            return <button key={technology} type="button" aria-pressed={active} onClick={() => setSelectedTechnology(technology)} className={`rounded-full border px-4 py-2 text-xs font-bold transition-colors ${active ? "border-[#00d9ff] bg-[#00d9ff] text-[#080d17]" : "border-white/15 bg-[#111c2e] text-[#a8b8cc] hover:border-cyan-300/50 hover:text-[#f5faff]"}`}>{technology}</button>;
          })}
        </div>
        <p aria-live="polite" className="mt-5 text-center text-xs text-[#a8b8cc]">{visibleProjects.length} {visibleProjects.length === 1 ? "proyecto encontrado" : "proyectos encontrados"}</p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {visibleProjects.map((project) => (
            <article key={project.slug} className="group overflow-hidden rounded-2xl border border-white/10 bg-[#111c2e] shadow-[0_18px_45px_rgba(0,0,0,0.16)] transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:shadow-[0_24px_55px_rgba(0,217,255,0.08)] motion-reduce:transform-none">
              <Link href={`/proyectos/${project.slug}`} className="block" aria-label={`Ver detalles de ${project.nombre}`}>
                <div className="relative h-56 overflow-hidden bg-[#172b3b]">
                  <Image src={project.imagenes[0]} alt={`Vista previa de ${project.nombre}`} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover transition duration-500 group-hover:scale-105 motion-reduce:transform-none" />
                </div>
              </Link>
              <div className="p-6">
                <h3 className="text-xl font-black text-[#f5faff]"><Link href={`/proyectos/${project.slug}`} className="transition hover:text-[#00d9ff]">{project.nombre}</Link></h3>
                <p className="mt-3 text-sm leading-6 text-[#a8b8cc]">{project.descripcion}</p>
                <div className="mt-4 flex flex-wrap gap-2">{project.tecnologiasutilizadas.map((tech) => <span key={tech} className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-[11px] font-bold text-[#79ebff]">{tech}</span>)}</div>
                <div className="mt-5 flex flex-wrap items-center gap-5">
                  <Link href={`/proyectos/${project.slug}`} className="inline-flex items-center gap-2 text-sm font-black text-[#00d9ff] transition hover:text-[#79ebff]">Ver detalles <span aria-hidden="true">→</span></Link>
                  <a href={project.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-[#a8b8cc] transition hover:text-[#00d9ff]">GitHub <Icon name="external" className="size-4" /></a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div id="certificates" className="mt-20">
          <div className="mx-auto max-w-2xl text-center"><p className="text-xs font-black uppercase tracking-[0.24em] text-[#00d9ff]">Certificados</p><h2 className="mt-3 text-3xl font-black tracking-[-0.04em] text-[#f5faff]">Aprendizaje constante</h2></div>
          <div className="mt-8 grid gap-4 md:grid-cols-2">{certificates.map((certificate) => <a key={certificate.id ?? certificate.nombre} href={certificate.url} target="_blank" rel="noopener noreferrer" className="rounded-2xl border border-white/10 bg-[#111c2e] p-5 transition duration-200 hover:-translate-y-1 hover:border-cyan-300/40 hover:shadow-[0_14px_26px_rgba(0,217,255,0.07)] motion-reduce:transform-none"><div className="flex gap-4"><span className="grid size-11 shrink-0 place-items-center rounded-xl border border-cyan-300/20 bg-cyan-300/10 text-[#00d9ff]"><Icon name="graduation" /></span><span><strong className="block text-[#f5faff]">{certificate.nombre}</strong><span className="mt-1 block text-xs font-bold text-[#00d9ff]">{certificate.institucion} · {certificate.fecha}</span><span className="mt-2 block text-sm leading-5 text-[#a8b8cc]">{certificate.descripcion}</span></span></div></a>)}</div>
        </div>
      </div>
    </section>
  );
}
