import { Languages } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function LanguageToggle() {
  const { lang, toggleLang } = useLanguage();
  const next = lang === "en" ? "አማርኛ" : "English";

  return (
    <button
      type="button"
      onClick={toggleLang}
      aria-label={lang === "en" ? "ወደ አማርኛ ቀይር (Switch to Amharic)" : "Switch to English"}
      className="inline-flex items-center gap-2 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 px-3 py-2 text-sm font-medium text-neutral-800 dark:text-neutral-200 transition-colors hover:border-primary-500 hover:text-primary-600 dark:hover:text-primary-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/40"
    >
      <Languages className="h-4 w-4" aria-hidden="true" />
      {next}
    </button>
  );
}
