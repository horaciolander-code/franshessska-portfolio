import Image from "next/image";
import { material } from "@/data/content";

export default function Material() {
  return (
    <section id="material" className="section-padding bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="section-title">{material.title}</h2>
        <p className="section-subtitle">{material.subtitle}</p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {material.items.map((item) => (
            <div
              key={item.label}
              className="bg-crema rounded-2xl py-8 px-6 flex flex-col items-center text-center hover:shadow-md transition-shadow"
            >
              <div className="relative w-32 h-32 md:w-36 md:h-36 mb-5 flex items-center justify-center">
                <Image
                  src={item.image}
                  alt={item.label}
                  fill
                  sizes="160px"
                  className="object-contain"
                />
              </div>
              <p className="font-heading text-lg md:text-xl text-marron leading-tight">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
