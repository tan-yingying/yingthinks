# Ying Ying — Personal Website Spec & Goals

**Date:** 2026-03-02
**Source:** Character Strategy Document + Direct Conversation
**Status:** SPEC (pre-implementation)

---

## 1. Vision

A personal website that starts as a **link-in-bio hub** for social channels (YouTube, Instagram, LinkedIn) and grows into a full personal brand site over time.

**The site should answer one question for any visitor:** "Who is Ying Ying and why should I pay attention?"

**Positioning (authentic voice, not safe version):**
> Mother of two. Lived in 6 countries. Currently inside a startup society on a private island. Sharing thoughts on money, family, and living freely — and what I notice about how people actually work.

This leads with your headline credentials and mirrors the YouTube tagline. The "people reading" angle stays as texture — your natural edge that shows up in content, not as a job title. NOT the "safe, conventional, meek" default.

---

## 2. Goals (What the Website Must Accomplish)

### Goal 1: YouTube Funnel (PRIMARY)
- **What:** Drive social followers to your YouTube channel ("Ying Thinks")
- **Success metric:** Click-through rate from link-in-bio to YouTube > 30%
- **How:** Featured video embed, prominent YouTube link, content teasers

### Goal 2: Social Consolidation (Link-in-Bio)
- **What:** Single URL for Instagram bio, LinkedIn profile, YouTube about section
- **Success metric:** All social bios point to one URL; visitors find all channels within 3 seconds
- **How:** Clean link-in-bio page at `/links` or as homepage in Phase 1

### Goal 3: NS Referral Integration (Financial)
- **What:** Tasteful placement of NS referral link (ns.com/ying)
- **Success metric:** 1-2 quality referral clicks per month from site visitors
- **How:** "Living in a Startup Society" section with genuine story + organic referral link. NOT a banner ad. NOT "use my code." Framed as: "If this sounds like your kind of place, here's how I got in."
- **Tone:** Honest, observational. "I don't have a referral incentive on this page" energy, even though there is one. Earned credibility, not sales.

### Goal 4: Professional Discovery (Subtle)
- **What:** Allow brand partnership prospects to understand your background
- **Success metric:** Occasional professional inquiry via contact
- **How:** Brief "I also work in brand partnerships and cultural strategy" line + LinkedIn link. Not a portfolio. Not a resume. Just a breadcrumb for the right person.

### Goal 5: Audience Building (Future)
- **What:** Capture email addresses for future newsletter / content drops
- **Success metric:** Email list growing by 10+ per month once YouTube is active
- **How:** Optional email signup — "Get my observations on people, power, and community" or similar. Phase 2 feature.

---

## 3. Domain Recommendations

| Domain | Why | Vibe |
|--------|-----|------|
| **yingthinks.com** | Matches YouTube channel "Ying Thinks." Memorable. Action-oriented. | Creator-first, intellectual |
| **yingyingtan.com** | Full name. Professional. Googleable. | Personal brand, professional |
| **yingying.co** | Short, modern, clean | Creator, contemporary |
| **tanyingying.com** | Full name, reverse order | SEO, formal |

**Recommendation:** **yingthinks.com** — it bridges your YouTube identity ("Ying Thinks") and your website into one brand. When people hear your YouTube channel name, they can guess the URL. That's powerful.

**Backup:** yingyingtan.com for long-term professional flexibility if you ever outgrow the "Ying Thinks" brand.

**Buy both.** Redirect one to the other. Domains are $12/year. Cheap insurance.

---

## 4. Phased Roadmap

### Phase 1: Link-in-Bio (Ship This Week)

**What you get:** A single-page, mobile-first hub that replaces Linktree.

