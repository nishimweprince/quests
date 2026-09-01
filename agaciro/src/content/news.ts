export type NewsItem = {
  slug: string;
  date: string;
  /** Machine-readable date for <time dateTime>. */
  isoDate: string;
  title: string;
  excerpt: string;
  href: string;
  source: string;
};

export const newsItems: NewsItem[] = [
  {
    slug: "bisesero-remembrance-2026",
    date: "Wednesday, 3 June 2026",
    isoDate: "2026-06-03",
    title:
      "Bisesero remembrance: Sovereign fund Agaciro honours resistance, supports survivors",
    excerpt:
      "At the hills of Bisesero, where courage once defied unimaginable violence during the 1994 Genocide against the Tutsi, Agaciro Development Fund joined the national remembrance and pledged continued support to survivors.",
    href: "https://www.newtimes.co.rw/article/35167/news/kwibuka/bisesero-remembrance-sovereign-fund-agaciro-honours-resistancesupports-survivors",
    source: "The New Times",
  },
];
