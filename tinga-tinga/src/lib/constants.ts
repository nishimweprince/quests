import {
  Bot,
  BookOpen,
  CircleDollarSign,
  Globe,
  GraduationCap,
  MessageCircle,
  PlayCircle,
  TrendingUp,
  Users,
  Video,
} from "lucide-react";

export const navLinks = [
  { label: "Products", href: "#products" },
  { label: "Community", href: "#community" },
  { label: "Brokers", href: "#brokers" },
  { label: "Subscribe", href: "#subscribe" },
] as const;

export const ctaLinks = {
  botCheckout: "#",
  courseCheckout: "#",
  subscribe: "#subscribe",
  video: "#video",
} as const;

export const stats = [
  { value: 1000, suffix: "+", label: "Active Users" },
  { value: 100, suffix: "%", label: "All Pairs Supported" },
  { value: 24, suffix: "/7", label: "Automated Trading" },
  { value: 0, suffix: " Experience Needed", label: "No Experience Required" },
] as const;

export type ProductData = {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  price: string;
  cta: string;
  ctaVariant: "primary" | "secondary";
  image: string;
  imageAlt: string;
  trustLine: string;
  features: string[];
};

export const products: Record<"bot" | "course", ProductData> = {
  bot: {
    id: "products",
    badge: "Flagship Product",
    title: "Tinga Tinga EA",
    subtitle: "Plug & Play Forex Robot for All Pairs",
    price: "£1,500",
    cta: "Buy Now",
    ctaVariant: "primary",
    image: "/images/tinga-tinga-product.svg",
    imageAlt: "Tinga Tinga EA product showcase",
    trustLine: "Instant delivery · Lifetime access · Setup support included",
    features: [
      "No experience needed",
      "Automated robot",
      "Optimized on all pairs & assets",
      "Uses any broker",
      "Trades all pairs",
      "Includes tutorials & setup support",
    ],
  },
  course: {
    id: "course",
    badge: "Mentorship",
    title: "Billionaire FX Academy",
    subtitle: "Forex Training Course",
    price: "£3,000",
    cta: "Enroll Now",
    ctaVariant: "secondary",
    image: "/images/forex-course-product.svg",
    imageAlt: "Billionaire FX Academy course showcase",
    trustLine: "Structured curriculum · Mentorship support · Strategy playbooks",
    features: [
      "Institutional trading frameworks",
      "Price action & risk management",
      "Weekly analysis sessions",
      "Backtesting workflow",
      "Psychology & discipline modules",
      "Community accountability",
    ],
  },
};

export const howItWorksSteps = [
  {
    title: "Purchase",
    description: "Choose your product and complete secure checkout in minutes.",
    icon: CircleDollarSign,
  },
  {
    title: "Install",
    description: "Follow our simple MetaTrader setup walkthrough and templates.",
    icon: Bot,
  },
  {
    title: "Profit",
    description: "Deploy your strategy with automation and monitor performance.",
    icon: TrendingUp,
  },
] as const;

export const communityLinks = [
  {
    title: "Twitter / X",
    href: "#",
    description: "Daily charts and macro commentary.",
    icon: Globe,
    color: "#1DA1F2",
  },
  {
    title: "TINGA TINGA Robot Group 1",
    href: "#",
    description: "Live support and setup discussions.",
    icon: Users,
    color: "#25D366",
  },
  {
    title: "TINGA TINGA Robot Group 2",
    href: "#",
    description: "Signals, updates, and community wins.",
    icon: MessageCircle,
    color: "#25D366",
  },
  {
    title: "TikTok",
    href: "#",
    description: "Short-form market education.",
    icon: Video,
    color: "#ff0050",
  },
  {
    title: "Instagram",
    href: "#",
    description: "Lifestyle and behind-the-scenes moments.",
    icon: Globe,
    color: "#E4405F",
  },
  {
    title: "YouTube",
    href: "#",
    description: "Long-form strategy and bot walkthroughs.",
    icon: PlayCircle,
    color: "#FF0000",
  },
  {
    title: "WhatsApp",
    href: "#",
    description: "Direct updates and support channels.",
    icon: MessageCircle,
    color: "#25D366",
  },
];

export const brokers = [
  {
    name: "HFM",
    href: "#",
    description: "Trusted execution with competitive spreads.",
  },
  {
    name: "Just Market",
    href: "#",
    description: "Flexible account options for active traders.",
  },
  {
    name: "Exness",
    href: "#",
    description: "Fast withdrawals and robust platform tooling.",
  },
] as const;

export const socialLinks = [
  { href: "#", label: "WhatsApp", icon: MessageCircle },
  { href: "#", label: "YouTube", icon: PlayCircle },
  { href: "mailto:hello@godfatherofforex.com", label: "Email", icon: Globe },
  { href: "#", label: "X", icon: Globe },
  { href: "#", label: "Instagram", icon: Globe },
  { href: "#", label: "TikTok", icon: Video },
  { href: "#", label: "Facebook", icon: Globe },
] as const;

export const heroTrustItems = [
  "Works with MetaTrader 4 & 5",
  "Any Broker",
  "All Currency Pairs",
] as const;

export const video = {
  heading: "See the Lifestyle. See the Results.",
  youtubeEmbedUrl: "https://www.youtube.com/embed/6cbiL7EdW7s?si=i1kIpdR66v445gQ7",
  label: "LIVING THE HIGH LIFE IN DUBAI",
  cta: "Ready to start? Get Tinga Tinga EA →",
  ctaHref: "#products",
} as const;

export const sectionIcons = {
  products: Bot,
  course: BookOpen,
  community: Users,
  video: PlayCircle,
  brokers: GraduationCap,
} as const;
