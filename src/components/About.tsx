import Image from "next/image";
import { about } from "@/data/content";

export default function About() {
  return (
    <section id="about" className="section-padding bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-center">
        {/* Photo (transparent cutout, no frame) */}
        <div className="md:col-span-5 relative flex justify-center md:justify-end">
          {/* Soft color blob behind the cutout */}
          <div className="absolute inset-x-4 top-8 bottom-0 bg-rosa/15 rounded-[40%_60%_55%_45%/45%_50%_50%_55%]" aria-hidden />
          <Image
            src={about.image}
            alt="Francesca Torres"
            width={614}
            height={1400}
            sizes="(min-width: 1024px) 24rem, (min-width: 768px) 20rem, 16rem"
            className="relative w-64 md:w-72 lg:w-[24rem] h-auto object-contain"
          />
        </div>

        {/* Text */}
        <div className="md:col-span-7">
          <h2 className="section-title">{about.title}</h2>
          <div className="space-y-4 mb-10">
            {about.bio.map((paragraph, i) => (
              <p key={i} className="font-body text-base md:text-lg text-marron/80 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Stats */}
          <div className="flex gap-8 md:gap-12">
            {about.stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <span className="block font-heading text-3xl md:text-4xl text-crimson">
                  {stat.value}
                </span>
                <span className="font-body text-sm text-rosa">
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
