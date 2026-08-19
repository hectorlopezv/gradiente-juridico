import Image from "next/image";
import { media } from "@/lib/media";
import { cn } from "@/lib/utils";

export function Wordmark({
  className,
  inverted = false,
}: {
  className?: string;
  inverted?: boolean;
}) {
  return (
    <Image
      src={inverted ? media.logoLight : media.logo}
      alt="Gradiente Jurídico"
      width={355}
      height={160}
      priority
      className={cn("h-9 w-auto sm:h-11 lg:h-[60px]", className)}
    />
  );
}