**Structure:**
```
┌─────────────────────────────────────┐
│                                     │
│          [Photo / Avatar]           │
│                                     │
│          Ying Ying Tan              │
│          YING THINKS                │
│                                     │
│   Mother of two. Lived in 6         │
│   countries. Currently inside a     │
│   startup society. Thoughts on      │
│   money, family & living freely.    │
│                                     │
│  ┌─────────────────────────────┐    │
│  │  ▶  Watch on YouTube        │    │
│  └─────────────────────────────┘    │
│  ┌─────────────────────────────┐    │
│  │  📷  Instagram              │    │
│  └─────────────────────────────┘    │
│  ┌─────────────────────────────┐    │
│  │  💼  LinkedIn               │    │
│  └─────────────────────────────┘    │
│                                     │
│  ── What I'm Working On ──         │
│                                     │
│  ┌─────────────────────────────┐    │
│  │  🎬  Latest Video           │    │
│  │  [Embedded/linked recent    │    │
│  │   YouTube video]            │    │
│  └─────────────────────────────┘    │
│                                     │
│  ┌─────────────────────────────┐    │
│  │  🎒  edventures.co          │    │
│  │  Adventures & experiences   │    │
│  │  for families at NS         │    │
│  │  [Link to edventures.co]    │    │
│  └─────────────────────────────┘    │
│                                     │
│  ┌─────────────────────────────┐    │
│  │  🏝️  Life in a Startup      │    │
│  │  Society                    │    │
│  │  Want to level up? That's   │    │
│  │  what I'm doing at NS.     │    │
│  │  Curious? Learn more →     │    │
│  └─────────────────────────────┘    │
│                                     │
│  ── Say Hello ──                   │
│  [Email / contact link]            │
│                                     │
│  I also work in brand partnerships │
│  and cultural strategy.            │
│                                     │
└─────────────────────────────────────┘
```

**Design principles:**
- Mobile-first (90%+ of link-in-bio traffic is mobile)
- Fast loading (no heavy frameworks, static HTML or lightweight tool)
- Clean, minimal, confident — not cluttered
- Warm cream palette with terracotta accents (inspired by paletteoflight.com/links) — editorial warmth, not dark/moody
- Typography-forward (the words matter more than the decorations)
- Personality should come through in copy, not in animations
- Dark gradient hero zone contrasts with warm cream body — creates visual depth

**Tech options for Phase 1:**
| Option | Pros | Cons |
|--------|------|------|
| **Static HTML + Vercel/Netlify** | Full control, fast, free hosting | Requires basic coding |
| **Carrd.co** | No-code, fast to ship, $19/year | Limited customization |
| **Super.so (Notion-powered)** | Easy to update via Notion | Slower, Notion dependency |
| **Custom Next.js** | Maximum flexibility for Phase 2 | Overkill for Phase 1 |

**Recommendation:** Start with **Carrd.co** or **static HTML on Vercel**. Ship in a day. Migrate to custom build in Phase 2 only if needed.

### Phase 2: Full Personal Site (Month 2-3)

Expand the link-in-bio into a multi-page site:

**Pages:**
- **Home** — Hero + latest content + social proof
- **About** — Your story. The people analyst. The startup society. The journey. Written in YOUR voice (observational, honest, specific).
- **YouTube / Content** — Embedded videos, organized by pillar (money, family, living freely, people & power)
- **Links** — The original link-in-bio page lives here as `/links`
- **Contact** — Simple form or email link

**New features:**
- Email signup / newsletter opt-in
- Blog section (optional — only if you want to write long-form too)
- Featured video rotation
- "Currently reading / thinking about" section (shows your intellectual life)

### Phase 3: Audience Platform (Month 6+)

Only if YouTube gains traction:
- Newsletter integration (Substack, Beehiiv, or built-in)
- Community links
- Speaking / collaboration page
- Merch or digital products (if relevant)

---

## 5. Content & Copy Guidelines

### Voice (from Character Strategy)
**From:** Thoughtful, personal, practical
**To:** Thoughtful, personal, practical, **observant**

### Bio variations (for different contexts):

**Ultra-short (Instagram bio):**
> Mom of 2. Lived in 6 countries. Living on an island with 150 strangers. Thoughts on money, family & living freely ↓

**Short (Link-in-bio header):**
> Mother of two. Lived in 6 countries. Currently inside a startup society. Sharing thoughts on money, family, and living freely — and what I notice about how people actually work.

**Medium (About page / LinkedIn):**
> Mother of two. Lived in 6 countries. Currently inside one of the world's first startup societies — 150 people from 70+ nationalities on a private island in Malaysia. I share the real math on money, family, and designing a life on your own terms. I'm one of few women and long-term residents, and I notice things most people miss. I also work in brand partnerships and cultural strategy. Ying Thinks is where I share what I see — about money, family, freedom, and the patterns that show up when people try to build something together.

