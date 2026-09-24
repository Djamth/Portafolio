'use client';

import { useEffect, useRef, useState } from "react";
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

  useEffect(() => {
    const show = () => {
      setVisible(true);
      if (timer.current) clearTimeout(timer.current);
      timer.current = setTimeout(() => { if (!open) setVisible(false); }, 900);
    };
    const onScroll = () => show();
    const onPointerMove = (event: PointerEvent) => {
      if (event.clientY <= 72) {
        setVisible(true);
        if (timer.current) clearTimeout(timer.current);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("pointermove", onPointerMove);
      if (timer.current) clearTimeout(timer.current);
    };
  }, [open]);

  useEffect(() => { if (open) setVisible(true); }, [open]);

  return (
    <nav aria-label="Navegación principal" data-visible={visible || open} onMouseEnter={() => setVisible(true)} className="v103-navbar fixed inset-x-0 top-0 z-50 px-5 pt-5 text-white">
      <div className="mx-auto flex h-12 max-w-6xl items-center justify-between">
        <a href="/#home" className="flex items-center gap-2 text-xs font-black tracking-[-.02em]" aria-label="Denis Jamil, ir al inicio"><span className="grid size-7 place-items-center rounded-full border border-white/20 bg-white/10 text-[10px] backdrop-blur-xl">DJ</span> Denis Jamil</a>
        <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-[#080817]/60 p-1 shadow-2xl backdrop-blur-2xl lg:flex">
          {links.map((link) => <a key={link.href} href={`/${link.href}`} className="rounded-full px-4 py-2 text-[10px] font-semibold text-white/55 transition hover:bg-white/8 hover:text-white">{link.label}</a>)}
        </div>
        <div className="flex items-center gap-2">
          <a href="/#contact" className="hidden rounded-full bg-white px-4 py-2 text-[10px] font-black text-[#090916] transition hover:scale-105 sm:block motion-reduce:transform-none">Hablemos</a>
          <button type="button" className="grid size-9 place-items-center rounded-full border border-white/12 bg-[#080817]/60 text-white lg:hidden" aria-label={open ? "Cerrar menú" : "Abrir menú"} aria-expanded={open} onClick={() => setOpen(v => !v)}><Icon name={open ? "x" : "menu"} className="size-4" /></button>
        </div>
      </div>
      {open && <div className="mx-auto mt-2 max-w-6xl rounded-2xl border border-white/10 bg-[#080817]/95 p-3 backdrop-blur-2xl lg:hidden">{links.map(link => <a key={link.href} href={`/${link.href}`} onClick={() => setOpen(false)} className="block rounded-xl px-4 py-3 text-xs text-white/65 hover:bg-white/5 hover:text-white">{link.label}</a>)}</div>}
    </nav>
  );
}
