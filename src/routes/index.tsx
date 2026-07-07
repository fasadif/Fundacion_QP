import { createFileRoute } from "@tanstack/react-router";
import {
  Mail,
  Phone,
  MessageCircle,
  Heart,
  Download,
  ExternalLink,
  Users,
  HandHeart,
  Sparkles,
  BookOpen,
  ArrowRight,
  FileText,
} from "lucide-react";

import { I18nProvider, useI18n } from "@/lib/i18n";
import { CONTACT } from "@/lib/contact";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

import logoLarge from "@/assets/fqp/logo-large.png.asset.json";
import heroBg from "@/assets/fqp/hero-bg.jpg.asset.json";
import imgReconciliacion from "@/assets/fqp/reconciliacion.jpg.asset.json";
import imgFamiliaDiag from "@/assets/fqp/familia-diagnostico.jpg.asset.json";
import imgFamiliaFeliz from "@/assets/fqp/familia-feliz.jpg.asset.json";
import imgCommunity from "@/assets/fqp/community.jpg.asset.json";
import imgNino from "@/assets/fqp/nino-balon.png.asset.json";
import imgImagenes from "@/assets/fqp/imagenes.jpg.asset.json";
import imgSocial from "@/assets/fqp/social.png.asset.json";
import servicesBg from "@/assets/fqp/services-bg.png.asset.json";

import portafolioPdf from "@/assets/pdfs/portafolio.pdf.asset.json";
import manualPdf from "@/assets/pdfs/manual.pdf.asset.json";
import juntaPdf from "@/assets/pdfs/junta.pdf.asset.json";
import comunaPdf from "@/assets/pdfs/comuna15.pdf.asset.json";
import rutPdf from "@/assets/pdfs/rut.pdf.asset.json";
import camaraPdf from "@/assets/pdfs/camara.pdf.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Fundación Quórum por la Paz — Unidos por la Paz en Colombia" },
      {
        name: "description",
        content:
          "Fundación colombiana dedicada al desarrollo humano, la reconciliación comunitaria y la construcción de paz. Conoce nuestros programas y cómo apoyar.",
      },
      { property: "og:title", content: "Fundación Quórum por la Paz" },
      {
        property: "og:description",
        content: "Unidos por la Paz — Reconciliación, familia y desarrollo humano en Colombia.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <I18nProvider>
      <Content />
    </I18nProvider>
  );
}

