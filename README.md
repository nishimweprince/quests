# Quests

**Redesigning famous brands' websites** — a collection of modern, production-quality website redesigns for well-known companies and organizations. Each project reimagines an existing brand’s digital presence with contemporary design, improved UX, and a consistent tech stack.

---

## Repository objectives

- **Design practice** — Apply modern UI/UX patterns, typography, and layout to real-world brand identities.
- **Technical execution** — Build responsive, accessible, and performant sites using current web technologies.
- **Portfolio value** — Showcase end-to-end implementation of corporate and brand websites.
- **Reusability** — Establish shared patterns (design tokens, component structure, routing) that can be adapted across projects.

Each subdirectory in this repo is a **standalone website project** representing a redesign of a specific brand. Projects are self-contained but follow common conventions where it makes sense.

---

## Projects

| Project   | Brand / organization   | Description |
|----------|------------------------|-------------|
| [yyussa](./yyussa) | **YYUSSA Group Ltd** | Corporate website for a Rwandan conglomerate (real estate, import/export, logistics). Full marketing site with blog, team, services, and contact. |

*Additional brand redesigns will be added as new subdirectories.*

---

## YYUSSA (yyussa/) — project overview

The **yyussa** project is a full redesign of the corporate website for **YYUSSA Group Ltd**, a Rwandan conglomerate with 30+ years in real estate, commercial wholesale, and logistics across East Africa.

