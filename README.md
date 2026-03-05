# 🎨 DobruniaUI for Vue 3

**Modern Vue 3 UI component library**

[![npm version](https://img.shields.io/npm/v/dobruniaui-vue.svg)](https://www.npmjs.com/package/dobruniaui-vue)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![GitHub](https://img.shields.io/badge/GitHub-Repository-181717?logo=github)](https://github.com/dobrunia/DobruniaUI-vue)

DobruniaUI is a comprehensive Vue 3 component library designed with a focus on modern design, performance, and developer experience.

For the always up-to-date generated reference (components, tokens, reusable classes, and named types), use [`LLM_INSTRUCTIONS.md`](https://github.com/Dobrunia/DobruniaUI-vue/blob/main/LLM_INSTRUCTIONS.md).

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

Full up-to-date class list is generated in [`LLM_INSTRUCTIONS.md`](https://github.com/Dobrunia/DobruniaUI-vue/blob/main/LLM_INSTRUCTIONS.md) (`Reusable Classes From base.css` section).

Examples:

```vue
<span class="dbru-text-sm dbru-text-main">Main text</span>
<span class="dbru-text-xs dbru-text-muted">Meta info</span>
<span class="dbru-text-sm dbru-text-on-primary">Text on primary bg</span>
<div class="dbru-surface">Surface block</div>
<button
  class="dbru-btn dbru-btn--primary dbru-size-md dbru-text-base dbru-text-on-primary"
>Action</button>
<button class="dbru-btn dbru-btn--ghost dbru-size-sm dbru-text-sm dbru-text-main">Cancel</button>
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
