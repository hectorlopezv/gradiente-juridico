import {
  Building2,
  Circle,
  Copyright,
  FileText,
  Globe,
  Lightbulb,
  Megaphone,
  PenTool,
  Scale,
  Shield,
  ShieldCheck,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import {
  servicesEn,
  statsEn,
  trendingEn,
  valuePillarsEn,
  whyChooseUsEn,
} from "@/lib/content-en";
import type { Locale } from "@/lib/locale";
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
  tagline: "Especialistas en empresa y propiedad intelectual.",
  taglineHighlight: "El derecho de crear.",
  missionBanner: "PROTEGE LO QUE CREAS",
  aboutShort:
    "Propiedad intelectual y derecho empresarial, con visión estratégica y enfoque práctico. Protegemos activos, estructuramos negocios y respaldamos decisiones clave para el crecimiento de cada empresa.",
  aboutFirm:
    "Firma boutique con especial énfasis en propiedad intelectual, integrada con soluciones en derecho societario, comercial, contractual y estratégico para empresas que crean, crecen y compiten.",
  aboutPractice:
    "Boutique legal con enfoque en propiedad intelectual y derecho de los negocios. Acompañamos empresas y proyectos en la protección de sus activos, la estructuración de sus relaciones comerciales y la prevención de riesgos.",
  location: contact.location,
  locationDetail: contact.locationDetail,
  email: contact.email,
  phone: contact.phoneIntl,
  contactPerson: contact.person,
  whatsappUrl: contact.whatsappUrl,
};

