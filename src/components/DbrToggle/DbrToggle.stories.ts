import type { Meta, StoryObj } from "@storybook/vue3";
import { ref } from "vue";
import DbrToggle from "./DbrToggle.vue";

const meta: Meta<typeof DbrToggle> = {
  title: "Components/Toggle",
  component: DbrToggle,
  tags: ["autodocs"],
  args: {
    modelValue: false,
    size: "md",
    disabled: false,
    label: "Enable option",
  },
  argTypes: {
    modelValue: { control: "boolean" },
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg"],
    },
    disabled: { control: "boolean" },
    label: { control: "text" },
    name: { control: "text" },
    value: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof DbrToggle>;

export const Playground: Story = {
  render: (args) => ({
    components: { DbrToggle },
    setup: () => {
      const value = ref(args.modelValue ?? false);
      return { args, value };
    },
    template: `
      <DbrToggle v-bind="args" v-model="value" />
    `,
  }),
};

export const Variants: Story = {
  render: () => ({
    components: { DbrToggle },
    setup: () => {
      const x = ref(false);
      const a = ref(false);
      const b = ref(true);
      const c = ref(false);
      const d = ref(true);
      const e = ref(false);
      const f = ref(true);
      return { x, a, b, c, d, e, f };
    },
    template: `
      <div style="display:grid; gap:16px;">
        <div style="display:flex; flex-wrap:wrap; align-items:center; gap:16px;">
          <DbrToggle v-model="x" size="xs" label="Extra small off" />
          <DbrToggle v-model="f" size="xs" label="Extra small on" />
        </div>
        <div style="display:flex; flex-wrap:wrap; align-items:center; gap:16px;">
          <DbrToggle v-model="a" size="sm" label="Small off" />
          <DbrToggle v-model="b" size="sm" label="Small on" />
        </div>
        <div style="display:flex; flex-wrap:wrap; align-items:center; gap:16px;">
          <DbrToggle v-model="c" size="md" label="Medium off" />
          <DbrToggle v-model="d" size="md" label="Medium on" />
        </div>
        <div style="display:flex; flex-wrap:wrap; align-items:center; gap:16px;">
          <DbrToggle v-model="e" size="lg">
            Large via slot
          </DbrToggle>
          <DbrToggle :model-value="true" size="lg" disabled label="Disabled on" />
          <DbrToggle :model-value="false" size="lg" disabled label="Disabled off" />
        </div>
      </div>
    `,
  }),
};
