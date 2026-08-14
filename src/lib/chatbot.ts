import { contact, services } from "@/lib/data";

export interface ChatReply {
  content: string;
  redirectWhatsApp?: boolean;
  whatsappMessage?: string;
}

const WELCOME_MESSAGE =
  "¡Hola! Soy el asistente de Gradiente Jurídico. Puedo ayudarte con información sobre nuestros servicios de propiedad intelectual, datos de contacto y más. ¿En qué puedo ayudarte?";

const HOURS_MESSAGE =
  "Nuestros horarios varían según la demanda. Escríbenos por WhatsApp o correo y te responderemos a la brevedad.";

const HUMAN_HELP_PATTERNS =
  /humano|persona|abogado|hablar con|ayuda humana|no entiendo|complejo|urgente|caso espec/i;

const SERVICES_LIST_PATTERNS =
  /servicios?|qu[eé] ofrecen|qu[eé] hacen|[áa]reas?|opciones/i;

const CONTACT_PATTERNS =
  /contacto|email|correo|tel[eé]fono|whatsapp|escribir|duvan|helena/i;

const HOURS_PATTERNS = /horario|horarios|hora|cu[aá]ndo atienden|disponibilidad/i;

const SERVICE_KEYWORDS: { patterns: RegExp; index: number }[] = [
  { patterns: /marca|marcas|registro de marca/i, index: 0 },
  { patterns: /patente|patentes|invenci[oó]n/i, index: 1 },
  { patterns: /dise[ñn]o|dise[ñn]os|industrial/i, index: 2 },
  { patterns: /derechos? de autor|autor|copyright|obra/i, index: 3 },
  {
    patterns: /asesoramiento|asesor[ií]a|estrat[eé]gico|consultor[ií]a/i,
    index: 4,
  },
];

function normalize(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function buildWhatsAppMessage(userQuestion: string): string {
  return `Hola, vengo desde el sitio web de Gradiente Jurídico. ${userQuestion.trim()}`;
}

function contactReply(): ChatReply {
  return {
    content: `Puedes contactarnos así:\n\n• Persona de contacto: ${contact.person}\n• Email: ${contact.email}\n• WhatsApp: ${contact.phoneIntl}\n• Ubicación: ${contact.location}`,
    redirectWhatsApp: true,
    whatsappMessage: buildWhatsAppMessage("Me gustaría recibir más información."),
  };
}

export function getWelcomeMessage(): string {
  return WELCOME_MESSAGE;
}

export function getBotReply(userInput: string): ChatReply {
  const q = normalize(userInput);

  if (!q.trim()) {
    return {
      content: "Escribe tu pregunta y con gusto te ayudo.",
    };
  }

  if (HUMAN_HELP_PATTERNS.test(q)) {
    return {
      content:
        "Para casos más complejos o atención personalizada, te conecto con nuestro equipo por WhatsApp.",
      redirectWhatsApp: true,
      whatsappMessage: buildWhatsAppMessage(userInput),
    };
  }

  if (HOURS_PATTERNS.test(q)) {
    return {
      content: HOURS_MESSAGE,
      redirectWhatsApp: true,
      whatsappMessage: buildWhatsAppMessage(
        "Quisiera consultar sobre horarios de atención."
      ),
    };
  }

  if (CONTACT_PATTERNS.test(q)) {
    return contactReply();
  }

  if (SERVICES_LIST_PATTERNS.test(q)) {
    const list = services
      .map((s, i) => `${i + 1}. ${s.title}: ${s.description}`)
      .join("\n\n");
    return {
      content: `Ofrecemos estos servicios:\n\n${list}`,
    };
  }

  for (const { patterns, index } of SERVICE_KEYWORDS) {
    if (patterns.test(q)) {
      const service = services[index];
      return {
        content: `**${service.title}**\n\n${service.description}\n\n¿Te gustaría agendar una consulta sobre este servicio?`,
        redirectWhatsApp: true,
        whatsappMessage: buildWhatsAppMessage(
          `Me interesa el servicio de ${service.title}.`
        ),
      };
    }
  }

  return {
    content:
      "No tengo una respuesta específica para esa consulta. Te recomiendo hablar directamente con nuestro equipo para una atención personalizada.",
    redirectWhatsApp: true,
    whatsappMessage: buildWhatsAppMessage(userInput),
  };
}

export function getWhatsAppUrl(message?: string): string {
  if (!message) return contact.whatsappUrl;
  return `${contact.whatsappUrl}?text=${encodeURIComponent(message)}`;
}

export const quickQuestions = [
  "¿Qué servicios ofrecen?",
  "Registro de marcas",
  "Patentes",
  "Contacto",
  "Hablar con un abogado",
];
