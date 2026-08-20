import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AreaPage } from "@/components/area-page";
import { getService, listServices, services } from "@/lib/data";
import { getLocale } from "@/lib/locale-server";
import { prefixHref } from "@/lib/locale";
import { messages } from "@/lib/messages";
import { pageMeta } from "@/lib/seo";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const locale = await getLocale();
  const service = getService(slug, locale);
  if (!service) return {};
  return pageMeta({
    title: service.title,
    description: service.description,
    path: prefixHref(`/practica/${service.slug}`, locale),
    image: service.image,
    imageAlt: service.title,
  });
}

export default async function PracticaAreaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const locale = await getLocale();
  const t = messages(locale);
  const service = getService(slug, locale);
  if (!service) notFound();

  const others = listServices(locale).filter((item) => item.slug !== service.slug);

  return (
    <AreaPage
      locale={locale}
      kicker={t.practice}
      title={service.title}
      description={service.description}
      image={service.image}
      framework={service.framework}
      context={service.context}
      when={service.when}
      process={service.process}
      typicalIssues={service.typicalIssues}
      audience={service.audience}
      includes={service.includes}
      ctaLabel={t.talkThisArea}
      relatedKicker={t.otherAreas}
      related={others.map((item) => ({
        href: `/practica/${item.slug}`,
        title: item.title,
        description: item.description,
      }))}
      relatedIndexHref="/practica"
      relatedIndexLabel={t.allAreas}
    />
  );
}
