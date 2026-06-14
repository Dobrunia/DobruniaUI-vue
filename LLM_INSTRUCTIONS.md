# LLM Instructions

This file is generated and intended for AI assistants and automation tools.

Generated on: 2026-06-14T20:49:14.057Z

## Package Facts

- Package: `dobruniaui-vue`
- Version: `4.0.0`
- ESM import entry: `./dist/dobruniaui.mjs`
- CJS require entry: `./dist/dobruniaui.cjs`
- Types entry: `./dist/index.d.ts`

## Recommended Usage For Consumers

- Strong recommendation: use named imports for tree-shaking by default.
- Preferred import pattern: `import { DbrButton, DbrInput, DbrSelect, DbrTextarea } from "dobruniaui-vue"`.
- Import styles once: `import "dobruniaui-vue/styles.css"`.
- Avoid `app.use(DobruniaUI)` unless you explicitly want global registration of all components.

```ts
import { DbrButton, DbrInput, DbrSelect, DbrTextarea } from "dobruniaui-vue";
import "dobruniaui-vue/styles.css";
```

## Design System Rules (Short)

- Reuse primitives and variants; avoid page-specific shortcuts.
- Colors/radii/spacing should come from CSS variables and tokens.
- Use `DbrText` for text styling; global typography utility classes do not exist.
- Prefer existing structural utility classes (`dbru-btn*`, `dbru-size-*`, `dbru-bg`, `dbru-surface`).
- Keep semantic shortcuts alias-only (no unique visual styles).

## Focus Utilities

- Wrap app UI in `dbru-root` (required). Root sets default typography for the subtree.
- Inside root, `:focus:not(:focus-visible)` clears outline on mouse click; `.dbru-focus-visible:focus-visible` shows the ring on Tab.
- Add `dbru-focus-visible` on each focusable control that should show the ring (buttons, inputs, textareas).
- Do not use `dbru-focus-visible` on `DbrButtonGroup` items — group uses its own `:focus-visible` background (same as active).
- Hidden input + visible control (`DbrRadio`, `DbrToggle`, `DbrThemeToggle`): scoped `:has(input:focus-visible)` draws the ring on the visible track/control/label (input keeps `outline: none`).
- `--dbru-color-focus` is separate from `--dbru-color-primary` in every theme so the Tab ring stays visible.
- `DbrRadio` group: one Tab stop per `name`; arrow keys move selection; Enter selects focused option.

## Reusable Classes From base.css

- `dbru-root`
- `dbru-bg`
- `dbru-surface`
- `dbru-size-sm`
- `dbru-size-md`
- `dbru-size-lg`
- `dbru-btn`
- `dbru-btn--primary`
- `dbru-btn--ghost`
- `dbru-btn--danger`
- `dbru-focus-visible`
- `dbru-reduced-motion`

## Themes

- `light.css`: `dbru-theme-light`
- `dark.css`: `dbru-theme-dark`
- `fullmoon.css`: `dbru-theme-fullmoon`
- `gothic.css`: `dbru-theme-gothic`
- `grey.css`: `dbru-theme-grey`
- `oldmoney.css`: `dbru-theme-oldmoney`
- `sketch.css`: `dbru-theme-sketch`

## Design Tokens

- `--dbru-text-font-family`
- `--dbru-text-size-xs`
- `--dbru-text-size-sm`
- `--dbru-text-size-md`
- `--dbru-text-size-lg`
- `--dbru-text-size-xl`
- `--dbru-text-size-2xl`
- `--dbru-text-weight-regular`
- `--dbru-text-weight-medium`
- `--dbru-text-weight-semibold`
- `--dbru-text-line-height-tight`
- `--dbru-text-line-height-normal`
- `--dbru-text-line-height-relaxed`
- `--dbru-text-letter-spacing-normal`
- `--dbru-text-letter-spacing-tight`
- `--dbru-text-letter-spacing-wide`
- `--dbru-text-color-base`
- `--dbru-text-color-muted`
- `--dbru-text-color-primary`
- `--dbru-text-color-danger`
- `--dbru-text-color-on-primary`
- `--dbru-text-color-on-danger`
- `--dbru-text-color-success`
- `--dbru-text-color-surface`
- `--dbru-space-1`
- `--dbru-space-2`
- `--dbru-space-3`
- `--dbru-space-4`
- `--dbru-space-5`
- `--dbru-space-6`
- `--dbru-control-height-sm`
- `--dbru-control-height-md`
- `--dbru-control-height-lg`
- `--dbru-radius-sm`
- `--dbru-radius-md`
- `--dbru-border-size-1`
- `--dbru-border-size-2`
- `--dbru-ease-standard`
- `--dbru-duration-fast`
- `--dbru-duration-base`
- `--dbru-shadow-sm`
- `--dbru-shadow-md`
- `--dbru-color-bg`
- `--dbru-color-surface`
- `--dbru-color-border`
- `--dbru-color-primary`
- `--dbru-color-on-primary`
- `--dbru-color-danger`
- `--dbru-color-on-danger`
- `--dbru-color-focus`
- `--dbru-color-error`
- `--dbru-color-success`

