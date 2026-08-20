import { getInsight, listInsights } from "@/lib/insights";
import type { Locale } from "@/lib/locale";

export function getCase(slug: string, locale: Locale = "es") {
  return getInsight(slug, locale);
}

export function successCasesFor(locale: Locale = "es") {
  return listInsights(locale);
}

/** @deprecated use listInsights — kept for older imports */
export const successCases = listInsights("es");
