/** Curated remote media. No downloads or runtime source discovery.
 * Official/Flickr assets retain their owners' rights; source credit is not a license.
 * Generic sector images illustrate an industry, not a named company's premises.
 */
export type MediaSource = {
  src: string;
  sourcePage: string;
  credit: string;
  reuse: string;
  description: string;
  showCredit: boolean;
};

const OFFICIAL = "https://www.agaciro.rw";
const UPLOAD = `${OFFICIAL}/fileadmin/user_upload/`;

function official(file: string, page: string, description: string, showCredit = true): MediaSource {
  return {
    src: `${UPLOAD}${file}`,
    sourcePage: `${OFFICIAL}${page}`,
    credit: "Agaciro Development Fund",
    reuse: "Official published asset; rights retained by its owner. No open license asserted.",
    description,
    showCredit,
  };
}

function flickr(file: string, description: string): MediaSource {
  return {
    src: `https://live.staticflickr.com/65535/${file}`,
    sourcePage: `https://www.flickr.com/photos/131816702@N03/${file.split("_")[0]}/`,
    credit: "Agaciro Development Fund / Flickr",
    reuse: "All Rights Reserved (Flickr license 0); linked to the original photo. No open license asserted.",
    description,
    showCredit: true,
  };
}

const photos = {
  kigali: {
    src: "https://images.pexels.com/photos/31466706/pexels-photo-31466706.jpeg",
    sourcePage: "https://www.pexels.com/photo/aerial-view-of-kigali-city-in-daylight-31466706/",
    credit: "Faustin NKURUNZIZA / Pexels",
    reuse: "Pexels License: https://www.pexels.com/license/; attribution optional.",
    description: "Kigali cityscape, Rwanda",
    showCredit: true,
  },
  analysis: {
    src: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg",
    sourcePage: "https://www.pexels.com/photo/close-up-photo-of-survey-spreadsheet-590022/",
    credit: "Lukas Blazek / Pexels",
    reuse: "Pexels License: https://www.pexels.com/license/; attribution optional.",
    description: "Analysis of charts on paper; illustrative financial research",
    showCredit: true,
  },
  hills: official("slide_imisozi.jpg", "/", "Green hills in Rwanda"),
  lake: official("IMG-20260608-WA0004.jpg", "/about-us/history", "Lake landscape used on Agaciro's history page"),
  agriculture: official("Background_images_and_video/investment_bg1.jpeg", "/investment", "Tea fields; illustrative agriculture investment"),
  finance: official("Background_images_and_video/financial_servicessss.png", "/core-functions/portfolio", "Illustrative financial services and market analysis"),
  telecom: official("telecommm.jpeg", "/core-functions/portfolio", "Telecommunications tower; illustrative sector photography"),
  crops: official("agri_and_processinggg.jpeg", "/core-functions/portfolio", "Rice fields; illustrative agriculture sector photography"),
  logistics: official("logistics.jpeg", "/core-functions/portfolio", "Container terminal; illustrative transport and logistics"),
  industry: official("portifol_photo.jpg", "/core-functions/portfolio", "Industrial facility; illustrative manufacturing"),
  mining: official("mininngg.jpeg", "/core-functions/portfolio", "Open-pit mine; illustrative mining sector photography"),
  hospitality: official("hostpitality.png", "/core-functions/portfolio", "Hotel reception; illustrative hospitality sector photography"),
  office: official("careeersss.jpeg", "/contact-us", "Office workspace; illustrative, not Agaciro's offices"),
  reports: official("resourcesss.jpeg", "/resources", "Charts and a magnifying glass; illustrative reporting"),
  news: official("News_Images/kwibuka_news_agaciro.png", "/media-center/news-events", "Agaciro's Kwibuka 32 remembrance visit"),
  community: flickr("52373929360_f2401e9909_b.jpg", "Agaciro community livestock handover"),
  delegation: flickr("52372414772_078bec9a97_b.jpg", "Delegation at an Agaciro event; archival Fund photography"),
  partnerships: flickr("52373585353_57cbcefc5c_b.jpg", "Participants at an Agaciro event; archival Fund photography"),
} satisfies Record<string, MediaSource>;

