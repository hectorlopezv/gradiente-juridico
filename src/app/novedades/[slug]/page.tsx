import { redirect } from "next/navigation";
import { successCases } from "@/lib/cases";

export function generateStaticParams() {
  return successCases.map((item) => ({ slug: item.slug }));
}

export default async function NovedadRedirect({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  redirect(`/insight/${slug}`);
}
