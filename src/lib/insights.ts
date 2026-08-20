import "server-only";
import fs from "node:fs";
import path from "node:path";
import type { Locale } from "@/lib/locale";
import {
  INSIGHT_PAGE_SIZE,
  type Insight,
  type Text,
} from "@/lib/insights-shared";

export type { Insight };
export { INSIGHT_PAGE_SIZE };

type InsightRecord = {
  slug: string;
  publishedAt: string;
  image: string;
  kicker: Text;
  title: Text;
  summary: Text;
  dateLabel: Text;
  sections: { title: Text; paragraphs: Text[] }[];
  takeaways: Text[];
};

function asText(value: unknown): Text {
  if (value && typeof value === "object" && "es" in value) {
    const v = value as Text;
    return { es: v.es ?? "", en: v.en || v.es || "" };
  }
  const s = typeof value === "string" ? value : "";
  return { es: s, en: s };
}

function readName(value: unknown, fallback: string) {
  if (typeof value === "string" && value) return value;
  if (value && typeof value === "object" && "slug" in value) {
    const slug = (value as { slug?: string }).slug;
    if (slug) return slug;
  }
  return fallback;
}

function loadRecords(): InsightRecord[] {
  const dir = path.join(process.cwd(), "content/insights");
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".json"))
    .map((file) => {
      const slugFromFile = file.replace(/\.json$/, "");
      const raw = JSON.parse(
        fs.readFileSync(path.join(dir, file), "utf8")
      ) as Record<string, unknown>;
      const sections = Array.isArray(raw.sections) ? raw.sections : [];
      const takeaways = Array.isArray(raw.takeaways) ? raw.takeaways : [];
      return {
        slug: readName(raw.name, slugFromFile),
        publishedAt: String(raw.publishedAt ?? "1970-01-01").slice(0, 10),
        image: String(raw.image ?? ""),
        kicker: asText(raw.kicker),
        title: asText(raw.title),
        summary: asText(raw.summary),
        dateLabel: asText(raw.dateLabel),
        sections: sections.map((section) => {
          const s = section as {
            title?: unknown;
            paragraphs?: unknown[];
          };
          return {
            title: asText(s.title),
            paragraphs: (s.paragraphs ?? []).map((p) => asText(p)),
          };
        }),
        takeaways: takeaways.map((item) => asText(item)),
      } satisfies InsightRecord;
    })
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

export function localizeInsight(
  record: InsightRecord,
  locale: Locale
): Insight {
  const t = (value: Text) => value[locale] || value.es;
  return {
    slug: record.slug,
    publishedAt: record.publishedAt,
    image: record.image,
    kicker: t(record.kicker),
    title: t(record.title),
    summary: t(record.summary),
    dateLabel: t(record.dateLabel),
    sections: record.sections.map((section) => ({
      title: t(section.title),
      paragraphs: section.paragraphs.map((p) => t(p)),
    })),
    takeaways: record.takeaways.map((item) => t(item)),
  };
}

export function listInsightRecords() {
  return loadRecords();
}

export function listInsights(locale: Locale): Insight[] {
  return loadRecords().map((record) => localizeInsight(record, locale));
}

export function getInsight(slug: string, locale: Locale) {
  const record = loadRecords().find((item) => item.slug === slug);
  return record ? localizeInsight(record, locale) : undefined;
}

export function paginateInsights(locale: Locale, page: number, size = INSIGHT_PAGE_SIZE) {
  const all = listInsights(locale);
  const start = Math.max(0, (page - 1) * size);
  const items = all.slice(start, start + size);
  return {
    items,
    page,
    size,
    total: all.length,
    hasMore: start + items.length < all.length,
  };
}
