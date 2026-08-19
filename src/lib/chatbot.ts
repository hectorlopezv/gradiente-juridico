import { contact, services, valuePillars, whyChooseUs } from "@/lib/data";

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

const MENU: QuickAction[] = [
  { label: "Servicios", payload: "servicios" },
  { label: "¿Por qué elegirnos?", payload: "por que elegirnos" },
  { label: "WhatsApp", payload: "whatsapp" },
];

const SERVICE_ACTIONS: QuickAction[] = services.map((service) => ({
  label: service.title,
  payload: service.title,
}));

const AFTER_SERVICE: QuickAction[] = [
  { label: "Otro servicio", payload: "servicios" },
  { label: "WhatsApp", payload: "whatsapp" },
  { label: "Menú", payload: "menu" },
];

function whatsappAction(message: string): Pick<
  ChatReply,
  "whatsappMessage" | "whatsappLabel"
> {
  return {
    whatsappMessage: `Hola, vengo desde el sitio de Gradiente Jurídico. ${message}`,
    whatsappLabel: "Continuar por WhatsApp",
  };
}

export function getWelcomeReply(): ChatReply {
  return {
    content:
      "Hola, soy el asistente de Gradiente Jurídico. Te oriento sobre propiedad intelectual y te conecto con el equipo por WhatsApp cuando quieras hablar con un abogado.",
    suggestions: MENU,
    ...whatsappAction("Quiero una consulta sobre propiedad intelectual."),
  };
}

function contactReply(): ChatReply {
  return {
    content: `${contact.person} te atiende por WhatsApp.\n\n${contact.phoneIntl}\n${contact.location} · ${contact.locationDetail}`,
    suggestions: [
      { label: "Ver servicios", payload: "servicios" },
      { label: "Menú", payload: "menu" },
    ],
    ...whatsappAction("Quiero hablar con el equipo."),
  };
}

function servicesReply(): ChatReply {
  const list = services
    .map((service, index) => `${index + 1}. ${service.title}`)
    .join("\n");
  return {
    content: `Trabajamos estas áreas. Elige una para ver el detalle:\n\n${list}`,
    suggestions: [...SERVICE_ACTIONS, { label: "Menú", payload: "menu" }],
  };
}

function serviceDetail(index: number): ChatReply {
  const service = services[index];
  return {
    content: `${service.title}\n\n${service.description}\n\nSi este es tu caso, el equipo puede revisarlo por WhatsApp.`,
    suggestions: AFTER_SERVICE,
    ...whatsappAction(`Me interesa ${service.title}.`),
  };
}

function whyReply(): ChatReply {
  const pillars = valuePillars.map((pillar) => pillar.label).join(" · ");
  const reasons = whyChooseUs.map((item) => `• ${item.title}`).join("\n");
  return {
    content: `∇(J) = ${pillars}.\nTu innovación, nuestra misión.\n\n${reasons}`,
    suggestions: [
      { label: "Ver servicios", payload: "servicios" },
      { label: "WhatsApp", payload: "whatsapp" },
      { label: "Menú", payload: "menu" },
    ],
  };
}

const HUMAN_HELP =
  /humano|persona|abogado|hablar|whatsapp|ayuda humana|urgente|caso|consulta personal/i;
const SERVICES_LIST =
  /servicios?|que ofrecen|que hacen|areas?|opciones|menu/i;
const CONTACT =
  /whatsapp|contacto|email|correo|telefono|escribir|duvan|helena|ubicacion|donde|colombia|bogota|medellin/i;
const HOURS = /horario|horarios|hora|cuando atienden|disponibilidad/i;
const VALUE =
  /por que|elegirnos|diferencial|ventaja|enfoque|confidencial|mision|innovacion|nabla|gradiente/i;
const SERVICE_KEYWORDS: { patterns: RegExp; index: number }[] = [
  { patterns: /marca/, index: 0 },
  { patterns: /patente|invencion/, index: 1 },
  { patterns: /diseno|industrial/, index: 2 },
  { patterns: /autor|copyright|obra/, index: 3 },
  { patterns: /asesoramiento|asesoria|estrategico|consultoria/, index: 4 },
];

function normalize(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

export function getBotReply(userInput: string): ChatReply {
  const q = normalize(userInput).trim();

  if (!q) {
    return {
      content: "Elige una opción o escribe tu consulta.",
      suggestions: MENU,
    };
  }

  if (/^menu$/.test(q)) return getWelcomeReply();
  if (HUMAN_HELP.test(q)) {
    return {
      content:
        "Te paso con el equipo. Duvan Rambal te responde por WhatsApp.",
      suggestions: [
        { label: "Ver servicios", payload: "servicios" },
        { label: "Menú", payload: "menu" },
      ],
      ...whatsappAction(userInput),
    };
  }
  if (HOURS.test(q)) {
    return {
      content:
        "Atendemos presencial y online. El horario se confirma según el caso; WhatsApp es el canal más rápido.",
      suggestions: MENU,
      ...whatsappAction("Quisiera consultar disponibilidad."),
    };
  }
  if (CONTACT.test(q)) return contactReply();
  if (VALUE.test(q)) return whyReply();
  if (SERVICES_LIST.test(q)) return servicesReply();

  for (const { patterns, index } of SERVICE_KEYWORDS) {
    if (patterns.test(q)) return serviceDetail(index);
  }

  return {
    content:
      "Eso ya necesita revisión del equipo. Puedes escribirlo por WhatsApp o volver al menú.",
    suggestions: MENU,
    ...whatsappAction(userInput),
  };
}

export function getWhatsAppUrl(message?: string): string {
  if (!message) return contact.whatsappUrl;
  return `${contact.whatsappUrl}?text=${encodeURIComponent(message)}`;
}
