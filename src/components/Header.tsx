"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteName } from "@/config";
import { getMessages } from "@/i18n/messages";
import {
  type Locale,
  getLocaleFromPathname,
  swapLocaleInPathname,
  withLocale,
} from "@/i18n/locales";

const Header = ({ locale = "en" }: { locale?: Locale }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeHref, setActiveHref] = useState(withLocale(locale));
  const pathname = usePathname();
  const currentLocale = getLocaleFromPathname(pathname || "/");
  const messages = getMessages(locale);
  const homeHref = withLocale(locale);

  const staticBasePath = process.env.NODE_ENV === "production" ? "/md-construction-group" : "";
  const bannerImageSrc = `${staticBasePath}/images/construction/logo.jpg`;

  const navigation = messages.header.nav.map((item) => ({
    name: item.name,
    href: withLocale(locale, item.href),
  }));

  useEffect(() => {
    if (pathname !== homeHref) {
      setActiveHref(pathname);
      return;
    }

    const syncFromHashOrTop = () => {
      const hash = window.location.hash;

      if (hash === "#services") {
        setActiveHref(withLocale(locale, "#services"));
        return;
      }

      if (hash === "#contact") {
        setActiveHref(withLocale(locale, "#contact"));
        return;
      }

      if (window.scrollY < 140) {
        setActiveHref(homeHref);
      }
    };

    const sectionToHref: Record<string, string> = {
      services: withLocale(locale, "#services"),
      contact: withLocale(locale, "#contact"),
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (!visibleEntries.length) {
          if (window.scrollY < 140) {
            setActiveHref(homeHref);
          }
          return;
        }

        const topVisible = visibleEntries[0];
        const sectionId = (topVisible.target as HTMLElement).id;
        const nextHref = sectionToHref[sectionId];

        if (nextHref) {
          setActiveHref(nextHref);
        }
      },
      {
        threshold: [0.15, 0.35, 0.6],
        rootMargin: "-20% 0px -55% 0px",
      },
    );

    Object.keys(sectionToHref).forEach((sectionId) => {
      const section = document.getElementById(sectionId);
      if (section) observer.observe(section);
    });

    syncFromHashOrTop();
    window.addEventListener("hashchange", syncFromHashOrTop);
    window.addEventListener("scroll", syncFromHashOrTop, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("hashchange", syncFromHashOrTop);
      window.removeEventListener("scroll", syncFromHashOrTop);
    };
  }, [homeHref, locale, pathname]);

  const isActive = (href: string) => {
    if (href.includes("#")) {
      return pathname === homeHref && activeHref === href;
    }

    if (href === homeHref) {
      return pathname === homeHref && activeHref === homeHref;
    }

    return pathname === href;
  };

  return (
    <header className="bg-white border-b border-gray-100 dark:bg-gray-900 dark:border-gray-800 sticky top-0 z-50">
      <nav className="mx-auto max-w-[1400px] px-4 sm:px-5 lg:px-6" aria-label="Top">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-2">
            {/* <div className="w-6 h-6 bg-orange-500 rounded flex items-center justify-center text-white font-bold text-xs">
              M
            </div> */}
            <img
              src={bannerImageSrc}
              alt="Logo"
              className="w-6 h-6 rounded object-cover"
            />
            <Link href={homeHref} className="text-lg font-bold text-gray-900 dark:text-white tracking-tight">
              {siteName}
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <div className="flex space-x-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-medium transition-colors ${
                    isActive(item.href)
                      ? "text-orange-500 font-semibold"
                      : "text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <Link
              href={withLocale(locale, "/enquiry")}
              className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors shadow-sm"
            >
              {messages.header.desktopCta}
            </Link>
            <Link
              href={swapLocaleInPathname(pathname || homeHref, currentLocale === "en" ? "ta" : "en")}
              className="text-sm font-semibold text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            >
              {currentLocale === "en" ? "தமிழ்" : "EN"}
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 dark:hover:bg-gray-800"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">{messages.header.openMainMenu}</span>
              {!isMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
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
                key={item.name}
                href={item.href}
                className={`block rounded-md px-3 py-2 text-base font-medium ${
                  isActive(item.href)
                    ? "bg-orange-50 text-orange-600 dark:bg-orange-950/30 dark:text-orange-400"
                    : "text-gray-500 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="px-3 pt-2">
              <Link
                href={withLocale(locale, "/enquiry")}
                className="block text-center bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md text-base font-semibold transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {messages.header.mobileCta}
              </Link>
            </div>
            <div className="px-3 pb-1">
              <Link
                href={swapLocaleInPathname(pathname || homeHref, currentLocale === "en" ? "ta" : "en")}
                className="block text-center text-sm font-semibold text-gray-600 dark:text-gray-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {messages.header.languageSwitch}: {currentLocale === "en" ? "தமிழ்" : "EN"}
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;