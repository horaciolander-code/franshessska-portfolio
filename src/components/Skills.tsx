import { skills } from "@/data/content";

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-burdeos text-crema relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none" aria-hidden>
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-rosa blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-crimson blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto text-center">
        <h2 className="font-heading text-4xl md:text-5xl mb-3">{skills.title}</h2>
        <p className="font-body text-base md:text-lg text-crema/70 mb-14 max-w-xl mx-auto">
          {skills.subtitle}
        </p>

        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
          {skills.tools.map((tool) => (
            <span
              key={tool}
              className="font-body text-sm md:text-base uppercase tracking-wider px-6 py-3 rounded-full border border-crema/30 bg-crema/5 text-crema hover:bg-crimson hover:border-crimson transition-all cursor-default"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
