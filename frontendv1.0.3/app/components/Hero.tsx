import HeroOrb from "./HeroOrb";

export default function Hero() {
  return (
    <section id="home" className="v103-hero relative isolate min-h-[100svh] overflow-hidden bg-[#020205] text-white">
      <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_70%_78%,rgba(91,57,180,.14),transparent_32%),linear-gradient(180deg,#07070a_0%,#020205_62%,#000_100%)]" />
      <div aria-hidden="true" className="absolute inset-0 opacity-[.14] [background-image:linear-gradient(rgba(255,255,255,.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.025)_1px,transparent_1px)] [background-size:80px_80px]" />

      <div className="section-shell relative z-10 flex min-h-[100svh] flex-col pt-24">
        <div className="flex items-center justify-between border-b border-white/8 pb-4 font-mono text-[9px] uppercase tracking-[.22em] text-white/38">
          <span>Backend Developer</span>
          <span className="hidden sm:block">Java · Spring Boot · APIs REST</span>
          <span>Perú</span>
        </div>

        <div className="relative flex flex-1 flex-col">
          <div className="relative z-20 pt-[8vh] text-center">
            <p className="mb-5 font-mono text-[9px] uppercase tracking-[.38em] text-white/35">Software · Systems · Engineering</p>
            <h1 className="v103-hero-name whitespace-nowrap text-[clamp(4.2rem,12.7vw,12rem)] font-black leading-[.76] tracking-[-.075em] text-white">
              DENIS JAMIL
            </h1>
          </div>

          <div className="pointer-events-none absolute inset-x-0 bottom-[-23%] top-[23%] z-10">
            <HeroOrb />
          </div>

          <div className="relative z-30 mt-auto flex items-end justify-between gap-6 pb-10">
            <p className="max-w-[300px] text-xs leading-6 text-white/38 sm:text-sm">
              Diseño y desarrollo soluciones backend claras, mantenibles y preparadas para crecer.
            </p>
            <a href="#projects" className="pointer-events-auto hidden items-center gap-3 font-mono text-[9px] uppercase tracking-[.2em] text-white/45 transition hover:text-white sm:flex">
              Explorar proyectos <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>
      </div>

      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-32 bg-gradient-to-t from-black via-black/55 to-transparent" />
    </section>
  );
}
