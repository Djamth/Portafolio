'use client';

import { FormEvent, useEffect, useState } from "react";
import Link from "next/link";
import { API_URL, Certificate, Project } from "../lib/portfolio";

const emptyProject: Project = {
  nombre: "",
  descripcion: "",
  url: "",
  imagenes: [""],
  tecnologiasutilizadas: [""],
};

const emptyCertificate: Certificate = {
  nombre: "",
  institucion: "",
  descripcion: "",
  fecha: "",
  url: "",
};

export default function AdminPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [certificates, setCertificates] = useState<Certificate[]>([]);
  const [project, setProject] = useState<Project>(emptyProject);
  const [certificate, setCertificate] = useState<Certificate>(emptyCertificate);
  const [message, setMessage] = useState("Conecta con el backend para administrar tu contenido.");

  async function loadContent() {
    try {
      const [projectResponse, certificateResponse] = await Promise.all([
        fetch(`${API_URL}/proyectos`, { cache: "no-store" }),
        fetch(`${API_URL}/certificados`, { cache: "no-store" }),
      ]);
      setProjects(projectResponse.ok ? await projectResponse.json() : []);
      setCertificates(certificateResponse.ok ? await certificateResponse.json() : []);
      setMessage("Contenido sincronizado con el backend.");
    } catch {
      setMessage("No se pudo conectar al backend. Revisa que Spring Boot este activo en el puerto 8080.");
    }
  }

  useEffect(() => {
    let isActive = true;

    async function loadInitialContent() {
      try {
        const [projectResponse, certificateResponse] = await Promise.all([
          fetch(`${API_URL}/proyectos`, { cache: "no-store" }),
          fetch(`${API_URL}/certificados`, { cache: "no-store" }),
        ]);

        if (!isActive) return;

        setProjects(projectResponse.ok ? await projectResponse.json() : []);
        setCertificates(certificateResponse.ok ? await certificateResponse.json() : []);
        setMessage("Contenido sincronizado con el backend.");
      } catch {
        if (isActive) {
          setMessage("No se pudo conectar al backend. Revisa que Spring Boot este activo en el puerto 8080.");
        }
      }
    }

    void loadInitialContent();

    return () => {
      isActive = false;
    };
  }, []);

  async function createProject(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const payload = {
      ...project,
      imagenes: project.imagenes.filter(Boolean),
      tecnologiasutilizadas: project.tecnologiasutilizadas.filter(Boolean),
    };

    await fetch(`${API_URL}/proyectos`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    setProject(emptyProject);
    await loadContent();
  }

  async function createCertificate(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    await fetch(`${API_URL}/certificados`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(certificate),
    });
    setCertificate(emptyCertificate);
    await loadContent();
  }

  async function removeItem(type: "proyectos" | "certificados", id?: number) {
    if (!id) return;
    await fetch(`${API_URL}/${type}/${id}`, { method: "DELETE" });
    await loadContent();
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <header className="border-b border-[#333] bg-[#0a0a0a]">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-6 md:flex-row md:items-center md:justify-between md:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#00d9ff]">Administracion</p>
            <h1 className="mt-2 bg-gradient-to-r from-[#00d9ff] to-[#ff006e] bg-clip-text text-4xl font-black text-transparent">
              Panel del portafolio
            </h1>
          </div>
          <Link href="/" className="w-fit rounded bg-[#00d9ff] px-4 py-2 text-sm font-bold text-black transition hover:bg-white">
            Volver al sitio
          </Link>
        </div>
      </header>

      <section className="mx-auto grid max-w-7xl gap-6 px-5 py-8 md:px-8 lg:grid-cols-[1fr_1fr]">
        <form onSubmit={createProject} className="rounded border border-[#333] bg-[#1a1a1a] p-5 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
          <h2 className="bg-gradient-to-r from-[#00d9ff] to-[#ff006e] bg-clip-text text-2xl font-black text-transparent">Nuevo proyecto</h2>
          <div className="mt-5 grid gap-4">
            <input className="rounded border border-[#333] bg-white/5 px-4 py-3 text-white placeholder:text-white/45" placeholder="Nombre" value={project.nombre} onChange={(e) => setProject({ ...project, nombre: e.target.value })} required />
            <textarea className="min-h-28 rounded border border-[#333] bg-white/5 px-4 py-3 text-white placeholder:text-white/45" placeholder="Descripcion" value={project.descripcion} onChange={(e) => setProject({ ...project, descripcion: e.target.value })} required />
            <input className="rounded border border-[#333] bg-white/5 px-4 py-3 text-white placeholder:text-white/45" placeholder="URL del proyecto" value={project.url} onChange={(e) => setProject({ ...project, url: e.target.value })} required />
            <input className="rounded border border-[#333] bg-white/5 px-4 py-3 text-white placeholder:text-white/45" placeholder="URL de imagen" value={project.imagenes[0]} onChange={(e) => setProject({ ...project, imagenes: [e.target.value] })} />
            <input className="rounded border border-[#333] bg-white/5 px-4 py-3 text-white placeholder:text-white/45" placeholder="Tecnologias separadas por coma" value={project.tecnologiasutilizadas.join(", ")} onChange={(e) => setProject({ ...project, tecnologiasutilizadas: e.target.value.split(",").map((item) => item.trim()) })} />
            <button className="rounded bg-[#00d9ff] px-4 py-3 font-bold text-black transition hover:bg-white">Guardar proyecto</button>
          </div>
        </form>

        <form onSubmit={createCertificate} className="rounded border border-[#333] bg-[#1a1a1a] p-5 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
          <h2 className="bg-gradient-to-r from-[#00d9ff] to-[#ff006e] bg-clip-text text-2xl font-black text-transparent">Nuevo certificado</h2>
          <div className="mt-5 grid gap-4">
            <input className="rounded border border-[#333] bg-white/5 px-4 py-3 text-white placeholder:text-white/45" placeholder="Nombre" value={certificate.nombre} onChange={(e) => setCertificate({ ...certificate, nombre: e.target.value })} required />
            <input className="rounded border border-[#333] bg-white/5 px-4 py-3 text-white placeholder:text-white/45" placeholder="Institucion" value={certificate.institucion} onChange={(e) => setCertificate({ ...certificate, institucion: e.target.value })} required />
            <textarea className="min-h-28 rounded border border-[#333] bg-white/5 px-4 py-3 text-white placeholder:text-white/45" placeholder="Descripcion" value={certificate.descripcion} onChange={(e) => setCertificate({ ...certificate, descripcion: e.target.value })} required />
            <input className="rounded border border-[#333] bg-white/5 px-4 py-3 text-white" type="date" value={certificate.fecha} onChange={(e) => setCertificate({ ...certificate, fecha: e.target.value })} required />
            <input className="rounded border border-[#333] bg-white/5 px-4 py-3 text-white placeholder:text-white/45" placeholder="URL del certificado" value={certificate.url} onChange={(e) => setCertificate({ ...certificate, url: e.target.value })} required />
            <button className="rounded bg-[#00d9ff] px-4 py-3 font-bold text-black transition hover:bg-white">Guardar certificado</button>
          </div>
        </form>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-5 pb-12 md:px-8 lg:grid-cols-2">
        <div className="rounded border border-[#333] bg-[#1a1a1a] p-5">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-2xl font-black">Proyectos</h2>
            <span className="rounded bg-[#00d9ff] px-3 py-1 text-sm font-bold text-black">{projects.length}</span>
          </div>
          <div className="mt-4 grid gap-3">
            {projects.map((item) => (
              <div key={item.id} className="flex items-center justify-between gap-3 rounded border border-[#333] bg-black/30 p-3">
                <span className="font-semibold">{item.nombre}</span>
                <button onClick={() => removeItem("proyectos", item.id)} className="rounded border border-[#333] px-3 py-2 text-sm font-bold text-[#00d9ff] hover:bg-[#00d9ff] hover:text-black">
                  Eliminar
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded border border-[#333] bg-[#1a1a1a] p-5">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-2xl font-black">Certificados</h2>
            <span className="rounded bg-[#00d9ff] px-3 py-1 text-sm font-bold text-black">{certificates.length}</span>
          </div>
          <div className="mt-4 grid gap-3">
            {certificates.map((item) => (
              <div key={item.id} className="flex items-center justify-between gap-3 rounded border border-[#333] bg-black/30 p-3">
                <span className="font-semibold">{item.nombre}</span>
                <button onClick={() => removeItem("certificados", item.id)} className="rounded border border-[#333] px-3 py-2 text-sm font-bold text-[#00d9ff] hover:bg-[#00d9ff] hover:text-black">
                  Eliminar
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <p className="mx-auto max-w-7xl px-5 pb-8 text-sm font-semibold text-[#a0a0a0] md:px-8">{message}</p>
    </main>
  );
}
