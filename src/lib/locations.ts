import { officesEn } from "@/lib/content-en";
import { contact } from "@/lib/data";
import type { Locale } from "@/lib/locale";
import { media } from "@/lib/media";

export interface Office {
  slug: string;
  region: string;
  country: string;
  kicker: string;
  headline: string;
  intro: string;
  overview: string[];
  modes: { title: string; body: string }[];
  coverage: { title: string; body: string }[];
  email: string;
  image: string;
  mapImage: string;
}

export function listOffices(locale: Locale = "es"): Office[] {
  if (locale !== "en") return offices;
  return offices.map((office) => ({
    ...office,
    ...officesEn[office.slug],
  }));
}

export function getOffice(slug: string, locale: Locale = "es") {
  return listOffices(locale).find((office) => office.slug === slug);
}

export const offices: Office[] = [
  {
    slug: "colombia",
    region: "América",
    country: "Colombia",
    kicker: "Sede",
    headline: "Colombia",
    intro:
      "Una sola sede, atención en todo el país y con clientes en el exterior. No es una red de oficinas: es un equipo que sigue el asunto de punta a punta.",
    overview: [
      "Gradiente Jurídico opera desde Colombia. Las reuniones son con cita —presencial u online— y el trámite local se hace ante las autoridades del país: marcas y PI ante la Superintendencia de Industria y Comercio, obras y software en la vía de derechos de autor cuando aplica.",
      "Si el activo también se usa fuera de Colombia, armamos la estrategia desde aquí: qué registrar primero, qué guardar en secreto y cómo alinear contratos con socios, agencias y desarrolladores.",
    ],
    modes: [
      {
        title: "Presencial",
        body: "Reunión con cita en Colombia. Coordinamos día y tema: no hay mostrador de paso ni visita sin agenda.",
      },
      {
        title: "Online",
        body: "Videollamada y el chat del sitio para quien está en otra ciudad o en el exterior. El expediente es el mismo.",
      },
      {
        title: "Trámite en Colombia",
        body: "Registro, vigilancia y controversias ante autoridades locales. El criterio es de negocio: qué protege el activo y qué puede esperar.",
      },
    ],
    coverage: [
      {
        title: "Clientes en Colombia",
        body: "Empresas, fundadores y creadores que lanzan o defienden marca, tecnología o contenido en el mercado local.",
      },
      {
        title: "Clientes en el exterior",
        body: "Quien necesita titularidad oponible en Colombia, o una estrategia de PI alineada con un socio, una licencia o una expansión.",
      },
    ],
    email: contact.email,
    image: media.bogota,
    mapImage: media.map,
  },
];

