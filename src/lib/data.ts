import {
  Circle,
  Copyright,
  Handshake,
  Lightbulb,
  PenTool,
  Shield,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";

export interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface ValuePillar {
  label: string;
  icon: LucideIcon;
}

export const contact = {
  person: "Duvan Rambal",
  email: "helenanovoac@gmail.com",
  phone: "305 945 1119",
  phoneIntl: "+57 305 945 1119",
  whatsapp: "573059451119",
  whatsappUrl: "https://wa.me/573059451119",
  location: "Buenos Aires, Argentina",
  locationDetail: "Atención presencial y online",
};

export const brand = {
  tagline: "Especialistas en Propiedad Intelectual.",
  taglineHighlight: "Protegemos tus ideas. Potenciamos tu futuro.",
  missionBanner: "TU INNOVACIÓN NUESTRA MISIÓN",
  location: contact.location,
  locationDetail: contact.locationDetail,
  email: contact.email,
  phone: contact.phoneIntl,
  contactPerson: contact.person,
  whatsappUrl: contact.whatsappUrl,
  website: "www.gradientejuridico.com.ar",
};

export const navLinks = [
  { label: "Servicios", href: "#servicios" },
  { label: "¿Por qué elegirnos?", href: "#por-que-elegirnos" },
  { label: "Contacto", href: "#contacto" },
];

export const valuePillars: ValuePillar[] = [
  { label: "Protección", icon: Shield },
  { label: "Innovación", icon: Lightbulb },
  { label: "Valor", icon: TrendingUp },
];

export const services: Service[] = [
  {
    title: "Registro de Marcas",
    description:
      "Protegemos la identidad de tu marca en Argentina y en el exterior.",
    icon: Circle,
  },
  {
    title: "Patentes de Invención",
    description:
      "Aseguramos la protección legal de tus invenciones y desarrollos tecnológicos.",
    icon: Lightbulb,
  },
  {
    title: "Diseños Industriales",
    description: "Protegemos la estética y el diseño de tus productos.",
    icon: PenTool,
  },
  {
    title: "Derechos de Autor",
    description:
      "Resguardamos tus obras, creaciones y contenidos originales.",
    icon: Copyright,
  },
  {
    title: "Asesoramiento Estratégico",
    description:
      "Soluciones legales a medida para potenciar tus activos intangibles.",
    icon: Handshake,
  },
];

export const whyChooseUs = [
  "Enfoque estratégico y personalizado.",
  "Amplia experiencia y actualización constante.",
  "Acompañamiento integral en cada etapa.",
  "Compromiso, confidencialidad y resultados.",
];
