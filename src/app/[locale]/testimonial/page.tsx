import TestimonialsPage from "@/app/testimonial/page";
import { isLocale, type Locale } from "@/i18n/locales";
import { notFound } from "next/navigation";

export default function LocalizedTestimonialsPage({
  params,
}: {
  params: { locale: string };
}) {
  if (!isLocale(params.locale)) {
    notFound();
  }

  return <TestimonialsPage locale={params.locale as Locale} />;
}
