
# Agaciro — v1 implementation plan

Revamp of https://www.agaciro.rw/ using https://www.siwacap.com/ as a pixel-accurate UI and motion reference, with Agaciro copy and people, on Next.js App Router.

**Do not implement until Nishimwe signs off.** Implementation is via Codex CLI on the laptop (codex-cli 0.146.1), in `/Users/nishimweprince/Documents/NISHIMWE/quests/agaciro`.

This is a Quests redesign (portfolio-quality frontend), not an official Agaciro commission. Treat real names, addresses, and stats as public information already on agaciro.rw. Do not invent official policy, ticket sizes, or holdings.

---

## Status

| Item | Value |
| --- | --- |
| Product | Agaciro Development Fund public site, v1 |
| Visual source of truth | siwacap.com |
| Copy source of truth | agaciro.rw and this plan |
| Runtime | Next 16 plus React 19 |
| Sibling | quests/yyussa stack and frontend-design skill |
| Implementation tool | Codex CLI 0.146.1, this folder only |
| Gate | Nishimwe sign-off before any Phase 0 work |

---

## 1. Locked decisions

These are closed. Do not reopen them during implementation.

| Decision | Lock |
| --- | --- |
| Visual system | Siwa to the centimeter: Aspekta VF, sand/cream/brown tokens, pill nav, inset rounded heroes, GSAP + Lenis |
| Copy | Agaciro only, English. No Siwa family-office / ETA / search-fund language |
| Logo | Official lockup from agaciro.rw: tree mark + AGACIRO / Development Fund / Rwanda Sovereign Wealth Fund. Color on light, white on video headers |
| Favicon | Remote official URL from `brandMedia.favicon`; no local image file |
| Logo files | Remote official color/white lockups from `brandMedia`; crop transparent padding with CSS |
| Lime green | Lives ONLY in the logo, not in UI chrome or accents |
| Language | English only. No language switcher |
| Content | Static TypeScript modules. No CMS |
| Cookies | Visual clone of Siwa/Finsweet banner only; no analytics |
| Motion | Lenis GSAP SplitType Swiper. Not Framer for chrome |
| Portraits | Verified official portraits from `personPortraits`; initials when unavailable or a request fails. Never use stock faces for named people |
| Contact form | Siwa layout and states; Agaciro labels; fake success/error; no network submit; omit recaptcha |
| Funds Over Time | literal Fund I / Fund II, two named vintages from public history |


### 1.1 Routes

v1 real routes: Home, About, Board, Team, person profiles, Contact, Privacy, Terms, 404.

v1 stub routes so nav stays 1:1 with Siwa: /portfolio and /investment-criteria. Full Siwa templates, placeholder company names.

Deferred: reports/downloads, news, contribute, real 25-company dataset, live form backend, multilingual.

| Path | Kind | Notes |
| --- | --- | --- |
| / | Real | Home, nine Siwa-ordered sections |
| /about | Real | Clone Siwa /about with Agaciro copy |
| /about/board | Real (new) | 6 directors |
| /about/board/[slug] | Real (new) | Director profile |
| /about/team | Real (new) | Exec plus members |
| /about/team/[slug] | Real (new) | Person profile |
| /investment-criteria | Stub | Pixel-clone 7 cards, Agaciro copy |
| /portfolio | Stub | Pixel-clone grid/filters, 36 placeholders |
| /contact | Real | Siwa layout, Agaciro fields and Kigali details |
| /privacy-policy | Real | Siwa template, Agaciro legal rewrite |
| /terms-of-use | Real | Siwa template, Agaciro legal rewrite |
| custom 404 | Real | Siwa brown panel plus concentric-ring 0 |

Do not invent Siwa-missing routes such as /approach, /funds, /team (top-level), /invest, /search, or /careers.


### 1.2 Navigation

Exact Siwa chrome. Sand pill: Home / About Us / Investment Criteria / Portfolio. Right: Get in Touch. Board and Team are not extra top-nav items.

Board/Team entry: subpages under About plus footer links. Default to keep Siwa nav 1:1.

### 1.3 Other locks

- Portfolio and criteria stubs: pixel-clone Siwa grid, filters, 7 criteria cards; fictional placeholder names, not real BK/TDB/Irembo.
- Match quests/yyussa for stack and skill copy.
- Stub pages must look finished, not coming soon.
- Use curated remote images from Agaciro, its Flickr account, and relevant reusable photography. Do not hotlink Siwa CDN or Webflow assets.
- Self-host Aspekta. If the license is missing, STOP and ask.
---

## 2. What this is

Reconstruct Siwa's Webflow frontend (layout, type, spacing, hover, scroll, mobile overlay) with Agaciro as the subject.

Siwa = LA family office backing search funds. Agaciro = Rwanda SWF, launched 23 August 2012, Law N 007/2021, Board appointed by Cabinet, accountable via MINECOFIN.

Chrome = Siwa. Words, people, address, stats = Agaciro. Where a Siwa module has no equivalent (Fund I/II, ETA), keep the module and refill it. Do not delete modules in v1.

