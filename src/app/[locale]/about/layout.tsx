import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { siteName } from "@/config";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "About" });

  return {
    title: `${t("meta")} | ${siteName}`,
    description:
      locale === "ta"
        ? "MD Construction பற்றிய தகவல், எங்கள் அணுகுமுறை, தர உறுதி மற்றும் அனுபவமிக்க கட்டுமான சேவைகள்."
        : "End-to-end construction services by MD Construction with transparent planning, quality-first execution, and on-time delivery.",
    keywords:
      locale === "ta"
        ? [
            "MD Construction",
            "கட்டுமான நிறுவனம்",
            "வீட்டு கட்டுமானம்",
            "வணிக கட்டுமானம்",
            "தமிழ்நாடு பில்டர்ஸ்",
          ]
        : [
            "MD Construction",
            "MD Constructions",
            "MD Construction group",
            "MD Construction groups",
            "construction company chennai",
            "best construction company chennai",
            "best construction company in Tamil Nadu",
            "residential builders chennai",
            "commercial project contractors chennai",
            "Chennai construction services",
            "Tamil Nadu construction services",
          ],
  };
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children; // no wrapper needed
}