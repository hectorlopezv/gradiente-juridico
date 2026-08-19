import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { experts } from "@/lib/team";

export const metadata: Metadata = {
  title: "Equipo | Gradiente Jurídico",
  description:
    "Conoce a los expertos de Gradiente Jurídico en propiedad intelectual.",
};

export default function EquipoPage() {
  return (
    <>
      <Header />
      <main className="overflow-x-hidden">
        <PageHero
          kicker="Equipo"
          title="Nuestros expertos"
          description="Un equipo cercano, con criterio de negocio, para proteger y potenciar tus activos intangibles."
        />
        <section id="contenido" className="bg-white py-16 lg:py-24">
          <div className="mx-auto grid max-w-[1400px] gap-x-8 gap-y-14 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-10">
            {experts.map((expert, index) => (
              <Reveal key={expert.slug} delay={index * 90}>
                <Link href={`/equipo/${expert.slug}`} className="group block">
                  <div className="relative aspect-[3/4] overflow-hidden bg-muted">
                    <Image
                      src={expert.image}
                      alt={expert.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(min-width: 1024px) 25vw, 50vw"
                    />
                  </div>
                  <h2 className="mt-5 font-heading text-2xl font-semibold uppercase tracking-wide group-hover:text-primary">
                    {expert.name}
                  </h2>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {expert.role}
                  </p>
                  <p className="mt-1 text-sm text-foreground/80">
                    {expert.practice}
                  </p>
                  <p className="mt-3 text-[14px] leading-relaxed text-muted-foreground">
                    {expert.teaser}
                  </p>
                  <span className="cta-link cta-link-red mt-4">Ver perfil</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
