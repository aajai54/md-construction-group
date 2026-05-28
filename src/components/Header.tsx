"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useTranslations, useLocale } from "next-intl";
import { consultationWhatsapp, siteName } from "@/config";

const supportedLocales = ["en", "ta"];

function getLocaleFromPath(pathname: string): string {
  const firstSegment = pathname.split("/").filter(Boolean)[0];
  return supportedLocales.includes(firstSegment) ? firstSegment : "en";
}

function normalizePath(path: string): string {
  if (!path) return "/";
  const [withoutHash] = path.split("#");
  if (withoutHash === "/") return "/";
  return withoutHash.replace(/\/+$/, "") || "/";
}

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeHref, setActiveHref] = useState("/en");

  const pathname = usePathname();
  const router = useRouter();
  const locale = getLocaleFromPath(pathname);
  const currentLocale = useLocale();
  const homePath = `/${locale}`;
  const normalizedPathname = normalizePath(pathname);
  const normalizedHomePath = normalizePath(homePath);
  const nextLocale = currentLocale === "en" ? "ta" : "en";
  const localeLabel = currentLocale === "en" ? "தமிழ்" : "EN";
  const t = useTranslations("Header");

  const bannerImageSrc = "/images/construction/logo.jpg";
  const whatsappLink = `https://wa.me/${consultationWhatsapp}`;

  const navigation = [
    { key: "home",        href: homePath },
    { key: "services",    href: `${homePath}#services` },
    { key: "contact",     href: `${homePath}#contact` },
    { key: "testimonial", href: `${homePath}/testimonial` },
    { key: "about",       href: `${homePath}/about` },
  ];

  const switchLocale = (newLocale: string) => {
    const newPath = pathname.replace(`/${currentLocale}`, `/${newLocale}`);
    router.push(newPath);
  };

  useEffect(() => {
    if (normalizedPathname !== normalizedHomePath) {
      setActiveHref(pathname);
      return;
    }

    const syncFromHashOrTop = () => {
      const hash = window.location.hash;
      if (hash === "#services") { setActiveHref(`${homePath}#services`); return; }
      if (hash === "#contact")  { setActiveHref(`${homePath}#contact`);  return; }
      if (window.scrollY < 140) setActiveHref(homePath);
    };

    const sectionToHref: Record<string, string> = {
      services: `${homePath}#services`,
      contact:  `${homePath}#contact`,
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (!visibleEntries.length) {
          if (window.scrollY < 140) setActiveHref(homePath);
          return;
        }

        const sectionId = (visibleEntries[0].target as HTMLElement).id;
        const nextHref = sectionToHref[sectionId];
        if (nextHref) setActiveHref(nextHref);
      },
      { threshold: [0.15, 0.35, 0.6], rootMargin: "-20% 0px -55% 0px" }
    );

    Object.keys(sectionToHref).forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    syncFromHashOrTop();
    window.addEventListener("hashchange", syncFromHashOrTop);
    window.addEventListener("scroll", syncFromHashOrTop, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("hashchange", syncFromHashOrTop);
      window.removeEventListener("scroll", syncFromHashOrTop);
    };
  }, [pathname, homePath, normalizedPathname, normalizedHomePath]);

  const isActive = (href: string) => {
    const normalizedHref = normalizePath(href);

    if (href.includes("#")) {
      return normalizedPathname === normalizedHomePath && activeHref === href;
    }

    if (normalizedHref === normalizedHomePath) {
      return normalizedPathname === normalizedHomePath && normalizePath(activeHref) === normalizedHomePath;
    }

    return normalizedPathname === normalizedHref;
  };

  return (
    <header className="bg-white border-b border-gray-100 dark:bg-gray-900 dark:border-gray-800 sticky top-0 z-50">
      <nav className="mx-auto max-w-[1400px] px-4 sm:px-5 lg:px-6" aria-label="Top">
        <div className="flex h-16 items-center justify-between">

          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Image
              src={bannerImageSrc}
              alt="Logo"
              width={24}
              height={24}
              className="w-6 h-6 rounded object-cover"
            />
            <Link href={homePath} className="text-lg font-bold text-gray-900 dark:text-white tracking-tight">
              {siteName}
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <div className="flex space-x-6">
              {navigation.map((item) => (
                <Link
                  key={item.key}
                  href={item.href}
                  className={`text-sm font-medium transition-colors ${
                    isActive(item.href)
                      ? "text-orange-500 font-semibold"
                      : "text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                  }`}
                >
                  {t(`nav.${item.key}`)}
                </Link>
              ))}
            </div>

            <Link
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors shadow-sm"
            >
              {t("cta")}
            </Link>
            
            {/* Language Switcher */}
            <button
              onClick={() => switchLocale(nextLocale)}
              className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
            >
              {localeLabel}
            </button>

            
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            {/* Language Switcher Mobile */}
            <button
              onClick={() => switchLocale(nextLocale)}
              className="px-1 text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
            >
              {localeLabel}
            </button>

            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 dark:hover:bg-gray-800"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">{t("menuOpen")}</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-100 dark:border-gray-800 py-3 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className={`block rounded-md px-3 py-2 text-base font-medium ${
                  isActive(item.href)
                    ? "bg-orange-50 text-orange-600 dark:bg-orange-950/30 dark:text-orange-400"
                    : "text-gray-500 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {t(`nav.${item.key}`)}
              </Link>
            ))}
            <div className="px-3 pt-2">
              <Link
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md text-base font-semibold transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("ctaMobile")}
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;