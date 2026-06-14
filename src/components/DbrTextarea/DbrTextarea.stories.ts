import type { Meta, StoryObj } from "@storybook/vue3";
import DbrTextarea from "./DbrTextarea.vue";

const meta: Meta<typeof DbrTextarea> = {
  title: "Components/Textarea",
  component: DbrTextarea,
  tags: ["autodocs"],
  args: {
    modelValue: "",
    label: "Message",
    placeholder: "Write your message...",
    disabled: false,
    required: false,
    rows: 4,
    width: "360px",
    height: "120px",
    resize: "none"
  },
  argTypes: {
    modelValue: { control: "text" },
    label: { control: "text" },
    placeholder: { control: "text" },
    disabled: { control: "boolean" },
    required: { control: "boolean" },
    rows: { control: "number" },
    width: { control: "text" },
    height: { control: "text" },
    resize: {
      control: "select",
      options: ["none", "vertical", "horizontal", "both"]
    }
  }
};

export default meta;
type Story = StoryObj<typeof DbrTextarea>;

export const Playground: Story = {
  render: (args) => ({
    components: { DbrTextarea },
    setup: () => ({ args }),
    template: `
      <div>
        <DbrTextarea v-bind="args" />
      </div>
    `
  })
};

export const Variants: Story = {
  render: () => ({
    components: { DbrTextarea },
    template: `
      <div style="display:grid; gap:12px; max-width: 360px;">
        <DbrTextarea label="Fixed size" placeholder="Textarea placeholder" height="120px" />
        <DbrTextarea label="Filled" :modelValue="'A fixed-size textarea by default.'" height="120px" />
        <DbrTextarea label="Compact height" height="88px" />
        <DbrTextarea label="Vertical resize" resize="vertical" height="120px" :modelValue="'Manual vertical resize is enabled.'" />
        <DbrTextarea label="Both directions" resize="both" width="320px" height="140px" />
        <DbrTextarea label="Disabled" placeholder="Unavailable" :disabled="true" height="120px" />
      </div>
    `
  })
};
