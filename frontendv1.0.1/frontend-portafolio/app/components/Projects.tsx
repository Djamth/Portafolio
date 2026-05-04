'use client';

import { useEffect, useState } from "react";
import Image from "next/image";
import { API_URL, Certificate, fallbackCertificates, fallbackProjects, Project } from "../lib/portfolio";

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>(fallbackProjects);
  const [certificates, setCertificates] = useState<Certificate[]>(fallbackCertificates);

  useEffect(() => {
    async function loadContent() {
      try {
        const [projectResponse, certificateResponse] = await Promise.all([
          fetch(`${API_URL}/proyectos`, { cache: "no-store" }),
          fetch(`${API_URL}/certificados`, { cache: "no-store" }),
        ]);

        if (projectResponse.ok) {
          const data = await projectResponse.json();
          if (Array.isArray(data) && data.length > 0) setProjects(data);
        }

        if (certificateResponse.ok) {
          const data = await certificateResponse.json();
          if (Array.isArray(data) && data.length > 0) setCertificates(data);
        }
      } catch {
        setProjects(fallbackProjects);
        setCertificates(fallbackCertificates);
      }
    }

    loadContent();
  }, []);

  return (
    <section id="projects" className="border-b border-[#333] bg-black px-5 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-10 text-center text-4xl font-bold">
          <span className="bg-gradient-to-r from-[#00d9ff] to-[#ff006e] bg-clip-text text-transparent">
            Proyectos Destacados
          </span>
        </h2>

        <div className="grid gap-10 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.id ?? project.nombre}
              className="overflow-hidden rounded-[10px] border border-[#333] bg-[#1a1a1a] shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition hover:-translate-y-2"
            >
              <div className="relative h-[220px] w-full">
                <Image
                  src={project.imagenes?.[0] || fallbackProjects[0].imagenes[0]}
                  alt={project.nombre}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="bg-gradient-to-r from-[#00d9ff] to-[#ff006e] bg-clip-text text-2xl font-bold text-transparent">
                  {project.nombre}
                </h3>
                <p className="mt-3 leading-7 text-[#a0a0a0]">{project.descripcion}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tecnologiasutilizadas?.map((tech) => (
                    <span key={tech} className="rounded-full border border-[#333] bg-[#2a2a2a] px-3 py-1 text-sm font-semibold text-[#00d9ff]">
                      {tech}
                    </span>
                  ))}
                </div>
                <a href={project.url} target="_blank" className="mt-5 inline-flex rounded bg-[#00d9ff] px-5 py-2 font-bold text-black transition hover:bg-[#00b8cc]">
                  Ver mas
                </a>
              </div>
            </article>
          ))}
        </div>

        <div id="certificates" className="mt-20">
          <h2 className="mb-8 text-center text-4xl font-bold">
            <span className="bg-gradient-to-r from-[#00d9ff] to-[#ff006e] bg-clip-text text-transparent">
              Certificados
            </span>
          </h2>
          <div className="grid gap-5 md:grid-cols-2">
            {certificates.map((certificate) => (
              <a
                key={certificate.id ?? certificate.nombre}
                href={certificate.url}
                target="_blank"
                className="rounded-lg border border-[#333] bg-[#1a1a1a] p-5 shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition hover:-translate-y-1 hover:border-[#00d9ff]"
              >
                <h3 className="bg-gradient-to-r from-[#00d9ff] to-[#ff006e] bg-clip-text text-xl font-bold text-transparent">
                  {certificate.nombre}
                </h3>
                <p className="mt-1 font-semibold text-[#00d9ff]">{certificate.institucion}</p>
                <p className="mt-1 text-sm italic text-[#a0a0a0]">{certificate.fecha}</p>
                <p className="mt-3 leading-7 text-[#a0a0a0]">{certificate.descripcion}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
