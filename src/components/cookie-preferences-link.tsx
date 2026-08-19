"use client";

import { OPEN_COOKIES_EVENT } from "@/lib/consent";

export function CookiePreferencesLink({
  className,
}: {
  className?: string;
}) {
  return (
    <button
      type="button"
      className={className}
      onClick={() => {
        window.dispatchEvent(new Event(OPEN_COOKIES_EVENT));
      }}
    >
      Preferencias de cookies
    </button>
  );
}
