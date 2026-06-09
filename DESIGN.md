---
version: alpha
name: espace-beaute-composite
description: >
  Composite design system for a Quebec-based esthetics/beauty salon website,
  synthesized from 4 reference sites in order of preference:
  (1) studiobespacebeaute.com — professional warmth, strong teal accent, Raleway typography
  (2) espace-beaute.ca — Shopify e-commerce with product grid, promotional sliders
  (3) espacebeauteestheti-k.com — clean service categories, elegant hierarchy
  (4) lateliersecret.ca — best section flow but too muted/soft (contrast issues noted)
  
  Design direction: Professional yet warm spa aesthetic. Strong readable contrast
  (avoid the washed-out pastels of #4). Teal/dark accent palette from #1.
  Section flow inspired by #4 (hero → services → about → pricing → testimonials → CTA).
  Typography: Raleway (geometric, modern) for UI + a serif display face for elegance.

sources:
  primary: "https://www.studiobespacebeaute.com/"
  secondary: "https://espace-beaute.ca/"
  tertiary: "https://www.espacebeauteestheti-k.com/services-store"
  reference-flow: "https://lateliersecret.ca/"

# ─────────────────────────────────────────────
# COLORS — primarily from Studio B (#1), with adjustments
# ─────────────────────────────────────────────
colors:
  # Primary accent — Studio B's signature teal
  primary: "#177d91"
  primary-hover: "#00596b"
  primary-on-dark: "#2ec4db"

  # Ink / text
  ink: "#2b2b2b"
  ink-dark: "#1c1c1c"
  body: "#333333"
  body-muted: "#818181"
  body-light: "#9d9d9d"

  # Surfaces
  canvas: "#ffffff"
  canvas-warm: "#f9f9f9"
  canvas-overlay: "rgba(239, 239, 239, 0.5)"
  surface-dark: "#1c1c1c"
  surface-black: "#000000"
  surface-footer: "#1c1c1c"

  # On-color text
  on-primary: "#ffffff"
  on-dark: "#ffffff"
  on-dark-muted: "#cdcdcd"

  # Borders / dividers
  divider: "#e0e0e0"
  divider-soft: "#f0f0f0"

  # ANTI-PATTERN from L'Atelier Secret (#4) — DO NOT USE these muted tones as primary:
  # rgb(181,164,139) as body text — too low contrast on white
  # rgb(154,139,116) as nav links — fails WCAG AA
  # rgba(245,243,240,0.6) as text — nearly invisible

# ─────────────────────────────────────────────
# TYPOGRAPHY — Raleway from Studio B (#1)
# ─────────────────────────────────────────────
typography:
  hero-display:
    fontFamily: "Raleway, sans-serif"
    fontSize: 60px
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: normal
    textTransform: none
    note: "From Studio B h1. Large, bold, commands attention."

  section-heading:
    fontFamily: "Raleway, sans-serif"
    fontSize: 36px
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: 0.5px
    textTransform: uppercase
    note: "Section titles (NOS SOINS, À PROPOS, etc.)"

  subheading:
    fontFamily: "Raleway, sans-serif"
    fontSize: 19px
    fontWeight: 400
    lineHeight: 1.375
    letterSpacing: normal
    textTransform: none
    note: "From Studio B h4. Descriptive subheads."

  card-title:
    fontFamily: "Raleway, sans-serif"
    fontSize: 17px
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: 1px
    textTransform: uppercase
    note: "From Studio B h3. Service card titles."

  body:
    fontFamily: "Raleway, sans-serif"
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: normal

  body-small:
    fontFamily: "Raleway, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.857

  nav-link:
    fontFamily: "Raleway, sans-serif"
    fontSize: 13px
    fontWeight: 600
    lineHeight: 1.0
    letterSpacing: 1px
    textTransform: uppercase
    note: "Studio B nav style — uppercase, spaced, bold."

  footer-heading:
    fontFamily: "Raleway, sans-serif"
    fontSize: 15px
    fontWeight: 600
    lineHeight: 1.571
    letterSpacing: 1px
    textTransform: uppercase
    note: "Studio B h5 style for footer section titles."

  button:
    fontFamily: "Raleway, sans-serif"
    fontSize: 13px
    fontWeight: 700
    letterSpacing: 1px

# ─────────────────────────────────────────────
# SPACING & RADIUS
# ─────────────────────────────────────────────
rounded:
  none: 0px
  sm: 4px
  md: 8px
  lg: 12px
  xl: 20px
  pill: 9999px

spacing:
  xs: 8px
  sm: 16px
  md: 24px
  lg: 32px
  xl: 48px
  xxl: 64px
  section: 80px
  section-lg: 120px

# ─────────────────────────────────────────────
# COMPONENTS
# ─────────────────────────────────────────────
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "12px 24px"
    hover:
      backgroundColor: "{colors.primary-hover}"
    note: "Studio B uses square buttons (0px radius) with teal bg. Bold and direct."

  button-secondary:
    backgroundColor: transparent
    textColor: "{colors.primary}"
    border: "2px solid {colors.primary}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "10px 22px"

  button-dark:
    backgroundColor: "{colors.ink-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "12px 24px"

  global-nav:
    backgroundColor: "transparent"
    textColor: "{colors.on-dark}"
    height: 100px
    position: fixed
    backdropFilter: "blur(10px)"
    note: "Overlays hero image. White text on dark imagery. Becomes solid on scroll."

  global-nav-scrolled:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    boxShadow: "0 2px 10px rgba(0,0,0,0.08)"

  service-card:
    backgroundColor: "{colors.canvas}"
    borderRadius: "{rounded.md}"
    padding: "{spacing.lg}"
    boxShadow: "0 2px 20px rgba(0,0,0,0.06)"
    note: "Cards for individual services. Image top, title, short description, CTA link."

  pricing-card:
    backgroundColor: "{colors.canvas}"
    border: "1px solid {colors.divider}"
    borderRadius: "{rounded.md}"
    padding: "{spacing.lg}"
    note: "From L'Atelier Secret's pricing section — clean tier cards with price, features, CTA."

  pricing-card-featured:
    backgroundColor: "{colors.canvas}"
    border: "2px solid {colors.primary}"
    borderRadius: "{rounded.md}"
    padding: "{spacing.lg}"
    badge: "POPULAIRE"

  testimonial-card:
    backgroundColor: "{colors.canvas-warm}"
    borderRadius: "{rounded.md}"
    padding: "{spacing.lg}"
    note: "Quote text in italic, client name bold, optional role/title."

  footer:
    backgroundColor: "{colors.surface-footer}"
    textColor: "{colors.on-dark}"
    padding: "{spacing.section} 0"

# ─────────────────────────────────────────────
# PAGE LAYOUT — section flow from L'Atelier Secret (#4)
# ─────────────────────────────────────────────
layout:
  sections:
    - name: "announcement-bar"
      note: "From espace-beaute.ca (#2). Thin banner at top for promos/free shipping."
      backgroundColor: "{colors.primary}"
      textColor: "{colors.on-primary}"
      typography: "{typography.body-small}"

    - name: "hero"
      note: >
        Full-viewport hero with background image/video.
        Studio B style: dark overlay on spa imagery, large white headline, 
        two CTA buttons (primary + secondary/outline).
      height: "100vh"
      overlay: "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.5))"
      headline: "{typography.hero-display}"
      headlineColor: "{colors.on-dark}"
      subheadline: "{typography.subheading}"
      subheadlineColor: "{colors.on-dark}"
      cta1: "{components.button-primary}"
      cta2: "{components.button-secondary}"

    - name: "popular-services"
      note: >
        From L'Atelier Secret. Grid of 6 most popular services as image cards 
        with hover overlay showing title + 'Découvrir' link.
        3 columns desktop, 2 tablet, 1 mobile.
      backgroundColor: "{colors.canvas}"
      columns: 3
      component: "{components.service-card}"

    - name: "about"
      note: >
        Split layout: image left, text right.
        Studio B's warm welcome tone + L'Atelier's stats (15+ years experience).
        Key trust signals: certifications, years experience, team size.
      backgroundColor: "{colors.canvas-warm}"

    - name: "pricing"
      note: >
        From L'Atelier Secret. 3-4 pricing tier cards side by side.
        One marked 'POPULAIRE'. Each has: category, starting price, 
        3-4 bullet features, CTA button.
      backgroundColor: "{colors.canvas}"
      columns: 4
      component: "{components.pricing-card}"

    - name: "testimonials"
      note: >
        Carousel or 3-column grid of client testimonials.
        Quote + name + optional photo. From both L'Atelier and Studio B patterns.
      backgroundColor: "{colors.canvas-warm}"
      component: "{components.testimonial-card}"

    - name: "products"
      note: >
        From espace-beaute.ca (#2). Product category cards linking to shop.
        Only if e-commerce is needed. Grid of product category images 
        with title overlay.
      backgroundColor: "{colors.canvas}"

    - name: "booking-cta"
      note: >
        Full-width CTA section. Dark background, white text, 
        prominent booking button. Phone number + online booking link.
        'Consultation gratuite' messaging from L'Atelier.
      backgroundColor: "{colors.surface-dark}"
      textColor: "{colors.on-dark}"

    - name: "footer"
      note: >
        Dark footer with 3-4 columns: Logo + tagline, Navigation links,
        Services links, Contact info (address, phone, email, hours).
        Social icons (Instagram, Facebook, TikTok).
        From Studio B + L'Atelier patterns combined.
      component: "{components.footer}"

# ─────────────────────────────────────────────
# NAVIGATION STRUCTURE
# ─────────────────────────────────────────────
navigation:
  primary:
    - label: "Accueil"
      href: "/"
    - label: "Services"
      href: "/services"
      note: "Dropdown or mega-menu with service categories (from Esthéti-K #3)"
      children:
        - "Laser & IPL"
        - "Soins visage"
        - "Soins visage avancés"
        - "Épilation"
        - "Soins des cils et sourcils"
        - "Soins corps"
    - label: "Boutique"
      href: "/boutique"
      note: "From espace-beaute.ca (#2) — only if e-commerce needed"
    - label: "À propos"
      href: "/a-propos"
    - label: "Contact"
      href: "/contact"
  cta:
    label: "Prendre rendez-vous"
    href: "/reservation"
    component: "{components.button-primary}"
    note: "Always visible in nav bar — primary booking action"

# ─────────────────────────────────────────────
# IMAGERY GUIDELINES
# ─────────────────────────────────────────────
imagery:
  style: >
    Professional spa/salon photography. Warm lighting, clean backgrounds.
    Close-up treatment shots, relaxed client faces, product flat-lays.
    Avoid overly stock-photo looks. Real team photos preferred (Studio B approach).
  hero: "Full-bleed lifestyle photo — treatment in progress or salon interior"
  services: "Square or 4:3 ratio, consistent across all cards"
  about: "Team photo or salon interior, warm and inviting"
  aspect-ratios:
    hero: "16:9 or full-viewport"
    service-card: "4:3"
    product-card: "1:1"
    testimonial-avatar: "1:1 circle"

# ─────────────────────────────────────────────
# ANTI-PATTERNS — things to explicitly avoid
# ─────────────────────────────────────────────
anti-patterns:
  - source: "lateliersecret.ca (#4)"
    issue: "Low contrast body text"
    detail: >
      Body text color rgb(181,164,139) on white background = ~3.2:1 contrast ratio.
      Fails WCAG AA (4.5:1 required). Nav links at rgb(154,139,116) even worse.
      USE ink #2b2b2b or body #333 instead.

  - source: "lateliersecret.ca (#4)"
    issue: "Light font weights on light backgrounds"
    detail: >
      H1 at fontWeight 300 with color rgb(61,43,31) is readable but barely.
      Combined with the muted palette, nothing 'pops'. Use 600+ for headings.

  - source: "espace-beaute.ca (#2)"
    issue: "Promotional slider overload"
    detail: >
      12+ rotating hero slides with different promotions creates visual noise.
      Limit to 1-3 slides max, or use a single static hero with one clear CTA.

  - source: "espace-beaute.ca (#2)"
    issue: "Inconsistent section styling"
    detail: >
      Mixed promotional banners break visual rhythm. Keep section patterns 
      consistent — same padding, same typography scale, same card style.

---

# DESIGN.md — Espace Beauté Composite

> **Design philosophy:** Professional warmth meets modern clarity. Every element should feel premium but approachable — like walking into a well-lit, beautifully appointed salon. Strong contrast so nothing is hard to read. Teal accent for energy without coldness.

## Quick Start

Drop this file into your project root. Tell your AI agent:

```
Build me a beauty salon website following DESIGN.md. 
Start with the hero section and navigation.
The site is in French (Quebec).
```

## Source Attribution

| Element | Primary Source | Why |
|---------|---------------|-----|
| Color palette | Studio B (#1) | Professional teal accent, high contrast dark/light |
| Typography | Studio B (#1) | Raleway — geometric, modern, readable at all sizes |
| Section flow | L'Atelier Secret (#4) | Best page structure: hero → services → about → pricing → testimonials → CTA |
| Service categories | Esthéti-K (#3) | Clean service taxonomy with sub-categories |
| E-commerce pattern | Espace Beauté (#2) | Product grid, category cards, Shopify-style shop |
| Navigation | Esthéti-K (#3) + L'Atelier (#4) | Clean 5-item nav with persistent booking CTA |

## Design Tokens Summary

- **Font:** Raleway (all weights from 400-700)
- **Primary:** `#177d91` (teal)
- **Dark:** `#1c1c1c`
- **Body text:** `#333333` on `#ffffff`
- **Buttons:** Square (0px radius), teal bg, white text, uppercase
- **Cards:** 8px radius, subtle shadow
- **Sections:** 80-120px vertical padding

## Raw CSS Extraction — All 4 Sites

### Site #1: Studio B Espace Beauté (studiobespacebeaute.com)
**Platform:** WordPress (Qode theme)

| Token | Value |
|-------|-------|
| Font family | `Raleway, sans-serif` (all elements) |
| H1 | 60px / 700 / #2b2b2b / line-height 75px |
| H3 (card titles) | 17px / 600 / #2b2b2b / letter-spacing 1px / uppercase |
| H4 (subheads) | 19px / 400 / #2b2b2b |
| H5 (footer heads) | 15px / 600 / #fff / letter-spacing 1px / uppercase |
| Body text | 15px / 400 / line-height 20px |
| Nav links | 13px / 600 / #fff / letter-spacing 1px / uppercase / line-height 100px |
| Buttons | 13px / 700 / letter-spacing 1px / bg #177d91 / color #000 / radius 0px / padding 0 23px |
| Primary accent | `#177d91` (rgb 23,125,145) — teal |
| Primary hover | `#00596b` (rgb 0,89,107) — darker teal |
| Body bg | `#000000` (page-level), content areas `#ffffff` |
| Dark surface | `#1c1c1c` (rgb 28,28,28) |
| Warm surface | `#f9f9f9` (rgb 249,249,249) |
| Text muted | `#818181`, `#9d9d9d`, `#cdcdcd` |
| Overlay surface | `rgba(239,239,239,0.5)` |

### Site #2: Espace Beauté Laser (espace-beaute.ca)
**Platform:** Shopify

| Token | Value |
|-------|-------|
| Font family | `Assistant, sans-serif` (all elements) |
| H1 | 40px / 400 / #121212 / letter-spacing 0.6px |
| H2 | 13px / 400 / #121212 (small — used for slide subtitles) |
| H3 | 18px / 400 / #121212 / letter-spacing 0.6px |
| Body text | 16px / 400 / rgba(18,18,18,0.75) / line-height 28.8px / letter-spacing 0.6px |
| Nav links | 18px / 400 / #121212 / letter-spacing 0.6px |
| Primary accent | `#99346c` (rgb 153,52,108) — plum/magenta |
| Buttons | 15px / 400 / radius 0px / padding 0 30px |
| CTA buttons | bg #99346c / color #fff |
| Secondary buttons | bg #fff / color #121212 |
| Body bg | `#ffffff` |
| Announcement bar | bg #121212 / text #fff |
| Warm surface | `#f3f3f3`, `#f8f8f8` |
| Dark text | `#121212`, `#343434` |
| Muted text | `rgba(18,18,18,0.75)`, `rgba(18,18,18,0.7)` |

### Site #3: Espace Beauté Esthéti-K (espacebeauteestheti-k.com)
**Platform:** Squarespace (Wix-like)

| Token | Value |
|-------|-------|
| Display font | `Playfair Display` (headings — serif, elegant) |
| Body font | `Poppins` (body text — geometric sans) |
| Button font | `Almarai` (some CTAs) |
| H1 | 47px / 400 / #fff / letter-spacing -0.94px |
| H2 | 34.7px / 400 / #000 / letter-spacing -0.69px |
| H4 | 22.2px / 400 / #000 / letter-spacing -0.44px |
| Body text | 16px / 400 / #fff (on dark), #000 (on light) / line-height 24px |
| Nav links | 16px / 400 / #fff / Poppins |
| Primary accent | `#efd8d4` (rgb 239,216,212) — blush/rose |
| Secondary | `#ab9088` (rgb 171,144,136) — warm taupe |
| Buttons | radius 300px (full pill) / padding 24px 35.2px |
| CTA buttons | bg #000 / color #efd8d4 |
| Body bg | `#fbf9f9` (rgb 251,249,249) — warm off-white |
| Dark accents | `#000000` |

### Site #4: L'Atelier Secret (lateliersecret.ca)
**Platform:** Custom (EmergenAgent)

| Token | Value |
|-------|-------|
| Display font | `Cormorant Garamond, serif` (headings — elegant serif) |
| Body font | `Montserrat, sans-serif` (body/nav) |
| H1 | 60px / 300 / rgb(61,43,31) / line-height 60px |
| H2 | 36px / 300 / rgb(181,164,139) / letter-spacing 0.9px / uppercase |
| H3 | 18px / 400 / rgb(181,164,139) / letter-spacing 0.45px |
| Body text | 16px / 400 / rgb(181,164,139) / line-height 24px |
| Nav links | 14px / 400 / rgb(154,139,116) / letter-spacing 0.35px / uppercase / Montserrat |
| ⚠️ Primary text | rgb(181,164,139) — **FAILS WCAG AA on white** |
| ⚠️ Nav text | rgb(154,139,116) — **even lower contrast** |
| Gold accent | rgb(232,201,154) |
| Dark ink | rgb(42,36,32), rgb(61,43,31) |
| Surfaces | white, rgba(245,243,240,0.3), rgba(255,255,255,0.7/0.8) |
| Section bg | rgb(181,164,139) — warm taupe used as full-section bg |

## Font Pairing Decision

| Option | Display | Body | Vibe | Source |
|--------|---------|------|------|--------|
| A (recommended) | Raleway 600-700 | Raleway 400 | Modern, clean, unified | Studio B |
| B (elegant) | Playfair Display | Poppins | Luxury editorial | Esthéti-K |
| C (classic spa) | Cormorant Garamond | Montserrat | Refined, delicate | L'Atelier (fix weights) |
| D (neutral) | Assistant | Assistant | Clean, minimal | Espace Beauté |

**Recommendation:** Option A (Raleway) or Option B (Playfair + Poppins). Option A is safer — one font, all weights, great readability. Option B adds elegance but requires careful weight management to avoid the L'Atelier "too soft" problem.
