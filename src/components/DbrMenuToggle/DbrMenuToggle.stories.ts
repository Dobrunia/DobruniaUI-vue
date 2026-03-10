import type { Meta, StoryObj } from "@storybook/vue3";
import DbrMenuToggle from "./DbrMenuToggle.vue";

const meta: Meta<typeof DbrMenuToggle> = {
  title: "Components/Menu Toggle",
  component: DbrMenuToggle,
  tags: ['autodocs'],
  args: {
    modelValue: false,
    disabled: false,
    label: "Menu",
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
type Story = StoryObj<typeof DbrMenuToggle>;

export const Playground: Story = {
  render: (args) => ({
    components: { DbrMenuToggle },
    setup: () => ({ args }),
    template: `
      <DbrMenuToggle v-bind="args" />
    `
  })
};

export const Variants: Story = {
  render: () => ({
    components: { DbrMenuToggle },
    template: `
      <div style="display:grid; gap:12px;">
        <DbrMenuToggle label="Sidebar (sm)" size="sm" />
        <DbrMenuToggle label="Sidebar (md)" size="md" />
        <DbrMenuToggle label="Sidebar (lg)" size="lg" />
        <DbrMenuToggle :modelValue="true" label="Mobile menu opened" />
        <DbrMenuToggle :modelValue="true" label="Disabled" :disabled="true" />
      </div>
    `
  })
};
