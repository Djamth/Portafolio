'use client';

import { useState } from "react";
import type { CSSProperties, PointerEvent } from "react";

export default function HeroOrb() {
  const [rotation, setRotation] = useState({ x: -14, y: 24 });
  const [dragging, setDragging] = useState(false);
  const [start, setStart] = useState({ x: 0, y: 0, rx: -14, ry: 24 });

  function begin(event: PointerEvent<HTMLDivElement>) {
    if (event.pointerType === "touch" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setStart({ x: event.clientX, y: event.clientY, rx: rotation.x, ry: rotation.y });
    setDragging(true);
    event.currentTarget.setPointerCapture(event.pointerId);
  }

  function move(event: PointerEvent<HTMLDivElement>) {
    if (!dragging) return;
    setRotation({ x: Math.max(-65, Math.min(65, start.rx - (event.clientY - start.y) * 0.35)), y: start.ry + (event.clientX - start.x) * 0.35 });
  }

  function stop() { setDragging(false); }

  const style = { "--orb-rotate-x": `${rotation.x}deg`, "--orb-rotate-y": `${rotation.y}deg` } as CSSProperties;

  return (
    <div className="hero-orb-scene pointer-events-none absolute right-[8%] top-[12%] z-10 size-[75%]" aria-hidden="true">
      <div className="hero-orb pointer-events-auto relative size-full cursor-grab rounded-full active:cursor-grabbing" style={style} onPointerDown={begin} onPointerMove={move} onPointerUp={stop} onPointerCancel={stop} onLostPointerCapture={stop}>
        <div className="hero-orb-core absolute inset-[13%] rounded-full" />
        <div className="hero-orb-ring hero-orb-ring-a absolute inset-[8%] rounded-full border border-cyan-200/65" />
        <div className="hero-orb-ring hero-orb-ring-b absolute inset-[8%] rounded-full border border-cyan-300/45" />
        <div className="hero-orb-ring hero-orb-ring-c absolute inset-[8%] rounded-full border border-teal-200/35" />
      </div>
    </div>
  );
}
