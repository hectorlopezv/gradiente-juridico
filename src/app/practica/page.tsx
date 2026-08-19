import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { services } from "@/lib/data";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Práctica",
  description:
    "Áreas de práctica en propiedad intelectual: marcas, patentes, diseños, derechos de autor y asesoramiento estratégico en Colombia.",
  path: "/practica",
});

export default function PracticaPage() {
  return (
    <>
      <Header />
      <main className="overflow-x-hidden">
        <PageHero
          kicker="Práctica"
          title="Áreas de práctica"
          description="Cada área tiene su propio enfoque. Elige la que corresponde a tu activo y conversamos el siguiente paso por WhatsApp."
        />
        <section id="contenido" className="bg-white py-16 lg:py-24">
          <div className="mx-auto grid max-w-[1400px] gap-x-8 gap-y-16 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-3 lg:px-10">
            {services.map((service, index) => (
              <Reveal key={service.slug} delay={index * 80}>
                <Link
                  href={`/practica/${service.slug}`}
                  className="group block"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={service.image}
                      alt=""
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    />
                  </div>
                  <h2 className="mt-5 font-heading text-2xl font-semibold uppercase leading-snug tracking-wide group-hover:text-primary">
                    {service.title}
                  </h2>
                  <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                  <span className="cta-link cta-link-red mt-5">Ver área</span>
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
