import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { translations, type Lang, type TranslationKey } from "../i18n/translations";

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggleLang: () => void;
  t: (key: TranslationKey) => string;
}

const STORAGE_KEY = "lang";
const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

function getInitialLang(): Lang {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "en" || saved === "am") return saved;
  } catch {
    /* ignore */
  }
  return navigator.language.toLowerCase().startsWith("am") ? "am" : "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(getInitialLang);

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* ignore */
    }
  }, [lang]);

  const toggleLang = useCallback(() => setLang((l) => (l === "en" ? "am" : "en")), []);
  const t = useCallback((key: TranslationKey) => translations[lang][key], [lang]);

  const value = useMemo(() => ({ lang, setLang, toggleLang, t }), [lang, toggleLang, t]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside <LanguageProvider>");
  return ctx;
}
