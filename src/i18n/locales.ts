export const locales = ["en", "ta"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function withLocale(locale: Locale, path = ""): string {
  if (!path || path === "/") {
    return `/${locale}`;
  }

  if (path.startsWith("/#")) {
    return `/${locale}${path.slice(1)}`;
  }

  if (path.startsWith("#")) {
    return `/${locale}${path}`;
  }

  if (path.startsWith("/")) {
    return `/${locale}${path}`;
  }

  return `/${locale}/${path}`;
}

export function getLocaleFromPathname(pathname: string): Locale {
  const [, maybeLocale] = pathname.split("/");
  if (maybeLocale && isLocale(maybeLocale)) {
    return maybeLocale;
  }
  return defaultLocale;
}

export function swapLocaleInPathname(pathname: string, nextLocale: Locale): string {
  const segments = pathname.split("/").filter(Boolean);

  if (segments.length && isLocale(segments[0])) {
    segments[0] = nextLocale;
    return `/${segments.join("/")}`;
  }

  const normalized = pathname === "/" ? "" : pathname;
  return withLocale(nextLocale, normalized);
}
