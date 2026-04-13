import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebookF,
  faInstagram,
  faTiktok,
  faWhatsapp,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import type { LucideIcon } from "lucide-react";
import {
  Bot,
  BookOpen,
  Briefcase,
  CircleDollarSign,
  Globe,
  GraduationCap,
  Layers,
  MessageCircle,
  PlayCircle,
  Settings,
  Shield,
  TrendingUp,
  Users,
  Video,
  Zap,
} from "lucide-react";

export const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Get Started", href: "#subscribe" },
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
  { href: "https://whatsapp.com/channel/0029Vb5ZFQTHAdNcCXSdtg0E", label: "WhatsApp", icon: faWhatsapp },
  { href: "https://www.youtube.com/@GODFATHEROFFOREX", label: "YouTube", icon: faYoutube },
  { href: "mailto:vicentkibo@gmail.com", label: "Email", icon: faEnvelope },
  { href: "https://twitter.com/Godfatheroffore", label: "X", icon: faXTwitter },
  { href: "https://instagram.com/Billionairesforexacademy__", label: "Instagram", icon: faInstagram },
  { href: "https://tiktok.com/@godfatherofforex", label: "TikTok", icon: faTiktok },
  { href: "https://www.facebook.com/share/17E9U7sWVU/?mibextid=wwXIfr", label: "Facebook", icon: faFacebookF },
] as const satisfies ReadonlyArray<{
  href: string;
  label: string;
  icon: IconDefinition;
}>;

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

export type FeatureGridItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const featureGridItems: FeatureGridItem[] = [
  {
    title: "Automated Trading",
    description:
      "Set it and forget it. Our EA runs 24/7, executing trades with institutional-grade precision across all sessions.",
    icon: Zap,
  },
  {
    title: "Custom Strategy",
    description:
      "Built on proven price-action frameworks, refined through thousands of hours of backtesting and live market data.",
    icon: Settings,
  },
  {
    title: "Risk Management",
    description:
      "Advanced position sizing and stop-loss logic built in. Protect your capital while maximizing upside potential.",
    icon: Shield,
  },
  {
    title: "All Currency Pairs",
    description:
      "Optimized for every major, minor, and exotic pair. One bot handles your entire forex portfolio.",
    icon: Layers,
  },
  {
    title: "Any Broker",
    description:
      "Compatible with MetaTrader 4 and 5 on any broker. No restrictions, no lock-ins, complete flexibility.",
    icon: Briefcase,
  },
  {
    title: "Full Support",
    description:
      "Step-by-step setup tutorials, live community groups, and direct support to get you trading within minutes.",
    icon: Users,
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  title: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Tinga Tinga EA completely changed how I approach the markets. I went from spending hours analyzing charts to letting the bot handle everything while I focus on other things. The results have been remarkably consistent.",
    name: "Marcus T.",
    title: "Full-time Trader, London",
    rating: 5,
  },
  {
    quote:
      "I was skeptical about automated trading, but after three months with Tinga Tinga the numbers speak for themselves. Setup was straightforward and the community support is world-class.",
    name: "Adaeze K.",
    title: "Part-time Trader, Lagos",
    rating: 5,
  },
  {
    quote:
      "The Billionaire FX Academy gave me the foundations I was missing. Combined with the EA, I finally have a system I trust. Best investment I've made in my trading career.",
    name: "James R.",
    title: "Swing Trader, Dubai",
    rating: 5,
  },
];
