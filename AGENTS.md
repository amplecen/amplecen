# Amplecen — Agent Rules

<!-- BEGIN:nextjs-agent-rules -->
## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ
from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before
writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

---

## Project identity

**Organization:** Amplecen  
**Repo:** amplecen.com — the main organizational landing page  
**Stack:** Next.js (App Router) · Tailwind CSS  
**Stage:** Pre-incorporation, pre-funding. Every decision should reflect that — no over-engineering.

### Brand architecture
```
amplecen.com              → this repo — warm, human, org-level
rhythme.amplecen.com      → separate repo — Rhythmé product (SaaS)
lyceum.amplecen.com       → separate repo — Amplecen Lyceum (classical branch)
```

---

## Stack rules

### Next.js
- App Router only. Never use the Pages Router.
- Always use `app/` directory conventions: `page.tsx`, `layout.tsx`, `loading.tsx`, `error.tsx`.
- Server components by default. Add `'use client'` only when the component needs browser APIs, event handlers, or React state.
- Never use `getServerSideProps`, `getStaticProps`, or `getInitialProps` — these are Pages Router patterns and do not exist here.
- Metadata lives in `layout.tsx` or `page.tsx` via the `metadata` export or `generateMetadata`. Never use `<Head>` from `next/head`.
- Images: always use `next/image`. Never use bare `<img>` tags.
- Links: always use `next/link`. Never use bare `<a>` tags for internal navigation.
- Fonts: load via `next/font` in `layout.tsx`. Never import from Google Fonts directly in CSS.
- API routes live in `app/api/[route]/route.ts` and export named HTTP method handlers (`GET`, `POST`, etc.).
- Check `node_modules/next/dist/docs/` for the exact version's conventions before assuming anything.

### Tailwind
- Config lives in `tailwind.config.ts`.
- Use Tailwind utility classes for all styling. Avoid inline styles unless dynamically computed at runtime.
- Brand tokens (colors, fonts, spacing) should be extended in the config — never hardcode hex values in components.
- Do not install or use Shadcn unless explicitly instructed. Components are built from scratch here.

---

## Brand tokens (Amplecen — warm editorial)

These are the canonical values. Always use these. Do not invent new colors.

```
--midnight:      #2D4B6E   primary — nav, headings, buttons
--midnight-deep: #1E3350   hover states
--ember:         #E8855A   accent — CTAs, highlights, eyebrows
--ember-dim:     #C4693A   ember hover
--warm-white:    #F5F0E8   page background
--warm-white-2:  #EDE8DF   section alternates
--ink:           #1A2B3C   body text
--haze:          #8FAFC9   muted text, borders
```

Fonts (loaded via `next/font`):
- Display: Fraunces — hero headings only
- Body: DM Sans — all other text
- Mono: DM Mono — labels, code, eyebrows

---

## File structure

```
amplecen.com/
├── app/
│   ├── layout.tsx          # root layout, fonts, metadata
│   ├── page.tsx            # landing page
│   ├── globals.css         # Tailwind base + brand tokens
│   ├── sitemap.ts          # auto-generated /sitemap.xml
│   ├── robots.ts           # auto-generated /robots.txt
│   └── opengraph-image.tsx # auto-generated OG image
├── components/             # shared UI components
│   └── [ComponentName]/
│       └── index.tsx
├── public/                 # static assets
│   ├── favicon.ico
│   └── ...
├── tailwind.config.ts
├── next.config.ts
├── tsconfig.json
├── package.json
└── AGENTS.md               # this file
```

---

## Code conventions

### TypeScript
- Strict mode is on. No `any`. No `// @ts-ignore`.
- Prop types defined inline or as a named `interface` directly above the component.
- No default exports from `lib/` or `utils/` — named exports only. Components use default exports.

### Components
- One component per file.
- File and component name must match exactly — `Nav.tsx` exports `function Nav()`.
- Keep components small. If a component exceeds ~120 lines, split it.
- No logic inside JSX. Extract to a named variable or function above the return statement.

### Styling
- Tailwind classes only. No CSS Modules. No styled-components.
- Responsive: mobile-first. Use `sm:`, `md:`, `lg:` breakpoints in that order.
- Hover and focus states on every interactive element — no exceptions.
- All interactive elements need a visible focus ring for accessibility.

### Naming
- Components: PascalCase
- Files: PascalCase for components, kebab-case for everything else
- CSS variables: kebab-case
- Functions and variables: camelCase
- Constants: SCREAMING_SNAKE_CASE

---

## What not to do

- Do not install packages without being asked. The stack is intentionally minimal.
- Do not add Shadcn, Radix, Headless UI, or any component library unless explicitly instructed.
- Do not use `useEffect` for data fetching — use Server Components or `fetch` in async components.
- Do not hardcode copy. Text content belongs in the component where it's rendered, clearly readable.
- Do not create files outside `app/`, `components/`, or `public/` without a clear reason.
- Do not add `console.log` statements to committed code.
- Do not use `px` units in Tailwind where `rem`-based classes exist.

---

## Separate repos — do not cross-contaminate

Each site is its own repository with its own identity:

| Repo | Brand | Fonts | Base color |
|---|---|---|---|
| amplecen.com | Warm editorial | Fraunces + DM Sans | #F5F0E8 |
| rhythme.amplecen.com | Warm human | Fraunces + DM Sans | #F7F3EE |
| lyceum.amplecen.com | Classical dark | IM Fell English + Cormorant + Jost | #1C1814 |

Do not copy styles, tokens, or components across repos without being explicitly told to.

---

## Context for AI agents

- This is a pre-launch marketing site. It does not have authentication, a database, or an API.
- The contact form needs a real handler before going live — currently client-side only.
- The primary CTA ("See what we're building") scrolls to the products section.
- Rhythmé is the flagship product. It lives at `rhythme.amplecen.com` — link there, do not recreate it here.
- Amplecen Lyceum is the classical intellectual branch. It lives at `lyceum.amplecen.com`.
- When in doubt, do less. Minimal, correct, and clean beats clever.