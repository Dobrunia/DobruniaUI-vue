import type { Meta, StoryObj } from "@storybook/vue3";
import { ref } from "vue";
import DbrThemeToggle from "./DbrThemeToggle.vue";

const meta: Meta<typeof DbrThemeToggle> = {
  title: "Components/Theme Toggle",
  component: DbrThemeToggle,
  tags: ["autodocs"],
  args: {
    modelValue: false,
    size: "md",
    square: false
  },
  argTypes: {
    modelValue: { control: "boolean" },
    size: {
      control: "select",
      options: ["sm", "md", "lg"]
    },
    square: { control: "boolean" }
  }
};

export default meta;
type Story = StoryObj<typeof DbrThemeToggle>;

export const Playground: Story = {
  render: (args) => ({
    components: { DbrThemeToggle },
    setup: () => {
      const value = ref(args.modelValue ?? false);
      return { args, value };
    },
    template: `
      <DbrThemeToggle v-bind="args" v-model="value" />
    `
  })
};

export const Variants: Story = {
  render: () => ({
    components: { DbrThemeToggle },
    setup: () => {
      const a = ref(false);
      const b = ref(false);
      const c = ref(false);
      const d = ref(false);
      const e = ref(false);
      const f = ref(false);
      return { a, b, c, d, e, f };
    },
    template: `
      <div style="display:grid; gap:16px;">
        <div style="display:flex; align-items:center; gap:12px;">
          <DbrThemeToggle v-model="a" size="sm" />
          <DbrThemeToggle v-model="b" size="md" />
          <DbrThemeToggle v-model="c" size="lg" />
        </div>
        <div style="display:flex; align-items:center; gap:12px;">
          <DbrThemeToggle v-model="d" size="sm" square />
          <DbrThemeToggle v-model="e" size="md" square />
          <DbrThemeToggle v-model="f" size="lg" square />
        </div>
      </div>
    `
  })
};
