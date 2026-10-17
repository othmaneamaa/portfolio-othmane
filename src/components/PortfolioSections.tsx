"use client";

import { motion } from "framer-motion";
import {
  Award,
  ArrowUpRight,
  Briefcase,
  Check,
  CodeXml,
  Database,
  ExternalLink,
  Globe,
  GraduationCap,
  Layers,
  Mail,
  MapPin,
  Sparkles,
  Wrench,
} from "lucide-react";
import { certifications, education, experiences, languages, profile, projects, skills, softSkills } from "@/data/portfolio";
import { useLanguage } from "@/components/LanguageProvider";

// ── shared ──────────────────────────────────────────────────────────
const reveal = {
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" as const },
};

const Card = ({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) => (
  <motion.div
    initial={reveal.initial}
    whileInView={reveal.animate}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ ...reveal.transition, delay }}
    whileHover={{ y: -4, transition: { duration: 0.18 } }}
    className={`creative-card ${className}`}
  >
    {children}
  </motion.div>
);

function Page({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="page-grid min-h-screen px-6 py-10 md:px-10 md:py-14">
      <div className="mx-auto max-w-6xl">
        <motion.p
          initial={{ opacity: 0, x: -14 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mono mb-3 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[.2em] text-cyan-600 dark:text-cyan-400"
        >
          <span className="h-px w-6 bg-cyan-500" />
          {eyebrow}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="display text-4xl font-extrabold tracking-tight md:text-5xl"
        >
          {title}
          <span className="gradient-text">.</span>
        </motion.h1>
        {subtitle && <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.18 }} className="mt-3 max-w-2xl text-[15px] leading-7 text-slate-500 dark:text-slate-400">{subtitle}</motion.p>}
        <div className="mt-10">{children}</div>
      </div>
    </div>
  );
}

// ── About ───────────────────────────────────────────────────────────
export function AboutSection() {
  const { language } = useLanguage();
  const en = language === "en";
  return (
    <Page
      eyebrow={en ? "01 — About" : "01 — À propos"}
      title={en ? "About me" : "À propos"}
      subtitle={
        en
          ? "Engineer in the making. Builder of intelligent systems."
          : "Futur ingénieur. Concepteur de systèmes intelligents."
      }
    >
      <div className="grid gap-6 lg:grid-cols-[1.7fr_.95fr]">
        <Card>
          <p className="text-[16.5px] leading-8 text-slate-600 dark:text-slate-300">
            {en
              ? "I'm a 5th-year Computer Engineering student at EMSI Casablanca, specialized in Artificial Intelligence & Data. My path started in Full-Stack Development and evolved toward ML, LLMs, RAG and AI agents — from data pipelines to production-ready products."
              : "Je suis étudiant en 5ᵉ année du cycle ingénieur en informatique à l'EMSI Casablanca, spécialisé en Intelligence Artificielle et Data. Mon parcours a commencé par le Full-Stack avant d'évoluer vers le Machine Learning, les LLM, le RAG et les agents IA — du pipeline de données au produit en production."}
          </p>
          <p className="mt-4 text-[16.5px] leading-8 text-slate-600 dark:text-slate-300">
            {en
              ? "I love turning complex problems into reliable, scalable and human-centered products. I measure, validate and ship — and I learn out in the open."
              : "J'aime transformer des problèmes complexes en produits fiables, évolutifs et pensés pour les utilisateurs. Je mesure, je valide, je livre — et j'apprends en continu."}
          </p>
          <div className="mt-8 grid grid-cols-3 gap-3">
            <Stat value="5ᵉ" label={en ? "engineering year" : "année ingénieur"} />
            <Stat value="3" label={en ? "languages" : "langues"} />
            <Stat value="AI" label={en ? "specialization" : "spécialité"} />
          </div>
          <div className="mt-8 flex flex-wrap gap-2">
            {softSkills.map((s) => (
              <span key={s} className="skill-pill">
                {s}
              </span>
            ))}
          </div>
        </Card>

        <div className="space-y-6">
          <Card className="!p-5">
            <h3 className="mono flex items-center gap-2 text-[11px] font-bold uppercase tracking-[.14em] text-slate-500">
              <Globe size={14} className="text-cyan-500" /> {en ? "Languages" : "Langues"}
            </h3>
            <div className="mt-3 space-y-2">
              {languages.map((l) => (
                <div key={l} className="flex items-center justify-between rounded-xl bg-slate-50 px-3.5 py-2.5 text-sm dark:bg-white/[.04]">
                  <span className="font-medium">{l.split(" (")[0]}</span>
                  <span className="tag !py-1">{l.match(/\((.*)\)/)?.[1] ?? ""}</span>
                </div>
              ))}
            </div>
          </Card>
          <Card className="!p-5">
            <h3 className="mono flex items-center gap-2 text-[11px] font-bold uppercase tracking-[.14em] text-slate-500">
              <MapPin size={14} className="text-cyan-500" /> Casablanca
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
              {en ? "Based in Casablanca, open to remote and on-site PFE internships across Morocco and abroad." : "Basé à Casablanca, ouvert aux stages PFE en présentiel et en remote au Maroc et à l'international."}
            </p>
          </Card>
        </div>
      </div>

      <Card delay={0.08} className="mt-6">
        <h2 className="section-title">
          <GraduationCap size={18} /> {en ? "Education" : "Formation"}
        </h2>
        <div className="grid gap-3 md:grid-cols-2">
          {education.map((item) => (
            <div key={item.degree} className="group rounded-2xl border border-slate-200/70 bg-slate-50/70 p-4 transition hover:border-cyan-400/30 hover:bg-white dark:border-white/10 dark:bg-white/[.03] dark:hover:bg-white/[.05]">
              <p className="text-[13px] font-extrabold leading-snug">{item.degree}</p>
              <p className="mono mt-1.5 text-[11px] uppercase tracking-wide text-slate-500">{item.school} · {item.date}</p>
            </div>
          ))}
        </div>
      </Card>
    </Page>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-slate-200/60 bg-slate-50 px-4 py-4 dark:border-white/10 dark:bg-white/[.04]">
      <strong className="display block text-2xl leading-none tracking-tight gradient-text">{value}</strong>
      <span className="mono mt-1 block text-[10px] font-bold uppercase tracking-[.14em] text-slate-500">{label}</span>
    </div>
  );
}

