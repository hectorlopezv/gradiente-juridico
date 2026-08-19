import { media } from "@/lib/media";

export interface InsightSection {
  title: string;
  paragraphs: string[];
}

export interface SuccessCase {
  slug: string;
  kicker: string;
  title: string;
  summary: string;
  dateLabel: string;
  challenge: string;
  approach: string;
  result: string;
  sections: InsightSection[];
  takeaways: string[];
  image: string;
}

export const successCases: SuccessCase[] = [
  {
    slug: "marca-consumo",
    kicker: "Marcas",
    title: "De un nombre en uso a una marca oponible en Colombia y el exterior",
    summary:
      "Usar el signo en el mercado no sustituye el registro ante la SIC. En 2025 casi todas las solicitudes de signos distintivos en Colombia fueron marcas: el cuello de botella ya no es “enterarse”, es titularidad, clases y vigilancia.",
    dateLabel: "Análisis · 2026",
    challenge:
      "Una marca de consumo ya operaba, pero sin mapa de clases, titular ni vigilancia. Había solicitudes de terceros demasiado cerca del signo.",
    approach:
      "Búsqueda de anterioridades, perímetro de protección, registro y contratos de distribución alineados con el titular.",
    result:
      "El signo queda listo para crecer: trámite, reglas de uso y protocolo ante usos no autorizados.",
    sections: [
      {
        title: "El dato de 2025",
        paragraphs: [
          "Según cifras de la Superintendencia de Industria y Comercio recopiladas en el estudio IP.CO de PONS IP (2025), en Colombia se presentaron 49.034 solicitudes de signos distintivos; el 98,6 % fueron marcas. El sistema se usa. Lo que sigue fallando en la empresa es integrar ese registro a la operación: quién es titular, en qué clases de Niza, y qué pasa cuando un tercero publica un signo parecido en la Gaceta.",
          "El derecho exclusivo sobre la marca, en el régimen andino (Decisión 486), se adquiere con el registro. El uso en redes o en el local da reconocimiento comercial; no da, por sí solo, la facultad de excluir a quien llegó primero a la SIC.",
        ],
      },
      {
        title: "El reto que vemos",
        paragraphs: [
          "El patrón es repetido: el nombre ya está en empaque y pauta, el logo lo hizo una agencia, y la solicitud —si existe— cubre una clase cuando el negocio opera en tres. Mientras tanto, el principio de primero en el tiempo, primero en el derecho ya está corriendo a favor de otro.",
          "A eso se suma el titular equivocado: la persona natural del fundador, un socio que ya no está, o la agencia. Escalar canales con esa base es construir sobre un activo que no está en la sociedad.",
        ],
      },
      {
        title: "Cómo lo ordenamos",
        paragraphs: [
          "Empezamos por anterioridades y riesgo de confusión, no por el formulario. Definimos signo, titular y listado de productos o servicios. Radicamos ante la SIC, respondemos requerimientos y dejamos vigilancia: oposiciones, cancelación por no uso e infracción.",
          "Si el mercado ya no es solo Colombia, el Protocolo de Madrid permite, con una solicitud o un registro base en la SIC, designar otros países de la Unión de Madrid en un solo idioma y un juego de tasas. No es automático ni barato: hay que elegir territorios según venta real, no según un mapa decorativo. La solicitud internacional se presenta a través de la SIC como oficina de origen; la OMPI no recibe el trámite directo del usuario.",
        ],
      },
      {
        title: "Qué cambia para el negocio",
        paragraphs: [
          "El entregable no es “un certificado”. Es un signo que se puede oponer, licenciar y defender, con contratos de distribución que no dejan el uso de la marca en el aire. El detalle de cada cliente se anonimiza; el método es este.",
        ],
      },
    ],
    takeaways: [
      "En Colombia el registro es constitutivo: sin SIC, el uso no excluye al tercero.",
      "Las clases de Niza tienen que seguir al negocio, no al primer formulario.",
      "Madrid exige solicitud o registro base en Colombia y se tramita vía SIC.",
    ],
    image: media.retail,
  },
  {
    slug: "software-saas",
    kicker: "Tecnología",
    title: "Software, secretos y la ilusión de “patentar la app”",
    summary:
      "En 2025 la mayoría de las patentes pedidas en Colombia las presentaron no residentes. Para un SaaS local el activo suele ser código (DNDA), know-how (secreto) y contratos — no un título de invención sobre la interfaz.",
    dateLabel: "Análisis · 2026",
    challenge:
      "Desarrollo con freelancers, repo compartido y una ronda cerca, sin cesiones ni secreto real.",
    approach:
      "Titularidad del software, secretos, NDA y cláusulas de PI para que el activo quede en la sociedad.",
    result:
      "Un paquete legible en due diligence: quién es dueño de qué y qué no se muestra.",
    sections: [
      {
        title: "Qué dicen las cifras",
        paragraphs: [
          "El mismo recuento de 2025 sobre la SIC muestra 2.148 solicitudes de patentes en Colombia: 1.776 de no residentes (87 %) y 372 de residentes (13 %). La señal es clara: el grueso de la tecnología que se pide proteger aquí se origina fuera. Eso no significa que un SaaS colombiano “deba patentar”. Significa que hay que elegir el instrumento correcto.",
          "La Decisión 486, como regla, no trata los programas de ordenador como invenciones patentables en sí. El código se protege por derecho de autor (Ley 23 de 1982, Decreto 1360 de 1989, DNDA). Si hay una solución técnica nueva —un procedimiento, un dispositivo— puede haber patente sobre ese objeto, no sobre “la app”.",
        ],
      },
      {
        title: "El hueco que tumba la ronda",
        paragraphs: [
          "El repositorio en la cuenta personal del CTO, los freelancers sin cesión y un Drive donde está el “secreto” del algoritmo. El inversionista no compra un Figma: pregunta quién puede impedir que un exempleado se lleve el know-how.",
          "La Ley 256 de 1996 y la Decisión 486 exigen, para el secreto empresarial, que la información sea secreta, tenga valor por no ser conocida y esté sujeta a medidas razonables de reserva. Un NDA sin control de acceso no convierte en secreto lo que ya se explicó en el pitch.",
        ],
      },
      {
        title: "El enfoque",
        paragraphs: [
          "Mapa de código, contribuciones, licencias open source y de qué no debe salir del perímetro. Cesiones a nombre de la sociedad. NDA y acuerdos de desarrollo. Decisión consciente: autor + secreto, o además una patente si el componente técnico lo aguanta.",
          "El data room deja de ser una carpeta de PDFs: es la respuesta a quién es titular, qué se licencia al cliente y qué permanece interno.",
        ],
      },
    ],
    takeaways: [
      "No se “patenta la app”: el código va por autor; la invención técnica, si existe, por patente.",
      "El secreto exige medidas reales de reserva, no solo un contrato.",
      "Sin cesiones, el due diligence se cae aunque el producto funcione.",
    ],
    image: media.techCircuit,
  },
  {
    slug: "ia-generativa-dnda",
    kicker: "Tecnología",
    title: "IA generativa y derecho de autor: lo que la DNDA ya está negando",
    summary:
      "La Dirección Nacional de Derecho de Autor reitera que solo las personas físicas son autoras. Lo generado 100 % por IA no entra al Registro Nacional. Eso cambia contratos, prompts y quién firma la obra.",
    dateLabel: "Análisis · 2026",
    challenge:
      "Equipos que publican imágenes, textos o código asistido por IA y creen que “la empresa es autora” sin rastro humano.",
    approach:
      "Separar obra humana, obra asistida y output automático; ajustar encargos, licencias de herramientas y depósito en la DNDA solo cuando hay autoría.",
    result:
      "Un criterio usable: qué se puede registrar, qué se licencia y qué no se debe presentar como obra propia.",
    sections: [
      {
        title: "El pronunciamiento, no la ocurrencia",
        paragraphs: [
          "La DNDA publica un listado de pronunciamientos sobre inteligencia artificial. La línea es constante: los resultados generados por programas de IA no son susceptibles de inscripción en el Registro Nacional del Derecho de Autor, porque la normativa protege creaciones de la inteligencia humana. Solo las personas físicas son reconocidas como autoras.",
          "Eso no es un tweet de 2023. En 2024 y 2025 hay resoluciones que niegan registros de obras artísticas y literarias cuando no se acredita autoría humana. La Ley 23 de 1982 no contempla un “autor máquina”.",
        ],
      },
      {
        title: "Obra asistida vs. output automático",
        paragraphs: [
          "Usar un modelo como herramienta —editar, seleccionar, componer con criterio humano— no es lo mismo que pulsar generar y publicar el archivo crudo. El primero puede haber obra; el segundo, con el criterio actual de la DNDA, no se inscribe.",
          "El riesgo comercial es doble: (1) presentar como propio un output que no es protegible y que un tercero puede replicar; (2) entrenar o alimentar el modelo con obras ajenas sin licencia. Hay un proyecto de ley sobre IA (043 de 2025) que discute consentimiento para entrenar con obras, voces e imágenes. Mientras no sea ley, no se cita como obligación vigente: se cita como señal de hacia dónde va el debate.",
        ],
      },
      {
        title: "Qué pedir en el encargo",
        paragraphs: [
          "Que el proveedor declare si hay IA, en qué medida y quién toma las decisiones creativas. Que las cesiones cubran la parte humana. Que el material de entrenamiento de un modelo interno no meta catálogo de terceros. Que el depósito en la DNDA, si se hace, describa con honestidad el proceso.",
          "Para software, el código escrito por personas sigue el régimen de autor y el Decreto 1360. El snippet pegado desde un chatbot no convierte a la empresa en autora de ese fragmento si no hay aporte humano demostrable.",
        ],
      },
    ],
    takeaways: [
      "La DNDA no inscribe resultados 100 % generados por IA.",
      "Autor = persona física; la empresa titulariza por cesión o por encargo, no por usar un modelo.",
      "Los proyectos de ley sobre IA no sustituyen el régimen actual: Ley 23 y Decisión 351.",
    ],
    image: media.ai,
  },
  {
    slug: "diseno-industrial",
    kicker: "Diseños",
    title: "Línea de producto: registrar la forma antes del drop",
    summary:
      "El diseño industrial en Colombia dura diez años y no se renueva. Divulgar en feria o en Instagram antes de la solicitud pone en riesgo la novedad. El calendario de lanzamiento es el expediente.",
    dateLabel: "Análisis · 2026",
    challenge:
      "Una estética distintiva a punto de salir, sin margen para pedir el registro después de exponer la pieza.",
    approach:
      "Priorizar las piezas clave, controlar cómo se muestra el producto y atar a fabricantes con no uso de moldes.",
    result:
      "El lanzamiento sale con base de protección sobre la forma y con proveedores atados.",
    sections: [
      {
        title: "Por qué el timing manda",
        paragraphs: [
          "La Decisión 486 trata el diseño industrial como la apariencia de un producto. El trámite es ante la SIC. La protección típica es de diez años desde la solicitud y no se renueva como la marca: al vencer, la forma pasa al dominio público.",
          "La novedad se evalúa frente a lo ya accesible al público, aquí o en el exterior. Un lookbook, un reel o un stand en feria pueden ser divulgación. Pedir el registro “la semana del lanzamiento” suele ser pedir tarde.",
        ],
      },
      {
        title: "Forma, función y signo",
        paragraphs: [
          "Si lo que diferencia es la silueta, es diseño. Si es un mecanismo, puede ser patente. Si es el nombre o el logo en el empaque, es marca. Mezclar los tres en un solo trámite es el error de catálogo.",
          "Con el fabricante, el riesgo no es solo la copia en el mercado: es que retiene moldes. Las cláusulas de no uso de herramientas y de confidencialidad son parte del activo, no un anexo de compras.",
        ],
      },
      {
        title: "Cómo lo trabajamos",
        paragraphs: [
          "Elegimos las piezas cuya copia mataría la temporada. Preparamos representaciones claras. Alineamos el calendario de redes y ferias con la fecha de presentación. Dejamos un protocolo si la copia entra por marketplace o por aduana.",
        ],
      },
    ],
    takeaways: [
      "Diez años, no renovables: hay que elegir bien qué piezas pedir.",
      "Divulgar antes de solicitar puede tumbar la novedad.",
      "Marca, patente y diseño no se sustituyen entre sí.",
    ],
    image: media.hospitality,
  },
  {
    slug: "licencia-colaboracion",
    kicker: "Estrategia",
    title: "Colaborar sin regalar el background IP",
    summary:
      "Dos empresas que co-desarrollan sin separar PI previa, PI futura y salida construyen un litigio a seis meses. El contrato no es desconfianza: es el mapa de quién puede explotar qué.",
    dateLabel: "Análisis · 2026",
    challenge:
      "Cada parte aporta tecnología previa y espera capturar el resultado conjunto, sin reglas de foreground ni de retiro.",
    approach:
      "Separar background y foreground, licencias cruzadas, royalties y decisión sobre mejoras y sublicencias.",
    result:
      "La colaboración arranca con reglas ejecutables y una ruta de comercialización.",
    sections: [
      {
        title: "Por qué “vamos viendo” no escala",
        paragraphs: [
          "En tecnología y en marca blanca, el conflicto no nace el día de la demanda: nace el día en que nadie escribió qué era de cada uno antes de mezclar equipos. Background IP es lo que cada cual ya tenía. Foreground es lo que nace del proyecto.",
          "Sin ese corte, cualquier mejora, sublicencia o salida de un socio se vuelve una pelea sobre el repo, el cliente y el nombre comercial.",
        ],
      },
      {
        title: "Lo que el acuerdo tiene que decidir",
        paragraphs: [
          "Titularidad del resultado (uno, ambos, una SPV). Licencias sobre el background, con o sin royalty. Qué pasa si una parte se retira: ¿sigue usando el foreground? ¿Hay buy-out? ¿Quién mantiene los registros ante la SIC o la DNDA?",
          "Si hay secreto, las medidas de acceso tienen que ser reales —otra vez Ley 256 y Decisión 486—. Si hay marca conjunta, hay que definir quién es titular y cómo se usa el signo al terminar.",
        ],
      },
      {
        title: "El método",
        paragraphs: [
          "Inventario de lo que cada cual aporta. Perímetro del desarrollo conjunto. Mecanismo de decisión para mejoras. Cláusulas de no captar equipos y de devolución de material. El detalle de cada mesa se anonimiza; la estructura es esta.",
        ],
      },
    ],
    takeaways: [
      "Background y foreground se escriben el día uno, no el día del conflicto.",
      "Retiro, sublicencia y titularidad de registros son cláusulas, no “buena fe”.",
      "Un secreto compartido sin medidas de acceso deja de ser secreto.",
    ],
    image: media.opportunity,
  },
  {
    slug: "pi-en-la-empresa-2025",
    kicker: "Estrategia",
    title: "Innovar no basta: la PI sigue fuera del modelo de negocio",
    summary:
      "El estudio IP.CO 2025 (PONS IP, 410 empresas) y las cifras de la SIC coinciden: se pide mucha marca y poca gestión. El activo intangible no entra a la planeación; entra cuando ya hay un tercero en Gaceta o un inversionista en la mesa.",
    dateLabel: "Análisis · 2026",
    challenge:
      "La organización “cree en la PI” pero no tiene inventario, responsable ni presupuesto de vigilancia.",
    approach:
      "Pasar de un trámite suelto a un mapa: qué se registra, qué se reserva, quién firma y cada cuánto se revisa.",
    result:
      "Un criterio de gobierno del intangible, no un certificado aislado.",
    sections: [
      {
        title: "Lo que muestran 2025 y la encuesta",
        paragraphs: [
          "Colombia avanzó en volumen de protección, sobre todo de marcas. El estudio IP.CO de PONS IP, con 410 empresas de distintos tamaños y sectores, concluye que reconocer el valor de la PI no equivale a integrarla en el modelo de negocio. Faltan formación de directivos, herramientas prácticas y un interlocutor que una innovación, trámite y explotación.",
          "Eso encaja con lo que se ve en boutique: el fundador registra “el logo”, el área de producto lanza sin diseño pedido, y legal aparece cuando hay oposición o una ronda. No es un problema de cultura abstracta: es un problema de inventario.",
        ],
      },
      {
        title: "Un gobierno mínimo del activo",
        paragraphs: [
          "Lista de signos, obras, software, diseños y secretos. Titular en la sociedad. Calendario de renovaciones (marcas, diez años) y de vencimientos (diseños, diez años no renovables). Quién autoriza una divulgación que puede tumbar novedad de patente o de diseño.",
          "Vigilancia de Gaceta y de marketplaces. Contratos tipo con agencias y desarrolladores. Eso cabe en una pyme: no requiere un departamento de 40 personas. Requiere que alguien sea dueño de la lista.",
        ],
      },
      {
        title: "Cómo lo bajamos",
        paragraphs: [
          "Diagnóstico de portafolio, prioridad de trámites ante SIC y DNDA, secretos con medidas reales, y un protocolo de reacción. El insight no sustituye el encargo: ordena la conversación para no empezar por el formulario equivocado.",
        ],
      },
    ],
    takeaways: [
      "Volumen de marcas ≠ gestión de PI.",
      "Sin inventario y titular claro, el certificado no se puede explotar.",
      "Vigilancia y contratos son parte del activo, no un extra.",
    ],
    image: media.strategy,
  },
];

export function getCase(slug: string) {
  return successCases.find((item) => item.slug === slug);
}
