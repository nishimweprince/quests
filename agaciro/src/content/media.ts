/**
 * Placeholder photography. Every slot gets its own image so no picture repeats.
 *
 * These are generic stock photos, deliberately not Rwanda-specific — swap the
 * files in `public/media/stock/` for the real ones and nothing else has to change.
 */
const STOCK = "/media/stock";

export const media = {
  home: {
    hero: `${STOCK}/hero-home.jpg`,
    glance: `${STOCK}/home-glance.jpg`,
    strengths: `${STOCK}/home-strengths.jpg`,
    cta: `${STOCK}/home-cta.jpg`,
  },
  contact: `${STOCK}/contact.jpg`,
  notFound: `${STOCK}/notfound.jpg`,
  about: {
    hub: `${STOCK}/hero-about.jpg`,
    history: `${STOCK}/hero-history.jpg`,
    mission: `${STOCK}/hero-mission.jpg`,
    board: `${STOCK}/hero-board.jpg`,
    team: `${STOCK}/hero-team.jpg`,
  },
  investment: {
    hub: `${STOCK}/hero-investment.jpg`,
  },
  portfolio: {
    hub: `${STOCK}/hero-portfolio.jpg`,
  },
  resources: {
    hub: `${STOCK}/hero-resources.jpg`,
    tender: `${STOCK}/hero-tender.jpg`,
  },
  news: `${STOCK}/hero-news.jpg`,
  careers: `${STOCK}/hero-careers.jpg`,
  disclaimer: `${STOCK}/hero-disclaimer.jpg`,
  whistleblowing: `${STOCK}/hero-whistleblowing.jpg`,
} as const;

/** Keyed by the investment page slug. */
export const investmentHero: Record<string, string> = {
  "what-we-invest-in": `${STOCK}/hero-what-we-invest-in.jpg`,
  "our-investment-approach": `${STOCK}/hero-our-investment-approach.jpg`,
  "developmental-impact-and-esg": `${STOCK}/hero-developmental-impact-and-esg.jpg`,
  "investment-process": `${STOCK}/hero-investment-process.jpg`,
  "investment-risk-management": `${STOCK}/hero-investment-risk-management.jpg`,
};

/** Keyed by the sector slug. */
export const sectorHero: Record<string, string> = {
  "financial-services": `${STOCK}/sector-financial-services.jpg`,
  "telecommunications-media-and-technology": `${STOCK}/sector-telecommunications-media-and-technology.jpg`,
  "agriculture-and-agro-processing": `${STOCK}/sector-agriculture-and-agro-processing.jpg`,
  "transport-and-logistics": `${STOCK}/sector-transport-and-logistics.jpg`,
  "industrials-and-manufacturing": `${STOCK}/sector-industrials-and-manufacturing.jpg`,
  mining: `${STOCK}/sector-mining.jpg`,
  hospitality: `${STOCK}/sector-hospitality.jpg`,
};

/** Keyed by the resource category slug. */
export const resourceHero: Record<string, string> = {
  "annual-report": `${STOCK}/hero-annual-report.jpg`,
  publications: `${STOCK}/hero-publications.jpg`,
  policies: `${STOCK}/hero-policies.jpg`,
};

/** Keyed by the portfolio company slug — one image per holding. */
export function companyImage(slug: string) {
  return `${STOCK}/co-${slug}.jpg`;
}
