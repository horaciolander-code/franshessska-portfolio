import Image from "next/image";
import { hero } from "@/data/content";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center bg-crema overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center pt-20">
        {/* Text */}
        <div className="order-2 md:order-1 text-center md:text-left">
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl text-marron mb-3 leading-[0.95]">
            {hero.name}
          </h1>
          <p className="font-body text-sm md:text-base uppercase tracking-[0.25em] text-crimson mb-6">
            {hero.role}
          </p>
          <p className="font-body text-lg md:text-xl text-rosa mb-10 max-w-lg mx-auto md:mx-0">
            {hero.tagline}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href={hero.ctaPrimary.href}
              className="inline-block bg-crimson text-white font-body text-sm md:text-base px-8 py-4 rounded-full hover:bg-burdeos transition-colors"
            >
              {hero.ctaPrimary.text}
            </a>
            <a
              href={hero.ctaSecondary.href}
              className="inline-block border-2 border-marron text-marron font-body text-sm md:text-base px-8 py-4 rounded-full hover:bg-marron hover:text-white transition-colors"
            >
              {hero.ctaSecondary.text}
            </a>
          </div>
        </div>

        {/* Photo */}
        <div className="order-1 md:order-2 flex justify-center">
          <div className="relative w-72 md:w-96 lg:w-[28rem] aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl bg-white">
            <Image
              src={hero.image}
              alt={hero.name}
              fill
              priority
              sizes="(min-width: 1024px) 28rem, (min-width: 768px) 24rem, 18rem"
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-rosa"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7"
          />
        </svg>
      </div>
    </section>
  );
}