export function localizedBrand(locale: "es" | "en") {
  if (locale === "en") {
    return {
      ...brand,
      tagline: "Specialists in business and intellectual property.",
      taglineHighlight: "The right to create.",
      missionBanner: "PROTECT WHAT YOU CREATE",
      aboutShort:
        "Intellectual property and business law, with a strategic view and a practical approach. We protect assets, structure deals and back the decisions that grow a company.",
      aboutFirm:
        "A boutique firm with a special focus on intellectual property, integrated with corporate, commercial, contractual and strategic advice for companies that create, grow and compete.",
      aboutPractice:
        "A legal boutique focused on intellectual property and business law. We work with companies and projects to protect their assets, structure commercial relationships and prevent risk.",
      locationDetail: "In-person and online",
    };
  }
  return brand;
}

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
    slug: "contratos-y-negocios",
    title: "Contratos y negocios",
    description:
      "Elaboración, revisión y negociación de contratos comerciales y civiles: prestación de servicios, distribución, compraventa, colaboración, alianzas y demás relaciones empresariales.",
    body: "El contrato es el mapa de la relación: qué se entrega, quién asume el riesgo y cómo se sale. Redactamos, revisamos y negociamos con criterio de negocio, no de formulario genérico.",
    framework:
      "Código Civil y Código de Comercio colombianos, y las cláusulas especiales que el tipo de operación exige: garantía, confidencialidad, PI, no competencia y resolución de controversias.",
    context: [
      "Una alianza, una distribución o un desarrollo a terceros sin perímetro claro deja el activo y el flujo de caja en el aire. El documento tiene que poder ejecutarse el día del conflicto.",
      "Coordinamos el contrato con la titularidad de marca, código u obra cuando el negocio depende de un intangible.",
    ],
    when: [
      "Vas a firmar prestación de servicios, distribución, compraventa o colaboración",
      "Hay una alianza o un canal que usa tu marca o tu know-how",
      "El contrato vigente no cubre lo que el negocio ya hace",
      "Necesitas negociar con un proveedor, un socio o un cliente clave",
    ],
    process: [
      "Lectura del objetivo comercial y de los riesgos de la relación",
      "Redacción o marcado del contrato, con alternativas de negociación",
      "Alineación con PI, confidencialidad y salida",
      "Cierre y, si aplica, seguimiento de anexos y renovaciones",
    ],
    typicalIssues: [
      "Un PDF de internet que no cubre PI, mora ni terminación",
      "El proveedor retiene entregables o herramientas",
      "Hay dos versiones firmadas y nadie sabe cuál rige",
      "La alianza ya opera y el contrato sigue en borrador",
    ],
    audience:
      "Empresas y proyectos que necesitan relaciones comerciales documentadas y negociables.",
    includes: [
      "Prestación de servicios, distribución y compraventa",
      "Colaboración, alianzas y joint ventures contractuales",
      "Revisión y negociación de contratos de contraparte",
      "Cláusulas de PI, confidencialidad y salida",
    ],
    image: media.office,
    icon: FileText,
  },
  {
    slug: "sociedades-y-gobierno-corporativo",
    title: "Sociedades y gobierno corporativo",
    description:
      "Constitución de sociedades, reformas estatutarias, acuerdos de accionistas, actas, juntas, asambleas, reglamentos y acompañamiento en conflictos societarios.",
    body: "La sociedad es el vehículo del negocio. Si los estatutos, las actas o el acuerdo de accionistas no coinciden con cómo se decide en la práctica, el conflicto llega tarde y caro.",
    framework:
      "Código de Comercio, Ley 1258 de 2008 (SAS) y las reglas de gobierno que el tipo societario y los accionistas pacten. Las decisiones que no quedan en acta o en reforma suelen ser las que después no se pueden oponer.",
    context: [
      "Constitución, reformas, aumentos de capital y entrada o salida de socios exigen un rastro que el registro y los terceros puedan leer.",
      "El acuerdo de accionistas ordena lo que los estatutos no cubren: arrastre, tag along, deadlock y reglas de información.",
    ],
    when: [
      "Vas a constituir o a reformar una sociedad",
      "Entra o sale un socio, o hay una ronda",
      "Las juntas y asambleas no tienen actas ni reglamentos claros",
      "Hay un conflicto entre socios o con la administración",
    ],
    process: [
      "Diagnóstico de estatutos, libro de actas y estructura de capital",
      "Constitución, reforma o acuerdo de accionistas según el objetivo",
      "Acompañamiento de juntas, asambleas y reglamentos",
      "Ruta de solución si ya hay controversia societaria",
    ],
    typicalIssues: [
      "La compañía opera y la SAS no está inscrita o está desactualizada",
      "Hay socios de hecho sin participación documentada",
      "Un administrador decide sin facultades o sin actas",
      "El pacto de socios contradice los estatutos",
    ],
    audience:
      "Fundadores, socios y compañías que necesitan un vehículo societario alineado con la decisión real del negocio.",
    includes: [
      "Constitución y reformas estatutarias",
      "Acuerdos de accionistas",
      "Actas, juntas, asambleas y reglamentos",
      "Acompañamiento en conflictos societarios",
    ],
    image: media.corporate,
    icon: Building2,
  },
  {
    slug: "competencia-consumo-y-publicidad",
    title: "Competencia, consumo y publicidad",
    description:
      "Asesoría preventiva y defensa frente a competencia desleal, publicidad, promociones, términos y condiciones, reclamaciones y procesos sancionatorios.",
    body: "La campaña, el empaque y los términos de la plataforma son actos jurídicos. Los revisamos antes de salir al mercado y defendemos cuando hay un reclamo, un competidor o una autoridad.",
    framework:
      "Ley 256 de 1996 (competencia desleal), Estatuto del Consumidor (Ley 1480 de 2011) y las reglas de publicidad y promociones ante la SIC. Un claim que no se sostiene es un riesgo de sanción y de reputación.",
    context: [
      "Promociones, T&C, políticas de devolución y publicidad comparativa tienen que coincidir con lo que el negocio puede cumplir.",
      "La defensa preventiva sale más barata que el proceso sancionatorio: revisamos el material antes del drop o de la pauta.",
    ],
    when: [
      "Lanzas una campaña, una promoción o un marketplace",
      "Un competidor copia el empaque, el claim o el canal",
      "Hay una reclamación de consumidor o un requerimiento de la SIC",
      "Los términos y condiciones no cubren lo que ya vendes",
    ],
    process: [
      "Revisión de publicidad, empaque, T&C y promociones",
      "Ajustes preventivos y protocolo de respuesta a reclamos",
      "Defensa en competencia desleal o en consumo",
      "Acompañamiento en procesos sancionatorios",
    ],
    typicalIssues: [
      "El claim de la pauta no se puede probar",
      "La promoción no tiene mecánica ni vigencia claras",
      "Un tercero usa un signo o un look-alike en el mercado",
      "Los T&C copiados no aplican al producto ni a Colombia",
    ],
    audience:
      "Equipos de marketing, e-commerce y compañías que venden al consumidor o compiten en un mercado sensible al claim.",
    includes: [
      "Revisión de publicidad, promociones y empaque",
      "Términos y condiciones y políticas de consumo",
      "Competencia desleal preventiva y contenciosa",
      "Reclamaciones y procesos sancionatorios",
    ],
    image: media.hospitality,
    icon: Megaphone,
  },
  {
    slug: "litigios-y-solucion-de-controversias",
    title: "Litigios y solución de controversias",
    description:
      "Representación en procesos civiles, comerciales, societarios, administrativos y de propiedad intelectual, con enfoque en riesgo y estrategia empresarial.",
    body: "El litigio es una decisión de negocio: costo, plazo, prueba y reputación. Representamos en la vía que mejor cierra el riesgo, no en la que más se parece a un expediente de oficio.",
    framework:
      "Procesos civiles y comerciales, controversias societarias, actuaciones administrativas y PI (SIC, DNDA y jueces). La vía se elige según el objetivo: cese, indemnización, anulación o un acuerdo que se pueda cumplir.",
    context: [
      "Antes de demandar o de contestar hay que saber qué se puede probar y qué se gana si se gana. A veces el cese o la negociación es el resultado útil.",
      "Coordinamos el proceso con el activo: marca, contrato, sociedad o campaña, para que la estrategia no se contradiga entre foros.",
    ],
    when: [
      "Hay un incumplimiento contractual o un conflicto entre socios",
      "Un tercero usa tu signo, tu diseño o tu contenido",
      "Llegó un requerimiento administrativo o una demanda",
      "Necesitas una estrategia de salida, no solo un escrito",
    ],
    process: [
      "Diagnóstico de hechos, pruebas y objetivo comercial",
      "Elección de vía y de pretensiones",
      "Representación y, si conviene, negociación paralela",
      "Cierre: sentencia, conciliación o protocolo para que no se repita",
    ],
    typicalIssues: [
      "Se demandó sin inventario de pruebas",
      "Hay tres foros abiertos sobre el mismo conflicto",
      "El cliente quiere “ganar” sin definir qué es ganar",
      "El acuerdo verbal ya se rompió y no hay contrato útil",
    ],
    audience:
      "Empresas y titulares que enfrentan un conflicto y necesitan una ruta con criterio de riesgo, no de inercia procesal.",
    includes: [
      "Procesos civiles, comerciales y societarios",
      "Vía administrativa y de propiedad intelectual",
      "Estrategia de pretensiones y de prueba",
      "Negociación y cierre del conflicto",
    ],
    image: media.strategy,
    icon: Scale,
  },
  {
    slug: "compliance-y-gestion-de-riesgos",
    title: "Compliance y gestión de riesgos",
    description:
      "Diseño de políticas, matrices, protocolos y programas de cumplimiento en contratación, gobierno corporativo, consumo, competencia, privacidad y prevención de riesgos.",
    body: "El cumplimiento no es un PDF en Drive: es una matriz que alguien usa. Diseñamos políticas y protocolos que el equipo puede aplicar en contratación, gobierno, consumo, competencia y privacidad.",
    framework:
      "Normas de consumo, competencia, datos personales (Ley 1581 de 2012), gobierno societario y las medidas internas que el tamaño de la empresa puede sostener. El programa tiene que ser proporcional y demostrable.",
    context: [
      "Un requerimiento de autoridad o un due diligence de inversionista pregunta por políticas reales, no por intención. Dejamos rastro: quién aprueba, quién accede, qué se registra.",
      "Priorizamos los riesgos que ya operan: contratos con terceros, tratamiento de datos, claims de publicidad y actas de junta.",
    ],
    when: [
      "Vas a una ronda, a un cliente grande o a un proveedor que pide compliance",
      "No hay políticas de datos, de contratación o de conflictos de interés",
      "Hubo un incidente y no existe protocolo de respuesta",
      "El crecimiento dejó atrás los controles de cuando eran tres personas",
    ],
    process: [
      "Mapa de riesgos y de normas que realmente aplican",
      "Políticas, matrices y protocolos ejecutables",
      "Capacitación breve de quién decide y quién documenta",
      "Revisión periódica y ajuste cuando cambia el negocio",
    ],
    typicalIssues: [
      "Hay una política copiada que nadie aplica",
      "Los datos de clientes están en un Excel sin responsable",
      "Los contratos se firman sin checklist ni aprobación",
      "Un incidente se gestionó por WhatsApp y no quedó rastro",
    ],
    audience:
      "Compañías que necesitan un programa de cumplimiento proporcional a su operación, no un manual decorativo.",
    includes: [
      "Políticas y matrices de riesgo",
      "Protocolos de contratación y de gobierno",
      "Consumo, competencia y privacidad",
      "Prevención y respuesta a incidentes",
    ],
    image: media.map,
    icon: ShieldCheck,
  },
  {
    slug: "inversion-extranjera-y-negocios-en-colombia",
    title: "Inversión extranjera y negocios en Colombia",
    description:
      "Acompañamiento a compañías extranjeras en constitución de sociedades, sucursales, filiales, contratos locales, protección de marcas y operación empresarial en Colombia.",
    body: "Entrar a Colombia no es solo inscribir una sociedad: es el vehículo, los contratos locales, la marca y las reglas con las que se opera. Acompañamos a la compañía extranjera desde el primer mapa hasta la operación.",
    framework:
      "Régimen de sociedades, sucursales de sociedad extranjera, contratos locales y PI ante la SIC. La inversión y la operación se alinean con el vehículo que el negocio realmente necesita — sucursal, SAS o contrato — no con el que suena más familiar en la casa matriz.",
    context: [
      "El error frecuente es copiar el contrato de otro país o usar una marca que en Colombia ya tiene un tercero. El mapa local se hace antes de gastar en equipo, bodega o pauta.",
      "Coordinamos constitución, poderes, contratos con distribuidores o proveedores, y el registro de marca cuando el signo va a usarse aquí.",
    ],
    when: [
      "Vas a constituir una SAS, una sucursal o una filial en Colombia",
      "Necesitas contratos locales de distribución, servicios o empleo clave",
      "La marca o el producto ya se usa o se va a lanzar en el país",
      "La casa matriz pide un interlocutor que una societario, contractual y PI",
    ],
    process: [
      "Diagnóstico del vehículo y de los riesgos de entrar al mercado",
      "Constitución o sucursal, poderes y gobierno mínimo",
      "Contratos locales y protección de marca",
      "Acompañamiento de la operación y de los ajustes del primer año",
    ],
    typicalIssues: [
      "Se eligió sucursal cuando el negocio pedía SAS, o al revés",
      "El contrato marco extranjero no es ejecutable aquí",
      "La marca está pedida por un tercero en la SIC",
      "No hay apoderado ni actas para operar con bancos y proveedores",
    ],
    audience:
      "Compañías extranjeras y grupos que van a constituir, contratar o marcar en Colombia.",
    includes: [
      "Constitución de sociedades, sucursales y filiales",
      "Contratos locales de operación",
      "Protección de marcas en Colombia",
      "Acompañamiento de la operación empresarial",
    ],
    image: media.bogota,
    icon: Globe,
  },
];

