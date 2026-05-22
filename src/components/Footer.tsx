import { siteName } from "@/config";
import Link from "next/link";

export default function Footer() {
  const staticBasePath = process.env.NODE_ENV === "production" ? "/md-construction-group" : "";
  const bannerImageSrc = `${staticBasePath}/images/construction/logo.jpg`;

  return (
    <footer className="bg-[#0a0a0a] text-gray-400 border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              {/* <div className="w-5 h-5 bg-orange-500 rounded flex items-center justify-center text-white font-bold text-xs">
                M
              </div> */}
              <img
              src={bannerImageSrc}
              alt="Logo"
              className="w-6 h-6 rounded object-cover"
            />
              <h3 className="text-sm font-bold text-white tracking-tight">
                {siteName}
              </h3>
            </div>
            <p className="text-xs text-gray-400 mb-5 max-w-sm leading-relaxed">
              Trusted construction partner for residential and commercial
              projects. We focus on transparent execution, reliable quality,
              and clear communication from kickoff to handover.
            </p>
            <div className="text-xs text-gray-400 space-y-1 mb-5">
            </div>
            {/* Social Links Matching Mockup Profile Icons */}
            <div className="flex items-center space-x-2 text-gray-400">
              <a href="#" className="hover:text-white transition-colors" aria-label="Location">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
              </a>
              <span>Ashok Nagar, Chennai</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-bold text-white tracking-wider uppercase mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/testimonial" className="hover:text-white transition-colors">
                  Testimonial
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          {/* <div>
            <h3 className="text-xs font-bold text-white tracking-wider uppercase mb-4">
              Resources
            </h3>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="/about" className="hover:text-white transition-colors">
                  Service Packages
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-white transition-colors">
                  Construction Process
                </a>
              </li>
              <li>
                <a href={`tel:${consultationPhone}`} className="hover:text-white transition-colors">
                  Request Consultation
                </a>
              </li>
            </ul>
          </div> */}
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-900 text-center text-[10px] text-gray-600">
          <p>&copy; {new Date().getFullYear()} {siteName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}