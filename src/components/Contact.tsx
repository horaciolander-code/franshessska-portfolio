"use client";

import { useState } from "react";
import { contact, social } from "@/data/content";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: cliente — conectar con Formspree cuando tengamos el ID
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">{contact.title}</h2>
          <p className="section-subtitle">{contact.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          {/* Calendar / CTA side */}
          <div className="flex flex-col items-center justify-center text-center">
            {/* TODO: cliente — reemplazar con Google Calendar embed */}
            <div className="w-full max-w-sm aspect-square bg-crema rounded-2xl flex flex-col items-center justify-center mb-8">
              <svg
                className="w-16 h-16 text-crimson/40 mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <p className="font-heading text-xl text-marron mb-2">
                Agenda tu demo
              </p>
              <p className="font-body text-sm text-rosa mb-6">
                30 minutos sin compromiso
              </p>
              <a
                href={
                  contact.calendarUrl !== "PENDIENTE"
                    ? contact.calendarUrl
                    : "#contact"
                }
                className="bg-crimson text-white font-body text-sm px-8 py-3 rounded-full hover:bg-burdeos transition-colors"
                target={contact.calendarUrl !== "PENDIENTE" ? "_blank" : undefined}
                rel="noopener noreferrer"
              >
                Reservar cita
              </a>
            </div>

            {/* Social links */}
            <div className="flex gap-6 mt-4">
              <a
                href={social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-marron hover:text-crimson transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a
                href={social.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="text-marron hover:text-crimson transition-colors"
                aria-label="TikTok"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.48v-7.15a8.16 8.16 0 005.58 2.2V11.3a4.85 4.85 0 01-3.77-1.84V6.69h3.77z" />
                </svg>
              </a>
              <a
                href={social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-marron hover:text-crimson transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href={`mailto:${contact.email}`}
                className="text-marron hover:text-crimson transition-colors"
                aria-label="Email"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <input
                type="text"
                placeholder={contact.form.namePlaceholder}
                required
                className="w-full font-body text-sm border border-rosa/40 rounded-xl px-5 py-4 text-marron placeholder:text-rosa/60 focus:outline-none focus:ring-2 focus:ring-crimson/50 focus:border-crimson transition-colors bg-white"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder={contact.form.companyPlaceholder}
                className="w-full font-body text-sm border border-rosa/40 rounded-xl px-5 py-4 text-marron placeholder:text-rosa/60 focus:outline-none focus:ring-2 focus:ring-crimson/50 focus:border-crimson transition-colors bg-white"
              />
            </div>
            <div>
              <select
                defaultValue=""
                className="w-full font-body text-sm border border-rosa/40 rounded-xl px-5 py-4 text-marron focus:outline-none focus:ring-2 focus:ring-crimson/50 focus:border-crimson transition-colors bg-white"
              >
                <option value="" disabled>
                  Tipo de servicio
                </option>
                {contact.form.serviceOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <textarea
                placeholder={contact.form.messagePlaceholder}
                rows={5}
                className="w-full font-body text-sm border border-rosa/40 rounded-xl px-5 py-4 text-marron placeholder:text-rosa/60 focus:outline-none focus:ring-2 focus:ring-crimson/50 focus:border-crimson transition-colors bg-white resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-crimson text-white font-body text-sm px-8 py-4 rounded-full hover:bg-burdeos transition-colors"
            >
              {contact.form.submitText}
            </button>
            {submitted && (
              <p className="text-center font-body text-sm text-crimson animate-pulse">
                {contact.form.successMessage}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
