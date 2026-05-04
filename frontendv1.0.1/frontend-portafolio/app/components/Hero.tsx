'use client';

import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="overflow-hidden border-b border-[#333] bg-black px-5 py-20">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-10 md:flex-row">
        <div className="flex-[3] text-center md:text-left">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-[#00d9ff]">
            Backend Developer · Ingenieria de Sistemas
          </p>
          <h1 className="text-5xl font-bold leading-tight text-white md:text-6xl">
            I&apos;m{" "}
            <span className="bg-gradient-to-r from-[#00d9ff] to-[#ff006e] bg-clip-text text-transparent">
              Denis Jamil
            </span>
          </h1>
          <h2 className="mt-1 text-4xl font-bold text-white md:text-5xl">Tineo Huancas</h2>
          <p className="mt-5 max-w-xl text-lg leading-8 text-[#a0a0a0]">
            Estudiante de Ingenieria de Sistemas con foco en desarrollo backend, APIs REST con Spring Boot y arquitectura de TI. Me interesa construir soluciones limpias, escalables y alineadas a las necesidades del negocio.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3 md:justify-start">
            <a href="#projects" className="rounded bg-[#00d9ff] px-7 py-3 font-bold text-black transition hover:-translate-y-1 hover:bg-[#00b8cc] hover:shadow-[0_10px_20px_rgba(0,217,255,0.3)]">
              Ver proyectos
            </a>
            <a href="/admin" className="rounded border border-[#00d9ff]/50 px-7 py-3 font-bold text-[#00d9ff] transition hover:bg-[#00d9ff] hover:text-black">
              Panel admin
            </a>
          </div>
        </div>

        <div className="relative h-[450px] w-full max-w-[350px] flex-1">
          <Image
            src="/portfolio/DJ.jpeg"
            alt="Denis Jamil"
            fill
            priority
            sizes="350px"
            className="rounded-[10px] border-2 border-[#00d9ff] object-cover shadow-[0_0_30px_rgba(0,217,255,0.35)]"
          />
        </div>
      </div>
    </section>
  );
}
