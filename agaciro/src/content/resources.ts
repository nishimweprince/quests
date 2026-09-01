const FILE_ROOT = "https://www.agaciro.rw/fileadmin/user_upload";

export type ResourceFile = {
  title: string;
  year: string;
  size: string;
  href: string;
};

export type ResourceCategory = {
  slug: string;
  title: string;
  summary: string;
  files: ResourceFile[];
  /** Shown in place of the table when the Fund has published nothing yet. */
  emptyState: string;
};

const annualReports: ResourceFile[] = [
  {
    title: "2024 Annual Report and Financial Statements",
    year: "2024",
    size: "18 MB",
    href: `${FILE_ROOT}/Resources/Annual_Reports/Agdf_2024_signed_FS.pdf`,
  },
  {
    title: "2023 December Financial Statements",
    year: "2023",
    size: "10 MB",
    href: `${FILE_ROOT}/Resources/Annual_Reports/Financial_Statement_December_2023.pdf`,
  },
  {
    title: "2022 December Financial Statements",
    year: "2022",
    size: "11 MB",
    href: `${FILE_ROOT}/Resources/Annual_Reports/Financial_statement_Dec_2022.pdf`,
  },
  {
    title: "2022 June Financial Statements",
    year: "2022",
    size: "3 MB",
    href: `${FILE_ROOT}/Resources/Annual_Reports/FINANCIAL_STATEMENTS_JUNE_2022_REVIEWED.pdf`,
  },
  {
    title: "2021 Annual Report",
    year: "2021",
    size: "6 MB",
    href: `${FILE_ROOT}/Resources/Annual_Reports/Annual_Report_2021_-_Web.pdf`,
  },
  {
    title: "2021 December Financial Statements",
    year: "2021",
    size: "8 MB",
    href: `${FILE_ROOT}/Resources/Annual_Reports/Financial_Statements_December_2021.pdf`,
  },
  {
    title: "2021 June Financial Statements",
    year: "2021",
    size: "3 MB",
    href: `${FILE_ROOT}/Resources/Annual_Reports/FSJUNE2021.pdf`,
  },
  {
    title: "2020 Annual Report",
    year: "2020",
    size: "8 MB",
    href: `${FILE_ROOT}/Resources/Annual_Reports/2020_Agaciro_-_Annual_Report_For_Web.pdf`,
  },
  {
    title: "2020 December Financial Statements",
    year: "2020",
    size: "8 MB",
    href: `${FILE_ROOT}/Resources/Annual_Reports/FSDEC2020.pdf`,
  },
  {
    title: "2019 September Financial Statements",
    year: "2019",
    size: "8 MB",
    href: `${FILE_ROOT}/Resources/Annual_Reports/Financial_Statements_September_2019.pdf`,
  },
  {
    title: "2019 Statement of Financial Position",
    year: "2019",
    size: "164 KB",
    href: `${FILE_ROOT}/Resources/Annual_Reports/Statement_of_Financial_Position.pdf`,
  },
  {
    title: "2019 Profit and Loss",
    year: "2019",
    size: "136 KB",
    href: `${FILE_ROOT}/Resources/Annual_Reports/Profit_and_loss.pdf`,
  },
  {
    title: "2018 Annual Report and Financial Statements",
    year: "2018",
    size: "5 MB",
    href: `${FILE_ROOT}/Resources/Annual_Reports/AGDF_Annual_Report_and_Financial_Statements__June_2018.pdf`,
  },
  {
    title: "2017 June Annual Report and Financial Statements",
    year: "2017",
    size: "6 MB",
    href: `${FILE_ROOT}/Resources/Annual_Reports/AGDF_Annual_Report_and_Financial_Statements__June_2017.pdf`,
  },
  {
    title: "2016/17 Annual Report",
    year: "2017",
    size: "19 MB",
    href: `${FILE_ROOT}/Resources/Annual_Reports/AGDF_Annual_Report_2016_17_Final_28th_Dec.pdf`,
  },
  {
    title: "2016 June Financial Statements",
    year: "2016",
    size: "5 MB",
    href: `${FILE_ROOT}/Resources/Annual_Reports/AGDF_Financial_Statements_End_June_2016.pdf`,
  },
  {
    title: "2014 Annual Report and Financial Statements",
    year: "2014",
    size: "4 MB",
    href: `${FILE_ROOT}/Resources/Annual_Reports/AGDF_Annual_Report_and_Financial_Statements_end_June_2014%40.pdf`,
  },
];

export const resourceCategories: ResourceCategory[] = [
  {
    slug: "annual-report",
    title: "Annual Reports",
    summary:
      "Audited annual reports and financial statements, published since the Fund's first full year of operation.",
    files: annualReports,
    emptyState: "",
  },
  {
    slug: "publications",
    title: "Publications",
    summary:
      "Research notes, position papers, and other material the Fund publishes on its investment activity.",
    files: [],
    emptyState: "No publications have been posted yet. Check back soon.",
  },
  {
    slug: "policies",
    title: "Policies",
    summary:
      "The governance, investment, and ESG policies that guide how the Fund manages national savings.",
    files: [],
    emptyState: "No policies have been posted yet. Check back soon.",
  },
];

export type Tender = {
  title: string;
  location: string;
  deadlines: { label: string; value: string }[];
  href: string;
  hrefLabel: string;
};

export const tenders: Tender[] = [
  {
    title: "Branding & Interior Decoration Consultancy",
    location: "Kigali, Rwanda",
    deadlines: [
      { label: "Expression of interest", value: "14 August 2026, 10:00 AM" },
      { label: "Final proposal", value: "03 September 2026" },
    ],
    href: `${FILE_ROOT}/REQUEST_FOR_EXPRESSION_OF_INTEREST__Agdf.pdf`,
    hrefLabel: "Request for Expression of Interest (PDF)",
  },
];

export function findResourceCategory(slug: string) {
  return resourceCategories.find((item) => item.slug === slug);
}
