import Image from "next/image";
import { about } from "@/data/content";

export default function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-end">
        {/* Photo (transparent cutout, no frame) */}
        <div className="flex justify-center md:justify-end">
          <Image
            src={about.image}
            alt="Francesca Torres"
            width={614}
            height={1400}
            priority={false}
            sizes="(min-width: 1024px) 28rem, (min-width: 768px) 22rem, 18rem"
            className="w-72 md:w-80 lg:w-[28rem] h-auto object-contain"
          />
        </div>

        {/* Text */}
        <div>
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
