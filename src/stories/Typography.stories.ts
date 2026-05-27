import type { Meta, StoryObj } from "@storybook/vue3";

const meta: Meta = {
  title: "Foundations/Typography",
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj;

const scaleRows = [
  { className: "dbru-font-size-xs", token: "--dbru-font-size-xs", sample: "Extra small · 11px" },
  { className: "dbru-font-size-sm", token: "--dbru-font-size-sm", sample: "Small · 12px" },
  { className: "dbru-font-size-base", token: "--dbru-font-size-base", sample: "Base body · 14px" },
  { className: "dbru-font-size-lg", token: "--dbru-font-size-lg", sample: "Large · 16px" },
  { className: "dbru-font-size-xl", token: "--dbru-font-size-xl", sample: "Extra large heading · 28px" },
] as const;

const colorRows = [
  { className: "dbru-font-color-base", token: "--dbru-color-text", sample: "Base text color" },
  { className: "dbru-font-color-muted", token: "--dbru-color-text-muted", sample: "Muted secondary text" },
  { className: "dbru-font-color-on-primary", sample: "On primary background", swatch: "primary" },
  { className: "dbru-font-color-on-danger", sample: "On danger background", swatch: "danger" },
] as const;

export const Scale: Story = {
  render: () => ({
    setup: () => ({ scaleRows }),
    template: `
      <div style="display:grid; gap:20px; max-width:720px;">
        <p class="dbru-font-size-sm dbru-font-color-muted">
          Size utilities set <code>font-size</code> only. Base typography comes from <code>dbru-root</code>.
        </p>
        <div
          v-for="row in scaleRows"
          :key="row.className"
          style="display:grid; grid-template-columns: 140px 1fr; gap:12px; align-items:baseline; padding-bottom:12px; border-bottom:1px solid var(--dbru-color-border);"
        >
          <code class="dbru-font-size-xs dbru-font-color-muted">{{ row.className }}</code>
          <div>
            <div :class="[row.className, 'dbru-font-color-base']">{{ row.sample }}</div>
            <div class="dbru-font-size-xs dbru-font-color-muted" style="margin-top:4px;">{{ row.token }}</div>
          </div>
        </div>
      </div>
    `,
  }),
};

export const Colors: Story = {
  render: () => ({
    setup: () => ({ colorRows }),
    template: `
      <div style="display:grid; gap:16px; max-width:720px;">
        <p class="dbru-font-size-sm dbru-font-color-muted">
          Color utilities pair with any size class, e.g. <code>dbru-font-size-xl dbru-font-color-base</code>.
        </p>
        <div
          v-for="row in colorRows"
          :key="row.className"
          style="display:grid; grid-template-columns: 180px 1fr; gap:12px; align-items:center;"
        >
          <code class="dbru-font-size-xs dbru-font-color-muted">{{ row.className }}</code>
          <div
            v-if="row.swatch"
            style="padding:12px 16px; border-radius: var(--dbru-radius-md);"
            :style="{
              background: row.swatch === 'primary' ? 'var(--dbru-color-primary)' : 'var(--dbru-color-danger)',
            }"
          >
            <span :class="['dbru-font-size-base', row.className]">{{ row.sample }}</span>
          </div>
          <div v-else>
            <div :class="['dbru-font-size-base', row.className]">{{ row.sample }}</div>
            <div v-if="row.token" class="dbru-font-size-xs dbru-font-color-muted" style="margin-top:4px;">{{ row.token }}</div>
          </div>
        </div>
      </div>
    `,
  }),
};

export const Composed: Story = {
  render: () => ({
    template: `
      <div style="display:grid; gap:24px; max-width:640px;">
        <div>
          <h1 class="dbru-font-size-xl dbru-font-color-base" style="margin:0;">Page title</h1>
          <p class="dbru-font-size-base dbru-font-color-muted" style="margin:8px 0 0;">Subtitle with base + muted</p>
        </div>
        <div>
          <h2 class="dbru-font-size-lg dbru-font-color-base" style="margin:0;">Section heading</h2>
          <p class="dbru-font-size-base dbru-font-color-base" style="margin:8px 0 0;">
            Body copy uses <code>dbru-font-size-base dbru-font-color-base</code>.
          </p>
          <p class="dbru-font-size-sm dbru-font-color-muted" style="margin:4px 0 0;">Meta line · dbru-font-size-sm dbru-font-color-muted</p>
        </div>
      </div>
    `,
  }),
};
