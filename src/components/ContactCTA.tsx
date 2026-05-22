import { consultationEmail, consultationPhone } from "@/config";
import Image from "next/image";

export default function ContactCTA() {
  const staticBasePath = process.env.NODE_ENV === "production" ? "/md-construction-group" : "";
  const whatsappQrImageSrc = `${staticBasePath}/images/whatsapp-qr.avif`;

  return (
    <section id="contact" className="scroll-mt-24 bg-[#1c1816] dark:bg-[#0d0b0a] pt-8 md:pt-12 pb-16 md:pb-24 relative overflow-hidden" data-tagger>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10" data-tagger-item>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
          Let’s Build Your Dream Together
        </h2>
        <p className="text-sm md:text-base text-amber-100/70 mb-12 max-w-xl mx-auto leading-relaxed">
          Start your construction journey with MD Construction and get
          a clear plan for budget, timeline, and execution.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-stretch text-left max-w-3xl mx-auto mt-0" data-tagger-item>
          {/* Contact Links Column */}
          <div className="flex flex-col gap-4 justify-between mt-0" data-tagger-item>
            <a
              href={`tel:${consultationPhone}`}
              className="flex items-center gap-4 rounded-xl border border-amber-200/10 bg-black/20 p-4 text-amber-50 hover:bg-black/40 hover:border-amber-200/30 transition-all duration-300 group"
            >
              <span className="w-10 h-10 rounded-full bg-amber-100/5 border border-amber-100/15 flex items-center justify-center text-amber-400 group-hover:bg-amber-400/10 group-hover:text-amber-300 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 4.5A2.25 2.25 0 014.5 2.25h2.56a2.25 2.25 0 012.188 1.72l.62 2.48a2.25 2.25 0 01-.634 2.196l-1.08 1.08a14.25 14.25 0 006.04 6.04l1.08-1.08a2.25 2.25 0 012.196-.634l2.48.62a2.25 2.25 0 011.72 2.188v2.56a2.25 2.25 0 01-2.25 2.25h-.75C10.178 22.5 1.5 13.822 1.5 3.75V3a.75.75 0 01.75-.75z" />
                </svg>
              </span>
              <div>
                <p className="text-xs font-medium text-amber-100/50 mb-0.5">Phone Number</p>
                <p className="text-sm md:text-base font-semibold text-white tracking-wide">{consultationPhone}</p>
              </div>
            </a>

            <a
              href="https://instagram.com/md._construction"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-xl border border-amber-200/10 bg-black/20 p-4 text-amber-50 hover:bg-black/40 hover:border-amber-200/30 transition-all duration-300 group"
            >
              <span className="w-10 h-10 rounded-full bg-amber-100/5 border border-amber-100/15 flex items-center justify-center text-amber-400 group-hover:bg-amber-400/10 group-hover:text-amber-300 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <rect width="14" height="14" x="5" y="5" rx="4" ry="4" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.5 8.5h.01" />
                  <circle cx="12" cy="12" r="3.25" />
                </svg>
              </span>
              <div>
                <p className="text-xs font-medium text-amber-100/50 mb-0.5">Instagram</p>
                <p className="text-sm md:text-base font-semibold text-white tracking-wide">@mdconstruction</p>
              </div>
            </a>

            <a
              href={`mailto:${consultationEmail}`}
              className="flex items-center gap-4 rounded-xl border border-amber-200/10 bg-black/20 p-4 text-amber-50 hover:bg-black/40 hover:border-amber-200/30 transition-all duration-300 group"
            >
              <span className="w-10 h-10 rounded-full bg-amber-100/5 border border-amber-100/15 flex items-center justify-center text-amber-400 group-hover:bg-amber-400/10 group-hover:text-amber-300 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5a.75.75 0 01.75.75v9a.75.75 0 01-.75.75H3.75a.75.75 0 01-.75-.75v-9a.75.75 0 01.75-.75z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5l9 6 9-6" />
                </svg>
              </span>
              <div>
                <p className="text-xs font-medium text-amber-100/50 mb-0.5">Email Address</p>
                <p className="text-sm md:text-base font-semibold text-white tracking-wide">{consultationEmail}</p>
              </div>
            </a>
          </div>

          {/* Whatsapp QR Column */}
          <div className="rounded-xl border border-amber-200/10 bg-black/20 p-6 flex flex-col items-center justify-center text-center h-full min-h-[280px] mt-0" data-tagger-item>
            <p className="text-xs font-bold uppercase tracking-widest text-amber-400/80 mb-4">
              WhatsApp QR
            </p>
            <div className="bg-white rounded-xl p-3 shadow-xl ring-1 ring-black/5 transition-transform duration-300 hover:scale-[1.02]">
              <Image
                src={whatsappQrImageSrc}
                alt="WhatsApp QR code"
                width={160}
                height={160}
                className="w-[160px] h-[160px] object-contain rounded-lg"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
