import Image from "next/image";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { LocaleLink } from "@/components/language-switch";
import { listServices } from "@/lib/data";
import { getLocale } from "@/lib/locale-server";
import { prefixHref } from "@/lib/locale";
import { messages } from "@/lib/messages";
import { pageMeta } from "@/lib/seo";

export async function generateMetadata() {
  const locale = await getLocale();
  const t = messages(locale);
  return pageMeta({
    title: t.practice,
    description: t.practiceMetaDesc,
    path: prefixHref("/practica", locale),
  });
}

export default async function PracticaPage() {
  const locale = await getLocale();
  const t = messages(locale);
  const practice = listServices(locale);
  return (
    <main className="overflow-x-hidden">
      <PageHero
        kicker={t.practice}
        title={t.practiceAreas}
        description={t.practiceDesc}
      />
      <section id="contenido" className="bg-white py-16 lg:py-24">
        <div className="mx-auto grid max-w-[1400px] gap-x-8 gap-y-16 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-3 lg:px-10">
          {practice.map((service, index) => (
            <Reveal key={service.slug} delay={index * 80}>
              <LocaleLink
                href={`/practica/${service.slug}`}
                locale={locale}
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
                <span className="cta-link cta-link-red mt-5">{t.seeArea}</span>
              </LocaleLink>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
