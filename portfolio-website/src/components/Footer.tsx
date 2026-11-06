import { Github } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-neutral-200 px-5 py-8 dark:border-neutral-800 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-neutral-500 dark:text-neutral-400 sm:flex-row">
        <p>
          © 2018 {t("hero.name")}. {t("footer.rights")}
        </p>
        <a
          href="https://github.com/MengistuBirhan"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className="transition-colors hover:text-primary-600"
        >
          <Github className="h-5 w-5" />
        </a>
      </div>
    </footer>
  );
}
