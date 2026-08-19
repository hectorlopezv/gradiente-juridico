import Link from "next/link";
import { LegalDoc, LegalHeading } from "@/components/legal-doc";
import { CookiePreferencesLink } from "@/components/cookie-preferences-link";
import { brand } from "@/lib/data";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Privacidad y cookies",
  description:
    "Política de tratamiento de datos personales y cookies de Gradiente Jurídico, de acuerdo con la Ley 1581 de 2012.",
  path: "/privacidad",
});

export default function PrivacidadPage() {
  return (
    <LegalDoc
      kicker="Información legal"
      title="Privacidad y cookies"
      description="Gradiente Jurídico · Colombia · Ley 1581 de 2012"
    >
      <section>
        <LegalHeading>Responsable del tratamiento</LegalHeading>
        <p className="mt-4">
          El responsable es Gradiente Jurídico. Contacto: {brand.contactPerson},{" "}
          <Link href={`mailto:${brand.email}`} className="text-primary">
            {brand.email}
          </Link>
          , WhatsApp {brand.phone}. Atención presencial y online en Colombia.
        </p>
      </section>
      <section>
        <LegalHeading>Datos que recolectamos</LegalHeading>
        <p className="mt-4">
          Según cómo use el sitio, podemos tratar: nombre e identificadores de
          contacto que usted nos envíe (correo, WhatsApp, chat); datos técnicos
          del dispositivo y de navegación; y, solo si lo autoriza, mediciones de
          visitas con Google Analytics 4. No pedimos datos sensibles para
          navegar el sitio.
        </p>
      </section>
      <section>
        <LegalHeading>Finalidades</LegalHeading>
        <p className="mt-4">
          Usamos los datos para: prestar el sitio; responder consultas y
          posibles encargos profesionales; mejorar el contenido si usted acepta
          analítica; y cumplir obligaciones legales. No usamos sus datos para
          vender listas ni para publicidad comportamental de terceros.
        </p>
      </section>
      <section>
        <LegalHeading>Cookies necesarias</LegalHeading>
        <p className="mt-4">
          Son indispensables para recordar si usted autorizó o rechazó la
          analítica. No miden audiencias ni se usan para publicidad.
        </p>
      </section>
      <section>
        <LegalHeading>Cookies de analítica (opcionales)</LegalHeading>
        <p className="mt-4">
          Solo se activan con su autorización previa, expresa e informada, de
          acuerdo con la Ley 1581 de 2012. Google Analytics 4 puede implicar
          tratamiento en servidores fuera de Colombia. No cargamos el script
          hasta que usted acepta. Puede retirar el consentimiento en cualquier
          momento; al rechazar, borramos las cookies de analítica.
        </p>
        <p className="mt-6">
          <CookiePreferencesLink className="cta-link cta-link-red" />
        </p>
      </section>
      <section>
        <LegalHeading>Derechos (habeas data)</LegalHeading>
        <p className="mt-4">
          Puede conocer, actualizar, rectificar o suprimir sus datos, y revocar
          la autorización, en los términos de la Ley 1581 de 2012 y el Decreto
          1377 de 2013. Escríbanos a{" "}
          <Link href={`mailto:${brand.email}`} className="text-primary">
            {brand.email}
          </Link>
          . También puede presentar una queja ante la Superintendencia de
          Industria y Comercio si considera que no atendimos su solicitud.
        </p>
      </section>
      <section>
        <LegalHeading>Otras divulgaciones</LegalHeading>
        <p className="mt-4">
          Si es residente de California, consulte las{" "}
          <Link href="/ccpa" className="text-primary">
            divulgaciones CCPA
          </Link>
          . El uso del sitio también está sujeto a los{" "}
          <Link href="/avisos-legales" className="text-primary">
            avisos legales
          </Link>
          .
        </p>
      </section>
    </LegalDoc>
  );
}
