"use client";

import Image from "next/image";
import { useTranslation } from "@/app/TranslationProvider";

export default function ChefSection() {
  const { t } = useTranslation();

  return (
    <section className="py-32 px-8 max-w-screen-2xl mx-auto" id="masters">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-primary text-xs font-bold tracking-[0.4em] uppercase mb-2 block">
            {t("theArtisan")}
          </span>
          <h2 className="font-headline text-5xl md:text-6xl italic mb-12">
            {t("theMasters")}
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="font-headline text-3xl mb-1">{t("chefTakeshi")}</h3>
              <p className="text-primary text-sm font-bold tracking-widest uppercase mb-4">
                {t("executiveChef")}
              </p>
              <p className="text-on-surface-variant leading-relaxed">
                {t("chefBio")}
              </p>
            </div>

            <div className="border-l-2 border-secondary pl-6 py-4">
              <p className="text-on-surface italic text-lg leading-relaxed">
                "{t("chefPhilosophy")}"
              </p>
              <p className="text-secondary text-sm font-headline mt-4">
                — {t("chefTakeshi")}
              </p>
            </div>

            <div>
              <h4 className="font-headline text-lg mb-3">{t("chefPhilosophyTitle")}</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0"></span>
                  <span className="text-on-surface-variant">{t("precisionMeets")}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0"></span>
                  <span className="text-on-surface-variant">{t("sustainableSourcing")}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0"></span>
                  <span className="text-on-surface-variant">{t("obsessiveAttention")}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="relative">
          <Image
            src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=600&h=700&fit=crop"
            alt="Chef Takeshi Yamamoto"
            width={500}
            height={600}
            className="rounded-lg shadow-2xl"
          />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-surface to-transparent rounded-lg"></div>
        </div>
      </div>
    </section>
  );
}
