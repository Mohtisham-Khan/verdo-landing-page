# Verdo — Social Media Marketing Agency Landing Page

Landing page for **Verdo**, a social media marketing agency. Single-page site covering services, case studies, process, pricing, and FAQ.

## Stack

- [Next.js 16](https://nextjs.org) (App Router, Cache Components, Turbopack)
- TypeScript
- Tailwind CSS v4
- Framer Motion

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Other scripts:

```bash
npm run lint   # eslint
npm run build  # production build
```

## Project Structure

| Path | Purpose |
| --- | --- |
| `app/layout.tsx` | Header, footer, and page metadata content |
| `app/page.tsx` | All section content (about, services, case studies, pricing, FAQ) |
| `components/templates/` | Section components |
| `content/home/types.ts` | Content prop types |
| `app/globals.css` | Brand tokens (colors, fonts) |

All copy lives in the content objects in `app/layout.tsx` and `app/page.tsx` — components only render what they receive.

## Deployment

Connected to [Netlify](https://www.netlify.com) via GitHub. Zero configuration required; the Next.js runtime is applied automatically at build time. Every push to `main` redeploys the site.
