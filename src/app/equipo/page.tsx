import Image from "next/image";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { LocaleLink } from "@/components/language-switch";
import { getLocale } from "@/lib/locale-server";
import { prefixHref } from "@/lib/locale";
import { messages } from "@/lib/messages";
import { pageMeta } from "@/lib/seo";
import { listExperts } from "@/lib/team";

export async function generateMetadata() {
  const locale = await getLocale();
  const t = messages(locale);
  return pageMeta({
    title: t.team,
    description: t.teamMetaDesc,
    path: prefixHref("/equipo", locale),
  });
}

export default async function EquipoPage() {
  const locale = await getLocale();
  const t = messages(locale);
  const people = listExperts(locale);
  return (
    <main className="overflow-x-hidden">
      <PageHero
        kicker={t.team}
        title={t.ourExperts}
        description={t.teamIntro}
      />
      <section id="contenido" className="bg-white py-16 lg:py-24">
        <div className="mx-auto grid max-w-[900px] gap-x-8 gap-y-14 px-4 sm:px-6 md:grid-cols-2 lg:px-10">
          {people.map((expert, index) => (
            <Reveal key={expert.slug} delay={index * 90}>
              <LocaleLink
                href={`/equipo/${expert.slug}`}
                locale={locale}
                className="group block"
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-muted">
                  <Image
                    src={expert.image}
                    alt={expert.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(min-width: 1024px) 25vw, 50vw"
                  />
                </div>
                <h2 className="mt-5 font-heading text-2xl font-semibold uppercase tracking-wide group-hover:text-primary">
                  {expert.name}
                </h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  {expert.role}
                </p>
                <p className="mt-1 text-sm text-foreground/80">
                  {expert.practice}
                </p>
                <p className="mt-3 text-[14px] leading-relaxed text-muted-foreground">
                  {expert.teaser}
                </p>
                <span className="cta-link cta-link-red mt-4">{t.seeProfile}</span>
              </LocaleLink>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
