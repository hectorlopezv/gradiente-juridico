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
import { media } from "@/lib/media";

export interface Service {
  slug: string;
  title: string;
  description: string;
  body: string;
  framework: string;
  context: string[];
  when: string[];
  process: string[];
  typicalIssues: string[];
  audience: string;
  includes: string[];
  image: string;
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
  location: "Colombia",
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
};

export const images = {
  hero: media.hero,
  opportunity: media.opportunity,
  future: media.future,
};

export const navMain = [
  { label: "Insight", href: "/insight", menu: "insight" as const },
  { label: "Práctica", href: "/practica", menu: "expertise" as const },
  { label: "Nosotros", href: "/nosotros", menu: "people" as const },
];

export const valuePillars: ValuePillar[] = [
  { label: "Protección", icon: Shield },
  { label: "Innovación", icon: Lightbulb },
  { label: "Valor", icon: TrendingUp },
];

export const services: Service[] = [
  {
    slug: "registro-de-marcas",
    title: "Registro de Marcas",
    description:
      "Identidad oponible ante la SIC: clases, anterioridades y defensa del signo en Colombia y, si aplica, en el exterior.",
    body: "En Colombia el derecho exclusivo sobre la marca se adquiere con el registro ante la Superintendencia de Industria y Comercio. Usar el nombre en redes no basta frente a un tercero que llegó primero a la oficina.",
    framework:
      "Decisión 486 de la Comunidad Andina, Circular Única de la SIC y, para el registro internacional, el Protocolo de Madrid (Ley 1455 de 2011). El registro dura diez años y es renovable.",
    context: [
      "La marca es cualquier signo perceptible capaz de distinguir productos o servicios: palabras, logos, colores o combinaciones. La SIC examina distintividad y riesgo de confusión; terceros pueden oponerse tras la publicación en la Gaceta de la Propiedad Industrial.",
      "El registro es territorial: una marca en el extranjero no queda protegida en Colombia por ese solo hecho. Si el negocio cruza fronteras, hay que diseñar el mapa de países según prioridad comercial, no según inercia.",
    ],
    when: [
      "Antes de invertir en empaque, pauta o un local con el nombre ya elegido",
      "Cuando un tercero solicita un signo parecido o lo usa en el mercado",
      "Al franquiciar, licenciar o abrir un canal de distribución",
      "Si vas a exportar o a vender en marketplaces fuera de Colombia",
    ],
    process: [
      "Búsqueda de anterioridades y lectura de riesgo de colisión en las clases de Niza que importan al negocio",
      "Definición del signo, del titular y del listado de productos o servicios",
      "Radicación ante la SIC, respuesta a requerimientos y seguimiento hasta la resolución",
      "Vigilancia, oposiciones, cancelación por no uso y defensa por infracción cuando el signo ya está en el mercado",
    ],
    typicalIssues: [
      "El nombre ya se usa, pero otro lo pidió primero en la SIC",
      "La solicitud cubre una sola clase y el negocio opera en tres",
      "Un socio o una agencia figura como titular sin que eso se haya decidido",
      "Hay oposición o un signo publicado que se parece demasiado",
    ],
    audience:
      "Empresas, emprendimientos y titulares que necesitan un signo oponible antes de gastar en marca, empaque o expansión.",
    includes: [
      "Búsqueda de anterioridades y riesgo de colisión",
      "Solicitud y seguimiento del registro en Colombia",
      "Estrategia de titularidad y de clases de Niza",
      "Vigilancia, oposiciones e infracciones",
      "Mapa de protección en el exterior cuando el mercado lo exige",
    ],
    image: media.corporate,
    icon: Circle,
  },

  {
    slug: "patentes-de-invencion",
    title: "Patentes de Invención",
    description:
      "Novedad, nivel inventivo y aplicación industrial: de la idea al título ante la SIC, o a la decisión de no patentar.",
    body: "La patente no es el único camino para un desarrollo técnico. A veces el secreto o el contrato protegen mejor. Cuando sí aplica, el expediente tiene que resistir el examen de fondo.",
    framework:
      "Decisión 486: se patentan productos o procedimientos nuevos, con nivel inventivo y aplicación industrial. La SIC hace examen de forma y luego de patentabilidad. Divulgar antes de solicitar puede destruir la novedad; hay un plazo de gracia de un año en ciertos casos.",
    context: [
      "El estado de la técnica es mundial: no basta con que nadie lo venda en Colombia. Una publicación, una feria o un video pueden anticipar la invención. Por eso la búsqueda y el calendario de divulgación importan tanto como la redacción.",
      "Las reivindicaciones delimitan el monopolio. Un texto vago no se defiende; uno demasiado estrecho no cubre lo que el negocio va a vender. El entregable útil es un perímetro negociable para licencias, inversión o exclusión de imitadores.",
    ],
    when: [
      "Hay una solución técnica que no es obvia para un experto del oficio",
      "Vas a mostrar el desarrollo a un inversionista, un fabricante o un socio",
      "El producto se puede copiar con ingeniería inversa si no hay título",
      "Necesitas un activo que entre en un due diligence o en una licencia",
    ],
    process: [
      "Búsqueda en el estado de la técnica y viabilidad: ¿patente, modelo de utilidad, secreto o nada?",
      "Redacción de descripción, reivindicaciones, dibujos y resumen",
      "Radicación, examen formal y de fondo ante la SIC, respuesta a requerimientos",
      "Mantenimiento, licencias y coordinación con secretos que no deben divulgarse en el expediente",
    ],
    typicalIssues: [
      "El prototipo ya se mostró en una feria o en redes",
      "Varios inventores y un freelancer sin cesión",
      "Se quiere patentar software o un modelo de negocio que no cumple los requisitos",
      "La reivindicación no cubre la variante que el competidor va a usar",
    ],
    audience:
      "Inventores, equipos de producto y compañías que quieren que el desarrollo técnico se convierta en un activo negociable — o saber a tiempo que no es patentable.",
    includes: [
      "Búsqueda de anterioridades y estado de la técnica",
      "Redacción de reivindicaciones y del expediente",
      "Seguimiento del trámite ante la SIC",
      "Apoyo a licencias, inversión y expansión",
    ],
    image: media.techLab,
    icon: Lightbulb,
  },
  {
    slug: "disenos-industriales",
    title: "Diseños Industriales",
    description:
      "La apariencia del producto como activo: novedad, registro ante la SIC y defensa frente a copias de catálogo.",
    body: "El diseño industrial protege la forma y la estética que hacen reconocible un producto. No cubre la función técnica —eso va por patente— ni el nombre —eso va por marca.",
    framework:
      "Decisión 486 y trámite ante la SIC. La protección típica es de diez años desde la solicitud y, a diferencia de la marca, no se renueva: después el diseño pasa al dominio público. Divulgar la pieza antes de pedir el registro pone en riesgo la novedad.",
    context: [
      "En consumo, muebles, empaque o dispositivos, la copia suele llegar en las primeras semanas de lanzamiento. Registrar después de la feria o del drop en redes es, en muchos casos, llegar tarde.",
      "El expediente necesita representaciones claras de la apariencia. Un render incompleto o un producto ya idéntico en el mercado extranjero puede tumbar la novedad. Coordinamos calendario de lanzamiento, fabricantes y cláusulas de no uso de moldes.",
    ],
    when: [
      "La ventaja competitiva está en la silueta, el empaque o la línea visual",
      "Vas a producir con un tercero que podría replicar el molde",
      "Hay copias en ferias, marketplace o importaciones paralelas",
      "El lanzamiento está cerca y aún no hay solicitud radicada",
    ],
    process: [
      "Evaluar si lo distintivo es forma (diseño), función (patente) o signo (marca)",
      "Preparar vistas, novedad y titularidad antes de divulgar",
      "Solicitud ante la SIC y seguimiento hasta el certificado",
      "Defensa por infracción y reglas con fabricantes y distribuidores",
    ],
    typicalIssues: [
      "El catálogo ya se publicó y el diseño no está pedido",
      "El fabricante retiene moldes o herramientas",
      "Se confunde diseño industrial con derecho de autor sobre el dibujo",
      "La copia entra por aduana o por un marketplace",
    ],
    audience:
      "Marcas de producto, manufactura y catálogos cuya ventaja está en la forma, el empaque o la línea visual.",
    includes: [
      "Evaluación de la apariencia como activo",
      "Registro de diseños industriales ante la SIC",
      "Calendario de divulgación y lanzamiento",
      "Defensa frente a copias en el mercado",
    ],
    image: media.design,
    icon: PenTool,
  },
  {
    slug: "derechos-de-autor",
    title: "Derechos de Autor",
    description:
      "Obras, software y contenido: titularidad desde la creación, registro en la DNDA y reglas con quien produce.",
    body: "El derecho de autor nace con la obra. El registro en la Dirección Nacional de Derecho de Autor no crea el derecho, pero sí facilita probarlo. El problema habitual no es la norma: es quién figura como titular cuando hay agencia, freelancer o equipo interno.",
    framework:
      "Ley 23 de 1982, Decisión 351 de la Comunidad Andina y, para software, Decreto 1360 de 1989: el soporte lógico se trata como creación del dominio literario. La DNDA lleva el Registro Nacional. El código se protege por autor; el know-how, a menudo, por secreto.",
    context: [
      "Software, cursos, fotografías, música, audiovisuales y sitios web entran en este régimen si hay originalidad. Sin cesión, el desarrollador o el fotógrafo puede conservar facultades que la empresa cree propias.",
      "Licenciar no es lo mismo que ceder. Una licencia de uso para un cliente no transfiere el código ni las actualizaciones. Documentamos el perímetro: qué se entrega, qué queda en la casa y qué pueden hacer colaboradores.",
    ],
    when: [
      "Hay varios autores, un estudio o una fábrica de contenido",
      "El producto es software, una app o una plataforma con código de terceros",
      "Vas a publicar, licenciar o vender un catálogo de obras",
      "Un excolaborador reclama la autoría o reusa el material",
    ],
    process: [
      "Mapa de obras, software y material auxiliar, y de quién los creó",
      "Cesiones, obras por encargo y licencias alineadas con el negocio",
      "Registro en la DNDA cuando aporta prueba o trámites posteriores",
      "Defensa por uso no autorizado y revisión de plataformas o de repositorios",
    ],
    typicalIssues: [
      "El repositorio está a nombre del freelancer",
      "La agencia entregó artes sin cesión de derechos patrimoniales",
      "Se usa música o stock sin licencia suficiente para pauta paga",
      "Hay duda entre registrar software en DNDA o pedir patente",
    ],
    audience:
      "Creadores, estudios, software houses y empresas que producen contenido o código con varios autores o contratistas.",
    includes: [
      "Titularidad de software, contenido y obras",
      "Registro ante la DNDA cuando conviene",
      "Cesiones, obras por encargo y licencias",
      "Reglas entre autores, empresa y colaboradores",
    ],
    image: media.copyright,
    icon: Copyright,
  },
  {
    slug: "asesoramiento-estrategico",
    title: "Asesoramiento Estratégico",
    description:
      "PI como decisión de negocio: secretos, due diligence, socios y el mapa de qué registrar y qué no.",
    body: "Registrar no siempre es lo primero. A veces hay que cerrar un NDA, separar background IP o decidir que el algoritmo no sale en una patente. Integramos el activo al contrato y a la ronda.",
    framework:
      "Secretos empresariales: Decisión 486 y Ley 256 de 1996 (competencia desleal). La información debe ser secreta, tener valor por no ser conocida y estar sujeta a medidas razonables de reserva. Un NDA solo no convierte en secreto lo que ya es público.",
    context: [
      "En una ronda o en una colaboración, el inversionista pregunta quién es dueño del código, de la marca y de los contratos con desarrolladores. El due diligence de PI es esa respuesta, ordenada.",
      "La estrategia también es negativa: qué no patentar para no divulgar, qué no marcar si el signo es débil, qué no licenciar sin control de calidad. El entregable es un mapa que dirección puede ejecutar.",
    ],
    when: [
      "Hay un socio, un fabricante o un inversionista a punto de entrar",
      "El know-how está en la cabeza de dos personas y en un Drive abierto",
      "Vas a otro país o a una licencia cruzada",
      "Necesitas un paquete de PI legible para due diligence",
    ],
    process: [
      "Diagnóstico: marcas, patentes, diseños, autor, secretos y contratos",
      "Prioridad: qué registrar, qué reservar, qué ceder o licenciar",
      "Documentos: NDA, desarrollo, colaboración y licencias",
      "Protocolo de acceso a información y de reacción ante fugas o copias",
    ],
    typicalIssues: [
      "Freelancers sin cesión y un repo compartido",
      "Socios que aportan tecnología previa sin definir background IP",
      "Listas de clientes o fórmulas tratadas como secretas sin medidas reales",
      "Una ronda en pocas semanas y el portafolio desordenado",
    ],
    audience:
      "Fundadores y equipos de dirección que necesitan que la PI aguante una ronda, un socio, una licencia o una salida a otro mercado.",
    includes: [
      "Due diligence de propiedad intelectual",
      "Secretos empresariales y medidas de reserva",
      "Contratos de colaboración y de desarrollo",
      "Preparación para inversión o expansión",
    ],
    image: media.office,
    icon: Handshake,
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export const newsItems = [
  {
    kicker: "Tecnología",
    title: "IA generativa: lo que la DNDA ya está negando en el registro",
    summary:
      "Solo las personas físicas son autoras. El output 100 % de un modelo no se inscribe.",
    href: "/insight/ia-generativa-dnda",
  },
  {
    kicker: "Marcas",
    title: "49.000 signos en 2025: el registro no es la gestión",
    summary:
      "Casi todo lo que se pide en la SIC es marca. El hueco está en titularidad y vigilancia.",
    href: "/insight/pi-en-la-empresa-2025",
  },
  {
    kicker: "Software",
    title: "No se patenta la app: código, secreto y due diligence",
    summary:
      "El 87 % de las patentes de 2025 las pidieron no residentes. Un SaaS local se juega otra cosa.",
    href: "/insight/software-saas",
  },
];

export const trending = [
  {
    title: "Registro de Marcas",
    description:
      "Protección de identidad comercial en Colombia y en el exterior.",
    href: "/practica/registro-de-marcas",
    image: media.corporate,
  },
  {
    title: "Patentes de Invención",
    description:
      "Estrategia para resguardar desarrollos tecnológicos e invenciones.",
    href: "/practica/patentes-de-invencion",
    image: media.techLab,
  },
  {
    title: "Asesoramiento Estratégico",
    description:
      "Soluciones a medida para potenciar tus activos intangibles.",
    href: "/practica/asesoramiento-estrategico",
    image: media.office,
  },
];

export const stats = [
  {
    end: 5,
    suffix: "+",
    label: "áreas de práctica",
  },
  {
    end: 1,
    suffix: ":1",
    label: "con cada cliente",
  },
  {
    end: 360,
    suffix: "°",
    label: "preventiva y contenciosa",
  },
  {
    end: 2,
    suffix: "",
    label: "presencial y online",
  },
];

export const whyChooseUs = [
  {
    number: "01",
    title: "Enfoque estratégico y personalizado",
    body: "Cada asunto se analiza por su impacto en el negocio, no solo por el trámite. Priorizamos decisiones que protejan el activo y empujen el objetivo comercial.",
  },
  {
    number: "02",
    title: "Experiencia y actualización constante",
    body: "El entorno de PI cambia con la tecnología, el comercio y la regulación. Mantenemos criterio vigente para anticipar riesgos, no solo reaccionar a ellos.",
  },
  {
    number: "03",
    title: "Acompañamiento en cada etapa",
    body: "Desde la idea hasta la controversia: registro, contratos, vigilancia y defensa. Un mismo equipo sigue el asunto para que no se pierda contexto.",
  },
  {
    number: "04",
    title: "Compromiso, confidencialidad y resultados",
    body: "Trabajamos con reserva absoluta sobre tus activos y con recomendaciones claras: riesgos, alternativas y el siguiente paso — en lenguaje que se puede ejecutar.",
  },
];

export const insights = [
  { label: "Protección de marcas", href: "/practica/registro-de-marcas" },
  { label: "Patentes e innovación", href: "/practica/patentes-de-invencion" },
  { label: "Diseños industriales", href: "/practica/disenos-industriales" },
  { label: "Derechos de autor", href: "/practica/derechos-de-autor" },
];
