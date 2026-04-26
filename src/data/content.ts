// ============================================================
// CONTENIDO DEL SITIO — Francesca Torres Portfolio
// ============================================================

export const siteConfig = {
  name: "Francesca Torres",
  brandHandle: "Franshessska",
  title: "Francesca Torres | Creadora de Contenido & Social Media Manager",
  description:
    "Portfolio profesional de Francesca Torres — creadora de contenido, editora de video y gestora de redes sociales con más de 5 años de experiencia.",
  url: "https://francescatorres.com",
};

export const nav = {
  links: [
    { text: "Sobre mí", href: "#about" },
    { text: "Servicios", href: "#services" },
    { text: "Portfolio", href: "#portfolio" },
    { text: "Material", href: "#material" },
    { text: "Skills", href: "#skills" },
    { text: "Precios", href: "#pricing" },
    { text: "Contacto", href: "#contact" },
  ],
};

export const hero = {
  name: "Francesca Torres",
  role: "Content creator & Social Media Manager",
  tagline: "Creo contenido que conecta tu marca con su audiencia",
  ctaPrimary: {
    text: "Solicita tu demo gratuita",
    href: "#contact",
  },
  ctaSecondary: {
    text: "Ver portfolio",
    href: "#portfolio",
  },
  image: "/images/fotos/portada.webp",
};

export const about = {
  title: "Sobre mí",
  image: "/images/fotos/sobre_mi.webp",
  bio: [
    "Graduada en Marketing y Publicidad con más de 5 años de experiencia en el mundo digital.",
    "Creo contenido estratégico que no solo se ve bien, sino que genera resultados reales para las marcas con las que trabajo.",
    "Desde guiones virales hasta la gestión completa de tus redes — me encargo de todo para que tú solo te preocupes de tu negocio.",
  ],
  stats: [
    { value: "5+", label: "Años de experiencia" },
    { value: "30+", label: "Marcas trabajadas" },
    { value: "500+", label: "Videos creados" },
  ],
};

export const services = {
  title: "Qué hago",
  subtitle: "Servicios que transforman tu presencia digital",
  items: [
    {
      icon: "video",
      title: "Creación de contenido",
      description:
        "Videos profesionales para TikTok e Instagram Reels que capturan la atención de tu audiencia.",
    },
    {
      icon: "script",
      title: "Guiones estratégicos",
      description:
        "Guiones diseñados para maximizar el engagement y la viralidad de tu contenido.",
    },
    {
      icon: "design",
      title: "Diseños únicos",
      description:
        "Posts profesionales para feed, stories y carruseles que reflejan la identidad de tu marca.",
    },
    {
      icon: "social",
      title: "Gestión de redes",
      description:
        "Estrategia, planificación y publicación constante para hacer crecer tu comunidad.",
    },
    {
      icon: "chart",
      title: "Análisis de resultados",
      description:
        "Informes detallados con métricas reales para entender qué funciona y qué hay que ajustar.",
    },
    {
      icon: "chat",
      title: "Atención al cliente",
      description:
        "Respuesta a comentarios y mensajes directos para mantener viva la conversación con tu audiencia.",
    },
  ],
};

export const portfolio = {
  title: "Portfolio",
  subtitle: "Algunos de mis trabajos recientes",
  brands: [
    {
      id: "piripiri",
      name: "Piri Piri",
      tagline: "Food experience · Brasil",
      videos: [
        { src: "/videos/piripiri/01_food_experience.mp4", title: "Food experience" },
        { src: "/videos/piripiri/02_ai_intro_prep.mp4", title: "AI intro + Food prep" },
        { src: "/videos/piripiri/03_pickup.mp4", title: "Pickup experience" },
        { src: "/videos/piripiri/04_drink_edit.mp4", title: "Interactive drink edit" },
        { src: "/videos/piripiri/05_food_prep_bts.mp4", title: "Food prep BTS" },
        { src: "/videos/piripiri/06_level_challenge.mp4", title: "Level challenge" },
        { src: "/videos/piripiri/07_bts.mp4", title: "Behind the scenes" },
        { src: "/videos/piripiri/08_funny_moments.mp4", title: "Funny moments" },
      ],
      gallery: [],
    },
    {
      id: "capinmelao",
      name: "Capinmelao",
      tagline: "Gastronomía & lifestyle",
      videos: [
        { src: "/videos/capinmelao/01_prep_to_plate.mp4", title: "From prep to plate" },
        { src: "/videos/capinmelao/02_finished_creation.mp4", title: "Finished creation" },
      ],
      gallery: [
        "/images/capinmelao/01.webp",
        "/images/capinmelao/02.webp",
        "/images/capinmelao/03.webp",
      ],
    },
    {
      id: "staymagical",
      name: "Staymagical",
      tagline: "Hospitality & branding",
      videos: [
        { src: "/videos/staymagical/01_final_result.mp4", title: "Final result" },
        { src: "/videos/staymagical/02_visual_process.mp4", title: "Visual process" },
        { src: "/videos/staymagical/03_creative_uses.mp4", title: "Creative uses" },
      ],
      gallery: [
        "/images/staymagical/01.webp",
        "/images/staymagical/02.webp",
        "/images/staymagical/03.webp",
        "/images/staymagical/04.webp",
      ],
    },
  ],
  identity: {
    title: "Diseño de Identidad Visual de marca",
    subtitle: "Logo principal · Logo secundario · Logo a una tinta · Paleta de colores · Tipografías · Packaging · Usos",
    items: [
      { src: "/images/identidad/mum_munch.webp", title: "Mum Munch" },
      { src: "/images/identidad/sweet_honey.webp", title: "Sweet Honey" },
      { src: "/images/identidad/elique.webp", title: "Élique" },
    ],
  },
  posts: {
    title: "Diseño de Posts para RRSS",
    subtitle: "Feeds completos pensados para conectar con tu audiencia",
    items: [
      { src: "/images/posts/pollo_combo.webp", title: "Restaurante · Combos" },
      { src: "/images/posts/nuna_breakfast.webp", title: "NUNA · Brunch & Coffee" },
    ],
  },
};

