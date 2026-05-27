import { promises as fs } from 'node:fs';
import path from 'node:path';

const rootDir = process.cwd();
const packageFile = path.join(rootDir, 'package.json');
const componentsDir = path.join(rootDir, 'src', 'components');
const baseCssFile = path.join(rootDir, 'src', 'styles', 'base.css');
const tokensCssFile = path.join(rootDir, 'src', 'styles', 'tokens.css');
const themesDir = path.join(rootDir, 'src', 'styles', 'themes');
const outFile = path.join(rootDir, 'LLM_INSTRUCTIONS.md');

const escapedPipe = String.raw`\|`;
const escapeCell = (text) =>
  String(text ?? '')
    .replaceAll('|', escapedPipe)
    .replaceAll('\n', '<br/>');

const SCALE_SUFFIX_ORDER = ['xs', 'sm', 'base', 'md', 'lg', 'xl'];
const COLOR_TOKEN_ORDER = [
  'bg',
  'surface',
  'text',
  'text-muted',
  'border',
  'primary',
  'on-primary',
  'danger',
  'on-danger',
  'focus',
  'error',
  'success',
];

const REUSABLE_CLASS_ORDER = [
  'dbru-root',
  'dbru-bg',
  'dbru-surface',
  ...SCALE_SUFFIX_ORDER.map((size) => `dbru-font-size-${size}`),
  'dbru-font-color-base',
  'dbru-font-color-muted',
  'dbru-font-color-on-primary',
  'dbru-font-color-on-danger',
  ...SCALE_SUFFIX_ORDER.filter((size) => size !== 'base' && size !== 'xl').map((size) => `dbru-size-${size}`),
  'dbru-btn',
  'dbru-btn--primary',
  'dbru-btn--ghost',
  'dbru-btn--danger',
  'dbru-focus-visible',
  'dbru-reduced-motion',
];

const THEME_FILE_ORDER = ['light.css', 'dark.css'];

const sortByExplicitOrder = (items, order) => {
  const rank = new Map(order.map((item, index) => [item, index]));
  return [...items].sort((a, b) => {
    const rankA = rank.get(a);
    const rankB = rank.get(b);
    const indexA = rankA ?? Number.MAX_SAFE_INTEGER;
    const indexB = rankB ?? Number.MAX_SAFE_INTEGER;
    if (indexA !== indexB) return indexA - indexB;
    return a.localeCompare(b);
  });
};

const suffixRank = (value, order = SCALE_SUFFIX_ORDER) => {
  const index = order.indexOf(value);
  return index === -1 ? Number.MAX_SAFE_INTEGER : index;
};

const getDesignTokenSortKey = (token) => {
  const name = token.replace(/^--dbru-/, '');

  if (name === 'font-family') return [0, 0, token];
  if (name.startsWith('font-size-')) return [1, suffixRank(name.replace('font-size-', '')), token];
  if (name.startsWith('font-weight-')) return [2, 0, token];
  if (name.startsWith('line-height-')) {
    return [3, name === 'line-height-tight' ? 0 : 1, token];
  }
  if (name.startsWith('space-')) {
    const spaceIndex = Number(name.replace('space-', ''));
    return [4, Number.isFinite(spaceIndex) ? spaceIndex : Number.MAX_SAFE_INTEGER, token];
  }
  if (name.startsWith('control-height-')) {
    return [5, suffixRank(name.replace('control-height-', ''), ['sm', 'md', 'lg']), token];
  }
  if (name.startsWith('radius-')) return [6, suffixRank(name.replace('radius-', ''), ['sm', 'md']), token];
  if (name.startsWith('border-size-')) {
    const borderIndex = Number(name.replace('border-size-', ''));
    return [7, Number.isFinite(borderIndex) ? borderIndex : Number.MAX_SAFE_INTEGER, token];
  }
  if (['ease-standard', 'duration-fast', 'duration-base'].includes(name)) {
    return [8, ['ease-standard', 'duration-fast', 'duration-base'].indexOf(name), token];
  }
  if (name.startsWith('shadow-')) return [9, suffixRank(name.replace('shadow-', ''), ['sm', 'md']), token];
  if (name.startsWith('color-')) {
    return [10, suffixRank(name.replace('color-', ''), COLOR_TOKEN_ORDER), token];
  }

  return [99, 0, token];
};

const sortDesignTokens = (tokens) =>
  [...tokens].sort((a, b) => {
    const keyA = getDesignTokenSortKey(a);
    const keyB = getDesignTokenSortKey(b);
    for (let i = 0; i < keyA.length; i += 1) {
      if (keyA[i] !== keyB[i]) return keyA[i] < keyB[i] ? -1 : 1;
    }
    return 0;
  });

