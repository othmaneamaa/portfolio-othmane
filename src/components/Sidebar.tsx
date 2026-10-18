"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import {
  Award,
  Briefcase,
  Download,
  FolderGit2,
  Home,
  Mail,
  Menu,
  Moon,
  Sparkles,
  Sun,
  User,
  Wrench,
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { useLanguage } from "@/components/LanguageProvider";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

const navItems = [
  { href: "/", labels: { en: "Home", fr: "Accueil" }, icon: Home },
  { href: "/about", labels: { en: "About", fr: "À propos" }, icon: User },
  { href: "/skills", labels: { en: "Skills", fr: "Compétences" }, icon: Wrench },
  { href: "/experience", labels: { en: "Experience", fr: "Expériences" }, icon: Briefcase },
  { href: "/projects", labels: { en: "Projects", fr: "Projets" }, icon: FolderGit2 },
  { href: "/certifications", labels: { en: "Certifications", fr: "Certificats" }, icon: Award },
  { href: "/contact", labels: { en: "Contact", fr: "Contact" }, icon: Mail },
];

export default function Sidebar() {
  const [active, setActive] = useState("/");
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const { language, setLanguage } = useLanguage();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const t = window.setTimeout(() => setMounted(true), 0);
    return () => window.clearTimeout(t);
  }, []);
  useEffect(() => setActive(pathname), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const go = (href: string) => {
    setOpen(false);
    router.push(href);
  };

  const Nav = ({ onClick }: { onClick?: (h: string) => void }) => (
    <nav className="flex flex-col gap-1.5">
      {navItems.map(({ href, labels, icon: Icon }) => {
        const isActive = active === href;
        return (
          <button
            key={href}
            onClick={() => (onClick ? onClick(href) : go(href))}
            className={`group flex items-center gap-3.5 rounded-2xl px-3.5 py-3 text-[13.5px] font-medium tracking-[-.01em] transition-all ${isActive ? "nav-active" : "text-slate-500 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-white/[.06] dark:hover:text-white"}`}
          >
            <span className={`grid h-8 w-8 place-items-center rounded-xl transition-colors ${isActive ? "bg-white/15 text-white dark:bg-slate-900 dark:text-white" : "bg-slate-100 text-slate-500 group-hover:bg-white dark:bg-white/5 dark:text-slate-400"}`}>
              <Icon size={16} strokeWidth={isActive ? 2.4 : 2} />
            </span>
            {labels[language]}
            {isActive && <span className="ml-auto h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,.9)]" />}
          </button>
        );
      })}
    </nav>
  );

  return (
    <>
      {/* ── Mobile top bar ── */}
      <div className="fixed inset-x-0 top-0 z-50 flex items-center justify-between border-b border-slate-200/70 bg-white/80 px-4 py-3 backdrop-blur-xl dark:border-white/10 dark:bg-[#070b18]/70 lg:hidden">
        <button onClick={() => go("/")} className="flex items-center gap-3 text-left">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-slate-900 text-[13px] font-black tracking-tighter text-white dark:bg-white dark:text-slate-900">OA</span>
          <span>
            <span className="block text-[13px] font-bold leading-none tracking-tight">Othmane Amaadour</span>
            <span className="mono text-[10px] font-semibold uppercase tracking-[.14em] text-slate-400">AI & Data</span>
          </span>
        </button>
        <div className="flex items-center gap-1">
          {mounted && (
            <button aria-label="Toggle theme" onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="grid h-9 w-9 place-items-center rounded-xl bg-slate-100 dark:bg-white/10">
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          )}
          <button aria-label={open ? "Fermer" : "Menu"} onClick={() => setOpen((v) => !v)} className="grid h-9 w-9 place-items-center rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-900">
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {/* ── Mobile drawer ── */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setOpen(false)} className="fixed inset-0 z-40 bg-slate-900/30 backdrop-blur-sm lg:hidden" />
            <motion.div
              initial={{ x: "-100%" }} animate={{ x: 0 }} exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 260 }}
              className="fixed inset-y-0 left-0 z-40 flex w-[88%] max-w-[360px] flex-col bg-white p-6 pt-20 dark:bg-[#0b1020] lg:hidden"
            >
              <div className="mb-6 flex gap-2">
                {(["en", "fr"] as const).map((o) => (
                  <button key={o} onClick={() => setLanguage(o)} className={`mono flex-1 rounded-full px-3 py-2 text-xs font-bold uppercase tracking-widest ${language === o ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900" : "bg-slate-100 text-slate-500 dark:bg-white/10 dark:text-slate-400"}`}>{o}</button>
                ))}
              </div>
              <Nav onClick={go} />
              <div className="mt-auto flex items-center gap-3 border-t border-slate-100 pt-6 dark:border-white/10">
                <a href="https://github.com/othmaneamaa" target="_blank" rel="noopener noreferrer" className="grid h-9 w-9 place-items-center rounded-xl bg-slate-100 dark:bg-white/10"><GithubIcon size={16} /></a>
                <a href="https://www.linkedin.com/in/othmane-amaadour-8102a5251/" target="_blank" rel="noopener noreferrer" className="grid h-9 w-9 place-items-center rounded-xl bg-slate-100 dark:bg-white/10"><LinkedinIcon size={16} /></a>
                <a href="mailto:othmaneamaa@gmail.com" className="grid h-9 w-9 place-items-center rounded-xl bg-slate-100 dark:bg-white/10"><Mail size={16} /></a>
                <a href="/file.pdf" download aria-label="Download CV" className="grid h-9 w-9 place-items-center rounded-xl bg-slate-100 dark:bg-white/10"><Download size={16} /></a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* ── Desktop sidebar ── */}
      <aside className="fixed left-0 top-0 z-40 hidden h-screen w-72 flex-col border-r border-slate-200/60 bg-white/70 backdrop-blur-xl dark:border-white/[.07] dark:bg-[#0b1020]/60 lg:flex">
        {/* brand */}
        <div className="px-7 pb-6 pt-8">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-2xl bg-slate-900 text-sm font-black tracking-tighter text-white dark:bg-white dark:text-slate-900">OA</div>
            <div>
              <p className="display text-[15px] font-extrabold leading-none">Othmane Amaadour</p>
              <p className="mono mt-1 text-[10px] font-semibold uppercase tracking-[.16em] text-slate-400">Ingénieur IA & Data</p>
            </div>
          </div>
          <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700 dark:border-emerald-900/40 dark:bg-emerald-950/40 dark:text-emerald-300">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
            Disponible · Stage PFE
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-4 pb-4">
          <p className="mono mb-3 px-3 text-[10px] font-bold uppercase tracking-[.18em] text-slate-400">Navigation</p>
          <Nav />
          <div className="mono mt-6 flex items-center gap-2 px-3 text-[10px] font-semibold uppercase tracking-[.14em] text-slate-400">
            <Sparkles size={12} className="text-cyan-500" /> Casablanca · Remote
          </div>
        </div>

        <div className="border-t border-slate-200/60 p-4 dark:border-white/[.07]">
          <div className="mb-3 flex gap-1.5 rounded-full bg-slate-100 p-1 dark:bg-white/[.06]">
            {(["en", "fr"] as const).map((o) => (
              <button key={o} onClick={() => setLanguage(o)} className={`mono flex-1 rounded-full py-1.5 text-[11px] font-bold uppercase tracking-widest transition ${language === o ? "bg-slate-900 text-white shadow dark:bg-white dark:text-slate-900" : "text-slate-500"}`}>{o}</button>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <a href="https://github.com/othmaneamaa" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="grid h-9 w-9 place-items-center rounded-xl border border-slate-200 bg-white text-slate-600 transition hover:border-slate-900 hover:text-slate-900 dark:border-white/10 dark:bg-white/5 dark:text-slate-300"><GithubIcon size={16} /></a>
              <a href="https://www.linkedin.com/in/othmane-amaadour-8102a5251/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="grid h-9 w-9 place-items-center rounded-xl border border-slate-200 bg-white text-slate-600 transition hover:border-slate-900 hover:text-slate-900 dark:border-white/10 dark:bg-white/5 dark:text-slate-300"><LinkedinIcon size={16} /></a>
              <a href="mailto:othmaneamaa@gmail.com" aria-label="Email" className="grid h-9 w-9 place-items-center rounded-xl border border-slate-200 bg-white text-slate-600 transition hover:border-slate-900 hover:text-slate-900 dark:border-white/10 dark:bg-white/5 dark:text-slate-300"><Mail size={16} /></a>
              <a href="/file.pdf" download aria-label="Download CV" className="grid h-9 w-9 place-items-center rounded-xl border border-slate-200 bg-white text-slate-600 transition hover:border-slate-900 hover:text-slate-900 dark:border-white/10 dark:bg-white/5 dark:text-slate-300"><Download size={16} /></a>
            </div>
            {mounted && (
              <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="ml-auto grid h-9 w-9 place-items-center rounded-xl border border-slate-200 bg-white text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300" aria-label="Toggle theme">
                {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
              </button>
            )}
          </div>
          <p className="mono mt-4 text-center text-[10px] uppercase tracking-[.14em] text-slate-400">© {new Date().getFullYear()} Othmane Amaadour</p>
        </div>
      </aside>
    </>
  );
}
