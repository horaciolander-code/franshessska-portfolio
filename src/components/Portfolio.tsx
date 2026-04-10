"use client";

import { useState } from "react";
import { portfolio } from "@/data/content";

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("Todos");
  const [modalItem, setModalItem] = useState<(typeof portfolio.items)[0] | null>(null);

  const filtered =
    activeFilter === "Todos"
      ? portfolio.items
      : portfolio.items.filter((item) => item.category === activeFilter);

  return (
    <section id="portfolio" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="section-title">{portfolio.title}</h2>
        <p className="section-subtitle">{portfolio.subtitle}</p>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {portfolio.filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`font-body text-sm px-6 py-2 rounded-full transition-colors ${
                activeFilter === filter
                  ? "bg-crimson text-white"
                  : "bg-crema text-marron hover:bg-rosa/30"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {filtered.map((item, i) => (
            <button
              key={i}
              onClick={() => setModalItem(item)}
              className="group relative aspect-[9/16] bg-burdeos/20 rounded-2xl overflow-hidden cursor-pointer"
            >
              {/* TODO: cliente — reemplazar con thumbnail de Google Drive */}
              <div className="absolute inset-0 bg-gradient-to-t from-burdeos/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <svg
                  className="w-12 h-12 text-crema/50 group-hover:text-white group-hover:scale-110 transition-all"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="font-body text-sm text-white text-left">
                  {item.title}
                </p>
                <p className="font-body text-xs text-crema/70 text-left">
                  {item.category}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Modal */}
      {modalItem && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setModalItem(null)}
        >
          <button
            className="absolute top-4 right-4 text-white text-4xl hover:text-rosa transition-colors"
            onClick={() => setModalItem(null)}
            aria-label="Cerrar"
          >
            &times;
          </button>
          <div
            className="w-full max-w-sm aspect-[9/16] bg-burdeos rounded-2xl flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* TODO: cliente — iframe de Google Drive aqui */}
            <svg className="w-16 h-16 text-crema/50 mb-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
            <p className="font-heading text-xl text-crema">{modalItem.title}</p>
            <p className="font-body text-sm text-crema/60 mt-1">{modalItem.category}</p>
          </div>
        </div>
      )}
    </section>
  );
}
