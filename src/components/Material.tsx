import { material } from "@/data/content";

const icons: Record<string, React.ReactNode> = {
  phone: (
    <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
  ),
  mic: (
    <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
    </svg>
  ),
  tripod: (
    <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v6m0 0L6 21m6-12l6 12M9 9h6" />
    </svg>
  ),
  light: (
    <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  ),
};

export default function Material() {
  return (
    <section id="material" className="section-padding bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="section-title">{material.title}</h2>
        <p className="section-subtitle">{material.subtitle}</p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {material.items.map((item) => (
            <div
              key={item.label}
              className="bg-crema rounded-2xl py-10 px-6 flex flex-col items-center text-center hover:shadow-md transition-shadow"
            >
              <div className="w-16 h-16 rounded-2xl bg-white text-crimson flex items-center justify-center mb-5 shadow-sm">
                {icons[item.icon]}
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
