import Icon from "./Icon";
import ScrollReveal from "./ScrollReveal";

export default function About() {
  return (
    <section id="about" className="v103-scene-bg v103-scene-bg-alt relative overflow-hidden py-20 text-white lg:py-24">
      <div className="section-shell relative">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,.9fr)_minmax(0,1.35fr)] lg:items-center lg:gap-16">
          <ScrollReveal direction="left">
            <div className="max-w-[32rem]">
              <p className="text-[10px] font-bold uppercase tracking-[.22em] text-[#9f83ff]">01 / Sobre mí</p>
              <h2 className="mt-5 text-4xl font-semibold leading-[.98] tracking-[-.055em] sm:text-5xl xl:text-[3.5rem]">Pienso en el problema <span className="text-white/35">antes de escribir el código.</span></h2>
              <p className="mt-6 max-w-[29rem] text-sm leading-7 text-white/48">Soy estudiante de Ingeniería de Sistemas con especial interés por backend, arquitectura TI y calidad de software. Me enfoco en construir soluciones entendibles, mantenibles y útiles.</p>
              <a href="#contact" className="mt-7 inline-flex items-center gap-2 text-xs font-bold text-[#b49cff] transition hover:text-white">Conversemos <Icon name="arrow" className="size-4" /></a>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={120}>
            <div className="relative w-full overflow-hidden rounded-[30px] border border-white/10 bg-[#080817] p-5 shadow-[0_35px_90px_rgba(0,0,0,.35)] sm:p-7 lg:p-8">
              <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-1/2 bg-[radial-gradient(ellipse_at_bottom,rgba(111,61,255,.35),transparent_70%)]" />
              <div className="relative flex items-center gap-2 border-b border-white/8 pb-4 text-[10px] text-white/30"><span className="size-2 rounded-full bg-white/15" /><span className="size-2 rounded-full bg-white/15" /><span className="size-2 rounded-full bg-white/15" /><span className="ml-3 font-mono">developer.ts</span></div>
              <pre className="relative mt-6 overflow-x-auto font-mono text-[10px] leading-6 text-white/45 xl:text-[11px]"><code><span className="text-[#b49cff]">const</span> developer = {"{"}
{"  "}name: <span className="text-[#d9d0ff]">&quot;Denis Jamil&quot;</span>,
{"  "}focus: [<span className="text-[#d9d0ff]">&quot;Backend&quot;</span>, <span className="text-[#d9d0ff]">&quot;APIs REST&quot;</span>],
{"  "}stack: [<span className="text-[#d9d0ff]">&quot;Java&quot;</span>, <span className="text-[#d9d0ff]">&quot;Spring Boot&quot;</span>],
{"  "}database: <span className="text-[#d9d0ff]">&quot;PostgreSQL&quot;</span>,
{"  "}mindset: <span className="text-[#d9d0ff]">&quot;learn → build → improve&quot;</span>,
{"  "}available: <span className="text-[#8ee7c5]">true</span>
{"}"}</code></pre>
              <div className="relative mt-7 grid gap-3 sm:grid-cols-3">
                {["APIs mantenibles","Arquitectura TI","Aprendizaje continuo"].map((item,index)=><div key={item} className="min-w-0 rounded-2xl border border-white/8 bg-white/[.035] p-4"><span className="font-mono text-[9px] text-[#9f83ff]">0{index+1}</span><strong className="mt-2 block text-xs text-white/72">{item}</strong></div>)}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
