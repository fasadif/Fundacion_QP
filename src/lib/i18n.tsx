import { createContext, useContext, useState, type ReactNode } from "react";

export type Lang = "es" | "en";

type Dict = Record<string, string | string[]>;

const es: Dict = {
  navHome: "Inicio",
  navAbout: "Quiénes Somos",
  navServices: "Qué Hacemos",
  navPortfolio: "Portafolio",
  navGallery: "Galería",
  navContact: "Contacto",
  heroEyebrow: "Fundación Quórum por la Paz",
  heroTitle: "Unidos por la Paz",
  heroSubtitle:
    "Creamos espacios que apoyan, promueven y difunden el desarrollo psicofísico y espiritual del ser humano. Construyendo paz en Colombia, para todos.",
  heroCta: "Contáctanos",
  heroCta2: "Conoce nuestro trabajo",

  aboutEyebrow: "Quiénes Somos",
  aboutTitle: "Una iniciativa por la paz en Colombia",
  aboutP1:
    "La Fundación Quórum por la Paz nace como un espacio dedicado a apoyar, promover y difundir todo tipo de actividades relacionadas con el desarrollo integral del ser humano: cuerpo, mente y espíritu.",
  aboutP2:
    "Trabajamos con familias y comunidades para tejer relaciones sanas, reconciliación y esperanza, porque creemos que la paz se construye desde lo cotidiano y desde el corazón de cada barrio.",
  aboutMissionTitle: "Nuestra Misión",
  aboutMission:
    "Promover procesos comunitarios de reconciliación, bienestar y desarrollo humano que aporten a la construcción de paz sostenible en Colombia.",
  aboutVisionTitle: "Nuestra Visión",
  aboutVision:
    "Ser una fundación referente en Colombia por su compromiso genuino con las familias, la niñez y las comunidades que buscan sanar y construir un mejor futuro.",

  servicesEyebrow: "Qué Hacemos",
  servicesTitle: "Nuestros programas",
  servicesSub: "Acompañamos a familias y comunidades con procesos humanos, cercanos y transformadores.",
  s1Title: "Reconciliación Comunitaria",
  s1Desc: "Espacios de diálogo, encuentro y sanación para reconstruir el tejido social en los territorios.",
  s2Title: "Acompañamiento Familiar",
  s2Desc: "Diagnóstico y apoyo a familias en situación de vulnerabilidad, con enfoque psicológico y humano.",
  s3Title: "Niñez y Juventud",
  s3Desc: "Actividades culturales, deportivas y formativas para que niños y jóvenes sueñen y crezcan en paz.",
  s4Title: "Formación y Talleres",
  s4Desc: "Talleres de desarrollo personal, espiritualidad, valores y convivencia para toda la comunidad.",

  portfolioEyebrow: "Portafolio",
  portfolioTitle: "Conoce más de nuestro trabajo",
  portfolioSub:
    "Descarga nuestro portafolio y los documentos legales de la fundación.",
  downloadPortfolio: "Descargar Portafolio",
  viewOnline: "Ver en línea",
  docsTitle: "Documentos legales",
  docPortafolio: "Portafolio institucional",
  docManual: "Manual de identidad",
  docJunta: "Junta de Acción Comunal",
  docComuna: "Comuna 15",
  docRut: "RUT",
  docCamara: "Cámara de Comercio",

  galleryEyebrow: "Galería",
  galleryTitle: "Momentos que construyen paz",

  contactEyebrow: "Contacto",
  contactTitle: "Hablemos",
  contactSub:
    "Si deseas apoyar nuestro trabajo, ser voluntario o realizar una donación, escríbenos. Tu ayuda transforma vidas.",
  contactEmail: "Escríbenos por correo",
  contactWhatsapp: "Escríbenos por WhatsApp",
  contactPhone: "Llámanos",
  contactDonate: "Quiero donar",
  donateNote:
    "Para donar, contáctanos directamente por cualquiera de estos medios. Con gusto te enviaremos nuestros datos bancarios.",

  footerRights: "Todos los derechos reservados.",
  footerTagline: "Unidos por la Paz",
  langLabel: "Idioma",
};

