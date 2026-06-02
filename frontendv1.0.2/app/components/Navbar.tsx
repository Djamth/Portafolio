'use client';

import { useState } from "react";
import Icon from "./Icon";

const links = [
  { href: "#home", label: "Inicio" },
  { href: "#about", label: "Sobre mi" },
  { href: "#projects", label: "Proyectos" },
  { href: "#skills", label: "Habilidades" },
  { href: "#experience", label: "Experiencia" },
  { href: "#contact", label: "Contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-[#ebeef8] bg-white/90 backdrop-blur-xl">
      <div className="section-shell flex h-20 items-center justify-between">
        <a href="#home" className="flex items-center gap-3">
          <span className="grid size-11 place-items-center rounded-2xl bg-gradient-to-br from-[#4b35ff] to-[#a02cff] text-lg font-black text-white shadow-[0_8px_18px_rgba(94,58,255,0.25)]">
            DJ
          </span>
          <span>
            <strong className="block text-base leading-none text-[#101228]">Denis Jamil</strong>
            <span className="mt-1 block text-xs font-medium text-[#717792]">Backend Developer</span>
          </span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {links.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              className={`relative py-2 text-sm font-semibold transition hover:text-[#6335f5] ${
                index === 0 ? "text-[#6335f5] after:absolute after:bottom-0 after:left-1/2 after:size-1 after:-translate-x-1/2 after:rounded-full after:bg-[#6335f5]" : "text-[#343850]"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 sm:flex">
         
          <a href="#contact" className="flex items-center gap-2 rounded-xl bg-[#111326] px-5 py-3 text-sm font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[#6335f5]">
            <Icon name="mail" className="size-4" />
            Contactarme
          </a>
        </div>

        <button
          className="grid size-10 place-items-center rounded-xl border border-[#e3e5ef] text-[#25283c] lg:hidden"
          aria-label={open ? "Cerrar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <Icon name={open ? "x" : "menu"} />
        </button>
      </div>

      {open && (
        <div className="border-t border-[#ebeef8] bg-white px-5 py-4 lg:hidden">
          <div className="mx-auto grid max-w-6xl gap-1">
            {links.map((link) => (
              <a key={link.href} href={link.href} className="rounded-lg px-3 py-3 text-sm font-semibold text-[#343850] hover:bg-[#f4f1ff]" onClick={() => setOpen(false)}>
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
