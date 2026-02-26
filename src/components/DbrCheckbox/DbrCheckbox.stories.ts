import type { Meta, StoryObj } from "@storybook/vue3";
import DbrCheckbox from "./DbrCheckbox.vue";

const meta: Meta<typeof DbrCheckbox> = {
  title: "Components/Checkbox",
  component: DbrCheckbox,
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
        <DbrCheckbox label="Unchecked" />
        <DbrCheckbox :modelValue="true" label="Checked" />
        <DbrCheckbox :modelValue="true" label="Disabled" :disabled="true" />
      </div>
    `
  })
};
