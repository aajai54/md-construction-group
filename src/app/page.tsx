"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const defaultLocale = "en";

export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
    const browserLang = navigator.language.split("-")[0];
    const supportedLocales = ["en", "ta"];
    const locale = supportedLocales.includes(browserLang)
      ? browserLang
      : defaultLocale;

    router.replace(`/${locale}`);
  }, [router]);

  return null;
}