Audience: citizens and counterparties. Homepage job: Investing for Rwanda's future generations. CTAs still say Get in Touch because chrome is Siwa.
---

## 3. Frontend-design skill

Follow https://github.com/anthropics/skills/blob/main/skills/frontend-design/SKILL.md and copy quests/yyussa/.agents/skills/frontend-design into agaciro/.agents/skills/frontend-design.

The skill says: where the brief pins a visual direction, follow it exactly. This brief pins Siwa. Do not invent a third look. Avoid AI defaults (cream+serif+terracotta, black+acid green, broadsheet).

- Subject: Rwanda SWF. Audience: citizens and counterparties.
- Palette: Siwa tokens only. Logo green is not a UI accent.
- Type: Aspekta variable, weight 400 body/headings, 500 buttons. No Inter/Geist.
- Layout: full-bleed sections, heroes inset about 1rem with large rounded corners, boxed inner grid, tall rhythm.
- Signature: sand pill nav + word-by-word scroll fill + inset video heroes. Agaciro-specific signature is the tree/roots lockup in the nav slot.
- New templates (board, team, profiles): design as if Siwa had shipped them (cream cards, sand rules, pill links). No new aesthetic.
- Copy: Agaciro public words. Placeholder companies are fictional in data (placeholder: true) but read as real names on the page.
- Motion: load reveal, Lenis, SplitType grey-to-black word fill, count-ups, ticker, Swiper. Respect prefers-reduced-motion.
---

## 4. Siwa reference

Webflow site id 68f65b5ee7f86fe6b0d119fd. English. Custom 404. No portfolio detail CMS pages.

Siwa = visual and motion source of truth. Reconstruct; do not improve; do not add pages not in this plan.

### 4.1 Observed routes

Siwa routes: / /about /investment-criteria /portfolio /contact /privacy-policy /terms-of-use and custom 404.

Tried 404 on Siwa: /approach /funds /team /invest /search /careers. Do not invent those.

Siwa portfolio companies link out, no /portfolio/[slug]. v1 same: Website pill can be #.

New Agaciro routes in Siwa language: /about/board (6 directors), /about/board/[slug], /about/team (exec + members), /about/team/[slug].

### 4.2 Desktop and mobile nav

Desktop nav (greater than 991px): position fixed, transparent header, left logo, center sand #c29e77 capsule rounded-full with Home / About Us / Investment Criteria / Portfolio (active = white pill inside), right Get in Touch arrow pill (white on dark/video, sand on light is-white-nav). Logo/nav/hero start visibility hidden until intro.

Mobile (991px and below): logo + hamburger, full-screen cream overlay, large stacked links including Contact Us, wave graphic, contact block, X close, Lenis stopped.

Do NOT use magenta #ff41f5 nav hover; use --hover-sand. Hover pills to --hover-* ; button radius 444px.

### 4.3 Footer

Footer black: blurb + Get in Touch; col1 Home/About/Investment Criteria/Portfolio; col2 LinkedIn/Terms/Privacy PLUS Board and Team; col3 info@agaciro.rw and Kigali address (not LA); c 2026; Back to Top #top.

### 4.4 Cookie banner

Cookie banner: Finsweet-style opt-in, bottom, does not block, Decline/Accept/X, local flag only. Visual clone only, no analytics.

### 4.5 Motion that must be rebuilt

Motion must rebuild. Use SplitType MIT, not pirated GSAP Club SplitText. Do not use Framer Motion for chrome.

- Lenis lerp 0.1, wheelMultiplier 0.7, vertical, smoothTouch false
- GSAP 3.15 + ScrollTrigger
- SplitType on headings/paragraphs, scroll-driven grey to black word fill
- Intro reveal; count-up on stats; infinite logo ticker
- Swiper 11 slidesPerView auto, 28px gap, mousewheel axis, keyboard, prev/next brown round arrows, draggable scrollbar
- Mobile overlay + scroll lock
- prefers-reduced-motion: skip Lenis/SplitType/count-up/ticker; show final states

### 4.6 Type

Typeface: Aspektavf variable 100-900. Self-host public/fonts/AspektaVF.woff2. Do not hotlink Siwa CDN. If license missing, STOP and ask.

Fluid root font-size across 1920/1440/991/767/479/320. Nav collapse at 991.

Observed around 1024px: h1 56.9/68.2, h2 35.5/42.7, h3 28.4/37, body 15.07/22.6, button 12.5/16.3 weight 500.

### 4.7 Color tokens

Put tokens in app/globals.css via @theme. No magenta nav hover. Use --hover-sand.

| Token | Hex |
| --- | --- |
| --black | #000 |
| --white | #fff |
| --hover-wh | #d6d6d6 |
| --sand | #c29e77 |
| --hover-sand | #9a764f |
| --grey | #787878 |
| --hover-grey | #505050 |
| --cream | #f1e8d9 |
| --hover-cream | #c9c0b1 |
| --brown | #4e392e |
| --hover-brown | #3f2c22 |
| --blue | #97a8bb |
| --beige | #ababab |

Selection color is --blue #97a8bb. Lime green lives only in the logo, never as a UI accent.

