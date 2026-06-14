import type { Meta, StoryObj } from "@storybook/vue3";
import DbrText from "../components/DbrText/DbrText.vue";
import type { DbrTextColor, DbrTextSize } from "../components/DbrText/DbrText.types";

const meta: Meta = {
  title: "Foundations/Typography",
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj;

const scaleRows: { size: DbrTextSize; sample: string }[] = [
  { size: "xs", sample: "Extra small · 11px" },
  { size: "sm", sample: "Small · 12px" },
  { size: "md", sample: "Medium (default body) · 14px" },
  { size: "lg", sample: "Large · 16px" },
  { size: "xl", sample: "Extra large · 20px" },
  { size: "2xl", sample: "2XL display · 28px" },
] as const;

const colorRows: { color: DbrTextColor; sample: string; swatch?: "primary" | "danger" }[] = [
  { color: "base", sample: "Base text color" },
  { color: "muted", sample: "Muted secondary text" },
  { color: "primary", sample: "Primary text color" },
  { color: "danger", sample: "Danger text color" },
  { color: "success", sample: "Success text color" },
  { color: "on-primary", sample: "On primary background", swatch: "primary" },
  { color: "on-danger", sample: "On danger background", swatch: "danger" },
] as const;

export const Scale: Story = {
  render: () => ({
    components: { DbrText },
    setup: () => ({ scaleRows }),
    template: `
      <div style="display:grid; gap:20px; max-width:720px;">
        <DbrText color="muted" size="sm">
          Typography is rendered via <code>DbrText</code>. Default body is <code>md</code> (14px).
        </DbrText>
        <div
          v-for="row in scaleRows"
          :key="row.size"
          style="display:grid; grid-template-columns: 140px 1fr; gap:12px; align-items:baseline; padding-bottom:12px; border-bottom:1px solid var(--dbru-color-border);"
        >
          <DbrText color="muted" size="xs"><code>size="{{ row.size }}"</code></DbrText>
          <div>
            <DbrText :size="row.size">{{ row.sample }}</DbrText>
          </div>
        </div>
      </div>
    `,
  }),
};

export const Colors: Story = {
  render: () => ({
    components: { DbrText },
    setup: () => ({ colorRows }),
    template: `
      <div style="display:grid; gap:16px; max-width:720px;">
        <DbrText color="muted" size="sm">
          Text color is controlled by the <code>DbrText</code> <code>color</code> prop.
        </DbrText>
        <div
          v-for="row in colorRows"
          :key="row.color"
          style="display:grid; grid-template-columns: 180px 1fr; gap:12px; align-items:center;"
        >
          <DbrText color="muted" size="xs"><code>color="{{ row.color }}"</code></DbrText>
          <div
            v-if="row.swatch"
            style="padding:12px 16px; border-radius: var(--dbru-radius-md);"
            :style="{
              background: row.swatch === 'primary' ? 'var(--dbru-color-primary)' : 'var(--dbru-color-danger)',
            }"
          >
            <DbrText :color="row.color">{{ row.sample }}</DbrText>
          </div>
          <div v-else>
            <DbrText :color="row.color">{{ row.sample }}</DbrText>
          </div>
        </div>
      </div>
    `,
  }),
};

export const Composed: Story = {
  render: () => ({
    components: { DbrText },
    template: `
      <div style="display:grid; gap:24px; max-width:640px;">
        <div>
          <DbrText size="2xl">Page title</DbrText>
          <div style="margin-top:8px;"><DbrText color="muted">Subtitle with md + muted</DbrText></div>
        </div>
        <div>
          <DbrText size="xl">Section heading</DbrText>
          <div style="margin-top:8px;">
            <DbrText>Body copy uses <code>DbrText</code> defaults.</DbrText>
          </div>
          <div style="margin-top:4px;"><DbrText color="muted" size="sm">Meta line · size sm + muted</DbrText></div>
        </div>
      </div>
    `,
  }),
};
