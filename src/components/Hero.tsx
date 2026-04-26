import Image from "next/image";
import { hero } from "@/data/content";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-crema overflow-hidden pt-20 pb-12"
    >
      {/* Top label */}
      <p className="absolute top-24 md:top-28 left-1/2 -translate-x-1/2 md:left-12 md:translate-x-0 font-body text-[0.7rem] md:text-xs uppercase tracking-[0.3em] text-marron z-20">
        {hero.role}
      </p>

      {/* Giant script name (background layer) */}
      <h1
        aria-label={hero.name}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-heading italic text-crimson/90 leading-none whitespace-nowrap z-0 select-none text-[20vw] md:text-[16vw] lg:text-[15rem]"
      >
        Francesca
      </h1>

      {/* Cutout photo on top */}
      <div className="relative z-10 flex items-end justify-center w-full h-full">
        <Image
          src={hero.image}
          alt={hero.name}
          width={920}
          height={1800}
          priority
          sizes="(min-width: 1024px) 32rem, (min-width: 768px) 26rem, 18rem"
          className="w-72 sm:w-80 md:w-[26rem] lg:w-[32rem] h-auto object-contain drop-shadow-xl"
        />
      </div>

      {/* CTAs */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col sm:flex-row gap-3 sm:gap-4 z-20">
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
    </section>
  );
}