export function listServices(locale: Locale = "es"): Service[] {
  if (locale !== "en") return services;
  return services.map((service) => ({
    ...service,
    ...servicesEn[service.slug],
  }));
}

export function getService(slug: string, locale: Locale = "es") {
  return listServices(locale).find((service) => service.slug === slug);
}

export function listValuePillars(locale: Locale = "es") {
  if (locale !== "en") return valuePillars;
  return valuePillars.map((pillar, index) => ({
    ...pillar,
    label: valuePillarsEn[index]?.label ?? pillar.label,
  }));
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
    title: "Contratos y negocios",
    description:
      "Elaboración, revisión y negociación de relaciones empresariales.",
    href: "/practica/contratos-y-negocios",
    image: media.office,
  },
];

export const stats = [
  {
    end: 9,
    suffix: "",
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

export function listTrending(locale: Locale = "es") {
  if (locale !== "en") return trending;
  return trending.map((item, index) => ({
    ...item,
    ...trendingEn[index],
  }));
}

export function listStats(locale: Locale = "es") {
  if (locale !== "en") return stats;
  return stats.map((stat, index) => ({
    ...stat,
    label: statsEn[index]?.label ?? stat.label,
  }));
}

export function listWhyChoose(locale: Locale = "es") {
  if (locale !== "en") return whyChooseUs;
  return whyChooseUs.map((item, index) => ({
    ...item,
    ...whyChooseUsEn[index],
  }));
}

export const insights = [
  { label: "Protección de marcas", href: "/practica/registro-de-marcas" },
  { label: "Patentes e innovación", href: "/practica/patentes-de-invencion" },
  { label: "Diseños industriales", href: "/practica/disenos-industriales" },
  { label: "Derechos de autor", href: "/practica/derechos-de-autor" },
];
