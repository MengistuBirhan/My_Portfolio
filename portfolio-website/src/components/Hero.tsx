import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import AnimatedText from "./AnimatedText";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="home" className="grid-pattern flex min-h-screen items-center px-5 pb-20 pt-32 sm:px-8 lg:px-16 xl:px-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-3xl"
      >
        <h1 className="text-4xl font-bold uppercase leading-tight tracking-tight sm:text-5xl lg:text-6xl">
          <span className="gradient-text">{t("hero.name")}</span>
        </h1>
        <p className="mt-3 min-h-[1.5em] text-2xl font-semibold tracking-tight sm:text-3xl">
          <AnimatedText text={t("hero.role")} />
        </p>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-neutral-600 dark:text-neutral-300">
          {t("hero.tagline")}
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <a href="#projects" className="btn-primary">
            {t("hero.cta.projects")}
          </a>
          <a href="/resume.pdf" download className="btn-secondary">
            <Download className="h-4 w-4" />
            {t("hero.cta.resume")}
          </a>
        </div>
      </motion.div>
    </section>
  );
}