const brands = {
  color: official("logos/Original_logo.png", "/", "Official color Agaciro lockup", false),
  white: official("logos/AgDF_Logo_-_White.png", "/", "Official white Agaciro lockup", false),
  favicon: official("logos/favicon.ico", "/", "Official Agaciro favicon", false),
};

const logoSources: Record<string, MediaSource> = {
  "development-bank-of-rwanda": official("logos/brd.png", "/", "development-bank-of-rwanda official company logo", false),
  "bank-of-kigali": official("logos/bk.png", "/", "bank-of-kigali official company logo", false),
  "rwanda-stock-exchange": official("logos/rse.png", "/", "rwanda-stock-exchange official company logo", false),
  "im-bank-rwanda": official("logos/im.png", "/", "im-bank-rwanda official company logo", false),
  "trade-and-development-bank": official("logos/tdb.png", "/", "trade-and-development-bank official company logo", false),
  "gtbank-rwanda": official("logos/gtbank.png", "/", "gtbank-rwanda official company logo", false),
  "rwanda-national-investment-trust": official("logos/rnit.png", "/", "rwanda-national-investment-trust official company logo", false),
  "broadband-systems-corporation": official("logos/bsc.png", "/", "broadband-systems-corporation official company logo", false),
  "irembo": official("logos/irembo.png", "/", "irembo official company logo", false),
  "africa-olleh-services": official("logos/aos.png", "/", "africa-olleh-services official company logo", false),
  "kt-rwanda-network": official("logos/ktrn.png", "/", "kt-rwanda-network official company logo", false),
  "rwanda-printery-company": official("logos/rpc.png", "/", "rwanda-printery-company official company logo", false),
  "kinazi-cassava-plant": official("logos/kinazi.png", "/", "kinazi-cassava-plant official company logo", false),
  "rwanda-farmers-coffee-company": official("logos/rfcc.jpeg", "/", "rwanda-farmers-coffee-company official company logo", false),
  "africa-improved-foods": official("logos/aif.png", "/", "africa-improved-foods official company logo", false),
  "rwanda-interlink-transport-company": official("logos/ritco.png", "/", "rwanda-interlink-transport-company official company logo", false),
  "prime-economic-zones": official("logos/pez.jpeg", "/", "prime-economic-zones official company logo", false),
  "rwanda-fertilizer-company": official("logos/fertilizer.png", "/", "rwanda-fertilizer-company official company logo", false),
  "trinity-metals-group": official("trinity_logo.png", "/", "trinity-metals-group official company logo", false),
  "zaria-court": official("logos/zaria.png", "/", "zaria-court official company logo", false),
};

