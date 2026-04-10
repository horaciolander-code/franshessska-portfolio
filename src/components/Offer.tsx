import { offer } from "@/data/content";

export default function Offer() {
  return (
    <section className="bg-crimson py-20 md:py-28 px-6">
      <div className="max-w-3xl mx-auto text-center text-white">
        <h2 className="font-heading text-4xl md:text-6xl mb-3">
          {offer.title}
        </h2>
        <p className="font-heading text-2xl md:text-3xl text-white/80 mb-6">
          {offer.subtitle}
        </p>
        <p className="font-body text-base md:text-lg text-white/70 mb-10 max-w-xl mx-auto">
          {offer.description}
        </p>
        <a
          href={offer.cta.href}
          className="inline-block bg-white text-crimson font-body font-medium text-base px-10 py-4 rounded-full hover:bg-crema transition-colors"
        >
          {offer.cta.text}
        </a>
      </div>
    </section>
  );
}
