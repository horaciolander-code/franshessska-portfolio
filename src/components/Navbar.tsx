"use client";

import { useState, useEffect } from "react";
import { nav, siteConfig } from "@/data/content";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-crema/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16 md:h-20">
        <a href="#hero" className="font-heading text-2xl md:text-3xl text-crimson">
          {siteConfig.name}
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-sm text-marron hover:text-crimson transition-colors"
            >
              {link.text}
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span
            className={`block w-6 h-0.5 bg-marron transition-transform ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-marron transition-opacity ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-marron transition-transform ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile overlay */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 top-0 bg-burdeos/95 backdrop-blur-sm flex flex-col items-center justify-center gap-8 z-40">
          <button
            className="absolute top-5 right-6 text-crema text-3xl"
            onClick={() => setMenuOpen(false)}
            aria-label="Cerrar menu"
          >
            &times;
          </button>
          {nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-heading text-3xl text-crema hover:text-rosa transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.text}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
