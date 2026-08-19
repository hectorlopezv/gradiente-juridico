import Image from "next/image";
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
      src={inverted ? "/logo-gradiente-light.png" : "/logo-gradiente.png"}
      alt="Gradiente Jurídico"
      width={355}
      height={160}
      priority
      className={cn("h-9 w-auto sm:h-11 lg:h-[52px]", className)}
    />
  );
}
