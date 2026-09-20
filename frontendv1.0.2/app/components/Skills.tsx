import Image from "next/image";

const skills = [
  ["Java", "java"], ["Spring", "spring"], ["JavaScript", "js"],
  ["TypeScript", "ts"], ["HTML5", "html"], ["CSS3", "css"],
  ["PostgreSQL", "postgres"], ["MySQL", "mysql"], ["Git", "git"],
  ["GitHub", "github"], ["Postman", "postman"], ["VS Code", "vscode"],
];

export default function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden bg-[#fbfcff] py-24 text-[#1c2943]">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_15%_90%,rgba(222,227,255,.35),transparent_40%)]" />
      <div className="section-shell relative">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-[#345be8]">Tecnologías que utilizo</p>
          <h2 className="mt-3 text-4xl font-black tracking-[-0.05em] text-[#1c2943]">Mi caja de herramientas</h2>
          <p className="mt-4 text-sm leading-6 text-[#63718b]">Tecnologías que uso para convertir ideas en productos funcionales.</p>
        </div>
        <div className="mt-12 grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-6">
          {skills.map(([name, icon]) => (
            <div key={name} className="group rounded-[22px] border border-white/90 bg-white/75 p-4 text-center shadow-[0_12px_32px_rgba(53,76,120,.06)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-[#bdc9f2] hover:shadow-[0_18px_34px_rgba(53,76,120,.12)] motion-reduce:transform-none">
              <Image src={`https://skillicons.dev/icons?i=${icon}`} alt={name} width={48} height={48} unoptimized className="mx-auto transition group-hover:scale-110 motion-reduce:transform-none" />
              <p className="mt-3 text-xs font-bold text-[#4d5b74]">{name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
