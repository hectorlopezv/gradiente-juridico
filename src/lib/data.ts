import {
  Briefcase,
  FileText,
  Handshake,
  Megaphone,
  Scale,
  Shield,
  Compass,
  FileCheck,
  type LucideIcon,
} from "lucide-react";

export interface PracticeArea {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface WorkPrinciple {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const navLinks = [
  { label: "Nosotros", href: "#nosotros" },
  { label: "Áreas de práctica", href: "#areas" },
  { label: "Nuestra forma de trabajar", href: "#forma-de-trabajar" },
  { label: "Contacto", href: "#contacto" },
];

export const practiceAreas: PracticeArea[] = [
  {
    number: "01",
    title: "Propiedad intelectual y activos intangibles",
    description:
      "Marcas, derechos de autor, software, diseños industriales, secretos empresariales, licencias y cesiones.",
    icon: Shield,
  },
  {
    number: "02",
    title: "Contratos y relaciones comerciales",
    description:
      "Licencias, confidencialidad, distribución, colaboración, desarrollo de software y contratación comercial.",
    icon: FileText,
  },
  {
    number: "03",
    title: "Sociedades y emprendimiento",
    description:
      "Constitución de sociedades, acuerdos de accionistas y fundadores, organización societaria y preparación para inversión.",
    icon: Briefcase,
  },
  {
    number: "04",
    title: "Competencia, consumo y publicidad",
    description:
      "Revisión de campañas, promociones, información al consumidor, competencia desleal y cumplimiento publicitario.",
    icon: Megaphone,
  },
  {
    number: "05",
    title: "Controversias y defensa jurídica",
    description:
      "Oposiciones, recursos, cancelaciones, nulidades, infracciones de propiedad intelectual y actuaciones ante autoridades.",
    icon: Scale,
  },
];

export const workPrinciples: WorkPrinciple[] = [
  {
    number: "1",
    title: "Visión jurídica y empresarial",
    description:
      "Analizamos cada asunto teniendo en cuenta su impacto en el negocio y sus objetivos comerciales.",
    icon: Scale,
  },
  {
    number: "2",
    title: "Recomendaciones claras",
    description:
      "Presentamos riesgos, alternativas y acciones concretas en un lenguaje comprensible.",
    icon: FileCheck,
  },
  {
    number: "3",
    title: "Prevención y estrategia",
    description:
      "Buscamos anticipar conflictos y construir estructuras jurídicas sólidas desde el inicio.",
    icon: Compass,
  },
  {
    number: "4",
    title: "Atención cercana",
    description:
      "Ofrecemos acompañamiento directo, seguimiento continuo y soluciones adaptadas a cada cliente.",
    icon: Handshake,
  },
];

export const missionStatements = [
  "Protegemos lo que diferencia a su empresa.",
  "Estructuramos las relaciones que hacen posible su crecimiento.",
  "Defendemos sus intereses cuando surge una controversia.",
];

export const stats = [
  { value: "5", label: "áreas de práctica especializadas" },
  { value: "100%", label: "enfoque en propiedad intelectual y negocios" },
  { value: "360°", label: "asesoría preventiva y contenciosa" },
  { value: "1:1", label: "atención personalizada y cercana" },
];
