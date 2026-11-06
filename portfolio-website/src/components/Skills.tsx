import { useLanguage } from "../context/LanguageContext";
import type { TranslationKey } from "../i18n/translations";

interface Skill {
  name: string;
  detail: string;
}

const groups: { title: TranslationKey; skills: Skill[] }[] = [
  {
    title: "skills.g.core",
    skills: [
      { name: "Data Structures & Algorithms", detail: "Efficient code execution & memory optimization (Time/Space Complexity)" },
      { name: "Software Design & Clean Code", detail: "SOLID Principles, Design Patterns, Code Refactoring" },
      { name: "System Architecture", detail: "Monolithic, Microservices, Serverless, and Event-Driven Architectures" },
    ],
  },
  {
    title: "skills.g.lang",
    skills: [
      { name: "Languages", detail: "TypeScript, JavaScript" },
      { name: "Frontend", detail: "React, Next.js, HTML5, CSS3, Tailwind CSS" },
      { name: "Backend", detail: "Node.js (Express)" },
    ],
  },
  {
    title: "skills.g.data",
    skills: [
      { name: "Relational Databases (SQL)", detail: "MySQL (Complex queries, Indexing, Transactions, Migrations)" },
      { name: "NoSQL Databases", detail: "MongoDB" },
    ],
  },
  {
    title: "skills.g.devops",
    skills: [
      { name: "Git & Version Control", detail: "Git, GitHub / GitLab (Branching strategies, Pull Requests, Merge conflict resolution)" },
      { name: "CI/CD Pipelines", detail: "GitHub Actions, GitLab CI" },
      { name: "Cloud Platforms & Hosting", detail: "Vercel, Render" },
    ],
  },
  {
    title: "skills.g.api",
    skills: [
      { name: "API Design", detail: "RESTful APIs" },
      { name: "Authentication & Authorization", detail: "JWT, OAuth2, Role-Based Access Control (RBAC)" },
    ],
  },
  {
    title: "skills.g.testing",
    skills: [
      { name: "Testing & API Clients", detail: "Unit & Integration Testing, Postman" },
      { name: "Debugging & Profiling", detail: "Code troubleshooting, performance optimization" },
    ],
  },
];

const soft: { title: TranslationKey; desc: TranslationKey }[] = [
  { title: "soft.1.title", desc: "soft.1.desc" },
  { title: "soft.2.title", desc: "soft.2.desc" },
  { title: "soft.3.title", desc: "soft.3.desc" },
  { title: "soft.4.title", desc: "soft.4.desc" },
  { title: "soft.5.title", desc: "soft.5.desc" },
];

export default function Skills() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="section-padding">
      <div className="mx-auto max-w-6xl">
        <p className="section-subtitle">{t("skills.subtitle")}</p>
        <h2 className="section-title">{t("skills.title")}</h2>

        <h3 className="mt-12 text-xl font-semibold">{t("skills.technical")}</h3>
        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {groups.map((g) => (
            <div key={g.title} className="card p-6">
              <h4 className="text-lg font-semibold text-primary-600 dark:text-primary-400">{t(g.title)}</h4>
              <dl className="mt-4 space-y-4">
                {g.skills.map((s) => (
                  <div key={s.name}>
                    <dt className="font-medium">{s.name}</dt>
                    <dd className="mt-0.5 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">{s.detail}</dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>

        <h3 className="mt-16 text-xl font-semibold">{t("skills.soft")}</h3>
        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {soft.map((s) => (
            <div key={s.title} className="card p-6">
              <h4 className="font-semibold">{t(s.title)}</h4>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">{t(s.desc)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
