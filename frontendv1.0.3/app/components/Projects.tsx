'use client';

import { useState } from "react";
import ProjectGallery from "./ProjectGallery";
import Icon from "./Icon";
import ScrollReveal from "./ScrollReveal";
import { certificates, projects } from "../lib/portfolio";

const technologies = ["Todas", ...Array.from(new Set(projects.flatMap((project) => project.tecnologiasutilizadas)))];

export default function Projects() {
  const [selectedTechnology, setSelectedTechnology] = useState("Todas");
  const visibleProjects = selectedTechnology === "Todas" ? projects : projects.filter((project) => project.tecnologiasutilizadas.includes(selectedTechnology));

  return (
    <section id="projects" className="relative bg-[#000000] py-20 text-white">
      <div className="section-shell relative">
        <ScrollReveal className="mx-auto max-w-3xl text-center">
          <p className="text-[10px] font-bold uppercase tracking-[.22em] text-[#8dc4ff]">03 / Proyectos</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-.045em] sm:text-4xl">Proyectos seleccionados.</h2>
          <p className="mt-3 text-sm text-white/50">Del problema a una solución que funciona.</p>
        </ScrollReveal>

        <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
          <label htmlFor="project-technology" className="text-xs text-white/50">Tecnología</label>
          <select id="project-technology" value={selectedTechnology} onChange={event => setSelectedTechnology(event.target.value)} className="rounded-full border border-white/15 bg-[#080e18] px-4 py-2 text-xs text-white/80">
            {technologies.map(technology => <option key={technology} value={technology}>{technology === "Todas" ? "Todas las tecnologías" : technology}</option>)}
          </select>
          <span aria-live="polite" className="font-mono text-[10px] text-white/40">{visibleProjects.length} {visibleProjects.length === 1 ? "proyecto" : "proyectos"}</span>
        </div>

        <ProjectGallery key={selectedTechnology} projects={visibleProjects} />

        <div id="certificates" className="mt-28">
          <ScrollReveal className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="text-[10px] font-bold uppercase tracking-[.22em] text-[#8dc4ff]">04 / Certificados</p><h2 className="mt-3 text-3xl font-semibold tracking-[-.045em]">Aprendizaje continuo.</h2></div><p className="max-w-sm text-xs leading-6 text-white/35">Formación complementaria que fortalece mi perfil técnico.</p></ScrollReveal>
          <div className="mt-8 grid gap-3 md:grid-cols-2">{certificates.map((certificate,index)=><ScrollReveal key={certificate.id ?? certificate.nombre} delay={(index%2)*90} direction="scale"><a href={certificate.url} target="_blank" rel="noopener noreferrer" className="flex min-h-36 gap-4 rounded-[22px] border border-white/9 bg-[#080b10] p-5 transition hover:border-[#70adf0]/40 hover:bg-[#0b111c]"><span className="grid size-10 shrink-0 place-items-center rounded-xl border border-[#70adf0]/20 bg-[#70adf0]/10 text-[#96c8ff]"><Icon name="graduation" className="size-4" /></span><span><strong className="block text-sm text-white/78">{certificate.nombre}</strong><span className="mt-1 block font-mono text-[9px] text-[#8dc4ff]">{certificate.institucion} · {certificate.fecha}</span><span className="mt-3 block text-xs leading-5 text-white/35">{certificate.descripcion}</span></span></a></ScrollReveal>)}</div>
        </div>
      </div>
    </section>
  );
}
