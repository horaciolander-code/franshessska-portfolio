// ============================================================
// CONTENIDO DEL SITIO — Franshessska Portfolio
// ============================================================
// Todo el copy va aqui. La clienta edita textos sin tocar codigo.
// [PENDIENTE] = necesita info de la clienta
// ============================================================

export const siteConfig = {
  name: "Franshessska",
  title: "Franshessska | Creadora de Contenido & Social Media Manager",
  description:
    "Portfolio profesional de Franshessska — creadora de contenido, editora de video y gestora de redes sociales con 5 anos de experiencia.",
  url: "https://franshessska.com", // TODO: cliente — dominio final
};

export const nav = {
  links: [
    { text: "Sobre mi", href: "#about" },
    { text: "Servicios", href: "#services" },
    { text: "Portfolio", href: "#portfolio" },
    { text: "Precios", href: "#pricing" },
    { text: "Contacto", href: "#contact" },
  ],
};

export const hero = {
  name: "Franshessska",
  tagline: "Creo contenido que conecta tu marca con su audiencia",
  ctaPrimary: {
    text: "Solicita tu demo gratuita",
    href: "#contact",
  },
  ctaSecondary: {
    text: "Ver portfolio",
    href: "#portfolio",
  },
  backgroundVideoId: "PENDIENTE", // TODO: cliente — ID video Google Drive
};

export const about = {
  title: "Sobre mi",
  mediaType: "image" as const,
  bio: [
    "Graduada en Marketing y Publicidad con mas de 5 anos de experiencia en el mundo digital.",
    "Creo contenido estrategico que no solo se ve bien, sino que genera resultados reales para las marcas con las que trabajo.",
    "Desde guiones virales hasta la gestion completa de tus redes — me encargo de todo para que tu solo te preocupes de tu negocio.",
  ],
  stats: [
    { value: "5+", label: "Anos de experiencia" },
    { value: "30+", label: "Marcas trabajadas" }, // TODO: cliente — numero real
    { value: "500+", label: "Videos creados" }, // TODO: cliente — numero real
  ],
};

export const services = {
  title: "Que hago",
  subtitle: "Servicios que transforman tu presencia digital",
  items: [
    {
      icon: "video",
      title: "Creacion de contenido",
      description:
        "Videos profesionales para TikTok, Instagram Reels y YouTube Shorts que capturan la atencion de tu audiencia.",
    },
    {
      icon: "script",
      title: "Guiones virales",
      description:
        "Guiones estrategicos disenados para maximizar el engagement y la viralidad de tu contenido.",
    },
    {
      icon: "design",
      title: "Diseno en Canva",
      description:
        "Posts unicos y profesionales para feed, stories y carruseles que reflejan la identidad de tu marca.",
    },
    {
      icon: "social",
      title: "Gestion integral de redes",
      description:
        "Estrategia, planificacion, publicacion y analisis de resultados para hacer crecer tu comunidad.",
    },
  ],
};

export const portfolio = {
  title: "Portfolio",
  subtitle: "Algunos de mis trabajos recientes",
  filters: ["Todos", "Video", "Diseno", "Gestion"],
  items: [
    { driveId: "PENDIENTE", title: "Reel para marca de moda", category: "Video" },
    { driveId: "PENDIENTE", title: "Contenido lifestyle", category: "Video" },
    { driveId: "PENDIENTE", title: "Video producto", category: "Video" },
    { driveId: "PENDIENTE", title: "Carrusel Instagram", category: "Diseno" },
    { driveId: "PENDIENTE", title: "Stories destacadas", category: "Diseno" },
    { driveId: "PENDIENTE", title: "Estrategia mensual", category: "Gestion" },
  ],
};

export const offer = {
  title: "2 videos GRATIS",
  subtitle: "para demostrarte mi impacto",
  description:
    "Al contratar cualquier paquete mensual con permanencia de 3 meses. Produccion valorada en 360\u20AC incluida en tu primer mes.",
  cta: {
    text: "Agenda tu demo gratis",
    href: "#contact",
  },
};

export const pricing = {
  title: "Planes",
  subtitle: "Elige el plan que mejor se adapte a tu marca",
  plans: [
    {
      name: "Basico",
      subtitle: "Presencia Activa",
      price: "490",
      period: "/mes",
      features: [
        "2 redes sociales (Instagram + TikTok)",
        "12 publicaciones al mes",
        "4 Reels/TikToks con guion propio",
        "Copywriting y diseno en Canva",
        "Respuesta a comentarios y DMs",
        "Calendario editorial mensual",
        "Informe de resultados mensual",
      ],
      cta: "Empezar ahora",
      highlighted: false,
    },
    {
      name: "Premium",
      subtitle: "Crecimiento con Estrategia",
      price: "890",
      period: "/mes",
      features: [
        "3 redes sociales",
        "20 publicaciones al mes",
        "8 Reels/TikToks con guion viral",
        "Edicion avanzada con subtitulos",
        "Estrategia de contenidos mensual",
        "Kit de marca completo en Canva",
        "Colaboracion con microinfluencers",
        "Informe quincenal + 2 reuniones",
        "Respuesta prioritaria",
      ],
      cta: "Quiero el Premium",
      highlighted: true,
    },
  ],
  customNote: "Necesitas algo a medida?",
};

export const contact = {
  title: "Hablemos",
  subtitle: "Agenda una demo gratuita o escribeme directamente",
  calendarUrl: "PENDIENTE", // TODO: cliente — URL Google Calendar
  email: "hola@franshessska.com", // TODO: cliente — correo real
  form: {
    namePlaceholder: "Tu nombre",
    companyPlaceholder: "Empresa / Proyecto",
    serviceOptions: [
      "Creacion de contenido",
      "Gestion de redes",
      "Paquete completo",
      "Otro",
    ],
    messagePlaceholder: "Cuentame sobre tu proyecto...",
    submitText: "Enviar mensaje",
    successMessage: "Mensaje enviado! Te respondo en menos de 24h.",
  },
  formspreeId: "PENDIENTE", // TODO: cliente — Formspree endpoint
};

export const social = {
  instagram: "https://instagram.com/franshessska", // TODO: cliente
  tiktok: "https://tiktok.com/@franshessska", // TODO: cliente
  linkedin: "https://linkedin.com/in/franshessska", // TODO: cliente
};

export const footer = {
  copyright: `${new Date().getFullYear()} Franshessska. Todos los derechos reservados.`,
  links: [
    { text: "Inicio", href: "#hero" },
    { text: "Sobre mi", href: "#about" },
    { text: "Servicios", href: "#services" },
    { text: "Portfolio", href: "#portfolio" },
    { text: "Precios", href: "#pricing" },
    { text: "Contacto", href: "#contact" },
  ],
};