---

## 5. Agaciro copy

Home H1: Investing for Rwandas future generations

Dek: Agaciro Development Fund is Rwandas sovereign wealth fund, investing national savings for long-term resilience, national prosperity, and sustainable value creation.

Live stats from the website (use these, not older news): FRW 456bn AUM, 25 portfolio companies and strategic national investments, 7 investment sectors.

About origin: 2011 Umushyikirano origin; launched 23 August 2012; Agaciro = dignity; contributions from Rwandans, diaspora, friends of Rwanda; since 2013 investment company wholly owned by GoR under Law N 007/2021; Board appointed by Cabinet; accountable through Minister of Finance and Economic Planning.

Investment copy for criteria page and homepage modules:
- NST2 alignment.
- Geography: Rwanda + up to 30% outside.
- Preferred sectors: ICT, Financial Services, Transport and Logistics, Agriculture and Agro-Processing, Industrials and Manufacturing.
- Equity (PE/unlisted) and fixed income (sovereign and corporate, listed and unlisted); direct and via funds.
- Instruments across senior/secured/unsecured/subordinated/mezzanine/junior debt and preferred / CET1 / convertibles.
- Developmental impact and ESG; multi-stage screening and two-stage IC/board approval; asset-level risk.

### 5.1 Board of directors

Six directors. Homepage section_team shows Scott T. Ford (Chairman) as one of two cards. LinkedIn pills: company page if personal URLs unknown. Do not guess personal profiles.


#### Mr. Scott T. Ford

- **Role:** Chairman
- **Kind:** board
- **Slug:** `scott-t-ford`
- **Profile route:** `/about/board/scott-t-ford`
- **Portrait source:** `personPortraits["scott-t-ford"]` in `src/content/media.ts` (official remote URL)
- Verified official remote portrait; use initials if unavailable. Keep the existing card crop.
- **Bio:** scrape the Read more page on agaciro.rw at implementation; store in `src/content/people.ts`. If 404, title + one sentence only. Never invent careers.
- **LinkedIn pill:** company page if personal URL unknown. Do not guess personal profiles.


#### Dr. Thierry Mihigo Kalisa

- **Role:** Vice-Chairman
- **Kind:** board
- **Slug:** `thierry-mihigo-kalisa`
- **Profile route:** `/about/board/thierry-mihigo-kalisa`
- **Portrait source:** `personPortraits["thierry-mihigo-kalisa"]` in `src/content/media.ts` (official remote URL)
- Verified official remote portrait; use initials if unavailable. Keep the existing card crop.
- **Bio:** scrape the Read more page on agaciro.rw at implementation; store in `src/content/people.ts`. If 404, title + one sentence only. Never invent careers.
- **LinkedIn pill:** company page if personal URL unknown. Do not guess personal profiles.


#### Mrs. Doreen G. Karake

- **Role:** Member
- **Kind:** board
- **Slug:** `doreen-g-karake`
- **Profile route:** `/about/board/doreen-g-karake`
- **Portrait source:** `personPortraits["doreen-g-karake"]` in `src/content/media.ts` (official remote URL)
- Verified official remote portrait; use initials if unavailable. Keep the existing card crop.
- **Bio:** scrape the Read more page on agaciro.rw at implementation; store in `src/content/people.ts`. If 404, title + one sentence only. Never invent careers.
- **LinkedIn pill:** company page if personal URL unknown. Do not guess personal profiles.


#### Mrs. Jeanne Francoise Mubiligi

- **Role:** Member
- **Kind:** board
- **Slug:** `jeanne-francoise-mubiligi`
- **Profile route:** `/about/board/jeanne-francoise-mubiligi`
- **Portrait source:** `personPortraits["jeanne-francoise-mubiligi"]` in `src/content/media.ts` (official remote URL)
- Verified official remote portrait; use initials if unavailable. Keep the existing card crop.
- **Bio:** scrape the Read more page on agaciro.rw at implementation; store in `src/content/people.ts`. If 404, title + one sentence only. Never invent careers.
- **LinkedIn pill:** company page if personal URL unknown. Do not guess personal profiles.


#### Mr. Aime Ngarukiyintwali

- **Role:** Member
- **Kind:** board
- **Slug:** `aime-ngarukiyintwali`
- **Profile route:** `/about/board/aime-ngarukiyintwali`
- **Portrait source:** `personPortraits["aime-ngarukiyintwali"]` in `src/content/media.ts` (official remote URL)
- Verified official remote portrait; use initials if unavailable. Keep the existing card crop.
- **Bio:** scrape the Read more page on agaciro.rw at implementation; store in `src/content/people.ts`. If 404, title + one sentence only. Never invent careers.
- **LinkedIn pill:** company page if personal URL unknown. Do not guess personal profiles.


#### Mr. Andrew Rozanov

