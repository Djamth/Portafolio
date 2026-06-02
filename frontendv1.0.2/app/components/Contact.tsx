import Icon from "./Icon";

export default function Contact() {
  return (
    <section id="contact" className="bg-[#111326] py-24 text-white">
      <div className="section-shell">
        <div className="grid gap-12 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[#a58aff]">Contacto</p>
            <h2 className="mt-3 text-4xl font-black tracking-[-0.05em] sm:text-5xl">Construyamos algo juntos.</h2>
            <p className="mt-5 max-w-md text-sm leading-7 text-[#b8bdd1]">Estoy abierto a nuevas oportunidades, proyectos y conversaciones sobre tecnologia.</p>
            <div className="mt-8 grid gap-4 text-sm text-[#d8dbea]">
              <a className="flex items-center gap-3" href="mailto:denistineohuancas@gmail.com"><Icon name="mail" className="size-5 text-[#a58aff]" /> denistineohuancas@gmail.com</a>
              <p className="flex items-center gap-3"><Icon name="briefcase" className="size-5 text-[#a58aff]" /> Piura, Peru</p>
            </div>
            <div className="mt-8 flex gap-3">
              <a aria-label="GitHub" href="https://github.com/djamth" target="_blank" className="grid size-11 place-items-center rounded-full border border-white/15 text-white transition hover:bg-[#7040f7]"><Icon name="github" /></a>
              <a aria-label="LinkedIn" href="https://www.linkedin.com/in/denistineo" target="_blank" className="grid size-11 place-items-center rounded-full border border-white/15 text-white transition hover:bg-[#7040f7]"><Icon name="linkedin" /></a>
            </div>
          </div>

          <form className="grid gap-4 rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <input className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/45" placeholder="Tu nombre" />
              <input className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/45" placeholder="Tu email" type="email" />
            </div>
            <textarea className="min-h-36 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/45" placeholder="Cuentame sobre tu idea" />
            <button className="flex w-fit items-center gap-2 rounded-xl bg-gradient-to-r from-[#6335f5] to-[#9127ee] px-5 py-3 text-sm font-black transition hover:-translate-y-1">
              Enviar mensaje <Icon name="send" className="size-4" />
            </button>
          </form>
        </div>
        <footer className="mt-16 border-t border-white/10 pt-6 text-center text-xs text-[#888ea8]">&copy; 2026 Denis Jamil. Todos los derechos reservados.</footer>
      </div>
    </section>
  );
}
