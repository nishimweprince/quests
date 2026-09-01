export type PortfolioType =
  "Direct Equity" | "Direct Credit" | "Fund Partnership" | "Strategic Holding";

export type PortfolioCompany = {
  id: number;
  name: string;
  description: string;
  sector: string;
  location: string;
  ledBy: string;
  type: PortfolioType;
  year: number;
  status: "Current" | "Exited";
  placeholder: true;
};

const stems = [
  "Akagera",
  "Imboni",
  "Kivu",
  "Virunga",
  "Ubwiza",
  "Isoko",
  "Umusozi",
  "Ishyo",
  "Nyungwe",
  "Kigali",
  "Imizi",
  "Urumuri",
  "Ganza",
  "Inzira",
  "Umurava",
  "Izuba",
  "Ikiraro",
  "Muhazi",
  "Amahoro",
  "Agaseke",
  "Intore",
  "Tera",
  "Iwacu",
  "Inkingi",
  "Ireme",
  "Urugano",
  "Ishami",
  "Gisabo",
  "Ubumwe",
  "Rugari",
  "Mugongo",
  "Baho",
  "Shora",
  "Komeza",
  "Inzozi",
  "Hinga",
];
const suffixes = [
  "Systems",
  "Capital",
  "Logistics",
  "Foods",
  "Industries",
  "Networks",
];
const sectors = [
  "ICT",
  "Financial Services",
  "Transport and Logistics",
  "Agriculture and Agro-Processing",
  "Industrials and Manufacturing",
  "Other",
];
const types: PortfolioType[] = [
  "Direct Equity",
  "Direct Credit",
  "Fund Partnership",
  "Strategic Holding",
];
const locations = ["Kigali, Rwanda", "Rwanda", "Regional"];

export const portfolioCompanies: PortfolioCompany[] = stems.map(
  (stem, index) => ({
    id: index + 1,
    name: `${stem} ${suffixes[index % suffixes.length]}`,
    description:
      "A locally rooted enterprise built to create durable commercial value, skilled employment, and resilient growth across Rwanda and the region.",
    sector: sectors[index % sectors.length],
    location: locations[index % locations.length],
    ledBy: ["Aline M.", "Patrick K.", "Diane U.", "Eric N."][index % 4],
    type: types[index % types.length],
    year: 2022 + (index % 5),
    status: index % 7 === 0 ? "Exited" : "Current",
    placeholder: true,
  }),
);

export const featuredCompanies = portfolioCompanies.slice(0, 7);
