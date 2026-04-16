"use client";

import Image from "next/image";
import { useTranslation } from "@/app/TranslationProvider";

export default function ExperienceSection() {
  const { t } = useTranslation();

  return (
    <section className="bg-surface-container-low py-32 overflow-hidden" id="experience">
      <div className="max-w-screen-2xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
        <div className="relative">
          <div className="absolute -top-10 -left-10 w-40 h-40 border-t border-l border-secondary/30 hidden md:block"></div>
          <Image
            src="https://images.unsplash.com/photo-1580959375944-abd7e991f971?w=600&h=600&fit=crop"
            alt="Grilled Mozambican peri-peri prawns"
            width={500}
            height={600}
            className="rounded-lg shadow-2xl relative z-10"
          />
          <div className="absolute -bottom-10 -right-10 w-64 h-80 bg-surface-container-high -z-10 rounded-lg"></div>
        </div>

        <div>
          <span className="text-primary text-xs font-bold tracking-[0.4em] uppercase mb-6 block">
            {t("soulOfMozambique")}
          </span>
          <h2 className="font-headline text-5xl md:text-6xl mb-8 italic">
            {t("whereAfrica")}
            <br />
            {t("meetsTheSun")}
          </h2>
          <p className="text-on-surface-variant text-lg leading-relaxed mb-10">
            {t("experienceDesc")}
          </p>
          <ul className="space-y-6">
            <li className="flex items-start gap-4">
              <span className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0"></span>
              <div>
                <h4 className="font-headline text-xl mb-1">{t("periPeriSashimi")}</h4>
                <p className="text-on-surface-variant text-sm">
                  {t("periPeriDesc")}
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0"></span>
              <div>
                <h4 className="font-headline text-xl mb-1">
                  {t("bazarutoCrabCurry")}
                </h4>
                <p className="text-on-surface-variant text-sm">
                  {t("crabCurryDesc")}
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
