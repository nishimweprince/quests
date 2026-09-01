export const copy = {
  hero: {
    title: "Transport",
    lead:
      "We aim to provide immediate and long term solutions to transportation needs in Kigali City and the rest of Rwanda.",
    welcome:
      "We welcome you to our official website and hope you find your visit pleasant. We encourage you to use it to assist you in finding information about Jali Transport.",
  },
  about: {
    title: "About Us",
    body: "JALI Transport Limited (JTL) is a subsidiary of JALI Investment Limited which is also an investment company of Rwanda Federation of Transport Cooperative (RFTC). JALI Transport was created to provide immediate and long term solutions to transportation needs in Kigali City and the rest of Rwanda.",
    holdings:
      "Jali Holdings aims at being the leading investment company. We provide efficient and effective management services in public transport, bus park construction and management as well as micro finance.",
  },
  services: {
    title: "Our Services",
    intro:
      "JTL has a primary activity which is improvement of travel conditions for those who use public transport in Rwanda. As such, our activities include:",
    items: [
      "Providing direct transportation services to the public",
      "Organizing transport systems in our areas of control",
      "Ensuring that all areas are provided with adequate public transport vehicles",
      "Ensuring that the standard of our services adhere to the general rules and procedures that govern the public transport sector",
      "Promoting the private sector by hiring transport vehicles from private investors",
      "Providing solutions to the current public transport problems such as increased traffic congestion in the city by replacing coasters and mini buses with larger city buses",
    ],
  },
  schedules: {
    title: "Transport Schedules",
  },
  projects: {
    title: "Our Projects",
  },
  cta: {
    title: "Let's Connect",
    body: "JALI Transport serves passengers across Kigali City and the rest of Rwanda.",
  },
} as const;

export type TeamMember = {
  name: string;
  role: string;
  excerpt: string;
  bio: string[];
};

export const leadership: TeamMember[] = [
  {
    name: "Twahirwa Innocent",
    role: "Managing Director",
    excerpt:
      "Innocent TWAHIRWA is the Managing Director of Jali Transport LTD since February 2019. Prior to his current position, he worked with different Government and Private institutions.",
    bio: [
      "Innocent TWAHIRWA is the Managing Director of Jali Transport LTD since February 2019. Prior to his current position, he worked with different Government and Private institutions including but not limited to Road Maintenance Fund (RMF) as Director General from January–March 2018, Rwanda Energy Group (REG) as the Head of Administration and Logistics from 2015–2018, Ministry of Infrastructure as Acting Advisor to the minister of Infrastructure from 2014–2015 and at National Bank of Rwanda (Central Bank) as an Accountant from 2013–2014.",
      "Mr. Innocent is an international development practitioner with a successful career progression in the areas of policy research and analysis, project management, government programs delivery/implementation, institutional/organizational reforms, strategic communications, international non-government organizations management and a sustainable development specialist. Nine (09) years of service has shaped his skills on national and global contemporary issues. Innocent has a track record of successfully managing Government businesses, coordination, advisory services and private exposure in business development.",
      "Mr. Innocent has studied in Rwanda and India. He obtained two Master's degrees from Annamalai University in India, i.e. Master of Business Administration with specialization in Finance and Marketing and Master of Arts in Economics. He also has a University degree in Economics.",
    ],
  },
  {
    name: "Odette MUKASHEMA",
    role: "HR & Administration Manager",
    excerpt:
      "MUKASHEMA Odette is the Human Resources and Administration Manager at Jali Transport Ltd. She joined Jali Transport Ltd in August 2017.",
    bio: [
      "MUKASHEMA Odette is the Human Resources and Administration Manager at Jali Transport Ltd. She joined Jali Transport Ltd in August 2017. Before joining JTL Ltd, she served as Human Resources Manager at Rwanda Federation of Transport Cooperatives (RFTC) from 2014–2017 and has resounding experience in Human Resources Management and Administration. Mrs. Odette has also experience in planning, implementing, and evaluating employee relations and human resources policies, programs, and practices.",
      "MUKASHEMA Odette has a Bachelor's Degree in Economics with specialization in money and banking from School of Finance and Banking at Kigali Independent University. She also has training in Computer appreciation program at Rwanda Revenue Authority, integrated personal and information system by MIFOTRA in collaboration with RIAM, and Smart Gov by MINECOFIN.",
    ],
  },
];

export const images = {
  hero: "/images/bus-aerial.jpg",
  about: "/images/kigali-community.jpg",
  services: "/images/bus-stop.jpg",
  landscape: "/images/kigali-hills.jpg",
} as const;
