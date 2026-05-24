# The Well Lived Citizen

The website and brand operating system for The Well Lived Citizen — a private household stewardship business in Los Angeles, founded by Dayna Brown. The brand is **The Well Lived Citizen** (never "Co.").

## Brand OS Skill (read before writing any WLC copy)

Load all three files BEFORE touching any client-facing copy or AI generation prompts:

- `.local/skills/wlc-brand-os/LOCKED_DECISIONS.md` — binding decisions from Dayna. Overrides every PDF in `attached_assets/`. Read first.
- `.local/skills/wlc-brand-os/HANDOFF.md` — operating rules derived from past mistakes. Follow them.
- `.local/skills/wlc-brand-os/SKILL.md` — voice, tone, audiences, content framework, platform and post-type guidance.

If any of these files are missing when you arrive, recreate them from the references in this `replit.md` and the live site. Do not assume "missing" means "deleted on purpose."

## Run & Operate

- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- Required env: `DATABASE_URL` — Postgres connection string

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)
- Build: esbuild (CJS bundle)

## Where things live

_Populate as you build — short repo map plus pointers to the source-of-truth file for DB schema, API contracts, theme files, etc._

## Architecture decisions

_Populate as you build — non-obvious choices a reader couldn't infer from the code (3-5 bullets)._

## Product

_Describe the high-level user-facing capabilities of this app once they exist._

## Google Search Console Setup

The site has `sitemap.xml` and `robots.txt` in place. To complete Google Search Console verification:

1. Go to [search.google.com/search-console](https://search.google.com/search-console) and add `https://www.thewelllivedcitizen.com` as a URL-prefix property.
2. **Verify ownership** — two options:
   - **HTML meta tag (easiest):** Google gives you a `<meta name="google-site-verification" content="..." />` tag. Uncomment the placeholder already in `artifacts/wlc-site/index.html` and paste in your code, then redeploy. Return to Search Console and click Verify.
   - **DNS TXT record:** Add a TXT record at your domain registrar with the value Google provides (e.g. `google-site-verification=...`). Wait up to an hour for DNS to propagate, then click Verify.
3. **Submit the sitemap:** In the Search Console sidebar → Sitemaps → enter `sitemap.xml` → Submit.

Pages take 1–4 weeks to appear in Google results after submission.

## User preferences

- **Do not author copy from memory.** Search the live site and the Brand OS skill files first. Reuse existing canonical phrasing verbatim.
- **Do not audit unless asked.** Dayna does not want unsolicited reviews of her copy or business; fix what's requested.
- **When she corrects something verbally, write it down.** Append the correction to `.local/skills/wlc-brand-os/LOCKED_DECISIONS.md` with a date before touching any site surface.
- **Report only what was actually changed.** List the files. Don't claim "fixed across the site" unless every surface was updated.

## Gotchas

- Older PDFs in `attached_assets/` contain stale branding (e.g. "Co." suffix, `thewelllivedcitizenco.com`, Yelp references, "decor/household overflow" in Fast Bag Fill). `LOCKED_DECISIONS.md` overrides them on every point.
- The frontend copy and `artifacts/api-server/src/routes/generate.ts` prompts must agree. Update both in the same pass.
- The brand-OS files (`SKILL.md`, `LOCKED_DECISIONS.md`, `HANDOFF.md`) live in `.local/skills/wlc-brand-os/` only. If a `wlc-brand-voice/` directory ever appears, consolidate it back into `wlc-brand-os/`.
- Fast Bag Fill is clothing and accessories only. Never list decor, furniture, art, books, kitchen items, lamps, garage items, or collectibles as Fast Bag categories.

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
