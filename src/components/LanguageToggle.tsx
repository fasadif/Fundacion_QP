import { useI18n } from "@/lib/i18n";

export function LanguageToggle() {
  const { lang, setLang } = useI18n();
  return (
    <div className="inline-flex rounded-full border border-primary/20 bg-background/80 backdrop-blur p-0.5 text-xs font-semibold">
      <button
        type="button"
        onClick={() => setLang("es")}
        className={`px-3 py-1 rounded-full transition ${
          lang === "es" ? "bg-primary text-primary-foreground" : "text-primary/70 hover:text-primary"
        }`}
        aria-pressed={lang === "es"}
      >
        ES
      </button>
      <button
        type="button"
        onClick={() => setLang("en")}
        className={`px-3 py-1 rounded-full transition ${
          lang === "en" ? "bg-primary text-primary-foreground" : "text-primary/70 hover:text-primary"
        }`}
        aria-pressed={lang === "en"}
      >
        EN
      </button>
    </div>
  );
}
