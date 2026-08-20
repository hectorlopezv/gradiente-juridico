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
      width={579}
      height={110}
      priority
      className={cn("h-[22px] w-auto sm:h-7 lg:h-[36px]", className)}
    />
  );
}
