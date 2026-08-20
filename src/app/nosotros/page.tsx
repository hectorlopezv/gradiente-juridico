import Image from "next/image";
import { PageHero } from "@/components/page-hero";
import { ChatCta } from "@/components/chat-cta";
import { CtaLink } from "@/components/cta-link";
import { Reveal } from "@/components/reveal";
import { images, listWhyChoose, localizedBrand } from "@/lib/data";
import { getLocale } from "@/lib/locale-server";
import { prefixHref } from "@/lib/locale";
import { messages } from "@/lib/messages";
import { pageMeta } from "@/lib/seo";

export async function generateMetadata() {
  const locale = await getLocale();
  const t = messages(locale);
  return pageMeta({
    title: t.about,
    description: t.aboutMetaDesc,
    path: prefixHref("/nosotros", locale),
  });
}

export default async function NosotrosPage() {
  const locale = await getLocale();
  const t = messages(locale);
  const copy = localizedBrand(locale);
  const why = listWhyChoose(locale);
  return (
    <main className="overflow-x-hidden">
      <PageHero
        kicker={t.about}
        title={t.aboutHeroTitle}
        description={copy.aboutPractice}
      />
      <section id="contenido" className="bg-white py-16 lg:py-24">
        <div className="mx-auto grid max-w-[1400px] items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-10">
          <Reveal>
            <h2 className="font-heading text-3xl font-semibold uppercase tracking-wide sm:text-4xl">
              {t.firmFuture}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              {copy.aboutFirm}
            </p>
            <div className="mt-8 flex flex-wrap gap-6">
              <ChatCta variant="red">{t.letsTalk}</ChatCta>
              <CtaLink href="/equipo" variant="dark" locale={locale}>
                {t.seeTeam}
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
            {t.whyChoose}
          </p>
          <div className="mt-10 grid gap-0 md:grid-cols-2">
            {why.map((item) => (
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
            {t.talkCase}
          </ChatCta>
        </div>
      </section>
      <section className="bg-primary">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-6 px-4 py-10 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <p className="font-heading text-2xl font-semibold uppercase tracking-wide text-white sm:text-3xl">
            {copy.missionBanner}
          </p>
          <CtaLink href="/practica" className="shrink-0" locale={locale}>
            {t.seePractice}
          </CtaLink>
        </div>
      </section>
    </main>
  );
}
