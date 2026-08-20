"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { Wordmark } from "@/components/wordmark";
import { LocaleLink } from "@/components/language-switch";
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
  listServices,
  localizedBrand,
  brand,
} from "@/lib/data";
import { listExperts } from "@/lib/team";
import { listSectors } from "@/lib/sectors";
import { ChatCta } from "@/components/chat-cta";
import { messages } from "@/lib/messages";
import { prefixHref, stripLocalePrefix, type Locale } from "@/lib/locale";
import { cn } from "@/lib/utils";

type MenuKey = "insight" | "expertise" | "people";

export function Header({
  locale,
  insights,
}: {
  locale: Locale;
  insights: { slug: string; title: string; kicker: string }[];
}) {
  const t = messages(locale);
  const copy = localizedBrand(locale);
  const practiceItems = listServices(locale);
  const sectorItems = listSectors(locale);
  const expertItems = listExperts(locale);
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

  const isHome = stripLocalePrefix(pathname) === "/";
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
            <LocaleLink href="/" locale={locale} className="shrink-0">
              <Wordmark inverted={!megaOpen} />
            </LocaleLink>

            <div className="flex items-center justify-end gap-9">
              <nav className="hidden items-center gap-9 lg:flex">
              {[
                { label: t.navInsight, href: "/insight", menu: "insight" as const },
                { label: t.navPractice, href: "/practica", menu: "expertise" as const },
                { label: t.navAbout, href: "/nosotros", menu: "people" as const },
              ].map((item) => (
                <LocaleLink
                  key={item.label}
                  href={item.href}
                  locale={locale}
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
                </LocaleLink>
              ))}
              </nav>
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
                  className="rounded-none text-white hover:bg-white/10 hover:text-white lg:hidden"
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
                          {t.navInsight}
                        </AccordionTrigger>
                        <AccordionContent className="bg-white pb-0 [&_a]:no-underline">
                          {insights.map((entry) => (
                            <MobileNavLink
                              key={entry.slug}
                              href={prefixHref(`/insight/${entry.slug}`, locale)}
                              nested
                            >
                              {entry.title}
                            </MobileNavLink>
                          ))}
                          <MobileNavLink href={prefixHref("/insight", locale)} nested>
                            {t.navAllInsight}
                          </MobileNavLink>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="expertise" className="border-b-0">
                        <AccordionTrigger className={mobileRowClass}>
                          {t.navPractice}
                        </AccordionTrigger>
                        <AccordionContent className="bg-white pb-0 [&_a]:no-underline">
                          <p className="px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-primary">
                            {t.navPracticeAreas}
                          </p>
                          {practiceItems.map((service) => (
                            <MobileNavLink
                              key={service.slug}
                              href={prefixHref(`/practica/${service.slug}`, locale)}
                              nested
                            >
                              {service.title}
                            </MobileNavLink>
                          ))}
                          <p className="px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-primary">
                            {t.navSectors}
                          </p>
                          {sectorItems.map((sector) => (
                            <MobileNavLink
                              key={sector.slug}
                              href={prefixHref(`/sectores/${sector.slug}`, locale)}
                              nested
                            >
                              {sector.title}
                            </MobileNavLink>
                          ))}
                          <MobileNavLink href={prefixHref("/practica", locale)} nested>
                            {t.navAllPractice}
                          </MobileNavLink>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="people" className="border-b-0">
                        <AccordionTrigger className={mobileRowClass}>
                          {t.navAbout}
                        </AccordionTrigger>
                        <AccordionContent className="bg-white pb-0 [&_a]:no-underline">
                          <MobileNavLink href={prefixHref("/nosotros", locale)} nested>
                            {t.navFirm}
                          </MobileNavLink>
                          <MobileNavLink href={prefixHref("/equipo", locale)} nested>
                            {t.navTeam}
                          </MobileNavLink>
                          {expertItems.map((expert) => (
                            <MobileNavLink
                              key={expert.slug}
                              href={prefixHref(`/equipo/${expert.slug}`, locale)}
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
                        {t.talk}
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
                      {t.navInsight}
                    </p>
                    <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-muted-foreground">
                      {t.insightIntro}
                    </p>
                    <LocaleLink
                      href="/insight"
                      locale={locale}
                      onClick={() => setOpenMenu(null)}
                      className="cta-link cta-link-red mt-6"
                    >
                      {t.navAllInsight}
                    </LocaleLink>
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                      {t.navRecent}
                    </p>
                    <ul className="mt-5 grid gap-x-10 gap-y-5 sm:grid-cols-2">
                      {insights.map((item) => (
                        <li key={item.slug}>
                          <LocaleLink
                            href={`/insight/${item.slug}`}
                            locale={locale}
                            onClick={() => setOpenMenu(null)}
                            className="group block"
                          >
                            <p className="text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                              {item.kicker}
                            </p>
                            <p className="mt-1 text-[16px] leading-snug group-hover:text-primary">
                              {item.title}
                            </p>
                          </LocaleLink>
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
                      {t.navAbout}
                    </p>
                    <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-muted-foreground">
                      {copy.aboutShort}
                    </p>
                    <LocaleLink
                      href="/nosotros"
                      locale={locale}
                      onClick={() => setOpenMenu(null)}
                      className="cta-link cta-link-red mt-6"
                    >
                      {t.navKnowFirm}
                    </LocaleLink>
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                      {t.navTeam}
                    </p>
                    <ul className="mt-5 grid gap-x-10 gap-y-5 sm:grid-cols-2">
                      {expertItems.map((expert) => (
                        <li key={expert.slug}>
                          <LocaleLink
                            href={`/equipo/${expert.slug}`}
                            locale={locale}
                            onClick={() => setOpenMenu(null)}
                            className="group block"
                          >
                            <p className="text-[17px] group-hover:text-primary">
                              {expert.name}
                            </p>
                            <p className="mt-1 text-sm text-muted-foreground">
                              {expert.practice}
                            </p>
                          </LocaleLink>
                        </li>
                      ))}
                    </ul>
                    <LocaleLink
                      href="/equipo"
                      locale={locale}
                      onClick={() => setOpenMenu(null)}
                      className="cta-link cta-link-red mt-8"
                    >
                      {t.navSeeTeam}
                    </LocaleLink>
                  </div>
                </div>
              )}

              {openMenu === "expertise" && (
                <div className="grid gap-12 lg:grid-cols-3">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                      {t.navSectors}
                    </p>
                    <ul className="mt-5 space-y-3">
                      {sectorItems.map((sector) => (
                        <li key={sector.slug}>
                          <LocaleLink
                            href={`/sectores/${sector.slug}`}
                            locale={locale}
                            onClick={() => setOpenMenu(null)}
                            className="text-[17px] hover:text-primary"
                          >
                            {sector.title}
                          </LocaleLink>
                        </li>
                      ))}
                    </ul>
                    <LocaleLink
                      href="/sectores"
                      locale={locale}
                      onClick={() => setOpenMenu(null)}
                      className="cta-link cta-link-red mt-6"
                    >
                      {t.navAllSectors}
                    </LocaleLink>
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                      {t.navPracticeAreas}
                    </p>
                    <ul className="mt-5 space-y-3">
                      {practiceItems.map((service) => (
                        <li key={service.slug}>
                          <LocaleLink
                            href={`/practica/${service.slug}`}
                            locale={locale}
                            onClick={() => setOpenMenu(null)}
                            className="text-[17px] hover:text-primary"
                          >
                            {service.title}
                          </LocaleLink>
                        </li>
                      ))}
                    </ul>
                    <LocaleLink
                      href="/practica"
                      locale={locale}
                      onClick={() => setOpenMenu(null)}
                      className="cta-link cta-link-red mt-6"
                    >
                      {t.navAllPractice}
                    </LocaleLink>
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                      {t.talk}
                    </p>
                    <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-muted-foreground">
                      {t.chatHelp}
                    </p>
                    <ChatCta variant="red" className="mt-6" onClick={() => setOpenMenu(null)}>
                      {t.openChat}
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
