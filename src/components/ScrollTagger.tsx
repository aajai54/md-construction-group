"use client";

import { useEffect } from "react";

export default function ScrollTagger() {
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>("[data-tagger]"));
    if (!sections.length) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      sections.forEach((section) => section.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const target = entry.target as HTMLElement;
          const items = target.querySelectorAll<HTMLElement>("[data-tagger-item]");

          items.forEach((item, index) => {
            item.style.setProperty("--tagger-delay", `${index * 90}ms`);
          });

          target.classList.add("is-visible");
          observer.unobserve(target);
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -10% 0px",
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return null;
}
