import { about } from "@/data/content";

export default function AboutMobile() {
  return (
    <section
      id="about"
      className="md:hidden bg-crema px-6 pt-4 pb-14"
    >
      <div className="max-w-md mx-auto">
        <p className="font-body text-[0.65rem] uppercase tracking-[0.3em] text-crimson mb-3 text-center">
          {about.title}
        </p>
        <p className="font-body text-sm text-marron/85 leading-relaxed text-center mb-8">
          {about.bio[0]}
        </p>
        <div className="grid grid-cols-3 gap-3 pt-6 border-t border-rosa/30">
          {about.stats.map((s) => (
            <div key={s.label} className="text-center">
              <span className="block font-heading text-2xl text-crimson leading-none">
                {s.value}
              </span>
              <span className="font-body text-[0.6rem] text-marron/70 uppercase tracking-wider mt-1.5 block">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
