import { personPortraits } from "./media";

export type PersonKind = "board" | "exec" | "team";

export type Person = {
  name: string;
  role: string;
  kind: PersonKind;
  slug: string;
  /** Opening line used on cards and index pages. */
  summary: string;
  /** Full biography, one entry per paragraph. */
  bio: string[];
  /** Verified official headshot. Omit when unavailable to show initials. */
  image?: string;
  /** Personal handles, where the Fund publishes them. */
  linkedin?: string;
  twitter?: string;
  email?: string;
};

export const board: Person[] = [
  {
    name: "Mr. Scott T. Ford",
    role: "Board Chairman",
    kind: "board",
    slug: "scott-t-ford",
    image: personPortraits["scott-t-ford"],
    summary:
      "Co-founder and Chief Executive Officer of Westrock Group, the private investment firm he founded with his father in 2013.",
    bio: [
      "Mr Ford is co-founder and Chief Executive Officer of Westrock Group, LLC, a private investment firm he founded with his father in 2013. Westrock Group operates Westrock Asset Management, LLC, an alternative asset management firm, and Westrock Coffee Company, LLC, a vertically-integrated coffee company. Mr. Ford serves as Chief Executive Officer and Chief Investment Officer of Westrock Asset Management and as Chairman and Chief Executive Officer of Westrock Coffee Company.",
      "He holds a Bachelor of Science in Business Administration in Finance from the University of Arkansas, Fayetteville, Arkansas.",
    ],
  },
  {
    name: "Dr. Thierry Mihigo Kalisa",
    role: "Board Vice-Chairman",
    kind: "board",
    slug: "thierry-mihigo-kalisa",
    image: personPortraits["thierry-mihigo-kalisa"],
    summary:
      "Chief Economist and Executive Director of the Monetary Policy and Research Directorate at the National Bank of Rwanda.",
    bio: [
      "Dr. Thierry Kalisa is Chief Economist and Executive Director Monetary Policy and Research Directorate at the National Bank of Rwanda, Rwanda's Central Bank.",
      "His work covers economic research, modeling, monetary policy formulation among other things. Prior to this appointment, Dr. Kalisa was Senior Economist, Head of the Macroeconomic Policy Division in the Ministry of Finance and Economic Planning.",
      "He graduated from University Lyon 2, France, with a PhD in Economics and has teaching experience for various economic courses.",
    ],
  },
  {
    name: "Mrs. Doreen G. Karake",
    role: "Board Member",
    kind: "board",
    slug: "doreen-g-karake",
    image: personPortraits["doreen-g-karake"],
    summary:
      "Investment negotiator and transactions advisory expert leading the Transactions Structuring and Support division at the Rwanda Development Board.",
    bio: [
      "Ms Karake is an experienced Investment Negotiator and Transactions Advisory Expert. She is currently working with the Transactions Structuring and Support (TSS) Division at the Rwanda Development Board, and leads the team. The TSS is the government's de facto investment negotiations team. The team negotiates strategic investments including PPPs in different sectors such as Energy, Mining, Infrastructure, ICT and Agriculture.",
      "Prior to that, she was the Company Secretary and Director of Legal Affairs at Ngali Holdings. She served as a Board Member of the Rwanda Social Security Board and is currently serving on the Board of Directors of the Special Guarantee Fund.",
      "She holds an MBA with the Heriot-Watt University (Edinburgh Business School), an LLM and LLB from the University of Witwatersrand, and a B-juris from the University of Namibia.",
    ],
  },
  {
    name: "Mrs. Jeanne Francoise Mubiligi",
    role: "Board Member",
    kind: "board",
    slug: "jeanne-francoise-mubiligi",
    image: personPortraits["jeanne-francoise-mubiligi"],
    summary:
      "Deputy Managing Director of a construction company and Chairperson of the Chamber of Women Entrepreneurs Rwanda.",
    bio: [
      "Mrs Mubiligi is currently Deputy Managing Director of a construction company with over eight years of managerial experience of working for major companies, with proven results of developing maximum sales and profitability.",
      "Mrs Mubiligi is the Chairperson of the Chamber of Women Entrepreneurs Rwanda.",
      "She holds a Masters in International Business Development from Université de Neuchâtel and a Bachelor's degree in management, option in informative system management, from the same university.",
    ],
  },
  {
    name: "Mr. Aimé Ngarukiyintwali",
    role: "Board Member",
    kind: "board",
    slug: "aime-ngarukiyintwali",
    image: personPortraits["aime-ngarukiyintwali"],
    summary:
      "Head of Structured Credit at Mount Street Portfolio Advisers, with over 20 years in investment banking and portfolio management.",
    bio: [
      "Mr Ngarukiyintwali has over 20 years of experience in investment banking, financial advisory and portfolio management gained at Dresdner Bank, Deutsche Bank and Westdeutsche Landesbank (WestLB). He is currently Head of Structured Credit at Mount Street Portfolio Advisers, an independent financial advisory and portfolio management firm with offices in London, Düsseldorf, New York, Atlanta, Madrid and Athens.",
      "He is an expert in securitization, a technique that consists in pooling various types of receivables (residential mortgages, auto loans, credit cards, commercial real estate loans and leveraged loans) in order to originate marketable asset backed securities (ABS) for funding or regulatory capital optimization purposes. He has structured various types of ABS products as well as managed large portfolios of ABS.",
      "Mr Ngarukiyintwali holds a Master of Science in Mathematical Trading and Finance from the CASS Business School of the City University London, a Master Degree in Business (Diplom-Kaufmann) from the University of Mannheim, Germany, an executive training certificate in Finance from INSEAD and a Diplôme International de Management from the Institut Commercial de Nancy, France.",
    ],
  },
  {
    name: "Mr. Andrew Rozanov",
    role: "Board Member",
    kind: "board",
    slug: "andrew-rozanov",
    image: personPortraits["andrew-rozanov"],
    summary:
      "Independent expert in institutional fund management who originated the term “sovereign wealth funds” in 2005.",
    bio: [
      "Mr Rozanov is an independent expert in institutional fund management, with 25 years of practical experience in global financial markets. Originator of the term “sovereign wealth funds”, author of various SWF-related papers, and editor of two acclaimed books: Global Macro and Tail Risk Hedging (from Risk Books).",
      "During 2016–19, he served as an Independent Non-Executive Director and Chairman of the Board of the National Investment Corporation of the National Bank of Kazakhstan, which is one of the country's sovereign wealth funds.",
      "Previously, Andrew was Associate Fellow in the International Economics Program at Chatham House, where he was researching Abenomics. Prior to that, he worked at Permal Group, where he was responsible for advising institutional investors on asset allocation, portfolio construction, risk management and alternative investments, focusing on global macro and tail risk strategies. Before that, he worked at State Street Corporation and UBS Investment Bank, in Tokyo and in London.",
      "Mr Rozanov is a Chartered Financial Analyst (CFA), a Financial Risk Manager (FRM), and a Chartered Alternative Investment Analyst (CAIA).",
    ],
  },
];

