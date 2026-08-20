export const INSIGHT_PAGE_SIZE = 4;

export type Text = { es: string; en: string };

export type Insight = {
  slug: string;
  publishedAt: string;
  image: string;
  kicker: string;
  title: string;
  summary: string;
  dateLabel: string;
  sections: { title: string; paragraphs: string[] }[];
  takeaways: string[];
};
