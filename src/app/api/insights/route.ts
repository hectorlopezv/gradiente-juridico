import { NextRequest, NextResponse } from "next/server";
import { isLocale } from "@/lib/locale";
import { paginateInsights } from "@/lib/insights";

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const raw = searchParams.get("locale");
  const locale = isLocale(raw) ? raw : "es";
  const page = Math.max(1, Number(searchParams.get("page") || "1"));
  const data = paginateInsights(locale, page);
  return NextResponse.json(data);
}
