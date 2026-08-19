import { insightRssXml } from "@/lib/feeds";
import { rssResponse } from "@/lib/rss";

export function GET() {
  return rssResponse(insightRssXml());
}
