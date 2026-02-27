import type { Meta, StoryObj } from "@storybook/vue3";
import DbrTooltip from "./DbrTooltip.vue";

const meta: Meta<typeof DbrTooltip> = {
  title: "Components/Tooltip",
  component: DbrTooltip,
  args: {
    text: "This is a cool tooltip!",
    variant: undefined
  },
  argTypes: {
    text: { control: "text" },
    variant: {
      control: "select",
      options: [undefined, "info", "warning", "error", "success"]
    }
  }
};

export default meta;
type Story = StoryObj<typeof DbrTooltip>;

export const Playground: Story = {
  args: {
    maxWidth: 500
  },

  render: (args) => ({
    components: { DbrTooltip },
    setup: () => ({ args }),
    template: `
      <DbrTooltip v-bind="args" />
    `
  })
};

export const Variants: Story = {
  render: () => ({
    components: { DbrTooltip },
    template: `
      <div style="display:flex; gap:16px; flex-wrap: wrap;">
        <DbrTooltip text="Default (primary text)" />
        <DbrTooltip text="Info" variant="info" />
        <DbrTooltip text="Warning" variant="warning" />
        <DbrTooltip text="Error" variant="error" />
        <DbrTooltip text="Success" variant="success" />
        <DbrTooltip text="Longer tooltip text is fine here" variant="info" />
      </div>
    `
  })
};
