# 🎨 DobruniaUI for Vue 3

**Modern Vue 3 UI component library**

[![npm version](https://img.shields.io/npm/v/dobruniaui-vue.svg)](https://www.npmjs.com/package/dobruniaui-vue)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

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
import { createApp } from "vue";
import DobruniaUI from "dobruniaui-vue";
import "dobruniaui-vue/styles.css";

const app = createApp(App);
app.use(DobruniaUI);
```

Or per-component:

```ts
import { DbrButton, DbrInput } from "dobruniaui-vue";
```

## Tree Shaking

Tree shaking is supported for ESM builds. To get the smallest bundle, use
named imports instead of the default plugin:

```ts
import { DbrButton, DbrInput } from "dobruniaui-vue";
```

The package is marked as side‑effect free (except `styles.css`) so bundlers
can drop unused components.

Using `app.use(DobruniaUI)` registers all components and will include the full
library in your bundle.

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
