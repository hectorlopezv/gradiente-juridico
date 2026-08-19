import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export function LegalDoc({
  kicker,
  title,
  description,
  children,
}: {
  kicker: string;
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="overflow-x-hidden bg-white">
        <section className="bg-black pt-28 text-white lg:pt-32">
          <div className="mx-auto max-w-[900px] px-4 py-16 sm:px-6 lg:py-20">
            <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-white/60">
              {kicker}
            </p>
            <h1 className="mt-4 font-heading text-4xl font-bold uppercase tracking-tight sm:text-5xl">
              {title}
            </h1>
            {description ? (
              <p className="mt-4 text-white/70">{description}</p>
            ) : null}
          </div>
        </section>
        <article className="mx-auto max-w-[900px] space-y-10 px-4 py-16 text-[15px] leading-relaxed text-muted-foreground sm:px-6">
          {children}
        </article>
      </main>
      <Footer />
    </>
  );
}

export function LegalHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-heading text-2xl font-semibold uppercase tracking-wide text-foreground">
      {children}
    </h2>
  );
}
