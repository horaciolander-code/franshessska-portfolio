import Image from "next/image";
import { social, contact, about } from "@/data/content";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen bg-crema overflow-hidden"
    >
      {/* Top-left role */}
      <p className="absolute top-24 md:top-28 left-6 md:left-12 lg:left-20 font-body text-[0.7rem] md:text-xs uppercase tracking-[0.35em] text-marron z-30 max-w-[60%] md:max-w-none">
        Content creator <span className="opacity-60">&</span> Social Media Manager
      </p>

      {/* Giant script name behind everything */}
      <h1
        aria-label="Francesca Torres"
        className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex flex-col items-center justify-center pointer-events-none select-none z-0 leading-[0.8]"
      >
        <span className="font-script text-burdeos whitespace-nowrap text-[18vw] md:text-[14vw] lg:text-[13vw]">
          Francesca
        </span>
        <span className="font-script text-crimson whitespace-nowrap text-[18vw] md:text-[14vw] lg:text-[13vw] -mt-[0.35em] md:translate-x-10 lg:translate-x-16">
          Torres
        </span>
      </h1>

      {/* Centered photo (smaller) */}
      <div className="relative z-10 min-h-screen flex items-end justify-center pt-32 pb-48 md:pb-56">
        <Image
          src="/images/fotos/portada_nofondo.webp"
          alt="Francesca Torres"
          width={873}
          height={1800}
          priority
          sizes="(min-width: 1024px) 22rem, (min-width: 768px) 18rem, 14rem"
          className="w-56 sm:w-64 md:w-72 lg:w-[22rem] h-auto object-contain drop-shadow-[0_20px_30px_rgba(115,67,79,0.15)]"
        />
      </div>

      {/* Bio + stats integrated at the bottom */}
      <div className="absolute bottom-28 md:bottom-32 left-0 right-0 z-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-end">
          {/* Bio */}
          <div className="md:col-span-5 hidden md:block">
            <p className="font-body text-xs uppercase tracking-[0.3em] text-crimson mb-3">
              {about.title}
            </p>
            <p className="font-body text-sm lg:text-base text-marron/85 leading-relaxed max-w-md">
              {about.bio[0]}
            </p>
          </div>

          {/* Stats */}
          <div className="md:col-span-7 flex justify-center md:justify-end gap-8 md:gap-12">
            {about.stats.map((stat) => (
              <div key={stat.label} className="text-center md:text-right">
                <span className="block font-heading text-2xl md:text-3xl lg:text-4xl text-crimson leading-none">
                  {stat.value}
                </span>
                <span className="font-body text-[0.65rem] md:text-xs text-marron/70 uppercase tracking-wider">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom-right contact */}
      <div className="absolute bottom-6 md:bottom-8 right-6 md:right-12 lg:right-20 z-30 flex items-center gap-3">
        <a
          href={`mailto:${contact.email}`}
          className="hidden sm:flex items-center gap-2 font-body text-xs text-marron hover:text-crimson transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <span>{contact.email}</span>
        </a>
        <a
          href={social.instagram}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="w-8 h-8 rounded-full bg-marron text-crema flex items-center justify-center hover:bg-crimson transition-colors"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
          </svg>
        </a>
        <a
          href={social.tiktok}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="TikTok"
          className="w-8 h-8 rounded-full bg-marron text-crema flex items-center justify-center hover:bg-crimson transition-colors"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.48v-7.15a8.16 8.16 0 005.58 2.2V11.3a4.85 4.85 0 01-3.77-1.84V6.69h3.77z" />
          </svg>
        </a>
      </div>
    </section>
  );
}
