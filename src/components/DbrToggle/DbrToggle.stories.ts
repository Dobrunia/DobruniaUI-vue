import type { Meta, StoryObj } from "@storybook/vue3";
import DbrToggle from "./DbrToggle.vue";

const meta: Meta<typeof DbrToggle> = {
  title: "Components/Toggle",
  component: DbrToggle,
  tags: ['autodocs'],
  args: {
    modelValue: false,
    disabled: false,
    label: "Menu toggle"
  },
  argTypes: {
    modelValue: { control: "boolean" },
    disabled: { control: "boolean" },
    label: { control: "text" }
  }
};

export default meta;
type Story = StoryObj<typeof DbrToggle>;

export const Playground: Story = {
  render: (args) => ({
    components: { DbrToggle },
    setup: () => ({ args }),
    template: `
      <DbrToggle v-bind="args" />
    `
  })
};

export const Variants: Story = {
  render: () => ({
    components: { DbrToggle },
    template: `
      <div style="display:grid; gap:12px;">
        <DbrToggle label="Unchecked" />
        <DbrToggle :modelValue="true" label="Checked" />
        <DbrToggle :modelValue="true" label="Disabled" :disabled="true" />
      </div>
    `
  })
};
