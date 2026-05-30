# Vinay Kumar L

**Software Engineer - 1**

Building clean, architected, scalable software systems with first-principles problem-solving — focusing only on what matters, and harnessing modern tools and human-AI collaboration.

![Next.js](https://img.shields.io/badge/Next.js-15-000000?logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-19-149ECA?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38BDF8?logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Motion-12-0055FF?logo=framer&logoColor=white)

---

## Overview

A minimal, bold, design-engineered personal site. Type, rhythm, and motion are treated as a system — not decoration.

Four surfaces — **Home**, **Skills**, **Résumé**, and **Blog** — share one tightly-defined visual language, so consistency is structural rather than manual.

- **Design-system first** — one type scale, one spacing rhythm, one alignment, one set of button primitives.
- **First-class theming** — light/dark via `next-themes` with an OKLCH token system and a cross-fading toggle.
- **Considered motion** — route transitions and skeleton loading states (Framer Motion).
- **Accessible by default** — semantic landmarks, focus-visible rings, `aria-label`s, reduced-motion support.
- **Modern stack** — Next.js App Router on React 19, bundled with Turbopack.

---

## Design System

The source of truth lives in `app/globals.css` (tokens) and the shared components under `components/`.

### Type scale

Hierarchy is carried by **weight and a deliberate 2× jump** — not by a long ladder of sizes. Minimal, with bold as the lead.

| Level          | Token / classes        | Size (mobile → desktop) | Weight   | Used for                              |
| -------------- | ---------------------- | ----------------------- | -------- | ------------------------------------- |
| **Display**    | `text-main-heading`    | 36 → 48px               | Bold     | Name, every page title, article title |
| **Heading**    | `text-2xl sm:text-3xl` | 24 → 30px               | Bold     | Sections, blog post titles            |
| **Subheading** | `text-xl`              | 20px                    | Semibold | Card / group titles                   |
| **Body**       | `text-lg`              | 18px                    | Regular  | Paragraphs, excerpts, descriptions    |
| **Meta**       | `text-sm`              | 14px                    | Regular  | Dates, read time, captions            |

### Spacing rhythm

A two-step vertical rhythm keeps every page on the same grid.

| Step      | Token                   | Value | Applies to                                   |
| --------- | ----------------------- | ----- | -------------------------------------------- |
| **Line**  | `space-y-6` / `gap-6`   | 24px  | Stacked intro lines (brand → role → summary) |
| **Block** | `gap-12` / `space-y-12` | 48px  | Major blocks and content sections            |

### Alignment

Content sits in a column nudged **a hair left of center** on large screens (`lg:-translate-x-8`, ~32px) — present, not aggressive. Text is left-aligned throughout.

| Surface                          | Column      | Reading measure |
| -------------------------------- | ----------- | --------------- |
| Home (hero)                      | `max-w-2xl` | —               |
| Skills · Résumé · Blog · Article | `max-w-4xl` | `max-w-2xl`     |

### Theming & color

`next-themes` (class strategy) toggles an **OKLCH** token set defined for `:root` and `.dark`, so every surface, border, and control follows the active theme.

```css
--background  --foreground        /* page     */
--card        --card-foreground
--muted       --muted-foreground
--border      --ring              /* controls */
```

### Buttons

Three intentional types, each from a single source so they never drift:

| Type             | Shape                | Role                        | Source                        |
| ---------------- | -------------------- | --------------------------- | ----------------------------- |
| **Primary**      | Filled pill          | Main action (e.g. Download) | inline / `bg-foreground`      |
| **Secondary**    | Outline pill         | Social links                | `components/social-links.tsx` |
| **Theme toggle** | Circular icon button | Sun ⇄ Moon cross-fade       | `components/theme-toggle.tsx` |

Brand glyphs (GitHub, LinkedIn) live in `components/icons.tsx` — one mark, reused everywhere.

### Typography

- **Geist Sans / Mono** — interface and code (`next/font`).
- **Circular Std** — the wordmark only, loaded locally from `app/fonts/`.

---

## Tech Stack

| Area       | Choice                                                        |
| ---------- | ------------------------------------------------------------- |
| Framework  | [Next.js 15](https://nextjs.org) (App Router · Turbopack)     |
| Language   | [TypeScript 5](https://www.typescriptlang.org)               |
| UI runtime | [React 19](https://react.dev)                                |
| Styling    | [Tailwind CSS v4](https://tailwindcss.com) · `tw-animate-css` |
| Theming    | [next-themes](https://github.com/pacocoursey/next-themes)    |
| Motion     | [Framer Motion](https://www.framer.com/motion/)              |
| Primitives | [Radix UI](https://www.radix-ui.com) (shadcn/ui style)       |
| Icons      | [lucide-react](https://lucide.dev) + custom brand glyphs     |

---

## Project Structure

```text
personal-website/
├── app/
│   ├── layout.tsx          # Root layout · fonts · ThemeProvider
│   ├── page.tsx            # Home / hero
│   ├── globals.css         # Design tokens + system CSS
│   ├── skills/page.tsx
│   ├── resume/page.tsx
│   └── blog/
│       ├── page.tsx        # Post index
│       └── [slug]/page.tsx # Article
├── components/
│   ├── icons.tsx           # Shared brand glyphs (GitHub, LinkedIn)
│   ├── social-links.tsx    # Outline-pill social buttons
│   ├── theme-provider.tsx  # next-themes wrapper
│   ├── theme-toggle.tsx    # Cross-fade Sun/Moon toggle
│   ├── page-transition.tsx # Route motion
│   ├── resume-viewer.tsx   # PDF viewer + fallback
│   ├── loading/            # Per-route skeletons
│   └── ui/                 # Radix / shadcn primitives
├── hooks/                  # use-loading · use-mobile
├── lib/                    # utils
└── public/                 # static assets
```

---

## Getting Started

**Prerequisites:** Node.js **18.18+** (20+ recommended) and npm.

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server (Turbopack)
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — edits to `app/page.tsx` hot-reload instantly.

---

## Scripts

| Command         | Description                             |
| --------------- | --------------------------------------- |
| `npm run dev`   | Start the dev server with Turbopack     |
| `npm run build` | Production build                        |
| `npm run start` | Serve the production build              |
| `npm run lint`  | Lint with ESLint (`eslint-config-next`) |

---

## Routes

| Path           | Page                                     |
| -------------- | ---------------------------------------- |
| `/`            | Home — name, role, summary, social links |
| `/skills`      | Toolkit & core principles                |
| `/resume`      | Résumé viewer with PDF download          |
| `/blog`        | Writing index                            |
| `/blog/[slug]` | Individual article                       |

---

## Deployment

Optimized for [**Vercel**](https://vercel.com/new) — push the repo, import it, and ship. No environment variables are required for the base site. See the [Next.js deployment docs](https://nextjs.org/docs/app/building-your-application/deploying) for other targets.

---

Designed & built by **Vinay Kumar L** — [GitHub ↗](https://github.com/v-shadowmaster) · [LinkedIn ↗](https://linkedin.com/in/vinay-kumar-l)