// ── Skills ──────────────────────────────────────────────────────────
const skillIcons: Record<string, React.ReactNode> = {
  "IA & Data Science": <Sparkles size={14} />,
  "Big Data & Data Engineering": <Database size={14} />,
  "Bases de données": <Layers size={14} />,
  "Analyse & Visualisation": <Wrench size={14} />,
  "Cloud & Systèmes": <Globe size={14} />,
  "Langages & Web": <CodeXml size={14} />,
  Outils: <Briefcase size={14} />,
};

export function SkillsSection() {
  const { language } = useLanguage();
  const en = language === "en";
  return (
    <Page eyebrow={en ? "02 — Skills" : "02 — Compétences"} title={en ? "Skills" : "Compétences"} subtitle={en ? "What I ship with." : "Ce que je maîtrise au quotidien."}>
      <div className="grid gap-5 md:grid-cols-2">
        {skills.map((group, index) => (
          <Card key={group.category} delay={index * 0.06}>
            <div className="mb-4 flex items-center gap-2.5">
              <span className="grid h-8 w-8 place-items-center rounded-xl bg-slate-900 text-cyan-300 dark:bg-cyan-500/15 dark:text-cyan-300">{skillIcons[group.category] ?? <CodeXml size={14} />}</span>
              <h2 className="text-[13px] font-extrabold uppercase tracking-[.08em]">{group.category}</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item, itemIndex) => (
                <motion.span
                  key={item}
                  initial={{ opacity: 0, scale: 0.88 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06 + itemIndex * 0.03 }}
                  className="skill-pill"
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </Page>
  );
}

// ── Experience ──────────────────────────────────────────────────────
export function ExperienceSection() {
  const { language } = useLanguage();
  const en = language === "en";
  return (
    <Page eyebrow={en ? "03 — Experience" : "03 — Expériences"} title={en ? "Experience" : "Expériences"} subtitle={en ? "Where I learned to ship." : "Là où j'ai appris à livrer."}>
      <div className="relative space-y-6 before:absolute before:bottom-6 before:left-3 before:top-6 before:w-px before:bg-gradient-to-b before:from-cyan-400 before:via-violet-400 before:to-transparent before:opacity-60 md:before:left-5">
        {experiences.map((item, index) => (
          <div key={item.company} className="relative pl-8 md:pl-12">
            <span className="absolute left-0 top-7 grid h-6 w-6 place-items-center rounded-full border-4 border-white bg-gradient-to-br from-cyan-500 to-violet-500 shadow-lg shadow-cyan-500/30 dark:border-[#070b18] md:left-2" />
            <Card delay={index * 0.1}>
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div>
                  <p className="mono text-[11px] font-bold uppercase tracking-[.14em] text-cyan-600 dark:text-cyan-400">{item.company}</p>
                  <h2 className="display mt-1 text-xl font-extrabold leading-tight">{item.role}</h2>
                  <p className="mono mt-1.5 flex items-center gap-1.5 text-[12px] text-slate-500">
                    <MapPin size={12} /> {item.location}
                  </p>
                </div>
                <span className="tag shrink-0 self-start border-slate-200 bg-slate-50 dark:border-white/10 dark:bg-white/5">{item.date}</span>
              </div>
              <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">{item.description}</p>
              <ul className="mt-4 space-y-2">
                {item.missions.map((mission) => (
                  <li key={mission} className="flex gap-2.5 text-[14px] leading-6 text-slate-600 dark:text-slate-400">
                    <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                      <Check size={12} strokeWidth={2.5} />
                    </span>
                    {mission}
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap gap-2">
                {item.tech.map((tech) => (
                  <span key={tech} className="skill-pill">
                    {tech}
                  </span>
                ))}
              </div>
            </Card>
          </div>
        ))}
      </div>
    </Page>
  );
}

// ── Projects ────────────────────────────────────────────────────────
const projectAccent = ["from-cyan-500 to-blue-600", "from-violet-500 to-fuchsia-500", "from-emerald-500 to-cyan-500", "from-amber-500 to-orange-500", "from-blue-500 to-violet-500", "from-cyan-500 to-emerald-500"];

export function ProjectsSection() {
  const { language } = useLanguage();
  const en = language === "en";
  return (
    <Page eyebrow={en ? "04 — Projects" : "04 — Projets"} title={en ? "Projects" : "Projets"} subtitle={en ? "Ideas turned into products." : "Des idées transformées en produits."}>
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((item, index) => (
          <a
            key={item.title}
            href={`/projects/${item.slug}`}
            className="group block"
          >
            <Card delay={index * 0.06} className="group flex flex-col !p-0 overflow-hidden h-full">
              <div className={`h-1.5 w-full bg-gradient-to-r ${projectAccent[index % projectAccent.length]}`} />
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <div className="mb-3 flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <span className="mono grid h-8 w-8 place-items-center rounded-xl bg-slate-900 text-[11px] font-bold text-white dark:bg-white dark:text-slate-900">
                        0{index + 1}
                      </span>
                      <h2 className="display text-lg font-extrabold leading-tight">{item.title}</h2>
                    </div>
                    <span className="grid h-8 w-8 place-items-center rounded-xl border border-slate-200 bg-white text-slate-400 transition group-hover:border-slate-900 group-hover:text-slate-900 dark:border-white/10 dark:bg-white/5 dark:group-hover:border-white dark:group-hover:text-white">
                      <ArrowUpRight size={16} />
                    </span>
                  </div>
                  <p className="text-[14.5px] leading-7 text-slate-600 dark:text-slate-300">{item.description}</p>
                </div>
                <div className="mt-5 pt-4 border-t border-slate-100 dark:border-white/5 flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {item.tech.map((tech) => (
                      <span key={tech} className="skill-pill">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <span className="mono text-xs font-semibold text-cyan-600 dark:text-cyan-400 group-hover:underline">
                    {en ? "Details →" : "Détails →"}
                  </span>
                </div>
              </div>
            </Card>
          </a>
        ))}
      </div>
      <Card delay={0.2} className="mt-6 flex flex-col items-start justify-between gap-4 !p-6 md:flex-row md:items-center">
        <div>
          <p className="mono text-[11px] font-bold uppercase tracking-[.14em] text-slate-500">GitHub</p>
          <p className="mt-1 text-sm font-semibold">{en ? "More on GitHub — stars, commits, open source." : "Plus sur GitHub — stars, commits et open source."}</p>
        </div>
        <a href={profile.github} target="_blank" rel="noopener noreferrer" className="action-button shrink-0">
          <ExternalLink size={16} /> {en ? "Visit GitHub" : "Voir GitHub"}
        </a>
      </Card>
    </Page>
  );
}

// ── Certifications ──────────────────────────────────────────────────
export function CertificationsSection() {
  const { language } = useLanguage();
  const en = language === "en";
  return (
    <Page eyebrow={en ? "05 — Certifications" : "05 — Certificats"} title="Certifications" subtitle={en ? "Continuous learning, verified." : "Apprentissage continu, vérifié."}>
      <div className="grid gap-4 md:grid-cols-2">
        {certifications.map((item, i) => (
          <Card key={`${item.title}-${i}`} delay={i * 0.05} className="flex gap-4 !p-5">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-cyan-500 to-violet-500 text-white shadow-lg shadow-cyan-500/20">
              <Award size={18} />
            </span>
            <div className="min-w-0">
              <h2 className="text-[14px] font-extrabold leading-snug">{item.title}</h2>
              <p className="mono mt-1 text-[12px] text-slate-500">
                {item.issuer} · {item.date}
              </p>
              {item.id && <p className="mono mt-1.5 inline-flex rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-semibold tracking-wide text-slate-500 dark:bg-white/10">ID · {item.id}</p>}
              {item.skills && <p className="mt-1.5 text-xs text-slate-500">{item.skills}</p>}
            </div>
          </Card>
        ))}
      </div>
    </Page>
  );
}

// ── Contact ─────────────────────────────────────────────────────────
export function ContactSection() {
  const { language } = useLanguage();
  const en = language === "en";
  return (
    <Page
      eyebrow={en ? "06 — Contact" : "06 — Contact"}
      title="Contact"
      subtitle={en ? "Let's build something useful." : "Construisons quelque chose d'utile."}
    >
      <Card className="overflow-hidden !p-0">
        <div className="grid md:grid-cols-[1.2fr_.85fr]">
          <div className="p-8 md:p-10">
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-slate-900 text-cyan-300 dark:bg-cyan-500/15">
              <Mail size={20} />
            </span>
            <h2 className="display mt-5 text-2xl font-extrabold leading-tight md:text-3xl">
              {en ? "A PFE project in AI or Data?" : "Un projet IA ou Data ?"}
            </h2>
            <p className="mt-3 max-w-xl text-[15px] leading-7 text-slate-600 dark:text-slate-300">
              {en
                ? "I'm looking for a final-year internship and available to discuss your challenges — from data pipelines to LLM agents."
                : "Je recherche un stage PFE et suis disponible pour échanger autour de vos problématiques — du pipeline data à l'agent LLM."}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href={`mailto:${profile.email}`} className="action-button">
                <Mail size={16} /> {en ? "Email me" : "M'écrire"}
              </a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="outline-button">
                <Globe size={16} /> LinkedIn
              </a>
            </div>
          </div>
          <div className="relative overflow-hidden bg-slate-900 p-8 text-white dark:bg-[#0d1428] md:p-10">
            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br from-cyan-500/40 to-violet-500/40 blur-2xl" />
            <p className="mono text-[11px] font-bold uppercase tracking-[.18em] text-white/60">Direct</p>
            <div className="mt-6 space-y-4">
              <a href={`mailto:${profile.email}`} className="flex items-center gap-3 rounded-2xl bg-white/10 p-4 backdrop-blur transition hover:bg-white/15">
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-white text-slate-900">
                  <Mail size={16} />
                </span>
                <span>
                  <span className="block text-xs text-white/60">Email</span>
                  <span className="text-sm font-semibold">{profile.email}</span>
                </span>
              </a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-2xl bg-white/10 p-4 backdrop-blur transition hover:bg-white/15">
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-white text-slate-900">
                  <Briefcase size={16} />
                </span>
                <span>
                  <span className="block text-xs text-white/60">LinkedIn</span>
                  <span className="text-sm font-semibold">othmane-amaadour</span>
                </span>
              </a>
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-2xl bg-white/10 p-4 backdrop-blur transition hover:bg-white/15">
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-white text-slate-900">
                  <CodeXml size={16} />
                </span>
                <span>
                  <span className="block text-xs text-white/60">GitHub</span>
                  <span className="text-sm font-semibold">othmaneamaa</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </Card>

      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        <Info icon={<Mail size={18} />} label="Email" value={profile.email} href={`mailto:${profile.email}`} />
        <Info icon={<Briefcase size={18} />} label="LinkedIn" value={en ? "My profile" : "Mon profil"} href={profile.linkedin} />
        <Info icon={<CodeXml size={18} />} label="GitHub" value={en ? "My work" : "Mes projets"} href={profile.github} />
      </div>
    </Page>
  );
}

function Info({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href: string }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="creative-card group flex items-center gap-3.5 !p-5 transition hover:-translate-y-0.5"
    >
      <span className="grid h-10 w-10 place-items-center rounded-xl bg-slate-900 text-white transition group-hover:bg-cyan-500 dark:bg-white dark:text-slate-900 dark:group-hover:bg-cyan-500 dark:group-hover:text-white">
        {icon}
      </span>
      <span className="min-w-0">
        <small className="mono block text-[10px] font-bold uppercase tracking-[.14em] text-slate-400">{label}</small>
        <strong className="block truncate text-sm">{value}</strong>
      </span>
      <ArrowUpRight size={16} className="ml-auto shrink-0 text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white" />
    </a>
  );
}
