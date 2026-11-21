# Resin Supply Website

This Next.js project is being converted from the THREXON agency website into a practical, premium website for a Uttar Pradesh-based supplier of polyester resins for FRP and composite manufacturing.

The source of truth for website copy and business boundaries is the local `UPR_Website_Content_Brief_Updated.docx`. Treat it as internal planning material; do not publish it as a site asset.

## Current direction

- Build the redesign one focused page or section at a time, starting with the homepage hero.
- Make the experience clear for FRP factory owners, purchase managers, production supervisors, and new composite-production businesses.
- Lead with a single primary conversion action: **Request a Resin Quotation**.
- Offer **Help Me Choose a Grade** as the supporting action. Both should lead to the eventual quote flow.
- Preserve business boundaries: this company supplies polyester resin, maintains its own Uttar Pradesh inventory, and names ORCPL as its official manufacturing partner. It must not claim to manufacture resin or own ORCPL facilities.

## Visual system

- Use a quiet industrial-premium approach: white and near-black are the primary interface colours, with soft grey borders and panels.
- Use black primary buttons with white text; avoid decorative gradients, glass effects, abstract chemical graphics, and elaborate transitions.
- Keep type large, readable, and decisive. Prefer a compact navigation, clear grid, generous whitespace, and information-led page hierarchy.
- Real product, workshop, and warehouse imagery should carry visual texture. UI colour should remain restrained.
- The interface is intentionally static-first. The legacy loading screen, smooth scrolling, custom cursor, 3D scenes, scroll effects, page entrances, animated mockups, and motion dependencies were removed in commit `6e332b5`.

## Homepage hero: first design unit

The hero should establish what the business supplies, who it supports, and how a buyer can enquire without scrolling.

### Layout

- White header and hero surface with a black wordmark and compact navigation.
- Left column: eyebrow, headline, concise supporting copy, and the two enquiry actions.
- Right column: one authentic FRP-manufacturing image on desktop; place the image after the copy on mobile.
- Do not add a carousel, background video, animated resin graphic, or image gallery to the hero.

### Copy direction

- Headline: **Polyester Resin for FRP and Composite Manufacturing**.
- Supporting message: help buyers find a suitable resin grade, receive a competitive quotation, and plan reliable local supply, with ORCPL named only as the official manufacturing partner.
- Primary CTA: **Request a Resin Quotation**.
- Secondary CTA: **Help Me Choose a Grade**.

### Asset checklist

| Asset | Requirement |
| --- | --- |
| Main image | One authentic landscape photo, at least 2400px wide. |
| Subject | A real FRP process: technician applying resin to a mould, roofing-sheet production, tank/panel fabrication, or resin application in a working facility. |
| Avoid | Generic labs, chemical beakers, drums alone, AI-looking imagery, or abstract material graphics. |
| Mobile crop | Create a vertical crop only if the main image loses its subject on a phone. |
| Logo | Final horizontal wordmark in SVG or transparent PNG, plus a compact mark only if one exists. |

Natural, lightly restrained photography is preferred over black-and-white photos: the UI can stay monochrome while the business remains tangible and credible.

## Planned site map

- `/` — Home
- `/resins` — Resins and applications
- `/services` — Buyer support
- `/about` — About and manufacturing network
- `/quote` — Quote and grade-selection flow

## Decisions needed before implementation

1. Final company name and logo for the resin business. Do not reuse the current THREXON agency identity by default.
2. Permission to use ORCPL’s logo, product photography, and facility imagery; attribution is required for any approved partner material.
3. Warehouse city, stocked grades, packaging, service area, and final phone, WhatsApp, and email details.

## Development

```bash
pnpm dev
pnpm build
pnpm lint
```
