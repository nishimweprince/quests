import Image from "next/image";

import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="notfound">
      <div className="frame">
        <Image alt="" fill sizes="100vw" src="/media/hero-about.jpg" />
        <div className="frame-shade frame-shade--center" />
      </div>
      <div className="notfound-inner pad-global">
        <p className="eyebrow">Page not found</p>
        <h1>404</h1>
        <p>
          That page has moved or never existed. Start again from the homepage, or
          look through the portfolio.
        </p>
        <div className="hero-actions" style={{ justifyContent: "center" }}>
          <Button href="/" variant="white">
            Back home
          </Button>
          <Button arrow={false} href="/portfolio" variant="glass">
            Our Portfolio
          </Button>
        </div>
      </div>
    </section>
  );
}
