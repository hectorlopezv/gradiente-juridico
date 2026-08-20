"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import type { Insight } from "@/lib/insights-shared";
import { INSIGHT_PAGE_SIZE } from "@/lib/insights-shared";
import type { Locale } from "@/lib/locale";
import { prefixHref } from "@/lib/locale";
import { messages } from "@/lib/messages";
import { LocaleLink } from "@/components/language-switch";

export function InsightFeed({
  initial,
  total,
  locale,
}: {
  initial: Insight[];
  total: number;
  locale: Locale;
}) {
  const t = messages(locale);
  const [items, setItems] = useState(initial);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(initial.length < total);
  const sentinel = useRef<HTMLDivElement>(null);

  const loadMore = useCallback(async () => {
    if (loading || !hasMore) return;
    setLoading(true);
    const nextPage = page + 1;
    const res = await fetch(
      `/api/insights?locale=${locale}&page=${nextPage}`
    );
    const data = (await res.json()) as {
      items: Insight[];
      hasMore: boolean;
    };
    setItems((current) => {
      const seen = new Set(current.map((item) => item.slug));
      return [...current, ...data.items.filter((item) => !seen.has(item.slug))];
    });
    setPage(nextPage);
    setHasMore(data.hasMore);
    setLoading(false);
  }, [hasMore, loading, locale, page]);

  useEffect(() => {
    const node = sentinel.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) void loadMore();
      },
      { rootMargin: "480px" }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [loadMore]);

  return (
    <>
      <div className="mx-auto grid max-w-[1400px] gap-x-8 gap-y-16 px-4 sm:px-6 md:grid-cols-2 lg:px-10">
        {items.map((item) => (
          <LocaleLink
            key={item.slug}
            href={`/insight/${item.slug}`}
            locale={locale}
            className="group block"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src={item.image}
                alt=""
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </div>
            <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              {item.kicker}
            </p>
            <h2 className="mt-2 font-heading text-2xl font-semibold uppercase leading-snug tracking-wide group-hover:text-primary sm:text-3xl">
              {item.title}
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
              {item.summary}
            </p>
            <span className="cta-link cta-link-red mt-5">{t.readMore}</span>
          </LocaleLink>
        ))}
      </div>
      <div ref={sentinel} className="h-8" />
      {hasMore ? (
        <div className="mt-4 flex justify-center">
          <button
            type="button"
            onClick={() => void loadMore()}
            className="cta-link cta-link-red"
            disabled={loading}
          >
            {loading ? t.loading : t.loadMore}
          </button>
        </div>
      ) : null}
      <p className="sr-only">
        {items.length} / {total} · page size {INSIGHT_PAGE_SIZE}
      </p>
    </>
  );
}
