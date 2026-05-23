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
  { value: "25+", label: "Years Of Experience" },
  { value: "98%", label: "On-Time Handover" },
  { value: "24x7", label: "Progress Visibility" },
];

export const consultationPhone = "+91 70109 084803";
export const consultationEmail = "mdconstructionmails@gmail.com";

const defaultBaseURL = "https://mdconstructiongroups.com";

export const baseURL =
  process.env.NEXT_PUBLIC_URL ||
  defaultBaseURL;
