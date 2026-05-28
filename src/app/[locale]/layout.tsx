import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { redirect } from "next/navigation";
import { GoogleAnalytics } from "@next/third-parties/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ContactCTA from "@/components/ContactCTA";
import HtmlLangSync from "@/components/HtmlLangSync";
import { baseURL, description, siteName, title } from "@/config";

const locales = ["en", "ta"];
const seoKeywords = [
  "construction company",
  "home builders",
  "commercial construction",
  "renovation services",
  "civil contractors",
  "building contractors in Tamil Nadu",
  "Chennai construction company",
  "turnkey construction services",
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
];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const resolvedLocale = locales.includes(locale) ? locale : "en";
  const canonicalUrl = `${baseURL}/${resolvedLocale}`;

  return {
    title,
    description,
    keywords: seoKeywords,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
    verification: {
      google: "3lWjNmepny8_UoQEhV_kfHXy4IqUHeOG-py2Q-r2zUg",
    },
    icons: {
      icon: "/icon?<generated>",
      shortcut: "/icon?<generated>",
      apple: "/icon?<generated>",
    },
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: `${baseURL}/en`,
        ta: `${baseURL}/ta`,
      },
    },
    metadataBase: new URL(baseURL),
    openGraph: {
      title,
      description,
      siteName,
      url: canonicalUrl,
      locale: resolvedLocale === "ta" ? "ta_IN" : "en_US",
      images: [
        {
          url: "/api/og",
          alt: `${siteName} Open Graph Image`,
        },
      ],
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!locales.includes(locale)) {
    redirect("/en");
  }

  // Ensure server components (e.g. page content) resolve translations by URL locale.
  setRequestLocale(locale);

  const messages = (await import(`../../messages/${locale}.json`)).default;

  return (
    <>
      <HtmlLangSync locale={locale} />

      <NextIntlClientProvider locale={locale} messages={messages}>
        <Header />
        {children}
        <ContactCTA />
        <Footer />
      </NextIntlClientProvider>

      {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID && (
        <GoogleAnalytics
          gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}
        />
      )}
    </>
  );
}