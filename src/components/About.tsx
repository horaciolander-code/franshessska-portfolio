import Image from "next/image";
import { about } from "@/data/content";

export default function About() {
  return (
    <section id="about" className="section-padding bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14 items-center">
        {/* Photo (SOBRE MI 4:5 with original white background) */}
        <div className="md:col-span-5 relative flex justify-center md:justify-start">
          <Image
            src="/images/fotos/sobre_mi_orig.webp"
            alt="Francesca Torres"
            width={1279}
            height={1600}
            sizes="(min-width: 1024px) 26rem, (min-width: 768px) 22rem, 18rem"
            className="w-72 sm:w-80 md:w-[22rem] lg:w-[26rem] h-auto object-cover rounded-sm shadow-md"
          />
        </div>

        {/* Text */}
        <div className="md:col-span-7">
          <p className="font-body text-xs md:text-sm uppercase tracking-[0.3em] text-crimson mb-4">
            {about.title}
          </p>
          <h2 className="font-script text-burdeos leading-[0.85] mb-8 text-[3.5rem] md:text-[5rem] lg:text-[6rem]">
            Hola, soy Francesca
          </h2>
          <div className="space-y-4 mb-10 max-w-xl">
            {about.bio.map((paragraph, i) => (
              <p key={i} className="font-body text-base md:text-lg text-marron/80 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Stats */}
          <div className="flex gap-10 md:gap-14">
            {about.stats.map((stat) => (
              <div key={stat.label}>
                <span className="block font-heading text-3xl md:text-4xl text-crimson leading-none">
                  {stat.value}
                </span>
                <span className="font-body text-xs md:text-sm text-rosa">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
