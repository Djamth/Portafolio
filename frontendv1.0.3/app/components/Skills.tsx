import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const skills = [["Java","java"],["Spring","spring"],["JavaScript","js"],["TypeScript","ts"],["HTML5","html"],["CSS3","css"],["PostgreSQL","postgres"],["MySQL","mysql"],["Git","git"],["GitHub","github"],["Postman","postman"],["VS Code","vscode"]];

export default function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden bg-[#02020f] pb-28 pt-8 text-white">
      <div className="section-shell relative">
        <div className="relative overflow-hidden rounded-[34px] border border-white/10 bg-[#070717] px-5 py-16 shadow-[0_30px_90px_rgba(0,0,0,.32)] sm:px-10 lg:px-14">
          <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-[58%] bg-[radial-gradient(ellipse_at_50%_115%,rgba(133,78,255,.62),rgba(77,38,174,.2)_38%,transparent_72%)]" />
          <ScrollReveal direction="scale" className="relative mx-auto max-w-2xl text-center">
            <p className="text-[10px] font-bold uppercase tracking-[.22em] text-[#a88dff]">02 / Stack</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-.055em] sm:text-5xl">Tecnología que uso para <span className="text-white/35">llevar ideas a producción.</span></h2>
          </ScrollReveal>
          <div className="relative mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {skills.map(([name,icon],index)=>(
              <ScrollReveal key={name} delay={(index%6)*55} direction="scale">
                <div className="group flex min-h-32 flex-col items-center justify-center rounded-[22px] border border-white/9 bg-[#0a0a1c]/75 p-4 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-[#8f70f0]/45 hover:bg-[#11102a] motion-reduce:transform-none">
                  <Image src={`https://skillicons.dev/icons?i=${icon}`} alt={name} width={42} height={42} unoptimized className="opacity-80 transition group-hover:scale-110 group-hover:opacity-100 motion-reduce:transform-none" />
                  <p className="mt-4 text-[10px] font-bold uppercase tracking-[.12em] text-white/45 group-hover:text-white/75">{name}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <p className="relative mt-8 text-center font-mono text-[10px] text-white/28">build · integrate · test · improve · repeat</p>
        </div>
      </div>
    </section>
  );
}
