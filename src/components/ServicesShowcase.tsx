"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

type ServiceItem = {
  title: string;
  hook: string;
  points: string[];
};

function ServiceIcon({ index }: { index: number }) {
  const iconClassName = "h-4 w-4";
  const sharedProps = {
    viewBox: "0 0 24 24",
    "aria-hidden": "true" as const,
    className: iconClassName,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (index % 6) {
    case 0:
      return (
        <svg {...sharedProps}>
          <path d="M14 4l6 6" />
          <path d="M17 3l4 4" />
          <path d="M3 21l7-2 9-9-5-5-9 9-2 7z" />
          <path d="M12 8l4 4" />
        </svg>
      );
    case 1:
      return (
        <svg {...sharedProps}>
          <path d="M4 18h16" />
          <path d="M6 18V9l6-5 6 5v9" />
          <path d="M10 18v-4h4v4" />
          <path d="M4 9h16" />
        </svg>
      );
    case 2:
      return (
        <svg {...sharedProps}>
          <path d="M4 20h16" />
          <path d="M6 20V8h12v12" />
          <path d="M9 8V4h6v4" />
          <path d="M9 12h2" />
          <path d="M13 12h2" />
          <path d="M9 16h2" />
          <path d="M13 16h2" />
        </svg>
      );
    case 3:
      return (
        <svg {...sharedProps}>
          <path d="M3 19h18" />
          <path d="M8 19V9h8v10" />
          <path d="M12 9V5" />
          <path d="M9.5 6.5L12 5l2.5 1.5" />
          <path d="M10 13h4" />
        </svg>
      );
    case 4:
      return (
        <svg {...sharedProps}>
          <path d="M4 19h16" />
          <path d="M6 19V11l6-4 6 4v8" />
          <path d="M12 7V4" />
          <path d="M9 14h6" />
          <path d="M12 11v6" />
        </svg>
      );
    default:
      return (
        <svg {...sharedProps}>
          <path d="M5 20h14" />
          <path d="M7 20V7h10v13" />
          <path d="M7 10h10" />
          <path d="M10 7V4h4v3" />
          <path d="M10 14h4" />
        </svg>
      );
  }
}

export default function ServicesShowcase({ services }: { services: ServiceItem[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isCursorInsideRef = useRef(false);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const onWheel = (event: WheelEvent) => {
      const isLargeDisplay = window.matchMedia("(min-width: 1024px)").matches;
      if (!isLargeDisplay) return;
      if (Math.abs(event.deltaY) < Math.abs(event.deltaX)) return;
      if (container.scrollWidth <= container.clientWidth) return;

      event.preventDefault();
      container.scrollBy({ left: event.deltaY, behavior: "auto" });
    };

    container.addEventListener("wheel", onWheel, { passive: false });
    return () => {
      container.removeEventListener("wheel", onWheel);
    };
  }, []);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const intervalId = window.setInterval(() => {
      if (isCursorInsideRef.current) return;
      if (container.scrollWidth <= container.clientWidth) return;

      const track = container.firstElementChild as HTMLElement | null;
      if (!track) return;

      const firstCard = track.firstElementChild as HTMLElement | null;
      const gap = Number.parseFloat(window.getComputedStyle(track).gap || "0");
      const step = firstCard ? firstCard.offsetWidth + gap : container.clientWidth / 3;
      const maxScrollLeft = container.scrollWidth - container.clientWidth;
      const next = container.scrollLeft + step;

      if (next >= maxScrollLeft - 1) {
        container.scrollTo({ left: 0, behavior: "smooth" });
        return;
      }

      container.scrollTo({ left: next, behavior: "smooth" });
    }, 4000);

    return () => {
      window.clearInterval(intervalId);
    };
  }, []);

  return (
    <section
      className="w-full"
      aria-label="Services"
      onMouseEnter={() => {
        isCursorInsideRef.current = true;
      }}
      onMouseLeave={() => {
        isCursorInsideRef.current = false;
      }}
    >
      <div
        ref={scrollRef}
        className="w-full overflow-x-auto overflow-y-hidden [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        <div className="flex snap-x snap-mandatory gap-4 md:gap-6 px-4 md:px-6" data-tagger-item>
          {services.map((service, index) => (
            <article
              key={service.title}
              className="group flex min-h-full shrink-0 snap-start flex-col basis-[85%] sm:basis-[70%] md:basis-[50%] lg:basis-[calc((100%-3rem)/3)] rounded-2xl border border-gray-200/80 bg-gradient-to-br from-white to-amber-50/30 p-5 shadow-sm transition-all hover:shadow-md dark:border-gray-700/80 dark:from-gray-800 dark:to-gray-800/70 md:p-6"
            >
              <div className="mb-4 flex items-start justify-between gap-4">
                <div>
                  {/* <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-orange-600">
                    Service {(index + 1).toString().padStart(2, "0")}
                  </p> */}
                  <h3 className="text-lg font-bold leading-tight text-gray-900 dark:text-white md:text-xl">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm italic text-gray-600 dark:text-gray-300">{service.hook}</p>
                </div>
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-amber-300/70 bg-white/70 text-sm font-bold text-orange-600 dark:border-amber-800/70 dark:bg-gray-900/40 dark:text-orange-400">
                  <ServiceIcon index={index} />
                </span>
              </div>

              <div className="mb-5 space-y-2.5">
                {service.points.map((point) => (
                  <p
                    key={point}
                    className="flex items-start gap-2.5 text-sm leading-relaxed text-gray-700 dark:text-gray-300"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500" />
                    <span>{point}</span>
                  </p>
                ))}
              </div>

              <Link
                href="#contact"
                className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-orange-600 transition-all group-hover:gap-3 dark:text-orange-400"
              >
                Discuss This Service
                <span aria-hidden>→</span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
