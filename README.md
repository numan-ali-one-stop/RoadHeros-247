# Road Heros

Next.js 16 (App Router) site, styled with Tailwind CSS and shadcn/ui.

## Stack

- [Next.js](https://nextjs.org) (App Router, TypeScript strict mode)
- [Tailwind CSS](https://tailwindcss.com) v4
- [shadcn/ui](https://ui.shadcn.com) components in `src/components/ui`
- Turbopack for local dev
- Prettier + `prettier-plugin-tailwindcss`

## Project structure

```
src/
  app/            routes: layout, page, not-found, error, loading, sitemap, robots
  components/     app-specific components (site header/footer, etc.)
  components/ui/  shadcn/ui components
  lib/            utils, site config
  styles/         extra global CSS (optional; base styles live in src/app/globals.css)
```

## Setup

```bash
npm install
cp .env.example .env.local
```

Set `NEXT_PUBLIC_SITE_URL` in `.env.local` if you want metadata, the sitemap,
and robots.txt to build against something other than `http://localhost:3000`.

## Development

```bash
npm run dev
```

Runs `next dev --turbopack` on [http://localhost:3000](http://localhost:3000).

Other scripts:

```bash
npm run lint          # ESLint
npm run format        # Prettier — write
npm run format:check  # Prettier — check only
```

## Build

```bash
npm run build
npm run start
```

## Adding shadcn/ui components

```bash
npx shadcn@latest add <component>
```

Components land in `src/components/ui`.

## Deploying to Vercel

1. Push this repo to GitHub/GitLab/Bitbucket.
2. Import the project in [Vercel](https://vercel.com/new) — it will detect
   `vercel.json` (`framework: "nextjs"`) automatically.
3. In the Vercel project's **Environment Variables**, set
   `NEXT_PUBLIC_SITE_URL` to your production URL (e.g.
   `https://roadheros247.com`) for Production (and Preview, if you want
   preview deploys to use a distinct URL). This is the single variable that
   drives metadata, `sitemap.ts`, and `robots.ts` — no code changes needed
   when you change domains.
4. Deploy.

### Connecting a custom domain

Once you have a domain:

1. In the Vercel project, go to **Settings → Domains** and add your domain.
2. Follow Vercel's instructions to point your domain's DNS (an `A`/`ALIAS`
   record at your registrar, or nameservers if you move DNS to Vercel).
3. Vercel provisions SSL automatically once DNS is verified.
4. Update `NEXT_PUBLIC_SITE_URL` (Production environment) to
   `https://<your-domain>` and redeploy so metadata, the sitemap, and
   robots.txt reflect the final domain.
