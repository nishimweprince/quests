export type InvestmentPage = {
  slug: string;
  title: string;
  /** Standfirst used on the hub card, the hero, and page metadata. */
  summary: string;
  sections: { heading?: string; body?: string[]; list?: string[] }[];
};

export const investmentIntro =
  "Agaciro Development Fund is Rwanda's sovereign wealth fund dedicated to building national savings, strengthening economic resilience and promoting long-term prosperity.";

export const investmentPages: InvestmentPage[] = [
  {
    slug: "what-we-invest-in",
    title: "What We Invest In",
    summary:
      "At a high level, Agaciro Development Fund seeks to invest in market leaders or defensible niche players that generate economic impact including via export orientation or import substitution, domestic value addition and employment creation.",
    sections: [
      {
        heading: "Equity",
        body: [
          "We back mid-stage growth companies in Rwanda and beyond that are profitable, generate cash, and can declare and pay a dividend in the short to medium term. We also partner with fund managers who have established track records.",
          "We avoid greenfield investments unless they are significantly de-risked through contracted offtake or supply arrangements. We look for strong management and governance, meaning a constituted board and audited financial statements, and for companies that can scale and crowd in capital alongside the Fund.",
        ],
        list: [
          "Track record: in operation for at least 3 years, and profitable for at least 2 of those 3 years, including the most recent year.",
          "Scale: EBITDA of at least Frw 3 billion on revenue of at least Frw 10 billion, cash or near-cash generative.",
          "Ticket size: about Frw 10 billion, which the company should be able to absorb within one year.",
          "Influence: a stake of at least 10% with board representation, so the Fund has significant influence and oversight, including through syndication and co-investment structures.",
        ],
      },
      {
        heading: "Debt",
        body: [
          "Under fixed income, we invest in high quality yielding assets with significant downside protection, assessed against the cash flow the business generates.",
        ],
        list: [
          "A margin above the debt service coverage ratio of at least 1.3 times, debt-to-EBITDA of a maximum of 3 times, and a debt-to-equity ratio specific to the industry.",
          "Companies whose earnings are naturally hedged against US Dollar depreciation.",
          "Public and sovereign debt, domestic and offshore.",
          "Supranationals.",
        ],
      },
    ],
  },
  {
    slug: "our-investment-approach",
    title: "Our Investment Approach",
    summary:
      "As Rwanda's long-term development focused sovereign wealth fund, Agaciro Development Fund seeks to execute commercially attractive investments that drive development in sectors aligned with the National Strategy for Transformation 2 (NST2).",
    sections: [
      {
        heading: "Geography",
        body: [
          "We are predominantly invested in Rwanda but have the capacity to invest up to 30% of our portfolio outside Rwanda.",
        ],
      },
      {
        heading: "Sectors",
        body: [
          "We are sector-agnostic; however our preferred sectors are ICT, Financial Services, Transport and Logistics, Agriculture and Agro-Processing, and Industrials and Manufacturing.",
        ],
      },
      {
        heading: "Asset classes",
        body: [
          "We invest in both equity and fixed income. Under equity, we invest in private equity and unlisted equity. Under fixed income, we invest in sovereign and corporate debt issuances, both listed and unlisted.",
        ],
      },
      {
        heading: "Direct and indirect investments",
        body: [
          "We invest both directly as Agaciro Development Fund, and are also keen to partner with funds to access indirect investment where there might be strategic alignment.",
        ],
      },
      {
        heading: "Instruments",
        body: [
          "We use a broad category of instruments. On the debt side these range across senior, secured, unsecured, subordinated, mezzanine and junior debt. Under equity, we invest in preferred shares, common equity tier 1, and convertible debt.",
        ],
      },
    ],
  },
  {
    slug: "developmental-impact-and-esg",
    title: "Developmental Impact and ESG",
    summary:
      "Agaciro supports Rwanda's national development objectives and aligns its investment activities with the priorities of the National Strategy for Transformation 2 (NST2). Investments will seek to generate sustainable financial returns while contributing to sustainable livelihoods and Rwanda's long-term economic transformation.",
    sections: [
      {
        heading: "Developmental impact",
        body: [
          "For each investment, one Primary Impact Indicator and two Supporting Impact Indicators are set and tracked before and after the investment, to measure alignment and overall development impact.",
        ],
        list: [
          "Employment creation.",
          "Export growth and foreign exchange generation.",
          "Domestic value addition and industrial development.",
          "Infrastructure capacity expansion.",
        ],
      },
      {
        heading: "Environmental, Social and Governance",
        body: [
          "Agaciro invests responsibly: environmental, social, and governance (ESG) factors are built into every stage of the investment process to manage risk and generate sustainable, long-term returns. Where appropriate, the Fund commissions specialist external ESG consultants to support the ESG policy, due diligence, and monitoring.",
          "Furthermore, Agaciro will not invest in activities that are inconsistent with internationally recognized Environmental, Social, and Governance standards. In particular, the Fund will apply the IFC Exclusion List as a baseline screening tool and will refrain from investing in sectors or activities prohibited under this framework. This ensures that the portfolio avoids investments associated with significant environmental harm, illegal activities, or unacceptable social impacts.",
          "Investment outcomes are aligned to the United Nations Sustainable Development Goals (UN SDGs), and each portfolio company is measured against sector-specific impact matrices it is expected to meet.",
        ],
      },
    ],
  },
  {
    slug: "investment-process",
    title: "Investment Process",
    summary:
      "We have a rigorous top-down and bottom-up investment approach which follows a multi-stage screening and two-stage approval process that extends from the investment team to the board investment committee.",
    sections: [
      {
        body: [
          "We have a rigorous top-down and bottom-up investment approach which follows a multi-stage screening and two-stage approval process that extends from the investment team to the board investment committee.",
        ],
      },
    ],
  },
  {
    slug: "investment-risk-management",
    title: "Investment Risk Management",
    summary:
      "Agaciro tracks risk investment by investment, checking that each position performs and that every risk taken is adequately compensated for.",
    sections: [
      {
        heading: "How positions are monitored",
        body: [
          "Agaciro takes an asset-by-asset view of risk, combining financial health metrics, structural indicators, and sector-specific considerations. For equity investments, the focus is operating cashflow generation, revenue growth, profitability margins (EBITDA, EBIT, and net margin), dividend yield, and the viability of exit pathways. For debt investments, the primary metrics are average Debt-to-EBITDA on a portfolio-weighted basis, interest coverage ratios, and exposure to floating versus fixed rate instruments.",
          "Beyond financial metrics, the Investment Department watches operational and structural indicators for each holding: customer and counterparty concentration, working capital cycles, leverage against asset quality and collateral, and capacity utilisation. It pays particular attention to FX mismatches between hard-currency obligations and local-currency revenues, to the offtake and contractual arrangements behind long-dated assets, and to early signs of margin compression or deteriorating asset quality.",
        ],
      },
      {
        heading: "Alert thresholds",
        body: [
          "Breaching any of the following prompts a formal review of the position:",
        ],
        list: [
          "Debt Service Coverage Ratio (DSCR) falling below its set threshold.",
          "Debt/EBITDA multiples breaching their set threshold.",
          "Interest coverage falling below its set threshold.",
          "Any switch from positive to negative EBITDA margin.",
        ],
      },
      {
        heading: "Reporting",
        body: [
          "Monitoring runs continuously in the Investment Department and is reviewed by the Risk Department, with material developments reported to the Board Investment Committee each quarter. Where a portfolio company breaches one or more alert thresholds, the Investment Department prepares a written assessment of the risk, its potential impact on the Fund, and any proposed remedial or protective action.",
        ],
      },
    ],
  },
];

