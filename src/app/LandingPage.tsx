import { description, companyHighlights } from "@/config";
import Image from "next/image";
import Link from "next/link";
import ContactCTA from "@/components/ContactCTA";
import HighlightsCounter from "../components/HighlightsCounter";
import ServicesShowcase from "../components/ServicesShowcase";
import ScrollTagger from "../components/ScrollTagger";

export default function LandingPage() {
  const staticBasePath = process.env.NODE_ENV === "production" ? "/md-construction-group" : "";
  const bannerImageSrc = `${staticBasePath}/images/construction/home.jpg`;

  const servicesShowcase = [
    {
      title: "Building Construction & Development",
      hook: "From blueprint to final handover.",
      points: [
        "Residential and commercial end-to-end execution",
        "Quality-first materials and site supervision",
        "Timeline-focused delivery with stage planning",
        "Designs built for durability and modern living",
      ],
    },
    {
      title: "Interior Turnkey Projects",
      hook: "Move into a fully finished space.",
      points: [
        "Planning, execution, and finishing under one team",
        "Functional layouts matched to your lifestyle",
        "Material, lighting, and furniture coordination",
        "Single-point accountability from start to finish",
      ],
    },
    {
      title: "Repair & Rehabilitation",
      hook: "Restore strength. Renew performance.",
      points: [
        "Structural repairs for aging or damaged buildings",
        "Waterproofing and leakage prevention measures",
        "Renovation for safety and modern functionality",
        "Long-life upgrades with minimal disruption",
      ],
    },
    {
      title: "Project Management",
      hook: "Control cost, quality, and timelines.",
      points: [
        "Clear milestones and execution roadmaps",
        "Cross-team coordination and resource planning",
        "Progress tracking with practical reporting",
        "Risk mitigation for predictable delivery",
      ],
    },
    {
      title: "Property Management",
      hook: "Keep your property reliable year-round.",
      points: [
        "Routine maintenance and preventive checks",
        "Fast support for repair and service requests",
        "Operational oversight for residential and commercial units",
        "Cleaner, safer, and better-performing spaces",
      ],
    },
    {
      title: "Structural & Architectural Design",
      hook: "Where aesthetics meet engineering confidence.",
      points: [
        "Concepts aligned with plot and usage goals",
        "Structural planning focused on safety and performance",
        "Architectural detailing for visual impact",
        "Build-ready drawings for smoother execution",
      ],
    },
  ];

  return (
    <main id="home" className="min-h-screen bg-white dark:bg-gray-900">
      <ScrollTagger />
      {/* Hero Section */}
      <section className="pt-6 pb-12 md:pt-10 md:pb-20 overflow-hidden" data-tagger>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-5 lg:px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div data-tagger-item>
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
                href="#contact"
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold text-sm transition-colors shadow-sm"
              >
                Contact Us
              </Link>
            </div>

            {/* Highlights Line */}
            <HighlightsCounter highlights={companyHighlights.slice(0, 3)} />
          </div>

          {/* Right Column */}
          <div className="relative flex justify-center lg:justify-end" data-tagger-item>
            <div className="w-full max-w-lg md:max-w-none aspect-square bg-amber-50/40 dark:bg-gray-800/40 rounded-2xl border border-dashed border-amber-200 dark:border-gray-700 p-4 flex flex-col justify-between items-center relative overflow-hidden shadow-sm">
              <Image
                src={bannerImageSrc}
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

      {/* Our Services Section */}
      <section id="services" className="scroll-mt-24 py-16 md:py-24 bg-white dark:bg-gray-900" data-tagger>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-5 lg:px-6">
          <div className="mb-10 md:mb-12" data-tagger-item>
            <span className="text-xs font-bold tracking-[0.2em] text-orange-600 uppercase block mb-3">
              Our Services
            </span>
            <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-3 tracking-tight">
              Built To Perform. Designed To Last.
            </h2>
            <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 max-w-3xl leading-relaxed">
              A premium construction service stack, from structural planning to full execution, tailored for dependable outcomes.
            </p>
          </div>

          <ServicesShowcase services={servicesShowcase} />
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-900" data-tagger>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-5 lg:px-6">
          <div data-tagger-item>
            <span className="text-xs font-bold tracking-wider text-orange-600 uppercase block mb-2">
              OUR PROCESS
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white mb-8 tracking-tight">
              How We Deliver Your Vision, Step by Step
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-7">
              <div className="rounded-xl border border-gray-200/80 dark:border-gray-700/80 p-4 bg-white/70 dark:bg-gray-800/40" data-tagger-item>
                <div className="w-9 h-9 rounded-lg bg-amber-50 dark:bg-amber-950/30 flex items-center justify-center text-orange-500 mb-3 border border-amber-100/70 dark:border-amber-900/30">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                  </svg>
                </div>
                <h3 className="text-base font-bold text-gray-900 dark:text-white mb-1.5">Connect with Us</h3>
                <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                  Share your basic details through a quick call. Our team consults with you through a free consultation.
                </p>
              </div>

              <div className="rounded-xl border border-gray-200/80 dark:border-gray-700/80 p-4 bg-white/70 dark:bg-gray-800/40" data-tagger-item>
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

              <div className="rounded-xl border border-gray-200/80 dark:border-gray-700/80 p-4 bg-white/70 dark:bg-gray-800/40" data-tagger-item>
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

              <div className="rounded-xl border border-gray-200/80 dark:border-gray-700/80 p-4 bg-white/70 dark:bg-gray-800/40" data-tagger-item>
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

              <div className="rounded-xl border border-gray-200/80 dark:border-gray-700/80 p-4 bg-white/70 dark:bg-gray-800/40 sm:col-span-2 lg:col-span-1" data-tagger-item>
                <div className="w-9 h-9 rounded-lg bg-amber-50 dark:bg-amber-950/30 flex items-center justify-center text-orange-500 mb-3 border border-amber-100/70 dark:border-amber-900/30">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
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
      <section className="py-16 md:py-24 bg-gray-50/50 dark:bg-gray-900/50 border-t border-b border-gray-100 dark:border-gray-800/60" data-tagger>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-5 lg:px-6">
          <div className="mb-12" data-tagger-item>
            <span className="text-xs font-bold tracking-wider text-orange-600 uppercase block mb-2">
              WHY CHOOSE US
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
              Why Choose MD Construction?
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl text-sm md:text-base leading-relaxed">
              We bring reliability, transparency, and craftsmanship to every project we undertake.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200/80 dark:border-gray-700/80 shadow-sm hover:shadow-md transition-shadow" data-tagger-item>
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

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200/80 dark:border-gray-700/80 shadow-sm hover:shadow-md transition-shadow" data-tagger-item>
              <div className="w-10 h-10 rounded-lg bg-amber-50 dark:bg-amber-950/30 flex items-center justify-center text-orange-500 mb-5 border border-amber-100/70 dark:border-amber-900/30">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75" />
              </svg>
              </div>
              <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">Quality Checks At Every Stage</h3>
              <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                Structured inspections and progress updates help maintain build quality and reduce rework.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200/80 dark:border-gray-700/80 shadow-sm hover:shadow-md transition-shadow" data-tagger-item>
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
      <ContactCTA />
    </main>
  );
}
