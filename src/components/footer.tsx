import Link from "next/link";
import { Mail, Phone, Globe, MapPin, User } from "lucide-react";
import { Logo } from "@/components/logo";
import { DiamondDivider } from "@/components/diamond-divider";
import { Separator } from "@/components/ui/separator";
import { brand } from "@/lib/data";

const contactItems = [
  {
    icon: User,
    label: "Contacto",
    value: brand.contactPerson,
    href: null,
  },
  {
    icon: MapPin,
    label: "Ubicación",
    value: brand.location,
    href: null,
  },
  {
    icon: Mail,
    label: "Correo electrónico",
    value: brand.email,
    href: `mailto:${brand.email}`,
  },
  {
    icon: Phone,
    label: "WhatsApp",
    value: brand.phone,
    href: brand.whatsappUrl,
  },
  {
    icon: Globe,
    label: "Sitio web",
    value: brand.website,
    href: `https://${brand.website}`,
  },
];

export function Footer() {
  return (
    <footer id="contacto" className="bg-brand-navy text-white">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <Logo size="md" variant="light" className="items-start" />
            <Separator className="my-6 max-w-xs bg-white/20" />
            <p className="font-heading text-sm uppercase tracking-[0.15em] text-white/80">
              {brand.tagline} {brand.taglineHighlight}
            </p>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/60">
              {brand.locationDetail}. Asesoría legal especializada en
              propiedad intelectual para proteger y potenciar tu innovación.
            </p>
          </div>

          <div>
            <h3 className="font-heading text-xl text-white">Contacto</h3>
            <ul className="mt-8 space-y-5">
              {contactItems.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.label} className="flex items-start gap-4">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-full border border-white/30 text-white">
                      <Icon className="size-4" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wider text-white/50">
                        {item.label}
                      </p>
                      {item.href ? (
                        <Link
                          href={item.href}
                          className="mt-0.5 text-sm text-white transition-colors hover:text-white/80"
                          {...(item.href.startsWith("http")
                            ? { target: "_blank", rel: "noopener noreferrer" }
                            : {})}
                        >
                          {item.value}
                        </Link>
                      ) : (
                        <p className="mt-0.5 text-sm text-white">{item.value}</p>
                      )}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <DiamondDivider className="mt-16 [&>div]:bg-white/20 [&>div:last-child]:bg-white/60 [&>div:first-child]:bg-white/20" />

        <div className="mt-8 flex flex-col items-center justify-between gap-4 text-center text-xs text-white/50 sm:flex-row sm:text-left">
          <p>
            &copy; {new Date().getFullYear()} Gradiente Jurídico. Todos los
            derechos reservados.
          </p>
          <p className="font-heading italic text-white/70">
            {brand.missionBanner}
          </p>
        </div>
      </div>
    </footer>
  );
}
