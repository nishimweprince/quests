export type SectorSlug =
  | "financial-services"
  | "telecommunications-media-and-technology"
  | "agriculture-and-agro-processing"
  | "transport-and-logistics"
  | "industrials-and-manufacturing"
  | "mining"
  | "hospitality";

export type Sector = {
  slug: SectorSlug;
  name: string;
  /** Short name used in filters and pills. */
  short: string;
  intro: string;
};

export type PortfolioCompany = {
  slug: string;
  name: string;
  /** Verbatim from agaciro.rw. Null where the Fund publishes no description yet. */
  description: string | null;
  sectors: SectorSlug[];
  website?: string;
};

export const sectors: Sector[] = [
  {
    slug: "financial-services",
    name: "Financial Services",
    short: "Financial Services",
    intro:
      "Banks, development finance institutions, and capital market infrastructure that mobilise savings and widen access to finance in Rwanda and the region.",
  },
  {
    slug: "telecommunications-media-and-technology",
    name: "Telecommunications, Media and Technology",
    short: "Telecoms, Media & Technology",
    intro:
      "Connectivity, digital public services, and data infrastructure supporting Rwanda's ambition to become a regional ICT hub.",
  },
  {
    slug: "agriculture-and-agro-processing",
    name: "Agriculture and Agro-Processing",
    short: "Agriculture & Agro-Processing",
    intro:
      "Value addition close to the farm: processing Rwandan cassava, coffee, tea, rice and fortified foods for local, regional and international markets.",
  },
  {
    slug: "transport-and-logistics",
    name: "Transport and Logistics",
    short: "Transport & Logistics",
    intro:
      "Public transport and economic zone infrastructure that connect communities and move goods across Rwanda and the region.",
  },
  {
    slug: "industrials-and-manufacturing",
    name: "Industrials and Manufacturing",
    short: "Industrials & Manufacturing",
    intro:
      "Industrial infrastructure, inputs, and commodity trading platforms that raise domestic value addition and business competitiveness.",
  },
  {
    slug: "mining",
    name: "Mining",
    short: "Mining",
    intro:
      "Responsible extraction and processing of Rwanda's mineral resources under ethical and eco-conscious practices.",
  },
  {
    slug: "hospitality",
    name: "Hospitality",
    short: "Hospitality",
    intro:
      "Destinations supporting Rwanda's growing hospitality, tourism, sports, and creative economy ecosystem.",
  },
];

