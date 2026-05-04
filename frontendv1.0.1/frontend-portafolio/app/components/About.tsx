'use client';

export default function About() {
  return (
    <section id="about" className="border-b border-[#333] bg-black px-5 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-10 text-center text-4xl font-bold">
          <span className="bg-gradient-to-r from-[#00d9ff] to-[#ff006e] bg-clip-text text-transparent">
            Quien soy
          </span>
        </h2>
        <p className="mx-auto max-w-4xl text-lg leading-8 text-[#a0a0a0]">
          Soy estudiante de Ingenieria de Sistemas con un interes especial por el desarrollo backend, la arquitectura de TI y la gestion de la calidad del software. Disfruto disenar APIs REST bien estructuradas y entender como las soluciones tecnologicas se alinean con los procesos de negocio.
        </p>
      </div>
    </section>
  );
}
