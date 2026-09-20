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
    <nav aria-label="Navegación principal" className="sticky top-0 z-50 border-b border-[#dfe5f0]/80 bg-white/75 text-[#1c2943] shadow-[0_5px_30px_rgba(46,65,106,.04)] backdrop-blur-2xl">
      <div className="section-shell flex h-20 items-center justify-between gap-5">
        <a href="/#home" className="group flex items-center gap-3" aria-label="Denis Jamil, ir al inicio">
          <span className="grid size-11 place-items-center rounded-2xl border border-[#d7def4] bg-gradient-to-br from-white to-[#e9edff] text-lg font-black text-[#345be8] shadow-[0_8px_20px_rgba(52,91,232,.08)] transition group-hover:border-[#9aadee]">DJ</span>
          <span><strong className="block text-base leading-none text-[#1c2943]">Denis Jamil</strong><span className="mt-1 block text-xs font-medium text-[#68758d]">Backend Developer</span></span>
        </a>
        <div className="hidden items-center gap-6 lg:flex">
          {links.map((link) => <a key={link.href} href={`/${link.href}`} className="relative py-2 text-sm font-semibold text-[#65718a] transition-colors duration-200 hover:text-[#345be8] focus-visible:text-[#345be8]">{link.label}</a>)}
        </div>
        <a href="/#contact" className="hidden items-center gap-2 rounded-xl bg-[#345be8] px-5 py-3 text-sm font-bold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-[#2547bd] sm:inline-flex motion-reduce:transform-none"><Icon name="mail" className="size-4" />Contactarme</a>
        <button type="button" className="grid size-11 place-items-center rounded-xl border border-[#d5ddec] bg-white/70 text-[#1c2943] transition hover:border-[#8ca4ee] lg:hidden" aria-label={open ? "Cerrar menú" : "Abrir menú"} aria-controls="mobile-navigation" aria-expanded={open} onClick={() => setOpen((value) => !value)}><Icon name={open ? "x" : "menu"} /></button>
      </div>
      {open && <div id="mobile-navigation" className="border-t border-[#dfe5f0] bg-white/95 px-5 py-4 backdrop-blur-2xl lg:hidden"><div className="mx-auto grid max-w-6xl gap-1">{links.map((link) => <a key={link.href} href={`/${link.href}`} className="rounded-lg px-3 py-3 text-sm font-semibold text-[#34415c] transition hover:bg-[#edf1ff] hover:text-[#345be8]" onClick={() => setOpen(false)}>{link.label}</a>)}</div></div>}
    </nav>
  );
}
