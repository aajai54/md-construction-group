import "@/app/globals.css";

import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { baseURL, siteName } from "@/config";

export const metadata: Metadata = {
  title: `${siteName} | Trusted Home And Commercial Builders`,
  description:
    "End-to-end construction services by MD Construction with transparent planning, quality-first execution, and on-time delivery.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: "/icon?<generated>",
    shortcut: "/icon?<generated>",
    apple: "/icon?<generated>",
  },
  alternates: {
    canonical: baseURL,
  },
  metadataBase: new URL(baseURL),
  openGraph: {
    title: `${siteName} | Trusted Home And Commercial Builders`,
    description:
      "End-to-end construction services by MD Construction with transparent planning, quality-first execution, and on-time delivery.",
    siteName,
    url: baseURL,
    images: [
      {
        url: "/api/og?locale=en",
        alt: `${siteName} Open Graph Image`,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}

        {/* <Analytics /> */}
        {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID} />
        )}
      </body>
    </html>
  );
}
