import { pricing } from "@/data/content";

export default function Pricing() {
  return (
    <section id="pricing" className="section-padding bg-crema">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="section-title">{pricing.title}</h2>
        <p className="section-subtitle">{pricing.subtitle}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {pricing.plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-white rounded-3xl p-8 md:p-10 text-left shadow-sm ${
                plan.highlighted
                  ? "ring-2 ring-crimson shadow-lg md:scale-105"
                  : ""
              }`}
            >
              {plan.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-crimson text-white font-body text-xs px-4 py-1 rounded-full">
                  Popular
                </span>
              )}
              <p className="font-body text-sm text-rosa uppercase tracking-wider mb-1">
                {plan.subtitle}
              </p>
              <h3 className="font-heading text-2xl text-marron mb-2">
                {plan.name}
              </h3>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="font-heading text-5xl text-crimson">
                  {plan.price}&euro;
                </span>
                <span className="font-body text-marron/60">{plan.period}</span>
              </div>
              <ul className="space-y-3 mb-10">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-crimson mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="font-body text-sm text-marron/80">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`block text-center font-body text-sm px-8 py-4 rounded-full transition-colors ${
                  plan.highlighted
                    ? "bg-crimson text-white hover:bg-burdeos"
                    : "border-2 border-crimson text-crimson hover:bg-crimson hover:text-white"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="font-body text-sm text-rosa mt-10">
          {pricing.customNote}{" "}
          <a href="#contact" className="text-crimson underline hover:text-burdeos">
            Contactame
          </a>
        </p>
      </div>
    </section>
  );
}
