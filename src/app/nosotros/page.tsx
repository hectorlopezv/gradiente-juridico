import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { PageHero } from "@/components/page-hero";
import { ChatCta } from "@/components/chat-cta";
import { CtaLink } from "@/components/cta-link";
import { Reveal } from "@/components/reveal";
import { brand, images, whyChooseUs } from "@/lib/data";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Nosotros",
  description:
    "Boutique de propiedad intelectual en Colombia. Protección, innovación y criterio de negocio para marcas, patentes y activos intangibles.",
  path: "/nosotros",
});

export default function NosotrosPage() {
  return (
    <>
      <Header />
      <main className="overflow-x-hidden">
        <PageHero
          kicker="Nosotros"
          title="Tu innovación, nuestra misión"
          description="No entregamos un concepto jurídico aislado: entendemos el activo, el mercado y la decisión que tienes que tomar. Luego protegemos, estructuramos y defendemos."
        />
        <section id="contenido" className="bg-white py-16 lg:py-24">
          <div className="mx-auto grid max-w-[1400px] items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-10">
            <Reveal>
              <h2 className="font-heading text-3xl font-semibold uppercase tracking-wide sm:text-4xl">
                Una firma para el futuro del negocio
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Gradiente Jurídico acompaña a empresas, creadores y titulares de
                intangibles en Colombia y en el exterior. El criterio legal está
                al servicio de lo que diferencia a tu empresa y de las
                relaciones que hacen posible su crecimiento.
              </p>
              <div className="mt-8 flex flex-wrap gap-6">
                <ChatCta variant="red">Hablemos</ChatCta>
                <CtaLink href="/equipo" variant="dark">
                  Ver el equipo
                </CtaLink>
              </div>
            </Reveal>
            <Reveal>
              <div className="relative aspect-[5/4] overflow-hidden">
                <Image
                  src={images.future}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>
            </Reveal>
          </div>
        </section>
        <section className="border-t border-black/10 bg-white py-16 lg:py-24">
          <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
            <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Por qué elegirnos
            </p>
            <div className="mt-10 grid gap-0 md:grid-cols-2">
              {whyChooseUs.map((item) => (
                <article
                  key={item.number}
                  className="border-t border-black/10 py-10 md:px-10 md:even:border-l"
                >
                  <p className="text-[13px] font-semibold tracking-[0.14em] text-primary">
                    {item.number}
                  </p>
                  <h3 className="mt-4 font-heading text-2xl font-semibold uppercase tracking-wide">
                    {item.title}
                  </h3>
                  <p className="mt-4 max-w-md text-[15px] leading-relaxed text-muted-foreground">
                    {item.body}
                  </p>
                </article>
              ))}
            </div>
            <ChatCta variant="red" className="mt-10">
              Hablemos de tu caso
            </ChatCta>
          </div>
        </section>
        <section className="bg-primary">
          <div className="mx-auto flex max-w-[1400px] flex-col gap-6 px-4 py-10 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-10">
            <p className="font-heading text-2xl font-semibold uppercase tracking-wide text-white sm:text-3xl">
              {brand.missionBanner}
            </p>
            <CtaLink href="/practica" className="shrink-0">
              Ver la práctica
            </CtaLink>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
