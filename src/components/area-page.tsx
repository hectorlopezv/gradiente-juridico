import type { ReactNode } from "react";
import Image from "next/image";
import { ChatCta } from "@/components/chat-cta";
import { CtaLink } from "@/components/cta-link";
import { LocaleLink } from "@/components/language-switch";
import type { Locale } from "@/lib/locale";
import { messages } from "@/lib/messages";

export function AreaPage({
  locale = "es",
  kicker,
  title,
  description,
  image,
  framework,
  context,
  when,
  process,
  typicalIssues,
  audience,
  includes,
  ctaLabel,
  sidebarExtra,
  relatedKicker,
  related,
  relatedIndexHref,
  relatedIndexLabel,
}: {
  locale?: Locale;
  kicker: string;
  title: string;
  description: string;
  image: string;
  framework: string;
  context: string[];
  when: string[];
  process: string[];
  typicalIssues: string[];
  audience: string;
  includes: string[];
  ctaLabel: string;
  sidebarExtra?: ReactNode;
  relatedKicker: string;
  related: { href: string; title: string; description: string }[];
  relatedIndexHref: string;
  relatedIndexLabel: string;
}) {
  const t = messages(locale);
  return (
    <main className="overflow-x-hidden">
      <section className="relative min-h-[48svh] overflow-hidden bg-black pt-24 text-white lg:min-h-[56svh]">
        <Image
          src={image}
          alt=""
          fill
          className="animate-image-in object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 mx-auto flex min-h-[48svh] max-w-[1400px] flex-col justify-end px-4 py-16 sm:px-6 lg:min-h-[56svh] lg:px-10 lg:py-20">
          <p className="animate-fade-up text-[12px] font-semibold uppercase tracking-[0.18em] text-white/70">
            {kicker}
          </p>
          <h1 className="animate-fade-up mt-4 max-w-4xl font-heading text-3xl font-bold uppercase leading-[0.95] tracking-tight sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="animate-fade-up mt-6 max-w-2xl text-lg text-white/80">
            {description}
          </p>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto grid max-w-[1400px] gap-16 px-4 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-10">
          <div>
            <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              {t.inColombia}
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
              {framework}
            </p>

            <h2 className="mt-12 font-heading text-2xl font-semibold uppercase tracking-wide">
              {t.howWeHelp}
            </h2>
            {context.map((paragraph) => (
              <p
                key={paragraph.slice(0, 32)}
                className="mt-4 text-lg leading-relaxed text-muted-foreground"
              >
                {paragraph}
              </p>
            ))}

            <h2 className="mt-12 font-heading text-2xl font-semibold uppercase tracking-wide">
              {t.whenItFits}
            </h2>
            <ul className="mt-6 divide-y divide-black/10 border-t border-black/10">
              {when.map((item) => (
                <li key={item} className="py-4 text-[17px] leading-snug">
                  {item}
                </li>
              ))}
            </ul>

            <h2 className="mt-12 font-heading text-2xl font-semibold uppercase tracking-wide">
              {t.howWeWork}
            </h2>
            <ol className="mt-6 space-y-4">
              {process.map((item, index) => (
                <li key={item} className="flex gap-4 text-[17px] leading-snug">
                  <span className="shrink-0 text-[13px] font-semibold tracking-[0.14em] text-primary">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ol>

            <h2 className="mt-12 font-heading text-2xl font-semibold uppercase tracking-wide">
              {t.whatUsuallyArrives}
            </h2>
            <ul className="mt-6 divide-y divide-black/10 border-t border-black/10">
              {typicalIssues.map((item) => (
                <li key={item} className="py-4 text-[17px] leading-snug">
                  {item}
                </li>
              ))}
            </ul>

            <article className="mt-12 border-t border-black/10 pt-10">
              <h2 className="font-heading text-2xl font-semibold uppercase tracking-wide">
                {t.forWhom}
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                {audience}
              </p>
            </article>

            <p className="mt-10 text-sm leading-relaxed text-muted-foreground">
              {t.areaDisclaimer}
            </p>
            <ChatCta variant="red" className="mt-8">
              {ctaLabel}
            </ChatCta>
          </div>
          <div>
            <h2 className="font-heading text-2xl font-semibold uppercase tracking-wide">
              {t.whatItCovers}
            </h2>
            <ul className="mt-6 divide-y divide-black/10 border-t border-black/10">
              {includes.map((item) => (
                <li key={item} className="py-4 text-[17px]">
                  {item}
                </li>
              ))}
            </ul>
            {sidebarExtra}
            <CtaLink href={relatedIndexHref} variant="dark" className="mt-10" locale={locale}>
              {relatedIndexLabel}
            </CtaLink>
          </div>
        </div>
      </section>

      <section className="border-t border-black/10 bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
          <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            {relatedKicker}
          </p>
          <ul className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((item) => (
              <li key={item.href}>
                <LocaleLink href={item.href} locale={locale} className="group block">
                  <h3 className="font-heading text-xl font-semibold uppercase tracking-wide group-hover:text-primary">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </LocaleLink>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
