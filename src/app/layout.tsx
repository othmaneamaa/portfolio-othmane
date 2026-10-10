import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { LanguageProvider } from "@/components/LanguageProvider";
import Sidebar from "@/components/Sidebar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const space = Space_Grotesk({ subsets: ["latin"], variable: "--font-space", display: "swap" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains", display: "swap" });

export const metadata: Metadata = {
  title: "Othmane Amaadour — AI & Data Engineer",
  description:
    "Portfolio d'Othmane Amaadour, étudiant ingénieur en IA & Data : agents LLM, pipelines data, full-stack. Disponible pour un stage PFE.",
  openGraph: {
    title: "Othmane Amaadour — AI & Data Engineer",
    description: "Agents LLM · Pipelines Data · Full-Stack. Je transforme la donnée en produits utiles.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${space.variable} ${jetbrains.variable} font-sans antialiased bg-[#f8fbff] text-slate-900 dark:bg-[#070b18] dark:text-slate-100`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <LanguageProvider>
            <Sidebar />
            <main className="min-h-screen pt-16 lg:ml-72 lg:pt-0">{children}</main>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
