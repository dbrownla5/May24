# The Well Lived Citizen

The website and brand operating system for The Well Lived Citizen — a private household stewardship business in Los Angeles, founded by Dayna Brown. The brand is **The Well Lived Citizen** (never "Co.").

## Brand OS Skill (read before writing any WLC copy)

- `.local/skills/wlc-brand-os/SKILL.md` — voice, tone, language rules, two-layer brand model, service architecture, locked pricing, drift detection. Load this BEFORE touching any client-facing copy.
- `.local/skills/wlc-brand-os/content-generation.md` — workflow for converting raw founder input (voice memos, notes, brainstorms) into on-brand copy.

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

_Populate as you build — explicit user instructions worth remembering across sessions._

## Gotchas

_Populate as you build — sharp edges, "always run X before Y" rules._

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
