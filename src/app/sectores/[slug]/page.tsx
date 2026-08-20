import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AreaPage } from "@/components/area-page";
import { LocaleLink } from "@/components/language-switch";
import { getService } from "@/lib/data";
import { getLocale } from "@/lib/locale-server";
import { prefixHref } from "@/lib/locale";
import { messages } from "@/lib/messages";
import { getSector, listSectors, sectors } from "@/lib/sectors";
import { pageMeta } from "@/lib/seo";

export function generateStaticParams() {
  return sectors.map((sector) => ({ slug: sector.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const locale = await getLocale();
  const sector = getSector(slug, locale);
  if (!sector) return {};
  return pageMeta({
    title: sector.title,
    description: sector.description,
    path: prefixHref(`/sectores/${sector.slug}`, locale),
    image: sector.image,
    imageAlt: sector.title,
  });
}

export default async function SectorPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const locale = await getLocale();
  const t = messages(locale);
  const sector = getSector(slug, locale);
  if (!sector) notFound();

  const relatedPractices = sector.serviceSlugs
    .map((serviceSlug) => getService(serviceSlug, locale))
    .filter((item): item is NonNullable<typeof item> => Boolean(item));
  const others = listSectors(locale).filter((item) => item.slug !== sector.slug);

  return (
    <AreaPage
      locale={locale}
      kicker={t.navSectors}
      title={sector.title}
      description={sector.description}
      image={sector.image}
      framework={sector.framework}
      context={sector.context}
      when={sector.when}
      process={sector.process}
      typicalIssues={sector.typicalIssues}
      audience={sector.audience}
      includes={sector.includes}
      ctaLabel={t.talkThisSector}
      sidebarExtra={
        <>
          <p className="mt-10 text-[12px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            {t.relatedAreas}
          </p>
          <ul className="mt-4 space-y-3">
            {relatedPractices.map((service) => (
              <li key={service.slug}>
                <LocaleLink
                  href={`/practica/${service.slug}`}
                  locale={locale}
                  className="text-[17px] hover:text-primary"
                >
                  {service.title}
                </LocaleLink>
              </li>
            ))}
          </ul>
        </>
      }
      relatedKicker={t.otherSectors}
      related={others.map((item) => ({
        href: `/sectores/${item.slug}`,
        title: item.title,
        description: item.description,
      }))}
      relatedIndexHref="/sectores"
      relatedIndexLabel={t.allSectors}
    />
  );
}
