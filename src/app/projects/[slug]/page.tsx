"use client";

import { use } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Sparkles, CheckCircle2, ChevronDown } from "lucide-react";
import { projects } from "@/data/portfolio";
import { useLanguage } from "@/components/LanguageProvider";
import { GithubIcon } from "@/components/icons";

export default function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const { language } = useLanguage();
  const en = language === "en";

  const project = projects.find((p) => p.slug === slug) || projects[0];

  return (
    <div className="page-grid noise relative min-h-screen px-6 py-12 md:px-10 md:py-16">
      <div className="mx-auto max-w-5xl">
        {/* Back button */}
        <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}>
          <Link
            href="/projects"
            className="mono inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-4 py-2 text-xs font-bold uppercase tracking-widest text-slate-600 backdrop-blur transition hover:border-cyan-500 hover:text-cyan-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:border-cyan-400 dark:hover:text-cyan-400"
          >
            <ArrowLeft size={14} /> {en ? "Back to projects" : "Retour aux projets"}
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mt-8"
        >
          <div className="flex flex-wrap items-center gap-3">
            <span className="mono rounded-full bg-cyan-500/10 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
              {project.category[language]}
            </span>
            <span className="mono text-xs text-slate-400">· {project.year}</span>
          </div>

          <h1 className="display mt-4 text-3xl font-extrabold tracking-tight md:text-5xl">
            {project.title}
          </h1>

          <p className="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-300">
            {project.longDescription[language]}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span key={t} className="skill-pill">
                {t}
              </span>
            ))}
          </div>
        </motion.div>

        {/* ── NAXUS SVG Vector Graph ── */}
        {slug === "naxus" && (
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="mt-12 overflow-x-auto rounded-3xl border border-blue-500/30 bg-[#0c1b40] p-6 text-white shadow-2xl md:p-10 relative">
            <div className="absolute inset-0 bg-[radial-gradient(#1e3a8a_1px,transparent_1px)] [background-size:24px_24px] opacity-25 pointer-events-none" />
            <div className="flex items-center justify-between border-b border-blue-400/20 pb-4 mb-6 relative z-10">
              <div className="flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30"><Sparkles size={18} /></span>
                <div>
                  <h2 className="display text-sm font-bold uppercase tracking-wider text-white">Pipeline de veille e-commerce — Architecture Data Lake & Streaming</h2>
                  <p className="mono text-[10px] text-amber-400">Interactive SVG Flow Diagram</p>
                </div>
              </div>
              <span className="mono inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3 py-1 text-[11px] font-semibold text-emerald-400 border border-emerald-500/20">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" /> Production Ready
              </span>
            </div>
            <div className="relative min-w-[1150px] py-4 z-10">
              <svg className="w-full h-[460px]" viewBox="0 0 1150 460" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Connexions Sources -> Scraper */}
                <path d="M 160 55 C 220 55, 220 180, 270 180" stroke="#fbbf24" strokeWidth="2" strokeDasharray="4 4" />
                <path d="M 160 180 C 210 180, 230 180, 270 180" stroke="#fbbf24" strokeWidth="2" />
                <path d="M 160 315 C 220 315, 220 200, 270 200" stroke="#fbbf24" strokeWidth="2" strokeDasharray="4 4" />

                {/* Connexion Scraper -> Minio Bronze */}
                <path d="M 390 190 C 430 190, 430 190, 450 190" stroke="#fbbf24" strokeWidth="2" />

                {/* Connexion Scraper -> Kafka (plus bas) */}
                <path d="M 350 215 C 380 340, 410 370, 450 370" stroke="#fbbf24" strokeWidth="2" strokeDasharray="4 4" />

                {/* Data Lake Minio Interne */}
                <path d="M 570 190 C 600 190, 600 190, 620 190" stroke="#fbbf24" strokeWidth="2" />
                <path d="M 730 190 C 760 190, 760 190, 790 190" stroke="#fbbf24" strokeWidth="2" />

                {/* Sorties Data Lake vers Postgres & Streamlit */}
                <path d="M 900 170 C 940 90, 960 90, 1000 90" stroke="#fbbf24" strokeWidth="2" />
                <path d="M 900 210 C 940 290, 960 290, 1000 290" stroke="#fbbf24" strokeWidth="2" strokeDasharray="4 4" />

                {/* Connexion Kafka -> Alertes (en bas) */}
                <path d="M 570 370 C 630 370, 650 370, 690 370" stroke="#fbbf24" strokeWidth="2" strokeDasharray="4 4" />

                {/* Étiquettes sur les liens */}
                <foreignObject x="195" y="215" width="70" height="24"><div className="bg-[#0f172a] text-amber-400 font-mono text-[9px] font-bold px-1.5 py-0.5 rounded border border-amber-500/40 text-center uppercase">HORAIRE</div></foreignObject>
                <foreignObject x="575" y="170" width="50" height="24"><div className="bg-[#0f172a] text-amber-400 font-mono text-[9px] font-bold px-1.5 py-0.5 rounded border border-amber-500/40 text-center">PANDAS</div></foreignObject>
                <foreignObject x="735" y="170" width="50" height="24"><div className="bg-[#0f172a] text-amber-400 font-mono text-[9px] font-bold px-1.5 py-0.5 rounded border border-amber-500/40 text-center">AGRÈGE</div></foreignObject>
                <foreignObject x="925" y="125" width="60" height="24"><div className="bg-[#0f172a] text-amber-400 font-mono text-[9px] font-bold px-1 py-0.5 rounded border border-amber-500/40 text-center">UPSERT</div></foreignObject>

                {/* Boîte englobante DATA LAKE MINIO */}
                <rect x="430" y="105" width="480" height="170" rx="16" stroke="#60a5fa" strokeWidth="1.5" strokeDasharray="6 6" fill="rgba(30, 58, 138, 0.2)" />
                <text x="450" y="128" fill="#60a5fa" fontFamily="monospace" fontSize="10" fontWeight="bold">DATA LAKE MINIO</text>

                {/* Nœuds - Colonne 1 : Entrées */}
                <foreignObject x="30" y="25" width="130" height="65"><div className="rounded-xl bg-[#1e293b] border border-blue-400/30 p-2.5 shadow-lg text-white"><p className="text-[11px] font-bold text-amber-400">🌐 Jumia</p><p className="text-[9px] text-slate-300">fiches produits</p></div></foreignObject>
                <foreignObject x="30" y="150" width="130" height="65"><div className="rounded-xl bg-[#1e293b] border border-blue-400/30 p-2.5 shadow-lg text-white"><p className="text-[11px] font-bold text-amber-400">🌐 MarjaneMall</p><p className="text-[9px] text-slate-300">fiches produits</p></div></foreignObject>
                <foreignObject x="30" y="275" width="130" height="65"><div className="rounded-xl bg-[#1e293b] border border-blue-400/30 p-2.5 shadow-lg text-white"><p className="text-[11px] font-bold text-amber-400">⏰ Airflow</p><p className="text-[9px] text-slate-300">relance la chaîne</p></div></foreignObject>

                {/* Nœud Scraper */}
                <foreignObject x="270" y="145" width="120" height="85"><div className="rounded-xl bg-[#1e293b] border border-blue-400/40 p-3 shadow-lg text-white"><p className="text-[11px] font-bold text-amber-400">⛏️ Scraper</p><p className="text-[9px] text-slate-300 mt-1">nom, prix, catégorie</p></div></foreignObject>

                {/* Nœuds Data Lake (Bronze, Silver, Gold) */}
                <foreignObject x="450" y="145" width="120" height="110"><div className="rounded-xl bg-[#1e293b] border border-blue-400/40 p-3 shadow-lg text-white"><p className="text-[11px] font-bold text-amber-400">🗄️ Bronze</p><p className="text-[9px] text-slate-300 mt-1">lignes brutes</p></div></foreignObject>
                <foreignObject x="620" y="145" width="110" height="110"><div className="rounded-xl bg-[#1e293b] border border-blue-400/40 p-3 shadow-lg text-white"><p className="text-[11px] font-bold text-amber-400">✨ Silver</p><p className="text-[9px] text-slate-300 mt-1">nettoyé, dédoublonné</p></div></foreignObject>
                <foreignObject x="790" y="145" width="110" height="110"><div className="rounded-xl bg-[#1e293b] border border-blue-400/40 p-3 shadow-lg text-white"><p className="text-[11px] font-bold text-amber-400">🏆 Gold</p><p className="text-[9px] text-slate-300 mt-1">stats de prix</p></div></foreignObject>

                {/* Sorties droites */}
                <foreignObject x="1000" y="55" width="130" height="75"><div className="rounded-xl bg-[#1e293b] border border-blue-400/30 p-2.5 shadow-lg text-white"><p className="text-[11px] font-bold text-amber-400">🗄️ PostgreSQL</p><p className="text-[9px] text-slate-300">historique quotidien</p></div></foreignObject>
                <foreignObject x="1000" y="255" width="130" height="75"><div className="rounded-xl bg-[#1e293b] border border-blue-400/30 p-2.5 shadow-lg text-white"><p className="text-[11px] font-bold text-amber-400">📊 Streamlit</p><p className="text-[9px] text-slate-300">tableau de bord prix</p></div></foreignObject>

                {/* Kafka et Alertes positionnés plus bas (y = 320 à 340) */}
                <foreignObject x="450" y="325" width="120" height="85"><div className="rounded-xl bg-[#1e293b] border border-blue-400/30 p-3 shadow-lg text-white"><p className="text-[11px] font-bold text-amber-400">⚡ Kafka</p><p className="text-[9px] text-slate-300">événements produits</p></div></foreignObject>
                <foreignObject x="690" y="325" width="120" height="85"><div className="rounded-xl bg-[#1e293b] border border-blue-400/30 p-3 shadow-lg text-white"><p className="text-[11px] font-bold text-amber-400">🔔 Alertes</p><p className="text-[9px] text-slate-300">affichées au client</p></div></foreignObject>
              </svg>
            </div>
          </motion.div>
        )}

        {/* ── SOPHIA SVG Vector Graph ── */}
        {slug === "sophia" && (
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="mt-12 overflow-x-auto rounded-3xl border border-blue-500/30 bg-[#0c1b40] p-6 text-white shadow-2xl md:p-10 relative">
            <div className="absolute inset-0 bg-[radial-gradient(#1e3a8a_1px,transparent_1px)] [background-size:24px_24px] opacity-25 pointer-events-none" />
            <div className="flex items-center justify-between border-b border-blue-400/20 pb-4 mb-6 relative z-10">
              <div className="flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30"><Sparkles size={18} /></span>
                <div>
                  <h2 className="display text-sm font-bold uppercase tracking-wider text-white">S.O.P.H.I.A — Architecture Multi-Agents & Pipeline Vocal</h2>
                  <p className="mono text-[10px] text-amber-400">Interactive SVG Flow Diagram</p>
                </div>
              </div>
              <span className="mono inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3 py-1 text-[11px] font-semibold text-emerald-400 border border-emerald-500/20">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" /> Production Ready
              </span>
            </div>
            <div className="relative min-w-[960px] py-4 z-10">
              <svg className="w-full h-[320px]" viewBox="0 0 960 320" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M 120 70 C 180 70, 180 70, 240 70" stroke="#fbbf24" strokeWidth="2" />
                <path d="M 350 70 C 400 70, 400 160, 450 160" stroke="#fbbf24" strokeWidth="2" />
                <path d="M 560 160 C 620 160, 620 70, 680 70" stroke="#fbbf24" strokeWidth="2" />
                <path d="M 790 70 C 825 70, 825 70, 850 70" stroke="#fbbf24" strokeWidth="2" />
                <path d="M 790 70 C 825 200, 825 200, 850 200" stroke="#fbbf24" strokeWidth="2" strokeDasharray="4 4" />
                <foreignObject x="20" y="40" width="100" height="60"><div className="rounded-xl bg-[#1e293b] border border-blue-400/30 p-2.5 shadow-lg text-white text-center"><p className="text-[11px] font-bold text-amber-400">🎙️ Voix</p></div></foreignObject>
                <foreignObject x="240" y="40" width="110" height="60"><div className="rounded-xl bg-[#1e293b] border border-blue-400/30 p-2.5 shadow-lg text-white text-center"><p className="text-[11px] font-bold text-amber-400">⚡ Routeur</p></div></foreignObject>
                <foreignObject x="450" y="110" width="110" height="100"><div className="rounded-xl bg-[#1e293b] border border-blue-400/40 p-2.5 shadow-lg text-white text-center"><p className="text-[10px] font-bold text-amber-400">Agents Spécialisés</p><p className="text-[9px] text-slate-300 mt-1">Système · RAG · Calcul · Dialogue</p></div></foreignObject>
                <foreignObject x="680" y="40" width="110" height="60"><div className="rounded-xl bg-[#1e293b] border border-blue-400/30 p-2.5 shadow-lg text-white text-center"><p className="text-[11px] font-bold text-amber-400">✍️ Rédacteur</p></div></foreignObject>
                <foreignObject x="850" y="40" width="95" height="60"><div className="rounded-xl bg-[#1e293b] border border-blue-400/30 p-2 shadow-lg text-white text-center"><p className="text-[10px] font-bold text-amber-400">🔊 Voix Clonée</p></div></foreignObject>
                <foreignObject x="850" y="170" width="95" height="60"><div className="rounded-xl bg-[#1e293b] border border-blue-400/30 p-2 shadow-lg text-white text-center"><p className="text-[10px] font-bold text-amber-400">🖥️ Avatar 3D</p></div></foreignObject>
              </svg>
            </div>
          </motion.div>
        )}

        {/* ── 4 OTHER PROJECTS (Clean Black/Cyan Design) ── */}
        {slug !== "naxus" && slug !== "sophia" && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-12 overflow-hidden rounded-3xl border border-cyan-500/20 bg-[#070b18] p-6 text-white shadow-2xl md:p-10 relative"
          >
            <div className="absolute top-0 right-0 -mt-12 -mr-12 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />

            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-8">
              <div className="flex items-center gap-2.5">
                <span className="grid h-8 w-8 place-items-center rounded-xl bg-cyan-500/20 text-cyan-400">
                  <Sparkles size={16} />
                </span>
                <h2 className="mono text-xs font-bold uppercase tracking-widest text-white/90">
                  {en ? "Architecture & Technical Workflow" : "Architecture & Flux Technique"}
                </h2>
              </div>
              <span className="mono text-[11px] text-cyan-400 animate-pulse">● verified architecture</span>
            </div>

            {/* GUELYA-TIME */}
            {slug === "guelya-time" && (
              <div className="flex flex-col items-center space-y-4 relative">
                <div className="w-full max-w-md rounded-2xl border border-cyan-500/40 bg-cyan-950/30 p-4 text-center">
                  <span className="mono text-[10px] text-cyan-400 font-bold uppercase tracking-widest">Client Lourd</span>
                  <p className="display text-base font-bold mt-1 text-white">🖥️ Interface JavaFX & FXML</p>
                </div>
                <ChevronDown size={18} className="text-cyan-400 animate-bounce" />
                <div className="w-full max-w-md rounded-2xl border border-cyan-500/40 bg-cyan-950/30 p-4 text-center">
                  <span className="mono text-[10px] text-cyan-400 font-bold uppercase tracking-widest">Contrôleur</span>
                  <p className="display text-base font-bold mt-1 text-white">⚙️ Contrôleurs JavaFX (MVC)</p>
                </div>
                <ChevronDown size={18} className="text-cyan-400 animate-bounce" />
                <div className="w-full max-w-md rounded-2xl border border-cyan-500/40 bg-cyan-950/30 p-4 text-center">
                  <span className="mono text-[10px] text-cyan-400 font-bold uppercase tracking-widest">Métier</span>
                  <p className="display text-base font-bold mt-1 text-white">🧠 Services & Moteur Hybride</p>
                </div>
                <ChevronDown size={18} className="text-cyan-400 animate-bounce" />
                <div className="w-full max-w-md rounded-2xl border border-cyan-500/40 bg-cyan-950/30 p-4 text-center">
                  <span className="mono text-[10px] text-cyan-400 font-bold uppercase tracking-widest">Données</span>
                  <p className="display text-base font-bold mt-1 text-white">🗄️ DAO Neo4j (Requêtes Cypher)</p>
                </div>
              </div>
            )}

            {/* PIKALTY */}
            {slug === "pikalty" && (
              <div className="flex flex-col items-center space-y-4 relative">
                <div className="w-full max-w-md rounded-2xl border border-cyan-500/40 bg-cyan-950/30 p-4 text-center">
                  <span className="mono text-[10px] text-cyan-400 font-bold uppercase tracking-widest">Frontend Mobile</span>
                  <p className="display text-base font-bold mt-1 text-white">📱 React Native & Expo</p>
                </div>
                <ChevronDown size={18} className="text-cyan-400 animate-bounce" />
                <div className="w-full max-w-md rounded-2xl border border-cyan-500/40 bg-cyan-950/30 p-4 text-center">
                  <span className="mono text-[10px] text-cyan-400 font-bold uppercase tracking-widest">Backend API</span>
                  <p className="display text-base font-bold mt-1 text-white">⚡ Node.js & Express (JWT)</p>
                </div>
                <ChevronDown size={18} className="text-cyan-400 animate-bounce" />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                  <div className="rounded-2xl border border-cyan-500/40 bg-cyan-950/30 p-4 text-center">
                    <span className="mono text-[10px] text-cyan-400 uppercase">Persistance</span>
                    <p className="display text-sm font-bold mt-1 text-white">🗄️ Base de données MySQL</p>
                  </div>
                  <div className="rounded-2xl border border-cyan-500/40 bg-cyan-950/30 p-4 text-center">
                    <span className="mono text-[10px] text-cyan-400 uppercase">IA Externe</span>
                    <p className="display text-sm font-bold mt-1 text-white">✨ Google Gemini AI Chatbot</p>
                  </div>
                </div>
              </div>
            )}

            {/* WIJEWELRY SHOP */}
            {slug === "wijewelry-shop" && (
              <div className="flex flex-col items-center space-y-4 relative">
                <div className="w-full max-w-md rounded-2xl border border-cyan-500/40 bg-cyan-950/30 p-4 text-center">
                  <span className="mono text-[10px] text-cyan-400 font-bold uppercase tracking-widest">Client Web</span>
                  <p className="display text-base font-bold mt-1 text-white">🌐 Navigateur (HTML / CSS / JS)</p>
                </div>
                <ChevronDown size={18} className="text-cyan-400 animate-bounce" />
                <div className="w-full max-w-md rounded-2xl border border-cyan-500/40 bg-cyan-950/30 p-4 text-center">
                  <span className="mono text-[10px] text-cyan-400 font-bold uppercase tracking-widest">Serveur & Logique</span>
                  <p className="display text-base font-bold mt-1 text-white">⚙️ Serveur Web & Scripts PHP</p>
                </div>
                <ChevronDown size={18} className="text-cyan-400 animate-bounce" />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                  <div className="rounded-2xl border border-cyan-500/40 bg-cyan-950/30 p-4 text-center">
                    <span className="mono text-[10px] text-cyan-400 uppercase">Données</span>
                    <p className="display text-sm font-bold mt-1 text-white">🗄️ Base de données MySQL</p>
                  </div>
                  <div className="rounded-2xl border border-cyan-500/40 bg-cyan-950/30 p-4 text-center">
                    <span className="mono text-[10px] text-cyan-400 uppercase">Administration</span>
                    <p className="display text-sm font-bold mt-1 text-white">🔐 Panel Webmaster & CRUD</p>
                  </div>
                </div>
              </div>
            )}

            {/* E-REPUTATION CIGMA */}
            {slug === "e-reputation-cigma" && (
              <div className="flex flex-col items-center space-y-4 relative">
                <div className="w-full max-w-md rounded-2xl border border-cyan-500/40 bg-cyan-950/30 p-4 text-center">
                  <span className="mono text-[10px] text-cyan-400 font-bold uppercase tracking-widest">Phase 01 · Collecte</span>
                  <p className="display text-base font-bold mt-1 text-white">📊 Sources (Réseaux, Web, Avis)</p>
                </div>
                <ChevronDown size={18} className="text-cyan-400 animate-bounce" />
                <div className="w-full max-w-md rounded-2xl border border-cyan-500/40 bg-cyan-950/30 p-4 text-center">
                  <span className="mono text-[10px] text-cyan-400 font-bold uppercase tracking-widest">Phase 02 · Traitement</span>
                  <p className="display text-base font-bold mt-1 text-white">📋 Consolidation Excel & Sentiments</p>
                </div>
                <ChevronDown size={18} className="text-cyan-400 animate-bounce" />
                <div className="w-full max-w-md rounded-2xl border border-cyan-500/40 bg-cyan-950/30 p-4 text-center">
                  <span className="mono text-[10px] text-cyan-400 font-bold uppercase tracking-widest">Phase 03 · Visualisation</span>
                  <p className="display text-base font-bold mt-1 text-white">📈 Dashboards Power BI & SWOT</p>
                </div>
                <ChevronDown size={18} className="text-cyan-400 animate-bounce" />
                <div className="w-full max-w-md rounded-2xl border border-cyan-500/40 bg-cyan-950/30 p-4 text-center">
                  <span className="mono text-[10px] text-cyan-400 font-bold uppercase tracking-widest">Phase 04 · Stratégie</span>
                  <p className="display text-base font-bold mt-1 text-white">🎯 Recommandations & Plan de Crise</p>
                </div>
              </div>
            )}
          </motion.div>
        )}

        {/* Metrics & Evaluation */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-10 grid gap-6 md:grid-cols-[1fr_.38fr]"
        >
          <div className="creative-card p-6 md:p-8">
            <h3 className="display text-lg font-extrabold">
              {en ? "Validation & Performance" : "Validation & Performance"}
            </h3>
            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
              {en ? "Measured and tested across benchmark datasets." : "Mesuré et testé sur des jeux de données de référence."}
            </p>

            <div className="mt-6 space-y-5">
              {project.metrics.bars.map((bar) => (
                <div key={bar.label[language]}>
                  <div className="flex justify-between text-xs font-semibold">
                    <span>{bar.label[language]}</span>
                    <span className="mono text-cyan-600 dark:text-cyan-400">{bar.value}%</span>
                  </div>
                  <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-100 dark:bg-white/10">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${bar.value}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className="h-full rounded-full bg-cyan-500"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-between gap-4">
            {project.metrics.highlights.map((h, i) => (
              <div key={i} className="creative-card flex items-center gap-4 !p-5">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
                  <CheckCircle2 size={20} />
                </span>
                <div>
                  <p className="display text-xl font-extrabold">{h.value}</p>
                  <p className="mono text-[11px] font-bold uppercase tracking-wider text-slate-500">{h.label[language]}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Action buttons footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-slate-200/70 bg-white/80 p-6 backdrop-blur dark:border-white/10 dark:bg-slate-900/80 md:p-8"
        >
          <div>
            <p className="mono text-xs font-bold uppercase tracking-widest text-slate-400">Source code</p>
            <p className="mt-1 text-sm font-semibold">{en ? "Explore the repository on GitHub" : "Explorez le dépôt sur GitHub"}</p>
          </div>
          <div className="flex gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="action-button"
            >
              <GithubIcon size={16} /> GitHub <ExternalLink size={14} />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
