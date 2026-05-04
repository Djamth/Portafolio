export type Project = {
  id?: number;
  nombre: string;
  descripcion: string;
  url: string;
  imagenes: string[];
  tecnologiasutilizadas: string[];
};

export type Certificate = {
  id?: number;
  nombre: string;
  institucion: string;
  descripcion: string;
  fecha: string;
  url: string;
};

export const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8080/api";

export const fallbackProjects: Project[] = [
  {
    id: 1,
    nombre: "Portafolio Administrativo",
    descripcion:
      "Dashboard para publicar proyectos, certificados y contenido profesional desde una interfaz simple.",
    url: "https://github.com/",
    imagenes: ["/portfolio/image.png"],
    tecnologiasutilizadas: ["Next.js", "Spring Boot", "H2", "REST API"],
  },
  {
    id: 2,
    nombre: "API de Proyectos",
    descripcion:
      "Backend modular con entidades, DTOs, mappers, servicios y endpoints listos para conectar al frontend.",
    url: "https://github.com/",
    imagenes: ["/portfolio/roles.png"],
    tecnologiasutilizadas: ["Java", "JPA", "Maven", "Postman"],
  },
];

export const fallbackCertificates: Certificate[] = [
  {
    id: 1,
    nombre: "Spring Boot Backend",
    institucion: "Platzi",
    descripcion: "Fundamentos de APIs REST, servicios y persistencia con Spring Boot.",
    fecha: "2026-04-20",
    url: "https://platzi.com/",
  },
  {
    id: 2,
    nombre: "Frontend Moderno",
    institucion: "Open Learning",
    descripcion: "Diseno de interfaces con React, Next.js y sistemas visuales responsivos.",
    fecha: "2026-03-12",
    url: "https://developer.mozilla.org/",
  },
];
