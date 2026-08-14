"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Logo } from "@/components/logo";
import { buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navLinks } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link href="/" className="shrink-0 transition-opacity hover:opacity-80">
          <Logo size="sm" />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-brand"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#contacto"
            className={cn(
              buttonVariants({ size: "sm" }),
              "bg-brand hover:bg-brand/90"
            )}
          >
            Contáctanos
          </Link>
        </nav>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            className={cn(
              buttonVariants({ variant: "ghost", size: "icon" }),
              "lg:hidden"
            )}
            aria-label="Abrir menú"
          >
            <Menu className="size-5" />
          </SheetTrigger>
          <SheetContent side="right" className="w-full max-w-xs">
            <SheetHeader>
              <SheetTitle className="sr-only">Menú de navegación</SheetTitle>
            </SheetHeader>
            <nav className="mt-8 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "rounded-md px-4 py-3 text-base font-medium text-foreground/80",
                    "transition-colors hover:bg-accent hover:text-brand"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="#contacto"
                onClick={() => setOpen(false)}
                className={cn(
                  buttonVariants({ size: "default" }),
                  "mt-4 bg-brand hover:bg-brand/90"
                )}
              >
                Contáctanos
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