## Component Usage Notes

### DbrBadge

- Use as overlay notification: wrap target content inside default slot.
- Pass badge marker via `badge` slot or use `dot` for dot-only mode. Default position is top-right.

### DbrButton

- Optional `pressEffect` enables slight downward shift on click; default is no shift.

### DbrChatComposer

- Use `v-model` (string) for draft text.
- Listen to `send`, `typing`, and `attachmentsChange` events for behavior integration.

### DbrCheckbox

- Use `v-model` (boolean) for checked state.
- Label can be passed either via `label` prop or default slot; both are supported.

### DbrChip

- Pass chip content via default slot (text, icon, or mixed content).
- Use `variant` for visual style only (`primary|ghost|danger`).
- Fixed size only: always `sm` / 32px height (`dbru-size-sm`) — no `size` prop.

### DbrIconButton

- Icon-only square button. `ariaLabel` is required. Sizes `sm|md|lg` → **32 / 40 / 48 px** square (`dbru-size-*`, same as `DbrButton` / `DbrAvatar`).
- Variants: **`ghost`** (default) — no border; library stretches the slot `<svg>` to the full square; hover = icon color only. **`border`** — fixed border; smaller centered icon (`--_icon-scale`); hover = icon color only.
- `iconColor`: `base|muted|primary`; use `stroke="currentColor"` / `fill="currentColor"` on paths.

**What the library does (do not reimplement in the app):**

- Ghost: `.dbru-icon-btn__icon :deep(svg) { width: 100%; height: 100%; }` — the **SVG element** always matches the button (32/40/48).
- Border: SVG size = control height × scale factor per `size`.
- The library does **not** crop `viewBox`, move paths, or auto-detect icon shape. **Visible glyph size = your SVG source `viewBox` + path bounds.**

**What the app / icon author must do (consumer responsibility):**

- Prepare each icon file (`assets/icons/*.vue` or inline `<svg>`) so the **drawn artwork**, not just the `<svg>` tag, matches the intent below. Change **`viewBox`** (and remove export `width`/`height`) — **no changes to `DbrIconButton` props** for this.

**Ghost sizing goals (LLM checklist):**

| Icon shape | Goal in ghost button | How to achieve in the SVG file |
| --- | --- | --- |
| **Square glyph** (panel, plus, settings) | Visible art fills the square control edge-to-edge (≈32/40/48 px glyph) | **Tight `viewBox`** around paths (crop empty margin). Prefer `viewBox="0 0 24 24"` with art inset ~1–2px for stroke. Do **not** leave a large canvas (e.g. 21×21 art inside `0 0 38 38`) — the `<svg>` will be full size but the **rect/paths look ~55%**. |
| **Wide / horizontal** (chevron bar, menu dots, search) | **Full width** of the button; height scales proportionally, centered vertically | Use a **wide `viewBox`** (e.g. `0 0 36 16`) with art spanning most of the width. Ghost `width/height: 100%` + default `preserveAspectRatio` (`meet`) letterboxes height — that is correct. Align horizontal strokes in design. |
| **Tall / narrow** | Fits inside square; height limited, centered | Tall `viewBox` (e.g. `0 0 10 28`); do not expect width fill. |

**Square icon — cropped `viewBox` (recommended):** keep path coordinates; only change `viewBox` + drop `width`/`height`:

```xml
<!-- BAD: square <svg>, small visible rect (~21×21 in 38×38) -->
<svg viewBox="0 0 38 38" width="38" height="38">
  <rect x="8.5" y="8.5" width="21" height="21" ... />
</svg>

<!-- GOOD: same rect/path coords, cropped viewBox -->
<svg viewBox="7 7 24 24" fill="none" aria-hidden="true">
  <rect x="8.5" y="8.5" width="21" height="21" ... />
</svg>
```

