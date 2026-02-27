import type { Meta, StoryObj } from "@storybook/vue3";
import DbrCard from "./DbrCard.vue";

const meta: Meta<typeof DbrCard> = {
  title: "Components/Card",
  component: DbrCard,
  tags: ["autodocs"],
  args: {
    as: "div",
    variant: "surface",
    disabled: false
  },
  argTypes: {
    as: {
      control: "select",
      options: ["div", "section", "article"]
    },
    variant: {
      control: "select",
      options: ["surface", "bordered"]
    },
    disabled: {
      control: "boolean"
    }
  }
};

export default meta;
type Story = StoryObj<typeof DbrCard>;

export const Playground: Story = {
  render: (args) => ({
    components: { DbrCard },
    setup: () => ({ args }),
    template: `
      <DbrCard v-bind="args">
        <div style="display:grid; gap:8px; padding:16px;">
          <strong style="font-size:16px;">Card title</strong>
          <span style="opacity:0.8;">Card has no native padding. Add your own spacing.</span>
        </div>
      </DbrCard>
    `
  })
};

export const Variants: Story = {
  render: () => ({
    components: { DbrCard },
    template: `
      <div style="display:grid; gap:12px; max-width: 420px;">
        <DbrCard variant="surface">
          <div style="padding:12px 14px;">
            <strong>Surface</strong>
            <div style="opacity:.75; margin-top: 6px;">Hover to see default card effect.</div>
          </div>
        </DbrCard>
        <DbrCard variant="bordered">
          <div style="padding:14px 16px;">
            <strong>Bordered</strong>
            <div style="opacity:.75; margin-top: 6px;">Dashed border.</div>
          </div>
        </DbrCard>
        <DbrCard variant="bordered" disabled>
          <div style="padding:10px 12px;">
            <strong>Disabled</strong>
            <div style="opacity:.75; margin-top: 6px;">No hover/interactions.</div>
          </div>
        </DbrCard>
      </div>
    `
  })
};
