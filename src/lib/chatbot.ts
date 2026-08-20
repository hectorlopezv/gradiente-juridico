import { contact, listServices, listValuePillars, listWhyChoose } from "@/lib/data";
import { messages } from "@/lib/messages";
import type { Locale } from "@/lib/locale";

export const OPEN_CHAT_EVENT = "gj-open-chat";

export function openChat() {
  window.dispatchEvent(new Event(OPEN_CHAT_EVENT));
}

export interface QuickAction {
  label: string;
  payload: string;
}

export interface ChatReply {
  content: string;
  suggestions: QuickAction[];
  whatsappMessage?: string;
  whatsappLabel?: string;
}

function menu(locale: Locale): QuickAction[] {
  const t = messages(locale);
  return [
    { label: t.ourServices, payload: "servicios" },
    { label: t.chatWhyUs, payload: "por que elegirnos" },
    { label: t.navWhatsApp, payload: "whatsapp" },
  ];
}

function afterService(locale: Locale): QuickAction[] {
  const t = messages(locale);
  return [
    { label: t.chatAnotherService, payload: "servicios" },
    { label: t.navWhatsApp, payload: "whatsapp" },
    { label: t.navMenu, payload: "menu" },
  ];
}

function whatsappAction(
  locale: Locale,
  message: string
): Pick<ChatReply, "whatsappMessage" | "whatsappLabel"> {
  const t = messages(locale);
  return {
    whatsappMessage: `${t.chatWaHello} ${message}`,
    whatsappLabel: t.chatContinueWa,
  };
}

export function getWelcomeReply(locale: Locale = "es"): ChatReply {
  const t = messages(locale);
  return {
    content: t.chatWelcome,
    suggestions: menu(locale),
    ...whatsappAction(locale, t.chatWaConsult),
  };
}

function contactReply(locale: Locale): ChatReply {
  const t = messages(locale);
  return {
    content: `${contact.person} · WhatsApp\n\n${contact.phoneIntl}\n${contact.location} · ${
      locale === "en" ? "In-person and online" : contact.locationDetail
    }`,
    suggestions: [
      { label: t.chatSeeServices, payload: "servicios" },
      { label: t.navMenu, payload: "menu" },
    ],
    ...whatsappAction(locale, t.chatWaTeam),
  };
}

function servicesReply(locale: Locale): ChatReply {
  const t = messages(locale);
  const practice = listServices(locale);
  const list = practice
    .map((service, index) => `${index + 1}. ${service.title}`)
    .join("\n");
  return {
    content: `${t.chatServicesLead}\n\n${list}`,
    suggestions: [
      ...practice.map((service) => ({
        label: service.title,
        payload: service.title,
      })),
      { label: t.navMenu, payload: "menu" },
    ],
  };
}

function serviceDetail(locale: Locale, slug: string): ChatReply {
  const t = messages(locale);
  const service = listServices(locale).find((item) => item.slug === slug);
  if (!service) return servicesReply(locale);
  return {
    content: `${service.title}\n\n${service.description}\n\n${t.chatServiceClose}`,
    suggestions: afterService(locale),
    ...whatsappAction(locale, `${t.chatWaInterest} ${service.title}.`),
  };
}

function whyReply(locale: Locale): ChatReply {
  const t = messages(locale);
  const pillars = listValuePillars(locale)
    .map((pillar) => pillar.label)
    .join(" · ");
  const reasons = listWhyChoose(locale)
    .map((item) => `• ${item.title}`)
    .join("\n");
  return {
    content: `∇(J) = ${pillars}.\n${t.chatMission}\n\n${reasons}`,
    suggestions: [
      { label: t.chatSeeServices, payload: "servicios" },
      { label: t.navWhatsApp, payload: "whatsapp" },
      { label: t.navMenu, payload: "menu" },
    ],
  };
}

const HUMAN_HELP =
  /humano|persona|abogado|hablar|whatsapp|ayuda humana|urgente|caso|consulta personal|lawyer|attorney|human|speak/i;
const SERVICES_LIST =
  /servicios?|que ofrecen|que hacen|areas?|opciones|menu|services|practice|what do you/i;
const CONTACT =
  /whatsapp|contacto|email|correo|telefono|escribir|duvan|helena|ubicacion|donde|colombia|bogota|medellin|contact|phone|location|where/i;
const HOURS =
  /horario|horarios|hora|cuando atienden|disponibilidad|hours|schedule|availability|when are you/i;
const VALUE =
  /por que|elegirnos|diferencial|ventaja|enfoque|confidencial|mision|innovacion|nabla|gradiente|why choose|advantage|mission/i;
const SERVICE_KEYWORDS: { patterns: RegExp; slug: string }[] = [
  { patterns: /marca|trademark|brand/, slug: "registro-de-marcas" },
  { patterns: /patente|invencion|patent|invention/, slug: "patentes-de-invencion" },
  { patterns: /diseno|industrial|design/, slug: "disenos-industriales" },
  { patterns: /autor|copyright|obra|work/, slug: "derechos-de-autor" },
  { patterns: /contrato|negociacion|distribucion|compraventa|alianza|contract|deal/, slug: "contratos-y-negocios" },
  { patterns: /sociedad|societari|accionista|estatuto|sas|junta|asamblea|shareholder|bylaw|corporate/, slug: "sociedades-y-gobierno-corporativo" },
  { patterns: /competencia|desleal|publicidad|consumo|promocion|sancionator|advertising|consumer|unfair/, slug: "competencia-consumo-y-publicidad" },
  { patterns: /litigio|demanda|controversia|proceso civil|proceso comercial|litigation|lawsuit|dispute/, slug: "litigios-y-solucion-de-controversias" },
  { patterns: /compliance|cumplimiento|privacidad|riesgos|politicas|privacy|risk/, slug: "compliance-y-gestion-de-riesgos" },
  { patterns: /inversion extranjera|sucursal|filial|extranjer|foreign investment|branch|subsidiary/, slug: "inversion-extranjera-y-negocios-en-colombia" },
];

function normalize(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

export function getBotReply(userInput: string, locale: Locale = "es"): ChatReply {
  const t = messages(locale);
  const q = normalize(userInput).trim();

  if (!q) {
    return {
      content: t.chatPick,
      suggestions: menu(locale),
    };
  }

  if (/^menu$/.test(q)) return getWelcomeReply(locale);
  if (HUMAN_HELP.test(q)) {
    return {
      content: t.chatHuman,
      suggestions: [
        { label: t.chatSeeServices, payload: "servicios" },
        { label: t.navMenu, payload: "menu" },
      ],
      ...whatsappAction(locale, userInput),
    };
  }
  if (HOURS.test(q)) {
    return {
      content: t.chatHours,
      suggestions: menu(locale),
      ...whatsappAction(locale, t.chatWaHours),
    };
  }
  if (CONTACT.test(q)) return contactReply(locale);
  if (VALUE.test(q)) return whyReply(locale);
  if (SERVICES_LIST.test(q)) return servicesReply(locale);

  for (const { patterns, slug } of SERVICE_KEYWORDS) {
    if (patterns.test(q)) return serviceDetail(locale, slug);
  }

  return {
    content: t.chatFallback,
    suggestions: menu(locale),
    ...whatsappAction(locale, userInput),
  };
}

export function getWhatsAppUrl(message?: string): string {
  if (!message) return contact.whatsappUrl;
  return `${contact.whatsappUrl}?text=${encodeURIComponent(message)}`;
}
