'use client';

const items = [
  {
    title: "Ingenieria de Sistemas e Informatica",
    company: "Universidad Tecnologica del Peru",
    date: "2022 - Actualidad",
    description:
      "Formacion academica en ingenieria de sistemas, desarrollo de software y tecnologias innovadoras.",
  },
  {
    title: "Certificacion CCNA: Introduccion a las redes",
    company: "Cisco Networking Academy",
    date: "2025",
    description: "Certificacion en introduccion a redes, fundamentos de conectividad y arquitectura de red.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="border-b border-[#333] bg-black px-5 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-center text-4xl font-bold">
          <span className="bg-gradient-to-r from-[#00d9ff] to-[#ff006e] bg-clip-text text-transparent">
            Experiencia y Educacion
          </span>
        </h2>

        <div className="relative mx-auto max-w-3xl py-4 md:before:absolute md:before:left-1/2 md:before:top-0 md:before:h-full md:before:w-1 md:before:-translate-x-1/2 md:before:rounded md:before:bg-gradient-to-b md:before:from-[#00d9ff] md:before:to-[#00b8cc]">
          {items.map((item, index) => (
            <article
              key={item.title}
              className={`relative mb-10 md:flex md:gap-8 ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
            >
              <div className="absolute left-0 top-0 hidden size-8 -translate-x-1/2 rounded-full border-4 border-black bg-[#00d9ff] md:left-1/2 md:block" />
              <div className="rounded-lg border border-[#333] bg-[#1a1a1a] p-5 shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition hover:-translate-y-1 md:w-[calc(50%-1rem)]">
                <h3 className="bg-gradient-to-r from-[#00d9ff] to-[#ff006e] bg-clip-text text-xl font-bold text-transparent">
                  {item.title}
                </h3>
                <p className="mt-1 font-semibold text-[#00d9ff]">{item.company}</p>
                <p className="mt-1 text-sm italic text-[#a0a0a0]">{item.date}</p>
                <p className="mt-3 leading-7 text-[#a0a0a0]">{item.description}</p>
              </div>
              <div className="hidden flex-1 md:block" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
