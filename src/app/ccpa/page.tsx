import Link from "next/link";
import { LegalDoc, LegalHeading } from "@/components/legal-doc";
import { CookiePreferencesLink } from "@/components/cookie-preferences-link";
import { brand } from "@/lib/data";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Divulgaciones CCPA",
  description:
    "Divulgaciones de privacidad para residentes de California (CCPA / CPRA) respecto del sitio de Gradiente Jurídico.",
  path: "/ccpa",
});

export default function CcpaPage() {
  return (
    <LegalDoc
      kicker="Información legal"
      title="Divulgaciones CCPA"
      description="Para residentes de California · California Consumer Privacy Act"
    >
      <section>
        <LegalHeading>Ámbito</LegalHeading>
        <p className="mt-4">
          Estas divulgaciones aplican a residentes del Estado de California
          (“consumidores”) respecto de la información personal que Gradiente
          Jurídico trata como negocio a través de este sitio. Los términos del
          California Consumer Privacy Act, con las reformas del CPRA, tienen el
          mismo significado aquí. Esto no es un dictamen legal; describe
          prácticas de este sitio.
        </p>
      </section>
      <section>
        <LegalHeading>Categorías de información</LegalHeading>
        <p className="mt-4">
          Según su interacción, podemos recolectar: identificadores (nombre,
          correo, teléfono, dirección IP); información comercial de la consulta
          que usted envía; actividad en internet (páginas visitadas, si autoriza
          analítica); e inferencias mínimas para responder su solicitud. No
          recolectamos a propósito datos sensibles de California para navegar el
          sitio.
        </p>
      </section>
      <section>
        <LegalHeading>Fuentes y usos</LegalHeading>
        <p className="mt-4">
          La información proviene de usted (formularios, chat, WhatsApp o
          correo) y, si lo permite, de cookies de medición. La usamos para
          operar el sitio, responder consultas, prestar servicios profesionales
          si hay encargo, y medir audiencias solo con consentimiento.
        </p>
      </section>
      <section>
        <LegalHeading>Venta y publicidad cruzada</LegalHeading>
        <p className="mt-4">
          No vendemos información personal de residentes de California ni la
          compartimos para publicidad comportamental de contexto cruzado. No
          hay un “Do Not Sell or Share” que activar más allá de rechazar
          cookies opcionales.
        </p>
        <p className="mt-4">
          <CookiePreferencesLink className="cta-link cta-link-red" />
        </p>
      </section>
      <section>
        <LegalHeading>Derechos CCPA</LegalHeading>
        <p className="mt-4">
          Sujeto a excepciones legales, puede solicitar: conocer las categorías
          y piezas de información personal que tenemos; corregirla; eliminarla;
          y no ser discriminado por ejercer estos derechos. Como no vendemos ni
          compartimos para publicidad cruzada, el derecho de opt-out de venta o
          sharing no cambia una práctica que ya no realizamos.
        </p>
      </section>
      <section>
        <LegalHeading>Cómo ejercerlos</LegalHeading>
        <p className="mt-4">
          Envíe su solicitud a{" "}
          <Link href={`mailto:${brand.email}`} className="text-primary">
            {brand.email}
          </Link>{" "}
          o por WhatsApp al {brand.phone}, indicando que es residente de
          California y qué derecho quiere ejercer. Podemos pedir información
          razonable para verificar su identidad. Un agente autorizado puede
          presentar la solicitud si acredita su poder.
        </p>
      </section>
      <section>
        <LegalHeading>Contacto</LegalHeading>
        <p className="mt-4">
          Preguntas sobre estas divulgaciones: {brand.contactPerson},{" "}
          <Link href={`mailto:${brand.email}`} className="text-primary">
            {brand.email}
          </Link>
          , {brand.location}. Para el tratamiento en Colombia, vea la{" "}
          <Link href="/privacidad" className="text-primary">
            política de privacidad
          </Link>
          .
        </p>
      </section>
    </LegalDoc>
  );
}
