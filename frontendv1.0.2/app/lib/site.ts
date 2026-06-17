const fallbackUrl = "http://localhost:3000";

function withProtocol(url: string) {
  return url.startsWith("http://") || url.startsWith("https://") ? url : `https://${url}`;
}

export function getSiteUrl() {
  const configuredUrl =
    process.env.NEXT_PUBLIC_SITE_URL ??
    process.env.VERCEL_PROJECT_PRODUCTION_URL ??
    process.env.VERCEL_URL ??
    fallbackUrl;

  return new URL(withProtocol(configuredUrl));
}

export const siteConfig = {
  name: "Denis Jamil",
  title: "Denis Jamil | Backend Developer",
  description:
    "Portafolio de Denis Jamil, desarrollador backend y estudiante de Ingenieria de Sistemas. Conoce sus proyectos, habilidades y experiencia.",
  email: "denistineohuancas@gmail.com",
  github: "https://github.com/djamth",
  linkedin: "https://www.linkedin.com/in/denistineo",

  seo: {
    titleTemplate: "%s | Denis Jamil",              
    defaultTitle: "Denis Jamil | Backend Developer",
    defaultDescription: "Portafolio de Denis Jamil...",
    keywords: ["backend", "developer", "sistemas", "portafolio","portafolio","Denis Jamil","desarrollador backend","proyectos","habilidades","experiencia"], 
    author: "Denis Jamil Tineo Huancas",
    robots: {
      index: true,
      follow: true,
    },
  },

  og: {
    title: "Denis Jamil | Backend Developer",
    description: "Portafolio de Denis Jamil, desarrollador backend y estudiante de Ingeniería de Sistemas.",
    image: "/portafolio.png",  
    type: "website",
    locale: "es_PE",
    siteName: "Denis Jamil",
    imageWidth: 1200,
    imageHeight: 630,
    imageAlt: "Portafolio de Denis Jamil - Backend Developer",
  },

  
};
