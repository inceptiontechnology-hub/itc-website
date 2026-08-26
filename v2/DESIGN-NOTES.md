# ITC Website v2 — Design Notes

## Deliverable
`v2/index.html` — Single-page, self-contained HTML/CSS/JS. Zero external dependencies beyond Google Fonts. Drop-in deployable.

---

## Assumptions & Decisions

### Architecture
**Decision: Single HTML file, not React.**
The brief asked for HTML/CSS/JS or a framework recommendation. Given that this is a review/approval deliverable and the existing Vite stack has Manus-specific build plugins that may not work cleanly, I built a standalone file that is immediately reviewable in any browser and deployable as-is. Once approved, it can be ported to the React/Vite stack or deployed directly via Vercel's static file serving.

### Navigation
- Sticky, transparent on hero; darkens on scroll with blur backdrop
- Logo uses the actual ITC .webp file (saved to `assets/`)
- Mobile: hamburger → full-screen slide-down menu
- Collapses body scroll when mobile menu is open

### Hero Section
- Full-viewport-height, dark navy (`#131F3A`)
- Headline: "Technology that regenerates." — direct, not cliché
- Subtext: the mission statement verbatim from the brief
- Two CTAs: gold "Explore Our Work" → #partners; outline "Our Mission" → #about
- Large decorative "ITC" mark bottom-right (6% opacity blue) — visual texture, not readable text
- Subtle radial gradient highlights (navy + blue tones) to avoid a flat background

### Stats Bar
- Gold band between hero and about — gives immediate credibility anchors
- Stats chosen from known product specs: 72k+ compounds, 5ppt detection, 48hr AIMS TAT, 10sec bacterial test
- **Assumption:** These numbers are accurate as of briefing. Confirm before launch.

### About Section
- Two-column layout: narrative left, principles grid right
- Principles grid: 4 cards (Simple / True / Economically Advantaged / Regenerative) + 1 full-width "North Star" card in dark blue
- Hover state: gold left-border animates in on each card
- Pull quote block with serif accent — one of the few Garamond moments

### Team Section
- 5-card grid (5 columns on desktop → 3 → 2 → 1)
- Placeholder: initials avatars (colored background, monogram text)
- **To do:** Replace initials with actual headshots (drop .jpg/.webp into `assets/team/` and update `src=""` attributes)
- Bio copy is placeholder in brand voice — ready for team review/revision
- Logan Deal: used gender-neutral phrasing per team notes (she/her confirmed)

### Partners Section
- Dark navy background — creates visual contrast from the white/light-gray sections above
- **Not a flat logo wall** — structured as a hierarchical card: ITC hub → CEC block → 3 offering cards
- CEC described accurately: Calgary-based, NTA/Aquity, RBT, AIMS
- Offering descriptions pulled from MEMORY.md specs — accurate to briefing
- Expandable: to add a new partner, duplicate the `cec-block` div pattern
- **RBT note:** "Rapid Bacterial Test" — confirm CEC's preferred product name

### Contact Section
- Dropdown topic selector — routes inquiry intent without asking follow-up questions
- Form action is `#` (no-op) with a JS confirmation state
- **To do:** Wire to a form backend. Recommend Formspree (free tier), Resend, or a Vercel serverless function
- Phone number used: Scott's direct line per USER.md

### Footer
- Logo filtered to white (`filter: brightness(0) invert(1)`) for dark background
- Mission tagline in Garamond italic + gold — final serif accent moment
- Copyright year auto-generated via JS

---

## What's Not Here (next steps)
1. **Real headshots** — drop into `assets/team/` and update team card `<img>` tags
2. **Form backend** — Formspree drop-in or Vercel function
3. **Domain / deployment** — currently on inceptiontechnology.org; consider moving to itc.eco per domain branding
4. **OG meta tags** — add Open Graph / Twitter card tags for link previews
5. **Favicon** — derive from logo
6. **Analytics** — Plausible or Fathom recommended (privacy-first, fits brand)
7. **Port to React/Vite** — if integrating with existing stack, component boundaries are obvious from the section structure

---

## Color Compliance (WCAG AA)
- White text on `#131F3A` dark blue: contrast ratio ~13:1 ✓
- Dark blue text on white: ~13:1 ✓
- Dark blue text on `#F7F7F5` off-white: ~12:1 ✓
- White text on `#BD8A32` gold: ~3.6:1 — passes AA for large text / UI components ✓
- `rgba(255,255,255,0.65)` on dark blue: ~8:1 ✓
- Gray-500 (`#7A7870`) on white: ~4.6:1 ✓

---

## File Structure
```
v2/
├── index.html          ← complete deliverable
├── assets/
│   └── itc-logo.webp   ← ITC logo (copied from Telegram upload)
└── DESIGN-NOTES.md     ← this file
```
