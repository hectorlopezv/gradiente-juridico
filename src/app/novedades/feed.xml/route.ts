import { novedadesRssXml } from "@/lib/feeds";
import { rssResponse } from "@/lib/rss";

export function GET() {
  return rssResponse(novedadesRssXml());
}
