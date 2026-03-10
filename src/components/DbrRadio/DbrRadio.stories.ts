import type { Meta, StoryObj } from "@storybook/vue3";
import { ref } from "vue";
import DbrRadio from "./DbrRadio.vue";

const meta: Meta<typeof DbrRadio> = {
  title: "Components/Radio",
  component: DbrRadio,
  tags: ["autodocs"],
  args: {
    modelValue: "ellipse",
    value: "ellipse",
    label: "Ellipse",
    name: "shape",
    disabled: false,
  },
  argTypes: {
    modelValue: { control: "text" },
    value: { control: "text" },
    label: { control: "text" },
    name: { control: "text" },
    disabled: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof DbrRadio>;

export const Playground: Story = {
  render: (args) => ({
    components: { DbrRadio },
    setup: () => ({ args }),
    template: `<DbrRadio v-bind="args" />`,
  }),
};

export const Variants: Story = {
  render: () => ({
    components: { DbrRadio },
    setup: () => {
      const selected = ref("ellipse");
      return { selected };
    },
    template: `
      <div style="display:grid; gap:14px;">
        <div style="display:flex; gap:24px; flex-wrap:wrap;">
          <DbrRadio v-model="selected" name="shape" value="line" label="Line" />
          <DbrRadio v-model="selected" name="shape" value="rectangle" label="Rectangle" />
          <DbrRadio v-model="selected" name="shape" value="ellipse" label="Ellipse" />
          <DbrRadio v-model="selected" name="shape" value="polygon" label="Polygon" />
        </div>
        <div class="dbru-text-base dbru-text-main">Your selection is: <b>{{ selected }}</b></div>
      </div>
    `,
  }),
};
