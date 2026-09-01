import { Button } from "@/components/ui/Button";

export function ConnectCta() {
  return (
    <section className="connect-cta">
      <div className="connect-cta-inner" data-reveal>
        <h2>Let&apos;s Connect</h2>
        <Button href="/contact" variant="white">
          Get in Touch
        </Button>
      </div>
    </section>
  );
}