export const executives: Person[] = [
  {
    name: "Ulrich Kayinamura",
    role: "Chief Executive Officer",
    kind: "exec",
    slug: "ulrich-kayinamura",
    image: personPortraits["ulrich-kayinamura"],
    summary:
      "Leads the Fund's mandate of preserving and growing national wealth through strategic, long-term investments.",
    bio: [
      "Ulrich is the Chief Executive Officer of Agaciro Development Fund, Rwanda's sovereign wealth fund, where he leads the Fund's mandate of preserving and growing national wealth through strategic, long-term investments.",
      "He brings over a decade of experience in investment management, corporate finance, and governance, with a strong focus on portfolio development, financial sector deepening, and capital markets development. Ulrich plays an active role in shaping Rwanda's investment ecosystem and advancing strategic partnerships across Africa's sovereign and institutional investor community.",
      "In addition to his executive responsibilities, he serves on the boards of several leading institutions and contributes to the advancement of governance excellence, capital markets development, and long-term institutional investment across the region.",
      "Ulrich holds a Master of Science in Business Administration from the University of Groningen (The Netherlands). He is a CFA Charterholder and Financial Risk Manager (FRM), and has completed the Senior Executive Program for Africa (SEPA) at Harvard Business School. He also holds the Certificate in Company Direction from the Institute of Directors (IoD), UK, reflecting his commitment to leadership, governance excellence, and global best practices.",
    ],
  },
  {
    name: "Ismael Amri Sued",
    role: "Chief Legal Officer and Company Secretary",
    kind: "exec",
    slug: "ismael-amri-sued",
    image: personPortraits["ismael-amri-sued"],
    summary:
      "Oversees Agaciro's legal, governance and corporate affairs, combining legal expertise with a commercially minded approach.",
    bio: [
      "Ismael serves as Chief Legal Officer and Company Secretary, overseeing Agaciro's legal, governance and corporate affairs. He combines strong legal expertise with a commercially minded and pragmatic approach to supporting the institution's strategic objectives.",
      "Prior to joining Agaciro, Ismael advised a broad range of corporations and institutions on commercial and corporate matters, mergers and acquisitions, regulatory issues, and investment fund structuring, both in private practice and as in-house counsel in Rwanda. At the international level, he has worked with and advised development finance institutions, including the World Bank and USAID, as well as governments on the negotiation and implementation of major development projects.",
      "Ismael holds a postgraduate degree in Business Law from the University of Lyon and is a non-practising member of the Rwanda Bar Association and the Institute of Business Advisers Southern Africa.",
    ],
  },
  {
    name: "Nathaniel Nyika",
    role: "Chief Investment Officer",
    kind: "exec",
    slug: "nathaniel-nyika",
    image: personPortraits["nathaniel-nyika"],
    summary:
      "Brings over 25 years of investment experience transacting across Sub-Saharan African markets.",
    bio: [
      "Nathaniel is the Chief Investment Officer at Agaciro Development Fund (AgDF), Rwanda's sovereign wealth fund. Prior to joining Agaciro, he was the Chief Investment Officer at Norsad Capital, a Botswana-domiciled regional impact investor and private credit provider, specialising in structured debt solutions to companies across Southern and Eastern Africa.",
      "He brings over 25 years of investment experience of transacting across Sub-Saharan African markets including the key African markets of Kenya, Ivory Coast, Nigeria, Ghana and South Africa, as well as multiple frontier markets. His experience spans private equity, private debt and credit (including structured debt and mezzanine), investment banking, hedge fund management and listed securities research and trading. He has covered a wide range of sectors including financial services (banking and NBFIs), infrastructure (IPPs, digital and soft infrastructure, including education and healthcare), the food value chain, industrials and manufacturing, affordable housing and hospitality. His investment approach is grounded in impact investing, with a focus on delivering sustainable financial returns alongside measurable developmental outcomes.",
      "Nathaniel holds a Master's in Business Administration (cum laude) from the University of Witwatersrand, Wits Business School and a BSc (Hons) in Electrical Engineering. He studied Executive Leadership at Saïd Business School, University of Oxford and is a Certified Business Rescue Analyst (CRA).",
    ],
  },
];

