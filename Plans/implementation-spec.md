# Ying Ying — Link-in-Bio Website (Phase 1)

**Tech:** Next.js 15 (App Router) + Tailwind CSS v4
**Deploy:** Vercel (subdomain for now, custom domain later)
**Repo:** New GitHub repo `yingthinks`
**Source spec:** `/Users/yingyingtan/Projects/Plans/ying-ying-website-spec.md`

## Verification (all phases)
- `pnpm build` (zero errors)
- `pnpm lint` (zero warnings)
- `pnpm typecheck` (tsc --noEmit, zero errors)
- Lighthouse mobile score >= 90 performance
- All links render and are clickable
- Page is fully usable at 375px width (iPhone SE)

---

## Spec 1: Project Scaffold + Hero + Social Links

### Requirements
- Initialize Next.js 15 project with App Router, TypeScript, Tailwind CSS v4, pnpm
- Single page (`app/page.tsx`) — no routing needed for Phase 1
- Mobile-first responsive layout: centered column, max-width 480px on desktop, full-width on mobile
- **Hero section** (dark warm gradient background zone):
  - Circular avatar photo (110x110px, circular crop with subtle border)
  - Avatar image: `/Users/yingyingtan/Projects/Plans/channels4_profile 1.png` (candid family photo)
  - Avatar: 3px border `#B5C4A8`, object-fit cover, circular clip
  - Name: "Ying Ying Tan" (DM Serif Text serif, white `#FFFFFF` on dark hero)
  - Short tagline: "YING THINKS" (Poppins, uppercase, letter-spacing 3px, `#C8D4BC`)
  - Social icons: compact horizontal row (YouTube, Instagram, LinkedIn) as small Lucide icons in `#C8D4BC`, 18px, gap 24px
- **Below hero** (parchment background body section):
  - Extended tagline: "Mother of two. Lived in 6 countries. Currently inside a startup society. Thoughts on money, family & living freely." (Poppins light, `#4A5A42`, centered)
- **Social links section** — three solid terracotta buttons, stacked vertically, full-width within container:
  - "Watch on YouTube" → `https://www.youtube.com/@yingthinks` (opens new tab)
  - "Instagram" → `https://www.instagram.com/yingyingt_` (opens new tab)
  - "LinkedIn" → `https://www.linkedin.com/in/yingyingtan` (opens new tab, NOTE: user must verify this is correct profile URL)
- Each social link button: solid `#4A5A3A` olive green background, white text, small rounded corners (6px), Lucide icon + label, hover shifts to `#AB8C4B` golden brown
- **Color palette** (earthy green editorial, organic/artisanal mood):
  - Background: `#F5F0E8` (warm parchment cream)
  - Hero background: `#2D3B2D` → `#3E4D35` → `#5C6B4A` (forest green gradient)
  - Card/container: `#EDE8DF` (warm beige)
  - Primary text: `#2D3B2D` (dark forest green — headings)
  - Body text: `#4A5A42` (olive brown)
  - Secondary text: `#8A9080` (sage gray)
  - Accent / buttons: `#4A5A3A` (olive green — card labels, links, CTA arrows)
  - Button hover: `#AB8C4B` (golden brown)
  - Button text: `#FFFFFF` (white)
  - Card border: `#D4DCC8` (sage border)
  - Dividers: `#D4DCC8` (sage divider)
  - Hero text: `#FFFFFF` (white on dark hero)
  - Hero subtitle: `#C8D4BC` (sage cream on dark hero)
  - Avatar border: `#B5C4A8` (soft sage)
- Body background is warm parchment. Hero section has dark forest green gradient. Content sits in a centered container with subtle padding (px-7, py-8 on mobile)
- No animations or transitions beyond subtle hover states on buttons

### Success Criteria
- `pnpm build && pnpm lint` pass with zero errors
- Page renders correctly at 375px, 768px, and 1440px widths
- All 3 social links open correct URLs in new tabs
- Typography uses serif for name, sans-serif for body
- Color palette matches spec (warm cream editorial mood, Palette of Light style)

### Ralph Command
```
/ralph-loop:ralph-loop "Read /Users/yingyingtan/Projects/Plans/ying-ying-website-implementation-spec.md, implement Spec 1 (Project Scaffold + Hero + Social Links)" --max-iterations 25 --completion-promise "pnpm build && pnpm lint pass with zero errors"
```

---

## Spec 2: Content Sections + Contact + SEO

### Prerequisites
- Spec 1 complete (project exists, hero + social links working)

### Requirements
- **"What I'm Working On" section** — below social links, with a section divider (thin line or text label):
  - **Latest Video card:** Styled card with "Latest Video" label, YouTube channel link (`https://www.youtube.com/@yingthinks`), brief text: "Thoughts on money, family & living freely." Links to YouTube channel (until a specific video is provided)
  - **edventures.co card:** Styled card with "edventures.co" label, brief text: "Adventures & learning experiences for families." Links to `https://edventures.co` (opens new tab)
  - **"Life in a Startup Society" card:** Styled card with brief text: "Want to level up? That's what I'm doing at Network School." Followed by a subtle link: "Curious? Learn more →" linking to `https://ns.com/ying` (opens new tab)
  - All cards use consistent styling: warm beige `#EDE8DF` background, 8px rounded corners, 20px padding, 1px `#D4DCC8` border, card labels in uppercase olive green `#4A5A3A` with 2px letter-spacing
