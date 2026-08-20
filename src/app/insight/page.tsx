import { InsightFeed } from "@/components/insight-feed";
import { PageHero } from "@/components/page-hero";
import { INSIGHT_PAGE_SIZE, paginateInsights } from "@/lib/insights";
import { getLocale } from "@/lib/locale-server";
import { messages } from "@/lib/messages";
import { pageMeta } from "@/lib/seo";

export async function generateMetadata() {
  const locale = await getLocale();
  const t = messages(locale);
  return pageMeta({
    title: "Insight",
    description: t.insightMetaDesc,
    path: locale === "en" ? "/en/insight" : "/insight",
  });
}

export default async function InsightPage() {
  const locale = await getLocale();
  const t = messages(locale);
  const { items, total } = paginateInsights(locale, 1, INSIGHT_PAGE_SIZE);

  return (
    <main className="overflow-x-hidden">
      <PageHero
        kicker="Insight"
        title="Insight"
        description={t.insightPageDesc}
      />
      <section id="contenido" className="bg-white py-16 lg:py-24">
        <InsightFeed initial={items} total={total} locale={locale} />
      </section>
    </main>
  );
}
