import { title, description, companyHighlights } from "@/config";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="py-12 md:py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div>
            <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-bold bg-amber-50 text-amber-700 dark:bg-amber-950/30 dark:text-amber-400 mb-5 border border-amber-200/60 dark:border-amber-900/40 uppercase tracking-wide">
              ★ Trusted Since Day One
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight leading-tight">
              Trusted Home & <br />
              <span className="text-orange-500">Commercial Builders</span>
            </h1>
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-xl leading-relaxed">
              {description}
            </p>
            <div className="flex flex-wrap gap-4 mb-12">
              <Link
                href="/docs"
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold text-sm transition-colors shadow-sm"
              >
                Get Free Consultation
              </Link>
              <Link
                href="/about"
                className="bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 px-6 py-3 rounded-lg font-semibold text-sm transition-colors shadow-sm dark:bg-gray-800 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-700"
              >
                Learn More
              </Link>
            </div>

            {/* Highlights Line */}
            <div className="pt-8 border-t border-gray-200 dark:border-gray-800 grid grid-cols-3 gap-4">
              {companyHighlights.slice(0, 3).map((item, index) => (
                <div key={index} className="flex flex-col border-r last:border-r-0 border-gray-200 dark:border-gray-800 pr-2">
                  <span className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight">
                    {item.value}
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="w-full max-w-md aspect-[4/4.5] bg-amber-50/40 dark:bg-gray-800/40 rounded-2xl border border-dashed border-amber-200 dark:border-gray-700 p-4 flex flex-col justify-between items-center relative overflow-hidden shadow-sm">
              <Image
                src="/images/construction/banner1.png"
                alt="Construction project banner"
                fill
                priority
                className="object-cover"
              />
              <div className="absolute bottom-6 left-6 bg-white dark:bg-gray-900 shadow-xl rounded-xl p-3.5 flex items-center space-x-3 border border-gray-100 dark:border-gray-800/80 max-w-[240px]">
                <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-950 flex items-center justify-center text-green-600 dark:text-green-400 flex-shrink-0 text-xs">
                  ✓
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-gray-900 dark:text-white">On-Time Delivery</span>
                  <span className="text-[10px] text-gray-500 dark:text-gray-400 mt-0.5">Every project, every time</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Structural Placeholder */}
          <div className="order-2 md:order-1 bg-amber-50/40 dark:bg-gray-800/40 aspect-square rounded-2xl border border-dashed border-amber-200 dark:border-gray-700 p-4 relative overflow-hidden shadow-sm">
            <Image
              src="/images/construction/banner1.png"
              alt="Construction process"
              fill
              className="object-cover"
            />
          </div>

          {/* Right Column - Step Content */}
          <div className="order-1 md:order-2">
            <span className="text-xs font-bold tracking-wider text-orange-600 uppercase block mb-2">
              OUR PROCESS
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white mb-8 tracking-tight">
              How We Deliver Your Vision, Step by Step
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-7">
              {/* Step 1 */}
              <div className="rounded-xl border border-gray-200/80 dark:border-gray-700/80 p-4 bg-white/70 dark:bg-gray-800/40">
                <div className="w-9 h-9 rounded-lg bg-amber-50 dark:bg-amber-950/30 flex items-center justify-center text-orange-500 mb-3 border border-amber-100/70 dark:border-amber-900/30">
                  <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9A3.375 3.375 0 1012 5.625 3.375 3.375 0 008.625 9zM5.625 18.375a6.375 6.375 0 1112.75 0" />
                  </svg>
                </div>
                <h3 className="text-base font-bold text-gray-900 dark:text-white mb-1.5">Connect with Us</h3>
                <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                  Share your basic details through a quick call. Our team consults with you through a free consultation.
                </p>
              </div>

              {/* Step 2 */}
              <div className="rounded-xl border border-gray-200/80 dark:border-gray-700/80 p-4 bg-white/70 dark:bg-gray-800/40">
                <div className="w-9 h-9 rounded-lg bg-amber-50 dark:bg-amber-950/30 flex items-center justify-center text-orange-500 mb-3 border border-amber-100/70 dark:border-amber-900/30">
                  <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 6.75A2.25 2.25 0 015.25 4.5h13.5A2.25 2.25 0 0121 6.75v10.5a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 17.25V6.75z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 9.75h9M7.5 13.5h6" />
                  </svg>
                </div>
                <h3 className="text-base font-bold text-gray-900 dark:text-white mb-1.5">Define Your Requirement</h3>
                <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                  Discuss your plot details, budget, and timeline with our experts. We craft a clear project plan tailored to your goals.
                </p>
              </div>

              {/* Step 3 */}
              <div className="rounded-xl border border-gray-200/80 dark:border-gray-700/80 p-4 bg-white/70 dark:bg-gray-800/40">
                <div className="w-9 h-9 rounded-lg bg-amber-50 dark:bg-amber-950/30 flex items-center justify-center text-orange-500 mb-3 border border-amber-100/70 dark:border-amber-900/30">
                  <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 6.75A2.25 2.25 0 016.75 4.5h10.5a2.25 2.25 0 012.25 2.25v10.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 17.25V6.75z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 12l2.25 2.25L15.75 9" />
                  </svg>
                </div>
                <h3 className="text-base font-bold text-gray-900 dark:text-white mb-1.5">Approve Design</h3>
                <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                  Review floor plans, drawings, material selection, and scheduling. Work closely with our architects until every detail is finalized.
                </p>
              </div>

              {/* Step 4 */}
              <div className="rounded-xl border border-gray-200/80 dark:border-gray-700/80 p-4 bg-white/70 dark:bg-gray-800/40">
                <div className="w-9 h-9 rounded-lg bg-amber-50 dark:bg-amber-950/30 flex items-center justify-center text-orange-500 mb-3 border border-amber-100/70 dark:border-amber-900/30">
                  <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5M4.5 21V7.5m15 13.5V10.5M7.5 21V4.5m9 16.5V6" />
                  </svg>
                </div>
                <h3 className="text-base font-bold text-gray-900 dark:text-white mb-1.5">Build & Monitor</h3>
                <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                  Our team ensures high quality standards through structured inspections at every project milestone. Stay updated on construction progress with daily photos, quality reports, and payment updates shared via WhatsApp.
                </p>
              </div>

              {/* Step 5 */}
              <div className="rounded-xl border border-gray-200/80 dark:border-gray-700/80 p-4 bg-white/70 dark:bg-gray-800/40 sm:col-span-2 lg:col-span-1">
                <div className="w-9 h-9 rounded-lg bg-amber-50 dark:bg-amber-950/30 flex items-center justify-center text-orange-500 mb-3 border border-amber-100/70 dark:border-amber-900/30">
                  <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75l2.25 2.25L15 11.25M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-base font-bold text-gray-900 dark:text-white mb-1.5">Handover & Support</h3>
                <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                  Take possession of your fully completed home with confidence, backed by a 10-year warranty. We ensure a smooth transition through final walkthroughs, complete documentation, and dedicated post-completion support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-gray-50/50 dark:bg-gray-900/50 border-t border-b border-gray-100 dark:border-gray-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold tracking-wider text-orange-600 uppercase block mb-2">
              WHY CHOOSE US
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
              Why Choose MD Construction Group?
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl text-sm md:text-base leading-relaxed">
              We bring reliability, transparency, and craftsmanship to every project we undertake.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200/80 dark:border-gray-700/80 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-lg bg-amber-50 dark:bg-amber-950/30 flex items-center justify-center text-orange-500 mb-5 border border-amber-100/70 dark:border-amber-900/30">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">Transparent Project Planning</h3>
              <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                Clear scope discussions, practical timelines, and stage-wise visibility from foundation to handover.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200/80 dark:border-gray-700/80 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-lg bg-amber-50 dark:bg-amber-950/30 flex items-center justify-center text-orange-500 mb-5 border border-amber-100/70 dark:border-amber-900/30">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">Quality Checks At Every Stage</h3>
              <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                Structured inspections and progress updates help maintain build quality and reduce rework.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200/80 dark:border-gray-700/80 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-lg bg-amber-50 dark:bg-amber-950/30 flex items-center justify-center text-orange-500 mb-5 border border-amber-100/70 dark:border-amber-900/30">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">On-Time Handover Focus</h3>
              <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                Milestone-based execution and close coordination keep projects moving toward timely delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      

      {/* CTA Section */}
      <section className="bg-[#1c1816] dark:bg-[#0d0b0a] py-16 md:py-24 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
            Ready to Build Your Home?
          </h2>
          <p className="text-sm md:text-base text-amber-100/70 mb-8 max-w-xl mx-auto leading-relaxed">
            Start your construction journey with MD Construction Group and get
            a clear plan for budget, timeline, and execution.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/docs"
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 rounded-lg font-semibold text-sm transition-colors shadow-md"
            >
              Start Building
            </Link>
            <a
              href="tel:+919000012345"
              className="bg-transparent hover:bg-white/5 text-white border border-white/20 px-6 py-2.5 rounded-lg font-semibold text-sm transition-colors"
            >
              Request Consultation
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}