function Content() {
  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

/* -------------------- HERO -------------------- */
function Hero() {
  const { t } = useI18n();
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg.url})` }}
        aria-hidden
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, color-mix(in oklab, var(--brand-navy) 88%, transparent) 0%, color-mix(in oklab, var(--brand-navy) 55%, transparent) 100%)",
        }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl px-6 py-24 sm:py-32 lg:py-40 grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
        <div className="text-primary-foreground">
          <span className="inline-block text-[11px] tracking-[0.25em] uppercase font-semibold text-accent">
            {t("heroEyebrow")}
          </span>
          <h1 className="mt-4 text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.02]">
            {t("heroTitle")}
          </h1>
          <p className="mt-6 max-w-xl text-base sm:text-lg opacity-90 leading-relaxed">
            {t("heroSubtitle")}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-6 py-3 text-sm font-semibold shadow-lg hover:brightness-110 transition"
            >
              <Heart size={16} /> {t("heroCta")}
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 px-6 py-3 text-sm font-semibold hover:bg-primary-foreground/10 transition"
            >
              {t("heroCta2")} <ArrowRight size={16} />
            </a>
          </div>
        </div>
        <div className="hidden lg:flex justify-center">
          <img
            src={logoLarge.url}
            alt="Logo Fundación Quórum por la Paz"
            className="max-h-80 drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}

/* -------------------- ABOUT -------------------- */
function About() {
  const { t } = useI18n();
  return (
    <section id="about" className="py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-6 grid lg:grid-cols-2 gap-14 items-center">
        <div className="relative">
          <div
            className="absolute -inset-4 rounded-3xl -z-10"
            style={{ background: "color-mix(in oklab, var(--brand-sky) 60%, transparent)" }}
          />
          <img
            src={imgCommunity.url}
            alt="Comunidad unida"
            className="rounded-2xl shadow-xl w-full aspect-[4/3] object-cover"
          />
        </div>
        <div>
          <SectionEyebrow>{t("aboutEyebrow")}</SectionEyebrow>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-primary">{t("aboutTitle")}</h2>
          <p className="mt-6 text-primary/80 leading-relaxed">{t("aboutP1")}</p>
          <p className="mt-4 text-primary/80 leading-relaxed">{t("aboutP2")}</p>

          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            <MissionCard icon={<Sparkles size={20} />} title={t("aboutMissionTitle")} body={t("aboutMission")} />
            <MissionCard icon={<Users size={20} />} title={t("aboutVisionTitle")} body={t("aboutVision")} />
          </div>
        </div>
      </div>
    </section>
  );
}

function MissionCard({ icon, title, body }: { icon: React.ReactNode; title: string; body: string }) {
  return (
    <div className="rounded-2xl p-5 bg-secondary/40 border border-primary/10">
      <div className="flex items-center gap-2 text-accent">
        <span className="p-2 rounded-full bg-accent/15">{icon}</span>
        <h3 className="font-bold text-primary">{title}</h3>
      </div>
      <p className="mt-3 text-sm text-primary/80 leading-relaxed">{body}</p>
    </div>
  );
}

/* -------------------- SERVICES -------------------- */
function Services() {
  const { t } = useI18n();
  const items = [
    { icon: <HandHeart size={22} />, title: t("s1Title"), desc: t("s1Desc"), img: imgReconciliacion.url },
    { icon: <Users size={22} />, title: t("s2Title"), desc: t("s2Desc"), img: imgFamiliaDiag.url },
    { icon: <Sparkles size={22} />, title: t("s3Title"), desc: t("s3Desc"), img: imgNino.url },
    { icon: <BookOpen size={22} />, title: t("s4Title"), desc: t("s4Desc"), img: imgFamiliaFeliz.url },
  ];
  return (
    <section id="services" className="relative py-24 sm:py-28 overflow-hidden">
      <div
        className="absolute inset-0 -z-10 opacity-40"
        style={{ backgroundImage: `url(${servicesBg.url})`, backgroundSize: "cover", backgroundPosition: "center" }}
        aria-hidden
      />
      <div className="absolute inset-0 -z-10 bg-secondary/60" aria-hidden />
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <SectionEyebrow>{t("servicesEyebrow")}</SectionEyebrow>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-primary">{t("servicesTitle")}</h2>
          <p className="mt-4 text-primary/80">{t("servicesSub")}</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it) => (
            <article
              key={it.title}
              className="group rounded-2xl overflow-hidden bg-background shadow-md hover:shadow-xl transition border border-primary/5"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={it.img}
                  alt=""
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-5">
                <div className="inline-flex items-center justify-center p-2 rounded-full bg-accent/15 text-accent">
                  {it.icon}
                </div>
                <h3 className="mt-3 font-bold text-primary text-lg">{it.title}</h3>
                <p className="mt-2 text-sm text-primary/75 leading-relaxed">{it.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- PORTFOLIO -------------------- */
function Portfolio() {
  const { t } = useI18n();
  const docs = [
    { label: t("docPortafolio"), url: portafolioPdf.url },
    { label: t("docManual"), url: manualPdf.url },
    { label: t("docJunta"), url: juntaPdf.url },
    { label: t("docComuna"), url: comunaPdf.url },
    { label: t("docRut"), url: rutPdf.url },
    { label: t("docCamara"), url: camaraPdf.url },
  ];
  return (
    <section id="portfolio" className="py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-6 grid lg:grid-cols-[1fr_1.2fr] gap-12 items-start">
        <div>
          <SectionEyebrow>{t("portfolioEyebrow")}</SectionEyebrow>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-primary">{t("portfolioTitle")}</h2>
          <p className="mt-4 text-primary/80">{t("portfolioSub")}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={portafolioPdf.url}
              download
              className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-3 text-sm font-semibold hover:brightness-110 transition"
            >
              <Download size={16} /> {t("downloadPortfolio")}
            </a>
            <a
              href={portafolioPdf.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-primary/20 px-5 py-3 text-sm font-semibold text-primary hover:bg-secondary/40 transition"
            >
              <ExternalLink size={16} /> {t("viewOnline")}
            </a>
          </div>

          <h3 className="mt-10 text-sm font-bold uppercase tracking-wider text-primary/60">
            {t("docsTitle")}
          </h3>
          <ul className="mt-3 divide-y divide-primary/10 rounded-xl border border-primary/10 bg-background">
            {docs.map((d) => (
              <li key={d.url}>
                <a
                  href={d.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-4 px-4 py-3 hover:bg-secondary/30 transition text-sm"
                >
                  <span className="flex items-center gap-3 text-primary">
                    <FileText size={16} className="text-accent" /> {d.label}
                  </span>
                  <Download size={14} className="text-primary/50" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div
            className="absolute -inset-3 rounded-3xl -z-10"
            style={{ background: "color-mix(in oklab, var(--brand-coral) 40%, transparent)" }}
          />
          <div className="rounded-2xl overflow-hidden shadow-xl bg-background border border-primary/10">
            <iframe
              src={`${portafolioPdf.url}#toolbar=0&view=FitH`}
              title="Portafolio"
              className="w-full h-[520px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------- GALLERY -------------------- */
