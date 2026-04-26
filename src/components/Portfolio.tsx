"use client";

import { useState } from "react";
import Image from "next/image";
import { portfolio } from "@/data/content";

type VideoModal = { kind: "video"; src: string; title: string };
type ImageModal = { kind: "image"; src: string; title: string };
type Modal = VideoModal | ImageModal | null;

export default function Portfolio() {
  const [activeBrand, setActiveBrand] = useState(portfolio.brands[0].id);
  const [modal, setModal] = useState<Modal>(null);

  const brand = portfolio.brands.find((b) => b.id === activeBrand)!;

  return (
    <section id="portfolio" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-title">{portfolio.title}</h2>
          <p className="section-subtitle">{portfolio.subtitle}</p>
        </div>

        {/* Brand tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {portfolio.brands.map((b) => (
            <button
              key={b.id}
              onClick={() => setActiveBrand(b.id)}
              className={`font-body text-sm px-6 py-2.5 rounded-full transition-all ${
                activeBrand === b.id
                  ? "bg-crimson text-white shadow-md"
                  : "bg-crema text-marron hover:bg-rosa/30"
              }`}
            >
              {b.name}
            </button>
          ))}
        </div>

        {/* Active brand header */}
        <div className="text-center mb-10">
          <h3 className="font-heading text-3xl md:text-4xl text-marron mb-1">
            {brand.name}
          </h3>
          <p className="font-body text-sm text-rosa uppercase tracking-widest">
            {brand.tagline}
          </p>
        </div>

        {/* Videos grid */}
        {brand.videos.length > 0 && (
          <div
            className={`grid gap-4 md:gap-6 mb-12 ${
              brand.videos.length >= 4
                ? "grid-cols-2 md:grid-cols-4"
                : brand.videos.length === 3
                ? "grid-cols-2 md:grid-cols-3"
                : "grid-cols-2"
            }`}
          >
            {brand.videos.map((v, i) => (
              <button
                key={i}
                onClick={() => setModal({ kind: "video", ...v })}
                className="group relative aspect-[9/19] mx-auto w-full max-w-[260px] cursor-pointer"
              >
                {/* iPhone frame */}
                <div className="absolute inset-0 bg-neutral-900 rounded-[2.2rem] md:rounded-[2.5rem] p-[6px] md:p-[8px] shadow-[0_10px_30px_-5px_rgba(0,0,0,0.35)] group-hover:shadow-[0_20px_45px_-5px_rgba(0,0,0,0.45)] transition-shadow">
                  {/* Dynamic Island */}
                  <span
                    aria-hidden
                    className="absolute top-[10px] md:top-[12px] left-1/2 -translate-x-1/2 w-[58px] md:w-[70px] h-[16px] md:h-[18px] bg-black rounded-full z-20"
                  />
                  {/* Inner screen */}
                  <div className="relative w-full h-full bg-black rounded-[1.7rem] md:rounded-[2rem] overflow-hidden">
                    <video
                      src={v.src}
                      muted
                      playsInline
                      preload="metadata"
                      className="absolute inset-0 w-full h-full object-cover"
                      onMouseEnter={(e) => (e.currentTarget as HTMLVideoElement).play().catch(() => {})}
                      onMouseLeave={(e) => {
                        const vid = e.currentTarget as HTMLVideoElement;
                        vid.pause();
                        vid.currentTime = 0;
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-100 group-hover:opacity-0 transition-opacity duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center group-hover:opacity-0 transition-opacity">
                      <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
                        <svg className="w-5 h-5 md:w-6 md:h-6 text-crimson ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 px-3 pb-3 pt-6">
                      <p className="font-body text-[0.7rem] md:text-xs text-white text-left line-clamp-2">
                        {v.title}
                      </p>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        )}

        {/* Gallery */}
        {brand.gallery.length > 0 && (
          <>
            <p className="text-center font-body text-xs text-rosa uppercase tracking-widest mb-6">
              Galería
            </p>
            <div
              className={`grid gap-4 ${
                brand.gallery.length === 4
                  ? "grid-cols-2 md:grid-cols-4"
                  : "grid-cols-2 md:grid-cols-3"
              }`}
            >
              {brand.gallery.map((src, i) => (
                <button
                  key={i}
                  onClick={() => setModal({ kind: "image", src, title: `${brand.name} · ${i + 1}` })}
                  className="group relative aspect-square rounded-xl overflow-hidden bg-rosa/10 shadow-sm hover:shadow-md transition-shadow"
                >
                  <Image
                    src={src}
                    alt={`${brand.name} galería ${i + 1}`}
                    fill
                    sizes="(min-width: 768px) 25vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </button>
              ))}
            </div>
          </>
        )}

        {/* Identity Visual */}
        <div className="mt-24 pt-16 border-t border-rosa/20">
          <div className="text-center mb-12">
            <h3 className="font-heading text-3xl md:text-4xl text-marron mb-3">
              {portfolio.identity.title}
            </h3>
            <p className="font-body text-sm text-rosa max-w-3xl mx-auto leading-relaxed">
              {portfolio.identity.subtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {portfolio.identity.items.map((item, i) => (
              <button
                key={i}
                onClick={() => setModal({ kind: "image", ...item })}
                className="group relative aspect-[3/4] rounded-2xl overflow-hidden bg-rosa/10 shadow-sm hover:shadow-lg transition-shadow"
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-burdeos/90 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="font-heading text-lg text-white text-left">{item.title}</p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Posts RRSS */}
        <div className="mt-24 pt-16 border-t border-rosa/20">
          <div className="text-center mb-12">
            <h3 className="font-heading text-3xl md:text-4xl text-marron mb-3">
              {portfolio.posts.title}
            </h3>
            <p className="font-body text-sm text-rosa">{portfolio.posts.subtitle}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {portfolio.posts.items.map((item, i) => (
              <button
                key={i}
                onClick={() => setModal({ kind: "image", ...item })}
                className="group relative aspect-[3/4] rounded-2xl overflow-hidden bg-rosa/10 shadow-sm hover:shadow-lg transition-shadow"
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-burdeos/90 to-transparent p-5 opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="font-heading text-xl text-white text-left">{item.title}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {modal && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setModal(null)}
        >
          <button
            className="absolute top-4 right-4 text-white text-4xl hover:text-rosa transition-colors z-10"
            onClick={() => setModal(null)}
            aria-label="Cerrar"
          >
            &times;
          </button>
          <div
            className="relative max-w-full max-h-full"
            onClick={(e) => e.stopPropagation()}
          >
            {modal.kind === "video" ? (
              <div className="relative bg-neutral-900 rounded-[2.8rem] p-[10px] shadow-2xl mx-auto" style={{ height: "min(88vh, calc(90vw * 19 / 9))", aspectRatio: "9 / 19" }}>
                <span
                  aria-hidden
                  className="absolute top-[14px] left-1/2 -translate-x-1/2 w-[90px] h-[24px] bg-black rounded-full z-20"
                />
                <video
                  src={modal.src}
                  controls
                  autoPlay
                  playsInline
                  className="w-full h-full object-cover rounded-[2.2rem] bg-black"
                />
              </div>
            ) : (
              <div className="relative max-h-[90vh] max-w-[90vw]">
                <img
                  src={modal.src}
                  alt={modal.title}
                  className="max-h-[90vh] max-w-[90vw] object-contain rounded-2xl shadow-2xl"
                />
              </div>
            )}
            {modal.title && (
              <p className="absolute -bottom-10 left-1/2 -translate-x-1/2 font-body text-sm text-white/80 whitespace-nowrap">
                {modal.title}
              </p>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
