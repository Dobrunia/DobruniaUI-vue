import type { Meta, StoryObj } from "@storybook/vue3";
import DbrCheckbox from "./DbrCheckbox.vue";

const meta: Meta<typeof DbrCheckbox> = {
  title: "Components/Checkbox",
  component: DbrCheckbox,
  tags: ['autodocs'],
  args: {
    modelValue: false,
    disabled: false,
    label: "Accept terms"
  },
  argTypes: {
    modelValue: { control: "boolean" },
    disabled: { control: "boolean" },
    label: { control: "text" }
  }
};

export default meta;
type Story = StoryObj<typeof DbrCheckbox>;

export const Playground: Story = {
  render: (args) => ({
    components: { DbrCheckbox },
    setup: () => ({ args }),
    template: `
      <DbrCheckbox v-bind="args" />
    `
  })
};

export const Variants: Story = {
  render: () => ({
    components: { DbrCheckbox },
    template: `
      <div style="display:grid; gap:12px;">
        <div style="font-weight:600;">With label</div>
        <DbrCheckbox label="Unchecked" />
        <DbrCheckbox :modelValue="true" label="Checked" />
        <DbrCheckbox :modelValue="true" label="Disabled" :disabled="true" />
        <div style="font-weight:600; margin-top: 6px;">Without label</div>
        <div style="display:flex; gap:12px; align-items:center;">
          <DbrCheckbox />
          <DbrCheckbox :modelValue="true" />
          <DbrCheckbox :disabled="true" />
        </div>
      </div>
    `
  })
};
