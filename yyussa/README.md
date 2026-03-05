# YYUSSA Group Website

Corporate marketing website for YYUSSA Group Ltd, built with Next.js App Router. The site presents the company's real estate, import and export, and logistics divisions, along with leadership, insights, and contact information.

Live site: https://yyussa.nishimweprince.dev/

## Overview

The application is a content-driven corporate website focused on:

- A branded homepage with hero, company stats, services, company overview, and partner highlights
- Dedicated pages for About, Services, Team, Blog, and Contact
- Three detailed service pages for Real Estate, Import & Export, and Logistics
- A statically generated blog powered by local MDX content
- Responsive layouts, page-level metadata, animated reveals, and accessible navigation basics

## Current Route Map

- `/` home page
- `/about` company story, milestones, mission, and vision
- `/services` overview of the three business divisions
- `/services/real-estate`
- `/services/import-export`
- `/services/logistics`
- `/team` leadership and department listings
- `/blog` insights listing page
- `/blog/[slug]` statically generated blog post pages from local MDX files
- `/contact` contact details, inquiry form, and embedded map

## Tech Stack

- Next.js 16 with the App Router
- React 19
- TypeScript
- Tailwind CSS 4
- `framer-motion` for motion and reveal effects
- `lucide-react` for iconography
- `gray-matter` and `next-mdx-remote` for blog content parsing and rendering
- `react-hook-form`, `zod`, and `@hookform/resolvers` for contact form validation

## Project Structure

- `app/` route segments, page metadata, and layout
- `src/components/` UI, layout, home, blog, and contact components
- `src/lib/constants.ts` shared navigation, services, stats, team, partner, property, and contact data
- `src/lib/blog.ts` blog post loading and sorting logic
- `src/content/blog/` MDX blog posts
- `public/` static assets

## Local Development

Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

Production commands:

```bash
npm run build
npm run start
```

Linting:

```bash
npm run lint
```

## Content Updates

Most site content is currently maintained directly in the codebase:

- Company stats, navigation, services, team members, properties, partners, and contact details live in `src/lib/constants.ts`
- Blog posts live in `src/content/blog/` as `.mdx` files with frontmatter
- Page copy and section composition live in each route file under `app/` and reusable components under `src/components/`

## Notes

- The blog is file-based and statically generated from local MDX content
- The contact form currently performs client-side validation and shows a success state, but it is not connected to a backend submission service yet
- Global metadata is configured in `app/layout.tsx`