/** Identity verified against the named card/modal on the official board or team page. */
const portraitSources: Record<string, MediaSource> = {
  "scott-t-ford": official("Board_of_directors/Scott_T._Ford.jpeg", "/about-us/board-of-directors", "Mr. Scott T. Ford — official portrait", false),
  "thierry-mihigo-kalisa": official("Board_of_directors/Thierry_Mihigo_Kalisanew.png", "/about-us/board-of-directors", "Dr. Thierry Mihigo Kalisa — official portrait", false),
  "doreen-g-karake": official("Board_of_directors/Doreen_G_Karake.jpg", "/about-us/board-of-directors", "Mrs. Doreen G. Karake — official portrait", false),
  "jeanne-francoise-mubiligi": official("Board_of_directors/Jeanne_Francoise_Mubiligi.jpeg", "/about-us/board-of-directors", "Mrs. Jeanne Francoise Mubiligi — official portrait", false),
  "aime-ngarukiyintwali": official("Board_of_directors/Aim%C3%A9_NGARUKIYINTWALI.jpeg", "/about-us/board-of-directors", "Mr. Aimé Ngarukiyintwali — official portrait", false),
  "andrew-rozanov": official("Board_of_directors/Andrew_Rozanov.jpg", "/about-us/board-of-directors", "Mr. Andrew Rozanov — official portrait", false),
  "ulrich-kayinamura": official("CEO-3.png", "/about-us/our-team", "Ulrich Kayinamura — official portrait", false),
  "ismael-amri-sued": official("10.png", "/about-us/our-team", "Ismael Amri Sued — official portrait", false),
  "nathaniel-nyika": official("18.png", "/about-us/our-team", "Nathaniel Nyika — official portrait", false),
  "jerry-ntare": official("5.png", "/about-us/our-team", "Jerry Ntare — official portrait", false),
  "bienfait-banaga": official("17.png", "/about-us/our-team", "Bienfait Banaga — official portrait", false),
  "zackiah-nandugwa": official("7.png", "/about-us/our-team", "Zackiah Nandugwa — official portrait", false),
  "charles-ndahimana": official("1.png", "/about-us/our-team", "Charles Ndahimana — official portrait", false),
  "felicien-rimenyande": official("19.png", "/about-us/our-team", "Felicien Rimenyande — official portrait", false),
  "lilian-s-mutesi": official("3.png", "/about-us/our-team", "Lilian S. Mutesi — official portrait", false),
  "valentine-nyinawumuntu": official("13.png", "/about-us/our-team", "Valentine Nyinawumuntu — official portrait", false),
  "benjamin-igeno": official("12.png", "/about-us/our-team", "Benjamin Igeno — official portrait", false),
  "elise-ntamitondero": official("11.png", "/about-us/our-team", "Elise Ntamitondero — official portrait", false),
  "sedar-sagamba": official("4.png", "/about-us/our-team", "Sedar Sagamba — official portrait", false),
  "sabine-iradukunda-mugunga": official("2__2_.png", "/about-us/our-team", "Sabine Iradukunda Mugunga — official portrait", false),
  "cliff-hakizabera": official("6.png", "/about-us/our-team", "Cliff Hakizabera — official portrait", false),
  "prince-ntwari": official("9.png", "/about-us/our-team", "Prince Ntwari — official portrait", false),
  "sandrine-isimbi-butera": official("14.png", "/about-us/our-team", "Sandrine Isimbi Butera — official portrait", false),
  "landry-girinshuti": official("8.png", "/about-us/our-team", "Landry Girinshuti — official portrait", false),
  "keith-ntagozera": official("15.png", "/about-us/our-team", "Keith Ntagozera — official portrait", false),
};

export const brandMedia = {
  color: brands.color.src,
  white: brands.white.src,
  favicon: brands.favicon.src,
} as const;

export const personPortraits: Record<string, string> = Object.fromEntries(
  Object.entries(portraitSources).map(([slug, source]) => [slug, source.src]),
);

export const media = {
  home: {
    hero: photos.kigali.src,
    glance: photos.delegation.src,
    strengths: photos.hills.src,
    cta: photos.partnerships.src,
  },
  contact: photos.kigali.src,
  notFound: photos.hills.src,
  about: {
    hub: photos.delegation.src,
    history: photos.lake.src,
    mission: photos.hills.src,
    board: photos.reports.src,
    team: photos.office.src,
  },
  investment: { hub: photos.agriculture.src },
  portfolio: { hub: photos.kigali.src },
  resources: { hub: photos.analysis.src, tender: photos.office.src },
  news: photos.news.src,
  careers: photos.office.src,
  disclaimer: photos.reports.src,
  whistleblowing: photos.office.src,
} as const;

export const investmentHero: Record<string, string> = {
  "what-we-invest-in": photos.agriculture.src,
  "our-investment-approach": photos.analysis.src,
  "developmental-impact-and-esg": photos.community.src,
  "investment-process": photos.reports.src,
  "investment-risk-management": photos.analysis.src,
};

export const sectorHero: Record<string, string> = {
  "financial-services": photos.finance.src,
  "telecommunications-media-and-technology": photos.telecom.src,
  "agriculture-and-agro-processing": photos.crops.src,
  "transport-and-logistics": photos.logistics.src,
  "industrials-and-manufacturing": photos.industry.src,
  mining: photos.mining.src,
  hospitality: photos.hospitality.src,
};

