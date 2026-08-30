export const site = {
  name: "JALI Transport",
  phone: "+250 788 313 045",
  phoneHref: "tel:+250788313045",
  email: "info@jalitransport.rw",
  emailHref: "mailto:info@jalitransport.rw",
  addressKw: "Umurenge wa Muhima / Akarere ka Nyarugenge",
  addressEn: "Muhima Sector / Nyarugenge District",
} as const;

export const nav = [
  { href: "/", labelKw: "Ahabanza", labelEn: "Home" },
  { href: "/imihanda", labelKw: "Imihanda", labelEn: "Routes" },
  { href: "/pariki", labelKw: "Pariki", labelEn: "Parks" },
  { href: "/ibyerekeye", labelKw: "Ibyerekeye", labelEn: "About" },
  { href: "/twandikire", labelKw: "Twandikire", labelEn: "Contact" },
] as const;
