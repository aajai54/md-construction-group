"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteName } from "@/config";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeHref, setActiveHref] = useState("/");
  const pathname = usePathname();

  const bannerImageSrc = "/images/construction/logo.jpg";

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/#services" },
    { name: "Contact Us", href: "/#contact" },
    { name: "Testimonial", href: "/testimonial" },
    { name: "About", href: "/about" },
  ];

  useEffect(() => {
    if (pathname !== "/") {
      setActiveHref(pathname);
      return;
    }

    const syncFromHashOrTop = () => {
      const hash = window.location.hash;

      if (hash === "#services") {
        setActiveHref("/#services");
        return;
      }

      if (hash === "#contact") {
        setActiveHref("/#contact");
        return;
      }

      if (window.scrollY < 140) {
        setActiveHref("/");
      }
    };

    const sectionToHref: Record<string, string> = {
      services: "/#services",
      contact: "/#contact",
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (!visibleEntries.length) {
          if (window.scrollY < 140) {
            setActiveHref("/");
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
  }, [pathname]);

  const isActive = (href: string) => {
    if (href.startsWith("/#")) {
      return pathname === "/" && activeHref === href;
    }

    if (href === "/") {
      return pathname === "/" && activeHref === "/";
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
            <Image
              src={bannerImageSrc}
              alt="Logo"
              width={24}
              height={24}
              className="w-6 h-6 rounded object-cover"
            />
            <Link href="/" className="text-lg font-bold text-gray-900 dark:text-white tracking-tight">
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
              href="/enquiry"
              className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors shadow-sm"
            >
              Book Free Consultation
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 dark:hover:bg-gray-800"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
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
                href="/enquiry"
                className="block text-center bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md text-base font-semibold transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Free Consultation
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;