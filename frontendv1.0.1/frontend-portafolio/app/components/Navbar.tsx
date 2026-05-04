'use client';

import { useState } from "react";

const links = [
  { href: "#home", label: "Inicio" },
  { href: "#about", label: "Sobre mi" },
  { href: "#skills", label: "Habilidades" },
  { href: "#projects", label: "Proyectos" },
  { href: "#experience", label: "Experiencia" },
  { href: "#contact", label: "Contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-[#333] bg-black/95 shadow-[0_10px_30px_rgba(0,0,0,0.5)] backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a
          href="#home"
          className="bg-gradient-to-r from-[#00d9ff] to-[#ff006e] bg-clip-text text-2xl font-bold text-transparent"
        >
          Denis Jamil
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="relative font-medium text-white transition hover:text-[#00d9ff]">
              {link.label}
            </a>
          ))}
          <a href="/admin" className="rounded bg-[#00d9ff] px-4 py-2 font-bold text-black transition hover:-translate-y-0.5 hover:bg-white">
            Admin
          </a>
        </div>

        <button
          className="grid gap-1.5 md:hidden"
          aria-label="Abrir menu"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="block h-0.5 w-7 rounded bg-white" />
          <span className="block h-0.5 w-7 rounded bg-white" />
          <span className="block h-0.5 w-7 rounded bg-white" />
        </button>
      </div>

      {open && (
        <div className="border-t border-[#333] bg-[#0a0a0a] px-5 py-3 md:hidden">
          <div className="mx-auto grid max-w-6xl gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="border-b border-[#333] py-3 font-medium text-white"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a href="/admin" className="mt-2 rounded bg-[#00d9ff] px-4 py-3 text-center font-bold text-black">
              Admin
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
