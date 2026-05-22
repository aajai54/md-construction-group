import ContactCTA from "@/components/ContactCTA";
import ScrollTagger from "@/components/ScrollTagger";
import { getMessages } from "@/i18n/messages";
import { type Locale } from "@/i18n/locales";

export default function EnquiryPage({ locale = "en" }: { locale?: Locale }) {
  const messages = getMessages(locale);

  return (
    <main className="min-h-screen">
      <ScrollTagger />

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-5 lg:px-6">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-8">
            <div className="rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSdT-I7nqOkBD5L-efHwJ9TzRsM0TMlQe5L3hiDBRdOnrIeU0g/viewform?embedded=true"
                width="100%"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                title={messages.enquiry.iframeTitle}
                className="w-full h-[1750px] sm:h-[1550px] md:h-[1300px]"
              >
                {messages.enquiry.loading}
              </iframe>
            </div>
          </div>

        </div>
      </section>

      <ContactCTA locale={locale} />
    </main>
  );
}
