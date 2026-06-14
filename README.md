# 🎨 DobruniaUI for Vue 3

Modern Vue 3 UI component library

[![npm version](https://img.shields.io/npm/v/dobruniaui-vue.svg)](https://www.npmjs.com/package/dobruniaui-vue)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![GitHub](https://img.shields.io/badge/GitHub-Repository-181717?logo=github)](https://github.com/dobrunia/DobruniaUI-vue)

DobruniaUI is a comprehensive Vue 3 component library designed with a focus on modern design, performance, and developer experience.

For the always up-to-date generated reference (components, tokens, reusable classes, and named types), use [`LLM_INSTRUCTIONS.md`](https://github.com/Dobrunia/DobruniaUI-vue/blob/main/LLM_INSTRUCTIONS.md).

Upgrading from **3.x**? See **[MIGRATION_v3_to_v4.md](./MIGRATION_v3_to_v4.md)**.
Upgrading from **2.x**? See **[MIGRATION_v2_to_v3.md](./MIGRATION_v2_to_v3.md)** first.

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

Wrap app UI in `dbru-root`. Light theme tokens are the default; add a theme class only when you manage the theme manually:

```vue
<div class="dbru-root">
  <!-- components -->
</div>
```

```ts
import { createApp } from 'vue';
import DobruniaUI from 'dobruniaui-vue';
import 'dobruniaui-vue/styles.css';

const app = createApp(App);
app.use(DobruniaUI);
```

Or per-component:

```ts
import { DbrButton, DbrInput, DbrSelect, DbrTextarea } from 'dobruniaui-vue';
```

## Tree Shaking

Tree shaking is supported for ESM builds. To get the smallest bundle, use
named imports instead of the default plugin:

```ts
import { DbrButton, DbrInput, DbrSelect, DbrTextarea } from 'dobruniaui-vue';
```

The package is marked as side‑effect free (except `styles.css`) so bundlers
can drop unused components.

Using `app.use(DobruniaUI)` registers all components and will include the full
library in your bundle.

## Utilities And Text

Text styling is component-driven. Use `DbrText` for size, color, weight, line height, alignment, wrapping, and truncation. Global typography utility classes are not part of the API.

Full up-to-date structural class list is generated in [`LLM_INSTRUCTIONS.md`](https://github.com/Dobrunia/DobruniaUI-vue/blob/main/LLM_INSTRUCTIONS.md) (`Reusable Classes From base.css` section).

Examples:

```vue
<DbrText size="sm">Main text</DbrText>
<DbrText size="xs" color="muted">Meta info</DbrText>
<DbrText size="sm" color="on-primary">Text on primary bg</DbrText>
<div class="dbru-surface">Surface block</div>
<DbrButton variant="primary" size="md">Action</DbrButton>
<DbrButton variant="ghost" size="sm">Cancel</DbrButton>
```

## Design Tokens

Full up-to-date token list is generated in [`LLM_INSTRUCTIONS.md`](https://github.com/Dobrunia/DobruniaUI-vue/blob/main/LLM_INSTRUCTIONS.md) (`Design Tokens From tokens.css` section).

Dark theme overrides color tokens via `.dbru-theme-dark`.

For the full up-to-date list of available theme classes and theme files, see [`LLM_INSTRUCTIONS.md`](https://github.com/Dobrunia/DobruniaUI-vue/blob/main/LLM_INSTRUCTIONS.md) (`Themes` section).

## Storybook Docs

Storybook is configured with autodocs. Start it with:

```bash
npm run storybook
```

Generate static docs:

```bash
npm run build-storybook
```

Generate one Markdown file with LLM instructions (how LLM should work with this library) and all component props:

```bash
npm run docs:llm
```

Output file: `LLM_INSTRUCTIONS.md` (root level, next to `README.md`)

## Components

Full up-to-date component list is generated in [`LLM_INSTRUCTIONS.md`](https://github.com/Dobrunia/DobruniaUI-vue/blob/main/LLM_INSTRUCTIONS.md) (`Components And Props` section).
