import { SITE_NAME, SITE_TAGLINE, DEFAULT_OG_PATH } from "@/lib/seo";
import { siteUrl } from "@/lib/rss";
import { brand } from "@/lib/data";
import { media } from "@/lib/media";

export function SiteJsonLd() {
  const base = siteUrl();
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LegalService",
        "@id": `${base}/#firma`,
        name: SITE_NAME,
        description: SITE_TAGLINE,
        url: base,
        image: `${base}${DEFAULT_OG_PATH}`,
        logo: `${base}${media.logo}`,
        email: brand.email,
        telephone: brand.phone,
        areaServed: {
          "@type": "Country",
          name: "Colombia",
        },
        address: {
          "@type": "PostalAddress",
          addressCountry: "CO",
        },
      },
      {
        "@type": "WebSite",
        "@id": `${base}/#sitio`,
        name: SITE_NAME,
        description: SITE_TAGLINE,
        url: base,
        inLanguage: "es-CO",
        publisher: { "@id": `${base}/#firma` },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
