import Icon from "./Icon";
import HeroOrb from "./HeroOrb";

export default function Hero() {
  return (
    <section id="home" className="v103-hero v103-scene-bg relative isolate overflow-hidden px-3 pb-5 pt-3 text-white sm:px-5">
      <div className="relative min-h-[calc(100svh-24px)] overflow-hidden bg-transparent">
        <div aria-hidden="true" className="v103-grid absolute inset-0 opacity-30" />
        <div aria-hidden="true" className="v103-aurora absolute inset-x-0 bottom-0 h-[58%]" />
        <div className="section-shell relative z-10 grid min-h-[760px] items-center gap-8 pb-20 pt-28 lg:grid-cols-[.92fr_1.08fr] lg:pb-24 lg:pt-32">
          <div className="relative z-20 max-w-xl">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[.045] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[.18em] text-white/60 backdrop-blur-xl">
              <span className="size-1.5 rounded-full bg-[#9a78ff] shadow-[0_0_12px_#9a78ff]" /> Backend · APIs · Software
            </div>
            <h1 className="text-[clamp(3.4rem,7vw,6.8rem)] font-semibold leading-[.88] tracking-[-.075em] text-white">
              Construyo
              <span className="block bg-gradient-to-r from-white via-[#d9d2ff] to-[#8d72ff] bg-clip-text text-transparent">soluciones</span>
              <span className="block text-white/35">que funcionan.</span>
            </h1>
            <p className="mt-7 max-w-md text-sm leading-7 text-white/52 sm:text-base">Soy Denis Jamil, desarrollador backend enfocado en Java, Spring Boot, APIs REST y PostgreSQL. Diseño software claro, mantenible y preparado para crecer.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-xs font-black text-[#090916] transition hover:scale-[1.03] motion-reduce:transform-none">Ver proyectos <Icon name="arrow" className="size-4" /></a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-white/16 bg-white/[.055] px-5 py-3 text-xs font-bold text-white/80 backdrop-blur-xl transition hover:bg-white/10"><Icon name="mail" className="size-4" /> Contactarme</a>
            </div>
          </div>
          <div className="relative mx-auto h-[440px] w-full max-w-[620px] sm:h-[570px] lg:h-[640px]">
            <div aria-hidden="true" className="absolute left-1/2 top-1/2 h-[62%] w-[62%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#6737ff]/20 blur-[90px]" />
            <HeroOrb />
          </div>
        </div>
        <div className="absolute bottom-5 left-1/2 z-20 -translate-x-1/2 text-[9px] font-bold uppercase tracking-[.24em] text-white/35">Scroll para explorar ↓</div>
      </div>
    </section>
  );
}
