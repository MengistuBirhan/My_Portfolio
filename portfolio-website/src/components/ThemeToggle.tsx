import { Moon, Sun } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const { t } = useLanguage();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? t("theme.toLight") : t("theme.toDark")}
      aria-pressed={isDark}
      className="rounded-xl border border-neutral-300 p-2 text-neutral-700 transition-colors hover:border-primary-500 hover:text-primary-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/40 dark:border-neutral-700 dark:text-neutral-200 dark:hover:text-primary-400"
    >
      {isDark ? <Sun className="h-4 w-4" aria-hidden="true" /> : <Moon className="h-4 w-4" aria-hidden="true" />}
    </button>
  );
}
