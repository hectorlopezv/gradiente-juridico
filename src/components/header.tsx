"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { Wordmark } from "@/components/wordmark";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  navMain,
  services,
  brand,
} from "@/lib/data";
import { experts } from "@/lib/team";
import { successCases } from "@/lib/cases";
import { sectors } from "@/lib/sectors";
import { ChatCta } from "@/components/chat-cta";
import { cn } from "@/lib/utils";

type MenuKey = "insight" | "expertise" | "people";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<MenuKey | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimer = useRef<number | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow =
      openMenu || mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [openMenu, mobileOpen]);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  function open(menu: MenuKey) {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    setOpenMenu(menu);
  }

  function scheduleClose() {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setOpenMenu(null), 160);
  }

  function cancelClose() {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
  }

  const isHome = pathname === "/";
  const megaOpen = Boolean(openMenu);
  const onHero = isHome && !scrolled && !megaOpen && !mobileOpen;
  const linkClass = (active: boolean) =>
    cn(
      "transition-colors",
      megaOpen
        ? active
          ? "text-primary"
          : "text-foreground/75 hover:text-foreground"
        : active
          ? "text-primary"
          : "text-white/85 hover:text-white"
    );

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-[70]",
          megaOpen
            ? "bg-white"
            : onHero
              ? "bg-gradient-to-b from-black/75 via-black/45 to-transparent"
              : "border-b border-white/10 bg-black/95 shadow-lg backdrop-blur-md"
        )}
        onMouseLeave={scheduleClose}
        onMouseEnter={cancelClose}
      >
        <div className="relative z-[71] mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
          <div className="flex h-16 items-center justify-between lg:h-[83px]">
            <Link href="/" className="shrink-0">
              <Wordmark inverted={!megaOpen} />
            </Link>

            <nav className="hidden items-center gap-9 lg:flex">
              {navMain.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-1 text-[16px]",
                    linkClass(openMenu === item.menu)
                  )}
                  onMouseEnter={() =>
                    item.menu ? open(item.menu) : setOpenMenu(null)
                  }
                  onFocus={() =>
                    item.menu ? open(item.menu) : setOpenMenu(null)
                  }
                  onClick={() => setOpenMenu(null)}
                >
                  {item.label}
                  {item.menu ? (
                    <ChevronDown
                      className={cn(
                        "size-3.5 transition-transform duration-300",
                        openMenu === item.menu && "rotate-180"
                      )}
                    />
                  ) : null}
                </Link>
              ))}
            </nav>

            <div className="flex items-center lg:hidden">
              <Sheet
                open={mobileOpen}
                modal={false}
                onOpenChange={(open) => {
                  setMobileOpen(open);
                  if (open) {
                    setOpenMenu(null);
                  }
                }}
              >
                <Button
                  variant="ghost"
                  size="icon-lg"
                  aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
                  aria-expanded={mobileOpen}
                  className="rounded-none text-white hover:bg-white/10 hover:text-white"
                  onClick={() => setMobileOpen((open) => !open)}
                >
                  {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
                </Button>
                <SheetContent
                  side="top"
                  showCloseButton={false}
                  initialFocus={false}
                  overlayClassName="z-[65] bg-black/45 backdrop-blur-none"
                  className="top-16 z-[72] max-h-[min(58vh,calc(100dvh-4.5rem))] gap-0 overflow-y-auto rounded-none border-x-0 border-t-0 p-0 shadow-[0_18px_40px_rgba(0,0,0,0.22)] lg:hidden"
                >
                  <SheetHeader className="sr-only">
                    <SheetTitle>Menú</SheetTitle>
                  </SheetHeader>
                  <nav aria-label="Menú móvil" className="flex flex-col">
                    <a
                      href={brand.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={mobileRowClass}
                    >
                      WhatsApp
                    </a>
                    <Accordion className="w-full">
                      <AccordionItem value="insight" className="border-b-0">
                        <AccordionTrigger className={mobileRowClass}>
                          Insight
                        </AccordionTrigger>
                        <AccordionContent className="bg-white pb-0 [&_a]:no-underline">
                          {successCases.map((entry) => (
                            <MobileNavLink
                              key={entry.slug}
                              href={`/insight/${entry.slug}`}
                              nested
                            >
                              {entry.title}
                            </MobileNavLink>
                          ))}
                          <MobileNavLink href="/insight" nested>
                            Ver todo el insight
                          </MobileNavLink>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="expertise" className="border-b-0">
                        <AccordionTrigger className={mobileRowClass}>
                          Práctica
                        </AccordionTrigger>
                        <AccordionContent className="bg-white pb-0 [&_a]:no-underline">
                          <p className="px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-primary">
                            Áreas de práctica
                          </p>
                          {services.map((service) => (
                            <MobileNavLink
                              key={service.slug}
                              href={`/practica/${service.slug}`}
                              nested
                            >
                              {service.title}
                            </MobileNavLink>
                          ))}
                          <p className="px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-primary">
                            Sectores
                          </p>
                          {sectors.map((sector) => (
                            <MobileNavLink
                              key={sector.slug}
                              href={`/sectores/${sector.slug}`}
                              nested
                            >
                              {sector.title}
                            </MobileNavLink>
                          ))}
                          <MobileNavLink href="/practica" nested>
                            Ver toda la práctica
                          </MobileNavLink>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="people" className="border-b-0">
                        <AccordionTrigger className={mobileRowClass}>
                          Nosotros
                        </AccordionTrigger>
                        <AccordionContent className="bg-white pb-0 [&_a]:no-underline">
                          <MobileNavLink href="/nosotros" nested>
                            La firma
                          </MobileNavLink>
                          <MobileNavLink href="/equipo" nested>
                            Equipo
                          </MobileNavLink>
                          {experts.map((expert) => (
                            <MobileNavLink
                              key={expert.slug}
                              href={`/equipo/${expert.slug}`}
                              nested
                            >
                              {expert.name}
                            </MobileNavLink>
                          ))}
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                    <div className="px-5 py-3">
                      <ChatCta
                        variant="red"
                        onClick={() => setMobileOpen(false)}
                      >
                        Hablemos
                      </ChatCta>
                    </div>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>

        <div
          className={cn(
            "absolute inset-x-0 top-full hidden w-full overflow-hidden lg:block",
            openMenu ? "pointer-events-auto" : "pointer-events-none"
          )}
          onMouseEnter={cancelClose}
        >
          <div
            className={cn(
              "mega-curtain w-full bg-white shadow-[0_24px_40px_rgba(0,0,0,0.18)]",
              openMenu ? "translate-y-0" : "-translate-y-full"
            )}
          >
            <div className="mx-auto max-w-[1400px] px-6 py-12 lg:px-10 lg:py-14">
              {openMenu === "insight" && (
                <div className="grid gap-12 lg:grid-cols-[0.9fr_1.4fr]">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                      Insight
                    </p>
                    <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-muted-foreground">
                      Análisis y experiencias sobre marcas, tecnología, diseños
                      y colaboraciones.
                    </p>
                    <Link
                      href="/insight"
                      onClick={() => setOpenMenu(null)}
                      className="cta-link cta-link-red mt-6"
                    >
                      Ver todo el insight
                    </Link>
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                      Análisis reciente
                    </p>
                    <ul className="mt-5 grid gap-x-10 gap-y-5 sm:grid-cols-2">
                      {successCases.map((item) => (
                        <li key={item.slug}>
                          <Link
                            href={`/insight/${item.slug}`}
                            onClick={() => setOpenMenu(null)}
                            className="group block"
                          >
                            <p className="text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                              {item.kicker}
                            </p>
                            <p className="mt-1 text-[16px] leading-snug group-hover:text-primary">
                              {item.title}
                            </p>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {openMenu === "people" && (
                <div className="grid gap-12 lg:grid-cols-[0.9fr_1.4fr]">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                      Nosotros
                    </p>
                    <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-muted-foreground">
                      Boutique de propiedad intelectual. Protección, innovación
                      y criterio de negocio para tus activos intangibles.
                    </p>
                    <Link
                      href="/nosotros"
                      onClick={() => setOpenMenu(null)}
                      className="cta-link cta-link-red mt-6"
                    >
                      Conocer la firma
                    </Link>
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                      Equipo
                    </p>
                    <ul className="mt-5 grid gap-x-10 gap-y-5 sm:grid-cols-2">
                      {experts.map((expert) => (
                        <li key={expert.slug}>
                          <Link
                            href={`/equipo/${expert.slug}`}
                            onClick={() => setOpenMenu(null)}
                            className="group block"
                          >
                            <p className="text-[17px] group-hover:text-primary">
                              {expert.name}
                            </p>
                            <p className="mt-1 text-sm text-muted-foreground">
                              {expert.practice}
                            </p>
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/equipo"
                      onClick={() => setOpenMenu(null)}
                      className="cta-link cta-link-red mt-8"
                    >
                      Ver el equipo
                    </Link>
                  </div>
                </div>
              )}

              {openMenu === "expertise" && (
                <div className="grid gap-12 lg:grid-cols-3">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                      Sectores
                    </p>
                    <ul className="mt-5 space-y-3">
                      {sectors.map((sector) => (
                        <li key={sector.slug}>
                          <Link
                            href={`/sectores/${sector.slug}`}
                            onClick={() => setOpenMenu(null)}
                            className="text-[17px] hover:text-primary"
                          >
                            {sector.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/sectores"
                      onClick={() => setOpenMenu(null)}
                      className="cta-link cta-link-red mt-6"
                    >
                      Ver todos los sectores
                    </Link>
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                      Áreas de práctica
                    </p>
                    <ul className="mt-5 space-y-3">
                      {services.map((service) => (
                        <li key={service.slug}>
                          <Link
                            href={`/practica/${service.slug}`}
                            onClick={() => setOpenMenu(null)}
                            className="text-[17px] hover:text-primary"
                          >
                            {service.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/practica"
                      onClick={() => setOpenMenu(null)}
                      className="cta-link cta-link-red mt-6"
                    >
                      Ver toda la práctica
                    </Link>
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                      Hablemos
                    </p>
                    <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-muted-foreground">
                      Si no estás seguro del área, el asistente te orienta y te
                      conecta con el equipo.
                    </p>
                    <ChatCta variant="red" className="mt-6" onClick={() => setOpenMenu(null)}>
                      Abrir chat
                    </ChatCta>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      <div
        className={cn(
          "mega-overlay fixed inset-0 z-[60] bg-black/45",
          openMenu
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        )}
        onClick={() => setOpenMenu(null)}
        aria-hidden="true"
      />
    </>
  );
}

const mobileRowClass =
  "flex h-12 w-full items-center rounded-none border-x-0 border-t-0 border-b border-[#e5e5e5] px-5 py-0 text-left text-[16px] font-normal text-[#171717] hover:bg-[#f8f2f3] hover:no-underline hover:text-primary aria-expanded:text-primary **:data-[slot=accordion-trigger-icon]:text-[#888] aria-expanded:**:data-[slot=accordion-trigger-icon]:text-primary";

function MobileNavLink({
  href,
  nested = false,
  children,
}: {
  href: string;
  nested?: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={cn(
        mobileRowClass,
        nested &&
          "h-10 border-[#eee] px-8 text-[14px] text-[#555] hover:bg-[#f8f2f3] hover:text-primary"
      )}
    >
      {children}
    </Link>
  );
}
