"use client";

import Image from "next/image";
import { useTranslation } from "@/app/TranslationProvider";

const reviews = [
  {
    textKey: "reviews.review1",
    author: "Maria S.",
    authorKey: "reviews.author1",
    title: "Travel Blogger",
    titleKey: "reviews.title1",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
  },
  {
    textKey: "reviews.review2",
    author: "James K.",
    authorKey: "reviews.author2",
    title: "Food Critic",
    titleKey: "reviews.title2",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
  },
  {
    textKey: "reviews.review3",
    author: "Ana P.",
    authorKey: "reviews.author3",
    title: "Lifestyle Magazine",
    titleKey: "reviews.title3",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
  },
  {
    textKey: "reviews.review4",
    author: "Carlos M.",
    authorKey: "reviews.author4",
    title: "Local Entrepreneur",
    titleKey: "reviews.title4",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
  },
];

export default function ReviewsSection() {
  const { t } = useTranslation();

  return (
    <section className="bg-surface-container-low py-32 px-8" id="reviews">
      <div className="max-w-screen-2xl mx-auto">
        <div className="mb-16">
          <span className="text-primary text-xs font-bold tracking-[0.4em] uppercase mb-2 block">
            {t("reviews.voices")}
          </span>
          <h2 className="font-headline text-4xl md:text-5xl italic">
            {t("reviews.whatTheySay")}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reviews.map((review, idx) => (
            <div
              key={idx}
              className="bg-surface-container-high p-8 rounded-lg border border-outline-variant/10 hover:border-primary/30 transition-all flex flex-col"
            >
              {/* Quote Mark */}
              <span className="text-secondary text-5xl font-headline leading-none mb-4">
                &ldquo;
              </span>

              {/* Review Text */}
              <p className="text-on-surface italic mb-6 flex-grow leading-relaxed">
                {t(review.textKey)}
              </p>

              {/* Author Info */}
              <div className="pt-6 border-t border-outline-variant/10">
                <div className="flex items-center gap-3">
                  <Image
                    src={review.image}
                    alt={t(review.authorKey)}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div>
                    <p className="font-headline font-bold text-sm">
                      {t(review.authorKey)}
                    </p>
                    <p className="text-on-surface-variant text-xs">
                      {t(review.titleKey)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
