import type { Meta, StoryObj } from "@storybook/vue3";
import { ref } from "vue";
import DbrThemeToggle from "./DbrThemeToggle.vue";

const meta: Meta<typeof DbrThemeToggle> = {
  title: "Components/Theme Toggle",
  component: DbrThemeToggle,
  tags: ["autodocs"],
  args: {
    modelValue: false
  },
  argTypes: {
    modelValue: { control: "boolean" }
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
