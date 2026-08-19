import Link from "next/link";
import { LegalDoc, LegalHeading } from "@/components/legal-doc";
import { brand } from "@/lib/data";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Código de proveedores",
  description:
    "Principios y estándares mínimos que Gradiente Jurídico espera de quienes proveen bienes o servicios a la firma.",
  path: "/codigo-proveedores",
});

export default function CodigoProveedoresPage() {
  return (
    <LegalDoc
      kicker="Información legal"
      title="Código de proveedores"
      description="Supplier Code of Conduct · Gradiente Jurídico"
    >
      <section>
        <LegalHeading>Ámbito</LegalHeading>
        <p className="mt-4">
          Este código fija los principios y el estándar mínimo que esperamos de
          quienes nos venden bienes o nos prestan servicios —incluidos sus
          afiliados y subcontratistas— mientras trabajan con Gradiente Jurídico.
          Complementa la ley aplicable y el contrato; no los reemplaza. Si hay
          conflicto, prevalecen la norma de orden público y lo pactado por
          escrito.
        </p>
      </section>
      <section>
        <LegalHeading>Integridad y cumplimiento</LegalHeading>
        <p className="mt-4">
          El proveedor debe cumplir las leyes del lugar donde opera y las de
          Colombia cuando el servicio se preste o se destine aquí. Queda
          prohibido el soborno, el tráfico de influencias y cualquier pago
          indebido a funcionarios o particulares. No se ofrecen ni se aceptan
          regalos o atenciones que puedan comprometer un juicio profesional.
        </p>
      </section>
      <section>
        <LegalHeading>Confidencialidad y propiedad intelectual</LegalHeading>
        <p className="mt-4">
          La información de la firma y de sus clientes es reservada. El
          proveedor solo la usa para ejecutar el encargo, la protege con el
          mismo cuidado que su propia información sensible y no la divulga sin
          autorización escrita. Los derechos de autor, marcas, software y
          demás intangibles de Gradiente Jurídico o de sus clientes no se
          copian, sublicencian ni se usan fuera del contrato.
        </p>
      </section>
      <section>
        <LegalHeading>Datos personales</LegalHeading>
        <p className="mt-4">
          Si el proveedor trata datos personales por cuenta de la firma, lo
          hace conforme a la Ley 1581 de 2012, a las instrucciones del
          responsable y a nuestra{" "}
          <Link href="/privacidad" className="text-primary">
            política de privacidad
          </Link>
          . No transfiere esos datos a terceros ni fuera del país sin base
          legal y aviso previo.
        </p>
      </section>
      <section>
        <LegalHeading>Personas y trabajo</LegalHeading>
        <p className="mt-4">
          No se tolera trabajo forzoso, trata de personas ni trabajo infantil.
          El proveedor paga salarios legales, respeta jornadas y afiliaciones
          cuando corresponda, y mantiene un entorno libre de acoso y
          discriminación. Quienes subcontrate deben cumplir el mismo estándar.
        </p>
      </section>
      <section>
        <LegalHeading>Ambiente y recursos</LegalHeading>
        <p className="mt-4">
          Esperamos un uso razonable de recursos, el cumplimiento ambiental
          aplicable y, cuando el servicio lo permita, prácticas que reduzcan
          desperdicio y consumo innecesario.
        </p>
      </section>
      <section>
        <LegalHeading>Conflictos y verificación</LegalHeading>
        <p className="mt-4">
          El proveedor declara a tiempo cualquier conflicto de interés con la
          firma o con un cliente. Podemos pedir evidencia de cumplimiento de
          este código. Un incumplimiento grave o reiterado puede dar lugar a
          terminar la relación.
        </p>
      </section>
      <section>
        <LegalHeading>Denuncias</LegalHeading>
        <p className="mt-4">
          Cualquier sospecha de incumplimiento se reporta de inmediato a{" "}
          <Link href={`mailto:${brand.email}`} className="text-primary">
            {brand.email}
          </Link>{" "}
          o a {brand.contactPerson} ({brand.phone}). No tomamos represalias
          contra quien denuncia de buena fe.
        </p>
      </section>
    </LegalDoc>
  );
}
