import Image from "next/image";
import { social, contact, about } from "@/data/content";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col bg-crema overflow-hidden pt-20 md:pt-24"
    >
      {/* Accessibility */}
      <h1 className="sr-only">Francesca Torres</h1>

      {/* Top-left role */}
      <p className="absolute top-20 md:top-24 left-6 md:left-12 lg:left-20 z-40 font-body text-[0.65rem] md:text-xs uppercase tracking-[0.3em] text-marron max-w-[55%] md:max-w-none">
        Content creator <span className="opacity-60">&</span> Social Media Manager
      </p>

      {/* Main grid: bio | photo+names | stats */}
      <div className="flex-1 grid grid-cols-12 gap-4 md:gap-8 px-6 md:px-10 lg:px-16 pb-20 md:pb-16 items-center">

        {/* Left: bio (desktop) */}
        <aside className="hidden md:flex md:col-span-3 flex-col mt-12 lg:mt-20">
          <p className="font-body text-[0.7rem] uppercase tracking-[0.3em] text-crimson mb-3">
            {about.title}
          </p>
          <p className="font-body text-sm text-marron/85 leading-relaxed max-w-[18rem]">
            {about.bio[0]}
          </p>
        </aside>

        {/* Center: photo + names sandwich (names BELOW photo) */}
        <div className="col-span-12 md:col-span-6 relative flex flex-col items-center justify-end min-h-[58vh] md:min-h-[72vh]">
          {/* Photo on top */}
          <div className="relative z-20 w-56 sm:w-64 md:w-72 lg:w-[22rem]">
            <Image
              src="/images/fotos/portada_nofondo.webp"
              alt="Francesca Torres"
              width={873}
              height={1800}
              priority
              sizes="(min-width: 1024px) 22rem, (min-width: 768px) 18rem, 14rem"
              className="w-full h-auto object-contain drop-shadow-[0_25px_35px_rgba(115,67,79,0.18)]"
            />
          </div>
          {/* Names overlapping bottom of photo */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center leading-[0.78] z-10 pointer-events-none select-none">
            <span className="font-script text-burdeos text-[20vw] md:text-[15vw] lg:text-[13vw] whitespace-nowrap -mb-[0.12em]">
              Francesca
            </span>
            <span className="font-script text-crimson text-[20vw] md:text-[15vw] lg:text-[13vw] whitespace-nowrap md:translate-x-8 lg:translate-x-14">
              Torres
            </span>
          </div>
        </div>

        {/* Right: stats vertical (desktop) */}
        <aside className="hidden md:flex md:col-span-3 flex-col gap-6 lg:gap-8 items-end mt-12 lg:mt-20">
          {about.stats.map((s) => (
            <div key={s.label} className="text-right">
              <span className="block font-heading text-3xl lg:text-4xl text-crimson leading-none">
                {s.value}
              </span>
              <span className="font-body text-[0.65rem] md:text-xs text-marron/70 uppercase tracking-wider mt-1 block">
                {s.label}
              </span>
            </div>
          ))}
        </aside>

        {/* Mobile-only: bio + stats below names */}
        <div className="md:hidden col-span-12 mt-4 space-y-5">
          <div>
            <p className="font-body text-[0.65rem] uppercase tracking-[0.3em] text-crimson mb-2">
              {about.title}
            </p>
            <p className="font-body text-sm text-marron/85 leading-relaxed">
              {about.bio[0]}
            </p>
          </div>
          <div className="flex justify-between gap-3">
            {about.stats.map((s) => (
              <div key={s.label} className="text-center">
                <span className="block font-heading text-2xl text-crimson leading-none">
                  {s.value}
                </span>
                <span className="font-body text-[0.6rem] text-marron/70 uppercase tracking-wider mt-1 block">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom-right contact */}
      <div className="absolute bottom-5 md:bottom-7 right-6 md:right-12 lg:right-20 z-40 flex items-center gap-3">
        <a
          href={`mailto:${contact.email}`}
          className="hidden lg:flex items-center gap-2 font-body text-xs text-marron hover:text-crimson transition-colors"
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
        <a
          href={social.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="w-8 h-8 rounded-full bg-marron text-crema flex items-center justify-center hover:bg-crimson transition-colors"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        </a>
      </div>
    </section>
  );
}
