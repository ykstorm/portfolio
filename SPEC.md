# Portfolio — Lakshyaraj Singh Rao (ykstorm)

## 1. Concept & Vision

A dark, terminal-inspired portfolio for a self-taught engineer who shipped production AI systems alone and served as CTO. The site communicates: **I build systems that handle real load, not toy projects.** No "passionate about code" copy — every word signals senior engineer thinking. Linear meets Vercel meets personal terminal aesthetic.

## 2. Design Language

### Aesthetic Direction
Terminal/CLI-inspired minimalism. Monospace accents, sharp geometry, dark background with subtle green/cyan highlights reminiscent of terminal prompts. Dense information layout that respects the reader's intelligence.

### Color Palette
```
--bg-primary:      #0A0A0A      (near-black background)
--bg-secondary:    #111111      (card/section backgrounds)
--bg-tertiary:     #1A1A1A      (hover states, borders)
--text-primary:    #E4E4E7      (main text, zinc-200)
--text-secondary:  #A1A1AA      (secondary text, zinc-400)
--text-muted:      #52525B      (muted, zinc-600)
--accent:          #22D3EE      (cyan-400, terminal green feel)
--accent-dim:      #0891B2      (cyan-600, hover accent)
--border:          #27272A      (zinc-800 borders)
--code-green:      #4ADE80      (success/accent green)
```

### Typography
- **Headings:** `Space Grotesk` (Google Fonts) — geometric, technical, distinctive
- **Body:** `Inter` — clean, highly legible
- **Monospace accents:** `JetBrains Mono` — terminal feel for code snippets, labels, dates
- **Scale:** 14px base, 1.5 line-height, tight letter-spacing on headings

### Spatial System
- 8px base grid
- Sections: 96px vertical padding on desktop, 64px mobile
- Cards: 24px padding, 8px border-radius
- Max content width: 1200px, centered

### Motion Philosophy
- Minimal, functional animations only
- Hover: 150ms ease-out color transitions
- Page transitions: none (instant navigation)
- Scroll reveals: subtle 300ms fade-up on sections entering viewport
- No decorative animations — motion serves comprehension

### Visual Assets
- Icons: Lucide React (consistent, minimal stroke icons)
- No stock photos — typography and layout carry the design
- Subtle grid/dot pattern overlay on hero (CSS-generated)

## 3. Layout & Structure

### Navigation
Fixed top nav, 64px height. Logo left (ykstorm), links right. Transparent until scroll, then `--bg-secondary` with border-bottom. Mobile: hamburger → slide-down menu.

Links: `Home`, `Projects`, `Blog`, `About`, `Contact`

### Page Structure

**Home (`/`)**
- Hero: Name + title + one-liner positioning. Dot-grid background pattern.
- Brief ticker/marquee of tech stack keywords
- Featured projects section (3 cards, links to /projects)
- Brief "about" teaser → links to /about
- Contact CTA at bottom

**Projects (`/projects`)**
- Page header: "Systems I've built"
- 4 project cards in 2x2 grid (desktop), single column (mobile)
- Each card: project name, one-line description, tech tags, link to live/repo

**Blog (`/blog`)**
- Page header: "Writing"
- 4-5 post cards, list layout (not grid)
- Each: title, date, reading time, excerpt
- Tags on each post

**About (`/about`)**
- Page header: "Background"
- 3-paragraph story (self-taught → CTO → now)
- Timeline snippet (key roles)
- Skills grid: Frontend / Backend / Infrastructure / AI

**Contact (`/contact`)**
- Page header: "Let's talk"
- Email link, GitHub, LinkedIn icons
- Brief copy: "Open to staff-level engineering roles at AI product companies"

### Footer
Minimal: copyright + built-with note. Links to GitHub, LinkedIn.

### Responsive Strategy
- Desktop: full layout with side-by-side sections
- Tablet (768px): collapsed padding, stacked grids
- Mobile (480px): single column, hamburger nav

## 4. Features & Interactions

### Navigation
- Active state: accent color underline on current page link
- Hover: text transitions to accent color
- Mobile hamburger: animated icon, slide-down menu

### Project Cards
- Default: `--bg-secondary` background, `--border` border
- Hover: border transitions to accent color, subtle translateY(-2px)
- Tags: small monospace pills, `--bg-tertiary` background

### Blog Posts
- Hover: title transitions to accent color
- Date: monospace, muted color

### Buttons/Links
- Primary: accent background, dark text, hover darkens
- Text links: accent color, underline on hover

### Forms (Contact)
- Inputs: `--bg-secondary` background, `--border` border, focus ring in accent
- Submit button: accent background

## 5. Component Inventory

### `<Navigation />`
- States: transparent (top), solid (scrolled), mobile-open
- Props: currentPath for active link highlighting

### `<Hero />`
- Static section, dot-grid CSS background
- Large heading, accent-colored role label

### `<ProjectCard />`
- Props: title, description, tags[], href, category
- States: default, hover (border accent + lift)

### `<BlogPostCard />`
- Props: title, date, excerpt, tags[], slug
- States: default, hover (title accent)

### `<SkillBadge />`
- Props: label, category
- Monospace text, subtle background

### `<Timeline />`
- Vertical list of roles with dates
- Left border accent line

### `<Footer />`
- Minimal, centered
- Social icon links

### `<SectionHeader />`
- Reusable page section headers
- Monospace label + large heading

### `<TechTag />`
- Small pill with monospace text
- Used in project cards and about page

## 6. Technical Approach

### Framework
- **Next.js 15** (App Router)
- **TypeScript** strict mode
- **Tailwind CSS v4** (CSS-first configuration)
- **Deployment target:** Vercel

### Architecture
```
app/
  layout.tsx          # Root layout with nav + footer
  page.tsx            # Home
  projects/page.tsx
  blog/page.tsx
  blog/[slug]/page.tsx
  about/page.tsx
  contact/page.tsx
  globals.css         # Tailwind + custom properties

components/
  navigation.tsx
  footer.tsx
  hero.tsx
  project-card.tsx
  blog-post-card.tsx
  section-header.tsx
  skill-badge.tsx
  timeline.tsx

lib/
  projects.ts         # Project data
  posts.ts            # Blog post data

public/
  favicon.svg
```

### Key Implementation Notes
- All pages are server components by default (App Router)
- Blog posts: static generation with `generateStaticParams`
- No CMS — content is in TypeScript data files
- Fonts loaded via `next/font/google`
- Metadata API for SEO tags per page