/* eslint-disable */
import type { Text } from "@/lib/insights-shared";

export type InsightRecord = {
  slug: string;
  publishedAt: string;
  image: string;
  kicker: Text;
  title: Text;
  summary: Text;
  dateLabel: Text;
  sections: { title: Text; paragraphs: Text[] }[];
  takeaways: Text[];
};

export const insightRecords: InsightRecord[] = [
  {
    "slug": "marca-consumo",
    "publishedAt": "2026-03-15",
    "image": "/images/retail.webp",
    "kicker": {
      "es": "Marcas",
      "en": "Trademarks"
    },
    "title": {
      "es": "De un nombre en uso a una marca oponible en Colombia y el exterior",
      "en": "From a name in use to an enforceable mark in Colombia and abroad"
    },
    "summary": {
      "es": "Usar el signo en el mercado no sustituye el registro ante la SIC. En 2025 casi todas las solicitudes de signos distintivos en Colombia fueron marcas: el cuello de botella ya no es “enterarse”, es titularidad, clases y vigilancia.",
      "en": "Using a sign in the market does not replace registration before the SIC. In 2025 almost all distinctive-sign filings in Colombia were trademarks: the bottleneck is no longer awareness, it is ownership, classes and watch services."
    },
    "dateLabel": {
      "es": "Análisis · 2026",
      "en": "Analysis · 2026"
    },
    "sections": [
      {
        "title": {
          "es": "El dato de 2025",
          "en": "The 2025 figure"
        },
        "paragraphs": [
          {
            "es": "Según cifras de la Superintendencia de Industria y Comercio recopiladas en el estudio IP.CO de PONS IP (2025), en Colombia se presentaron 49.034 solicitudes de signos distintivos; el 98,6 % fueron marcas. El sistema se usa. Lo que sigue fallando en la empresa es integrar ese registro a la operación: quién es titular, en qué clases de Niza, y qué pasa cuando un tercero publica un signo parecido en la Gaceta.",
            "en": "According to Superintendence of Industry and Commerce figures compiled in PONS IP’s IP.CO study (2025), Colombia saw 49,034 distinctive-sign applications; 98.6% were trademarks. The system is used. What still fails inside the company is integrating that registration into operations: who owns it, in which Nice classes, and what happens when a third party publishes a similar sign in the Gazette."
          },
          {
            "es": "El derecho exclusivo sobre la marca, en el régimen andino (Decisión 486), se adquiere con el registro. El uso en redes o en el local da reconocimiento comercial; no da, por sí solo, la facultad de excluir a quien llegó primero a la SIC.",
            "en": "Exclusive rights in a trademark, under the Andean regime (Decision 486), are acquired by registration. Use on social media or at a storefront gives commercial recognition; it does not, by itself, confer the power to exclude whoever filed first with the SIC."
          }
        ]
      },
      {
        "title": {
          "es": "El reto que vemos",
          "en": "The problem we see"
        },
        "paragraphs": [
          {
            "es": "El patrón es repetido: el nombre ya está en empaque y pauta, el logo lo hizo una agencia, y la solicitud —si existe— cubre una clase cuando el negocio opera en tres. Mientras tanto, el principio de primero en el tiempo, primero en el derecho ya está corriendo a favor de otro.",
            "en": "The pattern repeats: the name is already on packaging and ads, an agency made the logo, and the application — if it exists — covers one class while the business operates in three. Meanwhile first-in-time, first-in-right is already running in someone else’s favor."
          },
          {
            "es": "A eso se suma el titular equivocado: la persona natural del fundador, un socio que ya no está, o la agencia. Escalar canales con esa base es construir sobre un activo que no está en la sociedad.",
            "en": "Add the wrong owner: the founder as a natural person, a partner who is gone, or the agency. Scaling channels on that base is building on an asset that is not in the company."
          }
        ]
      },
      {
        "title": {
          "es": "Cómo lo ordenamos",
          "en": "How we structure it"
        },
        "paragraphs": [
          {
            "es": "Empezamos por anterioridades y riesgo de confusión, no por el formulario. Definimos signo, titular y listado de productos o servicios. Radicamos ante la SIC, respondemos requerimientos y dejamos vigilancia: oposiciones, cancelación por no uso e infracción.",
            "en": "We start with prior marks and likelihood of confusion, not with the form. We define the sign, the owner and the list of goods or services. We file with the SIC, reply to office actions and leave watch services: oppositions, non-use cancellation and infringement."
          },
          {
            "es": "Si el mercado ya no es solo Colombia, el Protocolo de Madrid permite, con una solicitud o un registro base en la SIC, designar otros países de la Unión de Madrid en un solo idioma y un juego de tasas. No es automático ni barato: hay que elegir territorios según venta real, no según un mapa decorativo. La solicitud internacional se presenta a través de la SIC como oficina de origen; la OMPI no recibe el trámite directo del usuario.",
            "en": "If the market is no longer only Colombia, the Madrid Protocol allows, with a basic SIC application or registration, designating other Madrid Union countries in one language and one fee set. It is neither automatic nor cheap: territories must follow real sales, not a decorative map. The international application is filed through the SIC as office of origin; WIPO does not take the filing directly from the user."
          }
        ]
      },
      {
        "title": {
          "es": "Qué cambia para el negocio",
          "en": "What changes for the business"
        },
        "paragraphs": [
          {
            "es": "El entregable no es “un certificado”. Es un signo que se puede oponer, licenciar y defender, con contratos de distribución que no dejan el uso de la marca en el aire. El detalle de cada cliente se anonimiza; el método es este.",
            "en": "The deliverable is not “a certificate”. It is a sign that can be opposed, licensed and defended, with distribution contracts that do not leave trademark use in the air. Client detail is anonymized; the method is this."
          }
        ]
      }
    ],
    "takeaways": [
      {
        "es": "En Colombia el registro es constitutivo: sin SIC, el uso no excluye al tercero.",
        "en": "In Colombia registration is constitutive: without the SIC, use does not exclude a third party."
      },
      {
        "es": "Las clases de Niza tienen que seguir al negocio, no al primer formulario.",
        "en": "Nice classes must follow the business, not the first form you filed."
      },
      {
        "es": "Madrid exige solicitud o registro base en Colombia y se tramita vía SIC.",
        "en": "Madrid requires a Colombian basic application or registration and is filed through the SIC."
      }
    ]
  },
  {
    "slug": "software-saas",
    "publishedAt": "2026-02-20",
    "image": "/images/tech-circuit.webp",
    "kicker": {
      "es": "Tecnología",
      "en": "Technology"
    },
    "title": {
      "es": "Software, secretos y la ilusión de “patentar la app”",
      "en": "Software, secrets and the illusion of “patenting the app”"
    },
    "summary": {
      "es": "En 2025 la mayoría de las patentes pedidas en Colombia las presentaron no residentes. Para un SaaS local el activo suele ser código (DNDA), know-how (secreto) y contratos — no un título de invención sobre la interfaz.",
      "en": "In 2025 most patent filings in Colombia came from non-residents. For a local SaaS the asset is usually code (DNDA), know-how (trade secret) and contracts — not an invention title over the interface."
    },
    "dateLabel": {
      "es": "Análisis · 2026",
      "en": "Analysis · 2026"
    },
    "sections": [
      {
        "title": {
          "es": "Qué dicen las cifras",
          "en": "What the figures say"
        },
        "paragraphs": [
          {
            "es": "El mismo recuento de 2025 sobre la SIC muestra 2.148 solicitudes de patentes en Colombia: 1.776 de no residentes (87 %) y 372 de residentes (13 %). La señal es clara: el grueso de la tecnología que se pide proteger aquí se origina fuera. Eso no significa que un SaaS colombiano “deba patentar”. Significa que hay que elegir el instrumento correcto.",
            "en": "The same 2025 SIC count shows 2,148 patent applications in Colombia: 1,776 from non-residents (87%) and 372 from residents (13%). The signal is clear: most of the technology sought to be protected here originates abroad. That does not mean a Colombian SaaS “must patent”. It means the right instrument must be chosen."
          },
          {
            "es": "La Decisión 486, como regla, no trata los programas de ordenador como invenciones patentables en sí. El código se protege por derecho de autor (Ley 23 de 1982, Decreto 1360 de 1989, DNDA). Si hay una solución técnica nueva —un procedimiento, un dispositivo— puede haber patente sobre ese objeto, no sobre “la app”.",
            "en": "Decision 486, as a rule, does not treat computer programs as patentable inventions in themselves. Code is protected by copyright (Law 23 of 1982, Decree 1360 of 1989, DNDA). If there is a new technical solution — a process, a device — there may be a patent on that object, not on “the app”."
          }
        ]
      },
      {
        "title": {
          "es": "El hueco que tumba la ronda",
          "en": "The gap that kills the round"
        },
        "paragraphs": [
          {
            "es": "El repositorio en la cuenta personal del CTO, los freelancers sin cesión y un Drive donde está el “secreto” del algoritmo. El inversionista no compra un Figma: pregunta quién puede impedir que un exempleado se lleve el know-how.",
            "en": "The repository in the CTO’s personal account, freelancers without assignments and a Drive holding the algorithm’s “secret”. The investor is not buying a Figma file: they ask who can stop a former employee from taking the know-how."
          },
          {
            "es": "La Ley 256 de 1996 y la Decisión 486 exigen, para el secreto empresarial, que la información sea secreta, tenga valor por no ser conocida y esté sujeta a medidas razonables de reserva. Un NDA sin control de acceso no convierte en secreto lo que ya se explicó en el pitch.",
            "en": "Law 256 of 1996 and Decision 486 require, for a trade secret, that the information be secret, have value from not being known and be subject to reasonable measures of reserve. An NDA with no access control does not turn into a secret what was already explained in the pitch."
          }
        ]
      },
      {
        "title": {
          "es": "El enfoque",
          "en": "The approach"
        },
        "paragraphs": [
          {
            "es": "Mapa de código, contribuciones, licencias open source y de qué no debe salir del perímetro. Cesiones a nombre de la sociedad. NDA y acuerdos de desarrollo. Decisión consciente: autor + secreto, o además una patente si el componente técnico lo aguanta.",
            "en": "A map of code, contributions, open-source licenses and of what must not leave the perimeter. Assignments in the company’s name. NDAs and development agreements. A conscious decision: copyright + secret, or also a patent if the technical component can sustain it."
          },
          {
            "es": "El data room deja de ser una carpeta de PDFs: es la respuesta a quién es titular, qué se licencia al cliente y qué permanece interno.",
            "en": "The data room stops being a folder of PDFs: it is the answer to who owns it, what is licensed to the client and what stays internal."
          }
        ]
      }
    ],
    "takeaways": [
      {
        "es": "No se “patenta la app”: el código va por autor; la invención técnica, si existe, por patente.",
        "en": "You do not “patent the app”: code is copyright; a technical invention, if it exists, may be a patent."
      },
      {
        "es": "El secreto exige medidas reales de reserva, no solo un contrato.",
        "en": "A trade secret requires real secrecy measures, not only a contract."
      },
      {
        "es": "Sin cesiones, el due diligence se cae aunque el producto funcione.",
        "en": "Without assignments, due diligence fails even if the product works."
      }
    ]
  },
  {
    "slug": "ia-generativa-dnda",
    "publishedAt": "2026-02-05",
    "image": "/images/ai.webp",
    "kicker": {
      "es": "Tecnología",
      "en": "Technology"
    },
    "title": {
      "es": "IA generativa y derecho de autor: lo que la DNDA ya está negando",
      "en": "Generative AI and copyright: what the DNDA is already refusing"
    },
    "summary": {
      "es": "La Dirección Nacional de Derecho de Autor reitera que solo las personas físicas son autoras. Lo generado 100 % por IA no entra al Registro Nacional. Eso cambia contratos, prompts y quién firma la obra.",
      "en": "Colombia’s copyright office restates that only natural persons are authors. Output generated 100% by AI does not enter the National Register. That changes contracts, prompts and who signs the work."
    },
    "dateLabel": {
      "es": "Análisis · 2026",
      "en": "Analysis · 2026"
    },
    "sections": [
      {
        "title": {
          "es": "El pronunciamiento, no la ocurrencia",
          "en": "The official line, not a one-off"
        },
        "paragraphs": [
          {
            "es": "La DNDA publica un listado de pronunciamientos sobre inteligencia artificial. La línea es constante: los resultados generados por programas de IA no son susceptibles de inscripción en el Registro Nacional del Derecho de Autor, porque la normativa protege creaciones de la inteligencia humana. Solo las personas físicas son reconocidas como autoras.",
            "en": "The DNDA publishes a list of pronouncements on artificial intelligence. The line is consistent: results generated by AI programs are not eligible for the National Copyright Register, because the rules protect creations of human intelligence. Only natural persons are recognized as authors."
          },
          {
            "es": "Eso no es un tweet de 2023. En 2024 y 2025 hay resoluciones que niegan registros de obras artísticas y literarias cuando no se acredita autoría humana. La Ley 23 de 1982 no contempla un “autor máquina”.",
            "en": "That is not a 2023 tweet. In 2024 and 2025 there are resolutions refusing registration of artistic and literary works when human authorship is not shown. Law 23 of 1982 does not contemplate a “machine author”."
          }
        ]
      },
      {
        "title": {
          "es": "Obra asistida vs. output automático",
          "en": "Assisted work vs. automatic output"
        },
        "paragraphs": [
          {
            "es": "Usar un modelo como herramienta —editar, seleccionar, componer con criterio humano— no es lo mismo que pulsar generar y publicar el archivo crudo. El primero puede haber obra; el segundo, con el criterio actual de la DNDA, no se inscribe.",
            "en": "Using a model as a tool — editing, selecting, composing with human judgment — is not the same as hitting generate and publishing the raw file. The first may be a work; the second, under the DNDA’s current criterion, is not registered."
          },
          {
            "es": "El riesgo comercial es doble: (1) presentar como propio un output que no es protegible y que un tercero puede replicar; (2) entrenar o alimentar el modelo con obras ajenas sin licencia. Hay un proyecto de ley sobre IA (043 de 2025) que discute consentimiento para entrenar con obras, voces e imágenes. Mientras no sea ley, no se cita como obligación vigente: se cita como señal de hacia dónde va el debate.",
            "en": "The commercial risk is double: (1) presenting as your own an output that is not protectable and that a third party can replicate; (2) training or feeding the model with others’ works without a license. There is an AI bill (043 of 2025) discussing consent to train on works, voices and images. Until it is law, it is not cited as a current duty: it is cited as a signal of where the debate is going."
          }
        ]
      },
      {
        "title": {
          "es": "Qué pedir en el encargo",
          "en": "What to ask in the engagement"
        },
        "paragraphs": [
          {
            "es": "Que el proveedor declare si hay IA, en qué medida y quién toma las decisiones creativas. Que las cesiones cubran la parte humana. Que el material de entrenamiento de un modelo interno no meta catálogo de terceros. Que el depósito en la DNDA, si se hace, describa con honestidad el proceso.",
            "en": "That the vendor declare whether there is AI, to what extent and who takes the creative decisions. That assignments cover the human part. That training material for an internal model not ingest third-party catalogues. That a DNDA deposit, if made, describe the process honestly."
          },
          {
            "es": "Para software, el código escrito por personas sigue el régimen de autor y el Decreto 1360. El snippet pegado desde un chatbot no convierte a la empresa en autora de ese fragmento si no hay aporte humano demostrable.",
            "en": "For software, code written by people follows the copyright regime and Decree 1360. A snippet pasted from a chatbot does not make the company the author of that fragment if there is no demonstrable human contribution."
          }
        ]
      }
    ],
    "takeaways": [
      {
        "es": "La DNDA no inscribe resultados 100 % generados por IA.",
        "en": "The DNDA does not register results generated 100% by AI."
      },
      {
        "es": "Autor = persona física; la empresa titulariza por cesión o por encargo, no por usar un modelo.",
        "en": "Author = natural person; the company owns rights by assignment or commission, not by using a model."
      },
      {
        "es": "Los proyectos de ley sobre IA no sustituyen el régimen actual: Ley 23 y Decisión 351.",
        "en": "AI bills do not replace the current regime: Law 23 and Andean Decision 351."
      }
    ]
  },
  {
    "slug": "diseno-industrial",
    "publishedAt": "2026-01-22",
    "image": "/images/hospitality.webp",
    "kicker": {
      "es": "Diseños",
      "en": "Designs"
    },
    "title": {
      "es": "Línea de producto: registrar la forma antes del drop",
      "en": "Product line: register the appearance before the drop"
    },
    "summary": {
      "es": "El diseño industrial en Colombia dura diez años y no se renueva. Divulgar en feria o en Instagram antes de la solicitud pone en riesgo la novedad. El calendario de lanzamiento es el expediente.",
      "en": "Industrial design in Colombia lasts ten years and is not renewable. Disclosing at a fair or on Instagram before filing can destroy novelty. The launch calendar is the file."
    },
    "dateLabel": {
      "es": "Análisis · 2026",
      "en": "Analysis · 2026"
    },
    "sections": [
      {
        "title": {
          "es": "Por qué el timing manda",
          "en": "Why timing governs"
        },
        "paragraphs": [
          {
            "es": "La Decisión 486 trata el diseño industrial como la apariencia de un producto. El trámite es ante la SIC. La protección típica es de diez años desde la solicitud y no se renueva como la marca: al vencer, la forma pasa al dominio público.",
            "en": "Decision 486 treats industrial design as the appearance of a product. The filing is with the SIC. Typical protection is ten years from the application and is not renewable like a trademark: when it expires, the form falls into the public domain."
          },
          {
            "es": "La novedad se evalúa frente a lo ya accesible al público, aquí o en el exterior. Un lookbook, un reel o un stand en feria pueden ser divulgación. Pedir el registro “la semana del lanzamiento” suele ser pedir tarde.",
            "en": "Novelty is assessed against what is already accessible to the public, here or abroad. A lookbook, a reel or a fair stand can be disclosure. Filing “the week of launch” is usually filing late."
          }
        ]
      },
      {
        "title": {
          "es": "Forma, función y signo",
          "en": "Form, function and sign"
        },
        "paragraphs": [
          {
            "es": "Si lo que diferencia es la silueta, es diseño. Si es un mecanismo, puede ser patente. Si es el nombre o el logo en el empaque, es marca. Mezclar los tres en un solo trámite es el error de catálogo.",
            "en": "If what differentiates is the silhouette, it is design. If it is a mechanism, it may be a patent. If it is the name or logo on the packaging, it is a trademark. Mixing the three in one filing is the catalogue error."
          },
          {
            "es": "Con el fabricante, el riesgo no es solo la copia en el mercado: es que retiene moldes. Las cláusulas de no uso de herramientas y de confidencialidad son parte del activo, no un anexo de compras.",
            "en": "With the manufacturer, the risk is not only copies in the market: it is that they retain molds. Non-use of tooling and confidentiality clauses are part of the asset, not a purchasing annex."
          }
        ]
      },
      {
        "title": {
          "es": "Cómo lo trabajamos",
          "en": "How we work it"
        },
        "paragraphs": [
          {
            "es": "Elegimos las piezas cuya copia mataría la temporada. Preparamos representaciones claras. Alineamos el calendario de redes y ferias con la fecha de presentación. Dejamos un protocolo si la copia entra por marketplace o por aduana.",
            "en": "We choose the pieces whose copy would kill the season. We prepare clear representations. We align the social and fair calendar with the filing date. We leave a protocol if a copy enters through a marketplace or customs."
          }
        ]
      }
    ],
    "takeaways": [
      {
        "es": "Diez años, no renovables: hay que elegir bien qué piezas pedir.",
        "en": "Ten years, non-renewable: choose carefully which pieces to file."
      },
      {
        "es": "Divulgar antes de solicitar puede tumbar la novedad.",
        "en": "Disclosing before filing can destroy novelty."
      },
      {
        "es": "Marca, patente y diseño no se sustituyen entre sí.",
        "en": "Trademark, patent and design do not replace each other."
      }
    ]
  },
  {
    "slug": "licencia-colaboracion",
    "publishedAt": "2026-01-12",
    "image": "/images/opportunity.webp",
    "kicker": {
      "es": "Estrategia",
      "en": "Strategy"
    },
    "title": {
      "es": "Colaborar sin regalar el background IP",
      "en": "Collaborate without giving away background IP"
    },
    "summary": {
      "es": "Dos empresas que co-desarrollan sin separar PI previa, PI futura y salida construyen un litigio a seis meses. El contrato no es desconfianza: es el mapa de quién puede explotar qué.",
      "en": "Two companies that co-develop without splitting prior IP, future IP and exit are building a dispute in six months. The contract is not distrust: it is the map of who may exploit what."
    },
    "dateLabel": {
      "es": "Análisis · 2026",
      "en": "Analysis · 2026"
    },
    "sections": [
      {
        "title": {
          "es": "Por qué “vamos viendo” no escala",
          "en": "Why “we’ll see” does not scale"
        },
        "paragraphs": [
          {
            "es": "En tecnología y en marca blanca, el conflicto no nace el día de la demanda: nace el día en que nadie escribió qué era de cada uno antes de mezclar equipos. Background IP es lo que cada cual ya tenía. Foreground es lo que nace del proyecto.",
            "en": "In technology and white-label work, the conflict is not born on the day of the lawsuit: it is born the day nobody wrote down what each party already owned before mixing teams. Background IP is what each already had. Foreground is what the project creates."
          },
          {
            "es": "Sin ese corte, cualquier mejora, sublicencia o salida de un socio se vuelve una pelea sobre el repo, el cliente y el nombre comercial.",
            "en": "Without that cut, any improvement, sublicense or partner exit becomes a fight over the repo, the client and the trade name."
          }
        ]
      },
      {
        "title": {
          "es": "Lo que el acuerdo tiene que decidir",
          "en": "What the agreement has to decide"
        },
        "paragraphs": [
          {
            "es": "Titularidad del resultado (uno, ambos, una SPV). Licencias sobre el background, con o sin royalty. Qué pasa si una parte se retira: ¿sigue usando el foreground? ¿Hay buy-out? ¿Quién mantiene los registros ante la SIC o la DNDA?",
            "en": "Ownership of the result (one party, both, an SPV). Licenses over background, with or without royalty. What happens if a party withdraws: may it keep using the foreground? Is there a buy-out? Who maintains filings with the SIC or the DNDA?"
          },
          {
            "es": "Si hay secreto, las medidas de acceso tienen que ser reales —otra vez Ley 256 y Decisión 486—. Si hay marca conjunta, hay que definir quién es titular y cómo se usa el signo al terminar.",
            "en": "If there is a secret, access measures have to be real — again Law 256 and Decision 486. If there is a joint mark, you must define who owns it and how the sign is used when the relationship ends."
          }
        ]
      },
      {
        "title": {
          "es": "El método",
          "en": "The method"
        },
        "paragraphs": [
          {
            "es": "Inventario de lo que cada cual aporta. Perímetro del desarrollo conjunto. Mecanismo de decisión para mejoras. Cláusulas de no captar equipos y de devolución de material. El detalle de cada mesa se anonimiza; la estructura es esta.",
            "en": "Inventory of what each party contributes. Perimeter of the joint development. A decision mechanism for improvements. Non-solicit and return-of-materials clauses. Client-table detail is anonymized; the structure is this."
          }
        ]
      }
    ],
    "takeaways": [
      {
        "es": "Background y foreground se escriben el día uno, no el día del conflicto.",
        "en": "Background and foreground are written on day one, not on the day of the dispute."
      },
      {
        "es": "Retiro, sublicencia y titularidad de registros son cláusulas, no “buena fe”.",
        "en": "Exit, sublicense and ownership of filings are clauses, not “good faith”."
      },
      {
        "es": "Un secreto compartido sin medidas de acceso deja de ser secreto.",
        "en": "A shared secret without access controls stops being a secret."
      }
    ]
  },
  {
    "slug": "pi-en-la-empresa-2025",
    "publishedAt": "2026-01-05",
    "image": "/images/strategy.webp",
    "kicker": {
      "es": "Estrategia",
      "en": "Strategy"
    },
    "title": {
      "es": "Innovar no basta: la PI sigue fuera del modelo de negocio",
      "en": "Innovation is not enough: IP is still outside the business model"
    },
    "summary": {
      "es": "El estudio IP.CO 2025 (PONS IP, 410 empresas) y las cifras de la SIC coinciden: se pide mucha marca y poca gestión. El activo intangible no entra a la planeación; entra cuando ya hay un tercero en Gaceta o un inversionista en la mesa.",
      "en": "The 2025 IP.CO study (PONS IP, 410 companies) and SIC figures agree: plenty of trademark filings, little management. The intangible enters planning only when a third party appears in the Gazette or an investor is at the table."
    },
    "dateLabel": {
      "es": "Análisis · 2026",
      "en": "Analysis · 2026"
    },
    "sections": [
      {
        "title": {
          "es": "Lo que muestran 2025 y la encuesta",
          "en": "What 2025 and the survey show"
        },
        "paragraphs": [
          {
            "es": "Colombia avanzó en volumen de protección, sobre todo de marcas. El estudio IP.CO de PONS IP, con 410 empresas de distintos tamaños y sectores, concluye que reconocer el valor de la PI no equivale a integrarla en el modelo de negocio. Faltan formación de directivos, herramientas prácticas y un interlocutor que una innovación, trámite y explotación.",
            "en": "Colombia advanced in volume of protection, especially trademarks. PONS IP’s IP.CO study, with 410 companies of different sizes and sectors, concludes that recognizing the value of IP is not the same as integrating it into the business model. What is missing is executive training, practical tools and a counterpart who joins innovation, filings and exploitation."
          },
          {
            "es": "Eso encaja con lo que se ve en boutique: el fundador registra “el logo”, el área de producto lanza sin diseño pedido, y legal aparece cuando hay oposición o una ronda. No es un problema de cultura abstracta: es un problema de inventario.",
            "en": "That matches what we see in boutique work: the founder files “the logo”, product launches without a design application, and legal appears when there is an opposition or a round. It is not an abstract culture problem: it is an inventory problem."
          }
        ]
      },
      {
        "title": {
          "es": "Un gobierno mínimo del activo",
          "en": "Minimum governance of the asset"
        },
        "paragraphs": [
          {
            "es": "Lista de signos, obras, software, diseños y secretos. Titular en la sociedad. Calendario de renovaciones (marcas, diez años) y de vencimientos (diseños, diez años no renovables). Quién autoriza una divulgación que puede tumbar novedad de patente o de diseño.",
            "en": "A list of signs, works, software, designs and secrets. Owner in the company. A calendar of renewals (trademarks, ten years) and expiries (designs, ten years non-renewable). Who authorizes a disclosure that can destroy patent or design novelty."
          },
          {
            "es": "Vigilancia de Gaceta y de marketplaces. Contratos tipo con agencias y desarrolladores. Eso cabe en una pyme: no requiere un departamento de 40 personas. Requiere que alguien sea dueño de la lista.",
            "en": "Gazette and marketplace watch. Template contracts with agencies and developers. That fits a SME: it does not require a 40-person department. It requires someone to own the list."
          }
        ]
      },
      {
        "title": {
          "es": "Cómo lo bajamos",
          "en": "How we bring it down to earth"
        },
        "paragraphs": [
          {
            "es": "Diagnóstico de portafolio, prioridad de trámites ante SIC y DNDA, secretos con medidas reales, y un protocolo de reacción. El insight no sustituye el encargo: ordena la conversación para no empezar por el formulario equivocado.",
            "en": "Portfolio diagnosis, priority of SIC and DNDA filings, secrets with real measures, and a reaction protocol. The insight does not replace an engagement: it orders the conversation so you do not start with the wrong form."
          }
        ]
      }
    ],
    "takeaways": [
      {
        "es": "Volumen de marcas ≠ gestión de PI.",
        "en": "Trademark volume ≠ IP management."
      },
      {
        "es": "Sin inventario y titular claro, el certificado no se puede explotar.",
        "en": "Without an inventory and a clear owner, the certificate cannot be exploited."
      },
      {
        "es": "Vigilancia y contratos son parte del activo, no un extra.",
        "en": "Watch services and contracts are part of the asset, not an extra."
      }
    ]
  }
];
