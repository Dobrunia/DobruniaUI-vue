import type { Meta, StoryObj } from "@storybook/vue3";
import DbrInput from "./DbrInput.vue";

const meta: Meta<typeof DbrInput> = {
  title: "Components/Input",
  component: DbrInput,
  args: {
    modelValue: "",
    label: "Name",
    disabled: false,
    required: false,
    size: "md",
    type: "text"
  },
  argTypes: {
    modelValue: { control: "text" },
    label: { control: "text" },
    disabled: { control: "boolean" },
    required: { control: "boolean" },
    size: {
      control: "select",
      options: ["sm", "md", "lg"]
    },
    type: {
      control: "select",
      options: ["text", "email", "password", "search", "url"]
    }
  }
};

export default meta;
type Story = StoryObj<typeof DbrInput>;

export const Playground: Story = {
  args: {
    label: "",
    modelValue: "",
    disabled: false
  },

  render: (args) => ({
    components: { DbrInput },
    setup: () => ({ args }),
    template: `
      <DbrInput v-bind="args" />
    `
  })
};

export const Variants: Story = {
  render: () => ({
    components: { DbrInput },
    template: `
      <div style="display:grid; gap:12px; max-width: 240px;">
        <DbrInput label="Small" size="sm" />
        <DbrInput label="Medium" size="md" />
        <DbrInput label="Large" size="lg" />
        <DbrInput label="Filled" :modelValue="'John Doe'" />
        <DbrInput label="Disabled" :disabled="true" />
      </div>
    `
  })
};
