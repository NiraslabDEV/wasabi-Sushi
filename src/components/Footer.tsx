"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "@/app/TranslationProvider";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-surface w-full py-12 px-8">
      <div className="flex flex-col md:flex-row justify-between items-start gap-8 max-w-screen-2xl mx-auto border-t border-outline-variant/10 pt-16">
        <div className="space-y-6">
          <Image
            src="/logo_wasabi.jpeg"
            alt="WASABI Vilanculos Logo"
            width={32}
            height={32}
            className="h-8 w-auto grayscale"
          />
          <p className="text-on-surface-variant text-sm max-w-xs leading-relaxed">
            {t("elevatedDining")}
          </p>
          <div className="flex gap-4">
            <span className="material-symbols-outlined text-primary">
              location_on
            </span>
            <span className="font-body text-sm tracking-wide text-on-surface-variant">
              {t("avenida")}, {t("vilanculos")}
            </span>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
          <div>
            <h5 className="text-primary font-bold text-xs tracking-widest uppercase mb-6">
              {t("exploreMenu")}
            </h5>
            <ul className="space-y-4 font-body text-sm tracking-wide text-on-surface-variant">
              <li>
                <Link
                  href="#"
                  className="hover:text-primary transition-colors"
                >
                  {t("instagram")}
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-primary transition-colors"
                >
                  {t("facebook")}
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-primary transition-colors"
                >
                  {t("theStory")}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="text-primary font-bold text-xs tracking-widest uppercase mb-6">
              {t("reservations")}
            </h5>
            <ul className="space-y-4 font-body text-sm tracking-wide text-on-surface-variant">
              <li>
                <Link
                  href="#reservations"
                  className="hover:text-primary transition-colors"
                >
                  {t("bookATable")}
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-primary transition-colors"
                >
                  {t("privateEvents")}
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-primary transition-colors"
                >
                  {t("contactUs")}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="text-primary font-bold text-xs tracking-widest uppercase mb-6">
              {t("legal")}
            </h5>
            <ul className="space-y-4 font-body text-sm tracking-wide text-on-surface-variant">
              <li>
                <Link
                  href="#"
                  className="hover:text-primary transition-colors"
                >
                  {t("privacyPolicy")}
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-primary transition-colors"
                >
                  {t("termsService")}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="max-w-screen-2xl mx-auto mt-20 text-center md:text-left">
        <p className="font-body text-sm tracking-wide text-on-surface-variant opacity-60">
          {t("copyright")}
        </p>
      </div>
    </footer>
  );
}
