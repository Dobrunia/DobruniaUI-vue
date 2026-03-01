# 🎨 DobruniaUI for Vue 3

**Modern Vue 3 UI component library**

[![npm version](https://img.shields.io/npm/v/dobruniaui-vue.svg)](https://www.npmjs.com/package/dobruniaui-vue)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![GitHub](https://img.shields.io/badge/GitHub-Repository-181717?logo=github)](https://github.com/dobrunia/DobruniaUI-vue)

DobruniaUI is a comprehensive Vue 3 component library designed with a focus on modern design, performance, and developer experience.

## 🎮 Demo

**[Explore all components in the interactive playground →](https://dobrunia.github.io/DobruniaUI-vue/)**

## ☕ Support

You can support the development of the library:

[![Boosty](https://img.shields.io/badge/Boosty-Поддержать-orange?logo=buymeacoffee)](https://boosty.to/sentryez/donate)

UI library for Vue 3.

## Install

```bash
npm i dobruniaui-vue
```

## Usage

```ts
import { createApp } from 'vue';
import DobruniaUI from 'dobruniaui-vue';
import 'dobruniaui-vue/styles.css';

const app = createApp(App);
app.use(DobruniaUI);
```

Or per-component:

```ts
import { DbrButton, DbrInput } from 'dobruniaui-vue';
```

## Tree Shaking

Tree shaking is supported for ESM builds. To get the smallest bundle, use
named imports instead of the default plugin:

```ts
import { DbrButton, DbrInput } from 'dobruniaui-vue';
```

The package is marked as side‑effect free (except `styles.css`) so bundlers
can drop unused components.

Using `app.use(DobruniaUI)` registers all components and will include the full
library in your bundle.

## Utility And Primitive Classes

Available classes:

- `dbru-text-xs` — extra small text size
- `dbru-text-sm` — small text size
- `dbru-text-base` — base text size
- `dbru-text-lg` — large text size
- `dbru-text-main` — main text color (`--dbru-color-text`)
- `dbru-text-muted` — muted text color
- `dbru-text-on-primary` — text color on primary background (`--dbru-color-on-primary`)
- `dbru-text-on-danger` — text color on danger background (`--dbru-color-on-danger`)
- `dbru-bg` — background from `--dbru-color-bg`
- `dbru-surface` — background from `--dbru-color-surface`
- `dbru-btn` — base button structure and interaction
- `dbru-size-sm|md|lg` — control size tokens for height, text-size variable and horizontal padding
- `dbru-btn--primary|ghost|danger` — button visual variant
- `dbru-btn` — base button structure and interaction
- `dbru-size-sm|md|lg` — button control height and horizontal padding
- `dbru-btn--primary|ghost|danger` — visual variant

Examples:

```vue
<span class="dbru-text-sm dbru-text-main">Main text</span>
<span class="dbru-text-xs dbru-text-muted">Meta info</span>
<span class="dbru-text-sm dbru-text-on-primary">Text on primary bg</span>
<div class="dbru-surface">Surface block</div>
<button class="dbru-btn dbru-btn--primary dbru-size-md dbru-text-base dbru-text-on-primary">Action</button>
<button class="dbru-btn dbru-btn--ghost dbru-size-sm dbru-text-sm dbru-text-main">Cancel</button>
```

## Design Tokens

Available token groups:

- Typography: `--dbru-font-family`, `--dbru-font-size-xs|sm|base|lg`, `--dbru-font-weight-semibold`, `--dbru-line-height-base`
- Spacing: `--dbru-space-1|2|3|4|5`
- Control sizes: `--dbru-control-height-sm|md|lg`
- Radii: `--dbru-radius-sm|md`
- Motion: `--dbru-ease-standard`, `--dbru-duration-fast|base`
- Colors: `--dbru-color-bg`, `--dbru-color-surface`, `--dbru-color-text`, `--dbru-color-border`, `--dbru-color-primary`, `--dbru-color-on-primary`, `--dbru-color-danger`, `--dbru-color-on-danger`, `--dbru-color-focus`

Dark theme overrides color tokens via `.dbru-theme-dark`.

## Storybook Docs

Storybook is configured with autodocs. Start it with:

```bash
npm run storybook
```

Generate static docs:

```bash
npm run build-storybook
```

## Components

- DbrButton
- DbrIconButton
- DbrBadge
- DbrCheckbox
- DbrToggle
- DbrInput
- DbrAvatar
- DbrTooltip
- DbrEyesLoader
- DbrLoader
- DbrTerminalLoader
- DbrChatListItem
- DbrChatBubble
- DbrChatComposer
- DbrThemeToggle
- DbrCard
