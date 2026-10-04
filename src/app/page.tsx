"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { ArrowRight, Code2, Globe } from "lucide-react";
import { profile } from "@/data/portfolio";
import { useLanguage } from "@/components/LanguageProvider";

export default function Home() {
  const { language } = useLanguage();
  const isEnglish = language === "en";
    const textAnimation: Variants = {
      hidden: { opacity: 0, y: 24 },
      visible: (delay: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
      }),
    };

    return (
    <div className="page-grid relative flex min-h-[calc(100vh-5rem)] items-center overflow-hidden px-6 py-14 md:px-12 lg:min-h-screen">
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/3 top-1/4 h-2 w-2 rounded-full bg-cyan-400"
          animate={{ y: [0, -45, 0], opacity: [0.2, 1, 0.2], scale: [1, 1.8, 1] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute right-1/4 top-1/3 h-3 w-3 rounded-full bg-violet-500"
          animate={{ x: [0, 35, 0], y: [0, 25, 0], opacity: [0.15, 0.8, 0.15] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
        />
        <div className="mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div initial="hidden" animate="visible">
          <motion.p custom={0.1} variants={textAnimation} className="mb-5 font-mono text-lg text-slate-500 dark:text-slate-400">{isEnglish ? "Hi, I'm" : "Bonjour, je suis"}</motion.p>
          <motion.h1 custom={0.25} variants={textAnimation} className="mb-5 text-5xl font-black tracking-tight text-slate-950 dark:text-white sm:text-6xl md:text-7xl">
            Othmane <span className="gradient-text">Amaadour</span>
          </motion.h1>
          <motion.h2 custom={0.4} variants={textAnimation} className="mb-7 text-2xl font-semibold text-cyan-600 dark:text-cyan-400 md:text-3xl">
            {isEnglish ? "Computer Engineering Student in AI & Data" : "Étudiant Ingénieur en IA & Data"}<motion.span animate={{ opacity: [0, 1, 0] }} transition={{ duration: 0.9, repeat: Infinity }}>_</motion.span>
          </motion.h2>
          <motion.p custom={0.55} variants={textAnimation} className="mb-9 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            {isEnglish
              ? "I am a fifth-year Computer Engineering student at EMSI Casablanca, specializing in Artificial Intelligence and Data. I work on data pipelines, LLM agents and, occasionally, a game engine, in French, Arabic and English. I measure and validate my results before drawing conclusions. I am looking for a final-year internship in AI / Data to apply these skills to real-world challenges."
              : profile.about}
          </motion.p>
          <motion.div custom={0.7} variants={textAnimation} className="flex flex-wrap gap-4">
            <motion.a whileHover={{ scale: 1.04, y: -4 }} whileTap={{ scale: 0.97 }} href="/projects" className="action-button">{isEnglish ? "Discover my projects" : "Découvrir mes projets"} <ArrowRight size={19} /></motion.a>
            <motion.a whileHover={{ scale: 1.04, y: -4 }} whileTap={{ scale: 0.97 }} href="/contact" className="outline-button">{isEnglish ? "Contact me" : "Me contacter"}</motion.a>
          </motion.div>
          <motion.div custom={0.85} variants={textAnimation} className="mt-10 flex gap-7 text-slate-500 dark:text-slate-400">
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="social-link"><Code2 size={21} />othmaneamaa</a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="social-link"><Globe size={21} />LinkedIn</a>
          </motion.div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.75, rotate: -8 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: 0.9, delay: 0.35, type: "spring", stiffness: 80 }} className="relative mx-auto w-full max-w-md">
        <motion.div className="profile-glow" animate={{ scale: [1, 1.12, 1], opacity: [0.45, 0.8, 0.45] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} />
        <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="relative aspect-square rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-violet-500 p-2 shadow-2xl shadow-cyan-500/30">
            <div className="relative h-full w-full overflow-hidden rounded-full border-4 border-white bg-slate-100 dark:border-slate-950"><Image src="/profile.jpg" alt="Portrait de Othmane Amaadour" fill priority className="object-cover" sizes="400px" /></div>
        </motion.div>
        <motion.span animate={{ y: [0, -7, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.4 }} className="floating-badge">IA · Data · Full-Stack</motion.span>
        </motion.div>
      </div>
    </div>
  );
}
