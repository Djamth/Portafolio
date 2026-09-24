'use client';

import { useState, type FormEvent } from "react";
import Icon from "./Icon";

const email = "denistineohuancas@gmail.com";

export default function Contact() {
  const [copyStatus, setCopyStatus] = useState("");
  async function copyEmail() {
    try { await navigator.clipboard.writeText(email); setCopyStatus("Correo copiado al portapapeles"); }
    catch { setCopyStatus("No se pudo copiar. Selecciona el correo para copiarlo manualmente."); }
  }
  function sendEmail(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const sender = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(`Contacto desde portafolio: ${name}`)}&body=${encodeURIComponent(`Nombre: ${name}\nCorreo: ${sender}\n\n${message}`)}`;
  }

  return (
    <section id="contact" className="relative overflow-hidden bg-[#f3f6fc] py-24 text-[#1c2943]">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(213,222,255,.55),transparent_38%),radial-gradient(ellipse_at_15%_90%,rgba(218,239,240,.55),transparent_36%)]" />
      <div className="section-shell relative">
        <div className="grid gap-12 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[#345be8]">Contacto</p>
            <h2 className="mt-3 text-4xl font-black tracking-[-0.05em] sm:text-5xl">Construyamos algo juntos.</h2>
            <p className="mt-5 max-w-md text-sm leading-7 text-[#63718b]">Estoy abierto a nuevas oportunidades, proyectos y conversaciones sobre tecnología.</p>
            <div className="mt-8 grid gap-4 text-sm text-[#34415c]">
              <div className="flex flex-wrap items-center gap-3"><Icon name="mail" className="size-5 text-[#345be8]" /><a href={`mailto:${email}`} className="break-all hover:text-[#345be8]">{email}</a><button type="button" onClick={copyEmail} className="rounded-lg border border-[#d5dff8] bg-white/70 px-3 py-2 text-xs font-bold text-[#345be8] transition hover:bg-white" aria-label="Copiar dirección de correo electrónico">Copiar correo</button></div>
              <p role="status" aria-live="polite" className="text-xs text-[#345be8]">{copyStatus}</p>
              <p className="flex items-center gap-3"><Icon name="briefcase" className="size-5 text-[#345be8]" /> Piura, Perú</p>
            </div>
            <div className="mt-8 flex gap-3">
              <a aria-label="GitHub" href="https://github.com/djamth" target="_blank" rel="noopener noreferrer" className="grid size-11 place-items-center rounded-full border border-[#d5ddec] bg-white/65 text-[#26344f] transition hover:border-[#8ca4ee] hover:text-[#345be8]"><Icon name="github" /></a>
              <a aria-label="LinkedIn" href="https://www.linkedin.com/in/denistineo" target="_blank" rel="noopener noreferrer" className="grid size-11 place-items-center rounded-full border border-[#d5ddec] bg-white/65 text-[#26344f] transition hover:border-[#8ca4ee] hover:text-[#345be8]"><Icon name="linkedin" /></a>
            </div>
          </div>
          <form onSubmit={sendEmail} className="grid gap-4 rounded-[26px] border border-white/90 bg-white/65 p-6 shadow-[0_18px_48px_rgba(53,76,120,.09)] backdrop-blur-2xl">
            <p className="text-xs text-[#63718b]">Al enviar, se abrirá tu aplicación de correo con el mensaje preparado; podrás revisarlo antes de enviarlo.</p>
            <div className="grid gap-4 sm:grid-cols-2">
              <input name="name" aria-label="Tu nombre" required maxLength={100} className="rounded-xl border border-[#dce2ef] bg-white/80 px-4 py-3 text-sm text-[#1c2943] outline-none placeholder:text-[#929bad] focus:border-[#8ca4ee]" placeholder="Tu nombre" />
              <input name="email" aria-label="Tu correo electrónico" required maxLength={254} className="rounded-xl border border-[#dce2ef] bg-white/80 px-4 py-3 text-sm text-[#1c2943] outline-none placeholder:text-[#929bad] focus:border-[#8ca4ee]" placeholder="Tu email" type="email" />
            </div>
            <textarea name="message" aria-label="Tu mensaje" required maxLength={4000} className="min-h-36 rounded-xl border border-[#dce2ef] bg-white/80 px-4 py-3 text-sm text-[#1c2943] outline-none placeholder:text-[#929bad] focus:border-[#8ca4ee]" placeholder="Cuéntame sobre tu idea" />
            <button type="submit" className="flex w-fit items-center gap-2 rounded-xl bg-[#345be8] px-5 py-3 text-sm font-black text-white transition hover:-translate-y-1 hover:bg-[#2547bd] motion-reduce:transform-none">Preparar correo <Icon name="send" className="size-4" /></button>
          </form>
        </div>
        <footer className="mt-16 border-t border-[#dce2ef] pt-6 text-center text-xs text-[#73809a]">&copy; 2026 Denis Jamil. Todos los derechos reservados.</footer>
      </div>
    </section>
  );
}
