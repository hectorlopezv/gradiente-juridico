import type { Locale } from "@/lib/locale";
import { insightRecords, type InsightRecord } from "@/lib/insights-data";
import {
  INSIGHT_PAGE_SIZE,
  type Insight,
  type Text,
} from "@/lib/insights-shared";

export type { Insight };
export { INSIGHT_PAGE_SIZE };

function localizeInsight(record: InsightRecord, locale: Locale): Insight {
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

const sortedRecords = [...insightRecords].sort((a, b) =>
  b.publishedAt.localeCompare(a.publishedAt)
);

export function listInsights(locale: Locale): Insight[] {
  return sortedRecords.map((record) => localizeInsight(record, locale));
}

export function getInsight(slug: string, locale: Locale) {
  const record = sortedRecords.find((item) => item.slug === slug);
  return record ? localizeInsight(record, locale) : undefined;
}
