import Image from "next/image";
import { hero, about } from "@/data/content";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center bg-crema overflow-hidden pt-24 pb-16"
    >
      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 items-center">
        {/* LEFT: name + bio + stats + CTAs */}
        <div className="md:col-span-7 lg:col-span-7 order-2 md:order-1">
          <p className="font-body text-[0.7rem] md:text-xs uppercase tracking-[0.3em] text-crimson mb-4">
            {hero.role}
          </p>

          <h1 className="font-script text-crimson leading-[0.85] mb-2 text-[6rem] sm:text-[8rem] md:text-[9rem] lg:text-[12rem]">
            Francesca
          </h1>
          <h1 className="font-script text-burdeos leading-[0.85] -mt-6 md:-mt-8 lg:-mt-12 mb-8 text-[6rem] sm:text-[8rem] md:text-[9rem] lg:text-[12rem] md:pl-32 lg:pl-48">
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
          <div className="flex gap-8 md:gap-10 mb-8">
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

        {/* RIGHT: cutout photo with soft blob */}
        <div className="md:col-span-5 lg:col-span-5 order-1 md:order-2 relative flex justify-center md:justify-end">
          <div
            className="absolute inset-x-0 top-6 bottom-0 bg-rosa/20 rounded-[45%_55%_50%_50%/55%_45%_55%_45%]"
            aria-hidden
          />
          <Image
            src={about.image}
            alt="Francesca Torres"
            width={614}
            height={1400}
            priority
            sizes="(min-width: 1024px) 26rem, (min-width: 768px) 22rem, 18rem"
            className="relative w-72 sm:w-80 md:w-[22rem] lg:w-[26rem] h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}
