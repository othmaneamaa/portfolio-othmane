"use client";

import { motion } from "framer-motion";
import { Award, Briefcase, Code2, ExternalLink, Globe, GraduationCap, Mail } from "lucide-react";
import { certifications, education, experiences, languages, profile, projects, skills, softSkills } from "@/data/portfolio";
import { useLanguage } from "@/components/LanguageProvider";

const reveal = {
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" as const },
};
const Card = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <motion.div
    initial={reveal.initial}
    whileInView={reveal.animate}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ ...reveal.transition, delay }}
    whileHover={{ y: -6, transition: { duration: 0.2 } }}
    className="creative-card"
  >
    {children}
  </motion.div>
);

export function AboutSection() {
  const { language } = useLanguage();
  const isEnglish = language === "en";
  return <Page title={isEnglish ? "About me" : "À propos"} kicker={isEnglish ? "My journey" : "Mon parcours"}><Card><p className="text-xl leading-9 text-slate-600 dark:text-slate-300">{isEnglish ? "I am a Computer Engineering student at EMSI Casablanca, specializing in Artificial Intelligence and Data. My journey started with Full-Stack Development and evolved toward building intelligent systems with Machine Learning, Large Language Models, Retrieval-Augmented Generation and AI Agents." : "Je suis étudiant ingénieur en informatique à l'EMSI Casablanca, spécialisé en Intelligence Artificielle et Data. Mon parcours a commencé par le développement Full-Stack avant d'évoluer vers la conception de systèmes intelligents avec le Machine Learning, les LLM, le RAG et les agents IA."}</p><p className="mt-5 text-xl leading-9 text-slate-600 dark:text-slate-300">{isEnglish ? "I enjoy turning complex challenges into reliable, scalable and human-centered products. I measure my results, learn continuously and build technology that creates practical value in the real world." : "J'aime transformer des problèmes complexes en produits fiables, évolutifs et pensés pour les utilisateurs. Je mesure mes résultats, j'apprends continuellement et je conçois des technologies utiles dans le monde réel."}</p><div className="mt-10 grid gap-5 sm:grid-cols-3"><Stat value="5th" label={isEnglish ? "engineering year" : "année ingénieur"} /><Stat value="3" label={isEnglish ? "spoken languages" : "langues parlées"} /><Stat value="AI" label={isEnglish ? "specialization" : "spécialité"} /></div></Card><Card><h2 className="section-title"><GraduationCap />{isEnglish ? "Education" : "Formation"}</h2><div className="space-y-5">{education.map((item) => <div key={item.degree} className="border-l-2 border-cyan-400 pl-5"><h3 className="font-bold">{item.degree}</h3><p className="text-sm text-slate-500">{item.school} · {item.date}</p></div>)}</div></Card></Page>;
}

export function SkillsSection() {
  return <Page title="Compétences" kicker="Ce que je maîtrise"><div className="grid gap-6 md:grid-cols-2">{skills.map((group, index) => <Card key={group.category} delay={index * 0.08}><h2 className="mb-5 text-xl font-bold gradient-text">{group.category}</h2><div className="flex flex-wrap gap-2">{group.items.map((item, itemIndex) => <motion.span initial={{ opacity: 0, scale: 0.85 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.08 + itemIndex * 0.035 }} key={item} className="skill-pill">{item}</motion.span>)}</div></Card>)}</div></Page>;
}

