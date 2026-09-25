'use client';

import { useEffect, useRef, useState } from "react";
import type { CSSProperties, PointerEvent } from "react";

export default function HeroOrb() {
  const sceneRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: -14, y: 24 });
  const [dragging, setDragging] = useState(false);
  const [start, setStart] = useState({ x: 0, y: 0, rx: -14, ry: 24 });
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reducedMotion.matches) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const scene = sceneRef.current;
      if (!scene) return;
      const section = scene.closest("section");
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const distance = Math.max(1, rect.height + window.innerHeight);
      const progress = Math.min(1, Math.max(0, (window.innerHeight - rect.top) / distance));
      setScrollProgress(progress);
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  function begin(event: PointerEvent<HTMLDivElement>) {
    if (event.pointerType === "touch" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setStart({ x: event.clientX, y: event.clientY, rx: rotation.x, ry: rotation.y });
    setDragging(true);
    event.currentTarget.setPointerCapture(event.pointerId);
  }

  function move(event: PointerEvent<HTMLDivElement>) {
    if (!dragging) return;
    setRotation({
      x: Math.max(-65, Math.min(65, start.rx - (event.clientY - start.y) * 0.35)),
      y: start.ry + (event.clientX - start.x) * 0.35,
    });
  }

  function stop() { setDragging(false); }

  const style = {
    "--orb-rotate-x": `${rotation.x + scrollProgress * 16}deg`,
    "--orb-rotate-y": `${rotation.y + scrollProgress * 110}deg`,
    "--orb-scroll-y": `${scrollProgress * 38}px`,
    "--orb-scroll-scale": 1 + scrollProgress * 0.08,
    "--orb-scroll-glow": 0.55 + scrollProgress * 0.45,
  } as CSSProperties;

  return (
    <div ref={sceneRef} className="hero-orb-scene pointer-events-none absolute left-1/2 top-1/2 z-10 size-[88%] -translate-x-1/2 -translate-y-1/2" aria-hidden="true">
      <div className="hero-orb pointer-events-auto relative size-full cursor-grab rounded-full active:cursor-grabbing" style={style} onPointerDown={begin} onPointerMove={move} onPointerUp={stop} onPointerCancel={stop} onLostPointerCapture={stop}>
        <div className="hero-orb-halo absolute inset-[3%] rounded-full" />
        <div className="hero-orb-core absolute inset-[13%] rounded-full" />
        <div className="hero-orb-shine absolute inset-[18%] rounded-full" />
        <div className="hero-orb-ring hero-orb-ring-a absolute inset-[8%] rounded-full border border-[#9eaff0]/60" />
        <div className="hero-orb-ring hero-orb-ring-b absolute inset-[8%] rounded-full border border-[#b7a8e8]/50" />
        <div className="hero-orb-ring hero-orb-ring-c absolute inset-[8%] rounded-full border border-[#a9d9dc]/45" />
        <div className="hero-orb-ring hero-orb-ring-d absolute inset-[4%] rounded-full border border-[#4ba8ff]/25" />
      </div>
    </div>
  );
}
