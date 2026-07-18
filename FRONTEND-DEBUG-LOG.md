# Frontend Debug Log — 2026-07-17

## Status: ✅ LAYOUT STABILIZED — Ready for polish phase

## Problem Summary
CSS reset (`@layer base`) + Tailwind v4 stripped ALL component styles. After multiple failed attempts (v1-v9), switched to: safe reset + pure CSS + exact class name alignment.

## Root Causes
1. `@import "tailwindcss"` injects `@layer base` that resets ALL elements
2. JSX class names didn't match CSS selectors (nav-links vs nav, btn-primary vs cta, etc.)
3. Multiple attempts tried to fix layout without fixing the underlying reset problem

## Fix Applied
1. Removed Tailwind entirely — pure CSS only
2. Safe reset (box-sizing, body margin, font: inherit, cursor: pointer)
3. All component styles written directly in globals.css (no @layer nesting)
4. JSX class names aligned to match CSS exactly

## Current State (v10)
- ✅ Header: nav horizontal, CTA button styled
- ✅ Hero: left text + right upload card, badge/segmented/convert-button all styled
- ✅ Steps: 4-column grid, title + 3 cards
- ✅ Features: bento grid (2fr+1fr, 1fr+2fr), large card has visual placeholder
- ✅ FAQ: left title + right accordion cards with borders
- ✅ Footer: 4-column dark layout, compact spacing
- ✅ Mobile: all grids → 1fr at 900px

## CSS Variables
```css
:root {
  --bg: #FDF8F3;
  --orange: #EA580C;
  --earth: #C8B8A8;
  --text: #1C1917;
  --muted: #7b7068;
  --border: #eadfd4;
}
```

## Grid Layouts
- Hero: `grid-template-columns: minmax(0, 560px) minmax(420px, 1fr); gap: 80px`
- Steps: `grid-template-columns: minmax(220px, 300px) repeat(3, minmax(0, 1fr)); gap: 20px`
- Features: `grid-template-columns: 2fr 1fr` + `feature-row: 1fr 2fr`
- FAQ: `grid-template-columns: 420px 1fr; gap: 72px`

## Remaining Polish (Optional)
1. Steps cards text slightly narrow — could reduce font-size or increase card width
2. Feature large card visual placeholder → replace with real chart/waveform graphic

## Key Files
- `/root/projects/mp3tomidi/frontend/src/app/globals.css` — All styles (safe reset + components)
- `/root/projects/mp3tomidi/frontend/src/app/layout.tsx` — Root layout, font loading, Material Icons
- `/root/projects/mp3tomidi/frontend/src/components/Header.tsx` — nav + CTA
- `/root/projects/mp3tomidi/frontend/src/components/Hero.tsx` — badge + segmented + convert-button
- `/root/projects/mp3tomidi/frontend/src/components/Features.tsx` — bento grid + chips
- `/root/projects/mp3tomidi/frontend/src/components/FAQ.tsx` — accordion cards
- `/root/projects/mp3tomidi/frontend/src/components/Footer.tsx` — 4-column dark footer

## Skill Created
- `frontend-css-reset-discipline` — CSS reset debugging rules and fix strategy
