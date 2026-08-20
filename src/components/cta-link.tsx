import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { prefixHref, type Locale } from "@/lib/locale";
import { cn } from "@/lib/utils";

export function CtaLink({
  href,
  children,
  variant = "light",
  className,
  locale = "es",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "light" | "dark" | "red";
  className?: string;
  locale?: Locale;
}) {
  const isExternal = href.startsWith("http") || href.startsWith("mailto:");
  return (
    <Link
      href={isExternal ? href : prefixHref(href, locale)}
      className={cn(
        "group cta-link",
        variant === "dark" && "cta-link-dark",
        variant === "red" && "cta-link-red",
        className
      )}
      {...(href.startsWith("http")
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
    >
      {children}
      <ChevronRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
    </Link>
  );
}