### What NOT to include on the website:
- Options trading content or identity (per containment strategy)
- edventures.co claimed as YOUR project (it's Britt's — link to it, support it, but don't present it as your own venture)
- Anything that reads as NS criticism (frame as observation)
- Referral-heavy language (no "use my link," no discount codes energy)
- "Meek" or self-deprecating framing ("I'm not that interesting" — that's the OLD voice)

---

## 6. NS Referral Integration — The Right Way

**Wrong approach:**
> "Want to join Network School? Use my referral link for a chance to live on an island!"

**Right approach:**
A card with a one-liner and a subtle CTA:

> Want to level up? That's what I'm doing at Network School.
>
> Curious? [Learn more →](ns.com/ying)

This approach:
- One line, not a paragraph — respects attention spans on a link-in-bio page
- Intriguing without overselling
- Links naturally via "Curious?" — self-selects interested visitors
- Protects her reputation (her name is on every referral)

---

## 7. Success Metrics (Phase 1)

| Metric | Target | Timeframe |
|--------|--------|-----------|
| Site live | Shipped | 1 week |
| All social bios updated | 3/3 platforms point to site | Day 2 |
| YouTube click-through | > 30% of site visitors | Month 1 |
| NS referral clicks | 1-2 quality clicks/month | Month 2+ |
| Professional inquiries | Any organic inquiry | Month 3+ |
| Email signups | 10+/month | Phase 2 |

---

## 8. Design Direction

### Mood
- Earthy, organic, editorial — inspired by artisanal/café aesthetic moodboard
- Grounded green tones with warm parchment — think: sage, olive, forest, cream
- Clean typography, generous whitespace, sophisticated restraint
- Photo should feel candid/real, not polished headshot

### Color direction (updated 2026-03-02)
- **Warm parchment cream base** (`#F5F0E8`) — not dark, not stark white
- **Olive green accent** (`#4A5A3A`) — buttons, labels, links, CTAs
- **Golden brown hover** (`#AB8C4B`) — interactive hover states
- **Dark forest green gradient hero** (`#2D3B2D` → `#3E4D35` → `#5C6B4A`) — name and tagline on dark zone
- **Warm beige cards** (`#EDE8DF`) with sage borders (`#D4DCC8`)
- **Body text in olive brown** (`#4A5A42`), headings in dark forest green (`#2D3B2D`)
- **Avatar border in soft sage** (`#B5C4A8`)
- The opposite of "girl boss pink" — this is earthy, grounded, organic

### Typography
- **DM Serif Text** (serif) for headlines — warmth, organic editorial gravitas
- **Poppins** (sans-serif) for body — clean, modern, slightly warmer than Inter
- Uppercase subtitle in hero with wide letter-spacing (3px) for editorial feel
- Card labels: uppercase Poppins 600 with 2px letter-spacing in olive green
- Let the words carry the personality

### Photo guidelines
- **Hero avatar photo:** `channels4_profile 1.png` — candid family photo (mom with two kids, outdoor, warm sunlight)
- Candid over posed
- Context-rich (island setting, community moments, thinking/working)
- Avoid: corporate headshots, influencer poses, generic stock
- Hero area supports a forest green atmospheric gradient background

---

## 9. Technical Requirements

- **Performance:** < 2s load time on mobile 4G
- **Responsive:** Mobile-first, desktop-beautiful
- **SEO:** Basic meta tags, Open Graph for social sharing
- **Analytics:** Simple tracking (Plausible or Fathom — privacy-respecting, not Google Analytics)
- **Hosting:** Vercel, Netlify, or Cloudflare Pages (free tier, fast CDN)
- **SSL:** HTTPS required (automatic with above hosts)
- **No cookies banner needed** if using privacy-respecting analytics

---

## 10. What This Site Is NOT

- NOT a portfolio site (your work speaks through YouTube and LinkedIn)
- NOT a blog (unless you want it to be in Phase 2)
- NOT an NS promotional page (you live there, you don't sell it)
- NOT a trading signals page (trading is private and contained)
- NOT edventures.co presented as yours (that's Britt's — link to it as a project you support, not one you own)
- NOT a "safe" generic bio page (that's the old voice — this site is the new one)
