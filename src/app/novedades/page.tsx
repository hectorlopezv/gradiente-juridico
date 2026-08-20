import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { LocaleLink } from "@/components/language-switch";
import { listInsights } from "@/lib/insights";
import { getLocale } from "@/lib/locale-server";
import { messages } from "@/lib/messages";
import { pageMeta } from "@/lib/seo";

export async function generateMetadata() {
  const locale = await getLocale();
  const t = messages(locale);
  return pageMeta({
    title: t.news,
    description: t.newsDesc,
    path: locale === "en" ? "/en/novedades" : "/novedades",
  });
}

export default async function NovedadesPage() {
  const locale = await getLocale();
  const t = messages(locale);
  const items = listInsights(locale).slice(0, 8);

  return (
    <main className="overflow-x-hidden">
      <PageHero kicker={t.news} title={t.news} description={t.newsDesc} />
      <section id="contenido" className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-[900px] px-4 sm:px-6">
          {items.map((item, index) => (
            <Reveal key={item.slug} delay={index * 60}>
              <LocaleLink
                href={`/insight/${item.slug}`}
                locale={locale}
                className="group block border-t border-black/10 py-8 first:border-t-0 first:pt-0"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  {item.kicker}
                </p>
                <h2 className="mt-3 font-heading text-2xl font-semibold uppercase leading-snug tracking-wide group-hover:text-primary sm:text-3xl">
                  {item.title}
                </h2>
                <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
                  {item.summary}
                </p>
                <span className="cta-link cta-link-red mt-5">{t.readInsight}</span>
              </LocaleLink>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
