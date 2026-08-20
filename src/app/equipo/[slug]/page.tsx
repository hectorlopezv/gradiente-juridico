import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaLink } from "@/components/cta-link";
import { LocaleLink } from "@/components/language-switch";
import { getWhatsAppUrl } from "@/lib/chatbot";
import { getLocale } from "@/lib/locale-server";
import { prefixHref } from "@/lib/locale";
import { messages } from "@/lib/messages";
import { experts, getExpert, listExperts } from "@/lib/team";
import { pageMeta } from "@/lib/seo";

export function generateStaticParams() {
  return experts.map((expert) => ({ slug: expert.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const locale = await getLocale();
  const expert = getExpert(slug, locale);
  if (!expert) return {};
  return pageMeta({
    title: expert.name,
    description: `${expert.role}. ${expert.practice}. ${expert.teaser}`,
    path: prefixHref(`/equipo/${expert.slug}`, locale),
    image: expert.image,
    imageAlt: expert.name,
    type: "profile",
  });
}

export default async function ExpertPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const locale = await getLocale();
  const t = messages(locale);
  const expert = getExpert(slug, locale);
  if (!expert) notFound();

  const others = listExperts(locale).filter((person) => person.slug !== expert.slug);
  const whatsapp = getWhatsAppUrl(
    locale === "en"
      ? `Hi, I am coming from the Gradiente Jurídico website. I would like to speak with ${expert.name} about ${expert.practice}.`
      : `Hola, vengo desde el sitio de Gradiente Jurídico. Quiero hablar con ${expert.name} sobre ${expert.practice}.`
  );

  return (
    <>
      <main className="overflow-x-hidden">
        <section className="bg-black pt-28 text-white lg:pt-32">
          <div className="mx-auto grid max-w-[1400px] items-end gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-10 lg:py-20">
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src={expert.image}
                alt={expert.name}
                fill
                className="animate-image-in object-cover"
                sizes="(min-width: 1024px) 40vw, 100vw"
                priority
              />
            </div>
            <div>
              <p className="animate-fade-up text-[12px] font-semibold uppercase tracking-[0.18em] text-white/60">
                {t.team} · {expert.location}
              </p>
              <h1 className="animate-fade-up mt-4 font-heading text-4xl font-bold uppercase leading-[0.95] tracking-tight sm:text-6xl">
                {expert.name}
              </h1>
              <p className="animate-fade-up mt-4 text-lg text-white/80">
                {expert.role} · {expert.practice}
              </p>
              <div className="animate-fade-up mt-8">
                <CtaLink href={whatsapp}>{t.contactWhatsApp}</CtaLink>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 lg:py-24">
          <div className="mx-auto grid max-w-[1400px] gap-16 px-4 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-10">
            <div>
              <h2 className="font-heading text-3xl font-semibold uppercase tracking-wide">
                {t.profile}
              </h2>
              {expert.bio.split("\n\n").map((paragraph) => (
                <p
                  key={paragraph.slice(0, 24)}
                  className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground"
                >
                  {paragraph}
                </p>
              ))}

              <h2 className="mt-12 font-heading text-3xl font-semibold uppercase tracking-wide">
                {t.whoWeAdvise}
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                {expert.advises}
              </p>

              <h2 className="mt-12 font-heading text-3xl font-semibold uppercase tracking-wide">
                {t.howWeWork}
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                {expert.approach}
              </p>

              <h2 className="mt-12 font-heading text-3xl font-semibold uppercase tracking-wide">
                {t.typicalMatters}
              </h2>
              <ul className="mt-6 max-w-2xl divide-y divide-black/10 border-t border-black/10">
                {expert.typicalMatters.map((item) => (
                  <li key={item} className="py-4 text-[17px] leading-snug">
                    {item}
                  </li>
                ))}
              </ul>

              <Link
                href={`mailto:${expert.email}`}
                className="mt-8 inline-block text-sm hover:text-primary"
              >
                {expert.email}
              </Link>
            </div>
            <div>
              <h2 className="font-heading text-3xl font-semibold uppercase tracking-wide">
                {t.focus}
              </h2>
              <ul className="mt-6 divide-y divide-black/10 border-t border-black/10">
                {expert.focus.map((item) => (
                  <li key={item} className="py-4 text-[17px]">
                    {item}
                  </li>
                ))}
              </ul>
              <dl className="mt-10 space-y-4 text-[15px]">
                <div>
                  <dt className="text-[12px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                    {t.admission}
                  </dt>
                  <dd className="mt-1">{expert.admitted}</dd>
                </div>
                <div>
                  <dt className="text-[12px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                    {t.languages}
                  </dt>
                  <dd className="mt-1">{expert.languages.join(" · ")}</dd>
                </div>
                <div>
                  <dt className="text-[12px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                    {t.locations}
                  </dt>
                  <dd className="mt-1">{expert.location} · {t.inPersonOnline}</dd>
                </div>
              </dl>
              <CtaLink href="/equipo" variant="red" className="mt-10" locale={locale}>
                {t.seeTeam}
              </CtaLink>
            </div>
          </div>
        </section>

        <section className="border-t border-black/10 bg-white py-16">
          <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
            <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              {t.moreExperts}
            </p>
            <ul className="mt-8 grid gap-8 sm:grid-cols-3">
              {others.map((person) => (
                <li key={person.slug}>
                  <LocaleLink href={`/equipo/${person.slug}`} locale={locale} className="group block">
                    <h3 className="font-heading text-xl font-semibold uppercase tracking-wide group-hover:text-primary">
                      {person.name}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {person.practice}
                    </p>
                  </LocaleLink>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}
