"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Award, Briefcase, FolderGit2, Home, Mail, Menu, Moon, User, Wrench, X, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useLanguage } from "@/components/LanguageProvider";

const navItems = [
  { href: "/", labels: { en: "Home", fr: "Accueil" }, icon: Home },
  { href: "/about", labels: { en: "About", fr: "À propos" }, icon: User },
  { href: "/skills", labels: { en: "Skills", fr: "Compétences" }, icon: Wrench },
  { href: "/experience", labels: { en: "Experience", fr: "Expériences" }, icon: Briefcase },
  { href: "/projects", labels: { en: "Projects", fr: "Projets" }, icon: FolderGit2 },
  { href: "/certifications", labels: { en: "Certifications", fr: "Certifications" }, icon: Award },
  { href: "/contact", labels: { en: "Contact", fr: "Contact" }, icon: Mail },
];

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const { language, setLanguage } = useLanguage();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const timer = window.setTimeout(() => setMounted(true), 0);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    setActiveSection(pathname);
  }, [pathname]);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");
  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    router.push(href);
  };

  const navigation = (mobile = false) => (
    <nav className={`flex ${mobile ? "flex-col gap-2" : "flex-col gap-2 flex-1"}`}>
      {navItems.map(({ href, labels, icon: Icon }) => (
        <button key={href} onClick={() => handleNavClick(href)} className={`flex items-center gap-4 rounded-xl p-3 text-left transition-colors ${activeSection === href ? "bg-blue-50 font-semibold text-blue-600 dark:bg-blue-900/20 dark:text-blue-400" : "text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"}`}>
          <Icon size={20} />
          <span>{labels[language]}</span>
        </button>
      ))}
    </nav>
  );

  return (
    <>
      <div className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between border-b border-gray-200 bg-white/80 p-4 backdrop-blur-md dark:border-gray-800 dark:bg-gray-900/80 lg:hidden">
        <h1 className="text-xl font-bold">Portfolio</h1>
        <div className="flex items-center gap-2">
          {mounted && <button aria-label="Changer de thème" onClick={toggleTheme} className="rounded-full bg-gray-100 p-2 dark:bg-gray-800">{theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}</button>}
          <button aria-label="Ouvrir le menu" onClick={() => setIsMobileMenuOpen((open) => !open)} className="p-2">{isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}</button>
        </div>
      </div>
      {isMobileMenuOpen && <div className="fixed inset-0 z-40 bg-white px-6 pt-20 dark:bg-gray-900 lg:hidden"><div className="mb-5 flex gap-2">{(["en", "fr"] as const).map((option) => <button key={option} onClick={() => setLanguage(option)} className={`flex-1 rounded-lg px-3 py-2 text-xs font-bold uppercase ${language === option ? "bg-cyan-500 text-white" : "bg-gray-100 text-gray-500 dark:bg-gray-800"}`}>{option}</button>)}</div>{navigation(true)}</div>}
      <aside className="fixed left-0 top-0 z-50 hidden h-screen w-64 flex-col border-r border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900 lg:flex">
        <div className="mb-10"><h1 className="text-2xl font-bold">Othmane A.</h1><p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Portfolio</p></div>
        {navigation()}
        <div className="mt-auto border-t border-gray-200 pt-6 dark:border-gray-800">
          <div className="mb-3 flex gap-2">
            {(["en", "fr"] as const).map((option) => <button key={option} onClick={() => setLanguage(option)} className={`flex-1 rounded-lg px-3 py-2 text-xs font-bold uppercase transition-colors ${language === option ? "bg-cyan-500 text-white" : "bg-gray-100 text-gray-500 dark:bg-gray-800"}`}>{option}</button>)}
          </div>
          {mounted && <button onClick={toggleTheme} className="flex w-full items-center gap-3 rounded-xl p-3 text-gray-600 transition-colors hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800">{theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}<span>{theme === "dark" ? "Mode clair" : "Mode sombre"}</span></button>}
        </div>
      </aside>
    </>
  );
}
