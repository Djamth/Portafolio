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
    <section id="projects" className="relative overflow-hidden bg-[#f4f6fc] py-24 text-[#1c2943]">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_5%_20%,rgba(214,222,255,.45),transparent_35%),radial-gradient(ellipse_at_90%_80%,rgba(220,239,241,.45),transparent_35%)]" />
      <div className="section-shell relative">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-[#345be8]">Proyectos</p>
          <h2 className="mt-3 text-4xl font-black tracking-[-0.05em] text-[#1c2943]">Soluciones que he construido</h2>
          <p className="mt-4 text-sm leading-6 text-[#63718b]">Proyectos donde aplico backend, integraciones y una interfaz pensada para usuarios reales.</p>
        </ScrollReveal>
        <div aria-label="Filtrar proyectos por tecnología" role="group" className="mt-10 flex flex-wrap justify-center gap-2">
          {technologies.map((technology) => {
            const active = selectedTechnology === technology;
            return <button key={technology} type="button" aria-pressed={active} onClick={() => setSelectedTechnology(technology)} className={`rounded-full border px-4 py-2 text-xs font-bold transition-colors ${active ? "border-[#345be8] bg-[#345be8] text-white" : "border-[#d5ddec] bg-white/75 text-[#58667e] hover:border-[#8ca4ee] hover:text-[#345be8]"}`}>{technology}</button>;
          })}
        </div>
        <p aria-live="polite" className="mt-5 text-center text-xs text-[#63718b]">{visibleProjects.length} {visibleProjects.length === 1 ? "proyecto encontrado" : "proyectos encontrados"}</p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {visibleProjects.map((project, index) => (
            <ScrollReveal key={project.slug} delay={(index % 2) * 120}>
            <article className="group overflow-hidden rounded-[26px] border border-white/90 bg-white/75 shadow-[0_18px_45px_rgba(53,76,120,.08)] backdrop-blur-xl transition duration-300 hover:border-[#b8c7f1] hover:shadow-[0_24px_55px_rgba(53,76,120,.14)]">
              <Link href={`/proyectos/${project.slug}`} className="block" aria-label={`Ver detalles de ${project.nombre}`}><div className="relative h-56 overflow-hidden bg-[#e8edf7]"><Image src={project.imagenes[0]} alt={`Vista previa de ${project.nombre}`} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover transition duration-500 group-hover:scale-105 motion-reduce:transform-none" /></div></Link>
              <div className="p-6"><h3 className="text-xl font-black text-[#1c2943]"><Link href={`/proyectos/${project.slug}`} className="transition hover:text-[#345be8]">{project.nombre}</Link></h3><p className="mt-3 text-sm leading-6 text-[#63718b]">{project.descripcion}</p><div className="mt-4 flex flex-wrap gap-2">{project.tecnologiasutilizadas.map((tech) => <span key={tech} className="rounded-full border border-[#d8e0fa] bg-[#edf1ff] px-3 py-1 text-[11px] font-bold text-[#345be8]">{tech}</span>)}</div><div className="mt-5 flex flex-wrap items-center gap-5"><Link href={`/proyectos/${project.slug}`} className="inline-flex items-center gap-2 text-sm font-black text-[#345be8] transition hover:text-[#2547bd]">Ver detalles <span aria-hidden="true">→</span></Link><a href={project.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-[#63718b] transition hover:text-[#345be8]">GitHub <Icon name="external" className="size-4" /></a></div></div>
            </article>
            </ScrollReveal>
          ))}
        </div>
        <div id="certificates" className="mt-20"><div className="mx-auto max-w-2xl text-center"><p className="text-xs font-black uppercase tracking-[0.24em] text-[#345be8]">Certificados</p><h2 className="mt-3 text-3xl font-black tracking-[-0.04em] text-[#1c2943]">Aprendizaje constante</h2></div><div className="mt-8 grid gap-4 md:grid-cols-2">{certificates.map((certificate) => <a key={certificate.id ?? certificate.nombre} href={certificate.url} target="_blank" rel="noopener noreferrer" className="rounded-[22px] border border-white/90 bg-white/75 p-5 shadow-[0_12px_35px_rgba(53,76,120,.05)] backdrop-blur-xl transition duration-200 hover:border-[#b8c7f1] hover:shadow-[0_14px_30px_rgba(53,76,120,.12)]"><div className="flex gap-4"><span className="grid size-11 shrink-0 place-items-center rounded-xl border border-[#d8e0fa] bg-[#edf1ff] text-[#345be8]"><Icon name="graduation" /></span><span><strong className="block text-[#1c2943]">{certificate.nombre}</strong><span className="mt-1 block text-xs font-bold text-[#345be8]">{certificate.institucion} · {certificate.fecha}</span><span className="mt-2 block text-sm leading-5 text-[#63718b]">{certificate.descripcion}</span></span></div></a>)}</div></div>
      </div>
    </section>
  );
}
