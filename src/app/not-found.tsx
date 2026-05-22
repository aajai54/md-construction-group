import Link from "next/link";
import { getMessages } from "@/i18n/messages";
import { type Locale, withLocale } from "@/i18n/locales";

export default function NotFound({ locale = "en" }: { locale?: Locale }) {
  const messages = getMessages(locale);

  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-100px)] bg-white dark:bg-gray-800">
      <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
        {messages.notFound.title}
      </h2>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
        {messages.notFound.description}
      </p>
      <Link
        href={withLocale(locale)}
        className="text-blue-500 hover:underline dark:text-blue-400"
      >
        {messages.notFound.cta}
      </Link>
    </div>
  );
}