- **Role:** Member
- **Kind:** board
- **Slug:** `andrew-rozanov`
- **Profile route:** `/about/board/andrew-rozanov`
- **Portrait source:** `personPortraits["andrew-rozanov"]` in `src/content/media.ts` (official remote URL)
- Verified official remote portrait; use initials if unavailable. Keep the existing card crop.
- **Bio:** scrape the Read more page on agaciro.rw at implementation; store in `src/content/people.ts`. If 404, title + one sentence only. Never invent careers.
- **LinkedIn pill:** company page if personal URL unknown. Do not guess personal profiles.


### 5.2 Executive

Homepage section_team shows Ulrich Kayinamura (CEO) as the other card. About repeats CEO + Chairman then links Full board and Full team.


#### Ulrich Kayinamura

- **Role:** CEO
- **Kind:** exec
- **Slug:** `ulrich-kayinamura`
- **Profile route:** `/about/team/ulrich-kayinamura`
- **Portrait source:** `personPortraits["ulrich-kayinamura"]` in `src/content/media.ts` (official remote URL)
- Verified official remote portrait; use initials if unavailable. Keep the existing card crop.
- **Bio:** scrape the Read more page on agaciro.rw at implementation; store in `src/content/people.ts`. If 404, title + one sentence only. Never invent careers.
- **LinkedIn pill:** company page if personal URL unknown. Do not guess personal profiles.


#### Ismael Amri Sued

- **Role:** Chief Legal Officer and Company Secretary
- **Kind:** exec
- **Slug:** `ismael-amri-sued`
- **Profile route:** `/about/team/ismael-amri-sued`
- **Portrait source:** `personPortraits["ismael-amri-sued"]` in `src/content/media.ts` (official remote URL)
- Verified official remote portrait; use initials if unavailable. Keep the existing card crop.
- **Bio:** scrape the Read more page on agaciro.rw at implementation; store in `src/content/people.ts`. If 404, title + one sentence only. Never invent careers.
- **LinkedIn pill:** company page if personal URL unknown. Do not guess personal profiles.


#### Nathaniel Nyika

- **Role:** Chief Investment Officer
- **Kind:** exec
- **Slug:** `nathaniel-nyika`
- **Profile route:** `/about/team/nathaniel-nyika`
- **Portrait source:** `personPortraits["nathaniel-nyika"]` in `src/content/media.ts` (official remote URL)
- Verified official remote portrait; use initials if unavailable. Keep the existing card crop.
- **Bio:** scrape the Read more page on agaciro.rw at implementation; store in `src/content/people.ts`. If 404, title + one sentence only. Never invent careers.
- **LinkedIn pill:** company page if personal URL unknown. Do not guess personal profiles.


### 5.3 Team members

Sixteen members. Bios: scrape each Read more page on agaciro.rw at implementation; store in src/content/people.ts. If 404, title + one sentence only. Never invent careers.


#### Jerry Ntare

- **Role:** Team member
- **Kind:** team
- **Slug:** `jerry-ntare`
- **Profile route:** `/about/team/jerry-ntare`
- **Portrait source:** `personPortraits["jerry-ntare"]` in `src/content/media.ts` (official remote URL)
- Verified official remote portrait; use initials if unavailable. Keep the existing card crop.
- **Bio:** scrape the Read more page on agaciro.rw at implementation; store in `src/content/people.ts`. If 404, title + one sentence only. Never invent careers.
- **LinkedIn pill:** company page if personal URL unknown. Do not guess personal profiles.


#### Bienfait Banaga

- **Role:** Ag. Chief Finance and Administrative Officer
- **Kind:** team
- **Slug:** `bienfait-banaga`
- **Profile route:** `/about/team/bienfait-banaga`
- **Portrait source:** `personPortraits["bienfait-banaga"]` in `src/content/media.ts` (official remote URL)
- Verified official remote portrait; use initials if unavailable. Keep the existing card crop.
- **Bio:** scrape the Read more page on agaciro.rw at implementation; store in `src/content/people.ts`. If 404, title + one sentence only. Never invent careers.
- **LinkedIn pill:** company page if personal URL unknown. Do not guess personal profiles.


#### Zackiah Nandugwa

- **Role:** Team member
- **Kind:** team
- **Slug:** `zackiah-nandugwa`
- **Profile route:** `/about/team/zackiah-nandugwa`
- **Portrait source:** `personPortraits["zackiah-nandugwa"]` in `src/content/media.ts` (official remote URL)
- Verified official remote portrait; use initials if unavailable. Keep the existing card crop.
- **Bio:** scrape the Read more page on agaciro.rw at implementation; store in `src/content/people.ts`. If 404, title + one sentence only. Never invent careers.
- **LinkedIn pill:** company page if personal URL unknown. Do not guess personal profiles.


#### Charles Ndahimana

- **Role:** Team member
- **Kind:** team
- **Slug:** `charles-ndahimana`
- **Profile route:** `/about/team/charles-ndahimana`
- **Portrait source:** `personPortraits["charles-ndahimana"]` in `src/content/media.ts` (official remote URL)
- Verified official remote portrait; use initials if unavailable. Keep the existing card crop.
- **Bio:** scrape the Read more page on agaciro.rw at implementation; store in `src/content/people.ts`. If 404, title + one sentence only. Never invent careers.
- **LinkedIn pill:** company page if personal URL unknown. Do not guess personal profiles.


