import Image from "next/image";
import { PageHero } from "@/components/page-hero";
import { ChatCta } from "@/components/chat-cta";
import { Reveal } from "@/components/reveal";
import { LocaleLink } from "@/components/language-switch";
import { getLocale } from "@/lib/locale-server";
import { prefixHref } from "@/lib/locale";
import { messages } from "@/lib/messages";
import { pageMeta } from "@/lib/seo";
import { listSectors } from "@/lib/sectors";

export async function generateMetadata() {
  const locale = await getLocale();
  const t = messages(locale);
  return pageMeta({
    title: t.navSectors,
    description: t.sectorsMetaDesc,
    path: prefixHref("/sectores", locale),
  });
}

export default async function SectoresPage() {
  const locale = await getLocale();
  const t = messages(locale);
  const items = listSectors(locale);
  return (
    <main className="overflow-x-hidden">
      <PageHero
        kicker={t.navSectors}
        title={t.sectorsTitle}
        description={t.sectorsDesc}
      />
      <section id="contenido" className="bg-white py-16 lg:py-24">
        <div className="mx-auto grid max-w-[1400px] gap-x-8 gap-y-16 px-4 sm:px-6 md:grid-cols-3 lg:px-10">
          {items.map((sector, index) => (
            <Reveal key={sector.slug} delay={index * 80}>
              <LocaleLink
                href={`/sectores/${sector.slug}`}
                locale={locale}
                className="group block"
              >
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
                <span className="cta-link cta-link-red mt-5">{t.seeSector}</span>
              </LocaleLink>
            </Reveal>
          ))}
        </div>
        <div className="mx-auto mt-16 max-w-[1400px] px-4 sm:px-6 lg:px-10">
          <ChatCta variant="red">{t.talkYourSector}</ChatCta>
        </div>
      </section>
    </main>
  );
}
