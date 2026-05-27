# Migration guide: v2.x → v3.0

This document lists **breaking and behavioral changes** when upgrading from DobruniaUI Vue **2.x** (last: `2.2.x`) to **3.0.0**.

```bash
npm i dobruniaui-vue@3
```

After upgrading, re-import styles once:

```ts
import "dobruniaui-vue/styles.css";
```

---

## 1. Typography utility classes (rename)

Size and color utilities are split explicitly. Old combined `dbru-text-*` names are removed.

### Font size

| v2 | v3 |
|----|-----|
| `dbru-text-xs` | `dbru-font-size-xs` |
| `dbru-text-sm` | `dbru-font-size-sm` |
| `dbru-text-base` | `dbru-font-size-base` |
| `dbru-text-lg` | `dbru-font-size-lg` |
| `dbru-text-xl` | `dbru-font-size-xl` |

### Text color

| v2 | v3 |
|----|-----|
| `dbru-text-main` | `dbru-font-color-base` |
| `dbru-text-muted` | `dbru-font-color-muted` |
| `dbru-text-on-primary` | `dbru-font-color-on-primary` |
| `dbru-text-on-danger` | `dbru-font-color-on-danger` |

**Recommendation:** use size + color classes together when needed:

```vue
<!-- v2 -->
<span class="dbru-text-sm dbru-text-muted">Meta</span>

<!-- v3 -->
<span class="dbru-font-size-sm dbru-font-color-muted">Meta</span>
```

### Default typography on `.dbru-root`

v3 sets base typography on `.dbru-root` (font family, base size, line height, text color). Size/color utilities only set their own property.

Wrap app UI (if not already):

```vue
<div class="dbru-root dbru-theme-light">
  <!-- app -->
</div>
```

---

## 2. Focus ring: `dbru-focusable` → `dbru-focus-visible`

v2 used `dbru-focusable` for keyboard focus outlines. v3 uses a single utility: **`dbru-focus-visible`**.

| v2 | v3 |
|----|-----|
| `dbru-focusable` | `dbru-focus-visible` |

### Global behavior (inside `.dbru-root`)

- Mouse click: `:focus:not(:focus-visible)` → no outline.
- Tab: `.dbru-focus-visible:focus-visible` → outline with `--dbru-color-focus`.

Add `dbru-focus-visible` on each control that should show the Tab ring (`DbrButton`, `DbrInput`, `DbrCheckbox`, `DbrIconButton`, etc.).

**Do not** add `dbru-focus-visible` on `DbrButtonGroup` items — the group uses its own `:focus-visible` styling.

**Hidden input + visible control** (`DbrRadio`, `DbrToggle`, `DbrThemeToggle`): focus ring is drawn in component CSS via `:has(input:focus-visible)` on the visible part; you do not add a global sibling selector in your app.

### Theme token

`--dbru-color-focus` is now **distinct from** `--dbru-color-primary` in every theme (better visible focus ring). No class rename — only visual change after upgrade.

---

## 3. `DbrButton`: press effect is opt-in

v2 applied a slight **active (click) shift** to **all** buttons via global CSS:

```css
/* v2 — always */
.dbru-btn:active:not(:disabled) { transform: translateY(1px); }
```

v3 adds prop **`pressEffect`** (default **`false`**). Shift only when enabled.

| v2 behavior | v3 equivalent |
|-------------|----------------|
| Always shifts on click | Default: no shift |
| — | `<DbrButton press-effect>…</DbrButton>` or `:press-effect="true"` |

```vue
<!-- Restore v2-like click shift -->
<DbrButton variant="primary" press-effect>Save</DbrButton>
```

`dbru-btn--press-effect` is **not** a public utility class — do not add it manually in markup; use the prop only.

---

## 4. `DbrIconButton` (new in v3)

`DbrIconButton` is exported again in v3 with a new API. If you had a local copy from an older experimental build, replace usage as follows.

