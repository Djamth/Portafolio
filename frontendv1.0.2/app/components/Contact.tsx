'use client';

import { useState, type FormEvent } from "react";
import Icon from "./Icon";

const email = "denistineohuancas@gmail.com";

export default function Contact() {
  const [copyStatus, setCopyStatus] = useState("");

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopyStatus("Correo copiado al portapapeles");
    } catch {
      setCopyStatus("No se pudo copiar. Selecciona el correo para copiarlo manualmente.");
    }
  }

  function sendEmail(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const sender = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const subject = encodeURIComponent(`Contacto desde portafolio: ${name}`);
    const body = encodeURIComponent(`Nombre: ${name}\nCorreo: ${sender}\n\n${message}`);
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contact" className="bg-[#080d17] py-24 text-[#f5faff]">
      <div className="section-shell">
        <div className="grid gap-12 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[#00d9ff]">Contacto</p>
            <h2 className="mt-3 text-4xl font-black tracking-[-0.05em] sm:text-5xl">Construyamos algo juntos.</h2>
            <p className="mt-5 max-w-md text-sm leading-7 text-[#a8b8cc]">Estoy abierto a nuevas oportunidades, proyectos y conversaciones sobre tecnología.</p>
            <div className="mt-8 grid gap-4 text-sm text-[#dce9f6]">
              <div className="flex flex-wrap items-center gap-3"><Icon name="mail" className="size-5 text-[#00d9ff]" /><a href={`mailto:${email}`} className="break-all hover:text-[#00d9ff]">{email}</a><button type="button" onClick={copyEmail} className="rounded-lg border border-cyan-300/30 bg-cyan-300/10 px-3 py-2 text-xs font-bold text-[#79ebff] transition hover:bg-cyan-300/20" aria-label="Copiar dirección de correo electrónico">Copiar correo</button></div>
              <p role="status" aria-live="polite" className="text-xs text-[#79ebff]">{copyStatus}</p>
              <p className="flex items-center gap-3"><Icon name="briefcase" className="size-5 text-[#00d9ff]" /> Piura, Perú</p>
            </div>
            <div className="mt-8 flex gap-3">
              <a aria-label="GitHub" href="https://github.com/djamth" target="_blank" rel="noopener noreferrer" className="grid size-11 place-items-center rounded-full border border-white/15 text-white transition hover:border-cyan-300/60 hover:text-[#00d9ff]"><Icon name="github" /></a>
              <a aria-label="LinkedIn" href="https://www.linkedin.com/in/denistineo" target="_blank" rel="noopener noreferrer" className="grid size-11 place-items-center rounded-full border border-white/15 text-white transition hover:border-cyan-300/60 hover:text-[#00d9ff]"><Icon name="linkedin" /></a>
            </div>
          </div>

          <form onSubmit={sendEmail} className="grid gap-4 rounded-2xl border border-cyan-300/15 bg-[#111c2e] p-6">
            <p className="text-xs text-[#a8b8cc]">Al enviar, se abrirá tu aplicación de correo con el mensaje preparado; podrás revisarlo antes de enviarlo.</p>
            <div className="grid gap-4 sm:grid-cols-2">
              <input name="name" aria-label="Tu nombre" required maxLength={100} className="rounded-xl border border-white/15 bg-[#080d17] px-4 py-3 text-sm text-white placeholder:text-white/45" placeholder="Tu nombre" />
              <input name="email" aria-label="Tu correo electrónico" required maxLength={254} className="rounded-xl border border-white/15 bg-[#080d17] px-4 py-3 text-sm text-white placeholder:text-white/45" placeholder="Tu email" type="email" />
            </div>
            <textarea name="message" aria-label="Tu mensaje" required maxLength={4000} className="min-h-36 rounded-xl border border-white/15 bg-[#080d17] px-4 py-3 text-sm text-white placeholder:text-white/45" placeholder="Cuéntame sobre tu idea" />
            <button type="submit" className="flex w-fit items-center gap-2 rounded-xl bg-[#00d9ff] px-5 py-3 text-sm font-black text-[#080d17] transition hover:-translate-y-1 hover:bg-[#79ebff] motion-reduce:transform-none">Preparar correo <Icon name="send" className="size-4" /></button>
          </form>
        </div>
        <footer className="mt-16 border-t border-white/10 pt-6 text-center text-xs text-[#a8b8cc]">&copy; 2026 Denis Jamil. Todos los derechos reservados.</footer>
      </div>
    </section>
  );
}
