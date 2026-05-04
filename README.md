# Nuvigant

Marketing and product site for [Nuvigant](https://nuvigant.com) — notarial management with AI (client portal, compliance, e-invoicing, and related offerings). Built with the Next.js App Router.

## Stack

- [Next.js](https://nextjs.org/) 16 (App Router)
- [React](https://react.dev/) 19
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) 4
- Content: Markdown via [gray-matter](https://github.com/jonschlinkert/gray-matter) and [marked](https://marked.js.org/), syntax highlighting with [highlight.js](https://highlightjs.org/)

## Prerequisites

- Node.js 20 or newer (LTS recommended)
- npm (or another compatible package manager)

## Setup

```bash
npm install
```

## Environment

| Variable | Description |
| -------- | ----------- |
| `NEXT_PUBLIC_SITE_URL` | Canonical site origin (no trailing slash), e.g. `https://nuvigant.com`. Used for metadata, Open Graph, RSS, sitemap, and JSON-LD. On Vercel, `VERCEL_URL` is used when this is unset. Locally it defaults to `http://localhost:3000` (or `PORT` if set). |

## Scripts

| Command | Description |
| ------- | ----------- |
| `npm run dev` | Start the development server |
| `npm run build` | Production build |
| `npm run start` | Run the production server (after `build`) |
| `npm run lint` | Run ESLint (`next lint`) |

## Project layout

- `src/app/` — Routes, layouts, and route handlers (blog under `blog/`, RSS at `blog/rss.xml`, etc.)
- `src/components/` — Shared UI
- `src/lib/` — Utilities (e.g. canonical site URL)
- `wordpress-redirects.ts` — Legacy WordPress URL redirects, merged in `next.config.ts`

## License

Private repository; all rights reserved unless otherwise stated.
