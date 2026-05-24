"use client";

import { useTranslations } from "next-intl";
import ScrollTagger from "@/components/ScrollTagger";
import CheckIcon from "@/components/CheckIcon";

export default function AboutPage() {
  const t = useTranslations("About");
  const benefits = t.raw("benefits.items") as string[];

  return (
    <main className="min-h-screen">
      <ScrollTagger />

      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 py-20">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-5 lg:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {t("hero.title")}
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            {t("hero.subtitle")}
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-5 lg:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                {t("mission.title")}
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                {t("mission.p1")}
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                {t("mission.p2")}
              </p>
            </div>

            {/* Benefits */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                {t("benefits.title")}
              </h3>
              <ul className="space-y-4">
                {benefits.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckIcon />
                    <span className="text-gray-700 dark:text-gray-300">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}