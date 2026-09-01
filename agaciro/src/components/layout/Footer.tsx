import Link from "next/link";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Arrow } from "@/components/ui/Arrow";
import { Logo } from "@/components/ui/Logo";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-intro"><p>Agaciro Development Fund invests national savings for Rwanda’s long-term resilience and prosperity.</p><Link className="footer-cta" href="/contact">Get in Touch <Arrow /></Link></div>
        <nav className="footer-links" aria-label="Footer navigation"><Link href="/">Home</Link><Link href="/about">About</Link><Link href="/investment-criteria">Investment Criteria</Link><Link href="/portfolio">Portfolio</Link></nav>
        <nav className="footer-links footer-links--secondary" aria-label="Secondary navigation"><a className="footer-social" href="https://www.linkedin.com/company/agaciro-development-fund"><FontAwesomeIcon aria-hidden="true" icon={faLinkedinIn} /> LinkedIn</a><Link href="/about/board">Board</Link><Link href="/about/team">Team</Link><Link href="/terms-of-use">Terms of Use</Link><Link href="/privacy-policy">Privacy Policy</Link></nav>
        <div className="footer-contact"><a href="mailto:info@agaciro.rw">info@agaciro.rw</a><p>Street No. KN 67<br />BPR PCD Towers, 7th Floor<br />P.O. Box 674, Kigali, Rwanda</p></div>
        <Link className="footer-logo" href="/"><Logo white /></Link>
        <p className="footer-copy">© 2026 Agaciro Development Fund</p>
        <a className="back-top" href="#top">Back to Top <Arrow direction="up" /></a>
      </div>
    </footer>
  );
}
