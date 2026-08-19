import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { AreaPage } from "@/components/area-page";
import { getService, services } from "@/lib/data";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: `${service.title} | Gradiente Jurídico`,
    description: service.description,
  };
}

export default async function PracticaAreaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const others = services.filter((item) => item.slug !== service.slug);

  return (
    <>
      <Header />
      <AreaPage
        kicker="Práctica"
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
        ctaLabel="Hablemos de esta área"
        relatedKicker="Otras áreas"
        related={others.map((item) => ({
          href: `/practica/${item.slug}`,
          title: item.title,
          description: item.description,
        }))}
        relatedIndexHref="/practica"
        relatedIndexLabel="Todas las áreas"
      />
      <Footer />
    </>
  );
}
