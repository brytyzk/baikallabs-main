import { Globe } from "lucide-react";
import { LANGUAGES, useI18n } from "@/i18n/I18nProvider";
import type { LangCode } from "@/i18n/translations";

export function LanguageSwitcher() {
  const { lang, setLang, t } = useI18n();
  return (
    <label className="inline-flex items-center gap-2 text-sm text-muted-foreground">
      <Globe className="w-4 h-4" />
      <span className="sr-only">{t("common.language")}</span>
      <select
        aria-label={t("common.language")}
        value={lang}
        onChange={(e) => setLang(e.target.value as LangCode)}
        className="bg-background border border-border rounded-lg px-2.5 py-1.5 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
      >
        {LANGUAGES.map((l) => (
          <option key={l.code} value={l.code}>{l.native}</option>
        ))}
      </select>
    </label>
  );
}