const sortThemeFiles = (files) => sortByExplicitOrder(files.map((file) => path.basename(file)), THEME_FILE_ORDER).map((basename) => files.find((file) => path.basename(file) === basename)).filter(Boolean);

const cleanJsDoc = (raw) => {
  if (!raw) return { description: '', defaultValue: '—' };
  const lines = raw
    .replace(/^\/\*\*/, '')
    .replace(/\*\/$/, '')
    .split('\n')
    .map((line) => line.replace(/^\s*\*\s?/, '').trim());

  let defaultValue = '—';
  const descriptionParts = [];

  for (const line of lines) {
    if (!line) continue;
    if (line.startsWith('@default')) {
      defaultValue = line.replace('@default', '').trim() || '—';
      continue;
    }
    if (!line.startsWith('@')) descriptionParts.push(line);
  }

  return {
    description: descriptionParts.join(' '),
    defaultValue,
  };
};

const parsePropsInterface = (content) => {
  const interfaces = [...content.matchAll(/export interface\s+(\w+)\s*\{([\s\S]*?)\n\}/g)];
  if (!interfaces.length) return null;

  const preferred = interfaces.find((match) => match[1].endsWith('Props')) ?? interfaces[0];
  const interfaceName = preferred[1];
  const body = preferred[2];
  const props = [];
  const propRegex = /((?:\s*\/\*\*[\s\S]*?\*\/\s*)?)\s*([A-Za-z_]\w*)\??:\s*([^;]+);/g;

  for (const match of body.matchAll(propRegex)) {
    const jsdoc = cleanJsDoc(match[1] ?? '');
    const propName = match[2];
    const propType = match[3].replaceAll(/\s+/g, ' ').trim();

    props.push({
      name: propName,
      type: propType,
      defaultValue: jsdoc.defaultValue,
      description: jsdoc.description || '—',
    });
  }

  return { interfaceName, props };
};

const parseNamedTypeAliases = (content) => {
  const aliases = [];
  const aliasRegex = /export type\s+([A-Za-z_]\w*)\s*=\s*([^;]+);/g;
  for (const match of content.matchAll(aliasRegex)) {
    aliases.push({
      name: match[1],
      definition: match[2].replaceAll(/\s+/g, ' ').trim(),
    });
  }
  return aliases;
};

const collectTypesFiles = async (dir) => {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await collectTypesFiles(fullPath)));
      continue;
    }
    if (entry.isFile() && entry.name.endsWith('.types.ts')) files.push(fullPath);
  }

  return files.sort((a, b) => a.localeCompare(b));
};

const collectThemeCssFiles = async (dir) => {
  let entries = [];
  try {
    entries = await fs.readdir(dir, { withFileTypes: true });
  } catch {
    return [];
  }

  return entries
    .filter((entry) => entry.isFile() && entry.name.endsWith('.css'))
    .map((entry) => path.join(dir, entry.name))
    .sort((a, b) => a.localeCompare(b));
};

const REUSABLE_CLASS_EXCLUDE = new Set(['dbru-btn--press-effect']);

