import { getRequestConfig } from "next-intl/server";

const locales = ["en", "ta"];
const defaultLocale = "en";

export default getRequestConfig(async ({ locale }) => {
  const resolvedLocale = locales.includes(locale as string)
    ? (locale as string)
    : defaultLocale;

  return {
    locale: resolvedLocale,
    messages: (await import(`../messages/${resolvedLocale}.json`)).default,
  };
});