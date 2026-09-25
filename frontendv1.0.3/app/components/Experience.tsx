import Icon from "./Icon";
import ScrollReveal from "./ScrollReveal";

const items = [
  { title: "Ingeniería de Sistemas e Informática", company: "Universidad Tecnológica del Perú", date: "2022 — Actualidad", description: "Formación académica en desarrollo de software, arquitectura de sistemas y tecnologías innovadoras." },
  { title: "CCNA: Introducción a las redes", company: "Cisco Networking Academy", date: "2025", description: "Fundamentos de conectividad, protocolos y arquitectura de red." },
];

export default function Experience() {
  return (
    <section id="experience" className="relative overflow-hidden bg-[#02020f] py-28 text-white">
      <div className="section-shell relative">
        <ScrollReveal className="grid gap-6 lg:grid-cols-2 lg:items-end">
          <div><p className="text-[10px] font-bold uppercase tracking-[.22em] text-[#a88dff]">05 / Trayectoria</p><h2 className="mt-4 text-4xl font-semibold tracking-[-.055em] sm:text-6xl">Aprender. Construir. <span className="text-white/35">Evolucionar.</span></h2></div>
          <p className="max-w-md text-sm leading-7 text-white/38 lg:justify-self-end">Mi formación combina ingeniería de software, redes y práctica constante construyendo soluciones.</p>
        </ScrollReveal>
        <div className="mt-14 grid gap-4">
          {items.map((item,index)=><ScrollReveal key={item.title} delay={index*130} direction={index % 2 === 0 ? "left" : "right"}><article className="group grid gap-5 rounded-[26px] border border-white/9 bg-[#080817] p-6 transition hover:border-[#8f70f0]/35 sm:grid-cols-[130px_1fr_50px] sm:items-center sm:p-8"><p className="font-mono text-[9px] uppercase tracking-[.15em] text-[#a88dff]">{item.date}</p><div><h3 className="text-xl font-semibold tracking-[-.025em] text-white/82">{item.title}</h3><p className="mt-1 text-xs font-semibold text-white/35">{item.company}</p><p className="mt-3 max-w-2xl text-xs leading-6 text-white/38">{item.description}</p></div><span className="grid size-10 place-items-center rounded-full border border-white/10 bg-white/[.035] text-white/40 transition group-hover:border-[#8f70f0]/35 group-hover:text-[#b39dff]"><Icon name={index===0?"graduation":"book"} className="size-4" /></span></article></ScrollReveal>)}
        </div>
      </div>
    </section>
  );
}
