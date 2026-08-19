import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { PageHero } from "@/components/page-hero";
import { ChatCta } from "@/components/chat-cta";
import { Reveal } from "@/components/reveal";
import { sectors } from "@/lib/sectors";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Sectores",
  description:
    "Propiedad intelectual para tecnología, software y emprendimiento. Cómo protegemos el activo en cada sector.",
  path: "/sectores",
});

export default function SectoresPage() {
  return (
    <>
      <Header />
      <main className="overflow-x-hidden">
        <PageHero
          kicker="Sectores"
          title="Dónde aplicamos la práctica"
          description="Misma firma, distinto contexto. Elige el sector de tu negocio y conversamos cómo proteger lo que lo hace distinto."
        />
        <section id="contenido" className="bg-white py-16 lg:py-24">
          <div className="mx-auto grid max-w-[1400px] gap-x-8 gap-y-16 px-4 sm:px-6 md:grid-cols-3 lg:px-10">
            {sectors.map((sector, index) => (
              <Reveal key={sector.slug} delay={index * 80}>
                <Link href={`/sectores/${sector.slug}`} className="group block">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={sector.image}
                      alt=""
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(min-width: 768px) 33vw, 100vw"
                    />
                  </div>
                  <h2 className="mt-5 font-heading text-2xl font-semibold uppercase tracking-wide group-hover:text-primary">
                    {sector.title}
                  </h2>
                  <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
                    {sector.description}
                  </p>
                  <span className="cta-link cta-link-red mt-5">Ver sector</span>
                </Link>
              </Reveal>
            ))}
          </div>
          <div className="mx-auto mt-16 max-w-[1400px] px-4 sm:px-6 lg:px-10">
            <ChatCta variant="red">Hablemos de tu sector</ChatCta>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
