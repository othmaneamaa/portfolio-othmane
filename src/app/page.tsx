"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  Database,
  Mail,
  MapPin,
  Sparkles,
} from "lucide-react";
import { profile } from "@/data/portfolio";
import { useLanguage } from "@/components/LanguageProvider";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 26 },
  visible: (d: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: d, ease: [0.22, 1, 0.36, 1] },
  }),
};

const copy = {
  en: {
    hello: "Hello — I'm",
    role: "AI & Data Engineering Student",
    intro:
      "5th-year Computer Engineering student at EMSI Casablanca. I build LLM agents, data pipelines and full-stack products — measured, validated, and shipped to production. Currently looking for a final-year AI / Data internship.",
    projects: "View my work",
    contact: "Get in touch",
    available: "Open to PFE internship",
    based: "Casablanca, Morocco · Open to remote",
    stats: [
      { v: "06+", l: "Shipped projects" },
      { v: "02", l: "Internships" },
      { v: "03", l: "Languages FR·AR·EN" },
    ],
    stack: "Daily stack",
    agentTitle: "LLM Agent",
    agentSub: "Multi-agent voice assistant",
    pipeTitle: "Data pipeline",
    scroll: "Scroll",
  },
  fr: {
    hello: "Bonjour — je suis",
    role: "Étudiant Ingénieur en IA & Data",
    intro:
      "Étudiant en 5ᵉ année à l'EMSI Casablanca. Je conçois des agents LLM, des pipelines data et des produits full-stack — mesurés, validés, mis en production. Je recherche un stage PFE en IA / Data.",
    projects: "Voir mes projets",
    contact: "Me contacter",
    available: "Disponible · Stage PFE",
    based: "Casablanca, Maroc · Remote OK",
    stats: [
      { v: "06+", l: "Projets livrés" },
      { v: "02", l: "Stages" },
      { v: "03", l: "Langues FR·AR·EN" },
    ],
    stack: "Stack du moment",
    agentTitle: "Agent LLM",
    agentSub: "Assistant vocal multi-agents",
    pipeTitle: "Pipeline data",
    scroll: "Défiler",
  },
};

