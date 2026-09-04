import { RemoteImage as Image } from "@/components/ui/RemoteImage";

import { Button } from "@/components/ui/Button";
import { media } from "@/content/media";

export function ConnectCta({
  title = "Contact the Fund",
  body,
  image = media.home.cta,
}: {
  title?: string;
  body?: string;
  image?: string;
}) {
  return (
    <section className="cta-band">
      <div className="frame">
        <Image alt="" fill sizes="100vw" src={image} />
        <div className="frame-shade frame-shade--center" />
      </div>
      <div className="cta-band-inner pad-global">
        <div className="header-center" data-reveal>
          <h2>{title}</h2>
          {body ? <p>{body}</p> : null}
          <Button href="/contact" variant="white">
            Contact the Fund
          </Button>
        </div>
      </div>
    </section>
  );
}
