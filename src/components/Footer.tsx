import { Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { CONTACT } from "@/lib/contact";
import logo from "@/assets/fqp/logo.png.asset.json";

export function Footer() {
  const { t } = useI18n();
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-6 py-12 grid gap-10 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <img src={logo.url} alt="" className="h-12 w-auto brightness-0 invert" />
            <div className="leading-tight">
              <div className="text-[10px] tracking-[0.2em] opacity-70">FUNDACIÓN</div>
              <div className="text-base font-bold">Quórum por la Paz</div>
            </div>
          </div>
          <p className="mt-4 text-sm opacity-80 italic">{t("footerTagline")}</p>
        </div>

        <div className="text-sm space-y-2">
          <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-2 hover:text-accent">
            <Mail size={16} /> {CONTACT.email}
          </a>
          <a href={CONTACT.phoneHref} className="flex items-center gap-2 hover:text-accent">
            <Phone size={16} /> {CONTACT.phone}
          </a>
          <div className="flex items-center gap-2 opacity-80">
            <MapPin size={16} /> {CONTACT.location}
          </div>
        </div>

        <div className="flex md:justify-end items-start gap-3">
          <a
            href={CONTACT.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full border border-primary-foreground/30 hover:bg-accent hover:border-accent transition"
            aria-label="Instagram"
          >
            <Instagram size={18} />
          </a>
          <a
            href={CONTACT.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full border border-primary-foreground/30 hover:bg-accent hover:border-accent transition"
            aria-label="Facebook"
          >
            <Facebook size={18} />
          </a>
        </div>
      </div>
      <div className="border-t border-primary-foreground/15">
        <div className="mx-auto max-w-6xl px-6 py-4 text-xs opacity-70 flex flex-wrap gap-2 justify-between">
          <span>© {new Date().getFullYear()} Fundación Quórum por la Paz. {t("footerRights")}</span>
          <span>Colombia 🇨🇴</span>
        </div>
      </div>
    </footer>
  );
}
