import { Copyright } from "lucide-react";
import { valuePillars } from "@/lib/data";

export function ValueEquation() {
  return (
    <section className="bg-section-gradient py-16 lg:py-20">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="rounded-sm border border-border/80 bg-white px-6 py-10 shadow-sm sm:px-12 sm:py-12">
          <div className="flex flex-col items-center gap-8 sm:flex-row sm:justify-center sm:gap-12">
            <div className="flex items-center gap-3 font-heading text-3xl text-brand sm:text-4xl">
              <span className="italic">∇</span>
              <span className="text-2xl italic">(J)</span>
              <span>=</span>
            </div>

            <div className="grid gap-8 sm:grid-cols-3">
              {valuePillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={pillar.label}
                    className="flex flex-col items-center gap-3 text-center"
                  >
                    <div className="flex size-16 items-center justify-center rounded-full border-2 border-brand-light/40 text-brand-light">
                      {pillar.label === "Protección" ? (
                        <div className="relative">
                          <Icon className="size-7" strokeWidth={1.5} />
                          <Copyright className="absolute -bottom-1 -right-1 size-3" />
                        </div>
                      ) : (
                        <Icon className="size-7" strokeWidth={1.5} />
                      )}
                    </div>
                    <span className="font-heading text-sm font-medium uppercase tracking-wider text-brand">
                      {pillar.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
