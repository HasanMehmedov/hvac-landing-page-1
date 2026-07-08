# Implementation Plan — Paragraph Alignment & EM Dash Removal (IMPLEMENTATION_UPDATE.md)

This document outlines the proposed changes to justify paragraph alignments and rewrite website copy to remove EM dashes (`—`).

---

## Goal Description

1. **Bilateral Alignment**: Apply `text-align: justify` (bilateral alignment) to paragraphs containing body copy to improve readability and visual presentation.
2. **EM Dash Removal**: Scan the codebase for occurrences of the EM dash character (`—`), remove them, and rewrite the surrounding text to ensure clean, natural-sounding sentences.

---

## Proposed Styling Options (Bilateral Alignment)

We have two options to achieve bilateral alignment (`text-align: justify`):

### Option A: Global Stylesheet Rule (Recommended)
Add a rule in `app/globals.css` targeting `<p>` elements:
```css
@layer base {
  p {
    @apply text-justify;
  }
}
```
* **Pros**: Automatically applies to all paragraphs across the site, ensuring styling consistency without manual updates to every component.
* **Cons**: Short paragraph-like elements (e.g. labels, ratings) will technically have the rule, though they won't look different unless they wrap.

### Option B: Targeted Tailwind Classes
Manually add the `text-justify` utility class to specific text-heavy `<p>` elements.
* **Pros**: Fine-grained control over which paragraphs are justified.
* **Cons**: Increases utility class footprint and requires manual additions to any future paragraphs.

We recommend **Option A** because it ensures design consistency across the site. If there are specific elements we do *not* want to justify, we can override them locally using `text-left` or `text-center`.

---

## Proposed Copy Changes (EM Dash Removal)

Here are the specific lines identified and the proposed rewrites:

### 1. Hero Section Copy
* **File**: `components/hero/hero-section.tsx`
* **Current Copy**:
  > NextDay HVAC is a fully licensed and insured installation service. Our NATE-certified local crews handle everything — sizing, permits, install, and old-unit removal — with upfront pricing and no pushy sales visits.
* **Proposed Rewrite**:
  > NextDay HVAC is a fully licensed and insured installation service. Our NATE-certified local crews handle everything from sizing and permits to installation and old-unit removal, all with upfront pricing and no pushy sales visits.

### 2. Footer Copy
* **File**: `components/layout/footer.tsx`
* **Current Copy**:
  > Transparent, all-inclusive HVAC pricing with certified next-day installation. No surprise quotes, no pushy sales visits — just honest comfort.
* **Proposed Rewrite**:
  > Transparent, all-inclusive HVAC pricing with certified next-day installation. No surprise quotes, no pushy sales visits. Just honest comfort.

### 3. Configurator Pricing Note
* **File**: `components/configurator/configurator-section.tsx`
* **Current Copy**:
  > A certified supervisor confirms sizing on a quick 10-minute call before install — adjustments are always free.
* **Proposed Rewrite**:
  > A certified supervisor confirms sizing on a quick 10-minute call before install. Adjustments are always free.

### 4. Layout Metadata Title
* **File**: `app/layout.tsx`
* **Current Title**:
  > NextDay HVAC — Upfront Pricing. Next-Day Installation.
* **Proposed Rewrite**:
  > NextDay HVAC | Upfront Pricing. Next-Day Installation.

### 5. Hydration Bug Fix
* **File**: `components/configurator/configurator-section.tsx`
* **Issue**: React hydration mismatch error due to locale-dependent string formatting of square footage (`toLocaleString()`).
* **Fix**: Force English US formatting explicitly on both server and client side by changing `{sqft.toLocaleString()}` to `{sqft.toLocaleString('en-US')}`.

*Note: Code comments and internal markdown guides containing EM dashes will also be updated for complete consistency.*

---

## Revision 3 — Hero Pill Removal & Centered Text Alignments