#### Felicien Rimenyande

- **Role:** Team member
- **Kind:** team
- **Slug:** `felicien-rimenyande`
- **Profile route:** `/about/team/felicien-rimenyande`
- **Portrait source:** `personPortraits["felicien-rimenyande"]` in `src/content/media.ts` (official remote URL)
- Verified official remote portrait; use initials if unavailable. Keep the existing card crop.
- **Bio:** scrape the Read more page on agaciro.rw at implementation; store in `src/content/people.ts`. If 404, title + one sentence only. Never invent careers.
- **LinkedIn pill:** company page if personal URL unknown. Do not guess personal profiles.


#### Lilian S. Mutesi

- **Role:** Team member
- **Kind:** team
- **Slug:** `lilian-s-mutesi`
- **Profile route:** `/about/team/lilian-s-mutesi`
- **Portrait source:** `personPortraits["lilian-s-mutesi"]` in `src/content/media.ts` (official remote URL)
- Verified official remote portrait; use initials if unavailable. Keep the existing card crop.
- **Bio:** scrape the Read more page on agaciro.rw at implementation; store in `src/content/people.ts`. If 404, title + one sentence only. Never invent careers.
- **LinkedIn pill:** company page if personal URL unknown. Do not guess personal profiles.


#### Valentine Nyinawumuntu

- **Role:** Team member
- **Kind:** team
- **Slug:** `valentine-nyinawumuntu`
- **Profile route:** `/about/team/valentine-nyinawumuntu`
- **Portrait source:** `personPortraits["valentine-nyinawumuntu"]` in `src/content/media.ts` (official remote URL)
- Verified official remote portrait; use initials if unavailable. Keep the existing card crop.
- **Bio:** scrape the Read more page on agaciro.rw at implementation; store in `src/content/people.ts`. If 404, title + one sentence only. Never invent careers.
- **LinkedIn pill:** company page if personal URL unknown. Do not guess personal profiles.


#### Benjamin Igeno

- **Role:** Team member
- **Kind:** team
- **Slug:** `benjamin-igeno`
- **Profile route:** `/about/team/benjamin-igeno`
- **Portrait source:** `personPortraits["benjamin-igeno"]` in `src/content/media.ts` (official remote URL)
- Verified official remote portrait; use initials if unavailable. Keep the existing card crop.
- **Bio:** scrape the Read more page on agaciro.rw at implementation; store in `src/content/people.ts`. If 404, title + one sentence only. Never invent careers.
- **LinkedIn pill:** company page if personal URL unknown. Do not guess personal profiles.


#### Elise Ntamitondero

- **Role:** Team member
- **Kind:** team
- **Slug:** `elise-ntamitondero`
- **Profile route:** `/about/team/elise-ntamitondero`
- **Portrait source:** `personPortraits["elise-ntamitondero"]` in `src/content/media.ts` (official remote URL)
- Verified official remote portrait; use initials if unavailable. Keep the existing card crop.
- **Bio:** scrape the Read more page on agaciro.rw at implementation; store in `src/content/people.ts`. If 404, title + one sentence only. Never invent careers.
- **LinkedIn pill:** company page if personal URL unknown. Do not guess personal profiles.


#### Sedar Sagamba

- **Role:** Team member
- **Kind:** team
- **Slug:** `sedar-sagamba`
- **Profile route:** `/about/team/sedar-sagamba`
- **Portrait source:** `personPortraits["sedar-sagamba"]` in `src/content/media.ts` (official remote URL)
- Verified official remote portrait; use initials if unavailable. Keep the existing card crop.
- **Bio:** scrape the Read more page on agaciro.rw at implementation; store in `src/content/people.ts`. If 404, title + one sentence only. Never invent careers.
- **LinkedIn pill:** company page if personal URL unknown. Do not guess personal profiles.


#### Sabine Iradukunda Mugunga

- **Role:** Team member
- **Kind:** team
- **Slug:** `sabine-iradukunda-mugunga`
- **Profile route:** `/about/team/sabine-iradukunda-mugunga`
- **Portrait source:** `personPortraits["sabine-iradukunda-mugunga"]` in `src/content/media.ts` (official remote URL)
- Verified official remote portrait; use initials if unavailable. Keep the existing card crop.
- **Bio:** scrape the Read more page on agaciro.rw at implementation; store in `src/content/people.ts`. If 404, title + one sentence only. Never invent careers.
- **LinkedIn pill:** company page if personal URL unknown. Do not guess personal profiles.


#### Cliff Hakizabera

- **Role:** Team member
- **Kind:** team
- **Slug:** `cliff-hakizabera`
- **Profile route:** `/about/team/cliff-hakizabera`
- **Portrait source:** `personPortraits["cliff-hakizabera"]` in `src/content/media.ts` (official remote URL)
- Verified official remote portrait; use initials if unavailable. Keep the existing card crop.
- **Bio:** scrape the Read more page on agaciro.rw at implementation; store in `src/content/people.ts`. If 404, title + one sentence only. Never invent careers.
- **LinkedIn pill:** company page if personal URL unknown. Do not guess personal profiles.


