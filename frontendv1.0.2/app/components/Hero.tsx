import Image from "next/image";
import Icon from "./Icon";

const stats = [
  { icon: "code" as const, value: "10+", label: "Proyectos completados" },
  { icon: "graduation" as const, value: "8°", label: "Semestre actual" },
  { icon: "time" as const, value: "2+", label: "Años aprendiendo" },
  { icon: "star" as const, value: "100%", label: "Compromiso y dedicación" },
];

export default function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden bg-[#080d17] pb-12 pt-16 text-[#f5faff] lg:pb-16 lg:pt-24">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_78%_30%,rgba(0,217,255,0.12),transparent_45%),radial-gradient(ellipse_at_10%_80%,rgba(24,224,181,0.07),transparent_45%)]" />
      <div className="section-shell relative z-10 grid items-center gap-10 lg:grid-cols-[1.03fr_.97fr]">
        <div>
          <p className="mb-4 text-sm font-bold tracking-[0.14em] text-[#00d9ff]">Denis Jamil Tineo Huancas · Backend Developer</p>
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/5 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.15em] text-[#a9eefa]"><Icon name="graduation" className="size-4" />Estudiante de Ingeniería de Sistemas</p>
          <h1 className="max-w-2xl text-5xl font-black leading-[1.02] tracking-[-0.06em] sm:text-6xl xl:text-7xl">Construyo soluciones <span className="bg-gradient-to-r from-[#00d9ff] to-[#18e0b5] bg-clip-text text-transparent">digitales.</span></h1>
          <div className="mt-7 h-1 w-16 rounded-full bg-[#00d9ff] shadow-[0_0_20px_rgba(0,217,255,0.45)]" />
          <p className="mt-6 max-w-xl text-base leading-8 text-[#a8b8cc]">Soy desarrollador backend enfocado en Java, Spring Boot, APIs REST y PostgreSQL. Me apasiona crear soluciones claras, mantenibles y orientadas a problemas reales.</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#projects" className="inline-flex items-center gap-3 rounded-2xl bg-[#00d9ff] px-6 py-4 text-sm font-bold text-[#080d17] shadow-[0_12px_30px_rgba(0,217,255,0.17)] transition duration-200 hover:-translate-y-1 hover:bg-[#79ebff] motion-reduce:transform-none"><Icon name="rocket" />Ver mis proyectos<Icon name="arrow" className="size-4" /></a>
            <a href="#contact" className="inline-flex items-center gap-3 rounded-2xl border border-white/20 bg-white/5 px-6 py-4 text-sm font-bold text-[#f5faff] transition duration-200 hover:border-cyan-300/60 hover:bg-cyan-300/10"><Icon name="mail" className="size-5" />Contactarme</a>
          </div>
          <div className="mt-7 flex gap-3">
            <a aria-label="GitHub de Denis Jamil Tineo Huancas" href="https://github.com/djamth" target="_blank" rel="me noopener noreferrer" className="grid size-12 place-items-center rounded-full border border-white/15 bg-white/5 text-[#dce9f6] transition hover:border-cyan-300/60 hover:text-[#00d9ff]"><Icon name="github" /></a>
            <a aria-label="LinkedIn de Denis Jamil Tineo Huancas" href="https://www.linkedin.com/in/denis-jamil-tineo-huancas" target="_blank" rel="me noopener noreferrer" className="grid size-12 place-items-center rounded-full border border-white/15 bg-white/5 text-[#dce9f6] transition hover:border-cyan-300/60 hover:text-[#00d9ff]"><Icon name="linkedin" /></a>
            <a aria-label="Correo de Denis Jamil Tineo Huancas" href="mailto:denistineohuancas@gmail.com" className="grid size-12 place-items-center rounded-full border border-white/15 bg-white/5 text-[#dce9f6] transition hover:border-cyan-300/60 hover:text-[#00d9ff]"><Icon name="mail" /></a>
          </div>
        </div>
        <div className="relative mx-auto h-[460px] w-full max-w-[580px] sm:h-[540px] lg:h-[620px]">
          <div aria-hidden="true" className="absolute right-[8%] top-[12%] size-[75%] rounded-full border border-cyan-300/30 bg-[radial-gradient(circle_at_32%_25%,rgba(121,235,255,0.42),rgba(0,217,255,0.13)_37%,rgba(8,13,23,0.15)_72%)] shadow-[inset_-28px_-35px_65px_rgba(0,0,0,0.45),0_0_90px_rgba(0,217,255,0.14)]" />
          <div aria-hidden="true" className="dot-grid absolute right-0 top-24 h-44 w-44 opacity-60" />
          <div className="absolute inset-0 z-20"><Image src="/portfolio/DJ.png" alt="Denis Jamil Tineo Huancas, desarrollador backend" fill priority sizes="(min-width: 1024px) 580px, 90vw" className="hero-image-mask object-contain object-bottom drop-shadow-[0_18px_28px_rgba(0,0,0,0.35)]" /></div>
          <div aria-hidden="true" className="absolute bottom-6 left-4 z-30 h-44 w-[105%] rounded-[50%] border-b-2 border-cyan-300/70 sm:h-56" />
          <div className="absolute bottom-[45px] right-0 z-40 hidden w-60 rounded-2xl border border-cyan-300/20 bg-[#111c2e]/95 p-5 text-xs text-[#cbd8e8] shadow-2xl backdrop-blur sm:block"><p className="mb-3 font-bold text-[#00d9ff]">&lt;/&gt;</p><p><span className="text-[#18e0b5]">const</span> developer = {"{"}</p><p className="pl-3"><span className="text-[#79ebff]">role:</span> <span className="text-[#b8e986]">&quot;Backend&quot;</span>,</p><p className="pl-3"><span className="text-[#79ebff]">focus:</span> <span className="text-[#b8e986]">&quot;APIs limpias&quot;</span></p><p>{"};"}</p></div>
        </div>
      </div>
      <div className="section-shell relative z-20 mt-6"><div className="grid overflow-hidden rounded-2xl border border-white/10 bg-[#111c2e]/85 sm:grid-cols-2 lg:grid-cols-4">{stats.map((stat) => <div key={stat.label} className="flex items-center gap-4 border-b border-white/10 px-6 py-5 last:border-b-0 sm:[&:nth-child(odd)]:border-r lg:border-b-0 lg:border-r lg:last:border-r-0"><span className="grid size-14 shrink-0 place-items-center rounded-full border border-cyan-300/20 bg-cyan-300/10 text-[#00d9ff]"><Icon name={stat.icon} className="size-7" /></span><span><strong className="block text-2xl leading-none text-[#f5faff]">{stat.value}</strong><span className="mt-1 block text-xs leading-4 text-[#a8b8cc]">{stat.label}</span></span></div>)}</div></div>
    </section>
  );
}
