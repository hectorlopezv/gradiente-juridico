import { Hero } from "@/components/hero";
import { Opportunity } from "@/components/opportunity";
import { Trending } from "@/components/trending";
import { StatsBand } from "@/components/stats-band";
import { FutureFirm } from "@/components/future-firm";
import { getLocale } from "@/lib/locale-server";
import { messages } from "@/lib/messages";
import { pageMeta } from "@/lib/seo";
import { prefixHref } from "@/lib/locale";

export async function generateMetadata() {
  const locale = await getLocale();
  const t = messages(locale);
  return pageMeta({
    title: t.homeMetaTitle,
    description: t.homeMetaDesc,
    path: prefixHref("/", locale),
  });
}

export default async function Home() {
  const locale = await getLocale();
  return (
    <main className="overflow-x-hidden">
      <Hero locale={locale} />
      <Opportunity locale={locale} />
      <Trending locale={locale} />
      <StatsBand locale={locale} />
      <FutureFirm locale={locale} />
    </main>
  );
}
