import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "default" | "light";
}

const sizeMap = {
  sm: { icon: "size-8", text: "text-xs tracking-[0.2em]" },
  md: { icon: "size-12", text: "text-sm tracking-[0.25em]" },
  lg: { icon: "size-16", text: "text-base tracking-[0.3em]" },
  xl: { icon: "size-28 sm:size-36", text: "text-lg tracking-[0.28em] sm:text-xl" },
};

export function Logo({
  className,
  showText = true,
  size = "md",
  variant = "default",
}: LogoProps) {
  const sizes = sizeMap[size];
  const isLight = variant === "light";

  return (
    <div className={cn("flex flex-col items-center gap-2", className)}>
      <div className={cn("flex items-end gap-1", sizes.icon)}>
        <svg
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-auto"
          aria-hidden="true"
        >
          <defs>
            <linearGradient
              id={`logo-gradient-${variant}-${size}`}
              x1="24"
              y1="4"
              x2="24"
              y2="44"
            >
              <stop offset="0%" stopColor={isLight ? "#ffffff" : "#ae132a"} />
              <stop offset="100%" stopColor={isLight ? "#f0c4ca" : "#111111"} />
            </linearGradient>
          </defs>
          <path
            d="M24 4L44 40H4L24 4Z"
            stroke={`url(#logo-gradient-${variant}-${size})`}
            strokeWidth="2"
            fill="none"
          />
        </svg>
        <span
          className={cn(
            "font-heading text-[0.65em] leading-none italic -mb-0.5",
            isLight ? "text-white" : "text-brand"
          )}
        >
          (J)
        </span>
      </div>
      {showText && (
        <span
          className={cn(
            "font-heading font-medium uppercase",
            sizes.text,
            isLight ? "text-white" : "text-brand"
          )}
        >
          Gradiente Jurídico
        </span>
      )}
    </div>
  );
}
