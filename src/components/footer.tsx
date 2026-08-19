import Link from "next/link";
import { Mail, Rss } from "lucide-react";
import { CookiePreferencesLink } from "@/components/cookie-preferences-link";
import { brand } from "@/lib/data";

const social = [
  {
    label: "WhatsApp",
    href: brand.whatsappUrl,
    icon: (
      <svg viewBox="0 0 24 24" className="size-5 fill-current" aria-hidden="true">
        <path d="M17.47 14.38c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.15-.42-2.2-1.35-.81-.72-1.36-1.61-1.52-1.88-.16-.27-.02-.42.12-.55.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.46h-.52c-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.29s.99 2.66 1.13 2.84c.14.18 1.95 2.98 4.73 4.18.66.28 1.18.45 1.58.58.66.21 1.27.18 1.75.11.53-.08 1.6-.65 1.83-1.28.22-.63.22-1.17.16-1.28-.07-.11-.25-.18-.52-.32z" />
        <path d="M12.04 2C6.5 2 2.02 6.48 2.02 12c0 1.77.46 3.45 1.28 4.91L2 22l5.25-1.38A9.96 9.96 0 0 0 12.04 22C17.56 22 22 17.52 22 12S17.56 2 12.04 2zm0 18.18c-1.64 0-3.22-.44-4.58-1.26l-.33-.2-3.11.82.83-3.04-.21-.31A8.16 8.16 0 0 1 3.86 12c0-4.5 3.67-8.16 8.18-8.16 4.5 0 8.17 3.66 8.17 8.16 0 4.51-3.67 8.18-8.17 8.18z" />
      </svg>
    ),
  },
  {
    label: "Correo",
    href: `mailto:${brand.email}`,
    icon: <Mail className="size-5" strokeWidth={1.5} />,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com",
    icon: (
      <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "RSS",
    href: "/rss-landing",
    icon: <Rss className="size-5" strokeWidth={1.5} />,
  },
];

const legalLinks = [
  { label: "Avisos legales", href: "/avisos-legales" },
  { label: "Privacidad y cookies", href: "/privacidad" },
  { label: "Divulgaciones CCPA", href: "/ccpa" },
  { label: "Código de proveedores", href: "/codigo-proveedores" },
  { label: "Prensa", href: "/prensa" },
  { label: "RSS", href: "/rss-landing" },
  { label: "Ubicaciones", href: "/ubicaciones" },
];

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-[1400px] px-4 pb-7 pt-10 sm:px-6 sm:pb-8 sm:pt-12 lg:px-10">
        <ul className="flex items-center gap-5">
          {social.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                aria-label={item.label}
                className="text-white transition-opacity hover:opacity-70"
                {...(item.href.startsWith("http")
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                {item.icon}
              </Link>
            </li>
          ))}
        </ul>

        <nav
          aria-label="Enlaces legales"
          className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-3 text-[13px] text-white"
        >
          {legalLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="hover:underline"
            >
              {item.label}
            </Link>
          ))}
          <CookiePreferencesLink className="text-left text-[13px] text-white hover:underline" />
        </nav>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-[1400px] px-4 pb-4 pt-3 text-[12px] text-white/55 sm:px-6 lg:px-10">
          Publicidad de servicios jurídicos · © {new Date().getFullYear()}{" "}
          Gradiente Jurídico
        </div>
      </div>
    </footer>
  );
}
