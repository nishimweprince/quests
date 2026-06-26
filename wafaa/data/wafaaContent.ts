import { wafaaConfig } from "./wafaaConfig";

export const navLinks = [
  { label: "Services", href: "#services" },
  { label: "How We Help", href: "#how-to-get-help" },
  { label: "About WAFAA", href: "#about" },
  { label: "Get Involved", href: "#get-involved" },
  { label: "Contact", href: "#contact" },
  { label: "FAQ", href: "#faq" },
] as const;

export const missionStatement =
  "Our mission is to strengthen families and the community through education in order to reduce isolation, build connections within and between families, and throughout the community.";

/** Real WAFAA slider photos (hotlinked). Replace alt text with accurate
 *  descriptions when known; an empty `src` renders a placeholder tile. */
export const heroCarousel: { src: string; alt: string }[] = [
  {
    src: "https://www.wafaaorganization.org/wp-content/uploads/2015/11/wafaa-800x500.jpg",
    alt: "WAFAA community gathering",
  },
  {
    src: "https://www.wafaaorganization.org/wp-content/uploads/2015/08/10300308_614270075358749_453014742058280271_n-800x500.jpg",
    alt: "WAFAA community event",
  },
  {
    src: "https://www.wafaaorganization.org/wp-content/uploads/2015/07/slideShow-13-800x500.jpg",
    alt: "WAFAA community program",
  },
  {
    src: "https://www.wafaaorganization.org/wp-content/uploads/2015/07/slideShow-17-800x500.jpg",
    alt: "WAFAA community program",
  },
  {
    src: "https://www.wafaaorganization.org/wp-content/uploads/2015/07/slideShow-19-800x500.jpg",
    alt: "WAFAA community program",
  },
  {
    src: "https://www.wafaaorganization.org/wp-content/uploads/2015/07/slideShow-21-800x500.jpg",
    alt: "WAFAA community program",
  },
];

/** Real WAFAA photo for the About/Community section. */
export const aboutImage = {
  src: "https://www.wafaaorganization.org/wp-content/uploads/2015/07/slideShow0-640x400.jpg",
  alt: "WAFAA serving families in the community",
};

export const heroContent = {
  eyebrow: "Women & Families Ascending Association",
  headline: "A clear next step can change everything.",
  supporting:
    "WAFAA helps individuals and families find safety, stability, and support—24 hours a day, 7 days a week.",
  primaryCta: "Call for support",
  secondaryCta: "Start client intake",
  tertiaryCta: "Explore our services",
  panelTitle: "Start here",
  panelItems: [
    {
      label: "Need support now?",
      action: `Call ${wafaaConfig.primaryPhone}`,
      href: wafaaConfig.primaryPhoneHref,
      type: "phone" as const,
    },
    {
      label: "Looking for services?",
      action: "Begin a client intake request.",
      href: "#contact",
      type: "intake" as const,
    },
    {
      label: "Want to understand your options?",
      action: "Explore our support services.",
      href: "#services",
      type: "services" as const,
    },
  ],
};

export const supportCategories = {
  heading: "Support that meets you where you are.",
  groups: [
    {
      title: "Safety & immediate support",
      description:
        "When you need someone to talk to or help right away, WAFAA is available around the clock.",
      services: [
        "24/7 support counseling",
        "Crisis intervention",
        "Emergency housing",
        "Food pantry and shelter support",
      ],
      cta: "Explore support options",
      ctaHref: "#contact",
    },
    {
      title: "Stability & guidance",
      description:
        "Practical guidance and referrals to help you navigate complex systems and plan ahead.",
      services: [
        "Counseling sessions",
        "Legal assistance",
        "Immigration paperwork support",
        "Bill and insurance assistance",
        "Referrals for longer-term support",
      ],
      cta: "Talk with WAFAA",
      ctaHref: wafaaConfig.primaryPhoneHref,
    },
    {
      title: "Families & community",
      description:
        "Programs that strengthen families and build lasting connections across the community.",
      services: [
        "Parenting classes",
        "Children's therapy",
        "Senior care services",
        "Anger management",
        "Community service and workshops",
      ],
      cta: "Explore support options",
      ctaHref: "#services",
    },
  ],
};