export function findInvestmentPage(slug: string) {
  return investmentPages.find((item) => item.slug === slug);
}

/** Criteria distilled from "What We Invest In" and "Our Investment Approach". */
export const criteria = [
  {
    label: "Geography",
    body: "Predominantly Rwanda, with the capacity to invest up to 30% of the portfolio outside the country.",
  },
  {
    label: "Sectors",
    body: "Sector-agnostic, with preference for ICT, financial services, transport and logistics, agriculture and agro-processing, and industrials and manufacturing.",
  },
  {
    label: "Asset classes",
    body: "Private and unlisted equity, plus sovereign and corporate fixed income, listed and unlisted.",
  },
  {
    label: "Track record",
    body: "At least three years in operation, profitable in two of them including the most recent year.",
  },
  {
    label: "Scale",
    body: "EBITDA of at least Frw 3 billion on revenue of at least Frw 10 billion, cash or near-cash generative.",
  },
  {
    label: "Ticket size",
    body: "Around Frw 10 billion, absorbable within one year, for a stake of at least 10% with board representation.",
  },
  {
    label: "Instruments",
    body: "Senior to junior debt, mezzanine, preferred shares, common equity tier 1, and convertible debt.",
  },
];

/** Values the Fund states in its own words, used as the key-strengths panel. */
export const strengths = [
  {
    title: "Dignity",
    body: "Agaciro means dignity. National savings invested with purpose and self-reliance.",
  },
  {
    title: "Long-term capital",
    body: "A long-term horizon that reduces Rwanda's debt burden and secures a better Rwanda for future generations.",
  },
  {
    title: "Commercial discipline",
    body: "Investing on a commercial basis, without undue risk, so returns build up public savings.",
  },
  {
    title: "Accountability",
    body: "Governed by a Board appointed by Cabinet and accountable through the Minister of Finance and Economic Planning.",
  },
];
