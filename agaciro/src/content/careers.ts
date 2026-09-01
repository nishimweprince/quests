export type Vacancy = {
  slug: string;
  title: string;
  department: string;
  location: string;
  deadline: string;
  href: string;
};

export const careersIntro =
  "Agaciro Development Fund manages national savings on behalf of the people of Rwanda. We look for people who bring commercial rigour, sound judgement, and a long-term view of what this country can build.";

export const vacancies: Vacancy[] = [
  {
    slug: "investment-manager",
    title: "Investment Manager",
    department: "Investments",
    location: "Kigali, Rwanda",
    deadline: "28 August 2026, 5:00 PM",
    href: "https://www.agaciro.rw/fileadmin/user_upload/Investment_Manager_Profile_revised.pdf",
  },
];
