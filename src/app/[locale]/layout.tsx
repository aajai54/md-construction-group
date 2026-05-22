import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { baseURL, siteName } from "@/config";
import { getMessages } from "@/i18n/messages";
import { isLocale, locales, type Locale, withLocale } from "@/i18n/locales";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const awaitedParams = await params;
  if (!isLocale(awaitedParams.locale)) {
    return {};
  }

  const locale = awaitedParams.locale;
  const messages = getMessages(locale);
  const canonical = withLocale(locale);

  return {
    title: messages.metadata.title,
    description: messages.metadata.description,
    metadataBase: new URL(baseURL),
    alternates: {
      canonical,
      languages: {
        en: withLocale("en"),
        ta: withLocale("ta"),
      },
    },
    openGraph: {
      title: messages.metadata.title,
      description: messages.metadata.description,
      siteName,
      url: canonical,
      images: [
        {
          url: `/api/og?locale=${locale}`,
          alt: `${siteName} Open Graph Image`,
        },
      ],
    },
  };
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!isLocale(params.locale)) {
    notFound();
  }

  const locale: Locale = params.locale;

  return (
    <>
      <Header locale={locale} />
      {children}
      <Footer locale={locale} />
    </>
  );
}
