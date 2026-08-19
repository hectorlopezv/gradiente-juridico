import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ChatCta } from "@/components/chat-cta";
import { CtaLink } from "@/components/cta-link";
import { getCase, successCases } from "@/lib/cases";
import { pageMeta } from "@/lib/seo";

export function generateStaticParams() {
  return successCases.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = getCase(slug);
  if (!item) return {};
  return pageMeta({
    title: `${item.title} | Insight`,
    description: item.summary,
    path: `/insight/${item.slug}`,
    image: item.image,
    imageAlt: item.title,
    type: "article",
  });
}

export default async function InsightArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getCase(slug);
  if (!item) notFound();

  const others = successCases.filter((entry) => entry.slug !== item.slug);

  return (
    <>
      <Header />
      <main className="overflow-x-hidden">
        <section className="relative min-h-[48svh] overflow-hidden bg-black pt-24 text-white lg:min-h-[56svh]">
          <Image
            src={item.image}
            alt=""
            fill
            className="animate-image-in object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-black/55" />
          <div className="relative z-10 mx-auto flex min-h-[48svh] max-w-[1400px] flex-col justify-end px-4 py-16 sm:px-6 lg:min-h-[56svh] lg:px-10 lg:py-20">
            <p className="animate-fade-up text-[12px] font-semibold uppercase tracking-[0.18em] text-white/70">
              Insight · {item.kicker} · {item.dateLabel}
            </p>
            <h1 className="animate-fade-up mt-4 max-w-4xl font-heading text-3xl font-bold uppercase leading-[0.95] tracking-tight sm:text-5xl lg:text-6xl">
              {item.title}
            </h1>
            <p className="animate-fade-up mt-6 max-w-2xl text-lg text-white/80">
              {item.summary}
            </p>
          </div>
        </section>

        <section className="bg-white py-16 lg:py-24">
          <div className="mx-auto max-w-[760px] px-4 sm:px-6">
            {item.sections.map((block) => (
              <article
                key={block.title}
                className="border-t border-black/10 py-10 first:border-t-0 first:pt-0"
              >
                <h2 className="font-heading text-2xl font-semibold uppercase tracking-wide">
                  {block.title}
                </h2>
                {block.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 40)}
                    className="mt-4 text-lg leading-relaxed text-muted-foreground"
                  >
                    {paragraph}
                  </p>
                ))}
              </article>
            ))}

            <aside className="mt-4 border-t border-black/10 py-10">
              <h2 className="font-heading text-2xl font-semibold uppercase tracking-wide">
                Para llevar
              </h2>
              <ul className="mt-6 divide-y divide-black/10 border-t border-black/10">
                {item.takeaways.map((line) => (
                  <li key={line} className="py-4 text-[17px] leading-snug">
                    {line}
                  </li>
                ))}
              </ul>
            </aside>

            <p className="text-sm leading-relaxed text-muted-foreground">
              Análisis general sobre el marco en Colombia. No es asesoría
              jurídica ni describe un caso nominado de cliente. Cifras de
              solicitudes 2025: SIC, citadas vía el estudio IP.CO (PONS IP).
              Criterio sobre IA: pronunciamientos públicos de la DNDA.
            </p>
            <ChatCta variant="red" className="mt-8">
              Hablemos
            </ChatCta>
            <div className="mt-10">
              <CtaLink href="/insight" variant="dark">
                Todo el insight
              </CtaLink>
            </div>
          </div>
        </section>

        <section className="border-t border-black/10 bg-white py-16">
          <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
            <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Más insight
            </p>
            <ul className="mt-8 grid gap-8 md:grid-cols-3">
              {others.slice(0, 3).map((entry) => (
                <li key={entry.slug}>
                  <Link href={`/insight/${entry.slug}`} className="group block">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                      {entry.kicker}
                    </p>
                    <h3 className="mt-2 font-heading text-xl font-semibold uppercase tracking-wide group-hover:text-primary">
                      {entry.title}
                    </h3>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
