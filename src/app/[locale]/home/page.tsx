import LandingPage from "@/app/LandingPage";
import { isLocale, type Locale } from "@/i18n/locales";
import { notFound } from "next/navigation";

export default function LocalizedHomeAliasPage({
  params,
}: {
  params: { locale: string };
}) {
  if (!isLocale(params.locale)) {
    notFound();
  }

  return <LandingPage locale={params.locale as Locale} />;
}
