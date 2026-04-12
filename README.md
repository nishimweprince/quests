# Quests

Modern website redesigns for known brands and organizations. Each top-level folder is a standalone app with its own setup and brand-specific documentation.

---

## Repository objectives

- **Design practice** — Reimagine real brand experiences with modern UX and visual systems.
- **Technical execution** — Build responsive, accessible, performant websites with current tooling.
- **Portfolio quality** — Ship complete, production-ready implementations for each brand.
- **Reusable patterns** — Keep useful component, layout, and content patterns portable across projects.

---

## Projects

| Project | Brand / organization | Description | Stack |
|---------|----------------------|-------------|-------|
| [yyussa](./yyussa) | **YYUSSA Group Ltd** | Corporate website redesign for a Rwandan conglomerate (real estate, import/export, logistics) with marketing, team, blog, and contact flows. | Next.js 16, TypeScript, Tailwind CSS 4 |
| [tinga-tinga](./tinga-tinga) | **Godfather of Forex** | Product-focused marketing site for Tinga Tinga EA and Billionaire FX Academy with community, brokers, and conversion sections. | Next.js 16, TypeScript, Tailwind CSS 4, Framer Motion, React Three Fiber |

---

## Project snapshots

### YYUSSA (`yyussa/`)

- **Focus:** Corporate brand website with service division pages, team, blog, contact, and legal routes.
- **Run locally:**

```bash
cd yyussa
npm install
npm run dev
```

- **Docs:** [yyussa/README.md](./yyussa/README.md)

### Tinga Tinga (`tinga-tinga/`)

- **Focus:** High-conversion landing experience for forex automation and training products (`Tinga Tinga EA`, `Billionaire FX Academy`), including community links, broker recommendations, and embedded video proof content.
- **Run locally:**

```bash
cd tinga-tinga
npm install
npm run dev
```

- **Key scripts:** `npm run dev`, `npm run build`, `npm run start`, `npm run lint`
- **SEO setup:** metadata, robots, and sitemap are configured in `app/layout.tsx`, `app/robots.ts`, and `app/sitemap.ts`.
- **Docs:** [tinga-tinga/README.md](./tinga-tinga/README.md)

---

## Shared conventions (across projects)

- Each project lives in its own directory and runs independently.
- The root README lists all projects at a high level.
- Each project README covers setup, structure, and brand-specific implementation details.
- Prioritize responsive and accessible UI patterns (semantic HTML, keyboard focus, ARIA where needed).
- Preferred baseline stack is Next.js App Router + TypeScript + Tailwind CSS (project-specific additions are allowed).

---

## Contributing and adding new redesigns

1. Create a new brand directory at repo root (for example `new-brand/`).
2. Build the project using the shared conventions above.
3. Add the new app to the **Projects** table in this README.
4. Add a project snapshot here (optional) and ensure the project has its own README with setup/run instructions.

---

## License

Licensing is managed per project; see each project directory for details.
