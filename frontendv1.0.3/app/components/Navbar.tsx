'use client';

import { useCallback, useEffect, useRef, useState } from "react";
import Icon from "./Icon";

const links = [
  { href: "#home", label: "Inicio" }, { href: "#about", label: "Sobre mí" },
  { href: "#projects", label: "Proyectos" }, { href: "#skills", label: "Stack" },
  { href: "#experience", label: "Trayectoria" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const cancelHide = useCallback(() => { if (timer.current) { clearTimeout(timer.current); timer.current = null; } }, []);
  const scheduleHide = useCallback(() => { cancelHide(); if (!open) timer.current = setTimeout(() => setVisible(false), 900); }, [cancelHide, open]);
  const reveal = useCallback(() => { setVisible(true); scheduleHide(); }, [scheduleHide]);

  useEffect(() => {
    const onScroll = () => reveal();
    const onPointerMove = (event: PointerEvent) => {
      if (event.clientY <= 72) { cancelHide(); setVisible(true); }
      else if (visible && !open && !timer.current) scheduleHide();
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    scheduleHide();
    return () => { window.removeEventListener("scroll", onScroll); window.removeEventListener("pointermove", onPointerMove); cancelHide(); };
  }, [cancelHide, open, reveal, scheduleHide, visible]);

  useEffect(() => { if (open) { cancelHide(); setVisible(true); } else scheduleHide(); }, [open, cancelHide, scheduleHide]);

  return (
    <nav aria-label="Navegación principal" data-visible={visible || open} onMouseEnter={cancelHide} onMouseLeave={scheduleHide} className="v103-navbar fixed inset-x-0 top-0 z-50 px-5 pt-4 text-white">
      <div className="mx-auto flex h-12 max-w-6xl items-center border-b border-white/10 font-mono text-[9px] uppercase tracking-[.18em] text-white/48">
        <a href="/#home" className="mr-7 font-bold tracking-[.26em] text-white transition hover:text-white/65" aria-label="Denis Jamil, ir al inicio">DJ</a>
        <div className="hidden flex-1 items-center gap-6 lg:flex">
          {links.map(link => <a key={link.href} href={`/${link.href}`} className="transition hover:text-white">{link.label}</a>)}
        </div>
        <div className="ml-auto hidden items-center gap-5 sm:flex">
          <span className="hidden text-white/28 xl:inline">Java · Spring Boot · APIs REST</span>
          <span className="h-5 w-px bg-white/18" />
          <a href="/#contact" className="font-bold text-white/72 transition hover:text-white">Contacto <span aria-hidden="true">→</span></a>
        </div>
        <button type="button" className="ml-auto grid size-9 place-items-center text-white lg:hidden" aria-label={open ? "Cerrar menú" : "Abrir menú"} aria-expanded={open} onClick={() => setOpen(v => !v)}><Icon name={open ? "x" : "menu"} className="size-4" /></button>
      </div>
      {open && <div className="mx-auto mt-2 max-w-6xl border-b border-white/10 bg-[#050509]/95 px-1 py-3 font-mono text-[9px] uppercase tracking-[.18em] backdrop-blur-2xl lg:hidden">{links.map(link => <a key={link.href} href={`/${link.href}`} onClick={() => setOpen(false)} className="block border-b border-white/5 px-2 py-3 text-white/55 last:border-0 hover:text-white">{link.label}</a>)}</div>}
    </nav>
  );
}
