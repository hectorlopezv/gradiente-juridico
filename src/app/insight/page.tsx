import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { successCases } from "@/lib/cases";

export const metadata: Metadata = {
  title: "Insight | Gradiente Jurídico",
  description:
    "Insight sobre propiedad intelectual en Colombia: marcas, software, IA y gestión del activo. Análisis, no asesoría.",
};

export default function InsightPage() {
  return (
    <>
      <Header />
      <main className="overflow-x-hidden">
        <PageHero
          kicker="Insight"
          title="Insight"
          description="Análisis sobre marcas, software, IA y el marco colombiano (SIC, DNDA). El método de trabajo se ilustra de forma anonimizada; esto no sustituye un encargo."
        />
        <section id="contenido" className="bg-white py-16 lg:py-24">
          <div className="mx-auto grid max-w-[1400px] gap-x-8 gap-y-16 px-4 sm:px-6 md:grid-cols-2 lg:px-10">
            {successCases.map((item, index) => (
              <Reveal key={item.slug} delay={index * 80}>
                <Link href={`/insight/${item.slug}`} className="group block">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={item.image}
                      alt=""
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(min-width: 768px) 50vw, 100vw"
                    />
                  </div>
                  <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                    {item.kicker}
                  </p>
                  <h2 className="mt-2 font-heading text-2xl font-semibold uppercase leading-snug tracking-wide group-hover:text-primary sm:text-3xl">
                    {item.title}
                  </h2>
                  <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
                    {item.summary}
                  </p>
                  <span className="cta-link cta-link-red mt-5">Leer más</span>
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
