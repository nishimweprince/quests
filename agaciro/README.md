# Agaciro Development Fund — frontend concept

A portfolio-quality Next.js reconstruction of the Siwa Capital visual system for Agaciro Development Fund. The implementation uses Agaciro content and locally served assets; it does not reuse Siwa runtime media or submit data to external services.

## Run locally

```bash
npm install
npm run dev
```

Production verification:

```bash
npm run lint
npm run build
```

## Routes

- `/`, `/about`, `/investment-criteria`, `/portfolio`, `/contact`
- `/about/board`, `/about/team`, and static person profiles
- `/privacy-policy`, `/terms-of-use`, and custom 404

The portfolio dataset is deliberately fictional and marked `placeholder: true` in `src/content/portfolio.ts`. The contact form validates locally and never sends a request.

## Design and motion

Aspekta VF is self-hosted under its OFL license. The UI uses the measured Siwa proportions, a 991px mobile navigation breakpoint, Lenis smooth scrolling, GSAP/ScrollTrigger reveals and count-ups, SplitType word fill, Swiper drag/navigation, a local cookie preference, and reduced-motion fallbacks.
