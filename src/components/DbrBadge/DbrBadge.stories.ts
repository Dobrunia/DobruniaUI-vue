import type { Meta, StoryObj } from "@storybook/vue3";
import DbrBadge from "./DbrBadge.vue";

const meta: Meta<typeof DbrBadge> = {
  title: "Components/Badge",
  component: DbrBadge,
  args: {
    text: "Badge",
    variant: "primary"
  },
  argTypes: {
    text: { control: "text" },
    variant: {
      control: "select",
      options: ["primary", "ghost", "danger"]
    }
  }
};

export default meta;
type Story = StoryObj<typeof DbrBadge>;

export const Playground: Story = {
  render: (args) => ({
    components: { DbrBadge },
    setup: () => ({ args }),
    template: `
      <DbrBadge v-bind="args" />
    `
  })
};

export const Variants: Story = {
  render: () => ({
    components: { DbrBadge },
    template: `
      <div style="display:flex; gap:12px; flex-wrap: wrap;">
        <DbrBadge text="Primary" variant="primary" />
        <DbrBadge text="Ghost" variant="ghost" />
        <DbrBadge text="Danger" variant="danger" />
      </div>
    `
  })
};
