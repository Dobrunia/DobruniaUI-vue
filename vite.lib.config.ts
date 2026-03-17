import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';

const COMPONENT_DOCS: Record<string, string> = {
  DbrButton: 'Button. Variants: `primary` | `ghost` | `danger`. Sizes: `sm` | `md` | `lg`.',
  DbrButtonGroup: 'Single-select segmented button group with active state via `v-model`.',
  DbrBadge:
    'Notification badge overlay for attached content. Positioned top-right via default offsets and supports dot mode.',
  DbrChip:
    'Compact pill chip with slot content. Variants: `primary` | `ghost` | `danger`, optional removable mode.',
  DbrLoader: 'Animated 8-dot spinner. Sizes: `sm` | `md` | `lg`.',
  DbrCard: 'Card container. Variants: `surface` | `bordered`. Enable `hoverable` for a hover highlight.',
  DbrTooltip: 'Hover tooltip with icon. Variants: `info` | `warning` | `error` | `success`.',
  DbrAvatar: 'User avatar — shows image or auto-generated initials. Shapes: `circle` | `rounded`.',
  DbrChatBubble:
    'Chat message bubble. Directions: `in` | `out`. Kinds: `text` | `image` | `audio`. Optional sender name above message via `name`.',
  DbrCheckbox: 'Checkbox with `v-model`. Label via prop or default slot.',
  DbrToggle: 'Switch toggle with left/right thumb animation. Uses boolean `v-model` and supports sizes `sm|md|lg`.',
  DbrRadio: 'Radio button with `v-model` and custom check icon style.',
  DbrMenuToggle:
    'Hamburger ↔ X animated menu toggle for mobile navigation and collapsible sidebars. Uses `v-model` as open/closed state.',
  DbrThemeToggle: 'Light / dark theme toggle. Persists to `localStorage`, controls `[data-theme="dark"]` on `<html>`.',
  DbrInput: 'Text input with optional `icon` slot and built-in password visibility toggle.',
  DbrChatComposer: 'Chat message composer — auto-growing textarea, file attachments, audio recording.',
  DbrChatListItem: 'Chat list row — avatar, name, last message preview, timestamp, unread badge, presence.',
  DbrSkeleton: 'Generic skeleton loader with configurable `width`, `height`, and `radius`.',
  DbrEyesLoader: 'Decorative eye-tracking loader animation.',
  DbrTerminalLoader: 'Decorative terminal-style loading animation.',
};

export default defineConfig({
  plugins: [
    vue({ script: { propsDestructure: true } }),
    dts({
      entryRoot: 'src',
      outDir: 'dist',
      insertTypesEntry: true,
      tsconfigPath: './tsconfig.build.json',
      exclude: [
        '**/*.stories.*',
        '**/*.story.*',
        '**/*.spec.*',
        '**/*.test.*',
        'src/**/__tests__/**',
        'src/**/__mocks__/**',
        '.storybook/**',
        'storybook-static/**',
        'dist/**',
      ],
      beforeWriteFile(filePath: string, content: string) {
        if (!filePath.endsWith('.vue.d.ts')) return;
        const match = filePath.match(/(\w+)\.vue\.d\.ts$/);
        if (!match) return;
        const doc = COMPONENT_DOCS[match[1]];
        if (!doc) return;
        return {
          filePath,
          content: content.replace(
            'declare const _default:',
            `/** ${doc} */\ndeclare const _default:`,
          ),
        };
      },
    }),
  ],
  build: {
    outDir: 'dist',
    emptyOutDir: true, // ВАЖНО: чистим dist перед сборкой
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'DobruniaUI',
      formats: ['es', 'cjs'],
      fileName: (format) => (format === 'es' ? 'dobruniaui.mjs' : 'dobruniaui.cjs'),
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        exports: 'named',
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'style.css') return 'styles.css';
          return 'assets/[name]-[hash][extname]';
        },
      },
    },
  },
});
