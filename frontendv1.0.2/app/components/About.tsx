import Icon from "./Icon";
import ScrollReveal from "./ScrollReveal";

const highlights = [
  ["APIs REST", "Diseño servicios claros, mantenibles y listos para integrarse."],
  ["Arquitectura TI", "Conecto la parte técnica con necesidades reales del negocio."],
  ["Aprendizaje continuo", "Cada proyecto es una oportunidad para construir mejor."],
];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-[#f7f9fe] py-24 text-[#1c2943]">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_85%_20%,rgba(219,225,255,.5),transparent_38%)]" />
      <div className="section-shell relative grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
        <ScrollReveal>
        <div>
          <p className="text-xs font-black uppercase tracking-[0.24em] text-[#345be8]">Sobre mí</p>
          <h2 className="mt-3 text-4xl font-black tracking-[-0.05em] text-[#1c2943] sm:text-5xl">Código con propósito.</h2>
          <p className="mt-6 leading-7 text-[#63718b]">Soy estudiante de Ingeniería de Sistemas con especial interés por el desarrollo backend, la arquitectura de TI y la calidad del software. Disfruto entender el problema antes de escribir la solución.</p>
          <a href="#contact" className="mt-7 inline-flex items-center gap-2 text-sm font-black text-[#345be8] transition hover:text-[#2547bd]">Conversemos <Icon name="arrow" className="size-4" /></a>
        </div>
        </ScrollReveal>
        <div className="grid gap-4 sm:grid-cols-3">
          {highlights.map(([title, description], index) => (
            <ScrollReveal key={title} delay={index * 110}>
            <article key={title} className="rounded-[24px] border border-white/90 bg-white/70 p-6 shadow-[0_16px_40px_rgba(53,76,120,.07)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-[#bdc9f2] hover:shadow-[0_20px_44px_rgba(53,76,120,.12)] motion-reduce:transform-none">
              <span className="grid size-11 place-items-center rounded-xl border border-[#d8e0fa] bg-[#edf1ff] text-[#345be8]"><Icon name={index === 0 ? "code" : index === 1 ? "briefcase" : "star"} /></span>
              <h3 className="mt-5 font-black text-[#1c2943]">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-[#63718b]">{description}</p>
            </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
