import { useLanguage } from "../context/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="section-padding">
      <div className="mx-auto max-w-3xl">
        <p className="section-subtitle">{t("about.subtitle")}</p>
        <h2 className="section-title">{t("about.title")}</h2>
        <p className="mt-6 text-lg leading-relaxed text-neutral-600 dark:text-neutral-300">{t("about.p1")}</p>
        <p className="mt-4 text-lg leading-relaxed text-neutral-600 dark:text-neutral-300">{t("about.p2")}</p>
      </div>
    </section>
  );
}
