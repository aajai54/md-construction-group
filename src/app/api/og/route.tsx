import { siteName } from "@/config";
import { getMessages } from "@/i18n/messages";
import { defaultLocale, isLocale } from "@/i18n/locales";
import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const localeParam = searchParams.get("locale") ?? defaultLocale;
  const locale = isLocale(localeParam) ? localeParam : defaultLocale;
  const messages = getMessages(locale);

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 40,
          color: "black",
          background: "white",
          width: "100%",
          height: "100%",
          padding: "50px 200px",
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {messages.metadata.title || siteName}
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
