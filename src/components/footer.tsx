import Link from "next/link";
import { Mail, Phone, Link2, MapPin } from "lucide-react";
import { Logo } from "@/components/logo";
import { DiamondDivider } from "@/components/diamond-divider";
import { Separator } from "@/components/ui/separator";

const contactItems = [
  {
    icon: Mail,
    label: "Correo electrónico",
    value: "contacto@gradientejuridico.com",
    href: "mailto:contacto@gradientejuridico.com",
  },
  {
    icon: Phone,
    label: "Teléfono",
    value: "+52 (55) 0000 0000",
    href: "tel:+525500000000",
  },
  {
    icon: Link2,
    label: "LinkedIn",
    value: "Gradiente Jurídico",
    href: "https://linkedin.com",
  },
  {
    icon: MapPin,
    label: "Ciudad",
    value: "Ciudad de México",
    href: null,
  },
];

export function Footer() {
  return (
    <footer id="contacto" className="border-t border-border/60 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <Logo size="md" />
            <Separator className="my-6 max-w-xs" />
            <p className="font-heading text-sm uppercase tracking-[0.15em] text-brand">
              Propiedad intelectual y derecho de los negocios
            </p>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Una visión jurídica con enfoque empresarial. Asesoría legal
              especializada para proteger, estructurar y fortalecer su negocio.
            </p>
          </div>

          <div>
            <h3 className="font-heading text-xl text-brand">Contacto</h3>
            <ul className="mt-8 space-y-5">
              {contactItems.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.label} className="flex items-start gap-4">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-full border border-brand/30 text-brand">
                      <Icon className="size-4" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                        {item.label}
                      </p>
                      {item.href ? (
                        <Link
                          href={item.href}
                          className="mt-0.5 text-sm text-brand transition-colors hover:text-brand-light"
                          {...(item.href.startsWith("http")
                            ? { target: "_blank", rel: "noopener noreferrer" }
                            : {})}
                        >
                          {item.value}
                        </Link>
                      ) : (
                        <p className="mt-0.5 text-sm text-brand">{item.value}</p>
                      )}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <DiamondDivider className="mt-16" />

        <div className="mt-8 flex flex-col items-center justify-between gap-4 text-center text-xs text-muted-foreground sm:flex-row sm:text-left">
          <p>
            &copy; {new Date().getFullYear()} Gradiente Jurídico. Todos los
            derechos reservados.
          </p>
          <p className="font-heading italic text-brand/60">
            Protegemos activos. Estructuramos negocios. Defendemos intereses.
          </p>
        </div>
      </div>
    </footer>
  );
}
