# Agaciro Development Fund — frontend concept

A portfolio-quality Next.js reconstruction of the Siwa Capital visual system for Agaciro Development Fund. The implementation uses Agaciro content and curated remote images and self-hosted fonts; it does not reuse Siwa runtime media or submit data to external services.

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

- `/`, `/about`, `/investment`, `/portfolio`, `/contact`
- `/about/board`, `/about/team`, and static person profiles
- Investment topics, portfolio sectors, resources, news, careers, disclaimer, whistleblowing, and custom 404

The portfolio dataset is maintained in `src/content/portfolio.ts`. The contact form validates locally and never sends a request.

## Design and motion

Aspekta VF is self-hosted under its OFL license. The UI uses the measured Siwa proportions, a 991px mobile navigation breakpoint, Lenis smooth scrolling, GSAP/ScrollTrigger reveals and count-ups, SplitType word fill, Swiper drag/navigation, a local cookie preference, and reduced-motion fallbacks.

## Remote images

All photography, logos, portraits, and the favicon reference HTTPS sources; no image files are stored in this project. `src/content/media.ts` contains the URLs, provenance, reuse information, and placement inventory. The catalog covers Agaciro's website, its Flickr account, and Pexels. Generic sector imagery is illustrative; it does not claim to show a particular company.

Use `RemoteImage` for new placements. It retains Next.js responsive optimization and shows source credits for photography, initials for missing portraits/company images, readable brand text for failed logos, and stable backgrounds for failed decorative images. Named people use only verified official headshots. The official color logo's transparent padding is cropped with CSS.

Add a catalog record and placement when replacing an image. `next.config.ts` derives allowed HTTPS paths from the catalog, grouping only official logo/board folders to stay within Next.js's 50-pattern limit. The large team portraits use the fixed `/api/media/portraits/[slug]` endpoint before optimization because their originals can exceed Next.js's seven-second download timeout. It allows 45 seconds, caps responses at 16 MiB, rejects redirects/unknown slugs, and writes no files. Optimized derivatives use Next.js's normal cache. The deployment must support Node route handlers and a 60-second function duration.

Run:

```bash
npm run check:media
npm run test:media
npm run lint
npm run build
npm run verify:media
# In another terminal: npm run start -- --port 3100
npm run verify:media -- --base-url=http://localhost:3100
```

The build enforces the no-local-images policy. Network verification downloads and decodes each source (or optimized response); the favicon directory is validated by the script and decoded during browser QA. Network checks are explicit, not part of the build, because source hosts can be temporarily unavailable. Existing Git history, dependency/build caches, fonts, and code-rendered icons are retained.

Official and Flickr images retain their owners' rights; source attribution does not grant a license. Flickr records are explicitly marked All Rights Reserved. Pexels records link to the Pexels License. Source URLs and reuse information should be reviewed when replacing assets.
