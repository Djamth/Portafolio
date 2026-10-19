import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="home" className="relative isolate min-h-[100svh] overflow-hidden bg-black text-white">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_78%_45%,rgba(0,123,255,.12),transparent_55%)]" />
      <div className="section-shell relative z-10 grid min-h-[100svh] items-center gap-10 pb-12 pt-28 lg:grid-cols-[.85fr_1.15fr] lg:gap-8 lg:pb-16 lg:pt-24">
        <div className="relative z-20 min-w-0 text-center lg:text-left">
          <p className="mb-5 font-mono text-[12px] uppercase tracking-[.38em] text-white/35">Software · Systems · Engineering</p>
          <h1 className="v103-hero-name text-[clamp(2.5rem,5.5vw,5rem)] font-black leading-none tracking-[-.055em] text-white">DENIS JAMIL</h1>
          <div className="mt-6">
            <p className="text-xl font-medium tracking-[-.025em] text-white/75 sm:text-2xl">Desarrollador <span className="text-[#409cff]">Backend</span></p>
            <p className="mt-3 font-mono text-[11px] uppercase tracking-[.2em] text-white/45">Java <span aria-hidden="true" className="mx-2 text-blue-400/60">/</span> Spring Boot</p>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
            <a href="#projects" className="rounded-full bg-[#007bff] px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-500">Ver proyectos <span aria-hidden="true">↗</span></a>
            <a href="#contact" className="rounded-full border border-white/25 bg-black/50 px-6 py-3 text-sm font-semibold text-white transition hover:border-blue-400 hover:bg-blue-500/10">Contactarme</a>
          </div>
        </div>
        <div className={styles.scene}>
          <div aria-hidden="true" className={styles.circle} />
          <div aria-hidden="true" className={styles.topHalf} />
          <div aria-hidden="true" className={styles.bottomHalf} />
          <div aria-hidden="true" className={styles.satellite} />
          <div aria-hidden="true" className={styles.dots} />
          <div className={styles.portrait}>
            <Image src="/portfolio/DJ.png" alt="Denis Jamil, desarrollador backend" fill priority sizes="(min-width: 1280px) 660px, (min-width: 1024px) 55vw, (min-width: 768px) 700px, 90vw" className={styles.photo} />
          </div>
          <div aria-hidden="true" className={styles.orbit} />
          <div className={styles.codeCard}>
            <p aria-hidden="true" className="mb-3 font-bold text-blue-400">&lt;/&gt;</p>
            <div className="font-mono text-[10px] leading-relaxed sm:text-xs">
              <p><span className="text-blue-400">const</span> developer = {"{"}</p>
              <p className="pl-3"><span className="text-blue-200">role:</span> <span className="text-[#b8e986]">&quot;Backend&quot;</span>,</p>
              <p className="pl-3"><span className="text-blue-200">focus:</span> <span className="text-[#b8e986]">&quot;APIs limpias&quot;</span></p>
              <p>{"};"}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
