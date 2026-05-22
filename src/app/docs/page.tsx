import Link from "next/link";
import MarkdownContent from "@/components/MarkdownContent";

const content = `
# Services And Packages

MD Construction offers practical construction solutions for residential and commercial requirements.

## Package Options

### Essential
- Practical scope for budget-conscious home construction
- Standard quality materials and site supervision
- Stage-wise progress communication

### Comfort
- Balanced package with upgraded finish options
- Planning support for key functional spaces
- Documented milestone quality checks

### Signature
- Premium package for customized requirements
- Detailed design personalization support
- Dedicated execution coordination

## How We Execute

1. Consultation and requirement discussion
2. Scope and budget planning
3. Design and material finalization
4. Construction with milestone updates
5. Inspection, handover, and support

## Need A Customized Proposal?

If your project includes phased execution, mixed-use spaces, or specific finishing standards, contact us for a tailored plan.
`;

export default function Docs() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 py-20">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-5 lg:px-6">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Services And Packages
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Explore our construction service offerings, package options, and
              delivery approach.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-5 lg:px-6">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <MarkdownContent content={content} />
            <div className="mt-8">
              <Link
                href="/about"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Talk To An Advisor
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
