import {
  faFacebookF,
  faLinkedinIn,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export type SocialName =
  | "linkedin"
  | "x"
  | "facebook"
  | "youtube"
  | "email";

const ICONS = {
  linkedin: faLinkedinIn,
  x: faXTwitter,
  facebook: faFacebookF,
  youtube: faYoutube,
  email: faEnvelope,
} as const;

export function SocialIcon({
  name,
  href,
  label,
  onDark = false,
}: {
  name: SocialName;
  href: string;
  label: string;
  onDark?: boolean;
}) {
  const isMail = href.startsWith("mailto:");
  return (
    <a
      aria-label={label}
      className={`social-btn ${onDark ? "social-btn--on-dark" : ""}`}
      href={href}
      {...(isMail ? {} : { rel: "noreferrer noopener", target: "_blank" })}
    >
      <FontAwesomeIcon aria-hidden="true" icon={ICONS[name]} />
    </a>
  );
}
