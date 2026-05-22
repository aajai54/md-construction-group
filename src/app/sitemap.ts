import type { MetadataRoute } from "next";
import { baseURL } from "@/config";
import { locales, withLocale } from "@/i18n/locales";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/docs", "/testimonial", "/enquiry"];

  return locales.flatMap((locale) =>
    routes.map((route) => ({
      url: `${baseURL}${withLocale(locale, route)}`,
      lastModified: new Date(),
    })),
  );
}
