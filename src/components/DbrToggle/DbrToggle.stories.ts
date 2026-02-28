import type { Meta, StoryObj } from "@storybook/vue3";
import DbrToggle from "./DbrToggle.vue";

const meta: Meta<typeof DbrToggle> = {
  title: "Components/Toggle",
  component: DbrToggle,
  tags: ['autodocs'],
  args: {
    modelValue: false,
    disabled: false,
    label: "Menu toggle",
    size: "md"
  },
  argTypes: {
    modelValue: { control: "boolean" },
    disabled: { control: "boolean" },
    label: { control: "text" },
    size: {
      control: "select",
      options: ["sm", "md", "lg"]
    }
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
        <DbrToggle label="Small" size="sm" />
        <DbrToggle label="Medium" size="md" />
        <DbrToggle label="Large" size="lg" />
        <DbrToggle :modelValue="true" label="Checked" />
        <DbrToggle :modelValue="true" label="Disabled" :disabled="true" />
      </div>
    `
  })
};
