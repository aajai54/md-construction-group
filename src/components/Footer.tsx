import { siteName } from "@/config";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-gray-400 border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-5 h-5 bg-orange-500 rounded flex items-center justify-center text-white font-bold text-xs">
                M
              </div>
              <h3 className="text-sm font-bold text-white tracking-tight">
                {siteName}
              </h3>
            </div>
            <p className="text-xs text-gray-400 mb-5 max-w-sm leading-relaxed">
              Trusted construction partner for residential and commercial
              projects. We focus on transparent execution, reliable quality,
              and clear communication from kickoff to handover.
            </p>
            <div className="text-xs text-gray-500 space-y-1 mb-5">
              <p>Contact: +91 90000 12345</p>
              <p>hello@mdconstructiongroup.in</p>
            </div>
            {/* Social Links Matching Mockup Profile Icons */}
            <div className="flex space-x-4 text-gray-500">
              <a href="#" className="hover:text-white transition-colors" aria-label="GitHub">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.008.01.012a.069.069 0 01.07.01c.743.069 1.134.762 1.134.762.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z"/>
                </svg>
              </a>
              <a href="#" className="hover:text-white transition-colors" aria-label="X (formerly Twitter)">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
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
                <Link href="/docs" className="hover:text-white transition-colors">
                  Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-xs font-bold text-white tracking-wider uppercase mb-4">
              Resources
            </h3>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="/docs" className="hover:text-white transition-colors">
                  Service Packages
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-white transition-colors">
                  Construction Process
                </a>
              </li>
              <li>
                <a href="tel:+919000012345" className="hover:text-white transition-colors">
                  Request Consultation
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-900 text-center text-[10px] text-gray-600">
          <p>&copy; {new Date().getFullYear()} {siteName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}