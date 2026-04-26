import Image from "next/image";
import { hero, about } from "@/data/content";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center bg-crema overflow-hidden pt-24 pb-16"
    >
      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14 items-center">
        {/* LEFT: editorial info */}
        <div className="md:col-span-7 order-2 md:order-1 relative">
          {/* Top eyebrow line */}
          <div className="flex items-center gap-3 mb-6">
            <span className="block w-10 h-px bg-crimson" />
            <p className="font-body text-[0.7rem] uppercase tracking-[0.35em] text-crimson">
              Portfolio · 2026
            </p>
          </div>

          {/* Role */}
          <p className="font-body text-xs md:text-sm uppercase tracking-[0.3em] text-marron/70 mb-3">
            {hero.role}
          </p>

          {/* Name in script */}
          <h1 className="font-script text-crimson leading-[0.85] mb-2 text-[5.5rem] sm:text-[7rem] md:text-[8.5rem] lg:text-[11rem]">
            Francesca
          </h1>
          <h1 className="font-script text-burdeos leading-[0.85] -mt-5 md:-mt-7 lg:-mt-10 mb-8 md:mb-10 text-[5.5rem] sm:text-[7rem] md:text-[8.5rem] lg:text-[11rem] md:pl-24 lg:pl-40">
            Torres
          </h1>

          {/* Bio */}
          <div className="space-y-3 mb-8 max-w-xl">
            {about.bio.map((paragraph, i) => (
              <p
                key={i}
                className="font-body text-sm md:text-base text-marron/80 leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Stats */}
          <div className="flex gap-8 md:gap-12 mb-8">
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

          {/* CTAs */}
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

        {/* RIGHT: editorial photo block */}
        <div className="md:col-span-5 order-1 md:order-2 relative flex justify-center md:justify-end">
          <div className="relative w-72 sm:w-80 md:w-[22rem] lg:w-[26rem] aspect-[4/5]">
            {/* Burdeos block behind, offset top-right */}
            <div
              aria-hidden
              className="absolute inset-0 translate-x-4 -translate-y-4 md:translate-x-6 md:-translate-y-6 bg-burdeos rounded-sm"
            />
            {/* Crimson thin frame trim */}
            <div
              aria-hidden
              className="absolute inset-0 -translate-x-3 translate-y-3 md:-translate-x-5 md:translate-y-5 border-2 border-crimson rounded-sm"
            />
            {/* Photo on top */}
            <Image
              src="/images/fotos/sobre_mi_orig.webp"
              alt="Francesca Torres"
              fill
              priority
              sizes="(min-width: 1024px) 26rem, (min-width: 768px) 22rem, 18rem"
              className="relative object-cover rounded-sm shadow-xl"
            />
            {/* Magazine-style label bottom-left */}
            <div className="absolute -bottom-3 left-3 md:-bottom-4 md:left-4 bg-crema px-3 py-1.5 z-10">
              <p className="font-body text-[0.65rem] uppercase tracking-[0.35em] text-marron">
                Vol. 01 · Madrid
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