const parseReusableClasses = (cssText) => {
  const classes = new Set();
  const classRegex = /\.([a-z0-9-]+)(?=[\s.:,{])/gi;
  for (const match of cssText.matchAll(classRegex)) {
    const className = match[1];
    if (!className.startsWith('dbru-') || REUSABLE_CLASS_EXCLUDE.has(className)) continue;
    classes.add(className);
  }
  return sortByExplicitOrder([...classes], REUSABLE_CLASS_ORDER);
};

const parseTokens = (cssText) => {
  const tokens = new Set();
  const tokenRegex = /(--dbru-[a-z0-9-]+)\s*:/gi;
  for (const match of cssText.matchAll(tokenRegex)) {
    tokens.add(match[1]);
  }
  return [...tokens];
};

const parseThemeClasses = (cssText) => {
  const classes = new Set();
  const classRegex = /\.((?:dbru-theme-)[a-z0-9-]+)(?=[\s.:,{])/gi;
  for (const match of cssText.matchAll(classRegex)) {
    classes.add(match[1]);
  }
  return sortByExplicitOrder([...classes], ['dbru-theme-light', 'dbru-theme-dark']);
};

const formatThemeClasses = (classes) => {
  if (!classes.length) return 'no theme class found';
  return classes.map((className) => '`' + className + '`').join(', ');
};

const COMPONENT_USAGE_NOTES = {
  DbrBadge: [
    'Use as overlay notification: wrap target content inside default slot.',
    'Pass badge marker via `badge` slot or use `dot` for dot-only mode. Default position is top-right.',
  ],
  DbrChip: [
    'Pass chip content via default slot (text, icon, or mixed content).',
    'Use `variant` for visual style only (`primary|ghost|danger`).',
  ],
  DbrButton: [
    'Optional `pressEffect` enables slight downward shift on click; default is no shift.',
  ],
  DbrIconButton: [
    'Icon-only square button. `ariaLabel` is required. Sizes `sm|md|lg` → **32 / 40 / 48 px** square (`dbru-size-*`, same as `DbrButton` / `DbrAvatar`).',
    'Variants: **`ghost`** (default) — no border; library stretches the slot `<svg>` to the full square; hover = icon color only. **`border`** — fixed border; smaller centered icon (`--_icon-scale`); hover = icon color only.',
    '`iconColor`: `base|muted|primary`; use `stroke="currentColor"` / `fill="currentColor"` on paths.',
    '',
    '**What the library does (do not reimplement in the app):**',
    '- Ghost: `.dbru-icon-btn__icon :deep(svg) { width: 100%; height: 100%; }` — the **SVG element** always matches the button (32/40/48).',
    '- Border: SVG size = control height × scale factor per `size`.',
    '- The library does **not** crop `viewBox`, move paths, or auto-detect icon shape. **Visible glyph size = your SVG source `viewBox` + path bounds.**',
    '',
    '**What the app / icon author must do (consumer responsibility):**',
    'Prepare each icon file (`assets/icons/*.vue` or inline `<svg>`) so the **drawn artwork**, not just the `<svg>` tag, matches the intent below. Change **`viewBox`** (and remove export `width`/`height`) — **no changes to `DbrIconButton` props** for this.',
    '',
    '**Ghost sizing goals (LLM checklist):**',
    '| Icon shape | Goal in ghost button | How to achieve in the SVG file |',
    '| --- | --- | --- |',
    '| **Square glyph** (panel, plus, settings) | Visible art fills the square control edge-to-edge (≈32/40/48 px glyph) | **Tight `viewBox`** around paths (crop empty margin). Prefer `viewBox="0 0 24 24"` with art inset ~1–2px for stroke. Do **not** leave a large canvas (e.g. 21×21 art inside `0 0 38 38`) — the `<svg>` will be full size but the **rect/paths look ~55%**. |',
    '| **Wide / horizontal** (chevron bar, menu dots, search) | **Full width** of the button; height scales proportionally, centered vertically | Use a **wide `viewBox`** (e.g. `0 0 36 16`) with art spanning most of the width. Ghost `width/height: 100%` + default `preserveAspectRatio` (`meet`) letterboxes height — that is correct. Align horizontal strokes in design. |',
    '| **Tall / narrow** | Fits inside square; height limited, centered | Tall `viewBox` (e.g. `0 0 10 28`); do not expect width fill. |',
    '',
    '**Square icon — cropped `viewBox` (recommended):** keep path coordinates; only change `viewBox` + drop `width`/`height`:',
    `\`\`\`xml
<!-- BAD: square <svg>, small visible rect (~21×21 in 38×38) -->
<svg viewBox="0 0 38 38" width="38" height="38">
  <rect x="8.5" y="8.5" width="21" height="21" ... />
</svg>

<!-- GOOD: same rect/path coords, cropped viewBox -->
<svg viewBox="7 7 24 24" fill="none" aria-hidden="true">
  <rect x="8.5" y="8.5" width="21" height="21" ... />
</svg>
\`\`\``,
    '',
    '**Square icon — alternative:** loose viewBox + `preserveAspectRatio="xMidYMid slice"` on root `<svg>` (zoom-to-fill; **only for square icons**, never on wide icons).',
    '',
    '**Slot wiring (critical):**',
    '- **DO:** default slot = root `<svg>` or icon SFC with `<svg>` as template root.',
    '- **DO NOT:** `<span v-html>`, wrappers, `<img src="*.svg">` — breaks `:deep(svg)` sizing.',
    '- **DO NOT:** `width`/`height` on `<svg>` in ghost (library sets 100%).',
    '',
    '**Usage pattern:**',
    `\`\`\`vue
<DbrIconButton aria-label="Collapse panel" size="md" variant="ghost">
  <PanelCollapseIcon />
</DbrIconButton>
\`\`\``,
    'Icon SFC: `<template><svg viewBox="7 7 24 24" aria-hidden="true">…</svg></template>` — paths unchanged, viewBox cropped in the **app icon file**, not in the library.',
    '',
    '**Wrong:**',
    `\`\`\`vue
<DbrIconButton aria-label="Settings"><span v-html="svgString" /></DbrIconButton>
\`\`\``,
  ],
  DbrCheckbox: [
    'Use `v-model` (boolean) for checked state.',
    'Label can be passed either via `label` prop or default slot; both are supported.',
  ],
  DbrToggle: [
    'Use `v-model` (boolean) for on/off state.',
    'Use `size` (`sm|md|lg`) for control scale, with optional label prop or default slot.',
  ],
  DbrMenuToggle: [
    'Use `v-model` (boolean) as menu/sidebar open state.',
    'Primary use case: mobile navigation menu and collapsible side panel toggle.',
  ],
  DbrThemeToggle: [
    'This component toggles only between light and dark themes via boolean `v-model`.',
    'For custom themes (`gothic`, `sketch`, `fullmoon`, `oldmoney`) set theme class on root/html manually.',
  ],
  DbrInput: [
    'Use `v-model` (string) as the single source of input value.',
    'For leading/trailing icon use the `icon` slot + `iconPosition` prop.',
  ],
  DbrChatComposer: [
    'Use `v-model` (string) for draft text.',
    'Listen to `send`, `typing`, and `attachmentsChange` events for behavior integration.',
  ],
};

const pkgRaw = await fs.readFile(packageFile, 'utf8');
const pkg = JSON.parse(pkgRaw);
const baseCss = await fs.readFile(baseCssFile, 'utf8');
const tokensCss = await fs.readFile(tokensCssFile, 'utf8');
const themeCssFilesRaw = await collectThemeCssFiles(themesDir);
const themeCssFiles = sortThemeFiles(themeCssFilesRaw);
const themeCssContents = await Promise.all(themeCssFiles.map((file) => fs.readFile(file, 'utf8')));
const typesFiles = await collectTypesFiles(componentsDir);
const reusableClasses = parseReusableClasses(baseCss);
const themes = themeCssFiles.map((file, idx) => ({
  file: path.basename(file),
  classes: parseThemeClasses(themeCssContents[idx]),
}));
const designTokens = sortDesignTokens([
  ...new Set([
    ...parseTokens(tokensCss),
    ...themeCssContents.flatMap((cssText) => parseTokens(cssText)),
  ]),
]);

const components = [];
const namedTypeAliases = [];
for (const file of typesFiles) {
  const content = await fs.readFile(file, 'utf8');
  const parsed = parsePropsInterface(content);
  const aliases = parseNamedTypeAliases(content);
  for (const alias of aliases) {
    namedTypeAliases.push({
      component: path.basename(file, '.types.ts'),
      ...alias,
    });
  }
  if (!parsed?.props.length) continue;
  components.push({
    name: path.basename(file, '.types.ts'),
    interfaceName: parsed.interfaceName,
    props: parsed.props,
  });
}

components.sort((a, b) => a.name.localeCompare(b.name));

const vModelContracts = components
  .map((component) => {
    const modelProp = component.props.find((prop) => prop.name === 'modelValue');
    if (!modelProp) return null;
    return {
      component: component.name,
      type: modelProp.type,
      defaultValue: modelProp.defaultValue,
    };
  })
  .filter(Boolean)
  .sort((a, b) => a.component.localeCompare(b.component));

const intro = [
  '# LLM Instructions',
  '',
  'This file is generated and intended for AI assistants and automation tools.',
  '',
  `Generated on: ${new Date().toISOString()}`,
  '',
  '## Package Facts',
  '',
  `- Package: \`${pkg.name}\``,
  `- Version: \`${pkg.version}\``,
  `- ESM import entry: \`${pkg.exports?.['.']?.import ?? 'n/a'}\``,
  `- CJS require entry: \`${pkg.exports?.['.']?.require ?? 'n/a'}\``,
  `- Types entry: \`${pkg.types ?? 'n/a'}\``,
  '',
  '## Recommended Usage For Consumers',
  '',
  '- Strong recommendation: use named imports for tree-shaking by default.',
  '- Preferred import pattern: `import { DbrButton, DbrInput } from "dobruniaui-vue"`.',
  '- Import styles once: `import "dobruniaui-vue/styles.css"`.',
  '- Avoid `app.use(DobruniaUI)` unless you explicitly want global registration of all components.',
  '',
  '```ts',
  'import { DbrButton, DbrInput } from "dobruniaui-vue";',
  'import "dobruniaui-vue/styles.css";',
  '```',
  '',
  '## Design System Rules (Short)',
  '',
  '- Reuse primitives and variants; avoid page-specific shortcuts.',
  '- Colors/radii/spacing should come from CSS variables and tokens.',
  '- Prefer existing utility classes (`dbru-font-size-*`, `dbru-font-color-*`, `dbru-btn*`, `dbru-size-*`).',
  '- Keep semantic shortcuts alias-only (no unique visual styles).',
  '',
  '## Focus Utilities',
  '',
  '- Wrap app UI in `dbru-root` (required). Root sets default typography (`font-family`, `font-size-base`, `line-height-base`, `color-text`) for the subtree.',
  '- Inside root, `:focus:not(:focus-visible)` clears outline on mouse click; `.dbru-focus-visible:focus-visible` shows the ring on Tab.',
  '- Add `dbru-focus-visible` on each focusable control that should show the ring (buttons, inputs, textareas).',
  '- Do not use `dbru-focus-visible` on `DbrButtonGroup` items — group uses its own `:focus-visible` background (same as active).',
  '- Hidden input + visible control (`DbrRadio`, `DbrToggle`, `DbrThemeToggle`): scoped `:has(input:focus-visible)` draws the ring on the visible track/control/label (input keeps `outline: none`).',
  '- `--dbru-color-focus` is separate from `--dbru-color-primary` in every theme so the Tab ring stays visible.',
  '- `DbrRadio` group: one Tab stop per `name`; arrow keys move selection; Enter selects focused option.',
  '',
  '## Reusable Classes From base.css',
  '',
  ...reusableClasses.map((className) => `- \`${className}\``),
  '',
  '## Themes',
  '',
  ...themes.flatMap((theme) => [`- \`${theme.file}\`: ${formatThemeClasses(theme.classes)}`]),
  '',
  '## Design Tokens',
  '',
  ...designTokens.map((tokenName) => `- \`${tokenName}\``),
  '',
];

const namedTypesSection = [];
if (namedTypeAliases.length) {
  namedTypesSection.push(
    '## Named Type Aliases',
    '',
    'This section lists exported reusable type aliases (enums/unions) used by component props.',
    '',
    '| Type | Definition | Source |',
    '| --- | --- | --- |'
  );

  for (const alias of namedTypeAliases.toSorted((a, b) => a.name.localeCompare(b.name))) {
    namedTypesSection.push(
      `| \`${escapeCell(alias.name)}\` | \`${escapeCell(alias.definition)}\` | \`${escapeCell(alias.component)}\` |`
    );
  }

  namedTypesSection.push('');
}

/** @param {string} note */
function pushUsageNote(section, note) {
  if (note === '') {
    section.push('');
    return;
  }
  if (
    note.startsWith('```') ||
    note.startsWith('**') ||
    note.startsWith('- ') ||
    note.startsWith('|')
  ) {
    section.push(note);
    return;
  }
  section.push(`- ${note}`);
}

const usageNotesSection = [];
if (Object.keys(COMPONENT_USAGE_NOTES).length) {
  usageNotesSection.push('## Component Usage Notes', '');
  for (const componentName of Object.keys(COMPONENT_USAGE_NOTES).sort((a, b) => a.localeCompare(b))) {
    const notes = COMPONENT_USAGE_NOTES[componentName];
    usageNotesSection.push(`### ${componentName}`, '');
    for (const note of notes) {
      pushUsageNote(usageNotesSection, note);
    }
    usageNotesSection.push('');
  }
}

const vModelSection = [];
if (vModelContracts.length) {
  vModelSection.push(
    '## v-model Contracts',
    '',
    '| Component | modelValue Type | Default | Update Event |',
    '| --- | --- | --- | --- |'
  );
  for (const contract of vModelContracts) {
    vModelSection.push(
      `| \`${escapeCell(contract.component)}\` | \`${escapeCell(contract.type)}\` | \`${escapeCell(contract.defaultValue)}\` | \`update:modelValue\` |`
    );
  }
  vModelSection.push('');
}

const componentSections = [];
for (const component of components) {
  componentSections.push(
    `### ${component.name}`,
    '',
    `Source interface: \`${component.interfaceName}\``,
    '',
    '| Prop | Type | Default | Description |',
    '| --- | --- | --- | --- |'
  );

  for (const prop of component.props) {
    componentSections.push(
      `| \`${escapeCell(prop.name)}\` | \`${escapeCell(prop.type)}\` | \`${escapeCell(prop.defaultValue)}\` | ${escapeCell(prop.description)} |`
    );
  }

  componentSections.push('');
}

const markdown = [
  ...intro,
  ...usageNotesSection,
  ...vModelSection,
  ...namedTypesSection,
  '## Components And Props',
  '',
  ...componentSections,
].join('\n');

await fs.writeFile(outFile, markdown, 'utf8');

console.log(`Generated: ${path.relative(rootDir, outFile)}`);
