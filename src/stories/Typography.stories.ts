import type { Meta, StoryObj } from "@storybook/vue3";

const meta: Meta = {
  title: "Foundations/Typography",
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj;

const scaleRows = [
  { className: "dbru-text-xs", token: "--dbru-font-size-xs", sample: "Extra small · 11px" },
  { className: "dbru-text-sm", token: "--dbru-font-size-sm", sample: "Small · 12px" },
  { className: "dbru-text-base", token: "--dbru-font-size-base", sample: "Base body · 14px" },
  { className: "dbru-text-lg", token: "--dbru-font-size-lg", sample: "Large · 16px" },
  { className: "dbru-text-xl", token: "--dbru-font-size-xl", sample: "Extra large heading · 28px" },
] as const;

const colorRows = [
  { className: "dbru-text-main", sample: "Main text color" },
  { className: "dbru-text-muted", sample: "Muted secondary text" },
  { className: "dbru-text-on-primary", sample: "On primary background", swatch: "primary" },
  { className: "dbru-text-on-danger", sample: "On danger background", swatch: "danger" },
] as const;

export const Scale: Story = {
  render: () => ({
    setup: () => ({ scaleRows }),
    template: `
      <div style="display:grid; gap:20px; max-width:720px;">
        <p class="dbru-text-sm dbru-text-muted">
          Size utilities from <code>base.css</code>. Combine with color classes (see Colors story).
        </p>
        <div
          v-for="row in scaleRows"
          :key="row.className"
          style="display:grid; grid-template-columns: 140px 1fr; gap:12px; align-items:baseline; padding-bottom:12px; border-bottom:1px solid var(--dbru-color-border);"
        >
          <code class="dbru-text-xs dbru-text-muted">{{ row.className }}</code>
          <div>
            <div :class="[row.className, 'dbru-text-main']">{{ row.sample }}</div>
            <div class="dbru-text-xs dbru-text-muted" style="margin-top:4px;">{{ row.token }}</div>
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
        <p class="dbru-text-sm dbru-text-muted">
          Color utilities pair with any size class, e.g. <code>dbru-text-xl dbru-text-main</code>.
        </p>
        <div
          v-for="row in colorRows"
          :key="row.className"
          style="display:grid; grid-template-columns: 180px 1fr; gap:12px; align-items:center;"
        >
          <code class="dbru-text-xs dbru-text-muted">{{ row.className }}</code>
          <div
            v-if="row.swatch"
            style="padding:12px 16px; border-radius: var(--dbru-radius-md);"
            :style="{
              background: row.swatch === 'primary' ? 'var(--dbru-color-primary)' : 'var(--dbru-color-danger)',
            }"
          >
            <span :class="['dbru-text-base', row.className]">{{ row.sample }}</span>
          </div>
          <span v-else :class="['dbru-text-base', row.className]">{{ row.sample }}</span>
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
          <h1 class="dbru-text-xl dbru-text-main" style="margin:0;">Page title</h1>
          <p class="dbru-text-base dbru-text-muted" style="margin:8px 0 0;">Subtitle with base + muted</p>
        </div>
        <div>
          <h2 class="dbru-text-lg dbru-text-main" style="margin:0;">Section heading</h2>
          <p class="dbru-text-base dbru-text-main" style="margin:8px 0 0;">
            Body copy uses <code>dbru-text-base dbru-text-main</code>.
          </p>
          <p class="dbru-text-sm dbru-text-muted" style="margin:4px 0 0;">Meta line · dbru-text-sm dbru-text-muted</p>
        </div>
      </div>
    `,
  }),
};
