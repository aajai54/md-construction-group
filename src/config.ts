export const siteName =
  process.env.NEXT_PUBLIC_SITE_NAME || "MD Construction Group";

export const title =
  process.env.NEXT_PUBLIC_TITLE ||
  "MD Construction Group - We Build your Dreams";

export const description =
  process.env.NEXT_PUBLIC_DESCRIPTION ||
  "A simple and easy-to-use starter template for building SEO optimized Next.js applications with best practices and performance in mind.";

// Last baseURL
const defaultBaseURL = "https://md-construction-group.vercel.app";

// Vercel baseURL, make sure it's a valid URL
const VERCEL_URL =
  process.env.NEXT_PUBLIC_VERCEL_URL &&
  `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;

// meta base url
export const baseURL =
  process.env.NEXT_PUBLIC_URL ||
  VERCEL_URL ||
  (globalThis.location && globalThis.location.origin) ||
  defaultBaseURL;
