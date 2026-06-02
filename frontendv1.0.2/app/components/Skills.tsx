import Image from "next/image";

const skills = [
  ["Java", "java"],
  ["Spring", "spring"],
  ["JavaScript", "js"],
  ["TypeScript", "ts"],
  ["HTML5", "html"],
  ["CSS3", "css"],
  ["PostgreSQL", "postgres"],
  ["MySQL", "mysql"],
  ["Git", "git"],
  ["GitHub", "github"],
  ["Postman", "postman"],
  ["VS Code", "vscode"],
];

export default function Skills() {
  return (
    <section id="skills" className="bg-white py-24">
      <div className="section-shell">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-[#6335f5]">Tecnologias que utilizo</p>
          <h2 className="mt-3 text-4xl font-black tracking-[-0.05em] text-[#111326]">Mi caja de herramientas</h2>
          <p className="mt-4 text-sm leading-6 text-[#73788f]">Tecnologias que uso para convertir ideas en productos funcionales.</p>
        </div>
        <div className="mt-12 grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-6">
          {skills.map(([name, icon]) => (
            <div key={name} className="group rounded-2xl border border-[#eceef6] bg-white p-4 text-center transition hover:-translate-y-2 hover:border-[#cbbcff] hover:shadow-[0_16px_28px_rgba(98,53,245,0.12)]">
              <Image src={`https://skillicons.dev/icons?i=${icon}`} alt={name} width={48} height={48} unoptimized className="mx-auto transition group-hover:scale-110" />
              <p className="mt-3 text-xs font-bold text-[#4d5268]">{name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
