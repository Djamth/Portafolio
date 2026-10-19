'use client';

import { useRef, useState } from "react";
import Image from "next/image";
import styles from "./ProjectGallery.module.css";
import Link from "next/link";
import type { Project } from "../lib/portfolio";

export default function ProjectGallery({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState(() => Math.floor(projects.length / 2));
  const [preview, setPreview] = useState<number | null>(null);
  const gesture = useRef<{ x: number; y: number; id: number } | null>(null);
  const dragged = useRef(false);
  const project = projects[active];
  const select = (index: number) => { setActive(index); setPreview(index); };
  const move = (step: number) => select(Math.max(0, Math.min(projects.length - 1, active + step)));

  if (!project) return <p className="py-16 text-center text-white/60">No hay proyectos para este filtro.</p>;

  return (
    <div className={styles["project-gallery"]} role="region" aria-roledescription="carrusel" aria-label="Galería de proyectos"
      onKeyDown={event => {
        if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
          event.preventDefault();
          move(event.key === "ArrowRight" ? 1 : -1);
        }
      }}>
      <div className={styles["project-fan"]}
        onPointerLeave={() => { if (!gesture.current) setPreview(null); }}
        onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget)) setPreview(null); }}
        onPointerDown={event => {
          if (!event.isPrimary || event.button !== 0) return;
          dragged.current = false;
          gesture.current = { x: event.clientX, y: event.clientY, id: event.pointerId };
          (event.target as HTMLElement).setPointerCapture(event.pointerId);
        }}
        onPointerUp={event => {
          const start = gesture.current;
          gesture.current = null;
          if (!start || start.id !== event.pointerId) return;
          const dx = event.clientX - start.x;
          const dy = event.clientY - start.y;
          if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy)) {
            dragged.current = true;
            move(dx < 0 ? 1 : -1);
          }
        }}
        onPointerCancel={() => { gesture.current = null; }}
        onClickCapture={event => {
          if (dragged.current) { event.preventDefault(); event.stopPropagation(); dragged.current = false; }
        }}>
        <div className={styles["project-fan-glow"]} aria-hidden="true" />
        {projects.map((item, index) => {
          const offset = index - (projects.length - 1) / 2;
          const distance = Math.abs(offset);
          const expanded = preview === index;
          const spread = preview === null ? 0 : Math.sign(index - preview);
          return (
            <button key={item.slug} type="button" className={styles["project-fan-card"]} data-active={index === active} data-expanded={expanded}
              aria-label={`Presentar ${item.nombre}`} aria-pressed={index === active}
              onPointerEnter={event => { if (event.pointerType === "mouse" && !gesture.current) setPreview(index); }}
              onFocus={() => setPreview(index)}
              onClick={() => select(index)}
              style={{ position: "absolute", transform: `translateX(${-50 + offset * 55 + spread * 22}%) translateY(${distance * distance * 12 - (expanded ? 32 : 0)}px) rotate(${offset * 9}deg) scale(${expanded ? 1.07 : 1})`, zIndex: expanded ? 20 : 10 - distance }}>
              <Image src={item.imagenes[0]} alt="" fill loading={index === Math.floor(projects.length / 2) ? "eager" : "lazy"} sizes="(max-width: 640px) 48vw, 280px" draggable={false} className={styles["project-fan-image"]} />
              <span className={styles["project-fan-tint"]} />
              <span className={styles["project-fan-label"]}><span className="font-mono text-[10px] tracking-[.2em] text-blue-200">PROJECT / {String(index + 1).padStart(2, "0")}</span><strong className="mt-3 block text-lg leading-tight sm:text-2xl">{item.nombre}</strong></span>
            </button>
          );
        })}
      </div>

      <div className="relative z-20 flex items-center justify-center gap-6">
        <button type="button" className={styles["project-gallery-arrow"]} aria-label="Proyecto anterior" disabled={active === 0} onClick={() => move(-1)}>←</button>
        <span className="font-mono text-xs tracking-[.2em] text-white/55">{String(active + 1).padStart(2, "0")} <span className="text-white/25">/ {String(projects.length).padStart(2, "0")}</span></span>
        <button type="button" className={styles["project-gallery-arrow"]} aria-label="Proyecto siguiente" disabled={active === projects.length - 1} onClick={() => move(1)}>→</button>
      </div>
      <p className="mt-4 text-center text-[11px] tracking-wide text-white/40">Pasa el cursor para abrir el abanico. Selecciona o desliza para explorar.</p>

      <div className={`${styles["project-gallery-details"]} mx-auto mt-8 max-w-2xl text-center`} aria-live="polite" aria-atomic="true">
        <div key={project.slug} className={styles["project-gallery-copy"]}>
          <h3 className="text-2xl font-semibold tracking-tight sm:text-4xl">{project.nombre}</h3>
        </div>
        <div className="mt-7 flex flex-wrap justify-center gap-5">
          <Link href={`/proyectos/${project.slug}`} className="rounded-full bg-[#007bff] px-6 py-3 text-xs font-semibold text-white transition hover:bg-blue-500">Explorar proyecto ↗</Link>
          <a href={project.url} target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/20 px-6 py-3 text-xs font-semibold text-white/75 transition hover:border-blue-400">GitHub ↗</a>
        </div>
      </div>
    </div>
  );
}
