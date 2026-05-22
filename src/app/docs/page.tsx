import Link from "next/link";
import MarkdownContent from "@/components/MarkdownContent";
import { getMessages } from "@/i18n/messages";
import { type Locale, withLocale } from "@/i18n/locales";

export default function Docs({ locale = "en" }: { locale?: Locale }) {
  const messages = getMessages(locale);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 py-20">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-5 lg:px-6">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              {messages.docs.title}
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              {messages.docs.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-5 lg:px-6">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <MarkdownContent content={messages.docs.content} />
            <div className="mt-8">
              <Link
                href={withLocale(locale, "/about")}
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                {messages.docs.cta}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
