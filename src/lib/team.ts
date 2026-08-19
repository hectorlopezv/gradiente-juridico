import { media } from "@/lib/media";

export interface Expert {
  slug: string;
  name: string;
  role: string;
  practice: string;
  location: string;
  email: string;
  teaser: string;
  bio: string;
  advises: string;
  approach: string;
  typicalMatters: string[];
  focus: string[];
  languages: string[];
  admitted: string;
  image: string;
}

export const experts: Expert[] = [
  {
    slug: "duvan-rambal",
    name: "Duvan Rambal",
    role: "Contacto principal",
    practice: "Estrategia de propiedad intelectual",
    location: "Colombia",
    email: "helenanovoac@gmail.com",
    teaser:
      "Primera conversación del asunto: qué proteger, en qué orden y cómo llevarlo a WhatsApp con el equipo.",
    bio: "Duvan es el punto de entrada de Gradiente Jurídico. Recibe el caso, ordena el riesgo y define si el camino es registro, contrato, secreto o controversia — o una combinación. Trabaja con empresas, fundadores y creadores que necesitan una lectura de negocio, no solo un trámite.\n\nEn una boutique de PI el cuello de botella suele ser el diagnóstico: ¿la marca ya se usa sin titularidad clara? ¿El software está en manos de freelancers? ¿Hay un tercero que se acerca demasiado al signo? Duvan traduce eso en un plan accionable y conecta con el abogado del área.",
    advises:
      "Fundadores, pymes y equipos de producto que van a lanzar, licenciar o escalar un activo intangible en Colombia y, cuando aplica, en el exterior.",
    approach:
      "Primero el objetivo comercial (lanzar, invertir, defender, licenciar). Después el mapa de activos y el canal: presencial u online. WhatsApp es el hilo rápido; el encargo formal queda por escrito.",
    typicalMatters: [
      "Diagnóstico de portafolio de marcas, software y contratos",
      "Priorizar qué registrar antes de un lanzamiento o una ronda",
      "Coordinar vigilancia, oposiciones y defensa con el resto del equipo",
      "Alinear titulares, socios y proveedores para que el activo no se diluya",
    ],
    focus: [
      "Estrategia de PI",
      "Relación con el cliente",
      "Coordinación preventiva y contenciosa",
    ],
    languages: ["Español"],
    admitted: "Colombia",
    image: media.team1,
  },
  {
    slug: "helena-novoa",
    name: "Helena Novoa",
    role: "Propiedad intelectual",
    practice: "Marcas y derechos de autor",
    location: "Colombia",
    email: "helenanovoac@gmail.com",
    teaser:
      "Identidad de marca, contenidos y obras: registro, uso en el mercado y reglas con terceros.",
    bio: "Helena se ocupa de la identidad que el mercado reconoce: signos distintivos, nombres, empaques y el contenido que la empresa produce. Combina el trámite ante la Superintendencia de Industria y Comercio y, en obras, las vías de derechos de autor, con una lectura de cómo se usa el activo en canales, empaque y contratos.\n\nEl error frecuente es invertir en marca o contenido sin titularidad oponible, o firmar con agencias y creadores sin cesión. Helena ordena clases, anterioridades y el perímetro de uso para que el signo y las obras aguanten crecimiento, franquicia o exportación.",
    advises:
      "Marcas de consumo, estudios, software houses y empresas que publican contenido o trabajan con agencias, influencers y colaboradores.",
    approach:
      "Búsqueda de anterioridades y riesgo de colisión antes de gastar en diseño o pauta. Luego registro, reglas de uso y licencias. Si hay un tercero cerca del signo, se evalúa oposición o coexistencia con criterio comercial.",
    typicalMatters: [
      "Registro y vigilancia de marcas en Colombia y estrategia en el exterior",
      "Titularidad de obras, software y contenido entre autores y empresa",
      "Contratos de licencia, merchandising y uso de marca por distribuidores",
      "Cesiones con agencias, freelancers y creadores",
    ],
    focus: ["Marcas", "Derechos de autor", "Licencias"],
    languages: ["Español"],
    admitted: "Colombia",
    image: media.team2,
  },
  {
    slug: "camila-restrepo",
    name: "Camila Restrepo",
    role: "Activos tecnológicos",
    practice: "Patentes, software y secretos",
    location: "Colombia",
    email: "helenanovoac@gmail.com",
    teaser:
      "Invenciones, código y know-how: de la idea a un activo que se puede licenciar o mostrar en due diligence.",
    bio: "Camila trabaja donde el valor está en lo técnico: invenciones, plataformas, procesos y el conocimiento que no debe salir del equipo. Ayuda a decidir qué se patenta, qué se guarda como secreto y qué se protege con contratos y cesiones de desarrollo.\n\nEn tecnología el riesgo no es solo copiar el producto: es que el repositorio, los freelancers o un socio se lleven el know-how. Camila documenta titularidad, NDA, acuerdos de desarrollo y el paquete que un inversionista o un licenciatario puede leer.",
    advises:
      "Equipos de producto, inventores y compañías de software o manufactura que van a mercado, a ronda o a una colaboración técnica.",
    approach:
      "Separar lo registrable, lo secreto y lo contractual. No todo se patenta; a veces el secreto y las cesiones son la vía. El entregable es un mapa que el negocio puede usar en negociación, no un expediente suelto.",
    typicalMatters: [
      "Búsqueda de anterioridades y viabilidad de patente de invención",
      "Titularidad de software, repositorios y desarrollos con terceros",
      "Secretos empresariales y protocolos de confidencialidad",
      "Paquetes de PI para inversión, licencia o due diligence",
    ],
    focus: ["Patentes", "Software", "Secretos empresariales"],
    languages: ["Español"],
    admitted: "Colombia",
    image: media.team3,
  },
  {
    slug: "andres-mejia",
    name: "Andrés Mejía",
    role: "Controversias y cumplimiento",
    practice: "Defensa de PI y publicidad",
    location: "Colombia",
    email: "helenanovoac@gmail.com",
    teaser:
      "Cuando hay oposición, copia o riesgo en campaña: defensa y prevención con criterio de reputación.",
    bio: "Andrés interviene cuando el activo ya está en disputa o a punto de estarlo: oposiciones a marcas, usos no autorizados, copias de diseño o reclamos por publicidad. También trabaja hacia atrás: revisar campañas, empaques y claims antes de que salgan al aire.\n\nEn PI contenciosa el tiempo cuenta. Un signo publicado, una feria o una pauta viral pueden cerrar opciones. Andrés arma la reacción —cese, oposición, negociación— y deja un protocolo para que el cliente no dependa de improvisar el próximo incidente.",
    advises:
      "Titulares que enfrentan un tercero en el mercado, y equipos de marketing o legal interno que quieren lanzar sin un reclamo evitable.",
    approach:
      "Hechos, pruebas de uso y el objetivo: ¿retirar al infractor, coexistir, o sostener el registro? La vía judicial o administrativa se elige según costo, plazo y daño reputacional, no por inercia.",
    typicalMatters: [
      "Oposiciones y defensa de solicitudes de marca",
      "Infracción de marcas, diseños y contenidos",
      "Revisión de publicidad, empaque y claims",
      "Protocolos de reacción ante copias y usos no autorizados",
    ],
    focus: ["Infracciones", "Oposiciones", "Publicidad"],
    languages: ["Español"],
    admitted: "Colombia",
    image: media.team4,
  },
];

export function getExpert(slug: string) {
  return experts.find((expert) => expert.slug === slug);
}