const en: Dict = {
  navHome: "Home",
  navAbout: "About",
  navServices: "What We Do",
  navPortfolio: "Portfolio",
  navGallery: "Gallery",
  navContact: "Contact",
  heroEyebrow: "Quórum por la Paz Foundation",
  heroTitle: "United for Peace",
  heroSubtitle:
    "We create spaces that support, promote and share the physical, mental and spiritual development of every human being. Building peace in Colombia, for everyone.",
  heroCta: "Contact us",
  heroCta2: "See our work",

  aboutEyebrow: "About Us",
  aboutTitle: "An initiative for peace in Colombia",
  aboutP1:
    "The Quórum por la Paz Foundation was born as a space dedicated to supporting, promoting and sharing all kinds of activities related to the integral development of the human being: body, mind and spirit.",
  aboutP2:
    "We work with families and communities to weave healthy relationships, reconciliation and hope, because we believe peace is built in everyday life, in the heart of every neighborhood.",
  aboutMissionTitle: "Our Mission",
  aboutMission:
    "To promote community processes of reconciliation, well-being and human development that contribute to sustainable peace in Colombia.",
  aboutVisionTitle: "Our Vision",
  aboutVision:
    "To be a leading foundation in Colombia for our genuine commitment to families, children and communities seeking to heal and build a better future.",

  servicesEyebrow: "What We Do",
  servicesTitle: "Our programs",
  servicesSub: "We walk alongside families and communities with human, close and transformative processes.",
  s1Title: "Community Reconciliation",
  s1Desc: "Spaces for dialogue, encounter and healing to rebuild the social fabric of our territories.",
  s2Title: "Family Support",
  s2Desc: "Diagnosis and support for families in vulnerable situations, with a psychological and human approach.",
  s3Title: "Children & Youth",
  s3Desc: "Cultural, sports and educational activities so children and young people can dream and grow in peace.",
  s4Title: "Training & Workshops",
  s4Desc: "Workshops on personal development, spirituality, values and coexistence for the whole community.",

  portfolioEyebrow: "Portfolio",
  portfolioTitle: "Learn more about our work",
  portfolioSub: "Download our portfolio and the foundation's legal documents.",
  downloadPortfolio: "Download portfolio",
  viewOnline: "View online",
  docsTitle: "Legal documents",
  docPortafolio: "Institutional portfolio",
  docManual: "Brand manual",
  docJunta: "Community Action Board",
  docComuna: "Comuna 15",
  docRut: "Tax ID (RUT)",
  docCamara: "Chamber of Commerce",

  galleryEyebrow: "Gallery",
  galleryTitle: "Moments that build peace",

  contactEyebrow: "Contact",
  contactTitle: "Let's talk",
  contactSub:
    "If you want to support our work, volunteer or make a donation, please reach out. Your help changes lives.",
  contactEmail: "Email us",
  contactWhatsapp: "WhatsApp us",
  contactPhone: "Call us",
  contactDonate: "I want to donate",
  donateNote:
    "To donate, contact us directly through any of these channels. We will gladly share our bank details.",

  footerRights: "All rights reserved.",
  footerTagline: "United for Peace",
  langLabel: "Language",
};

const dicts: Record<Lang, Dict> = { es, en };

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (k: keyof typeof es) => string };
const I18nCtx = createContext<Ctx | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("es");
  const t = (k: keyof typeof es) => {
    const v = dicts[lang][k as string];
    return typeof v === "string" ? v : (es[k as string] as string) ?? String(k);
  };
  return <I18nCtx.Provider value={{ lang, setLang, t }}>{children}</I18nCtx.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nCtx);
  if (!ctx) throw new Error("useI18n must be used inside I18nProvider");
  return ctx;
}
