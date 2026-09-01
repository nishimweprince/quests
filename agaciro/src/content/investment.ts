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
          "We seek mid-stage growth companies that seek growth capital within Rwanda and outside Rwanda. We also seek to partner with fund managers who have established track records. We are looking for profitable, cash generating companies that have the capacity of declaring and paying a dividend within the short to medium term.",
          "We shy away from greenfield investments unless they are significantly de-risked through offtake supply implementation. We look for companies that have strong management and governance practices, with boards and audited financial statements.",
          "Companies should have the capacity to scale and crowd in other sources of capital outside of Agaciro Development Fund. We look at companies that have been in operation for at least 3 years and should have been profitable for at least 2 of those 3 years, including the most recent year. Their EBITDA should be at least Frw 3 billion, generating a revenue of at least Frw 10 billion. The company should also be cash or near-cash generative.",
          "In terms of ticket size, we look at an investment of about Frw 10 billion and the company should demonstrate the capacity to absorb it within one year. While there is no specific requirement in terms of the shareholding in companies we invest in, we need to have significant influence and oversight. As such, we look at tickets of at least 10% in the companies we invest in and board representation in them. We are also able to invest through syndication and co-investment structures.",
        ],
      },
      {
        heading: "Debt",
        body: ["Under fixed income, what we invest in:"],
        list: [
          "High quality yielding assets with significant downside protection. We consider a margin above the debt service coverage ratio of at least 1.3 times, debt-to-EBITDA of a maximum of 3 times, a debt-to-equity ratio specific to the industry, cash flow generation capacity of the business, and align the debt requirement to the generation of the business.",
          "Companies that have earnings that are naturally hedged against US Dollar depreciation.",
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
          "We use a broad category of instruments, ranging from debt — senior, secured, unsecured, subordinated, mezzanine and junior debt. Under equity, we invest in preferred shares, common equity tier 1, and convertible debt.",
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
          "For each investment, the Primary Impact Indicators and two Supporting Impact Indicators will be established and monitored to track alignment and overall development impact, ex-ante and ex-post. Indicative development impact indicators consistent with NST2 objectives may include employment creation, export growth and foreign exchange generation, domestic value addition and industrial development, and infrastructure capacity expansion. These indicators are intended to guide impact assessment at a high level while maintaining flexibility across sectors and investment types.",
          "We measure the developmental impact of our underlying portfolio companies through specific sector-assigned matrices which they are expected to meet.",
          "Our investment outcomes are aligned to the United Nations Sustainable Development Goals (UNSDGs).",
        ],
      },
      {
        heading: "Environmental, Social and Governance",
        body: [
          "Agaciro employs responsible investing practices that take into account environmental, social and governance (ESG) factors to manage risk and generate sustainable, long-term returns.",
          "Agaciro is committed to assessing and mitigating ESG-related risks and impacts within its investment portfolio. Accordingly, ESG-related risks and considerations will be incorporated across the investment process. Where appropriate, Agaciro may commission specialist external ESG consultants to support with the ESG Policy, due diligence and monitoring related processes.",
          "Furthermore, Agaciro will not invest in activities that are inconsistent with internationally recognized Environmental, Social, and Governance standards. In particular, the Fund will apply the IFC Exclusion List as a baseline screening tool and will refrain from investing in sectors or activities prohibited under this framework. This ensures that the portfolio avoids investments associated with significant environmental harm, illegal activities, or unacceptable social impacts.",
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
      "Investment risks relate to Agaciro's asset-by-asset view of risks, leveraged to evaluate whether individual investments are performing and whether risky positions are being adequately compensated for.",
    sections: [
      {
        body: [
          "Investment risks relate to Agaciro's asset-by-asset view of risks, leveraged to evaluate whether individual investments are performing and whether risky positions are being adequately compensated for. At the investment level, Agaciro's risk monitoring process is conducted through a combination of financial health metrics, structural indicators, and sector-specific considerations. For equity investments, focus is placed on operating cashflow generation, revenue growth, profitability margins (including EBITDA, EBIT, and net margin), dividend yield, and the viability of exit pathways. Key illustrative alert thresholds include Debt Service Coverage Ratio (DSCR), Debt/EBITDA multiples, interest coverage falling below a threshold, and any switch from positive to negative EBITDA margin, each of which would prompt a formal review of the relevant position. For debt investments, the primary metrics tracked include average Debt-to-EBITDA on a portfolio-weighted basis, interest coverage ratios, and exposure to floating versus fixed rate instruments.",
          "Beyond financial metrics, the Investment Department monitors a broader set of operational and structural risk indicators tailored to the nature of each investment. These include customer and counterparty concentration, working capital cycles, leverage relative to asset quality and collateral, debt service coverage and capacity utilisation. Specific attention will be paid to FX mismatches between hard-currency obligations and local-currency revenues, offtake and contractual arrangements underpinning long-dated assets, and any signals of margin compression or deteriorating asset quality that may serve as leading indicators of financial stress.",
          "Risk monitoring is conducted on an ongoing basis by the Investment Department and reviewed by the Risk Department, with material developments reported to the Board Investment Committee at each quarterly meeting. Where a portfolio company breaches one or more alert thresholds, the Investment Department will prepare a written assessment of the risk, its potential impact on the Fund, and any proposed remedial or protective action.",
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
