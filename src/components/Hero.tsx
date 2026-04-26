import Image from "next/image";
import { hero, about } from "@/data/content";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen bg-crema overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 min-h-screen">
        {/* LEFT: text */}
        <div className="flex flex-col justify-center px-6 md:pl-12 lg:pl-20 py-24 md:py-12 order-2 md:order-1">
          <p className="font-body text-xs md:text-sm uppercase tracking-[0.3em] text-crimson mb-6">
            {hero.role}
          </p>

          <h1 className="font-script text-burdeos leading-[0.85] mb-8 text-[5rem] sm:text-[6.5rem] md:text-[7rem] lg:text-[9.5rem]">
            <span className="block">
              Francesc<span className="text-crimson" style={{ fontSize: "1.25em", lineHeight: "0.85" }}>a</span>
            </span>
            <span className="block md:pl-12 lg:pl-20">Torres</span>
          </h1>

          <div className="space-y-3 mb-8 max-w-lg">
            {about.bio.map((paragraph, i) => (
              <p
                key={i}
                className="font-body text-sm md:text-base text-marron/80 leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="flex gap-10 md:gap-14 mb-10">
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

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a
              href={hero.ctaPrimary.href}
              className="inline-block bg-crimson text-white font-body text-sm md:text-base px-7 py-3.5 rounded-full hover:bg-burdeos transition-colors text-center"
            >
              {hero.ctaPrimary.text}
            </a>
            <a
              href={hero.ctaSecondary.href}
              className="inline-block border-2 border-marron text-marron font-body text-sm md:text-base px-7 py-3.5 rounded-full hover:bg-marron hover:text-white transition-colors text-center"
            >
              {hero.ctaSecondary.text}
            </a>
          </div>
        </div>

        {/* RIGHT: full-bleed photo to the right edge */}
        <div className="relative order-1 md:order-2 h-[60vh] md:h-auto">
          <Image
            src="/images/fotos/sobre_mi_orig.webp"
            alt="Francesca Torres"
            fill
            priority
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}
