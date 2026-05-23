"use client";

import { siteName } from "@/config";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";

const supportedLocales = ["en", "ta"];

function getLocaleFromPath(pathname: string): string {
  const firstSegment = pathname.split("/").filter(Boolean)[0];
  return supportedLocales.includes(firstSegment) ? firstSegment : "en";
}

export default function Footer() {
  const pathname = usePathname();
  const locale = getLocaleFromPath(pathname);
  const t = useTranslations("Footer");

  const localizedPath = (path: string) =>
    `/${locale}${path === "/" ? "" : path}`;

  const quickLinks = [
    { key: "home",        href: localizedPath("/") },
    { key: "about",       href: localizedPath("/about") },
    { key: "testimonial", href: localizedPath("/testimonial") },
  ];

  return (
    <footer className="bg-[#0a0a0a] text-gray-400 border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Image
                src="/images/construction/logo.jpg"
                alt="Logo"
                width={24}
                height={24}
                className="w-6 h-6 rounded object-cover"
              />
              <h3 className="text-sm font-bold text-white tracking-tight">
                {siteName}
              </h3>
            </div>

            <p className="text-xs text-gray-400 mb-5 max-w-sm leading-relaxed">
              {t("description")}
            </p>

            {/* Location */}
            <div className="flex items-center space-x-2 text-gray-400">
              <a href="#" className="hover:text-white transition-colors" aria-label="Location">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
              </a>
              <span>{t("location")}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-bold text-white tracking-wider uppercase mb-4">
              {t("quickLinks.title")}
            </h3>
            <ul className="space-y-2.5 text-xs">
              {quickLinks.map(({ key, href }) => (
                <li key={key}>
                  <Link href={href} className="hover:text-white transition-colors">
                    {t(`quickLinks.${key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-900 text-center text-[10px] text-gray-600">
          <p>
            &copy; {new Date().getFullYear()} {siteName}. {t("rights")}
          </p>
        </div>
      </div>
    </footer>
  );
}