import { ExternalLink, Github } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import type { TranslationKey } from "../i18n/translations";

interface Project {
  title: TranslationKey;
  desc: TranslationKey;
  tags: string[];
  live?: string;
  repo: string;
}

const projects: Project[] = [
  {
    title: "project.garvelgo.title",
    desc: "project.garvelgo.desc",
    tags: ["React", "TypeScript", "RBAC"],
    live: "https://garvelgo-eco-system.vercel.app/",
    repo: "https://github.com/MengistuBirhan/GARVELGO-ECO-SYSTEM",
  },
  {
    title: "project.portfolio.title",
    desc: "project.portfolio.desc",
    tags: ["React", "Tailwind CSS", "Framer Motion", "Web3Forms"],
    repo: "https://github.com/MengistuBirhan",
  },
];

export default function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="section-padding bg-neutral-100/60 dark:bg-neutral-900/40">
      <div className="mx-auto max-w-6xl">
        <p className="section-subtitle">{t("projects.subtitle")}</p>
        <h2 className="section-title">{t("projects.title")}</h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <article key={p.title} className="card card-hover flex flex-col p-6">
              <h3 className="text-xl font-semibold">{t(p.title)}</h3>
              <p className="mt-3 flex-1 leading-relaxed text-neutral-600 dark:text-neutral-300">{t(p.desc)}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {p.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-lg bg-primary-50 px-2.5 py-1 font-mono text-xs text-primary-700 dark:bg-primary-950 dark:text-primary-300"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex gap-5 text-sm font-medium">
                {p.live && (
                  <a href={p.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-primary-600 hover:underline dark:text-primary-400">
                    <ExternalLink className="h-4 w-4" />
                    {t("projects.live")}
                  </a>
                )}
                <a href={p.repo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-neutral-700 hover:underline dark:text-neutral-300">
                  <Github className="h-4 w-4" />
                  {t("projects.code")}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
