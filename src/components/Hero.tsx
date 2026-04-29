import Image from "next/image";
import { hero } from "@/data/content";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen bg-crema overflow-hidden flex flex-col items-center justify-center pt-24 pb-12"
    >
      {/* Top role label */}
      <p className="absolute top-24 left-1/2 -translate-x-1/2 font-body text-[0.7rem] md:text-xs uppercase tracking-[0.35em] text-crimson z-20 whitespace-nowrap">
        {hero.role}
      </p>

      {/* Name + photo composition */}
      <div className="relative w-full max-w-[1100px] mx-auto px-6 flex items-center justify-center">
        {/* Script name behind the photo (two lines, photo passes between) */}
        <h1
          aria-label="Francesca Torres"
          className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none z-0 leading-[0.85]"
        >
          <span className="font-script text-burdeos text-[26vw] md:text-[20vw] lg:text-[18rem] -mt-4 md:-mt-8">
            Francesca
          </span>
          <span className="font-script text-crimson text-[26vw] md:text-[20vw] lg:text-[18rem] -mt-12 md:-mt-20 lg:-mt-28">
            Torres
          </span>
        </h1>

        {/* Cutout photo on top */}
        <Image
          src="/images/fotos/portada_nofondo.webp"
          alt="Francesca Torres"
          width={873}
          height={1800}
          priority
          sizes="(min-width: 1024px) 32rem, (min-width: 768px) 26rem, 18rem"
          className="relative z-10 w-72 sm:w-80 md:w-[26rem] lg:w-[32rem] h-auto object-contain drop-shadow-xl"
        />
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        aria-label="Desliza para conocer más"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-marron/60 hover:text-crimson transition-colors animate-bounce z-20"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7" />
        </svg>
      </a>
    </section>
  );
}
