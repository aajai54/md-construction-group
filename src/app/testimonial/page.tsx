// import Link from "next/link";
import ContactCTA from "@/components/ContactCTA";
import ScrollTagger from "@/components/ScrollTagger";
import { getMessages } from "@/i18n/messages";
import { type Locale } from "@/i18n/locales";

// types — add to your types file or keep inline
type TestimonialMedia =
  | { type: "video"; src: string; poster?: string }
  | { type: "images"; srcs: string[] };

interface Testimonial {
  name: string;
  location: string;
  quote: string;
  tag?: string;
  stars?: number; // 1–5
  media: TestimonialMedia;
}

// ─── sub-components ───────────────────────────────────────────────────────────

function StarRating({ count, ariaTemplate }: { count: number; ariaTemplate: string }) {
  return (
    <div className="flex gap-0.5" aria-label={ariaTemplate.replace("{count}", String(count))}>
      {Array.from({ length: 5 }, (_, i) => (
        <svg
          key={i}
          className={`w-3.5 h-3.5 ${i < count ? "text-amber-400" : "text-gray-200 dark:text-gray-600"}`}
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function ImageMosaic({ srcs, projectAlt }: { srcs: string[]; projectAlt: string }) {
  if (srcs.length === 1) {
    return (
      <div className="h-64 overflow-hidden">
        <img src={srcs[0]} alt={projectAlt} className="w-full h-full object-cover" />
      </div>
    );
  }

  if (srcs.length === 2) {
    return (
      <div className="grid grid-cols-2 gap-px h-64 overflow-hidden">
        {srcs.map((src, i) => (
          <img key={i} src={src} alt={projectAlt} className="w-full h-full object-cover" />
        ))}
      </div>
    );
  }

  // 3 images: 1 large left + 2 stacked right
  return (
    <div className="grid grid-cols-2 gap-px h-64 overflow-hidden">
      <img src={srcs[0]} alt={projectAlt} className="w-full h-full object-cover row-span-2" />
      <div className="grid grid-rows-2 gap-px">
        <img src={srcs[1]} alt={projectAlt} className="w-full h-full object-cover" />
        <img src={srcs[2]} alt={projectAlt} className="w-full h-full object-cover" />
      </div>
    </div>
  );
}

function VideoEmbed({
  src,
  poster,
  clientName,
  titleTemplate,
  browserVideoFallback,
  videoBadge,
}: {
  src: string;
  poster?: string;
  clientName: string;
  titleTemplate: string;
  browserVideoFallback: string;
  videoBadge: string;
}) {
  const isYouTube = src.includes("youtube.com") || src.includes("youtu.be");
  const isVimeo = src.includes("vimeo.com");

  const embedUrl = isYouTube
    ? `https://www.youtube.com/embed/${src.split("v=")[1]?.split("&")[0] ?? src.split("/").pop()}`
    : isVimeo
      ? `https://player.vimeo.com/video/${src.split("/").pop()}`
      : null;

  if (embedUrl) {
    return (
      <div className="relative h-64 bg-gray-900">
        <iframe
          src={embedUrl}
          title={titleTemplate.replace("{name}", clientName)}
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  // Native <video> fallback for direct .mp4 / .webm URLs
  return (
    <div className="relative h-64 bg-gray-900 overflow-hidden">
      <video
        className="w-full h-full object-cover"
        poster={poster}
        controls
        preload="none"
        aria-label={titleTemplate.replace("{name}", clientName)}
      >
        <source src={src} />
        {browserVideoFallback}
      </video>
      {/* Play overlay badge */}
      <div className="absolute top-2 right-2 bg-black/60 text-white text-[10px] font-medium px-2 py-0.5 rounded-full flex items-center gap-1 pointer-events-none">
        <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M8 5v14l11-7z" />
        </svg>
        {videoBadge}
      </div>
    </div>
  );
}

function TestimonialCard({
  item,
  starsAria,
  videoTitle,
  browserVideoFallback,
  videoBadge,
  projectAlt,
}: {
  item: Testimonial;
  starsAria: string;
  videoTitle: string;
  browserVideoFallback: string;
  videoBadge: string;
  projectAlt: string;
}) {
  return (
    <article className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm overflow-hidden flex flex-col">
      {/* ── media ── */}
      <div className="shrink-0">
        {item.media.type === "video" ? (
          <VideoEmbed
            src={item.media.src}
            poster={item.media.poster}
            clientName={item.name}
            titleTemplate={videoTitle}
            browserVideoFallback={browserVideoFallback}
            videoBadge={videoBadge}
          />
        ) : (
          <ImageMosaic srcs={item.media.srcs} projectAlt={projectAlt} />
        )}
      </div>

      {/* ── body ── */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        {/* tag + stars */}
        <div className="flex items-center justify-between">
          {item.tag && (
            <span className="text-[10px] font-semibold tracking-widest uppercase text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/30 border border-amber-200 dark:border-amber-800 px-2 py-0.5 rounded">
              {item.tag}
            </span>
          )}
          {item.stars && <StarRating count={item.stars} ariaTemplate={starsAria} />}
        </div>

        {/* quote */}
        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed flex-1">
          <span className="text-amber-500 font-serif text-xl leading-none mr-1">&ldquo;</span>
          {item.quote}
          <span className="text-amber-500 font-serif text-xl leading-none ml-1">&rdquo;</span>
        </p>

        {/* divider + client */}
        <div className="pt-3 border-t border-gray-100 dark:border-gray-700 flex items-center gap-3">
          {/* avatar */}
          <div className="w-8 h-8 rounded-full bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-400 flex items-center justify-center text-xs font-semibold shrink-0">
            {item.name
              .split(" ")
              .slice(0, 2)
              .map((n) => n[0])
              .join("")}
          </div>
          <div className="min-w-0">
            <h2 className="text-sm font-semibold text-gray-900 dark:text-white truncate">
              {item.name}
            </h2>
            <p className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1">
              <svg
                className="w-3 h-3 shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              {item.location}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

// ─── page ─────────────────────────────────────────────────────────────────────

export default function TestimonialsPage({ locale = "en" }: { locale?: Locale }) {
  const messages = getMessages(locale);
  const testimonials = messages.testimonial.testimonials as Testimonial[];

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <ScrollTagger />

      {/* hero */}
      <section className="py-8 md:py-12 bg-gray-50/70 dark:bg-gray-800/50 border-b border-gray-100 dark:border-gray-700">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-5 lg:px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-5 tracking-tight">
            {messages.testimonial.title}
          </h1>
          <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {messages.testimonial.subtitle}
          </p>
        </div>
      </section>

      {/* grid */}
      <section className="py-8 md:py-12">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-5 lg:px-6 grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <TestimonialCard
              key={item.name}
              item={item}
              starsAria={messages.testimonial.starsAria}
              videoTitle={messages.testimonial.videoTitle}
              browserVideoFallback={messages.testimonial.browserVideoFallback}
              videoBadge={messages.testimonial.videoBadge}
              projectAlt={messages.testimonial.projectAlt}
            />
          ))}
        </div>
      </section>

      <ContactCTA locale={locale} />
    </main>
  );
}
