import EnquiryPage from "@/app/enquiry/page";
import { isLocale, type Locale } from "@/i18n/locales";
import { notFound } from "next/navigation";

export default function LocalizedEnquiryPage({
  params,
}: {
  params: { locale: string };
}) {
  if (!isLocale(params.locale)) {
    notFound();
  }

  return <EnquiryPage locale={params.locale as Locale} />;
}