export const helpProcess = {
  heading: "Getting support should feel straightforward.",
  steps: [
    {
      number: 1,
      title: "Tell us what you need",
      description:
        "Complete the client intake form or contact WAFAA directly.",
    },
    {
      number: 2,
      title: "Connect with our team",
      description:
        "Send an email and call so the team can begin reviewing your information.",
    },
    {
      number: 3,
      title: "Find the right next step",
      description:
        "WAFAA helps connect you with support, services, referrals, and resources.",
    },
  ],
  reminder: `If you need immediate help, call ${wafaaConfig.primaryPhone}.`,
};

export const communityStory = {
  heading: "A community built on connection",
  paragraphs: [
    "WAFAA exists to reduce isolation, strengthen families, and build meaningful connections across the community.",
    // VERIFY_WITH_WAFAA: longevity claim — confirm before publishing
    "For more than two decades, the organization has worked to create a bridge between individuals, families, agencies, and local resources.",
  ],
  cta: "Learn about WAFAA",
  ctaHref: "#about",
};

export const getInvolved = {
  heading: "There are many ways to stand with WAFAA.",
  paths: [
    {
      title: "Give",
      description: "Help make essential support more accessible.",
      cta: "Donate to WAFAA",
      ctaType: "donate" as const,
    },
    {
      title: "Volunteer",
      description: "Share your time, skills, and care with the community.",
      cta: "Become a volunteer",
      ctaHref: "#contact",
    },
    {
      title: "Partner",
      description:
        "Connect your organization, resources, or expertise with families who need support.",
      cta: "Explore partnerships",
      ctaHref: "#contact",
    },
  ],
};

export const contactContent = {
  heading: "When you are ready, we are here.",
  labels: {
    support: "24/7 Support",
    additional: "Additional contact numbers",
    email: "Email",
    area: "Serving",
  },
  actions: {
    call: "Call now",
    intake: "Start client intake",
    email: "Email WAFAA",
    brochure: "Arabic brochure",
  },
  formPrivacy:
    "Please do not include urgent or highly sensitive details in this form. For immediate support, call WAFAA directly.",
  formFallback:
    "Please call or email WAFAA directly so the team can support you.",
};

export const faqItems = [
  {
    question: "How can I reach WAFAA for immediate support?",
    answer: `WAFAA offers 24/7 support counseling. Call ${wafaaConfig.primaryPhone} at any time. You can also email ${wafaaConfig.email} or use the contact form on this page for non-urgent inquiries.`,
  },
  {
    question: "What services does WAFAA offer?",
    answer:
      "WAFAA provides crisis intervention, counseling, emergency housing and food pantry support, legal and immigration assistance, bill and insurance guidance, parenting classes, children's therapy, senior care, anger management, and community workshops. Services are grouped on this page under Safety & immediate support, Stability & guidance, and Families & community.",
  },
  {
    question: "How do I begin client intake?",
    answer:
      "Start by completing the client intake form (when available) or contacting WAFAA directly by phone or email. A team member will review your information and work with you to identify the right next step.",
  },
  {
    question: "Where does WAFAA provide services?",
    answer: `WAFAA serves individuals and families in ${wafaaConfig.serviceArea}. Contact the team to confirm availability for your specific needs.`,
  },
  {
    question: "How can I volunteer, donate, or partner with WAFAA?",
    answer:
      "Visit the Get Involved section on this page to learn about giving, volunteering, and partnership opportunities. You can also call or email WAFAA to discuss how you'd like to contribute.",
  },
];

export const footerContent = {
  mission:
    "Strengthening families and the community through education, connection, and support.",
  accessibilityLabel: "Accessibility statement",
  privacyLabel: "Privacy policy",
};