function Gallery() {
  const { t } = useI18n();
  const imgs = [
    imgReconciliacion.url,
    imgFamiliaFeliz.url,
    imgCommunity.url,
    imgFamiliaDiag.url,
    imgNino.url,
    imgImagenes.url,
    imgSocial.url,
  ];
  return (
    <section id="gallery" className="py-24 sm:py-28 bg-secondary/30">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <SectionEyebrow>{t("galleryEyebrow")}</SectionEyebrow>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-primary">{t("galleryTitle")}</h2>
        </div>
        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 auto-rows-[180px]">
          {imgs.map((src, i) => (
            <div
              key={src}
              className={`overflow-hidden rounded-2xl shadow-md ${
                i === 0 ? "col-span-2 row-span-2" : ""
              } ${i === 3 ? "row-span-2" : ""}`}
            >
              <img
                src={src}
                alt=""
                loading="lazy"
                className="w-full h-full object-cover hover:scale-105 transition duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- CONTACT -------------------- */
function Contact() {
  const { t } = useI18n();
  const cards = [
    {
      icon: <Mail size={22} />,
      title: t("contactEmail"),
      value: CONTACT.email,
      href: `mailto:${CONTACT.email}`,
    },
    {
      icon: <MessageCircle size={22} />,
      title: t("contactWhatsapp"),
      value: CONTACT.whatsappDisplay,
      href: `https://wa.me/${CONTACT.whatsapp}`,
    },
    {
      icon: <Phone size={22} />,
      title: t("contactPhone"),
      value: CONTACT.phone,
      href: CONTACT.phoneHref,
    },
  ];
  return (
    <section id="contact" className="py-24 sm:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <SectionEyebrow>{t("contactEyebrow")}</SectionEyebrow>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-primary">{t("contactTitle")}</h2>
          <p className="mt-4 text-primary/80">{t("contactSub")}</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-3 gap-5">
          {cards.map((c) => (
            <a
              key={c.title}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="group rounded-2xl p-6 bg-background border border-primary/10 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition"
            >
              <div className="inline-flex items-center justify-center p-3 rounded-full bg-accent/15 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition">
                {c.icon}
              </div>
              <div className="mt-4 text-xs font-semibold uppercase tracking-wider text-primary/60">
                {c.title}
              </div>
              <div className="mt-1 font-bold text-primary break-all">{c.value}</div>
            </a>
          ))}
        </div>

        <div
          className="mt-10 rounded-2xl p-6 sm:p-8 border border-accent/30 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:justify-between"
          style={{ background: "color-mix(in oklab, var(--brand-coral) 15%, transparent)" }}
        >
          <div className="flex items-start gap-3">
            <span className="p-2 rounded-full bg-accent text-accent-foreground">
              <Heart size={18} />
            </span>
            <div>
              <div className="font-bold text-primary">{t("contactDonate")}</div>
              <p className="text-sm text-primary/75 mt-1 max-w-xl">{t("donateNote")}</p>
            </div>
          </div>
          <a
            href={`mailto:${CONTACT.email}?subject=Quiero donar`}
            className="inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-5 py-2.5 text-sm font-semibold hover:brightness-110 transition whitespace-nowrap"
          >
            <Mail size={16} /> {CONTACT.email}
          </a>
        </div>
      </div>
    </section>
  );
}

/* -------------------- shared -------------------- */
function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-[11px] tracking-[0.25em] uppercase font-semibold text-accent">
      {children}
    </span>
  );
}
