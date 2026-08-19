import { Rss } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { PageHero } from "@/components/page-hero";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "RSS",
  description:
    "Feeds RSS de Gradiente Jurídico: Insight y Novedades sobre propiedad intelectual en Colombia.",
  path: "/rss-landing",
});

const feeds = [
  {
    title: "Insight",
    description: "Análisis y experiencias sobre activos intangibles.",
    href: "/rss-landing/insight/all",
  },
  {
    title: "Novedades",
    description: "Alertas y lecturas cortas.",
    href: "/rss-landing/novedades/all",
  },
];

export default function RssLandingPage() {
  return (
    <>
      <Header />
      <main className="overflow-x-hidden">
        <PageHero
          kicker="RSS"
          title="RSS"
          description="Suscríbete a nuestros feeds para recibir Insight y Novedades en tu lector, sin pasar por el sitio cada vez."
        />
        <section id="contenido" className="bg-white py-16 lg:py-24">
          <div className="mx-auto max-w-[900px] px-4 sm:px-6">
            <p className="text-[15px] leading-relaxed text-muted-foreground">
              RSS es un formato estándar. En Feedly, NewsBlur, NetNewsWire u
              otro lector, agrega la URL del feed. El contenido no es asesoría
              legal.
            </p>

            <div id="rss" className="mt-14 scroll-mt-28">
              <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Feeds
              </p>
              <ul className="mt-6 divide-y divide-black/10 border-y border-black/10">
                {feeds.map((feed) => (
                  <li key={feed.href}>
                    <a
                      href={feed.href}
                      className="group flex items-start gap-4 py-6"
                    >
                      <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center bg-primary text-white">
                        <Rss className="size-4" strokeWidth={2.25} />
                      </span>
                      <span>
                        <span className="font-heading text-2xl font-semibold uppercase tracking-wide group-hover:text-primary">
                          {feed.title}
                        </span>
                        <span className="mt-2 block text-[15px] text-muted-foreground">
                          {feed.description}
                        </span>
                        <span className="mt-2 block text-[13px] text-foreground/70 group-hover:underline">
                          {feed.href}
                        </span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
