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

export const projects: Project[] = [
  {
    id: 0,
    nombre: "Portafolio Personal",
    descripcion:
      "Mi portafolio personal construido con Next.js, Tailwind CSS y TypeScript. Muestra mis proyectos, habilidades y experiencia de manera clara y atractiva.",
    url: "https://github.com/djamth/portafolio",
    imagenes: ["/portfolio/portafolio.png"],
    tecnologiasutilizadas: ["Next.js", "Tailwind CSS", "TypeScript"],
  },
  {
    id: 1,
    nombre: "Sistema de votacion electronica",
    descripcion:
      "Proyeto  para llevar el control de votos en elecciones academicas , con autenticacion, roles de usuario y una interfaz clara para votar y revisar resultados.",
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

export const certificates: Certificate[] = [
  {
    id: 1,
    nombre: "Fundamentos de Conmutacion , Enrutamiento y Redes Inalambbricas",
    institucion: "CCNA",
    descripcion: "Fundamentos de conectividad, protocolos y arquitectura de red.",
    fecha: "2025-07-15",
    url:"https://www.credly.com/badges/05965fa1-3807-49b1-a546-e6fde5a5f6b5",
  },
  {
    id: 2,
    nombre: "Introduccion a la ciberseguridad",
    institucion: "CCNA",
    descripcion: "Conceptos basicos de ciberseguridad y proteccion de informacion.",
    fecha: "2025-04-12",
    url: "https://www.credly.com/badges/84fb91df-c290-4efc-8845-3027154ab966",
  },
];