**Square icon — alternative:** loose viewBox + `preserveAspectRatio="xMidYMid slice"` on root `<svg>` (zoom-to-fill; **only for square icons**, never on wide icons).

**Slot wiring (critical):**

- **DO:** default slot = root `<svg>` or icon SFC with `<svg>` as template root.
- **DO NOT:** `<span v-html>`, wrappers, `<img src="*.svg">` — breaks `:deep(svg)` sizing.
- **DO NOT:** `width`/`height` on `<svg>` in ghost (library sets 100%).

**Usage pattern:**

```vue
<DbrIconButton aria-label="Collapse panel" size="md" variant="ghost">
  <PanelCollapseIcon />
</DbrIconButton>
```

- Icon SFC: `<template><svg viewBox="7 7 24 24" aria-hidden="true">…</svg></template>` — paths unchanged, viewBox cropped in the **app icon file**, not in the library.

**Wrong:**

```vue
<DbrIconButton aria-label="Settings"><span v-html="svgString" /></DbrIconButton>
```

### DbrInput

- Use `v-model` (string) as the single source of input value.
- `label` always means visual informational text above the control. It is not clickable and does not focus the control.
- `placeholder` means text inside the empty control.
- `size` (`sm|md|lg`) changes only the input control height; the label is not included in that height.
- For leading/trailing icon use the `icon` slot + `iconPosition` prop.

### DbrMenuToggle

- Use `v-model` (boolean) as menu/sidebar open state.
- Primary use case: mobile navigation menu and collapsible side panel toggle.

### DbrSelect

- Use `v-model` (`string | number | null`) with `options` as the source of selectable values.
- `label` always means visual informational text above the control. It is not clickable and does not focus/open the control.
- `placeholder` means text inside the empty control when no option is selected.
- `size` (`sm|md|lg`) changes only the select control height; the label is not included in that height.
- Options can include an `icon` URL rendered before the label.

### DbrText

- Inline typography via default slot. `DbrText` is the only public text styling primitive; there are no global typography utility classes.
- Customize text only through props: `size` (`xs|sm|md|lg|xl|2xl`), `weight` (`regular|medium|semibold`), `color`, `lineHeight` (`tight|normal|relaxed`), `align`, `transform`, `decoration`, `fontStyle`, `wrap`, `letterSpacing`, `truncate`.
- Omit a prop to keep the component default for that axis; set a prop only to override.

### DbrTextarea

- Use `v-model` (string) as the textarea value.
- `label` always means visual informational text above the control. It is not clickable and does not focus the control.
- `placeholder` means text inside the empty control.
- Use `width` and `height` for dimensions. There is no `size` prop because textarea height is content/layout-specific.
- `resize` defaults to `none`; opt into `vertical`, `horizontal`, or `both` when manual resize is desired.

### DbrThemeToggle

- This component toggles only between light and dark themes via boolean `v-model`.
- For custom themes (`gothic`, `sketch`, `fullmoon`, `oldmoney`) set theme class on root/html manually.

### DbrToggle

- Use `v-model` (boolean) for on/off state.
- Use `size` (`sm|md|lg`) for control scale, with optional label prop or default slot.

## v-model Contracts

| Component | modelValue Type | Default | Update Event |
| --- | --- | --- | --- |
| `DbrButtonGroup` | `DbrButtonGroupValue` | `undefined` | `update:modelValue` |
| `DbrChatComposer` | `string` | `""` | `update:modelValue` |
| `DbrCheckbox` | `boolean` | `false` | `update:modelValue` |
| `DbrInput` | `string` | `""` | `update:modelValue` |
| `DbrMenuToggle` | `boolean` | `false` | `update:modelValue` |
| `DbrRadio` | `DbrRadioValue` | `undefined` | `update:modelValue` |
| `DbrSelect` | `DbrSelectValue \| null` | `null` | `update:modelValue` |
| `DbrTextarea` | `string` | `""` | `update:modelValue` |
| `DbrThemeToggle` | `boolean` | `false` | `update:modelValue` |
| `DbrToggle` | `boolean` | `false` | `update:modelValue` |

## Named Type Aliases

This section lists exported reusable type aliases (enums/unions) used by component props.

