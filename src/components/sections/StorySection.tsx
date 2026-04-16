"use client";

import { useTranslation } from "@/app/TranslationProvider";

export default function StorySection() {
  const { t } = useTranslation();

  return (
    <section className="bg-surface-container-low py-32 px-8" id="story">
      <div className="max-w-2xl mx-auto">
        <span className="text-primary text-xs font-bold tracking-[0.4em] uppercase mb-6 block">
          {t("story.origins")}
        </span>
        <h2 className="font-headline text-5xl md:text-6xl italic mb-12">
          {t("story.title")}
        </h2>

        <div className="space-y-8 text-on-surface-variant leading-relaxed">
          <p className="text-lg">
            {t("story.p1")}
          </p>

          <p className="text-lg">
            {t("story.p2")}
          </p>

          <p className="text-lg">
            {t("story.p3")}
          </p>

          <p className="text-lg italic border-l-2 border-secondary pl-6 py-4">
            {t("story.p4")}
          </p>

          <p className="text-lg">
            {t("story.p5")}
          </p>
        </div>

        <div className="mt-16 pt-8 border-t border-outline-variant/10">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-3xl font-headline text-primary mb-2">2023</p>
              <p className="text-sm text-on-surface-variant">{t("story.yearFounded")}</p>
            </div>
            <div>
              <p className="text-3xl font-headline text-primary mb-2">20+</p>
              <p className="text-sm text-on-surface-variant">{t("story.yearsExperience")}</p>
            </div>
            <div>
              <p className="text-3xl font-headline text-primary mb-2">100%</p>
              <p className="text-sm text-on-surface-variant">{t("story.localSourcing")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
