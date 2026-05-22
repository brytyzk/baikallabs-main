import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { LANGUAGES, LOCALES, lookup, type LangCode } from "./translations";

const STORAGE_KEY = "baikallabs.lang";
const GEO_FLAG_KEY = "baikallabs.lang.geoChecked";
const DEFAULT_LANG: LangCode = "ru";

type Ctx = {
  lang: LangCode;
  setLang: (l: LangCode) => void;
  t: (key: string) => string;
};

const I18nContext = createContext<Ctx>({
  lang: DEFAULT_LANG,
  setLang: () => {},
  t: (k) => lookup(DEFAULT_LANG, k),
});

// ISO country code -> app language
const COUNTRY_TO_LANG: Record<string, LangCode> = {
  RU: "ru", BY: "ru", KZ: "ru",
  DE: "de", AT: "de", CH: "de",
  US: "en", GB: "en", AU: "en", CA: "en", IE: "en", NZ: "en",
  FR: "fr", BE: "fr", LU: "fr",
  CN: "zh", TW: "zh", HK: "zh", SG: "zh",
  JP: "ja",
  ES: "es", MX: "es", AR: "es", CL: "es", CO: "es", PE: "es",
  PT: "pt", BR: "pt",
  IN: "hi",
  AE: "ar", EG: "ar", SA: "ar", QA: "ar", KW: "ar", OM: "ar", BH: "ar", JO: "ar", IQ: "ar", MA: "ar", DZ: "ar", TN: "ar",
  UZ: "uz",
  TJ: "tg",
  KG: "ky",
  NG: "pcm",
};

function detectInitial(): LangCode {
  if (typeof window === "undefined") return DEFAULT_LANG;
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY) as LangCode | null;
    if (saved && saved in LOCALES) return saved;
  } catch { /* ignore */ }
  const nav = (typeof navigator !== "undefined" && navigator.language) ? navigator.language.toLowerCase() : "";
  const short = nav.split("-")[0] as LangCode;
  if (short && short in LOCALES) return short;
  if (nav.startsWith("pt")) return "pt";
  if (nav.startsWith("zh")) return "zh";
  if (nav.startsWith("en")) return "en";
  return DEFAULT_LANG;
}

async function detectByGeo(): Promise<LangCode | null> {
  const sources = [
    { url: "https://ipapi.co/json/", key: "country_code" },
    { url: "https://ipwho.is/", key: "country_code" },
  ];
  for (const src of sources) {
    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 3000);
      const res = await fetch(src.url, { signal: controller.signal });
      clearTimeout(timeout);
      if (!res.ok) continue;
      const data = await res.json();
      const code = (data?.[src.key] || data?.country || "").toString().toUpperCase();
      if (COUNTRY_TO_LANG[code]) return COUNTRY_TO_LANG[code];
      if (code) return null; // got a country but unmapped — use default
    } catch { /* try next */ }
  }
  return null;
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  // SSR-safe: start with default, then hydrate to detected/saved
  const [lang, setLangState] = useState<LangCode>(DEFAULT_LANG);

  useEffect(() => {
    const initial = detectInitial();
    if (initial !== lang) setLangState(initial);
    try {
      document.documentElement.lang = initial;
      document.documentElement.dir = initial === "ar" ? "rtl" : "ltr";
    } catch { /* ignore */ }

    // Auto geo-detect only if no manual choice + not yet attempted
    let cancelled = false;
    let timer: ReturnType<typeof setTimeout> | undefined;
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      const geoChecked = window.localStorage.getItem(GEO_FLAG_KEY);
      if (!saved && !geoChecked) {
        timer = setTimeout(async () => {
          const geoLang = await detectByGeo();
          if (cancelled) return;
          try { window.localStorage.setItem(GEO_FLAG_KEY, "1"); } catch { /* ignore */ }
          if (geoLang && geoLang in LOCALES && geoLang !== initial) {
            try { window.localStorage.setItem(STORAGE_KEY, geoLang); } catch { /* ignore */ }
            window.location.reload();
          }
        }, 700);
      }
    } catch { /* ignore */ }
    return () => { cancelled = true; if (timer) clearTimeout(timer); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setLang = useCallback((l: LangCode) => {
    try { window.localStorage.setItem(STORAGE_KEY, l); } catch { /* ignore */ }
    // Per spec: reload the whole page when language changes
    if (typeof window !== "undefined") window.location.reload();
  }, []);

  const t = useCallback((key: string) => lookup(lang, key), [lang]);

  const value = useMemo(() => ({ lang, setLang, t }), [lang, setLang, t]);
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  return useContext(I18nContext);
}

export { LANGUAGES };
