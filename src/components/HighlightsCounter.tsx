"use client";

import { useEffect, useMemo, useState } from "react";

type Highlight = {
  value: string;
  label: string;
};

type ParsedValue = {
  target: number;
  suffix: string;
};

function parseHighlightValue(value: string): ParsedValue {
  const match = value.trim().match(/^(\d+)(.*)$/);

  if (!match) {
    return { target: 0, suffix: value };
  }

  return {
    target: Number(match[1]),
    suffix: match[2],
  };
}

export default function HighlightsCounter({ highlights }: { highlights: Highlight[] }) {
  const parsedValues = useMemo(
    () => highlights.map((item) => parseHighlightValue(item.value)),
    [highlights],
  );

  const [counts, setCounts] = useState<number[]>(() =>
    parsedValues.map((item) => (item.target > 0 ? 1 : 0)),
  );

  useEffect(() => {
    if (typeof window === "undefined") return;

    const shouldReduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (shouldReduceMotion) {
      setCounts(parsedValues.map((item) => item.target));
      return;
    }

    const duration = 1400;
    const startTime = performance.now();
    let frameId = 0;

    const update = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      setCounts(
        parsedValues.map((item) => {
          if (item.target <= 0) return 0;
          if (progress >= 1) return item.target;
          return Math.max(1, Math.round(item.target * eased));
        }),
      );

      if (progress < 1) {
        frameId = window.requestAnimationFrame(update);
      }
    };

    frameId = window.requestAnimationFrame(update);

    return () => {
      window.cancelAnimationFrame(frameId);
    };
  }, [parsedValues]);

  return (
    <div className="pt-8 border-t border-gray-200 dark:border-gray-800 grid grid-cols-3 gap-4">
      {highlights.map((item, index) => {
        const parsed = parsedValues[index];
        const displayValue = parsed.target > 0 ? `${counts[index]}${parsed.suffix}` : item.value;

        return (
          <div key={item.label} className="flex flex-col border-r last:border-r-0 border-gray-200 dark:border-gray-800 pr-2">
            <span className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight">
              {displayValue}
            </span>
            <span className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              {item.label}
            </span>
          </div>
        );
      })}
    </div>
  );
}
