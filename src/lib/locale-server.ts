import { cache } from "react";
import { headers } from "next/headers";
import { defaultLocale, isLocale, type Locale } from "@/lib/locale";

export const getLocale = cache(async (): Promise<Locale> => {
  const header = (await headers()).get("x-locale");
  return isLocale(header) ? header : defaultLocale;
});
