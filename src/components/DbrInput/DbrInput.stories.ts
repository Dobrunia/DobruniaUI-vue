import type { Meta, StoryObj } from "@storybook/vue3";
import DbrInput from "./DbrInput.vue";

const meta: Meta<typeof DbrInput> = {
  title: "Components/Input",
  component: DbrInput,
  tags: ['autodocs'],
  args: {
    modelValue: "",
    label: "Input label",
    disabled: false,
    required: false,
    size: "md",
    type: "text",
    iconPosition: "left"
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
      options: ["text", "password", "email", "url", "tel", "number", "date", "time"]
    },
    iconPosition: {
      control: "select",
      options: ["left", "right"]
    },
  }
};

export default meta;
type Story = StoryObj<typeof DbrInput>;

export const Playground: Story = {
  args: {
    label: "Input label",
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
        <DbrInput label="Password" type="password" :modelValue="'secret123'" />
        <DbrInput label="With left icon" :modelValue="'Design system'">
          <template #icon>
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="11" cy="11" r="7" />
              <path d="M20 20l-3.5-3.5" />
            </svg>
          </template>
        </DbrInput>
        <DbrInput label="With right icon" icon-position="right" :modelValue="'mail@domain.com'">
          <template #icon>
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M4 6h16v12H4z" />
              <path d="m4 7 8 6 8-6" />
            </svg>
          </template>
        </DbrInput>
        <DbrInput label="Disabled" :disabled="true" />
      </div>
    `
  })
};
