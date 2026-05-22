import About from "@/app/about/page";
import { isLocale, type Locale } from "@/i18n/locales";
import { notFound } from "next/navigation";

export default function LocalizedAboutPage({
  params,
}: {
  params: { locale: string };
}) {
  if (!isLocale(params.locale)) {
    notFound();
  }

  return <About locale={params.locale as Locale} />;
}