```vue
<script setup>
import { DbrIconButton } from "dobruniaui-vue";
</script>

<template>
  <!-- Default: ghost — no border, icon fills 32/40/48, hover = icon color only -->
  <DbrIconButton aria-label="Settings" size="md" icon-color="base">
    <svg viewBox="0 0 24 24" aria-hidden="true">…</svg>
  </DbrIconButton>

  <!-- Bordered variant -->
  <DbrIconButton aria-label="Settings" size="md" variant="border">
    <svg viewBox="0 0 24 24" aria-hidden="true">…</svg>
  </DbrIconButton>
</template>
```

| Topic | v3 |
|--------|-----|
| Variants | `variant="ghost"` (default) \| `variant="border"` |
| Icon color | `iconColor`: `base` \| `muted` \| `primary` |
| Sizes | `sm` / `md` / `lg` → 32 / 40 / 48 px (same as `DbrButton` / `DbrAvatar`) |
| Slot SVG | Put **root `<svg>` or icon `.vue` (root `<svg>`)** in the default slot — no wrappers |

### Icon slot (do not use `v-html`)

Ghost stretches the slot **`<svg>` element** to 32 / 40 / 48 px (`.dbru-icon-btn__icon :deep(svg) { width: 100%; height: 100%; }`). The library does **not** crop `viewBox` — prepare icons in **your app** (`assets/icons/*.vue`).

| Glyph | Goal in ghost | In the icon file |
|--------|----------------|------------------|
| Square (panel, plus, …) | Visible art fills the square button | **Crop `viewBox`** to path bounds (same coordinates); remove `width`/`height`. Or `preserveAspectRatio="xMidYMid slice"` on square icons only. |
| Wide / horizontal | Full **width** of the button | Wide `viewBox` (e.g. `0 0 36 16`); art spans the width. Height letterboxes — align strokes in design. |
| Tall / narrow | Fits inside square, centered | Tall `viewBox`; width will not fill. |

- **Do:** `<PanelCollapseIcon />` — root `<svg>`, no wrappers, no `v-html`.
- **Do not:** loose square canvas (21×21 art in `0 0 38 38`) — the `<svg>` box is 40×40 but the drawn rect looks ~24 px.

```vue
<!-- recommended: icon SFCs in assets/icons/, root element is <svg> -->
<DbrIconButton :aria-label="panelOpen ? 'Collapse' : 'Expand'" size="md">
  <PanelCollapseIcon v-if="panelOpen" />
  <PanelExpandIcon v-else />
</DbrIconButton>
```

---

## 5. Design token: muted text

v3 themes define:

```css
--dbru-color-text-muted: color-mix(in oklab, var(--dbru-color-text) 55%, transparent);
```

Use via class `dbru-font-color-muted` or the variable in custom CSS.

---

## 6. Quick find-and-replace (project-wide)

Run on your app source (review diff before commit):

| Search | Replace |
|--------|---------|
| `dbru-text-xs` | `dbru-font-size-xs` |
| `dbru-text-sm` | `dbru-font-size-sm` |
| `dbru-text-base` | `dbru-font-size-base` |
| `dbru-text-lg` | `dbru-font-size-lg` |
| `dbru-text-xl` | `dbru-font-size-xl` |
| `dbru-text-main` | `dbru-font-color-base` |
| `dbru-text-muted` | `dbru-font-color-muted` |
| `dbru-text-on-primary` | `dbru-font-color-on-primary` |
| `dbru-text-on-danger` | `dbru-font-color-on-danger` |
| `dbru-focusable` | `dbru-focus-visible` |

Then search for buttons that should keep the old click shift and add `press-effect` where needed.

---

## 7. Unchanged / non-breaking

- Component names and named imports (`DbrButton`, `DbrInput`, …).
- `dbru-size-sm` / `dbru-size-md` / `dbru-size-lg` control heights (32 / 40 / 48).
- `dbru-btn`, `dbru-btn--primary`, `dbru-btn--ghost`, `dbru-btn--danger`.
- Theme classes: `dbru-theme-light`, `dbru-theme-dark`, plus extended themes (`gothic`, `grey`, `sketch`, `fullmoon`, `oldmoney`).
- `v-model` APIs on form components.

---

## Reference

- Human docs: [README.md](./README.md)
- Machine-readable catalog: [LLM_INSTRUCTIONS.md](./LLM_INSTRUCTIONS.md) (regenerate locally: `npm run docs:llm`)
