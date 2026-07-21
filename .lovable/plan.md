# Jaisalmerholidays — Full Site Build Plan

A polished tour & travel site for **Jaisalmerholidays** (Jaisalmer, Rajasthan), inspired by the reference layout but with a fresh design, richer animations, unique imagery, and a proper multi-page structure.

## Brand
- Name: **Jaisalmerholidays**
- Phone / WhatsApp: **+91 79767 21173**
- Tagline: *Tours & travels in Jaisalmer — desert safaris, camps, sightseeing & more.*
- No mention of Trotters / Maa Bhawani anywhere.

## Design System
- Warm desert palette: deep maroon (`#5B1A1A`), sandstone gold (`#E4B063`), cream (`#FBF6EC`), charcoal ink (`#1F1B16`), accent terracotta.
- Typography: **Fraunces** (display serif) + **Manrope** (body) via `<link>` in root head.
- Custom logo (SVG) — camel silhouette + sun mark, wordmark "Jaisalmerholidays".
- Motion: Framer Motion (already common) — hero letter-by-letter reveal for "Jaisalmerholidays", parallax dunes, icon float on hover, scroll-reveal for tour blocks, animated marquee of highlights.

## Pages / Routes
1. `/` — Home (hero with big animated brand reveal, service icon grid, featured tours, testimonials, contact)
2. `/camel-safari` — full list of camel safari packages (18 tours from spec)
3. `/desert-camp` — desert camp packages
4. `/sightseeing` — Jaisalmer sightseeing packages (fix "Seven ways to meet the Thar" images)
5. `/adventure` — adventure activities
6. `/exotic-tours` — exotic tours
7. `/special-events` — special events
8. `/hotel` — hotel with room details (Super Deluxe King Room etc.)
9. `/taxi` — taxi services (no prices, only WhatsApp + Call per service)
10. `/contact` — contact page

Each service page follows the alternating image/text tour-block layout from the spec, with per-tour **WhatsApp** + **Call Now** buttons using `+917976721173`.

## Home page structure
- Top contact strip: phone/email pushed to the **right** (fix current centering issue).
- Sticky nav with custom logo + nav links + "Call" CTA.
- **Full-bleed hero** (no rounded rectangle inset — edge to edge as requested), video-like parallax dune image, animated "Jaisalmerholidays" wordmark reveal, subheadline, dual CTA.
- Service icon grid (8 icons, matching reference style — line-art with red accent): Camel Safari, Desert Camp, Sightseeing, Adventure, Exotic Tours, Special Events, **Hotel**, **Taxi**. Each icon is a link to its route with hover lift animation.
- "Why Jaisalmerholidays" strip (since 1990-style trust, animated counters).
- Featured tours carousel.
- Testimonials.
- Contact form.
- Footer.

## Tour/service page structure
- Hero banner (unique image per page).
- Intro paragraph.
- Alternating image-left / image-right tour blocks with title, price (except taxi), 2 paragraphs, note, WhatsApp + Call buttons.
- CTA banner + contact form + footer.

## Taxi page
- Same layout, no prices; each vehicle: Sedan, SUV, Tempo Traveller, Innova, Local Sightseeing Cab, Airport Transfer — with unique images and WhatsApp/Call only.

## Hotel page
- Room card(s) matching provided Super Deluxe King Room spec (guests, size, view, bed, bath, amenities list, "Room Only" rate `₹2,662/night + ₹372 taxes`), WhatsApp + Call.

## Images
- Generate **unique** images per tour/service (no duplicates). Batch generation via `imagegen`. Approx 40+ images across all pages.
- Icons: generate a matching line-art icon set (8 icons) styled like the reference upload (thin black lines + red accent), transparent PNG.

## Contact form → WhatsApp
- Form fields: name, email, phone, message.
- On submit: build `wa.me/917976721173?text=...` URL with all filled details URL-encoded, open in new tab. No backend needed.

## Tech
- TanStack Start routes under `src/routes/`.
- Shared components: `Nav`, `Footer`, `TopBar`, `TourBlock`, `ServiceIcon`, `ContactForm`, `Hero`.
- `src/lib/brand.ts` centralizes name, phone, WhatsApp helper, tour data.
- Tailwind v4 tokens in `src/styles.css`.
- Framer Motion for animations (`bun add framer-motion`).
- SEO head() per route with unique title/description; sitemap + robots.

## Out of scope (call out)
- Not adding backend/database — form goes straight to WhatsApp as requested.
- Package data for pages other than Camel Safari will be based on typical Jaisalmer offerings (desert camp tiers, sightseeing spots like Sam Dunes / Kuldhara / Longewala, adventure like paramotor / dune bashing / ATV, etc.) since I won't scrape the reference site verbatim.

Shall I proceed with this plan?