export const resourceHero: Record<string, string> = {
  "annual-report": photos.reports.src,
  publications: photos.analysis.src,
  policies: photos.office.src,
};

/** Explicit fallback photography by holding. These illustrate sectors, not company sites. */
export const companyImages: Record<string, string> = {
  "development-bank-of-rwanda": photos.finance.src,
  "bank-of-kigali": photos.finance.src,
  "rwanda-stock-exchange": photos.finance.src,
  "im-bank-rwanda": photos.finance.src,
  "trade-and-development-bank": photos.finance.src,
  "gtbank-rwanda": photos.finance.src,
  "rwanda-national-investment-trust": photos.finance.src,
  "broadband-systems-corporation": photos.telecom.src,
  "irembo": photos.telecom.src,
  "africa-olleh-services": photos.telecom.src,
  "kt-rwanda-network": photos.telecom.src,
  "rwanda-printery-company": photos.industry.src,
  "kinazi-cassava-plant": photos.crops.src,
  "rwanda-farmers-coffee-company": photos.crops.src,
  "africa-improved-foods": photos.crops.src,
  "shagasha-tea": photos.agriculture.src,
  "east-africa-exchange": photos.crops.src,
  "mayange-rice-company": photos.crops.src,
  "kirehe-rice-company": photos.crops.src,
  "gisovu-tea-estate": photos.agriculture.src,
  "rwanda-interlink-transport-company": photos.logistics.src,
  "prime-economic-zones": photos.logistics.src,
  "rwanda-fertilizer-company": photos.industry.src,
  "trinity-metals-group": photos.mining.src,
  "zaria-court": photos.hospitality.src,
};

export function companyImage(slug: string): string {
  return companyImages[slug] ?? media.portfolio.hub;
}

export function companyLogo(slug: string): string | null {
  return logoSources[slug]?.src ?? null;
}

/** One provenance record per URL, also used to build the exact optimizer allowlist. */
export const mediaSources: Record<string, MediaSource> = Object.fromEntries(
  [...Object.values(photos), ...Object.values(brands), ...Object.values(logoSources), ...Object.values(portraitSources)]
    .map((source) => [source.src, source]),
);

/** Intended placements for auditing and future replacement, without duplicating URLs. */
export const mediaPlacements: Record<string, string> = {
  ...Object.fromEntries(Object.entries(media).flatMap(([section, value]) =>
    typeof value === "string" ? [[section, value]] :
      Object.entries(value).map(([slot, url]) => [`${section}.${slot}`, url]),
  )),
  ...Object.fromEntries(Object.entries(investmentHero).map(([slug, url]) => [`investment.${slug}`, url])),
  ...Object.fromEntries(Object.entries(sectorHero).map(([slug, url]) => [`sector.${slug}`, url])),
  ...Object.fromEntries(Object.entries(resourceHero).map(([slug, url]) => [`resources.${slug}`, url])),
  ...Object.fromEntries(Object.entries(companyImages).map(([slug, url]) => [`company.${slug}.illustration`, url])),
  ...Object.fromEntries(Object.entries(logoSources).map(([slug, source]) => [`company.${slug}.logo`, source.src])),
  ...Object.fromEntries(Object.entries(personPortraits).map(([slug, url]) => [`person.${slug}.card-and-profile`, url])),
  ...Object.fromEntries(Object.entries(brandMedia).map(([variant, url]) => [`brand.${variant}`, url])),
};

/** Large official team PNGs exceed the optimizer's seven-second upstream timeout.
 * This fixed slug map is the only input accepted by the longer-timeout source route.
 */
export const largePortraitSources: Record<string, string> = Object.fromEntries(
  Object.entries(personPortraits).filter(([, src]) =>
    new URL(src).pathname.match(/^\/fileadmin\/user_upload\/[^/]+\.png$/),
  ),
);

const portraitPaths = new Map(Object.entries(largePortraitSources).map(([slug, src]) =>
  [src, `/api/media/portraits/${slug}`],
));

export function optimizedImageSource(src: string): string {
  return portraitPaths.get(src) ?? src;
}
