# Copilot Instructions for margusliinev.com

These notes orient AI coding agents to be effective immediately in this repo. Keep it brief, concrete, and code-first.

## Overview

- Framework: Next.js 15 App Router with TypeScript and React 19 (`src/app`). Tailwind CSS v4 in `globals.css`.
- Purpose: Personal website landing page; metadata and SEO centralized in `src/helpers/seo.ts`.
- Runtime: Node.js middleware (`middleware.ts`) and standard Next.js server rendering. Turbopack used for dev/build.

## Core Structure

- `src/app/layout.tsx`: Root layout. Imports Inter font, global styles, and composes full `metadata`.
- `src/app/page.tsx`: Home page. Tailwind utility classes and SVG logo import via `next/image`.
- `src/helpers/seo.ts`: Single source for `TITLE`, `DESCRIPTION`, `KEYWORDS`, `BASE_URL`, author/social. Update here to propagate across metadata routes and layout.
- `public/images`: PWA icons, profile picture and others.

## Build & Run

- Dev: `npm run dev` (Next.js with Turbopack). Build: `npm run build`. Start: `npm start`.
- Checks: `npm run check` runs Prettier check, ESLint (flat config), then `tsc --noEmit`.
- Lint/Format on demand: `npm run lint` (with `--fix`), `npm run format`.

## Conventions & Patterns

- Aliases: Import via `@/*` mapped to `./src/*` (see `tsconfig.json`). Prefer `import {...} from '@/helpers/seo'` style.
- Metadata: Derive route metadata from `seo.ts` and `metadataBase` in `layout.tsx`.
- Fonts: Use `next/font/google` Inter with `display: 'swap'`. Add new fonts via same API in layout.
- Tailwind v4: Theme tokens declared in `src/app/globals.css` under `@theme`. Reuse provided color names: `bg-background`, `text-foreground`, `text-foreground-muted`, `bg-primary[-light|-dark]`, etc. Custom breakpoint `xs` (30rem) is available via `xs:`. Utility classes like `noise` are custom and used on `<body>`.

## Adding Pages & Routes

- New page: create `src/app/<route>/page.tsx`. Import global styles via layout; avoid duplicate font or style imports.
- Metadata per page: Define `export const metadata: Metadata = {...}` in the route, reusing constants from `seo.ts`.
- Static assets: Place under `public/` and reference as `/path.ext`. For images, prefer `next/image` where appropriate.

## SEO/PWA

- `robots.ts` and `sitemap.ts` compose from `BASE_URL`. Update `BASE_URL` on domain changes.
- `manifest.ts` uses `TITLE`/`DESCRIPTION`; icons are in `public/`.

## ESLint/TypeScript

- ESLint flat config extends `next/core-web-vitals` and `next/typescript`;
- Strict TS with `strict` in `tsconfig.json`. Use `unknown` over `any`. Avoid `@ts-ignore`.
