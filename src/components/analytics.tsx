"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import {
  CONSENT_CHANGED_EVENT,
  analyticsAllowed,
  type ConsentState,
} from "@/lib/consent";

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
const SCRIPT_ID = "gj-ga4-script";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

function removeAnalyticsCookies() {
  const cookies = document.cookie.split(";");
  for (const part of cookies) {
    const name = part.split("=")[0]?.trim();
    if (!name) continue;
    if (!/^(_ga|_gid|_gat|__utm)/.test(name)) continue;
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
  }
}

function loadAnalytics() {
  if (!GA_ID || document.getElementById(SCRIPT_ID)) return;

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag(..._args: unknown[]) {
    window.dataLayer.push(arguments);
  };
  window.gtag("js", new Date());
  window.gtag("consent", "default", {
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    analytics_storage: "granted",
  });
  window.gtag("config", GA_ID, { anonymize_ip: true, send_page_view: false });

  const script = document.createElement("script");
  script.id = SCRIPT_ID;
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(script);
}

function disableAnalytics() {
  document.getElementById(SCRIPT_ID)?.remove();
  if (window.gtag) {
    window.gtag("consent", "update", { analytics_storage: "denied" });
  }
  removeAnalyticsCookies();
}

function trackPage(path: string) {
  if (!GA_ID || !window.gtag || !analyticsAllowed()) return;
  window.gtag("event", "page_view", {
    page_path: path,
    page_location: window.location.href,
    page_title: document.title,
  });
}

export function Analytics() {
  const pathname = usePathname();
  const loaded = useRef(false);

  useEffect(() => {
    function sync(allowed: boolean, sendPage: boolean) {
      if (allowed) {
        loadAnalytics();
        loaded.current = true;
        if (sendPage) trackPage(window.location.pathname);
      } else {
        disableAnalytics();
        loaded.current = false;
      }
    }

    sync(analyticsAllowed(), false);

    function onChange(event: Event) {
      const detail = (event as CustomEvent<ConsentState>).detail;
      sync(detail?.analytics === true, true);
    }

    window.addEventListener(CONSENT_CHANGED_EVENT, onChange);
    return () => window.removeEventListener(CONSENT_CHANGED_EVENT, onChange);
  }, []);

  useEffect(() => {
    if (!analyticsAllowed()) return;
    trackPage(pathname);
  }, [pathname]);

  return null;
}