export const offer = {
  title: "2 videos GRATIS",
  subtitle: "para demostrarte mi impacto",
  description:
    "Al contratar cualquier paquete mensual con permanencia de 3 meses. Producción valorada en 360€ incluida en tu primer mes.",
  cta: {
    text: "Agenda tu demo gratis",
    href: "#contact",
  },
};

export const material = {
  title: "Material de trabajo",
  subtitle: "Equipo profesional para producir contenido de calidad",
  items: [
    {
      icon: "phone",
      label: "iPhone 15 Pro Max",
    },
    {
      icon: "mic",
      label: "Micrófonos",
    },
    {
      icon: "tripod",
      label: "Trípode profesional",
    },
    {
      icon: "light",
      label: "Luz LED",
    },
  ],
};

export const skills = {
  title: "Skills",
  subtitle: "Content Creation & Design for Social Media",
  tools: [
    "Illustrator",
    "Photoshop",
    "After Effects",
    "Figma",
    "CapCut",
    "Canva",
  ],
};

export const pricing = {
  title: "Planes",
  subtitle: "Elige el plan que mejor se adapte a tu marca",
  plans: [
    {
      name: "Básico",
      subtitle: "Presencia activa",
      price: "490",
      period: "/mes",
      features: [
        "2 redes sociales (Instagram + TikTok)",
        "12 publicaciones al mes",
        "4 Reels/TikToks con guion propio",
        "Copywriting y diseño en Canva",
        "Respuesta a comentarios y DMs",
        "Calendario editorial mensual",
        "Informe de resultados mensual",
      ],
      cta: "Empezar ahora",
      highlighted: false,
    },
    {
      name: "Premium",
      subtitle: "Crecimiento con estrategia",
      price: "890",
      period: "/mes",
      features: [
        "3 redes sociales",
        "20 publicaciones al mes",
        "8 Reels/TikToks con guion viral",
        "Edición avanzada con subtítulos",
        "Estrategia de contenidos mensual",
        "Kit de marca completo en Canva",
        "Colaboración con microinfluencers",
        "Informe quincenal + 2 reuniones",
        "Respuesta prioritaria",
      ],
      cta: "Quiero el Premium",
      highlighted: true,
    },
  ],
  customNote: "¿Necesitas algo a medida?",
};

export const contact = {
  title: "Hablemos",
  subtitle: "Agenda una demo gratuita o escríbeme directamente",
  image: "/images/fotos/contactame.webp",
  calendarUrl: "PENDIENTE",
  email: "hola@franshessska.com",
  form: {
    namePlaceholder: "Tu nombre",
    companyPlaceholder: "Empresa / Proyecto",
    serviceOptions: [
      "Creación de contenido",
      "Gestión de redes",
      "Diseño de identidad visual",
      "Diseño de posts",
      "Paquete completo",
      "Otro",
    ],
    messagePlaceholder: "Cuéntame sobre tu proyecto...",
    submitText: "Enviar mensaje",
    successMessage: "¡Mensaje enviado! Te respondo en menos de 24h.",
  },
  formspreeId: "PENDIENTE",
};

export const social = {
  instagram: "https://instagram.com/franshessska",
  tiktok: "https://tiktok.com/@franshessska",
  linkedin: "https://linkedin.com/in/franshessska",
};

export const footer = {
  copyright: `${new Date().getFullYear()} Francesca Torres. Todos los derechos reservados.`,
  links: [
    { text: "Inicio", href: "#hero" },
    { text: "Sobre mí", href: "#about" },
    { text: "Servicios", href: "#services" },
    { text: "Portfolio", href: "#portfolio" },
    { text: "Precios", href: "#pricing" },
    { text: "Contacto", href: "#contact" },
  ],
};
