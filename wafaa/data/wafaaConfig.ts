export const wafaaConfig = {
  organizationName: "Women And Families Ascending Association",
  shortName: "WAFAA",
  primaryPhone: "973-766-2406",
  primaryPhoneHref: "tel:+19737662406",
  alternatePhones: ["201-925-1299", "973-766-3765"],
  email: "wafaa@wafaaorganization.org",
  emailHref: "mailto:wafaa@wafaaorganization.org",
  serviceArea: "Paterson and Wayne, New Jersey",
  logoUrl:
    "https://www.wafaaorganization.org/wp-content/uploads/2019/10/cropped-onlineimageresize_com_WAFAA_logo1.jpg",
  /** Set before launch — client intake form URL */
  intakeUrl: "",
  /** Set before launch — donation/payment URL */
  donationUrl: "",
  /** Set before launch — Arabic brochure PDF or page URL */
  arabicBrochureUrl: "",
  /** Set before launch — contact form API endpoint */
  contactFormEndpoint: "",
  socialLinks: {
    facebook: "",
    instagram: "",
    twitter: "",
  },
  siteUrl: "https://www.wafaaorganization.org",
} as const;

export type WafaaConfig = typeof wafaaConfig;