#### Prince Ntwari

- **Role:** Team member
- **Kind:** team
- **Slug:** `prince-ntwari`
- **Profile route:** `/about/team/prince-ntwari`
- **Portrait source:** `personPortraits["prince-ntwari"]` in `src/content/media.ts` (official remote URL)
- Verified official remote portrait; use initials if unavailable. Keep the existing card crop.
- **Bio:** scrape the Read more page on agaciro.rw at implementation; store in `src/content/people.ts`. If 404, title + one sentence only. Never invent careers.
- **LinkedIn pill:** company page if personal URL unknown. Do not guess personal profiles.


#### Sandrine Isimbi Butera

- **Role:** Team member
- **Kind:** team
- **Slug:** `sandrine-isimbi-butera`
- **Profile route:** `/about/team/sandrine-isimbi-butera`
- **Portrait source:** `personPortraits["sandrine-isimbi-butera"]` in `src/content/media.ts` (official remote URL)
- Verified official remote portrait; use initials if unavailable. Keep the existing card crop.
- **Bio:** scrape the Read more page on agaciro.rw at implementation; store in `src/content/people.ts`. If 404, title + one sentence only. Never invent careers.
- **LinkedIn pill:** company page if personal URL unknown. Do not guess personal profiles.


#### Landry Girinshuti

- **Role:** Team member
- **Kind:** team
- **Slug:** `landry-girinshuti`
- **Profile route:** `/about/team/landry-girinshuti`
- **Portrait source:** `personPortraits["landry-girinshuti"]` in `src/content/media.ts` (official remote URL)
- Verified official remote portrait; use initials if unavailable. Keep the existing card crop.
- **Bio:** scrape the Read more page on agaciro.rw at implementation; store in `src/content/people.ts`. If 404, title + one sentence only. Never invent careers.
- **LinkedIn pill:** company page if personal URL unknown. Do not guess personal profiles.


#### Keith Ntagozera

- **Role:** Team member
- **Kind:** team
- **Slug:** `keith-ntagozera`
- **Profile route:** `/about/team/keith-ntagozera`
- **Portrait source:** `personPortraits["keith-ntagozera"]` in `src/content/media.ts` (official remote URL)
- Verified official remote portrait; use initials if unavailable. Keep the existing card crop.
- **Bio:** scrape the Read more page on agaciro.rw at implementation; store in `src/content/people.ts`. If 404, title + one sentence only. Never invent careers.
- **LinkedIn pill:** company page if personal URL unknown. Do not guess personal profiles.


### 5.4 Contact details

Street No. KN 67 Kigali, Rwanda; BPR PCD Towers, 7th Floor; P.O. Box 674 Kigali; Tel +250 788 331 820; info@agaciro.rw

LinkedIn: https://www.linkedin.com/company/agaciro-development-fund

Maps link to BPR PCD Towers / KN 67. Form fields: Full names*, Email*, Phone, Subject*, Message*. Drop Siwa Company field (Agaciro uses Subject).
---

## 6. Mappings


### 6.1 Funds Over Time (literal Fund I / Fund II)

Literal Fund I / Fund II. Proposed vintages from public history (narrative split, not a legal fund series):

- Fund I — Solidarity (2012): USD 18M launch capital. Source: TDB Group 11 Oct 2022.
- Fund II — Transfer (2018): FRW 184bn AUM after GoR transferred portfolio companies. Source: KT Press Apr 2020 (end-2018 AUM).

Homepage hero/family LIVE stats stay FRW 456bn / 25 / 7 from agaciro.rw. Do not replace live stats with vintage figures.

If 2024 annual report PDF on /resources/annual-report contradicts, prefer the PDF and note in src/content/stats.ts. Mixed USD/FRW is honest; do not invent FX.

### 6.2 Home section order (clone Siwa)

Do not reorder. Do not drop a module. Quality bar: do not continue past Phase 2 until home matches Siwa rhythm.


#### 1. section_hero

**Hero**

Pexels muted loop (Kigali/Rwanda/work, not LA). H1 + dek. CTAs Get in Touch /contact and Our Portfolio /portfolio. Glass stat FRW 456bn AUM count-up. Scroll to Explore.


#### 2. section_family

**Family / Funds Over Time**

Left: Funds Over Time Fund I/II. Right: sovereign fund / dignity copy. More on Our Approach /about. Stat row 456bn / 25+ / 7 or 14+ years. NOT Siwa 90M / 25 transactions / 18 years.


#### 3. section_line

**Logo ticker**

Ticker of PLACEHOLDER company marks (generated SVG). Not real BK/TDB/Irembo logos in v1.


#### 4. section_aligned

**Aligned principles**

H2: Aligned. Patient. Built for Rwanda. (second line sand). 01-04: self-reliance / commercial return + development / NST2 / governance. Discover More /about.


#### 5. section_growing

**Growing Portfolio**

Growing Portfolio dek. Explore Our Cases /portfolio. Swiper of the same placeholder dataset.


#### 6. section_key

**Key Strengths**

