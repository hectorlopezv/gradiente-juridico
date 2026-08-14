# Gradiente Jurídico

Landing page for **Gradiente Jurídico**, a law firm specialized in intellectual property and business law. Built with a Baker McKenzie–inspired layout and the firm's navy blue brand identity.

## Tech stack

- [Next.js 16](https://nextjs.org/) (App Router)
- [React 19](https://react.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/) (base-nova style)
- [Lucide React](https://lucide.dev/) icons
- TypeScript

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Scripts

| Command        | Description              |
| -------------- | ------------------------ |
| `npm run dev`  | Start development server |
| `npm run build`| Production build         |
| `npm run start`| Start production server  |
| `npm run lint` | Run ESLint               |

## Project structure

```
src/
├── app/              # Next.js App Router (layout, page, globals)
├── components/       # UI sections and shadcn components
│   ├── ui/           # shadcn/ui primitives
│   ├── header.tsx
│   ├── hero.tsx
│   ├── about-section.tsx
│   ├── practice-areas.tsx
│   ├── how-we-work.tsx
│   ├── stats-section.tsx
│   └── footer.tsx
└── lib/
    ├── data.ts       # Content and navigation data
    └── utils.ts      # Utility helpers
public/               # Brand images and static assets
```

## Deploy on Vercel

1. Push this repository to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Vercel auto-detects Next.js — no extra config needed.
4. Click **Deploy**.

Alternatively, use the Vercel CLI:

```bash
npm i -g vercel
vercel
```

## License

Private — © Gradiente Jurídico. All rights reserved.
