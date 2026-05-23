import type { MetadataRoute } from "next";
import { baseURL } from "@/config";

export const dynamic = "force-static";

const locales = ["en", "ta"];
const routes = ["", "/about", "/testimonial", "/enquiry"];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return locales.flatMap((locale) =>
    routes.map((route) => ({
      url: `${baseURL}/${locale}${route}`,
      lastModified,
    }))
  );
}
