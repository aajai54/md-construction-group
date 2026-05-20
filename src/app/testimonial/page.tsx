import Link from "next/link";
import ContactCTA from "@/components/ContactCTA";
import ScrollTagger from "@/components/ScrollTagger";

const testimonials = [
  {
    name: "Ravi Kumar",
    location: "Bengaluru",
    quote:
      "Clear communication, daily progress photos, and excellent execution quality. The handover was exactly on schedule.",
  },
  {
    name: "Anitha S",
    location: "Mysuru",
    quote:
      "The team explained each milestone and budget impact upfront. We felt confident throughout the full build journey.",
  },
  {
    name: "Suresh R",
    location: "Chennai",
    quote:
      "From design finalization to finishing, the process was structured and professional. Great support even after completion.",
  },
];

export default function TestimonialPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <ScrollTagger />

      <section className="py-16 md:py-24 bg-gray-50/70 dark:bg-gray-800/50 border-b border-gray-100 dark:border-gray-700">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-5 lg:px-6 text-center">
          <span className="text-xs font-bold tracking-wider text-orange-600 uppercase block mb-2">
            Testimonials
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-5 tracking-tight">
            What Our Clients Say
          </h1>
          <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Real feedback from homeowners and businesses who trusted MD Construction.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-5 lg:px-6 grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <article
              key={item.name}
              className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow-sm"
            >
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">"{item.quote}"</p>
              <div className="mt-5 pt-4 border-t border-gray-100 dark:border-gray-700">
                <h2 className="text-base font-semibold text-gray-900 dark:text-white">{item.name}</h2>
                <p className="text-xs text-gray-500 dark:text-gray-400">{item.location}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <ContactCTA />
    </main>
  );
}