- **Contact section** — below content cards:
  - Section label: "Say Hello"
  - Email link: `mailto:tan-yingying@hotmail.com` styled as a button (same style as social links)
  - Small text below: "I also work in brand partnerships and cultural strategy."
- **SEO / Meta:**
  - Page title: "Ying Ying Tan — Thoughts on Money, Family & Living Freely"
  - Meta description: "Mother of two. Lived in 6 countries. Currently inside a startup society. Sharing thoughts on money, family, and living freely."
  - Open Graph tags: og:title, og:description, og:type (website), og:url
  - Twitter card: summary
  - Favicon: simple "YY" favicon (can be generated or use a simple SVG)
- **Footer:** Minimal — just "© 2026 Ying Ying Tan" in secondary text color, centered, with generous top margin
- **Performance:** No external JS libraries beyond Next.js. No client-side JS unless strictly needed. Static export preferred (`output: 'export'` in next.config). Total page weight < 100KB gzipped.

### Success Criteria
- `pnpm build && pnpm lint && pnpm typecheck` all pass with zero errors
- All content sections render in correct order: Hero → Social Links → What I'm Working On (Video, edventures, NS) → Contact → Footer
- NS referral link points to `https://ns.com/ying`
- edventures.co link points to `https://edventures.co`
- Email link opens mailto correctly
- Open Graph meta tags present in page source
- Page is statically exportable (`next build` with `output: 'export'` succeeds)
- Page weight < 100KB gzipped
- No options trading content anywhere on the page
- NS section is framed as personal observation, not promotion or criticism
- edventures.co is NOT described as "my project" or "our project" — just linked as a resource

### Ralph Command
```
/ralph-loop:ralph-loop "Read /Users/yingyingtan/Projects/Plans/ying-ying-website-implementation-spec.md, implement Spec 2 (Content Sections + Contact + SEO). Spec 1 is already complete." --max-iterations 25 --completion-promise "pnpm build && pnpm lint && pnpm typecheck pass with zero errors, all content sections render correctly"
```

---

## Content Reference (for Ralph)

### Exact copy to use:

**Name:** Ying Ying Tan

**Tagline:** Mother of two. Lived in 6 countries. Currently inside a startup society. Thoughts on money, family & living freely.

**NS section text:**
Want to level up? That's what I'm doing at Network School.

**NS CTA:** Curious? Learn more →

**Professional mention:** I also work in brand partnerships and cultural strategy.

**Footer:** © 2026 Ying Ying Tan

### Links:
| Label | URL | Target |
|-------|-----|--------|
| Watch on YouTube | https://www.youtube.com/@yingthinks | _blank |
| Instagram | https://www.instagram.com/yingyingt_ | _blank |
| LinkedIn | https://www.linkedin.com/in/yingyingtan | _blank |
| edventures.co | https://edventures.co | _blank |
| NS Referral | https://ns.com/ying | _blank |
| Email | mailto:tan-yingying@hotmail.com | _self |

### Design tokens:
```
colors:
  bg-base: #F5F0E8 (warm parchment cream)
  bg-hero: linear-gradient(#2D3B2D, #3E4D35, #5C6B4A) (forest green gradient)
  bg-card: #EDE8DF (warm beige)
  bg-button: #4A5A3A (olive green)
  bg-button-hover: #AB8C4B (golden brown)
  border-card: #D4DCC8 (sage border)
  border-divider: #D4DCC8 (sage divider)
  text-heading: #2D3B2D (dark forest green)
  text-body: #4A5A42 (olive brown)
  text-secondary: #8A9080 (sage gray)
  text-button: #FFFFFF (white)
  text-hero-primary: #FFFFFF (white on dark hero)
  text-hero-secondary: #C8D4BC (sage cream on dark hero)
  accent: #4A5A3A (olive green — card labels, links, CTA arrows)
  accent-hover: #AB8C4B (golden brown)
  avatar-border: #B5C4A8 (soft sage)

typography:
  heading: DM Serif Text (serif)
  body: Poppins (sans-serif)
  card-label: Poppins 600, uppercase, letter-spacing 2px
  hero-subtitle: Poppins 400, uppercase, letter-spacing 3px

spacing:
  container-max-width: 480px
  container-padding-x: 28px (px-7)
  container-padding-y: 32px (py-8)
  hero-padding: 60px top, 32px sides, 40px bottom
  section-gap: 24px
  card-padding: 20px
  card-border-radius: 8px
  button-border-radius: 6px
  button-padding-y: 14px
  button-padding-x: 20px
  avatar-size: 110px
  avatar-border: 3px solid #B5C4A8
  social-icon-size: 18px
  social-icon-gap: 24px

style-reference: earthy green moodboard (DM Serif Text, sage/olive/forest palette)
```

---

## What This Site Must NOT Contain
- No options trading content or identity
- No claim of ownership over edventures.co (it's Britt's project)
- No NS criticism (observational tone only)
- No referral-heavy language ("use my code", "sign up", discount energy)
- No self-deprecating copy ("I'm not that interesting")
- No Google Analytics (use Plausible or Vercel Analytics if any)
- No cookie banners
- No client-side JS frameworks beyond Next.js
