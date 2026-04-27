# Design Brief: Maison Temporel

**Tone**: Dark luxury editorial — refined minimalism meets Swiss watchmaking heritage. Timeless elegance, sophisticated restraint.

**Differentiation**: Warm gold accents on deep charcoal; thin delicate dividers; serif display typography; opacity-based interactions (no garish hover effects).

## Palette

| Token | Light | Dark | Usage |
|-------|-------|------|-------|
| Background | `0.99 0 0` | `0.12 0 0` | Primary surface, near-black luxe |
| Foreground | `0.15 0 0` | `0.96 0 0` | Pristine cream text |
| Card | `1.0 0 0` | `0.16 0 0` | Elevated containers |
| Primary (Gold) | `0.35 0 0` | `0.72 0.08 69` | Warm champagne accent |
| Secondary | `0.95 0 0` | `0.28 0 0` | Muted slate grey |
| Destructive | `0.55 0.22 25` | `0.58 0.15 8` | Soft rose for alerts |
| Border | `0.9 0 0` | `0.22 0 0` | Thin dividers, 50% opacity |

## Typography

| Tier | Font | Usage |
|------|------|-------|
| Display | Fraunces (serif) | H1/H2 headings, brand statements |
| Body | DM Sans (sans-serif) | Copy, descriptions, UI labels |
| Mono | Geist Mono | Prices, specifications, SKU |

## Structural Zones

| Zone | Treatment | Elevation |
|------|-----------|-----------|
| Header | Card with `border-b`, gold logo hover | Lifted |
| Hero | Full-bleed background, serif headline, cream copy | Ambient |
| Product Grid | Card containers with 1px borders (50% opacity), gold hover |  Subtle |
| Cart Modal | Background overlay, card elevation, gold CTA button | Floated |
| Footer | Muted background `0.24 0 0`, border-t, small copy | Grounded |

## Spacing & Rhythm

Mobile-first: `gap-4` (1rem) base rhythm, scale to `gap-6` (1.5rem) on `md:` breakpoint. Product cards use consistent padding to maintain editorial grid.

## Component Patterns

- Buttons: Primary = gold bg, secondary = outlined border
- Cards: Minimal borders, subtle shadow from elevation, no border-radius excess (0.375rem max)
- Inputs: Muted borders, gold ring on focus
- Price display: Mono font, gold or cream per context
- Hover states: Opacity shift + gold color, no translate/scale

## Motion

`.transition-smooth` (0.3s cubic-bezier) applied to all interactive elements. No animations on load; only on user interaction.

## Signature Detail

Thin gold dividers (`border-luxury` utility, 50% opacity) between major sections. Serif headings with negative letter-spacing for tightness. Prices rendered in monospace serif for technical precision within luxury context.
