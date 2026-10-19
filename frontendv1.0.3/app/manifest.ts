import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Denis Jamil | Portafolio",
    short_name: "Denis Jamil",
    description: "Portafolio profesional de Denis Jamil, desarrollador backend.",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#007bff",
    icons: [{ src: "/dj-logo.svg", sizes: "any", type: "image/svg+xml", purpose: "any" }],
  };
}
