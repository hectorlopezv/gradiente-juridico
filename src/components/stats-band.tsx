"use client";

import { useEffect, useRef, useState } from "react";
import { listStats } from "@/lib/data";
import type { Locale } from "@/lib/locale";

function easeOutCubic(t: number) {
  return 1 - (1 - t) ** 3;
}

function useCount(target: number, start: boolean) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;
    const duration = 1400;
    const started = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      const progress = easeOutCubic(Math.min((now - started) / duration, 1));
      setValue(Math.round(target * progress));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [start, target]);

  return value;
}

function StatItem({
  end,
  suffix,
  label,
}: {
  end: number;
  suffix: string;
  label: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const counted = useCount(end, active);
  const isRatio = suffix.startsWith(":");
  const right = isRatio ? suffix.slice(1) : null;

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduced) {
      setActive(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="flex min-h-[6.5rem] flex-col items-center justify-center border-[#2a2a2a] px-4 py-6 text-center max-sm:border-b max-sm:last:border-b-0 sm:min-h-[7.25rem] sm:max-lg:border-b sm:max-lg:border-r sm:max-lg:even:border-r-0 sm:max-lg:[&:nth-child(n+3)]:border-b-0 lg:min-h-[8rem] lg:border-r lg:last:border-r-0"
    >
      <p className="font-heading text-4xl font-bold leading-none tracking-tight text-[#f3f1ec] tabular-nums sm:text-[2.75rem]">
        {isRatio ? (
          <>
            {counted}
            <span className="text-[#c8c3b8]">:</span>
            {active ? right : "0"}
          </>
        ) : (
          <>
            {counted}
            {suffix ? (
              <span className="text-[#c8c3b8]">{suffix}</span>
            ) : null}
          </>
        )}
      </p>
      <p className="mt-2 max-w-[10rem] text-[13px] leading-snug text-[#9a958c]">
        {label}
      </p>
    </div>
  );
}

export function StatsBand({ locale = "es" }: { locale?: Locale }) {
  const stats = listStats(locale);
  return (
    <section className="bg-[#171717] text-[#f3f1ec]">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <StatItem
            key={stat.label}
            end={stat.end}
            suffix={stat.suffix}
            label={stat.label}
          />
        ))}
      </div>
    </section>
  );
}
