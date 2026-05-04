'use client';

import Image from "next/image";

const categories = [
  {
    title: "Backend",
    skills: [
      ["Java", "java"],
      ["Spring Boot", "spring"],
      ["Maven", "maven"],
    ],
  },
  {
    title: "Frontend",
    skills: [
      ["JavaScript", "js"],
      ["HTML", "html"],
      ["CSS", "css"],
      ["Bootstrap", "bootstrap"],
    ],
  },
  {
    title: "Database",
    skills: [
      ["PostgreSQL", "postgres"],
      ["MySQL", "mysql"],
      ["SQLite", "sqlite"],
    ],
  },
  {
    title: "DevOps Tools",
    skills: [
      ["Git", "git"],
      ["IntelliJ", "idea"],
      ["Arduino", "arduino"],
      ["VS Code", "vscode"],
      ["GitHub", "github"],
      ["Postman", "postman"],
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="border-b border-[#333] bg-black px-5 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-10 text-center text-4xl font-bold">
          <span className="bg-gradient-to-r from-[#00d9ff] to-[#ff006e] bg-clip-text text-transparent">
            Habilidades
          </span>
        </h2>

        <div className="grid gap-10 md:grid-cols-2">
          {categories.map((category) => (
            <div key={category.title}>
              <h3 className="mb-5 bg-gradient-to-r from-[#00d9ff] to-[#ff006e] bg-clip-text text-xl font-bold text-transparent">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {category.skills.map(([name, icon]) => (
                  <div key={name} className="rounded-[10px] border border-[#333] bg-[#1a1a1a] p-4 text-center shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition hover:-translate-y-2">
                    <Image
                      src={`https://skillicons.dev/icons?i=${icon}`}
                      alt={name}
                      width={50}
                      height={50}
                      className="mx-auto mb-3"
                    />
                    <h4 className="bg-gradient-to-r from-[#00d9ff] to-[#ff006e] bg-clip-text text-sm font-bold text-transparent">
                      {name}
                    </h4>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
