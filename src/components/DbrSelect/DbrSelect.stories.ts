import type { Meta, StoryObj } from "@storybook/vue3";
import { ref } from "vue";
import DbrSelect from "./DbrSelect.vue";

const OPTIONS = [
  { value: "design", label: "Design system" },
  { value: "storybook", label: "Storybook" },
  { value: "tokens", label: "Design tokens" },
  { value: "components", label: "Components" }
];

const ICON_OPTIONS = [
  { value: "figma", label: "Figma", icon: "https://api.iconify.design/logos:figma.svg" },
  { value: "vue", label: "Vue", icon: "https://api.iconify.design/logos:vue.svg" },
  { value: "vite", label: "Vite", icon: "https://api.iconify.design/logos:vitejs.svg" }
];

const meta: Meta<typeof DbrSelect> = {
  title: "Components/Select",
  component: DbrSelect,
  tags: ["autodocs"],
  args: {
    modelValue: "design",
    options: OPTIONS,
    label: "Select label",
    placeholder: "Choose option",
    disabled: false,
    required: false,
    size: "md"
  },
  argTypes: {
    modelValue: { control: "text" },
    label: { control: "text" },
    placeholder: { control: "text" },
    disabled: { control: "boolean" },
    required: { control: "boolean" },
    size: {
      control: "select",
      options: ["sm", "md", "lg"]
    }
  }
};

export default meta;
type Story = StoryObj<typeof DbrSelect>;

export const Playground: Story = {
  render: (args) => ({
    components: { DbrSelect },
    setup() {
      const value = ref(args.modelValue);
      return { args, value };
    },
    template: `
      <div style="width: 280px;">
        <DbrSelect v-bind="args" v-model="value" />
      </div>
    `
  })
};

export const Variants: Story = {
  render: () => ({
    components: { DbrSelect },
    setup() {
      const small = ref("design");
      const medium = ref("storybook");
      const large = ref("tokens");
      const icons = ref("vue");
      const placeholder = ref(null);
      return { OPTIONS, ICON_OPTIONS, small, medium, large, icons, placeholder };
    },
    template: `
      <div style="display:grid; gap:12px; width: 280px;">
        <DbrSelect v-model="small" label="Small" size="sm" :options="OPTIONS" />
        <DbrSelect v-model="medium" label="Medium" size="md" :options="OPTIONS" />
        <DbrSelect v-model="large" label="Large" size="lg" :options="OPTIONS" />
        <DbrSelect v-model="icons" label="With icons" :options="ICON_OPTIONS" />
        <DbrSelect v-model="placeholder" label="Placeholder" placeholder="Choose option" :options="OPTIONS" />
        <DbrSelect label="Disabled" :disabled="true" placeholder="Unavailable" :options="OPTIONS" />
      </div>
    `
  })
};
