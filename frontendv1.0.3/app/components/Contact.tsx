'use client';

import { useState, type FormEvent } from "react";
import Icon from "./Icon";
import ScrollReveal from "./ScrollReveal";

const email = "denistineohuancas@gmail.com";

export default function Contact() {
  const [copyStatus,setCopyStatus]=useState("");
  async function copyEmail(){try{await navigator.clipboard.writeText(email);setCopyStatus("Correo copiado");}catch{setCopyStatus("No se pudo copiar automáticamente.");}}
  function sendEmail(event:FormEvent<HTMLFormElement>){event.preventDefault();const data=new FormData(event.currentTarget);const name=String(data.get("name")??"").trim();const sender=String(data.get("email")??"").trim();const message=String(data.get("message")??"").trim();window.location.href=`mailto:${email}?subject=${encodeURIComponent(`Contacto desde portafolio: ${name}`)}&body=${encodeURIComponent(`Nombre: ${name}\nCorreo: ${sender}\n\n${message}`)}`;}

  return (
    <section id="contact" className="v103-scene-bg relative overflow-hidden px-3 pb-3 pt-20 text-white sm:px-5">
      <div className="relative overflow-hidden bg-transparent">
        <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-[72%] bg-[radial-gradient(ellipse_at_50%_120%,rgba(157,111,255,.92),rgba(105,56,239,.55)_25%,rgba(35,19,88,.15)_58%,transparent_76%)]" />
        <div className="section-shell relative py-24">
          <ScrollReveal className="mx-auto max-w-4xl text-center">
            <p className="text-[10px] font-bold uppercase tracking-[.22em] text-[#b49cff]">06 / Contacto</p>
            <h2 className="mt-5 text-5xl font-semibold leading-[.92] tracking-[-.065em] sm:text-7xl">¿Construimos algo <span className="text-white/35">juntos?</span></h2>
            <p className="mx-auto mt-6 max-w-lg text-sm leading-7 text-white/45">Estoy abierto a oportunidades, proyectos y conversaciones sobre tecnología.</p>
          </ScrollReveal>
          <div className="mx-auto mt-12 grid max-w-5xl gap-5 lg:grid-cols-[.72fr_1.28fr]">
            <ScrollReveal direction="left">
              <div className="h-full rounded-[26px] border border-white/10 bg-[#09091b]/70 p-6 backdrop-blur-2xl">
                <p className="font-mono text-[9px] uppercase tracking-[.16em] text-white/28">Direct contact</p>
                <a href={`mailto:${email}`} className="mt-5 block break-all text-sm font-semibold text-white/75 hover:text-[#c2b2ff]">{email}</a>
                <button onClick={copyEmail} type="button" className="mt-4 rounded-full border border-white/10 px-3 py-2 text-[9px] font-bold text-white/45 hover:text-white">Copiar correo</button>
                <p role="status" aria-live="polite" className="mt-2 min-h-4 text-[9px] text-[#b49cff]">{copyStatus}</p>
                <p className="mt-7 text-xs text-white/35">Piura, Perú</p>
                <div className="mt-5 flex gap-2"><a aria-label="GitHub" href="https://github.com/djamth" target="_blank" rel="noopener noreferrer" className="grid size-10 place-items-center rounded-full border border-white/10 bg-white/[.035] text-white/45 hover:text-white"><Icon name="github" className="size-4" /></a><a aria-label="LinkedIn" href="https://www.linkedin.com/in/denistineo" target="_blank" rel="noopener noreferrer" className="grid size-10 place-items-center rounded-full border border-white/10 bg-white/[.035] text-white/45 hover:text-white"><Icon name="linkedin" className="size-4" /></a></div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={120} direction="right">
              <form onSubmit={sendEmail} className="grid gap-3 rounded-[26px] border border-white/10 bg-[#09091b]/70 p-6 backdrop-blur-2xl">
                <div className="grid gap-3 sm:grid-cols-2"><input name="name" required maxLength={100} aria-label="Tu nombre" placeholder="Tu nombre" className="rounded-xl border border-white/9 bg-white/[.035] px-4 py-3 text-xs text-white outline-none placeholder:text-white/25 focus:border-[#8f70f0]/60" /><input name="email" required maxLength={254} type="email" aria-label="Tu correo electrónico" placeholder="Tu email" className="rounded-xl border border-white/9 bg-white/[.035] px-4 py-3 text-xs text-white outline-none placeholder:text-white/25 focus:border-[#8f70f0]/60" /></div>
                <textarea name="message" required maxLength={4000} aria-label="Tu mensaje" placeholder="Cuéntame sobre tu idea" className="min-h-36 rounded-xl border border-white/9 bg-white/[.035] px-4 py-3 text-xs text-white outline-none placeholder:text-white/25 focus:border-[#8f70f0]/60" />
                <button type="submit" className="mt-2 inline-flex w-fit items-center gap-2 rounded-full bg-white px-5 py-3 text-[10px] font-black text-[#090916] transition hover:scale-[1.03] motion-reduce:transform-none">Preparar correo <Icon name="send" className="size-3.5" /></button>
              </form>
            </ScrollReveal>
          </div>
          <footer className="mt-20 flex flex-col gap-3 border-t border-white/8 pt-6 text-[9px] uppercase tracking-[.13em] text-white/25 sm:flex-row sm:justify-between"><span>© 2026 Denis Jamil</span><span>Backend Developer · Peru</span></footer>
        </div>
      </div>
    </section>
  );
}
