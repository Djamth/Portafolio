'use client';

import { useState } from "react";
import Icon from "./Icon";

const links = [
  { href: "#home", label: "Inicio" },
  { href: "#about", label: "Sobre mí" },
  { href: "#projects", label: "Proyectos" },
  { href: "#skills", label: "Habilidades" },
  { href: "#experience", label: "Experiencia" },
  { href: "#contact", label: "Contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav aria-label="Navegación principal" className="sticky top-0 z-50 border-b border-white/10 bg-[#080d17]/90 backdrop-blur-2xl">
      <div className="section-shell flex h-20 items-center justify-between gap-5">
        <a href="/#home" className="group flex items-center gap-3" aria-label="Denis Jamil, ir al inicio">
          <span className="grid size-11 place-items-center rounded-2xl border border-cyan-300/40 bg-cyan-400/10 text-lg font-black text-[#00d9ff] shadow-[0_0_24px_rgba(0,217,255,0.12)] transition group-hover:border-cyan-300">DJ</span>
          <span><strong className="block text-base leading-none text-[#f5faff]">Denis Jamil</strong><span className="mt-1 block text-xs font-medium text-[#a8b8cc]">Backend Developer</span></span>
        </a>

        <div className="hidden items-center gap-6 lg:flex">
          {links.map((link) => (
            <a key={link.href} href={`/${link.href}`} className="relative py-2 text-sm font-semibold text-[#a8b8cc] transition-colors duration-200 hover:text-[#00d9ff] focus-visible:text-[#00d9ff]">{link.label}</a>
          ))}
        </div>

        <a href="/#contact" className="hidden items-center gap-2 rounded-xl border border-cyan-300/30 bg-[#00d9ff] px-5 py-3 text-sm font-bold text-[#080d17] transition duration-200 hover:-translate-y-0.5 hover:bg-[#79ebff] sm:inline-flex motion-reduce:transform-none"><Icon name="mail" className="size-4" />Contactarme</a>

        <button type="button" className="grid size-11 place-items-center rounded-xl border border-white/20 text-[#f5faff] transition hover:border-cyan-300/60 lg:hidden" aria-label={open ? "Cerrar menú" : "Abrir menú"} aria-controls="mobile-navigation" aria-expanded={open} onClick={() => setOpen((value) => !value)}><Icon name={open ? "x" : "menu"} /></button>
      </div>

      {open && (
        <div id="mobile-navigation" className="border-t border-white/10 bg-[#0d1625] px-5 py-4 lg:hidden">
          <div className="mx-auto grid max-w-6xl gap-1">
            {links.map((link) => <a key={link.href} href={`/${link.href}`} className="rounded-lg px-3 py-3 text-sm font-semibold text-[#dce9f6] transition hover:bg-cyan-400/10 hover:text-[#00d9ff]" onClick={() => setOpen(false)}>{link.label}</a>)}
          </div>
        </div>
      )}
    </nav>
  );
}
