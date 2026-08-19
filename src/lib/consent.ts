export const CONSENT_STORAGE_KEY = "gj-cookie-consent";
export const CONSENT_VERSION = "1";
export const CONSENT_CHANGED_EVENT = "gj-consent-changed";
export const OPEN_COOKIES_EVENT = "gj-open-cookies";

export interface ConsentState {
  version: string;
  necessary: true;
  analytics: boolean;
  updatedAt: string;
}

export function defaultConsent(): ConsentState {
  return {
    version: CONSENT_VERSION,
    necessary: true,
    analytics: false,
    updatedAt: new Date().toISOString(),
  };
}

export function readConsent(): ConsentState | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<ConsentState>;
    if (typeof parsed.analytics !== "boolean") return null;
    return {
      version: parsed.version ?? CONSENT_VERSION,
      necessary: true,
      analytics: parsed.analytics,
      updatedAt: parsed.updatedAt ?? new Date().toISOString(),
    };
  } catch {
    return null;
  }
}

export function writeConsent(analytics: boolean): ConsentState {
  const state: ConsentState = {
    version: CONSENT_VERSION,
    necessary: true,
    analytics,
    updatedAt: new Date().toISOString(),
  };
  window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(state));
  window.dispatchEvent(new CustomEvent(CONSENT_CHANGED_EVENT, { detail: state }));
  return state;
}

export function analyticsAllowed(): boolean {
  return readConsent()?.analytics === true;
}
