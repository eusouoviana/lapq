# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

LAPQ (Laboratório de Avaliação e Pesquisa Qualitativa) — institutional website for a Brazilian qualitative research lab affiliated with UPM and UFPE post-graduate programs. Portuguese-language site with event registration, question submission, and researcher/publication listings.

## Commands

- `bun run dev` — start Vite dev server
- `bun run build` — production build (outputs to `dist/`)
- `bun run lint` — ESLint
- `bun run preview` — preview production build locally

## Tech Stack

- **Vite + React 18 + TypeScript** (SPA, not Next.js)
- **Tailwind CSS v3** with custom design tokens via CSS variables
- **react-router-dom v6** — client-side routing (all routes in `src/App.tsx`)
- **Supabase** — backend (database + Edge Functions via Deno)
- **framer-motion** — page animations
- **react-hook-form** — form handling
- **react-input-mask** — Brazilian phone/CPF input masks
- **lucide-react** — icons (preferred over other icon libraries)

## Architecture

### Frontend (`src/`)
- `main.tsx` — entry point, wraps App in `BrowserRouter`
- `App.tsx` — all routes defined here, pages are lazy-loaded with `React.lazy`
- `pages/` — one file per route, each a default-exported component
- `components/layout/` — Navbar (with scroll-aware transparency + mobile menu), Footer
- `components/ui/` — reusable presentational components (Loader, SectionTitle, cards)
- `components/forms/` — form components (CandidaturasForm — note: not yet wired to Supabase)
- `components/utils/` — AnimatedElement (IntersectionObserver-based reveal), ScrollToTop
- `lib/supabase.ts` — Supabase client singleton, reads `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`
- `index.css` — Tailwind directives, CSS custom properties for colors/fonts, animation keyframes, and `@layer components` utility classes (`btn`, `card`, `container-custom`, `section-padding`)

### Backend (`supabase/`)
- `functions/get-registrations/` — Deno Edge Function, GET with password-based auth, returns event registrations
- `functions/lapq-submit-question/` — Deno Edge Function, POST to submit student questions with validation and rate limiting (5/day per email)
- `migrations/` — SQL migrations creating `lapq_event_registrations` and `lapq_student_questions` tables with RLS policies

### Database Tables
- `lapq_event_registrations` — event sign-ups (name, whatsapp, email, cpf, university, course)
- `lapq_student_questions` — student Q&A submissions with `question_status_type` enum (pending/answered)

Both tables use RLS: anonymous insert, authenticated read.

## Design System

Colors defined as RGB triplets in `:root` CSS variables, consumed via Tailwind `rgb(var(...) / <alpha-value>)` pattern:
- `primary` (blue: 34 64 153), `secondary` (blue: 22 119 255), `accent` (orange: 255 95 31), `light`, `dark`

Fonts: Playfair Display (headings), Raleway (body) — loaded via Google Fonts in `index.css`.

## Environment Variables

- `VITE_SUPABASE_URL` — Supabase project URL
- `VITE_SUPABASE_ANON_KEY` — Supabase anonymous/public key

## Conventions

- All UI text is in Brazilian Portuguese (pt-BR)
- Routes use Portuguese paths (`/sobre`, `/pesquisas`, `/pesquisadores`, `/artigos`, `/livros`, `/duvidas`, `/eventos`, `/inscritos`, `/subcoordenacoes/*`)
- Pages follow a consistent pattern: hero section with `motion` animations → content sections wrapped in `AnimatedElement`
- Forms use `react-hook-form` with inline validation messages
- Originally scaffolded with Bolt (`.bolt/` config present)
