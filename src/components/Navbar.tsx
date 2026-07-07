import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { LanguageToggle } from "./LanguageToggle";
import logo from "@/assets/fqp/logo.png.asset.json";

export function Navbar() {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);

  const links: { href: string; key: Parameters<typeof t>[0] }[] = [
    { href: "#about", key: "navAbout" },
    { href: "#services", key: "navServices" },
    { href: "#portfolio", key: "navPortfolio" },
    { href: "#gallery", key: "navGallery" },
    { href: "#contact", key: "navContact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-background/85 backdrop-blur border-b border-primary/10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 flex items-center justify-between h-16">
        <a href="#top" className="flex items-center gap-3">
          <img src={logo.url} alt="Fundación Quórum por la Paz" className="h-10 w-auto" />
          <span className="hidden sm:flex flex-col leading-tight">
            <span className="text-[10px] tracking-[0.2em] text-primary/60 font-medium">FUNDACIÓN</span>
            <span className="text-sm font-bold text-primary">Quórum por la Paz</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-primary/80">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-accent transition-colors">
              {t(l.key)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LanguageToggle />
          <button
            className="md:hidden p-2 -mr-2 text-primary"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-primary/10 bg-background">
          <nav className="mx-auto max-w-6xl px-4 py-3 flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-2 py-2 rounded-md text-primary hover:bg-secondary/40"
              >
                {t(l.key)}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
