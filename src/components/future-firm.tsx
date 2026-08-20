import Image from "next/image";
import { ChatCta } from "@/components/chat-cta";
import { CtaLink } from "@/components/cta-link";
import { LocaleLink } from "@/components/language-switch";
import { Reveal } from "@/components/reveal";
import {
  images,
  listServices,
  listWhyChoose,
  localizedBrand,
} from "@/lib/data";
import { messages } from "@/lib/messages";
import type { Locale } from "@/lib/locale";

export function FutureFirm({ locale = "es" }: { locale?: Locale }) {
  const t = messages(locale);
  const copy = localizedBrand(locale);
  const practice = listServices(locale);
  const why = listWhyChoose(locale);
  return (
    <>
      <section id="nosotros" className="bg-white py-20 lg:py-28">
        <div className="mx-auto grid max-w-[1400px] items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-10">
          <Reveal>
            <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              {t.aboutKicker}
            </p>
            <h2 className="mt-4 font-heading text-4xl font-bold uppercase leading-[0.95] tracking-tight sm:text-5xl lg:text-6xl">
              {t.aboutTitle}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              {t.firmLead} {copy.aboutFirm}
            </p>
            <CtaLink href="/nosotros" variant="red" className="mt-8" locale={locale}>
              {t.aboutStrategy}
            </CtaLink>
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

      <section id="servicios" className="bg-white pb-20 lg:pb-28">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
          <Reveal>
            <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              {t.practiceAreas}
            </p>
            <h2 className="mt-4 max-w-4xl font-heading text-4xl font-bold uppercase leading-[0.95] tracking-tight sm:text-5xl lg:text-6xl">
              {t.ourServices}
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              {copy.aboutPractice}
            </p>
          </Reveal>

          <div className="mt-14 grid gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {practice.map((service, index) => (
              <Reveal key={service.title} delay={index * 90}>
                <LocaleLink
                  href={`/practica/${service.slug}`}
                  locale={locale}
                  className="group block"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={service.image}
                      alt=""
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    />
                  </div>
                  <h3 className="mt-5 font-heading text-2xl font-semibold uppercase tracking-wide transition-colors group-hover:text-primary">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
                    {service.body}
                  </p>
                  <span className="cta-link cta-link-red mt-5">
                    {t.moreInfo}
                  </span>
                </LocaleLink>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section
        id="por-que-elegirnos"
        className="relative min-h-[560px] overflow-hidden bg-black text-white"
      >
        <Image
          src={images.opportunity}
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 mx-auto flex min-h-[560px] max-w-[1400px] items-center px-4 py-20 sm:px-6 lg:px-10">
          <Reveal className="max-w-3xl">
            <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-white/70">
              {t.whyUs}
            </p>
            <h2 className="mt-4 font-heading text-4xl font-bold uppercase leading-[0.95] tracking-tight sm:text-5xl lg:text-6xl">
              {t.visionTitle}
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
              {t.nablaLine}
            </p>
            <ChatCta className="mt-8">{t.talkCase}</ChatCta>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
          <div className="grid gap-0 md:grid-cols-2">
            {why.map((item, index) => (
              <Reveal key={item.number} delay={index * 80}>
                <article className="group border-t border-black/10 px-0 py-10 md:px-10 md:even:border-l">
                  <p className="text-[13px] font-semibold tracking-[0.14em] text-primary">
                    {item.number}
                  </p>
                  <h3 className="mt-4 font-heading text-2xl font-semibold uppercase leading-snug tracking-wide transition-colors group-hover:text-primary sm:text-3xl">
                    {item.title}
                  </h3>
                  <p className="mt-4 max-w-md text-[15px] leading-relaxed text-muted-foreground">
                    {item.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary">
        <div className="mx-auto flex max-w-[1400px] flex-col items-start justify-between gap-6 px-4 py-10 sm:px-6 lg:flex-row lg:items-center lg:px-10">
          <p className="font-heading text-2xl font-semibold uppercase tracking-wide text-white sm:text-3xl">
            {copy.missionBanner}
          </p>
          <ChatCta className="shrink-0">{t.letsTalk}</ChatCta>
        </div>
      </section>
    </>
  );
}
