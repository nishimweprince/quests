/**
 * Photography sources, in priority order:
 *
 * 1. agaciro.rw — holding logos (`public/media/logos/`) and the Kwibuka
 *    news photo used for the news hero.
 * 2. The Fund's own Flickr library (flickr.com/photos/131816702@N03) —
 *    event, delegation, remembrance, and livestock photography.
 * 3. Pexels (pexels.com/license, free to use) — topical fills the Fund's
 *    library cannot cover: Kigali aerial (31466706), telecom tower
 *    (12003537), highway trucks (2199293), welders (15947586), mine tunnel
 *    (32594486), stadium at night (31741429), spreadsheet (590022),
 *    tower cranes (30617023).
 *
 * Every slot gets its own image so no picture repeats.
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

const LOGOS = "/media/logos";

/**
 * Official holding logos reused verbatim from agaciro.rw.
 * Null where the old site publishes no logo — the carousel falls back
 * to the photographic placeholder for those holdings.
 */
const companyLogos: Record<string, string> = {
  "development-bank-of-rwanda": "brd.png",
  "bank-of-kigali": "bk.png",
  "rwanda-stock-exchange": "rse.png",
  "im-bank-rwanda": "im.png",
  "trade-and-development-bank": "tdb.png",
  "gtbank-rwanda": "gtbank.png",
  "rwanda-national-investment-trust": "rnit.png",
  "broadband-systems-corporation": "bsc.png",
  irembo: "irembo.png",
  "africa-olleh-services": "aos.png",
  "kt-rwanda-network": "ktrn.png",
  "rwanda-printery-company": "rpc.png",
  "kinazi-cassava-plant": "kinazi.png",
  "rwanda-farmers-coffee-company": "rfcc.jpeg",
  "africa-improved-foods": "aif.png",
  "rwanda-interlink-transport-company": "ritco.png",
  "prime-economic-zones": "pez.jpeg",
  "rwanda-fertilizer-company": "fertilizer.png",
  "trinity-metals-group": "trinity_logo.png",
  "zaria-court": "zaria.png",
};

export function companyLogo(slug: string): string | null {
  const file = companyLogos[slug];
  return file ? `${LOGOS}/${file}` : null;
}