export function ExperienceSection() {
  return <Page title="Expériences" kicker="Mon expérience professionnelle"><div className="relative space-y-7 before:absolute before:bottom-8 before:left-3 before:top-8 before:w-px before:bg-cyan-400/40 md:before:left-5">{experiences.map((item, index) => <div key={item.company} className="relative pl-8 md:pl-12"><span className="absolute left-0 top-8 h-6 w-6 rounded-full border-4 border-white bg-cyan-400 shadow-lg shadow-cyan-400/40 dark:border-slate-950 md:left-2" /><Card delay={index * 0.15}><div className="flex flex-col justify-between gap-3 md:flex-row"><div><p className="mb-1 text-sm font-bold uppercase tracking-wider text-cyan-500">{item.company}</p><h2 className="text-2xl font-bold">{item.role}</h2><p className="mt-1 text-sm text-slate-500">{item.location}</p></div><span className="tag">{item.date}</span></div><p className="my-5 leading-7 text-slate-600 dark:text-slate-300">{item.description}</p><ul className="mb-5 list-inside list-disc space-y-2 text-slate-600 dark:text-slate-400">{item.missions.map((mission) => <li key={mission}>{mission}</li>)}</ul><div className="flex flex-wrap gap-2">{item.tech.map((tech) => <span key={tech} className="skill-pill">{tech}</span>)}</div></Card></div>)}</div></Page>;
}

export function ProjectsSection() {
  return <Page title="Projets" kicker="Des idées transformées en produits"><div className="grid gap-6 md:grid-cols-2">{projects.map((item, index) => <Card key={item.title} delay={index * 0.08}><div className="mb-4 flex justify-between"><h2 className="text-2xl font-bold">{item.title}</h2><motion.span whileHover={{ rotate: 45, scale: 1.15 }} transition={{ type: "spring" }}><ExternalLink className="text-cyan-500" /></motion.span></div><p className="mb-6 leading-7 text-slate-600 dark:text-slate-300">{item.description}</p><div className="flex flex-wrap gap-2">{item.tech.map((tech) => <span key={tech} className="skill-pill">{tech}</span>)}</div></Card>)}</div></Page>;
}

export function CertificationsSection() {
  return <Page title="Certifications" kicker="Apprentissage continu"><div className="grid gap-5 md:grid-cols-2">{certifications.map((item) => <Card key={item.title}><div className="flex gap-4"><div className="rounded-2xl bg-cyan-400/10 p-3 text-cyan-500"><Award /></div><div><h2 className="font-bold">{item.title}</h2><p className="mt-2 text-sm text-slate-500">{item.issuer} · {item.date}</p>{item.id && <p className="mt-2 text-xs text-slate-400">ID : {item.id}</p>}</div></div></Card>)}</div></Page>;
}

export function ContactSection() {
  return <Page title="Contact" kicker="Construisons quelque chose d'utile"><Card><div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-center"><div><Mail className="mb-5 text-cyan-500" size={42} /><h2 className="mb-4 text-3xl font-bold">Un projet IA ou Data ?</h2><p className="max-w-xl text-lg leading-8 text-slate-600 dark:text-slate-300">Je suis à la recherche d'un stage PFE et disponible pour échanger autour de vos problématiques techniques.</p></div><a className="action-button" href={`mailto:${profile.email}`}>M'écrire <Mail size={19} /></a></div></Card><div className="grid gap-5 sm:grid-cols-3"><Info icon={<Mail />} label="Email" value={profile.email} href={`mailto:${profile.email}`} /><Info icon={<Briefcase />} label="LinkedIn" value="Mon profil" href={profile.linkedin} /><Info icon={<Code2 />} label="GitHub" value="Mes projets" href={profile.github} /></div></Page>;
}

function Page({ title, kicker, children }: { title: string; kicker: string; children: React.ReactNode }) {
  return (
    <main className="page-grid min-h-screen px-6 py-16 md:px-12">
      <div className="mx-auto max-w-6xl">
        <motion.p initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className="mb-3 font-mono text-cyan-500">{kicker}</motion.p>
        <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.12 }} className="mb-12 text-5xl font-black md:text-6xl">{title}<span className="gradient-text">.</span></motion.h1>
        {children}
      </div>
    </main>
  );
}
function Stat({ value, label }: { value: string; label: string }) { return <div className="rounded-2xl bg-cyan-400/10 p-5"><strong className="block text-3xl gradient-text">{value}</strong><span className="text-sm text-slate-500">{label}</span></div>; }
function Info({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href: string }) { return <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined} className="creative-card flex items-center gap-4"><span className="text-cyan-500">{icon}</span><span><small className="block text-slate-500">{label}</small><strong>{value}</strong></span></a>; }
