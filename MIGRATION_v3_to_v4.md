# Migration guide: v3.x -> v4.0

This document lists breaking changes when upgrading from DobruniaUI Vue 3.x to 4.0.

```bash
npm i dobruniaui-vue@4
```

After upgrading, re-import styles once:

```ts
import "dobruniaui-vue/styles.css";
```

---

## 1. Typography Utilities Removed

Global typography utility classes are removed in v4. Render text with `DbrText`.

```vue
<!-- v4 -->
<DbrText size="sm" color="muted">Meta</DbrText>
<DbrText size="2xl" weight="semibold">Page title</DbrText>
```

Use `DbrText` for:

- `size`: `xs`, `sm`, `md`, `lg`, `xl`, `2xl`
- `weight`: `regular`, `medium`, `semibold`
- `color`: `base`, `muted`, `primary`, `danger`, `success`, `surface`, `on-primary`, `on-danger`
- `lineHeight`: `tight`, `normal`, `relaxed`
- `align`, `transform`, `decoration`, `fontStyle`, `wrap`, `letterSpacing`, `truncate`

`md` is the default body size. The previous `base` naming is gone from the public text API.

---

## 2. Text Tokens Renamed

The canonical text scale now lives under `--dbru-text-*`.

| v4 token | Value / meaning |
| --- | --- |
| `--dbru-text-size-xs` | 11px |
| `--dbru-text-size-sm` | 12px |
| `--dbru-text-size-md` | 14px, default body |
| `--dbru-text-size-lg` | 16px |
| `--dbru-text-size-xl` | 20px |
| `--dbru-text-size-2xl` | 28px, previous display size |

Do not use removed legacy typography variables in app code. Prefer `DbrText` props.

---

## 3. Theme Text Colors

`DbrText` color props follow theme color tokens automatically:

- `base` -> current theme text color
- `muted` -> current theme muted text color
- `primary`, `danger`, `success`, `surface`, `on-primary`, `on-danger` -> current theme palette

All built-in themes define the underlying color palette, so text color changes with the active theme.

---

## 4. Native Text Controls

Native controls such as `DbrInput` and `DbrChatComposer` still render browser-owned text (`input` / `textarea`). These controls keep internal scoped text rules with `!important` so their text stays consistent with `DbrText`.

For normal rendered text, use `DbrText`.

---

## 5. Form Labels And Placeholders

`DbrInput`, `DbrSelect`, and `DbrTextarea` now use one shared naming rule:

- `label` is visual informational text above the control. It is not clickable and does not focus/open the control.
- `placeholder` is text inside the empty control.

This is a breaking change for `DbrInput`: in v3, `label` was used as the native placeholder. In v4, move placeholder text to the new `placeholder` prop.

```vue
<!-- v3 -->
<DbrInput label="Email" />

<!-- v4 -->
<DbrInput label="Email" placeholder="mail@example.com" />
```

Control size only describes the bordered control itself. The label is not counted as part of `sm`, `md`, or `lg` height. `DbrTextarea` does not have a `size` prop; use `width` and `height` for its dimensions.

---

## 6. `DbrText` Truncation

Use `truncate` for ellipsis. The parent still controls available width.

```vue
<div style="width: 220px;">
  <DbrText truncate>
    Very long text that should ellipsize
  </DbrText>
</div>
```

---

## 7. What To Search For

In application code, search for old typography utility classes and replace them with `DbrText`.

Also search for old text-size usage named `base`; use `md` for default body text and `2xl` for the old 28px display size.

For forms, search for `DbrInput label=`. If the text was meant to appear inside the empty field, change it to `placeholder=`.

---

## 8. Unchanged

- Component imports and plugin install API.
- Theme class names.
- Control size classes for component internals (`dbru-size-sm`, `dbru-size-md`, `dbru-size-lg`).
- Focus utility behavior.
