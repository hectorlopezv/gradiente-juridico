import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DiamondDivider } from "@/components/diamond-divider";
import { practiceAreas } from "@/lib/data";

export function PracticeAreas() {
  return (
    <section id="areas" className="bg-secondary/50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Especialización
          </p>
          <h2 className="mt-4 font-heading text-3xl text-brand sm:text-4xl">
            Áreas de práctica
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Asesoría estratégica para proteger activos, estructurar relaciones
            comerciales y prevenir riesgos del negocio.
          </p>
          <DiamondDivider className="mt-8" />
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {practiceAreas.map((area) => {
            const Icon = area.icon;
            return (
              <Card
                key={area.number}
                className="group border-border/60 bg-white transition-all duration-300 hover:border-brand/30 hover:shadow-lg"
              >
                <CardHeader className="pb-4">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex size-12 items-center justify-center rounded-full border border-brand/30 text-brand transition-colors group-hover:border-brand group-hover:bg-brand/5">
                      <Icon className="size-5" strokeWidth={1.5} />
                    </div>
                    <span className="font-heading text-sm text-muted-foreground">
                      {area.number}
                    </span>
                  </div>
                  <CardTitle className="font-heading text-lg font-medium leading-snug text-brand">
                    {area.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed text-foreground/70">
                    {area.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
