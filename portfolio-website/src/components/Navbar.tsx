import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import type { TranslationKey } from "../i18n/translations";
import LanguageToggle from "./LanguageToggle";
import ThemeToggle from "./ThemeToggle";

const links: { href: string; label: TranslationKey }[] = [
  { href: "#about", label: "nav.about" },
  { href: "#projects", label: "nav.projects" },
  { href: "#skills", label: "nav.skills" },
  { href: "#certificates", label: "nav.certificates" },
  { href: "#contact", label: "nav.contact" },
];

export default function Navbar() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-950/80 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#home" className="text-lg font-bold tracking-tight">
          MB<span className="text-primary-600">.</span>
        </a>

        <ul className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-neutral-600 transition-colors hover:text-primary-600 dark:text-neutral-300 dark:hover:text-primary-400"
              >
                {t(l.label)}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a href="#contact" className="btn-accent hidden !px-4 !py-2 md:inline-flex">
            {t("nav.hire")}
          </a>
          <LanguageToggle />
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? t("nav.close") : t("nav.menu")}
            aria-expanded={open}
            className="rounded-xl border border-neutral-300 p-2 text-neutral-700 dark:border-neutral-700 dark:text-neutral-200 md:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {open && (
        <ul className="border-t border-neutral-200 bg-white px-5 py-3 dark:border-neutral-800 dark:bg-neutral-950 md:hidden">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-2.5 text-sm font-medium text-neutral-700 dark:text-neutral-200"
              >
                {t(l.label)}
              </a>
            </li>
          ))}
          <li>
            <a href="#contact" onClick={() => setOpen(false)} className="btn-accent mt-2 w-full">
              {t("nav.hire")}
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}
