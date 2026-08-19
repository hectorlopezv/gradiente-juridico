import Link from "next/link";
import { LegalDoc, LegalHeading } from "@/components/legal-doc";
import { brand } from "@/lib/data";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Avisos legales",
  description:
    "Condiciones de uso del sitio de Gradiente Jurídico. El contenido informa sobre servicios y no constituye asesoría legal.",
  path: "/avisos-legales",
});

export default function AvisosLegalesPage() {
  return (
    <LegalDoc
      kicker="Información legal"
      title="Avisos legales"
      description="Gradiente Jurídico · Colombia"
    >
      <section>
        <LegalHeading>Uso del sitio</LegalHeading>
        <p className="mt-4">
          Este sitio informa sobre los servicios de Gradiente Jurídico. Al
          navegarlo usted acepta estas condiciones. Si no está de acuerdo, no
          use el sitio.
        </p>
      </section>
      <section>
        <LegalHeading>No es asesoría legal</LegalHeading>
        <p className="mt-4">
          Nada de lo publicado aquí —textos, casos, el asistente en línea ni
          materiales de prensa— constituye asesoría jurídica ni crea una
          relación abogado-cliente. Cada asunto depende de sus hechos. La
          relación profesional solo nace con un encargo expreso y por escrito.
        </p>
      </section>
      <section>
        <LegalHeading>Propiedad del contenido</LegalHeading>
        <p className="mt-4">
          Los textos, la marca y el diseño de este sitio pertenecen a Gradiente
          Jurídico o a sus licenciantes. No está permitido copiarlos para uso
          comercial sin autorización.
        </p>
      </section>
      <section>
        <LegalHeading>Enlaces y terceros</LegalHeading>
        <p className="mt-4">
          El sitio puede enlazar a WhatsApp, Google Analytics u otros servicios
          de terceros. Esas plataformas tienen sus propias reglas. No
          controlamos su contenido ni su tratamiento de datos, salvo lo
          descrito en nuestra{" "}
          <Link href="/privacidad" className="text-primary">
            política de privacidad
          </Link>
          .
        </p>
      </section>
      <section>
        <LegalHeading>Contacto</LegalHeading>
        <p className="mt-4">
          {brand.contactPerson} ·{" "}
          <Link href={`mailto:${brand.email}`} className="text-primary">
            {brand.email}
          </Link>{" "}
          · {brand.phone} · {brand.location}.
        </p>
      </section>
    </LegalDoc>
  );
}