- **Live site:** [https://yyussa.nishimweprince.dev/](https://yyussa.nishimweprince.dev/)
- **Scope:** Marketing site with homepage, about, services (three divisions), team, blog, contact, and legal pages.

### Website layout and structure

The site uses a **single global layout** (navbar + main + footer) and content-driven inner pages. Structure is as follows.

#### Global layout

- **Root layout** (`app/layout.tsx`)
  - Skip-to-content link for accessibility
  - **Navbar** — fixed, scroll-aware (background/blur on scroll), logo + main nav + “Get in Touch” CTA
  - **Main** — `id="main-content"` for focus target
  - **Footer** — brand, quick links, services, contact info, legal links, copyright

- **Typography**
  - **Libre Baskerville** — headings and editorial emphasis (serif)
  - **DM Sans** — body, labels, UI (sans-serif)

- **Design direction**
  - Dark industrial corporate look: dark backgrounds (`--bg-dark`), light/cream sections (`--bg-light`), accent gold/brass and primary orange used sparingly
  - CSS variables in `app/globals.css` for colors, surfaces, and semantic text
  - Grain overlay and subtle gradients in hero and key sections

#### Homepage (`/`)

1. **Hero** — Full-viewport section with:
   - Eyebrow: “Established 1994 · Kigali, Rwanda”
   - Headline: “Building Reliable Regional Enterprise” (accent on “Regional Enterprise”)
   - Short value proposition and two CTAs: “Explore Divisions”, “Our Corporate Story”
   - Decorative glows and grid; stat strip at bottom (e.g. “3 Strategic Divisions”, “30+ Years of Excellence”, “Regional Presence in East Africa”)

2. **Stats bar** — Animated counters (e.g. 30+ years, 100+ rental properties, 2M+ tonnes cargo) from `src/lib/constants.ts`

3. **Services section** — Three service cards (Real Estate, Import & Export, Logistics) with short descriptions and links to `/services/[slug]`

4. **About preview** — Teaser of company story and link to `/about`

5. **Partners section** — Logos from `PARTNERS` in constants (e.g. Vivo Energy, World Vision, Bank of Kigali, MTN)

#### Route map

| Route | Purpose |
|-------|---------|
| `/` | Home — hero, stats, services, about preview, partners |
| `/about` | Company story, milestones timeline, mission & vision, core values, stats band |
| `/services` | Overview of three divisions with cards and links to sub-pages |
| `/services/real-estate` | Real estate division detail page |
| `/services/import-export` | Import & export division detail page |
| `/services/logistics` | Logistics division detail page |
| `/team` | Leadership and department listings (management, finance, operations) |
| `/blog` | Blog index; list of MDX posts |
| `/blog/[slug]` | Individual blog post (statically generated from `src/content/blog/*.mdx`) |
| `/contact` | Contact details, inquiry form, map/address |
| `/privacy-policy` | Privacy policy (legal document layout) |
| `/terms-and-conditions` | Terms and conditions (legal document layout) |

#### Navigation (navbar)

- **Desktop:** Logo, Home, About Us, Services (dropdown: Real Estate, Import & Export, Logistics), Team, Blog, Contact Us, “Get in Touch” CTA
- **Mobile:** Hamburger menu; slide-out panel with same links and CTA
- Active state: accent color + underline for current page/section

#### Footer

- **Column 1:** Brand (YYUSSA Group Ltd), tagline, short description, social links (Facebook, LinkedIn, Twitter)
- **Column 2:** Quick links (Home, About, Team, Blog, Contact)
- **Column 3:** Service links (Real Estate, Import & Export, Logistics)
- **Column 4:** Contact info (address, logistics phone, real estate phone, hours)
- **Bottom bar:** Copyright, Privacy Policy, Terms & Conditions

### Design system (yyussa)

- **Primary:** `--color-primary` (YYUSSA orange) — CTAs, key highlights
- **Accent:** `--color-accent` (muted blue-grey) — links, labels, focus, secondary UI
- **Backgrounds:** `--bg-dark`, `--bg-light`, `--bg-white`, `--bg-grey-100`
- **Surfaces:** `--color-grey-800`, `--color-grey-700`, etc. for cards and bars
- **Text:** `--color-text-dark`, `--color-text-light`, `--color-grey-*` for hierarchy
- **Borders:** `--color-grey-800`, `--color-secondary-dark`, etc.
- **Fonts:** `--font-display` (Libre Baskerville), `--font-body` (DM Sans)

Reusable UI pieces: `ScrollReveal`, `AnimatedCounter`, `PageHeader`, `SectionLabel`, `Button`, `Container`, and shared layout components (Navbar, Footer).

### Content and data (yyussa)

- **Central config:** `src/lib/constants.ts` — `NAV_LINKS`, `STATS`, `SERVICES`, `PARTNERS`, `TEAM`, `PROPERTIES`, `CORE_VALUES`, `CONTACT_INFO`, `BLOG_CATEGORIES`, `BLOG_TAGS`
- **Blog:** MDX files in `src/content/blog/` with frontmatter; `src/lib/blog.ts` for loading and sorting
- **Copy:** Inline in page components and in constants; legal content in dedicated legal page components

### Tech stack (yyussa)

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4, global CSS with design tokens
- **Motion:** Framer Motion (reveals, nav, counters)
- **Icons:** Lucide React
- **Blog:** `gray-matter`, `next-mdx-remote` for MDX
- **Forms:** `react-hook-form`, `zod`, `@hookform/resolvers` (contact form validation; no backend submission yet)

### Running yyussa locally

```bash
cd yyussa
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Production: `npm run build` then `npm run start`. Lint: `npm run lint`.

For more detail (folder structure, content update notes, known limitations), see [yyussa/README.md](./yyussa/README.md).

---

## Shared conventions (across projects)

- Each project lives in its own directory and can be run independently.
- README at repo root describes **objectives** and **all projects** at a high level.
- Each project has its own README with **setup**, **structure**, and **brand-specific** details.
- Prefer **responsive**, **accessible** patterns (e.g. skip links, semantic HTML, ARIA where needed).
- Modern stack: Next.js App Router, TypeScript, Tailwind (or equivalent), component-based UI.

---

## Contributing and adding new redesigns

1. Create a new directory (e.g. `acme/`) for the brand.
2. Build the site following the shared conventions above.
3. Add the project to the **Projects** table and, if useful, a short “Website layout and structure” subsection in this README (or link to the project’s own README).
4. Ensure the project has a README with setup and run instructions.

---

## License

Per-project; see each project’s directory for license information.
