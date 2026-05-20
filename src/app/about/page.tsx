import Link from "next/link";
import ContactCTA from "@/components/ContactCTA";
import ScrollTagger from "@/components/ScrollTagger";

export default function About() {
  return (
    <main className="min-h-screen">
      <ScrollTagger />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 py-20">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-5 lg:px-6">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              About MD Construction
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Building dependable residential and commercial spaces with
              transparent planning, quality execution, and responsible delivery.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-5 lg:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                We are committed to making construction clear and manageable
                for every client. Our process aligns design intent, project
                planning, and on-site execution from day one.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                With experienced supervision and milestone-based communication,
                we help you make confident decisions at every stage of your
                build.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Key Benefits
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-2 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">
                    End-to-end support from consultation to handover
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-2 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">
                    Stage-wise quality checks and regular project updates
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-2 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">
                    Practical budgeting and timeline-focused execution
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      {/* <section className="bg-gray-50 dark:bg-gray-900 py-20">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-5 lg:px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Start Your Construction Journey
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Talk to our team about your project scope, expected budget,
            location constraints, and execution timeline. We will help you plan
            the right next steps with clarity.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/docs"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              View Services
            </Link>
            <Link
              href="/"
              className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Talk to Advisor
            </Link>
          </div>
        </div>
      </section> */}
      <ContactCTA />
    </main>
  );
}