| Type | Definition | Source |
| --- | --- | --- |
| `DbrAttachmentKind` | `"image" \| "file" \| "audio"` | `DbrChatComposer` |
| `DbrBadgeVariant` | `"primary" \| "danger" \| "neutral"` | `DbrBadge` |
| `DbrButtonGroupSize` | `'sm' \| 'md' \| 'lg'` | `DbrButtonGroup` |
| `DbrButtonGroupValue` | `string \| number` | `DbrButtonGroup` |
| `DbrButtonSize` | `"sm" \| "md" \| "lg"` | `DbrButton` |
| `DbrButtonVariant` | `"primary" \| "ghost" \| "danger"` | `DbrButton` |
| `DbrCardVariant` | `"surface" \| "bordered"` | `DbrCard` |
| `DbrChatBubbleDirection` | `"in" \| "out"` | `DbrChatBubble` |
| `DbrChatBubbleKind` | `"text" \| "image" \| "audio"` | `DbrChatBubble` |
| `DbrChatBubbleStatus` | `"none" \| "sending" \| "sent" \| "read"` | `DbrChatBubble` |
| `DbrChipType` | `"default" \| "removable"` | `DbrChip` |
| `DbrChipVariant` | `"primary" \| "ghost" \| "danger"` | `DbrChip` |
| `DbrIconButtonIconColor` | `'base' \| 'muted' \| 'primary'` | `DbrIconButton` |
| `DbrIconButtonSize` | `'sm' \| 'md' \| 'lg'` | `DbrIconButton` |
| `DbrIconButtonVariant` | `'ghost' \| 'border'` | `DbrIconButton` |
| `DbrMessageStatus` | `"unread" \| "read" \| "error"` | `DbrChatListItem` |
| `DbrMessageType` | `"text" \| "image" \| "file" \| "voice"` | `DbrChatListItem` |
| `DbrPresence` | `"online" \| "away" \| "offline"` | `DbrChatListItem` |
| `DbrRadioValue` | `string \| number \| boolean` | `DbrRadio` |
| `DbrSelectSize` | `'sm' \| 'md' \| 'lg'` | `DbrSelect` |
| `DbrSelectValue` | `string \| number` | `DbrSelect` |
| `DbrTextAlign` | `'left' \| 'center' \| 'right'` | `DbrText` |
| `DbrTextareaResize` | `'none' \| 'vertical' \| 'horizontal' \| 'both'` | `DbrTextarea` |
| `DbrTextColor` | `\| 'base' \| 'muted' \| 'primary' \| 'danger' \| 'success' \| 'surface' \| 'on-primary' \| 'on-danger'` | `DbrText` |
| `DbrTextDecoration` | `'none' \| 'underline' \| 'line-through'` | `DbrText` |
| `DbrTextFontStyle` | `'normal' \| 'italic'` | `DbrText` |
| `DbrTextLetterSpacing` | `'normal' \| 'tight' \| 'wide'` | `DbrText` |
| `DbrTextLineHeight` | `'tight' \| 'normal' \| 'relaxed'` | `DbrText` |
| `DbrTextSize` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| '2xl'` | `DbrText` |
| `DbrTextTransform` | `'none' \| 'uppercase' \| 'lowercase' \| 'capitalize'` | `DbrText` |
| `DbrTextWeight` | `'regular' \| 'medium' \| 'semibold'` | `DbrText` |
| `DbrTextWrap` | `'wrap' \| 'nowrap' \| 'pre-wrap'` | `DbrText` |

## Components And Props

### DbrAvatar Props

Source interface: `DbrAvatarProps`

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `src` | `string` | `undefined` | /** Image source. / |
| `alt` | `string` | `undefined` | /** Alt text for the image. / |
| `name` | `string` | `""` | /** Name used to generate initials fallback. / |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | /** Avatar size. / |
| `shape` | `"circle" \| "rounded"` | `"circle"` | /** Avatar shape. / |
| `active` | `boolean` | `false` | /** Highlights avatar as active. / |

### DbrBadge Props

Source interface: `DbrBadgeProps`

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `variant` | `DbrBadgeVariant` | `"primary"` | /** Badge color style. / |
| `dot` | `boolean` | `false` | /** Show dot-only badge. / |
| `offsetX` | `string` | `"-6px"` | /** Horizontal offset from right edge. / |
| `offsetY` | `string` | `"-6px"` | /** Vertical offset from top edge. / |

### DbrButton Props

Source interface: `DbrButtonProps`

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `variant` | `DbrButtonVariant` | `"primary"` | /** Visual style of the button. / |
| `size` | `DbrButtonSize` | `"md"` | /** Button size scale. / |
| `disabled` | `boolean` | `false` | /** Disables the button and removes pointer interaction. / |
| `pressed` | `boolean` | `undefined` | /** Use for toggle buttons to communicate pressed state to screen readers. / |
| `nativeType` | `"button" \| "submit" \| "reset"` | `"button"` | /** Native HTML button type. / |
| `pressEffect` | `boolean` | `false` | /** Slight downward shift on click (active state). / |

### DbrButtonGroup Props

Source interface: `DbrButtonGroupProps`

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `modelValue` | `DbrButtonGroupValue` | `undefined` | /** Current selected value (v-model). / |
| `options` | `DbrButtonGroupOption[]` | `[]` | /** Available group options. / |
| `size` | `DbrButtonGroupSize` | `"md"` | /** Control size. / |
| `disabled` | `boolean` | `false` | /** Disables whole group. / |

### DbrCard Props

Source interface: `DbrCardProps`

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `as` | `"div" \| "section" \| "article"` | `"div"` | /** HTML tag used as card root element. / |
| `variant` | `DbrCardVariant` | `"surface"` | /** Visual style of the card. / |
| `disabled` | `boolean` | `false` | /** Disables hover and interactions. / |
| `hoverable` | `boolean` | `false` | /** Enables hover highlight effect. / |

### DbrChatBubble Props

Source interface: `DbrChatBubbleProps`

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `name` | `string` | `""` | /** Sender name shown above message. / |
| `text` | `string` | `"Message text"` | /** Message text. / |
| `kind` | `DbrChatBubbleKind` | `"text"` | /** Message kind. / |
| `mediaSrc` | `string` | `""` | /** Media source (image or audio). / |
| `time` | `string` | `"12:45"` | /** Time label. / |
| `direction` | `DbrChatBubbleDirection` | `"in"` | /** Direction of the message. / |
| `status` | `DbrChatBubbleStatus` | `"none"` | /** Message status for checkmarks. / |

### DbrChatComposer Props

Source interface: `DbrChatComposerProps`

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `modelValue` | `string` | `""` | /** Message text for v-model. / |
| `placeholder` | `string` | `"Message"` | /** Placeholder text for the input. / |
| `ariaLabel` | `string` | `"Message"` | /** Accessible label for the textarea. / |
| `disabled` | `boolean` | `false` | /** Disable composer controls. / |
| `maxHeight` | `number` | `120` | /** Max height for auto-growing textarea (px). / |

### DbrChatListItem Props

Source interface: `DbrChatListItemProps`

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | `string` | `undefined` | /** Unique chat id. / |
| `avatar` | `string` | `undefined` | /** Avatar image source. / |
| `avatarAlt` | `string` | `undefined` | /** Avatar alt text. / |
| `avatarShape` | `"circle" \| "rounded"` | `"circle"` | /** Avatar shape. / |
| `name` | `string` | `"User"` | /** Display name. / |
| `lastMessage` | `{ text?: string` | `{ text: "Last message...", type: "text" }` | /** Last message object. / |
| `type` | `DbrMessageType` | `—` | — |
| `authorName` | `string` | `—` | — |
| `timestamp` | `number \| Date` | `undefined` | /** Timestamp of last message. / |
| `messageStatus` | `DbrMessageStatus` | `"read"` | /** Message status (incoming only). / |
| `isOutgoing` | `boolean` | `false` | /** Whether the last message is outgoing. / |
| `status` | `DbrPresence` | `"offline"` | /** User presence status. / |
| `unreadCount` | `number` | `0` | /** Unread count badge (incoming only). / |
| `isTyping` | `boolean` | `false` | /** Shows typing indicator. / |
| `loading` | `boolean` | `false` | /** Shows loading skeleton when true. / |

### DbrCheckbox Props

Source interface: `DbrCheckboxProps`

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `modelValue` | `boolean` | `false` | /** Checked state for v-model. / |
| `disabled` | `boolean` | `false` | /** Disables the checkbox and removes pointer interaction. / |
| `label` | `string` | `undefined` | /** Optional label text. You can also use the default slot. / |
| `name` | `string` | `undefined` | /** Native name attribute for form submission. / |
| `value` | `string` | `undefined` | /** Native value attribute for form submission. / |

### DbrChip Props

Source interface: `DbrChipProps`

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `variant` | `DbrChipVariant` | `"primary"` | /** Visual style of the chip. / |
| `type` | `DbrChipType` | `"default"` | /** Chip behavior type. / |
| `disabled` | `boolean` | `false` | /** Removes interaction from the remove action button. / |
| `removeAriaLabel` | `string` | `"Remove chip"` | /** Accessibility label for remove button. / |

### DbrIconButton Props

Source interface: `DbrIconButtonProps`

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `ariaLabel` | `string` | `—` | /** Accessible label for icon-only button (required for screen readers). Slot must expose a root `<svg>` (or icon SFC with `<svg>` root) — not `v-html` wrappers. / |
| `size` | `DbrIconButtonSize` | `"md"` | /** Button size scale (matches DbrButton). / |
| `variant` | `DbrIconButtonVariant` | `"ghost"` | /** `ghost` — no border; library sets slot `<svg>` to 100% of the square control (32 / 40 / 48). Consumer icon files must use a tight `viewBox` (square glyphs) or a wide `viewBox` (horizontal glyphs) so visible paths fill as intended — the library does not crop viewBox. `border` — fixed border; smaller centered icon; hover icon color only. / |
| `iconColor` | `DbrIconButtonIconColor` | `"base"` | /** Icon color (CSS token). Hover moves toward primary. / |
| `disabled` | `boolean` | `false` | /** Disables the button and removes pointer interaction. / |
| `nativeType` | `'button' \| 'submit' \| 'reset'` | `"button"` | /** Native HTML button type. / |

### DbrInput Props

Source interface: `DbrInputProps`

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `modelValue` | `string` | `""` | /** Input value for v-model. / |
| `label` | `string` | `undefined` | /** Visual label text above the input. It is informational only and does not focus the control. / |
| `placeholder` | `string` | `undefined` | /** Placeholder text shown inside the input when empty. / |
| `size` | `'sm' \| 'md' \| 'lg'` | `"md"` | /** Control size. The label is not included in the control height. / |
| `type` | `string` | `"text"` | /** Native input type. / |
| `iconPosition` | `'left' \| 'right'` | `"left"` | /** Position of custom icon slot. / |
| `name` | `string` | `undefined` | /** Native name attribute for form submission. / |
| `id` | `string` | `undefined` | /** Native id used to connect input and label. / |
| `disabled` | `boolean` | `false` | /** Disables the input and removes pointer interaction. / |
| `required` | `boolean` | `false` | /** Marks input as required. / |
| `autocomplete` | `string` | `undefined` | /** Native autocomplete attribute. / |

### DbrLoader Props

Source interface: `DbrLoaderProps`

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | /** Loader size from global control scale. / |

### DbrMenuToggle Props

Source interface: `DbrMenuToggleProps`

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `modelValue` | `boolean` | `false` | /** Open/closed state for menu or side panel (v-model). / |
| `disabled` | `boolean` | `false` | /** Disables the control and removes pointer interaction. / |
| `label` | `string` | `undefined` | /** Optional label text. You can also use the default slot. / |
| `id` | `string` | `undefined` | /** Native id used to connect input and label. / |
| `name` | `string` | `undefined` | /** Native name attribute for form submission. / |
| `value` | `string` | `undefined` | /** Native value attribute for form submission. / |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | /** Control size from global control scale. / |

### DbrRadio Props

Source interface: `DbrRadioProps`

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `modelValue` | `DbrRadioValue` | `undefined` | /** Selected value in radio group. / |
| `value` | `DbrRadioValue` | `"on"` | /** Value emitted when radio gets selected. / |
| `label` | `string` | `undefined` | /** Optional label text. You can also use the default slot. / |
| `name` | `string` | `undefined` | /** Native name attribute for grouping radios. / |
| `disabled` | `boolean` | `false` | /** Disables radio interaction. / |

### DbrSelect Props

Source interface: `DbrSelectProps`

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `modelValue` | `DbrSelectValue \| null` | `null` | /** Selected value for v-model. / |
| `options` | `readonly DbrSelectOption[]` | `—` | /** Available options. / |
| `label` | `string` | `undefined` | /** Visual label text above the select. It is informational only and does not focus/open the control. / |
| `placeholder` | `string` | `""` | /** Placeholder text shown inside the control when no option is selected. / |
| `size` | `DbrSelectSize` | `"md"` | /** Control size. The label is not included in the control height. / |
| `name` | `string` | `undefined` | /** Native name attribute. A hidden input is rendered when provided. / |
| `id` | `string` | `undefined` | /** Trigger id. / |
| `disabled` | `boolean` | `false` | /** Disables the select. / |
| `required` | `boolean` | `false` | /** Marks the select as required for accessibility. / |

### DbrSkeleton Props

Source interface: `DbrSkeletonProps`

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `width` | `string` | `"100%"` | /** Skeleton width (any valid CSS length). / |
| `height` | `string` | `"0"` | /** Skeleton height (any valid CSS length). / |
| `radius` | `string` | `"0"` | /** Skeleton border radius (any valid CSS radius). / |

### DbrText Props

Source interface: `DbrTextProps`

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `size` | `DbrTextSize` | `—` | /** Text size. Default (omitted) = `md` / 14px. / |
| `weight` | `DbrTextWeight` | `—` | /** Font weight token. Default = `regular` (400). / |
| `color` | `DbrTextColor` | `—` | /** Text color. Default = `base`. / |
| `lineHeight` | `DbrTextLineHeight` | `—` | /** Line height token. Default = `normal` (1.5). / |
| `align` | `DbrTextAlign` | `—` | /** Text alignment. / |
| `transform` | `DbrTextTransform` | `—` | /** Text transform. Default = `none`. / |
| `decoration` | `DbrTextDecoration` | `—` | /** Text decoration. Default = `none`. / |
| `fontStyle` | `DbrTextFontStyle` | `—` | /** Font style. Default = `normal`. / |
| `wrap` | `DbrTextWrap` | `—` | /** White-space / wrapping. Default = `wrap`. / |
| `letterSpacing` | `DbrTextLetterSpacing` | `—` | /** Letter spacing token. Default = `normal`. / |
| `truncate` | `boolean` | `false` | /** Single-line ellipsis overflow. / |

### DbrTextarea Props

Source interface: `DbrTextareaProps`

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `modelValue` | `string` | `""` | /** Textarea value for v-model. / |
| `label` | `string` | `undefined` | /** Visual label text above the textarea. It is informational only and does not focus the control. / |
| `placeholder` | `string` | `undefined` | /** Placeholder text shown inside the textarea when empty. / |
| `name` | `string` | `undefined` | /** Native name attribute for form submission. / |
| `id` | `string` | `undefined` | /** Native id. / |
| `disabled` | `boolean` | `false` | /** Disables the textarea and removes pointer interaction. / |
| `required` | `boolean` | `false` | /** Marks textarea as required. / |
| `autocomplete` | `string` | `undefined` | /** Native autocomplete attribute. / |
| `rows` | `number` | `4` | /** Native rows attribute. / |
| `width` | `string` | `"100%"` | /** CSS width of the textarea. / |
| `height` | `string` | `undefined` | /** CSS height of the textarea. / |
| `resize` | `DbrTextareaResize` | `"none"` | /** Resize behavior. Default locks manual resizing. / |

### DbrThemeToggle Props

Source interface: `DbrThemeToggleProps`

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `modelValue` | `boolean` | `false` | /** Whether dark theme is enabled. / |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | /** Control size from global size scale. / |
| `shape` | `"circle" \| "rounded"` | `"circle"` | /** Toggle button shape. / |
| `persist` | `boolean` | `true` | /** Persist choice to localStorage. / |
| `storageKey` | `string` | `"dbru-theme"` | /** Storage key for persistence. / |

### DbrToggle Props

Source interface: `DbrToggleProps`

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `modelValue` | `boolean` | `false` | /** Checked state for v-model. / |
| `disabled` | `boolean` | `false` | /** Disables the toggle and removes pointer interaction. / |
| `label` | `string` | `undefined` | /** Optional label text. You can also use the default slot. / |
| `name` | `string` | `undefined` | /** Native name attribute for form submission. / |
| `value` | `string` | `undefined` | /** Native value attribute for form submission. / |
| `size` | `"xs" \| "sm" \| "md" \| "lg"` | `"md"` | /** Toggle size from global control scale. `xs` is local to this component and visually matches checkbox height. / |

### DbrTooltip Props

Source interface: `DbrTooltipProps`

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `text` | `string` | `"This is a cool tooltip!"` | /** Tooltip text content. / |
| `variant` | `"info" \| "warning" \| "error" \| "success"` | `undefined` | /** Tooltip visual variant. / |
