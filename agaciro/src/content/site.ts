export const site = {
  name: "Agaciro Development Fund",
  shortName: "AgDF",
  tagline: "Investing for Rwanda's future generations",
  dek: "Agaciro Development Fund is Rwanda's sovereign wealth fund, investing national savings for long-term resilience, national prosperity, and sustainable value creation.",
  email: "info@agaciro.rw",
  phone: "+250 788 331 820",
  phoneHref: "+250788331820",
  address: [
    "Street No. KN 67, Kigali, Rwanda",
    "BPR PCD Towers, 7th Floor",
    "P.O. Box 674, Kigali",
  ],
  mapQuery: "BPR+PCD+Towers+KN+67+Kigali+Rwanda",
} as const;

/** Headline figures published on agaciro.rw under "AgDF at a Glance". */
export const glance = [
  { value: 456, prefix: "FRW ", suffix: "bn", label: "Assets under management" },
  {
    value: 25,
    suffix: "",
    label: "Portfolio companies and strategic national investments",
  },
  { value: 7, suffix: "", label: "Investment sectors" },
] as const;

/** Dating and source for the headline figures. Update when new audited accounts publish. */
export const figuresMeta = {
  asOf: "31 December 2024",
  reportHref: "/resources/annual-report",
  reportLabel: "2024 Annual Report and Financial Statements",
} as const;

/** Accounts the Fund links from agaciro.rw. */
export const socials = [
  {
    label: "LinkedIn",
    icon: "linkedin",
    href: "https://www.linkedin.com/company/agaciro-development-fund",
  },
  { label: "X", icon: "x", href: "https://x.com/AgaciroFund" },
  {
    label: "Facebook",
    icon: "facebook",
    href: "https://www.facebook.com/AgaciroFund",
  },
  {
    label: "YouTube",
    icon: "youtube",
    href: "https://www.youtube.com/channel/UCwC77IXrQjXKI_peHZjmM1w",
  },
] as const;

export type NavChild = { label: string; href: string; note?: string };
export type NavItem = { label: string; href: string; children?: NavChild[] };

export const navigation: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About Us",
    href: "/about",
    children: [
      {
        label: "Our History",
        href: "/about/history",
        note: "From Umushyikirano 2011 to today",
      },
      {
        label: "Mission and Vision",
        href: "/about/mission-and-vision",
        note: "Vision, mission, mandate and values",
      },
      {
        label: "Board of Directors",
        href: "/about/board",
        note: "Six directors appointed by Cabinet",
      },
      {
        label: "Our Team",
        href: "/about/team",
        note: "Executive management and team members",
      },
    ],
  },
  {
    label: "Investment",
    href: "/investment",
    children: [
      { label: "What We Invest In", href: "/investment/what-we-invest-in" },
      {
        label: "Our Investment Approach",
        href: "/investment/our-investment-approach",
      },
      {
        label: "Developmental Impact and ESG",
        href: "/investment/developmental-impact-and-esg",
      },
      { label: "Investment Process", href: "/investment/investment-process" },
      {
        label: "Investment Risk Management",
        href: "/investment/investment-risk-management",
      },
    ],
  },
  {
    label: "Portfolio",
    href: "/portfolio",
    children: [
      { label: "Financial Services", href: "/portfolio/financial-services" },
      {
        label: "Telecommunications, Media and Technology",
        href: "/portfolio/telecommunications-media-and-technology",
      },
      {
        label: "Agriculture and Agro-Processing",
        href: "/portfolio/agriculture-and-agro-processing",
      },
      {
        label: "Transport and Logistics",
        href: "/portfolio/transport-and-logistics",
      },
      {
        label: "Industrials and Manufacturing",
        href: "/portfolio/industrials-and-manufacturing",
      },
      { label: "Mining", href: "/portfolio/mining" },
      { label: "Hospitality", href: "/portfolio/hospitality" },
    ],
  },
  {
    label: "Resources",
    href: "/resources",
    children: [
      { label: "Annual Reports", href: "/resources/annual-report" },
      { label: "Publications", href: "/resources/publications" },
      { label: "Policies", href: "/resources/policies" },
      { label: "Tenders", href: "/resources/tender" },
      { label: "News & Events", href: "/news" },
      { label: "Careers", href: "/careers" },
    ],
  },
];

export const footerColumns = [
  {
    heading: "Explore",
    links: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/about" },
      { label: "Investment", href: "/investment" },
      { label: "Portfolio", href: "/portfolio" },
    ],
  },
  {
    heading: "Governance",
    links: [
      { label: "Board of Directors", href: "/about/board" },
      { label: "Our Team", href: "/about/team" },
      { label: "Whistleblowing", href: "/whistleblowing" },
      { label: "Disclaimer", href: "/disclaimer" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Annual Reports", href: "/resources/annual-report" },
      { label: "Tenders", href: "/resources/tender" },
      { label: "News & Events", href: "/news" },
      { label: "Careers", href: "/careers" },
    ],
  },
] as const;
