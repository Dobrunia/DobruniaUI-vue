import { promises as fs } from "node:fs";
import path from "node:path";

const rootDir = process.cwd();
const packageFile = path.join(rootDir, "package.json");
const componentsDir = path.join(rootDir, "src", "components");
const baseCssFile = path.join(rootDir, "src", "styles", "base.css");
const tokensCssFile = path.join(rootDir, "src", "styles", "tokens.css");
const outFile = path.join(rootDir, "LLM_INSTRUCTIONS.md");

const escapedPipe = String.raw`\|`;
const escapeCell = (text) =>
  String(text ?? "").replaceAll("|", escapedPipe).replaceAll("\n", "<br/>");

const cleanJsDoc = (raw) => {
  if (!raw) return { description: "", defaultValue: "—" };
  const lines = raw
    .replace(/^\/\*\*/, "")
    .replace(/\*\/$/, "")
    .split("\n")
    .map((line) => line.replace(/^\s*\*\s?/, "").trim());

  let defaultValue = "—";
  const descriptionParts = [];

  for (const line of lines) {
    if (!line) continue;
    if (line.startsWith("@default")) {
      defaultValue = line.replace("@default", "").trim() || "—";
      continue;
    }
    if (!line.startsWith("@")) descriptionParts.push(line);
  }

  return {
    description: descriptionParts.join(" "),
    defaultValue,
  };
};

const parsePropsInterface = (content) => {
  const interfaces = [...content.matchAll(/export interface\s+(\w+)\s*\{([\s\S]*?)\n\}/g)];
  if (!interfaces.length) return null;

  const preferred = interfaces.find((match) => match[1].endsWith("Props")) ?? interfaces[0];
  const interfaceName = preferred[1];
  const body = preferred[2];
  const props = [];
  const propRegex =
    /((?:\s*\/\*\*[\s\S]*?\*\/\s*)?)\s*([A-Za-z_]\w*)\??:\s*([^;]+);/g;

  for (const match of body.matchAll(propRegex)) {
    const jsdoc = cleanJsDoc(match[1] ?? "");
    const propName = match[2];
    const propType = match[3].replaceAll(/\s+/g, " ").trim();

    props.push({
      name: propName,
      type: propType,
      defaultValue: jsdoc.defaultValue,
      description: jsdoc.description || "—",
    });
  }

  return { interfaceName, props };
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
    if (entry.isFile() && entry.name.endsWith(".types.ts")) files.push(fullPath);
  }

  return files.sort((a, b) => a.localeCompare(b));
};

const parseReusableClasses = (cssText) => {
  const classes = new Set();
  const classRegex = /\.([a-z0-9-]+)(?=[\s.:,{])/gi;
  for (const match of cssText.matchAll(classRegex)) {
    const className = match[1];
    if (className.startsWith("dbru-")) classes.add(className);
  }
  return [...classes].sort((a, b) => a.localeCompare(b));
};

const parseTokens = (cssText) => {
  const tokens = new Set();
  const tokenRegex = /(--dbru-[a-z0-9-]+)\s*:/gi;
  for (const match of cssText.matchAll(tokenRegex)) {
    tokens.add(match[1]);
  }
  return [...tokens].sort((a, b) => a.localeCompare(b));
};

const pkgRaw = await fs.readFile(packageFile, "utf8");
const pkg = JSON.parse(pkgRaw);
const baseCss = await fs.readFile(baseCssFile, "utf8");
const tokensCss = await fs.readFile(tokensCssFile, "utf8");
const typesFiles = await collectTypesFiles(componentsDir);
const reusableClasses = parseReusableClasses(baseCss);
const designTokens = parseTokens(tokensCss);

const components = [];
for (const file of typesFiles) {
  const content = await fs.readFile(file, "utf8");
  const parsed = parsePropsInterface(content);
  if (!parsed?.props.length) continue;
  components.push({
    name: path.basename(file, ".types.ts"),
    interfaceName: parsed.interfaceName,
    props: parsed.props,
  });
}

const intro = [
  "# LLM Instructions",
  "",
  "This file is generated and intended for AI assistants and automation tools.",
  "",
  `Generated on: ${new Date().toISOString()}`,
  "",
  "## Package Facts",
  "",
  `- Package: \`${pkg.name}\``,
  `- Version: \`${pkg.version}\``,
  `- ESM import entry: \`${pkg.exports?.["."]?.import ?? "n/a"}\``,
  `- CJS require entry: \`${pkg.exports?.["."]?.require ?? "n/a"}\``,
  `- Types entry: \`${pkg.types ?? "n/a"}\``,
  "",
  "## Recommended Usage For Consumers",
  "",
  "- Strong recommendation: use named imports for tree-shaking by default.",
  "- Preferred import pattern: `import { DbrButton, DbrInput } from \"dobruniaui-vue\"`.",
  "- Import styles once: `import \"dobruniaui-vue/styles.css\"`.",
  "- Avoid `app.use(DobruniaUI)` unless you explicitly want global registration of all components.",
  "",
  "```ts",
  "import { DbrButton, DbrInput } from \"dobruniaui-vue\";",
  "import \"dobruniaui-vue/styles.css\";",
  "```",
  "",
  "## Design System Rules (Short)",
  "",
  "- Reuse primitives and variants; avoid page-specific shortcuts.",
  "- Colors/radii/spacing should come from CSS variables and tokens.",
  "- Prefer existing utility classes (`dbru-text-*`, `dbru-btn*`, `dbru-size-*`).",
  "- Keep semantic shortcuts alias-only (no unique visual styles).",
  "",
  "## Reusable Classes From base.css",
  "",
  ...reusableClasses.map((className) => `- \`${className}\``),
  "",
  "## Design Tokens From tokens.css",
  "",
  ...designTokens.map((tokenName) => `- \`${tokenName}\``),
  "",
  "## Components And Props",
  "",
];

const componentSections = [];
for (const component of components) {
  componentSections.push(
    `### ${component.name}`,
    "",
    `Source interface: \`${component.interfaceName}\``,
    "",
    "| Prop | Type | Default | Description |",
    "| --- | --- | --- | --- |"
  );

  for (const prop of component.props) {
    componentSections.push(
      `| \`${escapeCell(prop.name)}\` | \`${escapeCell(prop.type)}\` | \`${escapeCell(prop.defaultValue)}\` | ${escapeCell(prop.description)} |`
    );
  }

  componentSections.push("");
}

const markdown = [...intro, ...componentSections].join("\n");

await fs.writeFile(outFile, markdown, "utf8");

console.log(`Generated: ${path.relative(rootDir, outFile)}`);
