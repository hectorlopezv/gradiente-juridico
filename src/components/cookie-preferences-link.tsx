"use client";

import { OPEN_COOKIES_EVENT } from "@/lib/consent";
import type { Locale } from "@/lib/locale";
import { messages } from "@/lib/messages";

export function CookiePreferencesLink({
  className,
  locale = "es",
}: {
  className?: string;
  locale?: Locale;
}) {
  const t = messages(locale);
  return (
    <button
      type="button"
      className={className}
      onClick={() => {
        window.dispatchEvent(new Event(OPEN_COOKIES_EVENT));
      }}
    >
      {t.cookiePrefs}
    </button>
  );
}
