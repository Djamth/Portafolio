import Icon from "./Icon";

const items = [
  {
    title: "Ingenieria de Sistemas e Informatica",
    company: "Universidad Tecnologica del Peru",
    date: "2022 - Actualidad",
    description: "Formacion academica en desarrollo de software, arquitectura de sistemas y tecnologias innovadoras.",
  },
  {
    title: "CCNA: Introduccion a las redes",
    company: "Cisco Networking Academy",
    date: "2025",
    description: "Fundamentos de conectividad, protocolos y arquitectura de red.",
  },
  
];

export default function Experience() {
  return (
    <section id="experience" className="bg-white py-24">
      <div className="section-shell">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-[#6335f5]">Experiencia</p>
          <h2 className="mt-3 text-4xl font-black tracking-[-0.05em] text-[#111326]">Mi camino hasta ahora</h2>
        </div>
        <div className="relative mx-auto mt-12 grid max-w-4xl gap-5 before:absolute before:bottom-0 before:left-[22px] before:top-0 before:w-px before:bg-[#d8d0ff]">
          {items.map((item, index) => (
            <article key={item.title} className="relative grid grid-cols-[46px_1fr] gap-5">
              <span className="relative z-10 grid size-11 place-items-center rounded-full bg-[#6335f5] text-white shadow-[0_8px_18px_rgba(98,53,245,0.22)]">
                <Icon name={index === 0 ? "graduation" : "book"} className="size-5" />
              </span>
              <div className="soft-shadow rounded-2xl border border-[#eceef6] bg-white p-6">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-[#7040f7]">{item.date}</p>
                <h3 className="mt-2 text-xl font-black text-[#15182c]">{item.title}</h3>
                <p className="mt-1 text-sm font-bold text-[#5d6278]">{item.company}</p>
                <p className="mt-3 text-sm leading-6 text-[#73788f]">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
