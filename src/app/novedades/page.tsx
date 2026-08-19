import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { newsItems } from "@/lib/data";

export const metadata: Metadata = {
  title: "Novedades | Gradiente Jurídico",
  description:
    "Novedades de Gradiente Jurídico sobre propiedad intelectual.",
};

export default function NovedadesPage() {
  return (
    <>
      <Header />
      <main className="overflow-x-hidden">
        <PageHero
          kicker="Novedades"
          title="Novedades"
          description="Lo último que publicamos: alertas y lecturas cortas. El análisis a fondo está en Insight."
        />
        <section id="contenido" className="bg-white py-16 lg:py-24">
          <div className="mx-auto max-w-[900px] px-4 sm:px-6">
            {newsItems.map((item, index) => (
              <Reveal key={item.title} delay={index * 60}>
                <Link
                  href={item.href}
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
                  <span className="cta-link cta-link-red mt-5">Leer insight</span>
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
