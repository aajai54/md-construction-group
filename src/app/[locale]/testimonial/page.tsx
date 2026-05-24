// import Link from "next/link";
import Image from "next/image";
import ScrollTagger from "@/components/ScrollTagger";

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

const testimonialBasePath = "/images/testimonial";

const testimonials: Testimonial[] = [
  {
    name: "Marcus DeLeon",
    location: "kolathur, Chennai",
    tag: "Duplex villa",
    stars: 5,
    quote:
      "From groundbreaking to ribbon-cutting their team was flawless. Every milestone was met on time and the finish quality exceeded everything in the brief.",
    media: {
      type: "images",
      srcs: [
        `${testimonialBasePath}/1/1.jpg`,
        `${testimonialBasePath}/1/2.jpg`,
        `${testimonialBasePath}/1/3.jpg`,
      ],
    },
  },
  {
    name: "Priya & Tom Hargreaves",
    location: "ECR, Chennai",
    tag: "Residential",
    stars: 5,
    quote:
      "We were nervous about such a big renovation, but the crew made us feel informed at every step. Neighbours keep asking who built it.",
    media: {
      type: "images",
      srcs: [
        `${testimonialBasePath}/2/1.jpg`,
        `${testimonialBasePath}/2/2.jpg`,
        `${testimonialBasePath}/2/3.jpg`,
      ],
    },
  },
  {
    name: "Sandra Kowalski",
    location: "Velachery, Chennai",
    tag: "Interior Turnkey",
    stars: 5,
    quote:
      "Their team delivered precision engineering six weeks ahead of schedule with zero incidents. Remarkable professionalism throughout.",
    media: {
      type: "video",
      src: `${testimonialBasePath}/3/1.mp4`,
    },
  },
  {
    name: "Daniel Okafor",
    location: "Saidapet, Chennai",
    tag: "Renovation",
    stars: 4,
    quote:
      "80,000 sq ft in under five months. The project manager kept communication tight and the steelwork is exactly to spec. Would use again.",
    media: {
      type: "video",
      src: `${testimonialBasePath}/4/1.mp4`,
    },
  },
  {
    name: "Helena Rousseau",
    location: "Velachery, Chennai",
    tag: "Restoration",
    stars: 5,
    quote:
      "Their restoration expertise preserved every original feature we cared about while meeting all modern building codes. Guests are blown away.",
    media: {
      type: "images",
      srcs: [
        `${testimonialBasePath}/5/1.jpg`,
        `${testimonialBasePath}/5/2.jpg`,
        `${testimonialBasePath}/5/3.jpg`,
      ],
    },
  },
  {
    name: "James Whitfield",
    location: "Velachery, Chennai",
    tag: "Education",
    stars: 5,
    quote:
      "They built around a live school calendar — working weekends to minimise disruption. Students walked in on day one to a fully operational facility.",
    media: {
      type: "images",
      srcs: [
        `${testimonialBasePath}/6/1.jpg`,
        `${testimonialBasePath}/6/2.jpg`,
        `${testimonialBasePath}/6/3.jpg`,
      ],
    },
  },
];

// ─── sub-components ───────────────────────────────────────────────────────────

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
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

function ImageMosaic({ srcs }: { srcs: string[] }) {
  if (srcs.length === 1) {
    return (
      <div className="h-64 overflow-hidden">
        <Image src={srcs[0]} alt="Project" width={800} height={600} className="w-full h-full object-cover" />
      </div>
    );
  }

  if (srcs.length === 2) {
    return (
      <div className="grid grid-cols-2 gap-px h-64 overflow-hidden">
        {srcs.map((src, i) => (
          <Image key={i} src={src} alt="Project" width={800} height={600} className="w-full h-full object-cover" />
        ))}
      </div>
    );
  }

  // 3 images: 1 large left + 2 stacked right
  return (
    <div className="grid grid-cols-2 gap-px h-64 overflow-hidden">
      <Image src={srcs[0]} alt="Project" width={800} height={1200} className="w-full h-full object-cover row-span-2" />
      <div className="grid grid-rows-2 gap-px">
        <Image src={srcs[1]} alt="Project" width={800} height={600} className="w-full h-full object-cover" />
        <Image src={srcs[2]} alt="Project" width={800} height={600} className="w-full h-full object-cover" />
      </div>
    </div>
  );
}

function VideoEmbed({
  src,
  poster,
  clientName,
}: {
  src: string;
  poster?: string;
  clientName: string;
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
          title={`${clientName} testimonial video`}
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
        aria-label={`${clientName} testimonial video`}
      >
        <source src={src} />
        Your browser does not support the video tag.
      </video>
      {/* Play overlay badge */}
      <div className="absolute top-2 right-2 bg-black/60 text-white text-[10px] font-medium px-2 py-0.5 rounded-full flex items-center gap-1 pointer-events-none">
        <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M8 5v14l11-7z" />
        </svg>
        Video
      </div>
    </div>
  );
}

function TestimonialCard({ item }: { item: Testimonial }) {
  return (
    <article className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm overflow-hidden flex flex-col">
      {/* ── media ── */}
      <div className="shrink-0">
        {item.media.type === "video" ? (
          <VideoEmbed
            src={item.media.src}
            poster={item.media.poster}
            clientName={item.name}
          />
        ) : (
          <ImageMosaic srcs={item.media.srcs} />
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
          {item.stars && <StarRating count={item.stars} />}
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

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <ScrollTagger />

      {/* hero */}
      <section className="py-8 md:py-12 bg-gray-50/70 dark:bg-gray-800/50 border-b border-gray-100 dark:border-gray-700">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-5 lg:px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-5 tracking-tight">
            What Our Clients Say
          </h1>
          <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Real feedback from homeowners and businesses who trusted MD Construction.
          </p>
        </div>
      </section>

      {/* grid */}
      <section className="py-8 md:py-12">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-5 lg:px-6 grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <TestimonialCard key={item.name} item={item} />
          ))}
        </div>
      </section>

    </main>
  );
}
