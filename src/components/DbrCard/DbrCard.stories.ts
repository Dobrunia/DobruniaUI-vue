import type { Meta, StoryObj } from "@storybook/vue3";
import DbrCard from "./DbrCard.vue";
import DbrText from "../DbrText/DbrText.vue";

const meta: Meta<typeof DbrCard> = {
  title: "Components/Card",
  component: DbrCard,
  tags: ["autodocs"],
  args: {
    as: "div",
    variant: "surface",
    disabled: false,
    hoverable: false
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
    },
    hoverable: {
      control: "boolean"
    }
  }
};

export default meta;
type Story = StoryObj<typeof DbrCard>;

export const Playground: Story = {
  render: (args) => ({
    components: { DbrCard, DbrText },
    setup: () => ({ args }),
    template: `
      <DbrCard v-bind="args">
        <div style="display:grid; gap:8px; padding:16px;">
          <DbrText size="lg">Card title</DbrText>
          <DbrText color="muted">Card has no native padding. Add your own spacing.</DbrText>
        </div>
      </DbrCard>
    `
  })
};

export const Variants: Story = {
  render: () => ({
    components: { DbrCard, DbrText },
    template: `
      <div style="display:grid; gap:12px; max-width: 420px;">
        <DbrCard variant="surface">
          <div style="padding:12px 14px;">
            <DbrText>Surface</DbrText>
            <div style="margin-top: 6px;"><DbrText color="muted">No hover by default.</DbrText></div>
          </div>
        </DbrCard>
        <DbrCard variant="surface" hoverable>
          <div style="padding:12px 14px;">
            <DbrText>Surface + hoverable</DbrText>
            <div style="margin-top: 6px;"><DbrText color="muted">Hover highlight is enabled.</DbrText></div>
          </div>
        </DbrCard>
        <DbrCard variant="bordered">
          <div style="padding:14px 16px;">
            <DbrText>Bordered</DbrText>
            <div style="margin-top: 6px;"><DbrText color="muted">Dashed border, no hover.</DbrText></div>
          </div>
        </DbrCard>
        <DbrCard variant="bordered" hoverable disabled>
          <div style="padding:10px 12px;">
            <DbrText>Disabled</DbrText>
            <div style="margin-top: 6px;"><DbrText color="muted">No hover/interactions.</DbrText></div>
          </div>
        </DbrCard>
      </div>
    `
  })
};