export const portfolioCompanies: PortfolioCompany[] = [
  {
    slug: "development-bank-of-rwanda",
    name: "Development Bank of Rwanda (BRD)",
    description:
      "The Development Bank of Rwanda is Rwanda's national development finance institution. It provides long-term and inclusive financing to support priority sectors such as agriculture, energy, housing, education, exports, and infrastructure.",
    sectors: ["financial-services"],
  },
  {
    slug: "bank-of-kigali",
    name: "Bank of Kigali (BK)",
    description:
      "Bank of Kigali is one of Rwanda's leading commercial banks, providing banking and financial services to individuals, businesses, and institutions. It plays an important role in financial sector development, savings mobilization, and access to finance.",
    sectors: ["financial-services"],
  },
  {
    slug: "rwanda-stock-exchange",
    name: "Rwanda Stock Exchange (RSE)",
    description:
      "Rwanda Stock Exchange is Rwanda's national securities exchange. It provides a regulated marketplace for listing, buying, and selling financial instruments, supporting capital mobilization and long-term investment in Rwanda.",
    sectors: ["financial-services"],
  },
  {
    slug: "im-bank-rwanda",
    name: "I&M Bank Rwanda",
    description:
      "I&M Bank Rwanda is a commercial bank offering personal, business, institutional, and corporate banking services. The bank supports Rwanda's financial sector through banking products, digital services, and financing solutions.",
    sectors: ["financial-services"],
  },
  {
    slug: "trade-and-development-bank",
    name: "Trade and Development Bank (TDB)",
    description:
      "TDB Group is an African regional development finance institution established to finance trade, regional integration, and sustainable development. Agaciro became an institutional shareholder in TDB, strengthening regional investment diversification.",
    sectors: ["financial-services"],
  },
  {
    slug: "gtbank-rwanda",
    name: "GTBank Rwanda",
    description:
      "GTBank Rwanda is part of Guaranty Trust Holding Company and provides retail, corporate, digital, and business banking services. It supports financial access and modern banking solutions for individuals and enterprises.",
    sectors: ["financial-services"],
  },
  {
    slug: "rwanda-national-investment-trust",
    name: "Rwanda National Investment Trust (RNIT)",
    description:
      "Rwanda National Investment Trust promotes collective investment and savings through fund management products such as the RNIT Iterambere Fund. It supports Rwanda's capital market development and savings culture.",
    sectors: ["financial-services"],
  },
  {
    slug: "broadband-systems-corporation",
    name: "Broadband Systems Corporation (BSC)",
    description:
      "BSC is an ICT and broadband connectivity company providing internet, connectivity, cloud, and digital infrastructure solutions for citizens, businesses, and institutions.",
    sectors: ["telecommunications-media-and-technology"],
  },
  {
    slug: "irembo",
    name: "Irembo",
    description:
      "Irembo is Rwanda's digital public service platform, enabling citizens and businesses to access government services online. It supports digital transformation, service efficiency, online payments, and improved access to public services.",
    sectors: ["telecommunications-media-and-technology"],
  },
  {
    slug: "africa-olleh-services",
    name: "Africa Olleh Services (AOS)",
    description:
      "AOS is a Rwanda-based ICT service provider and operator of the National Data Center. It offers services such as cloud hosting, web and mail hosting, server colocation, cybersecurity, backup, and IT consulting.",
    sectors: ["telecommunications-media-and-technology"],
  },
  {
    slug: "kt-rwanda-network",
    name: "KT Rwanda Networks (KTRN)",
    description:
      "KT Rwanda Networks is a 4G LTE infrastructure company providing wholesale mobile broadband network services. It supports national connectivity, digital inclusion, and Rwanda's ambition to become a regional ICT hub.",
    sectors: ["telecommunications-media-and-technology"],
  },
  {
    slug: "rwanda-printery-company",
    name: "Rwanda Printery Company (RPC)",
    description:
      "Rwanda Printery Company Ltd is a printing company owned by the Government of Rwanda under Agaciro Development Fund Corporate Trust Ltd, established by the Cabinet meeting held on 27 November 2013 as a result of merging three independent printeries previously managed separately by the National Electoral Commission, Rwanda Education Board, and Rwanda Biomedical Centre.",
    sectors: ["telecommunications-media-and-technology"],
  },
  {
    slug: "kinazi-cassava-plant",
    name: "Kinazi Cassava Plant",
    description:
      "Kinazi Cassava Plant is a leading cassava-processing company based in Rwanda's Southern Province. It processes fresh Rwandan cassava into high-quality cassava flour for local, regional, and international markets.",
    sectors: ["agriculture-and-agro-processing"],
  },
  {
    slug: "rwanda-farmers-coffee-company",
    name: "Rwanda Farmers Coffee Company",
    description:
      "Rwanda Farmers Coffee Company is a coffee roasting and packaging company producing Rwandan coffee under the Gorilla's Coffee brand. It promotes value addition in Rwanda's coffee sector by sourcing quality coffee from Rwandan farmers and cooperatives.",
    sectors: ["agriculture-and-agro-processing"],
  },
  {
    slug: "africa-improved-foods",
    name: "Africa Improved Foods",
    description:
      "Africa Improved Foods is a nutrition-focused food manufacturing company producing high-quality fortified foods. Its work supports nutrition, local sourcing, job creation, and the fight against malnutrition.",
    sectors: ["agriculture-and-agro-processing"],
  },
  {
    slug: "shagasha-tea",
    name: "Shagasha Tea",
    description: null,
    sectors: ["agriculture-and-agro-processing"],
  },
  {
    slug: "east-africa-exchange",
    name: "East Africa Exchange (EAX)",
    description:
      "The East Africa Exchange is a regional commodity exchange legally registered throughout East African Community partner states and currently established with a head office in Kigali, Rwanda.",
    sectors: [
      "agriculture-and-agro-processing",
      "industrials-and-manufacturing",
    ],
  },
  {
    slug: "mayange-rice-company",
    name: "Mayange Rice Company",
    description: null,
    sectors: ["agriculture-and-agro-processing"],
  },
  {
    slug: "kirehe-rice-company",
    name: "Kirehe Rice Company",
    description: null,
    sectors: ["agriculture-and-agro-processing"],
  },
  {
    slug: "gisovu-tea-estate",
    name: "Gisovu Tea Estate",
    description: null,
    sectors: ["agriculture-and-agro-processing"],
  },
  {
    slug: "rwanda-interlink-transport-company",
    name: "Rwanda Interlink Transport Company (RITCO)",
    description:
      "Rwanda Interlink Transport Company is a public-private transport company providing reliable, safe, and affordable public transport services. It improves connectivity between communities and supports mobility across Rwanda and the region.",
    sectors: ["transport-and-logistics"],
  },
  {
    slug: "prime-economic-zones",
    name: "Prime Economic Zones (PEZ)",
    description:
      "Prime Economic Zones supports Rwanda's industrial and investment infrastructure through the development and operation of economic zone facilities. It contributes to industrial growth, manufacturing, logistics, and business competitiveness.",
    sectors: ["transport-and-logistics", "industrials-and-manufacturing"],
  },
  {
    slug: "rwanda-fertilizer-company",
    name: "Rwanda Fertilizer Company (RFC)",
    description: null,
    sectors: ["industrials-and-manufacturing"],
  },
  {
    slug: "trinity-metals-group",
    name: "Trinity Metals Group",
    description:
      "Trinity Metals is a responsible producer of tin, tungsten and tantalum, employing eco-conscious and ethical practices in every area of its business operations.",
    sectors: ["mining"],
  },
  {
    slug: "zaria-court",
    name: "Zaria Court",
    description:
      "Zaria Court is an urban lifestyle and hospitality destination focused on sports, entertainment, culture, and local creativity. It supports Rwanda's growing hospitality, tourism, sports, and creative economy ecosystem.",
    sectors: ["hospitality"],
  },
];

export function findSector(slug: string) {
  return sectors.find((item) => item.slug === slug);
}

export function companiesInSector(slug: SectorSlug) {
  return portfolioCompanies.filter((item) => item.sectors.includes(slug));
}

/** Companies with published descriptions, used for the home carousel. */
export const featuredCompanies = portfolioCompanies.filter(
  (item) => item.description !== null,
);
