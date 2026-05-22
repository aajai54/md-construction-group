import type { MetadataRoute } from "next";
import { baseURL } from "@/config";
import { locales, withLocale } from "@/i18n/locales";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  const localizedAllow = locales.flatMap((locale) => [
    withLocale(locale),
    withLocale(locale, "/about"),
    withLocale(locale, "/docs"),
    withLocale(locale, "/testimonial"),
    withLocale(locale, "/enquiry"),
  ]);

  return {
    rules: {
      userAgent: "*",
      allow: ["/", ...localizedAllow, "/api/og", "/icon", "/sitemap.xml"],
      disallow: ["/private/"],
    },
    sitemap: `${baseURL}/sitemap.xml`,
  };
}
