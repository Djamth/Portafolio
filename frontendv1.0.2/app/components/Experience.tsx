import Icon from "./Icon";

const items = [
  { title: "Ingeniería de Sistemas e Informática", company: "Universidad Tecnológica del Perú", date: "2022 - Actualidad", description: "Formación académica en desarrollo de software, arquitectura de sistemas y tecnologías innovadoras." },
  { title: "CCNA: Introducción a las redes", company: "Cisco Networking Academy", date: "2025", description: "Fundamentos de conectividad, protocolos y arquitectura de red." },
];

export default function Experience() {
  return (
    <section id="experience" className="relative overflow-hidden bg-white py-24 text-[#1c2943]">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_10%_30%,rgba(229,233,255,.42),transparent_35%)]" />
      <div className="section-shell relative">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-[#345be8]">Experiencia</p>
          <h2 className="mt-3 text-4xl font-black tracking-[-0.05em] text-[#1c2943]">Mi camino hasta ahora</h2>
        </div>
        <div className="relative mx-auto mt-12 grid max-w-4xl gap-5 before:absolute before:bottom-0 before:left-[22px] before:top-0 before:w-px before:bg-[#ccd6f4]">
          {items.map((item, index) => (
            <article key={item.title} className="relative grid grid-cols-[46px_1fr] gap-5">
              <span className="relative z-10 grid size-11 place-items-center rounded-full bg-[#345be8] text-white shadow-[0_8px_20px_rgba(52,91,232,.2)]"><Icon name={index === 0 ? "graduation" : "book"} className="size-5" /></span>
              <div className="rounded-[24px] border border-[#e3e8f3] bg-white/80 p-6 shadow-[0_14px_36px_rgba(53,76,120,.06)] backdrop-blur-xl transition hover:border-[#bdc9f2]">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-[#345be8]">{item.date}</p>
                <h3 className="mt-2 text-xl font-black text-[#1c2943]">{item.title}</h3>
                <p className="mt-1 text-sm font-bold text-[#526079]">{item.company}</p>
                <p className="mt-3 text-sm leading-6 text-[#63718b]">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