export default function Home() {
  const { language } = useLanguage();
  const t = copy[language];

  return (
    <div className="page-grid noise relative min-h-screen overflow-hidden">
      {/* ── Top utility bar (desktop) ── */}
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 pb-2 pt-8 md:px-10">
        <motion.p variants={fadeUp} initial="hidden" animate="visible" custom={0}
          className="mono inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[.14em] text-slate-500 backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
          {t.available}
        </motion.p>
        <motion.p variants={fadeUp} initial="hidden" animate="visible" custom={0.05}
          className="mono hidden items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[.14em] text-slate-400 md:inline-flex">
          <MapPin size={12} /> {t.based}
        </motion.p>
      </div>

      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-6 pb-16 pt-6 md:px-10 lg:grid-cols-[1.08fr_.92fr] lg:gap-8 lg:pt-10">
        {/* ── Left : editorial ── */}
        <motion.div initial="hidden" animate="visible">
          <motion.p custom={0.05} variants={fadeUp} className="mono mb-4 text-[13px] font-semibold uppercase tracking-[.2em] text-cyan-600 dark:text-cyan-400">
            <span className="text-slate-300 dark:text-slate-600">01 / </span>{t.hello}
          </motion.p>

          <motion.h1 custom={0.12} variants={fadeUp} className="display text-[clamp(3rem,7.5vw,5.4rem)] font-extrabold leading-[.95]">
            Othmane
            <br />
            <span className="gradient-text">Amaadour</span>
            <motion.span
              className="ml-2 inline-block h-[.55em] w-[10px] rounded-[3px] bg-slate-900 align-baseline dark:bg-white"
              animate={{ opacity: [1, 0, 1] }} transition={{ duration: 1, repeat: Infinity }}
            />
          </motion.h1>

          <motion.div custom={0.2} variants={fadeUp} className="mt-5 flex items-center gap-3">
            <span className="h-px w-10 bg-gradient-to-r from-cyan-500 to-violet-500" />
            <p className="text-[15px] font-bold uppercase tracking-[.08em] text-slate-700 dark:text-slate-200">{t.role}</p>
          </motion.div>

          <motion.p custom={0.28} variants={fadeUp} className="mt-5 max-w-xl text-[16.5px] leading-8 text-slate-600 dark:text-slate-300">
            {t.intro}
          </motion.p>

          <motion.div custom={0.36} variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-3">
            <motion.a whileHover={{ y: -3 }} whileTap={{ scale: 0.97 }} href="/projects" className="action-button">
              {t.projects} <ArrowRight size={17} />
            </motion.a>
            <motion.a whileHover={{ y: -3 }} whileTap={{ scale: 0.97 }} href="/contact" className="outline-button">
              {t.contact} <ArrowUpRight size={17} />
            </motion.a>
          </motion.div>

          {/* stats */}
          <motion.div custom={0.44} variants={fadeUp} className="mt-9 grid max-w-xl grid-cols-3 divide-x divide-slate-200 rounded-2xl border border-slate-200/70 bg-white/60 backdrop-blur dark:divide-white/10 dark:border-white/10 dark:bg-white/[.04]">
            {t.stats.map((s) => (
              <div key={s.l} className="px-5 py-4">
                <p className="display text-2xl font-extrabold tracking-tight">{s.v}</p>
                <p className="mt-1 text-[11.5px] font-medium leading-snug text-slate-500 dark:text-slate-400">{s.l}</p>
              </div>
            ))}
          </motion.div>

          {/* socials + stack */}
          <motion.div custom={0.52} variants={fadeUp} className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="social-link"><GithubIcon size={17} /> GitHub</a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="social-link"><LinkedinIcon size={17} /> LinkedIn</a>
            <a href={`mailto:${profile.email}`} className="social-link"><Mail size={17} /> {profile.email}</a>
          </motion.div>
        </motion.div>

        {/* ── Right : portrait composition ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-[420px]"
        >
          {/* main portrait card */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="creative-card overflow-hidden !p-3"
          >
            <div className="relative aspect-[4/4.6] overflow-hidden rounded-[1.1rem] bg-slate-100 dark:bg-slate-800">
              <Image src="/profile.jpg" alt="Portrait d'Othmane Amaadour" fill priority className="object-cover" sizes="420px" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-transparent to-transparent" />
              <div className="absolute inset-x-4 bottom-4 flex items-end justify-between">
                <div>
                  <p className="mono text-[10px] font-bold uppercase tracking-[.2em] text-white/70">Portfolio — 2026</p>
                  <p className="display mt-1 text-lg font-extrabold text-white">AI · Data · Full-Stack</p>
                </div>
                <span className="grid h-10 w-10 place-items-center rounded-full bg-white text-slate-900"><Sparkles size={17} /></span>
              </div>
            </div>
          </motion.div>

          {/* floating: agent card */}
          <motion.div
            animate={{ y: [0, -12, 0], rotate: [-2, -2, -2] }}
            transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-6 top-10 hidden w-52 rounded-2xl border border-slate-200/70 bg-white/90 p-3.5 shadow-xl shadow-slate-900/10 backdrop-blur-xl dark:border-white/10 dark:bg-[#0d1428]/90 sm:block lg:-left-14"
          >
            <div className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-cyan-500 to-violet-500 text-white"><Bot size={17} /></span>
              <div>
                <p className="text-[13px] font-bold leading-none">{t.agentTitle}</p>
                <p className="mt-1 text-[11px] text-slate-500 dark:text-slate-400">S.O.P.H.I.A · vocal 3D</p>
              </div>
            </div>
            <div className="mt-3 flex items-end gap-1">
              {[10, 18, 8, 22, 14, 26, 12, 20, 9, 16].map((h, i) => (
                <motion.span key={i} className="w-full rounded-full bg-gradient-to-t from-cyan-500 to-violet-500"
                  style={{ height: h }}
                  animate={{ scaleY: [1, 0.4, 1] }}
                  transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.09 }} />
              ))}
            </div>
          </motion.div>

          {/* floating: pipeline card */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
            className="absolute -right-3 bottom-16 hidden w-56 rounded-2xl border border-slate-200/70 bg-white/90 p-3.5 shadow-xl shadow-slate-900/10 backdrop-blur-xl dark:border-white/10 dark:bg-[#0d1428]/90 sm:block lg:-right-10"
          >
            <div className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-slate-900 text-cyan-300 dark:bg-cyan-500/15"><Database size={17} /></span>
              <div>
                <p className="text-[13px] font-bold leading-none">{t.pipeTitle}</p>
                <p className="mono mt-1 text-[10px] uppercase tracking-widest text-emerald-500">● live · Naxus</p>
              </div>
            </div>
            <div className="mono mt-3 space-y-1.5 text-[10.5px] text-slate-500 dark:text-slate-400">
              <p>Kafka → Spark → Lake</p>
              <div className="h-1.5 overflow-hidden rounded-full bg-slate-100 dark:bg-white/10">
                <motion.div className="h-full w-2/3 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500"
                  animate={{ x: ["-30%", "60%"] }} transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }} />
              </div>
            </div>
          </motion.div>

          <div className="profile-glow -z-10" />
        </motion.div>
      </div>

      {/* ── Bottom tech marquee ── */}
      <div className="relative border-t border-slate-200/70 bg-white/50 backdrop-blur dark:border-white/10 dark:bg-white/[.03]">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-8 gap-y-2 px-6 py-4 md:px-10">
          <span className="mono text-[10px] font-bold uppercase tracking-[.2em] text-slate-400">{t.stack} —</span>
          {["Python", "LLM Agents", "Spark", "Kafka", "Next.js", "Neo4j", "Power BI", "Azure"].map((s) => (
            <span key={s} className="text-[13px] font-semibold text-slate-500 dark:text-slate-400">{s}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