export const teamMembers: Person[] = [
  {
    name: "Jerry Ntare",
    role: "Senior Manager Government Relations & Partnerships",
    kind: "team",
    slug: "jerry-ntare",
    image: personPortraits["jerry-ntare"],
    summary:
      "Leads public sector engagement, strategic partnerships, and resource mobilization in support of national development priorities.",
    bio: [
      "Jerry is a seasoned executive with over 16 years of cross-sector experience spanning banking, investment holding, and development finance. He currently serves as Senior Manager, Government Relations & Partnerships at Agaciro Development Fund (AgDF), where he leads public sector engagement, strategic partnerships, and resource mobilization initiatives in support of national development priorities.",
      "Throughout his career, Jerry has developed expertise in operational leadership, investment analysis, procurement management, and financial strategy. He has led initiatives in investment origination, financial modelling, valuation, and procurement reform, while also providing strategic governance support to AgDF's portfolio companies.",
      "Jerry is a Certified Director through the Institute of Directors and holds an Executive Master's in Financial Services Industry (FICP), as well as a Bachelor of Business Administration in Finance.",
    ],
  },
  {
    name: "Bienfait Banaga",
    role: "Ag. Chief Finance and Administrative Officer",
    kind: "team",
    slug: "bienfait-banaga",
    image: personPortraits["bienfait-banaga"],
    summary:
      "Certified Public Accountant with over 14 years of progressive experience in finance across non-profit, public and private organisations.",
    bio: [
      "Mr. Bienfait is a Certified Public Accountant with over 14 years of progressive experience in finance, gained across non-profit organizations, public institutions, and private sector companies. Throughout his career, he has built strong expertise in financial management, financial reporting, analysis, and corporate governance.",
      "Mr. Bienfait has extensive leadership experience and has held several senior finance positions, including Accountant, Finance Manager, and Acting Chief Finance Officer for more than three years. His strengths lie in financial reporting and analysis, strategic financial management, and strong leadership capabilities.",
      "In addition to his executive finance experience, Mr. Bienfait has served as a Board Member for companies operating in various sectors, including data centers, food processing, tea production, and education. His board experience has strengthened his understanding of corporate governance, risk management, and organizational oversight.",
      "Mr. Bienfait is a member in good standing of the Institute of Certified Public Accountants of Rwanda (ICPAR). He holds a Master's Degree in Finance from the Adventist University of Central Africa (AUCA) and a Bachelor's Degree in Finance. He is also a Certified Public Accountant and has obtained a certification in Financial Management Industry from the Luxembourg School of Business.",
    ],
  },
  {
    name: "Zackiah Nandugwa",
    role: "Senior Legal Officer",
    kind: "team",
    slug: "zackiah-nandugwa",
    image: personPortraits["zackiah-nandugwa"],
    summary:
      "Corporate and commercial law professional supporting institutional governance, regulatory compliance, and strategic decision-making.",
    bio: [
      "Zackiah is an accomplished corporate and commercial law professional with extensive experience advising public and private institutions on complex commercial, regulatory, and strategic matters. Currently serving as Senior Legal Officer at AGDF Corporate Trust, she plays a pivotal role in supporting institutional governance, regulatory compliance, and strategic corporate decision-making. With a strong background in corporate and commercial law, as well as financial sector regulation, she has developed expertise in board advisory, business structuring, contract negotiation, policy and regulatory review and drafting, compliance oversight, legal due diligence, and dispute management. Her work has consistently focused on strengthening institutional integrity, ensuring legal and regulatory alignment, and supporting sustainable organizational growth.",
      "Prior to joining AGDF Corporate Trust, she served as an Associate at K-Solutions & Partners, a general business law firm, where she advised corporate clients on commercial transactions, governance matters, and legal risk management. Earlier experience at the National Bank of Rwanda further strengthened her understanding of financial sector regulation and institutional compliance frameworks.",
      "She serves as a Director on the boards of several companies across diverse sectors, providing strategic oversight and promoting sound corporate governance, regulatory compliance, and sustainable business growth. She holds a Bachelor's degree in Law (First Class Hons), a Postgraduate Diploma in Legal Practice, a Diploma in International Financial Reporting Standards from ACCA UK, and is currently pursuing an LLM in International Commercial and Investment Law.",
    ],
  },
  {
    name: "Charles Ndahimana",
    role: "Senior Investment Analyst",
    kind: "team",
    slug: "charles-ndahimana",
    image: personPortraits["charles-ndahimana"],
    summary:
      "Over seven years of experience in investments, portfolio and business analysis, and valuation.",
    bio: [
      "Charles is the Senior Investment Analyst for Agaciro Development Fund where he has amassed over 7 years of robust experience in investments, portfolio, and business analysis and valuation. Before joining Agaciro, he worked for various institutions including the Institute of Legal Practice and Development (ILPD), Office of the Government Spokesperson (OGS), Rwanda National Investment Trust Ltd (RNIT) and Iterambere Fund.",
      "As a trusted leader in corporate governance, he also provides strategic oversight to several high-level boards, currently serving as a Board Member and Audit Committee Chairman for Mayange Rice Company Ltd. He also served as Audit Committee member of the Ministry of ICT and Innovation for a period of 6 years and its Chairman for 3 years.",
      "Charles holds ACCA and CPA® qualifications and is a Certified Financial Modeling & Valuation Analyst (FMVA®) and certified Capital Markets & Securities Analyst (CMSA®). He also has a bachelor's degree in Accounting while currently pursuing his MBA in Strategic Management and CFA qualification.",
    ],
  },
  {
    name: "Felicien Rimenyande",
    role: "Senior IT Officer",
    kind: "team",
    slug: "felicien-rimenyande",
    image: personPortraits["felicien-rimenyande"],
    summary:
      "Over 12 years of expertise in digital transformation, data governance, and systems integration.",
    bio: [
      "Felicien is an accomplished IT professional with over 12 years of expertise in digital transformation, data governance, and systems integration. He has contributed to various projects, including development of Social Registries, disability management information systems (MIS), and multi-sector digital solutions in health, education, energy, and social protection at both the national and international levels.",
      "His consultancy experience extends to over 12 countries across multiple regions supporting various international organizations: development of data systems, delivering AI solutions, SDG monitoring dashboards, digital training, and digital capacity assessments.",
      "He holds a Master's degree in Information Technology (University of Madras) and certifications in emerging and digital technologies, data analytics and business intelligence, project management and UN Systems & Humanitarian certifications.",
      "He maintains strong competencies in data systems development, data analytics, AI systems, and scalable digital infrastructures, capabilities that support evidence-based decision-making, data-driven portfolio management, and investment transparency.",
    ],
  },
  {
    name: "Lilian S. Mutesi",
    role: "People and Culture Manager",
    kind: "team",
    slug: "lilian-s-mutesi",
    image: personPortraits["lilian-s-mutesi"],
    summary:
      "Over 14 years of experience in human capital, organizational development, talent management, and performance improvement.",
    bio: [
      "Lilian is an experienced People and Organizational Development practitioner with over 14 years of experience in human capital, organizational development, talent management, and performance improvement. Throughout her career, she has led transformative initiatives in culture change, leadership development, workforce planning, performance management, and skills development across the financial services and manufacturing sectors.",
      "She partners with leadership to design and implement people strategies that enhance organizational effectiveness, strengthen employee experience, and cultivate high-performing workplace cultures aligned with business objectives.",
      "She is currently pursuing a Master of Business Administration (MBA). Lilian is also a Certified Professional Coach and Certified Trainer. She is passionate about developing leaders, empowering teams, and driving sustainable organizational growth through innovative and practical people solutions that create lasting impact.",
    ],
  },
  {
    name: "Valentine Nyinawumuntu",
    role: "Investment Analyst",
    kind: "team",
    slug: "valentine-nyinawumuntu",
    image: personPortraits["valentine-nyinawumuntu"],
    summary:
      "Supports investment evaluation, portfolio monitoring, and value creation initiatives across the Fund's portfolio.",
    bio: [
      "Valentine is an investment professional serving as Investment Analyst at Agaciro Development Fund, where she supports investment evaluation, portfolio monitoring, and value creation initiatives across the Fund's portfolio.",
      "With over five years of experience across various industries in the private sector, she previously served as an Investment Analyst at Macefield Ventures Ltd and attended the Analyst Program at Admaius Capital Partners, where she gained exposure to Pan-African investment opportunities and transaction analysis.",
      "Valentine is FMVA® certified and holds a Bachelor's Honours Degree in Finance from the University of Kigali.",
    ],
  },
  {
    name: "Benjamin Igeno",
    role: "Senior Investment Analyst",
    kind: "team",
    slug: "benjamin-igeno",
    image: personPortraits["benjamin-igeno"],
    summary:
      "Specialises in financial modeling, valuation, due diligence, and investment analysis across African markets.",
    bio: [
      "Benjamin is a Senior Investment Analyst with over four years of experience spanning investment management, corporate finance, and audit across African markets. He specializes in financial modeling, valuation, due diligence, and investment analysis, with investment exposure across Rwanda, Zimbabwe, Mozambique, Zambia, and the Republic of Congo.",
      "He began his career in audit and assurance, serving leading financial institutions, development organizations, and public sector entities. He brings a collaborative and adaptable approach to his work, supported by a strong analytical mindset and a commitment to learning quickly while integrating effectively with diverse teams.",
      "Benjamin holds a Bachelor's Degree in Accounting and is a Certified Public Accountant (CPA), FMVA certificate holder and CFA Level II candidate.",
    ],
  },
  {
    name: "Elise Ntamitondero",
    role: "Investment Manager",
    kind: "team",
    slug: "elise-ntamitondero",
    image: personPortraits["elise-ntamitondero"],
    summary:
      "Oversees portfolio management activities and serves as a Board Director on several portfolio companies.",
    bio: [
      "Elise is a seasoned finance and investment professional serving as Investment Manager at Agaciro Development Fund, where she oversees portfolio management activities, combining rigorous analysis with strategic thinking to deliver sustainable value. She also serves as a Board Director on the boards of some portfolio companies, providing strategic oversight and governance expertise.",
      "With nearly two decades of experience spanning auditing, accounting, and investment management, Elise brings deep and well-rounded expertise to her work. Guided by a strong belief that sound financial stewardship underpins sustainable growth, she combines analytical rigor with a collaborative approach to leadership.",
      "Before joining Agaciro Development Fund in 2018, Elise advanced from Assistant Auditor to Audit Director at the Office of the Auditor General of Rwanda (OAG). Earlier in her career, she served as an Accountant at OCIR Café.",
      "Elise is a member of ACCA and ICPAR, and she also holds the FMVA® and FICP professional qualifications, as well as a Bachelor of Accounting from the Kigali Institute of Sciences, Technology and Management (KIST).",
    ],
  },
  {
    name: "Sedar Sagamba",
    role: "IT Officer",
    kind: "team",
    slug: "sedar-sagamba",
    image: personPortraits["sedar-sagamba"],
    summary:
      "Over eight years safeguarding the digital infrastructure of Rwanda's sovereign wealth fund.",
    bio: [
      "Sedar is a seasoned IT and cybersecurity professional with over eight years of experience safeguarding the digital infrastructure of the Agaciro Development Fund, Rwanda's sovereign wealth fund, an institution where data integrity and security are of the highest national importance.",
      "In his role as IT Officer, Sedar oversees network management, cybersecurity operations, and systems optimization, bringing a strong understanding of risk management, data governance, and IT alignment within a highly regulated financial environment.",
      "His expertise is backed by a portfolio of internationally recognized certifications spanning cybersecurity, ethical hacking, and advanced networking including the CISSP, CEH, CCNP, CCNA, and CND.",
      "A graduate of Saint Lawrence University, he combines technical depth with a strategic mindset, bridging day-to-day IT operations with long-term institutional security goals.",
    ],
  },
  {
    name: "Sabine Iradukunda Mugunga",
    role: "Senior Risk and Compliance Manager",
    kind: "team",
    slug: "sabine-iradukunda-mugunga",
    image: personPortraits["sabine-iradukunda-mugunga"],
    summary:
      "Provides board-level support to strengthen governance, compliance, and enterprise risk oversight.",
    bio: [
      "Sabine is the Senior Risk and Compliance Manager at Agaciro Development Fund. She provides strategic and board-level support to strengthen governance, compliance, and enterprise risk oversight, ensuring the Fund's portfolio remains resilient, transparent, and aligned with Rwanda's national development priorities and long-term sovereign investment objectives.",
      "With over six years of experience in risk management, compliance, and financial governance, she leads Agaciro's risk and compliance function. In this role, she drives institutional integrity and safeguards sovereign assets through robust frameworks, proactive risk mitigation, and adherence to international best practices. Her expertise spans governance, regulatory compliance, internal controls, and enterprise risk management.",
      "She is a Certified Risk and Compliance Management Professional (CRCMP) and a PECB Certified ISO 31000 Lead Risk Manager. She holds a Bachelor's degree in Accounting, Economics, and Business Studies from Kigali Independent University and is currently pursuing a Master of Business Administration (MBA) in Project Management at the University of Kigali.",
    ],
  },
  {
    name: "Cliff Hakizabera",
    role: "Executive Advisor to the CEO",
    kind: "team",
    slug: "cliff-hakizabera",
    image: personPortraits["cliff-hakizabera"],
    summary:
      "Provides executive support to strengthen the Fund's governance, partnerships, and long-term investment objectives.",
    bio: [
      "Cliff is the Executive Advisor to the CEO, providing executive support to strengthen the Fund's governance, partnerships, and long-term investment objectives. He works closely with the CEO to drive operational excellence and position Agaciro as a key contributor to Rwanda's economic resilience and sovereign wealth ecosystem.",
      "With over 15 years of experience in the financial services industry, Cliff brings deep expertise across strategic planning, implementation, and business analysis. His career includes more than eight years at a leading financial software company, where he served both as an Accountant and as a Financial Software Specialist, supporting the implementation of enterprise software platforms across North America while learning key business processes and implementing best practices to drive efficiency and effectiveness.",
      "Cliff holds a Master of Business Administration (MBA) from Oklahoma Christian University, membership in the Delta Mu Delta honor society and a Bachelor of Science in Business Administration from Milligan College.",
    ],
  },
  {
    name: "Prince Ntwari",
    role: "Investment Analyst",
    kind: "team",
    slug: "prince-ntwari",
    image: personPortraits["prince-ntwari"],
    summary:
      "Supports investment evaluation, financial analysis, portfolio monitoring, and strategic investment initiatives.",
    bio: [
      "Prince currently serves as an Investment Analyst at Agaciro Development Fund (AgDF), where he supports investment evaluation, financial analysis, portfolio monitoring, and strategic investment initiatives aligned with the Fund's mandate.",
      "Prior to joining AgDF, he gained seven years of experience across the pension, investment management, and financial services sectors, building expertise in investment analysis, financial markets (equity and debt), financial modeling, valuation, portfolio management, and investment decision-making.",
      "Prince holds a Bachelor's degree in Accounting from the University of Rwanda and is a Certified Public Accountant (CPA). He is also a certified Financial Modeling and Valuation Analyst (FMVA), reflecting his strong technical foundation in financial analysis and investment management.",
    ],
  },
  {
    name: "Sandrine Isimbi Butera",
    role: "Administrative Officer",
    kind: "team",
    slug: "sandrine-isimbi-butera",
    image: personPortraits["sandrine-isimbi-butera"],
    summary:
      "Supports the Fund's administrative operations and the efficient coordination of institutional activities.",
    bio: [
      "Sandrine serves as the Administrative Officer at Agaciro Development Fund (AgDF), Rwanda's sovereign wealth fund, where she supports the Fund's administrative operations and contributes to the efficient coordination of institutional activities.",
      "Prior to joining AgDF, Sandrine built a diverse professional background across the healthcare, energy, infrastructure, and events management sectors, gaining experience in administration, operations coordination, stakeholder engagement, and organizational support.",
      "She is a certified Project Management Professional (PMP) accredited by the Project Management Institute (PMI) in the USA and holds a Bachelor's degree in Business Administration with specialization in General Management from the Adventist University of Central Africa (AUCA).",
    ],
  },
  {
    name: "Landry Girinshuti",
    role: "Senior Accountant",
    kind: "team",
    slug: "landry-girinshuti",
    image: personPortraits["landry-girinshuti"],
    summary:
      "Corporate finance and accounting professional with over nine years across financial services, energy, and logistics.",
    bio: [
      "Landry, CPA(R), FMVA, is a seasoned corporate finance and accounting professional currently serving as Senior Accountant at AGDF Corporate Trust Ltd. He is a member of the Institute of Certified Public Accountants of Rwanda (ICPAR) and holds the Financial Modeling and Valuation Analyst (FMVA) certification.",
      "With over nine years of progressive professional experience, Landry has built a strong track record in financial reporting and analysis, financial modeling, forecasting, budgeting, and supporting strategic business decision-making through data-driven insights. He possesses extensive expertise in audit, taxation, statutory compliance, financial systems, and process improvement, with a strong focus on enhancing operational efficiency and strengthening internal controls.",
      "His professional experience spans diverse industries including financial services, petroleum and energy, transport and logistics, and professional accounting services. Prior to his current role, he served as Chief Accountant at Rubis Energy Rwanda Ltd and Senior Accountant at Limoz Rwanda Ltd, where he played a key role in financial management, compliance, reporting, and business performance optimization.",
    ],
  },
  {
    name: "Keith Ntagozera",
    role: "Senior PR and Communications Officer",
    kind: "team",
    slug: "keith-ntagozera",
    image: personPortraits["keith-ntagozera"],
    summary:
      "Specialises in strategic communication, brand positioning, stakeholder engagement, and digital storytelling.",
    bio: [
      "Keith is a marketing, communications, and public relations professional with over 10 years of experience across banking, development finance, media and advertising sectors. He specializes in strategic communication, brand positioning, stakeholder engagement, and digital storytelling, helping organizations strengthen their visibility and connect meaningfully with their audiences. Passionate about impactful communication, Keith combines creativity and strategic insight to deliver compelling narratives that support institutional growth and reputation.",
      "He is a certified ISO 22301 Lead Implementer, and holds a bachelor's degree in business administration from the University of Rwanda.",
    ],
  },
];

export const team = [...executives, ...teamMembers];
export const people = [...board, ...team];

export const leadership = [
  executives[0],
  board[0],
  executives[2],
  board[1],
] as Person[];

export function findPerson(slug: string) {
  return people.find((item) => item.slug === slug);
}

export const boardIntro =
  "Agaciro Development Fund is governed by a Board of Directors whose membership is approved by Cabinet. The Board is accountable to the Government of Rwanda, through the Minister of Finance and Economic Planning, for ensuring the Fund complies with the law and the highest standards of corporate governance. Its overarching role is to provide professional, transparent and accountable management of the Fund so that it benefits generations of Rwandans.";
