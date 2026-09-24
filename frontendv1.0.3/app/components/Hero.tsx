import Icon from "./Icon";
import HeroOrb from "./HeroOrb";

export default function Hero() {
  return (
    <section id="home" className="light-hero relative isolate overflow-hidden px-0 pb-16 pt-20 text-[#172033] lg:pb-24 lg:pt-28">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_58%_35%,rgba(181,196,255,.4),transparent_42%),radial-gradient(ellipse_at_88%_75%,rgba(205,237,237,.65),transparent_38%)]" />
      <div className="section-shell relative z-10 grid min-h-[620px] items-center gap-10 lg:grid-cols-[.95fr_1.1fr_.65fr]">
        <div className="relative z-20">
          <p className="mb-6 text-xs font-bold uppercase tracking-[.24em] text-[#626d85]">Desarrollo · Tecnología · Impacto</p>
          <h1 className="max-w-xl text-5xl font-black leading-[1.07] tracking-[-.065em] sm:text-6xl">Construyo soluciones para <span className="bg-gradient-to-r from-[#345be8] to-[#8773d6] bg-clip-text text-transparent">un mejor mañana.</span></h1>
          <p className="mt-7 max-w-lg text-base leading-8 text-[#59657b]">Soy Denis Jamil, desarrollador backend enfocado en Java, Spring Boot, APIs REST y PostgreSQL. Transformo ideas en soluciones claras y mantenibles.</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#projects" className="inline-flex items-center gap-2 rounded-2xl bg-[#345be8] px-6 py-4 text-sm font-bold text-white shadow-[0_12px_30px_rgba(52,91,232,.18)] transition hover:bg-[#2547bd]">Ver mis proyectos <Icon name="arrow" className="size-4" /></a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-2xl border border-[#cad2e4] bg-white/65 px-6 py-4 text-sm font-bold text-[#26344f] backdrop-blur-xl transition hover:bg-white"><Icon name="mail" className="size-4" />Contactarme</a>
          </div>
          <div className="mt-8 flex gap-3">
            <a href="https://github.com/djamth" target="_blank" rel="me noopener noreferrer" aria-label="GitHub de Denis Jamil" className="grid size-11 place-items-center rounded-xl border border-[#cbd3e5] bg-white/65 text-[#26344f] transition hover:bg-white"><Icon name="github" /></a>
            <a href="mailto:denistineohuancas@gmail.com" aria-label="Enviar correo a Denis Jamil" className="grid size-11 place-items-center rounded-xl border border-[#cbd3e5] bg-white/65 text-[#26344f] transition hover:bg-white"><Icon name="mail" /></a>
          </div>
        </div>
        <div className="relative mx-auto h-[390px] w-full max-w-[570px] sm:h-[510px] lg:h-[610px]">
          <div aria-hidden="true" className="absolute inset-[7%] rounded-full border border-[#b9c6e5]/50" />
          <HeroOrb />
          <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-4 -translate-x-1/2 text-[10px] font-bold tracking-[.25em] text-[#6c7892]">APRENDER</div>
          <div aria-hidden="true" className="pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] font-bold tracking-[.25em] text-[#6c7892]">INNOVAR</div>
          <div aria-hidden="true" className="pointer-events-none absolute bottom-[7%] left-[14%] right-[14%] h-10 rounded-[50%] bg-[#aab9dd]/30 blur-2xl" />
        </div>
        <div className="relative z-20 grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
          {[{label:"Enfoque",value:"Backend y APIs",detail:"Soluciones escalables"},{label:"Tecnologías",value:"Java · Spring Boot",detail:"PostgreSQL y REST"},{label:"Objetivo",value:"Crear con impacto",detail:"Aprendizaje continuo"}].map((item) => <div key={item.label} className="rounded-[22px] border border-white/80 bg-white/55 p-5 shadow-[0_16px_45px_rgba(53,76,120,.08)] backdrop-blur-2xl"><p className="text-[10px] font-bold uppercase tracking-[.2em] text-[#63718b]">{item.label}</p><strong className="mt-3 block text-lg tracking-tight text-[#1c2943]">{item.value}</strong><p className="mt-2 text-xs text-[#68758d]">{item.detail}</p></div>)}
        </div>
      </div>
      <p className="relative z-10 mt-8 text-center text-xs font-medium tracking-[.14em] text-[#73809a]">DESLIZA PARA EXPLORAR ↓</p>
    </section>
  );
}
