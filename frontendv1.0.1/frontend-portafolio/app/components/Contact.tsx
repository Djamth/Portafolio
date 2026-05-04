'use client';

export default function Contact() {
  return (
    <section id="contact" className="border-b border-[#333] bg-black px-5 py-20 text-white">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-4 text-center text-4xl font-bold">
          <span className="bg-gradient-to-r from-[#00d9ff] to-[#ff006e] bg-clip-text text-transparent">
            Contacto
          </span>
        </h2>
        <p className="mb-10 text-center text-lg text-[#a0a0a0]">Para mas informacion, contactame</p>

        <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-2">
          <form className="grid gap-5">
            <input className="rounded border border-white/20 bg-white/5 p-4 text-white placeholder:text-white/45" placeholder="Tu nombre" />
            <input className="rounded border border-white/20 bg-white/5 p-4 text-white placeholder:text-white/45" placeholder="Tu email" type="email" />
            <textarea className="min-h-36 rounded border border-white/20 bg-white/5 p-4 text-white placeholder:text-white/45" placeholder="Tu mensaje" />
            <button className="rounded bg-[#00d9ff] px-7 py-3 font-bold text-black transition hover:-translate-y-1 hover:bg-white">
              Enviar Mensaje
            </button>
          </form>

          <div className="flex flex-col justify-center gap-5">
            <p className="text-lg text-white">denistineohuancas@gmail.com</p>
            <p className="text-lg text-white">+51 921 047 400</p>
            <p className="text-lg text-white">Piura, Peru</p>
            <div className="mt-2 flex flex-wrap gap-3">
              <a href="https://github.com/djamth" target="_blank" className="grid size-12 place-items-center rounded-full border border-[#00d9ff]/30 bg-white/10 font-bold text-[#00d9ff] transition hover:bg-[#00d9ff] hover:text-black">
                GH
              </a>
              <a href="https://www.linkedin.com/in/denistineo" target="_blank" className="grid size-12 place-items-center rounded-full border border-[#00d9ff]/30 bg-white/10 font-bold text-[#00d9ff] transition hover:bg-[#00d9ff] hover:text-black">
                IN
              </a>
              <a href="https://www.instagram.com/d_jamthx" target="_blank" className="grid size-12 place-items-center rounded-full border border-[#00d9ff]/30 bg-white/10 font-bold text-[#00d9ff] transition hover:bg-[#00d9ff] hover:text-black">
                IG
              </a>
              <a href="https://wa.me/+51921047400?text=Hola%20DJ." target="_blank" className="grid size-12 place-items-center rounded-full border border-[#00d9ff]/30 bg-white/10 font-bold text-[#00d9ff] transition hover:bg-[#00d9ff] hover:text-black">
                WA
              </a>
            </div>
          </div>
        </div>

        <footer className="mt-16 border-t border-[#333] pt-8 text-center text-[#a0a0a0]">
          &copy; 2026 Denis Jamil. Todos los derechos reservados.
        </footer>
      </div>
    </section>
  );
}
