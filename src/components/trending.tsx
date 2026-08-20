import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { LocaleLink } from "@/components/language-switch";
import { listTrending } from "@/lib/data";
import { messages } from "@/lib/messages";
import type { Locale } from "@/lib/locale";

export function Trending({ locale = "es" }: { locale?: Locale }) {
  const t = messages(locale);
  const items = listTrending(locale);
  return (
    <section id="insight" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <Reveal>
          <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            {t.featured}
          </p>
        </Reveal>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {items.map((item, index) => (
            <Reveal key={item.title} delay={index * 100}>
              <LocaleLink href={item.href} locale={locale} className="group block">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(min-width: 768px) 33vw, 100vw"
                  />
                </div>
                <h3 className="mt-5 font-heading text-2xl font-semibold uppercase tracking-wide group-hover:text-primary">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
                <span className="cta-link cta-link-red mt-4">{t.moreInfo}</span>
              </LocaleLink>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
