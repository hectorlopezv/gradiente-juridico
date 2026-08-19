import { media } from "@/lib/media";

export interface Sector {
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
  serviceSlugs: string[];
  image: string;
}

export const sectors: Sector[] = [
  {
    slug: "propiedad-intelectual",
    title: "Propiedad intelectual",
    description:
      "El mapa completo del activo: qué va a la SIC, qué a la DNDA y qué se queda en secreto.",
    body: "Si el negocio depende de un signo, una invención, una forma o un contenido, la PI no es un trámite aparte: es el perímetro de lo que puedes defender, licenciar o vender.",
    framework:
      "En Colombia la propiedad industrial (marcas, patentes, diseños, secretos) se tramita ante la SIC, con la Decisión 486 como régimen andino. El derecho de autor y el software se rigen por la Ley 23 de 1982, la Decisión 351 y la DNDA. Mezclar las vías es el error más caro.",
    context: [
      "Un portafolio coherente evita duplicar gastos y huecos: la marca del producto, el diseño del empaque, el código de la app y el know-how de producción no se protegen con el mismo instrumento.",
      "Ordenamos titularidad, prioridad de registro y contratos para que el activo aguante crecimiento, un socio o una controversia — sin inventar una red de oficinas ni un trámite que el caso no necesita.",
    ],
    when: [
      "Hay varios activos sueltos (nombre, logo, producto, contenido) sin mapa",
      "Vas a licenciar, franquiciar o vender la compañía",
      "Un tercero se acerca al signo, a la forma o al código",
      "El equipo no sabe qué es registrable y qué debe permanecer interno",
    ],
    process: [
      "Inventario de intangibles y de quién figura como titular",
      "Prioridad: registrar, reservar como secreto o solo contractualizar",
      "Expedientes ante SIC o DNDA y alineación de contratos",
      "Vigilancia y protocolo de reacción ante copias o oposiciones",
    ],
    typicalIssues: [
      "Marca usada años sin solicitud, y un tercero acaba de publicarla en Gaceta",
      "Software sin cesión y marca a nombre de la persona natural del fundador",
      "Diseño divulgado en Instagram antes de pedirlo",
      "Contratos de distribución que dejan el uso de marca sin control",
    ],
    audience:
      "Empresas y titulares que necesitan un portafolio de PI coherente, no piezas sueltas.",
    includes: [
      "Diagnóstico del portafolio de PI",
      "Prioridad de qué registrar y qué guardar como secreto",
      "Trámites ante SIC y DNDA según el activo",
      "Contratos alineados con la titularidad",
    ],
    serviceSlugs: [
      "registro-de-marcas",
      "patentes-de-invencion",
      "disenos-industriales",
      "derechos-de-autor",
      "asesoramiento-estrategico",
    ],
    image: media.corporate,
  },
  {
    slug: "tecnologia-y-software",
    title: "Tecnología y software",
    description:
      "Código, producto y know-how listos para mercado, inversión o un socio técnico.",
    body: "En software el riesgo no es solo copiar la interfaz: es quién es dueño del repositorio, qué queda en la compañía y qué se le puede mostrar a un inversionista.",
    framework:
      "El software, como regla, se protege por derecho de autor (Decreto 1360 de 1989 y DNDA), no por patente de “la app”. Las invenciones técnicas subyacentes pueden ir a patente si cumplen novedad, nivel inventivo y aplicación industrial. El know-how exige secreto real: medidas de acceso, no solo un NDA.",
    context: [
      "Startups y SaaS suelen mezclar freelancers, plantilla y librerías de terceros. Sin cesiones, el due diligence se cae. Sin secreto, el algoritmo sale en una demo o en un PDF de ronda.",
      "Trabajamos titularidad del código, secretos, patentes solo cuando el objeto es una solución técnica patentable, y las reglas con proveedores para que el activo quede en la sociedad.",
    ],
    when: [
      "Vas a levantar capital o a licenciar la plataforma",
      "El desarrollo está repartido entre casa y terceros",
      "Hay una invención técnica además de la interfaz",
      "Un exempleado o un vendor retiene acceso al repo",
    ],
    process: [
      "Mapa de código, contribuciones, licencias open source y secretos",
      "Cesiones, NDA y acuerdos de desarrollo a nombre de la compañía",
      "Decisión patente vs. secreto vs. solo autor",
      "Paquete de PI para el data room",
    ],
    typicalIssues: [
      "GitHub personal del CTO como único repositorio",
      "Se quiere “patentar la app” cuando no hay invención patentable",
      "Cláusulas de confidencialidad sin control de quién ve el código",
      "Dependencias open source incompatibles con el modelo de licencia al cliente",
    ],
    audience:
      "Startups, SaaS y equipos de producto que van a levantar capital, licenciar o escalar con terceros.",
    includes: [
      "Titularidad de software y cesiones de desarrollo",
      "Secretos empresariales y confidencialidad con medidas reales",
      "Viabilidad de patente sobre el componente técnico",
      "PI para due diligence e inversión",
    ],
    serviceSlugs: [
      "patentes-de-invencion",
      "derechos-de-autor",
      "asesoramiento-estrategico",
    ],
    image: media.techCircuit,
  },
  {
    slug: "emprendimiento",
    title: "Emprendimiento",
    description:
      "Marca, contratos y PI del día uno, sin esperar a que el conflicto llegue.",
    body: "El emprendimiento suele arrancar con un nombre en redes y un producto en el mercado. El hueco aparece en la ronda, en el primer socio o cuando alguien copia el signo.",
    framework:
      "La marca se constituye con el registro en la SIC. Los socios y colaboradores se rigen por contratos y, si hay código u obras, por cesiones de autor. Los secretos de la operación (proveedores, recetas, playbooks) solo existen si hay reserva efectiva, no un PDF titulado “confidencial”.",
    context: [
      "Ordenamos la marca, las reglas entre fundadores y lo que no se puede copiar, para que el siguiente canal o inversionista no encuentre un titular distinto al de la sociedad.",
      "No hace falta un departamento legal: hace falta un orden mínimo —signo, titularidad, NDA con quien ve el producto— antes de gastar en pauta.",
    ],
    when: [
      "El nombre ya está en Instagram y no hay solicitud de marca",
      "Entran un socio, un inversionista o un primer empleado clave",
      "Vas a fabricar o a licenciar el producto",
      "Un competidor usa un signo o un empaque parecido",
    ],
    process: [
      "Chequeo del nombre y de las clases frente a la SIC",
      "Titularidad en la sociedad, no en la persona natural por accidente",
      "Acuerdos entre socios y con quienes diseñan o programan",
      "Plan corto: qué registrar ahora y qué puede esperar",
    ],
    typicalIssues: [
      "La marca está a nombre de un fundador que ya no está",
      "El logo lo hizo un amigo sin factura ni cesión",
      "Se lanza en tres ciudades sin vigilancia del signo",
      "El pitch deck describe el “secreto” en detalle",
    ],
    audience:
      "Fundadores y marcas en crecimiento que necesitan proteger identidad y relaciones comerciales desde ahora.",
    includes: [
      "Registro y estrategia de marca",
      "Acuerdos entre socios y colaboradores",
      "Cesiones de diseño, contenido o código",
      "Preparación para inversión o expansión",
    ],
    serviceSlugs: [
      "registro-de-marcas",
      "derechos-de-autor",
      "asesoramiento-estrategico",
    ],
    image: media.opportunity,
  },
];

export function getSector(slug: string) {
  return sectors.find((sector) => sector.slug === slug);
}
