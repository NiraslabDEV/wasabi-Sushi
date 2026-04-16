"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "@/app/TranslationProvider";

export default function Navbar() {
  const { language, setLanguage, t } = useTranslation();

  return (
    <nav className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl shadow-2xl shadow-black/40">
      <div className="flex justify-between items-center px-8 py-4 w-full max-w-screen-2xl mx-auto">
        <div className="flex items-center gap-8">
          <Image
            src="/logo_wasabi.jpeg"
            alt="WASABI Vilanculos Logo"
            width={40}
            height={40}
            className="h-10 w-auto"
          />
          <div className="hidden md:flex gap-8 items-center font-headline tracking-tight">
            <Link
              href="#menu"
              className="text-on-surface/70 hover:text-primary transition-colors"
            >
              {t("menu")}
            </Link>
            <Link
              href="#experience"
              className="text-on-surface/70 hover:text-on-surface transition-colors"
            >
              {t("experience")}
            </Link>
            <Link
              href="#reservations"
              className="text-primary font-bold border-b-2 border-primary pb-1"
            >
              {t("reservations")}
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={() => setLanguage(language === "pt" ? "en" : "pt")}
            className="text-on-surface/70 hover:text-on-surface transition-colors text-sm font-medium tracking-widest"
          >
            {language === "pt" ? "PT/EN" : "EN/PT"}
          </button>
          <span className="material-symbols-outlined text-on-surface/70">
            language
          </span>
        </div>
      </div>
    </nav>
  );
}
