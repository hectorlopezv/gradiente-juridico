"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  OPEN_COOKIES_EVENT,
  readConsent,
  writeConsent,
} from "@/lib/consent";
import { prefixHref, type Locale } from "@/lib/locale";
import { messages } from "@/lib/messages";

function setCookieOffset(px: number) {
  document.documentElement.style.setProperty("--cookie-h", `${px}px`);
}

export function CookieBanner({ locale = "es" }: { locale?: Locale }) {
  const t = messages(locale);
  const [visible, setVisible] = useState(false);
  const [manage, setManage] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const saved = readConsent();
    if (saved) {
      setAnalytics(saved.analytics);
      setVisible(false);
    } else {
      setVisible(true);
    }

    function open() {
      const current = readConsent();
      setAnalytics(current?.analytics ?? false);
      setManage(true);
      setVisible(true);
    }

    window.addEventListener(OPEN_COOKIES_EVENT, open);
    return () => window.removeEventListener(OPEN_COOKIES_EVENT, open);
  }, []);

  useEffect(() => {
    if (!visible) {
      setCookieOffset(0);
      return;
    }
    const node = bannerRef.current;
    if (!node) return;
    const observer = new ResizeObserver(() => {
      setCookieOffset(node.offsetHeight);
    });
    observer.observe(node);
    setCookieOffset(node.offsetHeight);
    return () => observer.disconnect();
  }, [visible, manage]);

  function persist(nextAnalytics: boolean) {
    writeConsent(nextAnalytics);
    setAnalytics(nextAnalytics);
    setVisible(false);
    setManage(false);
    setCookieOffset(0);
  }

  if (!visible) return null;

  return (
    <div
      ref={bannerRef}
      role="dialog"
      aria-labelledby="cookie-title"
      aria-describedby="cookie-desc"
      className="fixed inset-x-0 bottom-0 z-[60] border-t border-black/10 bg-white shadow-[0_-8px_30px_rgba(0,0,0,0.12)]"
    >
      <div className="mx-auto flex max-w-[1400px] flex-col gap-5 px-4 py-5 sm:px-6 lg:flex-row lg:items-start lg:justify-between lg:px-10 lg:py-6">
        <div className="max-w-3xl lg:pr-8">
          <div className="flex items-start justify-between gap-4">
            <h2
              id="cookie-title"
              className="font-heading text-lg font-semibold uppercase tracking-wide text-foreground sm:text-xl"
            >
              {t.cookieTitle}
            </h2>
            <button
              type="button"
              className="shrink-0 text-foreground/60 hover:text-foreground lg:hidden"
              onClick={() => persist(false)}
              aria-label={t.cookieReject}
            >
              <X className="size-4" />
            </button>
          </div>
          <p
            id="cookie-desc"
            className="mt-2 text-sm leading-relaxed text-muted-foreground"
          >
            {t.cookieBody}{" "}
            <Link
              href={prefixHref("/privacidad", locale)}
              className="text-primary underline-offset-2 hover:underline"
            >
              {t.privacy}
            </Link>
            .
          </p>

          {manage && (
            <div className="mt-5 space-y-4 border border-black/10 p-4">
              <label className="flex items-start gap-3 text-sm">
                <input
                  type="checkbox"
                  checked
                  disabled
                  className="mt-1 size-4 accent-primary"
                />
                <span>
                  <span className="font-semibold text-foreground">
                    {t.cookieNecessary}
                  </span>
                  <span className="mt-1 block text-muted-foreground">
                    {t.cookieNecessaryDesc}
                  </span>
                </span>
              </label>
              <label className="flex items-start gap-3 text-sm">
                <input
                  type="checkbox"
                  checked={analytics}
                  onChange={(event) => setAnalytics(event.target.checked)}
                  className="mt-1 size-4 accent-primary"
                />
                <span>
                  <span className="font-semibold text-foreground">
                    {t.cookieAnalytics}
                  </span>
                  <span className="mt-1 block text-muted-foreground">
                    {t.cookieAnalyticsDesc}
                  </span>
                </span>
              </label>
              <Button
                className="h-10 rounded-none bg-primary px-4 hover:bg-primary/90"
                onClick={() => persist(analytics)}
              >
                {t.cookieSave}
              </Button>
            </div>
          )}
        </div>

        <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center lg:shrink-0">
          <button
            type="button"
            className="px-2 py-2 text-left text-sm font-semibold text-primary underline-offset-4 hover:underline"
            onClick={() => setManage((value) => !value)}
            aria-expanded={manage}
          >
            {t.cookieManage}
          </button>
          <Button
            className="h-10 rounded-none bg-primary px-4 hover:bg-primary/90"
            onClick={() => persist(false)}
          >
            {t.cookieNecessaryOnly}
          </Button>
          <Button
            className="h-10 rounded-none bg-primary px-4 hover:bg-primary/90"
            onClick={() => persist(true)}
          >
            {t.cookieAcceptAnalytics}
          </Button>
          <button
            type="button"
            className="hidden p-2 text-foreground/60 hover:text-foreground lg:inline-flex"
            onClick={() => persist(false)}
            aria-label={t.cookieReject}
          >
            <X className="size-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
