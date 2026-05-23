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
  };
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children; // no wrapper needed
}