import Icon from "./Icon";

const highlights = [
  ["APIs REST", "Diseno servicios claros, mantenibles y listos para integrarse."],
  ["Arquitectura TI", "Conecto la parte tecnica con necesidades reales del negocio."],
  ["Aprendizaje continuo", "Cada proyecto es una oportunidad para construir mejor."],
];

export default function About() {
  return (
    <section id="about" className="bg-[#f7f8fd] py-24">
      <div className="section-shell grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.24em] text-[#6335f5]">Sobre mi</p>
          <h2 className="mt-3 text-4xl font-black tracking-[-0.05em] text-[#111326] sm:text-5xl">Codigo con proposito.</h2>
          <p className="mt-6 leading-7 text-[#646980]">
            Soy estudiante de Ingenieria de Sistemas con especial interes por el desarrollo backend, la arquitectura de TI y la calidad del software. Disfruto entender el problema antes de escribir la solucion.
          </p>
          <a href="#contact" className="mt-7 inline-flex items-center gap-2 text-sm font-black text-[#6335f5]">
            Conversemos <Icon name="arrow" className="size-4" />
          </a>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {highlights.map(([title, description], index) => (
            <article key={title} className="soft-shadow rounded-2xl border border-[#e9ebf5] bg-white p-6">
              <span className="grid size-11 place-items-center rounded-xl bg-[#f0ebff] text-[#6335f5]">
                <Icon name={index === 0 ? "code" : index === 1 ? "briefcase" : "star"} />
              </span>
              <h3 className="mt-5 font-black text-[#16192e]">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-[#73788f]">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
