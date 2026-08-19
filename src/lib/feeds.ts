import { successCases } from "@/lib/cases";
import { newsItems } from "@/lib/data";
import { rssXml, siteUrl } from "@/lib/rss";

export function insightRssXml() {
  const origin = siteUrl();
  return rssXml({
    title: "Gradiente Jurídico — Insight",
    link: `${origin}/insight`,
    description: "Insight sobre propiedad intelectual.",
    items: successCases.map((item) => ({
      title: item.title,
      link: `${origin}/insight/${item.slug}`,
      category: item.kicker,
      description: item.summary,
    })),
  });
}

export function novedadesRssXml() {
  const origin = siteUrl();
  return rssXml({
    title: "Gradiente Jurídico — Novedades",
    link: `${origin}/novedades`,
    description: "Novedades de Gradiente Jurídico sobre propiedad intelectual.",
    items: newsItems.map((item) => ({
      title: item.title,
      link: `${origin}${item.href}`,
      category: item.kicker,
      description: item.summary,
    })),
  });
}
