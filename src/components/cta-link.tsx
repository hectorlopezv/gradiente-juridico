import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function CtaLink({
  href,
  children,
  variant = "light",
  className,
}: {
  href: string;
  children: React.ReactNode;
  variant?: "light" | "dark" | "red";
  className?: string;
}) {
  return (
    <Link
      href={href}
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
