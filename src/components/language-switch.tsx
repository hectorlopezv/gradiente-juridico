"use client";

import Link from "next/link";
import { prefixHref, type Locale } from "@/lib/locale";

export function LocaleLink({
  href,
  locale,
  className,
  children,
  ...props
}: {
  href: string;
  locale: Locale;
  className?: string;
  children: React.ReactNode;
} & Omit<React.ComponentProps<typeof Link>, "href">) {
  return (
    <Link href={prefixHref(href, locale)} className={className} {...props}>
      {children}
    </Link>
  );
}
