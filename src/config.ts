export const siteName =
  process.env.NEXT_PUBLIC_SITE_NAME || "MD Construction";

export const title =
  process.env.NEXT_PUBLIC_TITLE ||
  "MD Construction | Trusted Home And Commercial Builders";

export const description =
  process.env.NEXT_PUBLIC_DESCRIPTION ||
  "End-to-end construction services by MD Construction with transparent planning, quality-first execution, and on-time delivery.";

export const companyHighlights = [
  { value: "250+", label: "Projects Delivered" },
  { value: "12+", label: "Years Of Experience" },
  { value: "98%", label: "On-Time Handover" },
  { value: "24x7", label: "Progress Visibility" },
];

export const consultationPhone = "+91 90000 12345";

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