Key Strengths on a relevant curated remote landscape. Four cards: dignity, long-term savings, commercial discipline, transparency.


#### 7. section_team

**Leadership cards**

TWO cards like Siwa: Ulrich Kayinamura (CEO) and Scott T. Ford (Chairman).


#### 8. section_cta

**Connect**

Curated remote Fund photography, Lets Connect, Get in Touch.


#### 9. footer

**Footer**

Black footer. Blurb + Get in Touch; columns as specified in Siwa reference. c 2026. Back to Top #top.


### 6.3 About

Clone Siwa /about: video hero, breadcrumb Home • About, funds card + Agaciro in Numbers (456bn, 25, 7, 2012, 14+ years), two leadership cards, expanded numbered principles 01-07 from Agaciro governance (not Siwa You lead We empower), What Drives Us from About+NST2, links to Board and Team.

### 6.4 Investment Criteria

Curated remote investment photography. H1 Investment Criteria. Subline: We evaluate every opportunity on its own merits, commercially and for Rwanda.

Seven cards keep Siwa count. Do not invent a ticket size. Refill ETA Model; do not delete the card.

#### 1. Investment Size

Do NOT invent a ticket. Flexible cheques across equity and credit, sized to the opportunity.


#### 2. Geography

Predominantly Rwanda; up to 30% outside.


#### 3. Direct and through funds

ETA Model becomes: Direct and through funds; equity and fixed income.


#### 4. Industry

Sector-agnostic with preference ICT, FS, Transport and Logistics, Agri and Agro-processing, Industrials and Manufacturing.


#### 5. Deal Structure

Senior to junior debt; preferred; common equity; convertibles. Instruments across senior/secured/unsecured/subordinated/mezzanine/junior debt and preferred / CET1 / convertibles.


#### 6. Buyer Edge

Market leaders or defensible niches; export, import substitution, domestic value addition, employment.


#### 7. Cap Table

Fund partnerships where aligned; two-stage investment-team then board IC. Multi-stage screening and two-stage IC/board approval; asset-level risk.


### 6.5 Portfolio

Clone filter panel. Relabel Deal Type to Direct Equity / Direct Credit / Fund Partnership / Strategic Holding (still four checkboxes).

Sectors: five preferred + Other. Year 2022-2026. Status Current/Exited.

9 cards x 4 pages = 36 placeholder companies. Fictional Rwanda-flavoured names in src/content/portfolio.ts with placeholder: true.

Each card: official remote logo or labeled sector illustration, name, 2-3 sentence dek, Sector, Location (Kigali/Rwanda/Regional), Led by (fictional), Type, Date, Status, Website #.

Filters must actually filter the placeholder dataset. Client filter + pagination.

Do not use real names (Bank of Kigali, TDB, Irembo, BRD) until later real-data phase.

### 6.6 Contact page

Siwa two-column: left image + Get in Touch + email + Kigali Maps link to BPR PCD Towers / KN 67. Right grey rounded form.

Fields: Full names*, Email*, Phone, Subject*, Message*. Drop Siwa Company field.

Submit: client validate, fake success modal Thank You, fake error for empty required. Must not POST to Webflow or Agaciro. Omit recaptcha widget.

### 6.7 Legal

Siwa template: two-tone H1, Effective Date, numbered TOC. Rewrite for Agaciro Development Fund, Kigali, info@agaciro.rw.

SWF informational disclaimer, not an offer of securities. Effective date = sign-off date. Do not copy Siwa UzOman IP clause or info@sowacap.com typo.

### 6.8 Board, team, profiles (new templates)

Index pages: Siwa team cards in a grid. Verified official remote portrait (initials fallback), name, title, and Read more link to slug.

Profile: breadcrumb Home • About • Board/Team • Name. Large portrait, title, bio, back pill. No invented quotes.

Routes: /about/board, /about/board/[slug], /about/team, /about/team/[slug].

Slugs: scott-t-ford, ulrich-kayinamura, etc. Board and Team are not extra top-nav items; they live under About plus footer links.
---

## 7. Reusable elements

Not shadcn. Siwa primitive kit under src/components/ui and src/components/sections. Tokens in app/globals.css @theme. No magic numbers in pages.

UI: Button (pill + arrow SVG, variants white/sand/grey/brown/translucent), NavPill, Logo, Section, Eyebrow, SplitHeading, Stat, Breadcrumb, Footer, CookieBanner, MobileMenu, FormField (underline), Modal.

Sections: HeroVideo, FundsCard, Ticker, NumberedPrinciples, PortfolioSwiper, KeyStrengths, TeamCards, ConnectCta, LegalDoc, FilterPanel, PortfolioGrid, CriteriaGrid.

Lib: lenis.ts, gsap.ts (client-only), split.ts, cn.ts.

Interactive islands use client. Pages are Server Components passing content props.
---

## 8. Media — remote-source migration (supersedes earlier local-image instructions)

All image files have been removed from the Agaciro project, including brand-source copies, logos, photography, and favicon. Fonts, license files, and code-rendered icons remain. Build and dependency caches are outside this rule; Git history is not rewritten.

