import NotFound from "@/app/not-found";
import { isLocale, type Locale } from "@/i18n/locales";

export default function LocalizedNotFound({
  params,
}: {
  params: { locale?: string };
}) {
  const locale: Locale = isLocale(params?.locale ?? "") ? (params?.locale as Locale) : "en";
  return <NotFound locale={locale} />;
}
