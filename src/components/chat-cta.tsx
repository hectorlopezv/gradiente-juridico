"use client";

import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { openChat } from "@/lib/chatbot";

export function ChatCta({
  children,
  variant = "light",
  className,
  onClick,
}: {
  children: React.ReactNode;
  variant?: "light" | "dark" | "red";
  className?: string;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      onClick={() => {
        onClick?.();
        openChat();
      }}
        className={cn(
        "group cta-link cursor-pointer",
        variant === "dark" && "cta-link-dark",
        variant === "red" && "cta-link-red",
        className
      )}
    >
      {children}
      <ChevronRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
    </button>
  );
}
