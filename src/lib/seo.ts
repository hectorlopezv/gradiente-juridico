import type { Metadata } from "next";
import { media } from "@/lib/media";
import { siteUrl } from "@/lib/rss";

export const SITE_NAME = "Gradiente Jurídico";
export const SITE_TAGLINE =
  "Especialistas en Propiedad Intelectual. Protegemos tus ideas. Potenciamos tu futuro.";
export const DEFAULT_OG_PATH = media.og;

type OgType = "website" | "article" | "profile";

export function pageMeta({
  title,
  description,
  path,
  image,
  imageAlt,
  type = "website",
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
  imageAlt?: string;
  type?: OgType;
}): Metadata {
  const base = siteUrl();
  const url = path === "/" ? `${base}/` : `${base}${path}`;
  const fullTitle =
    title === SITE_NAME || title.includes(SITE_NAME)
      ? title
      : `${title} | ${SITE_NAME}`;
  const ogImage = absoluteUrl(image ?? DEFAULT_OG_PATH, base);

  return {
    title: fullTitle,
    description,
    abstract: description,
    other: {
      summary: description,
    },
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      locale: "es_CO",
      type,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: imageAlt ?? fullTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage],
    },
  };
}

function absoluteUrl(src: string, base: string) {
  if (src.startsWith("http://") || src.startsWith("https://")) return src;
  return `${base}${src.startsWith("/") ? src : `/${src}`}`;
}
