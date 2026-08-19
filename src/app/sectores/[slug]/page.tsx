import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { AreaPage } from "@/components/area-page";
import { getService } from "@/lib/data";
import { getSector, sectors } from "@/lib/sectors";
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
  const sector = getSector(slug);
  if (!sector) return {};
  return pageMeta({
    title: sector.title,
    description: sector.description,
    path: `/sectores/${sector.slug}`,
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
  const sector = getSector(slug);
  if (!sector) notFound();

  const relatedPractices = sector.serviceSlugs
    .map((serviceSlug) => getService(serviceSlug))
    .filter((item): item is NonNullable<typeof item> => Boolean(item));
  const others = sectors.filter((item) => item.slug !== sector.slug);

  return (
    <>
      <Header />
      <AreaPage
        kicker="Sectores"
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
        ctaLabel="Hablemos de este sector"
        sidebarExtra={
          <>
            <p className="mt-10 text-[12px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Áreas relacionadas
            </p>
            <ul className="mt-4 space-y-3">
              {relatedPractices.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/practica/${service.slug}`}
                    className="text-[17px] hover:text-primary"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </>
        }
        relatedKicker="Otros sectores"
        related={others.map((item) => ({
          href: `/sectores/${item.slug}`,
          title: item.title,
          description: item.description,
        }))}
        relatedIndexHref="/sectores"
        relatedIndexLabel="Todos los sectores"
      />
      <Footer />
    </>
  );
}