To adjust the landing page design as requested:
1. **Hero Section Pill**: Remove the `<Reveal>` element wrapper and the `<span className="...">Your local HVAC installation experts</span>` pill from `components/hero/hero-section.tsx`.
2. **Hero Header**: Add `text-center` class to the main `h1` in `components/hero/hero-section.tsx` to align the title to the center of the column.
3. **Section Subheaders**: Ensure that the three section subheaders override the global paragraph `text-justify` alignment by adding `text-center` utility classes:
   - **Pricing Section Subheader**: "Every tier includes equipment, certified labor..." in `components/pricing/pricing-section.tsx`.
   - **Configurator Section Subheader**: "Tell us about your home and we'll size..." in `components/configurator/configurator-section.tsx`.
   - **Testimonials Section Subheader**: "Thousands of installs, measured by speed..." in `components/testimonials/testimonials-section.tsx`.

---

## Revision 4 — Brands We Work With & Our Services Sections

We will add two new sections to the homepage to boost brand trust and showcase service offerings:
1. **Brands We Work With**:
   - **File**: `components/features/brands-banner.tsx` [NEW]
   - **Details**: Center title "Brands we work with", then display 6 brand logos: Voltas, LG, Whirlpool, Blue Star, amazonbasics, Godrej, represented using high-fidelity inline SVGs.
   - **Placement**: Under `HeroSection` and above `FeaturesBanner`.
2. **Our HVAC Service**:
   - **File**: `components/services/services-section.tsx` [NEW]
   - **Details**: Center title "Our HVAC Service", center subtitle "Choose best technicians and latest HVAC technology", and show 6 service cards (Heat Pump, Duct Pump, HVAC, Electric, Refrigeration, Air Conditioning) with light blue circular icon backgrounds, custom blue outline SVGs, and dark bold centered text.
   - **Placement**: Under `FeaturesBanner` and above `PricingSection`.
   - **Layout**: Flex-wrap with centering to show 4 cards in row 1, and 2 cards centered in row 2 on desktop.

---

## Revision 5 — HVAC Jargon Removal, Service Images, & Color Palette Update

To simplify the landing page and improve user understanding:

### 1. Remove HVAC-Specific Jargon
Replace technical terms that most users won't understand with simple, accessible language:

**Jargon Terms to Replace**:
- **NATE-certified** → "Certified technicians" or "Professional technicians"
- **SEER2** → "Energy-efficient" or "High-efficiency"
- **Heat Pump** → Keep as-is or replace with "Heating & Cooling Solution"
- **Ductless** → "Wall-mounted system" or "Zone cooling"
- **Refrigeration** → "Custom cooling solution" or "Advanced cooling"
- Any other technical HVAC specifications → Translate to consumer benefits (e.g., "lower energy bills", "better comfort", "quieter operation")

**Files to Update**:
- `components/services/services-section.tsx` - Service card titles and descriptions
- `components/hero/hero-section.tsx` - Replace "NATE-certified" with "Certified technicians"
- `components/pricing/pricing-section.tsx` - Remove/simplify any technical specifications
- `components/features/brands-banner.tsx` - Keep brand names simple
- Any other component containing technical HVAC jargon

### 2. Replace Icons with Generated Images in Services Section
Update `components/services/services-section.tsx` to use generated images instead of SVG icons:

**Approach**:
- Generate custom images for each service card (e.g., Heat Pump system, Air Conditioning unit, Ductless split system, etc.)
- Save images to `/public/images/services/`
- Replace icon-based design with image-based cards
- Maintain card layout: title, description, and image centered
- Keep light blue circular backgrounds if desired, or use images directly

**Cards to Update** (6 total):
1. Heat Pump Installation
2. Ductless Mini-Split System
3. Central Air Conditioning
4. Furnace Installation
5. Air Quality Solutions
6. Emergency Repairs

### 3. Update Color Palette - Replace Dark Blue with Light Blue
Update the secondary color from dark blue to light blue for better visual hierarchy:

**Current Palette**:
- Primary: Deep Slate Blue (#1e3a5f)
- Secondary: White (#ffffff)
- Accent: Safety Orange (#ff6b35)

**Updated Palette**:
- Primary: Deep Slate Blue (#1e3a5f) - Keep as-is
- Secondary: Light Blue (#e3f2fd or #d1e7f5) - Replace white background sections
- Tertiary: White (#ffffff) - For text on light blue
- Accent: Safety Orange (#ff6b35) - Keep as-is

**Files to Update**:
- `app/globals.css` - Add `--color-secondary-light-blue` token
- `DESIGN_TOKENS.md` - Update color system documentation
- All component backgrounds using secondary color

### 4. Reorder Testimonials Section - Statistics Above Reviews
Move the statistics field (containing metrics like "1000+ Happy Customers", "Next Day Service", etc.) to appear above the review cards instead of below them:

**Current Layout**:
- Section Title
- Section Subtitle
- Review Cards (testimonials)
- Statistics Field (metrics)

**Updated Layout**:
- Section Title
- Section Subtitle
- Statistics Field (metrics) ← **Moved up**
- Review Cards (testimonials)

**Files to Update**:
- `components/testimonials/testimonials-section.tsx` - Reorder the component elements in the JSX to place statistics above the review cards

---

## Progress Tracking Checklist

This checklist tracks the implementation of these updates.

- [x] Apply bilateral alignment (`text-justify`)
  - [x] Add `@apply text-justify;` to `<p>` tags in `app/globals.css`
  - [x] Review page layouts to ensure no layout issues or awkward spacing occurs
- [x] Remove EM dashes from website copy
  - [x] Update `app/layout.tsx` metadata title
  - [x] Update `components/hero/hero-section.tsx` paragraph text
  - [x] Update `components/layout/footer.tsx` paragraph text
  - [x] Update `components/configurator/configurator-section.tsx` paragraph text
  - [x] (Optional) Update developer-facing code comments containing EM dashes
- [x] Hydration Mismatch Bug Fix
  - [x] Update `components/configurator/configurator-section.tsx` to use `{sqft.toLocaleString('en-US')}`
- [x] Revision 3 Tasks (Pill Removal & Centered Alignments)
  - [x] Remove the "Your local HVAC installation experts" pill from `components/hero/hero-section.tsx`
  - [x] Center the hero section header `h1`
  - [x] Center the pricing section subheader in `components/pricing/pricing-section.tsx`
  - [x] Center the configurator section subheader in `components/configurator/configurator-section.tsx`
  - [x] Center the testimonials section subheader in `components/testimonials/testimonials-section.tsx`
- [x] Revision 4 Tasks (Brands & Services Sections)
  - [x] Create `components/features/brands-banner.tsx` with high-fidelity brand SVGs
  - [x] Create `components/services/services-section.tsx` with high-fidelity service cards and line-art SVG icons
  - [x] Add `BrandsBanner` and `ServicesSection` components to `app/page.tsx`
  - [x] Verify responsive layouts and centered positioning of final row cards
- [x] Verify Changes
  - [x] Run Next.js development server and inspect page visually
  - [x] Build production bundle to verify compilation is successful
- [ ] Revision 5 Tasks (Jargon Removal, Service Images, Color Palette & Section Reordering)
  - [ ] Remove HVAC-specific jargon from all components
    - [ ] Update `components/hero/hero-section.tsx` - Replace "NATE-certified"
    - [ ] Update `components/services/services-section.tsx` - Simplify service titles
    - [ ] Update `components/pricing/pricing-section.tsx` - Remove technical specifications
    - [ ] Audit other components for technical terminology
  - [ ] Replace icons with generated images in services section
    - [ ] Generate 6 custom service images using GenerateImage tool
    - [ ] Update `components/services/services-section.tsx` with image-based layout
    - [ ] Verify responsive image display across all breakpoints
  - [ ] Update color palette from dark blue to light blue
    - [ ] Add `--color-secondary-light-blue` token to `app/globals.css`
    - [ ] Update all secondary color references throughout the site
    - [ ] Update `DESIGN_TOKENS.md` to reflect new color palette
    - [ ] Test contrast ratios for accessibility (WCAG AA compliance)
  - [ ] Reorder testimonials section - Move statistics above reviews
    - [ ] Update `components/testimonials/testimonials-section.tsx` - Reorder JSX elements
    - [ ] Verify statistics section displays correctly above review cards

