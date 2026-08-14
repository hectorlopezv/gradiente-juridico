import { cn } from "@/lib/utils";

interface DiamondDividerProps {
  className?: string;
}

export function DiamondDivider({ className }: DiamondDividerProps) {
  return (
    <div className={cn("flex items-center gap-4", className)}>
      <div className="h-px flex-1 bg-border" />
      <div className="size-2 rotate-45 bg-brand" />
      <div className="h-px flex-1 bg-border" />
    </div>
  );
}