`src/content/media.ts` is the source of truth for HTTPS image URLs, source pages, credit, reuse information, and intended placements. Choose imagery for the page's subject: official Agaciro sources first, its Flickr account second, and relevant reusable stock photography where needed. Reuse a suitable image instead of forcing a different but unrelated one into each slot. Sector illustrations do not identify a holding's premises. Portrait identities come from the named official board/team sections.

Keep the existing named media exports and string URL interfaces. Use the shared `RemoteImage` component for optimized images, linked photo credits, and stable image-free failure states. Preserve the layout, responsive sizes, loading priorities, and meaningful alt text. Brand cropping happens in CSS, without a derived file.

Next.js permits only the configured remote paths. The 19 large official team PNGs use `/api/media/portraits/[slug]` internally to allow a 45-second upstream download before Next.js optimization; the route only accepts catalog slugs, rejects redirects, caps responses at 16 MiB, and writes no source files. Other images use the normal remote optimizer. The favicon is linked directly in metadata.

Official/Flickr assets retain their owners' rights; credit is not a license. Flickr sources here are marked All Rights Reserved, not Creative Commons. Stock photo records link their applicable license. Photography has visible source links; logos and portraits have provenance recorded in the catalog.

Verification: `npm run check:media`, `npm run test:media`, `npm run lint`, `npm run build`, and `npm run verify:media`. With the production server running, use `npm run verify:media -- --base-url=http://localhost:3100` to exercise optimization. Browser QA covers every page at 1440px and 390px, portrait/brand crops, image attribution, and forced-request failure states.

---

## 9. Folder

App folder at app and src.
---

## 10. Codex phases

This folder only. Do not touch sibling quests except copying the frontend-design skill from yyussa.

Lint and build must pass after each phase.


### Phase 0 — Scaffold

create-next-app App Router TS ESLint Tailwind. App at /app, shared at /src. Tokens, Aspekta, remote brand/media catalog, Lenis root, empty Nav/Footer.


### Phase 1 — Chrome

Pixel nav desktop+mobile, footer, cookie, 404, intro visibility. Compare siwacap.com at 1440 and 390.


### Phase 2 — Home

All nine sections + motion. Quality bar. Do not continue until home matches Siwa rhythm.


### Phase 3 — About, Contact, Legal

Clone Siwa /about, /contact, privacy and terms with Agaciro copy and Kigali details.


### Phase 4 — Stubs

Criteria 7 cards; portfolio filters + 36 cards + pagination. Client filter must actually filter the placeholder dataset.


### Phase 5 — People

Board/team indexes + profiles + footer/about links. 6 directors, 3 exec, 16 members.


### Phase 6 — Polish

Reduced motion, README, add row to quests/README.md Projects table. Lint and production build must pass after each phase, including this one.

Lint and build must pass after each phase.
---

## 11. Codex paste prompt (for when implementation is approved)

Match siwacap.com at 1440px. Agaciro copy only. Board 6 and team 19 people with profiles. Portfolio and criteria look finished. Lint and build clean. English only. Reduced motion.
---

## 12. Out of v1

Real 25-company portfolio and reports; live form/newsletter/recaptcha; Kinyarwanda/French; CMS; contribute flow; auth; hotlinking Siwa video; magenta nav hover; shadcn/MUI; Framer as motion system.
---

## 13. Risks


### 1. Aspekta license

Need a woff2 we can self-host in public/fonts/AspektaVF.woff2. Do not hotlink Siwa CDN. If license is missing, STOP and ask.


### 2. GSAP Club SplitText

Use SplitType MIT. If word-fill cannot match, say so. Do not pirate Club files.


### 3. Fund I/II figures

Public-news snapshots, mixed USD/FRW. Confirm from 2024 annual report PDF. If the PDF on /resources/annual-report contradicts, prefer the PDF and note in src/content/stats.ts. Do not invent FX.


### 4. Placeholder companies

They will read as real on the page (locked). Keep placeholder: true in data. Do not use real names (Bank of Kigali, TDB, Irembo, BRD) until a later real-data phase.


### 5. Codex credits

If CLI quota exhausts, stop and tell Nishimwe. Do not switch accounts yourself.

---

## 14. Success criteria

Match siwacap.com at 1440px. Agaciro copy only. Board 6 and team 19 people with profiles. Portfolio and criteria look finished. Lint and build clean. English only. Reduced motion.
---

## 15. Sources

siwacap.com and public Webflow CSS (Aspekta, tokens, routes).
agaciro.rw about-us, board-of-directors, our-team, investment, our-investment-approach, contact-us, resources/annual-report.
TDB Group 11 Oct 2022: launch about USD 18M; about USD 250M end-2021.
KT Press Apr 2020: end-2018 AUM FRW 184bn; contributions halted.
New Times 4 Jul 2024: AUM FRW 320bn. Homepage now FRW 456bn — use the website for live stats.
IFSWF ADF 2025 assessment. Quests conventions: Next 16 + TS + Tailwind 4; yyussa closest sibling.
When this plan is signed off, implementation starts with Phase 0 via Codex in this directory.

