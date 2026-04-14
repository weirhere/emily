# Emily Weir — Portfolio

A minimalist, modern portfolio site for Emily Weir, a marketing and PR
professional. Built with Next.js 16 (App Router), TypeScript, Tailwind CSS v4,
and Shadcn UI components.

## Structure

- `src/app/page.tsx` — landing page with header, hero (headshot, name,
  headline, intro), portfolio section, and footer.
- `src/app/work/[slug]/page.tsx` — individual case study pages (brief, role,
  goal, outcomes, source link).
- `src/components/site-header.tsx` / `site-footer.tsx` — shared layout.
- `src/components/ui/*` — Shadcn UI primitives (Button, Card, Badge,
  Separator).
- `src/lib/case-studies.ts` — writing samples / case study content. Edit this
  file to add or update work.
- `src/lib/site.ts` — name, headline, intro, LinkedIn URL, and resume path.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customizing content

- Update personal info (name, headline, intro, LinkedIn, resume URL) in
  `src/lib/site.ts`.
- Replace `public/headshot.svg` with your own photo (keep the same filename or
  update `site.headshotUrl`).
- Drop your PDF resume at `public/emily-weir-resume.pdf` (the path referenced
  by `site.resumeUrl`).
- Add or edit writing samples in `src/lib/case-studies.ts`.

## Scripts

- `npm run dev` — start the dev server.
- `npm run build` — production build.
- `npm start` — run the built app.
- `npm run lint` — lint the project.
