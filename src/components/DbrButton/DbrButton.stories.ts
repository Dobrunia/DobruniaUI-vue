import type { Meta, StoryObj } from "@storybook/vue3";
import DbrButton from "./DbrButton.vue";

const meta: Meta<typeof DbrButton> = {
  title: "Components/Button",
  component: DbrButton,
  args: {
    variant: "primary",
    size: "md",
    disabled: false,
    nativeType: "button"
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "ghost", "danger"]
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"]
    },
    disabled: { control: "boolean" },
    nativeType: {
      control: "select",
      options: ["button", "submit", "reset"]
    }
  }
};

export default meta;
type Story = StoryObj<typeof DbrButton>;

export const Playground: Story = {
  args: {
    variant: "primary",
    disabled: false,
    size: "md",
    pressed: false,
    nativeType: "button"
  },

  render: (args) => ({
    components: { DbrButton },
    setup: () => ({ args }),
    template: `
      <div style="display:flex; gap:16px; align-items:center; flex-wrap: wrap;">
        <DbrButton v-bind="args">Primary</DbrButton>
        <DbrButton variant="ghost" size="md">Ghost</DbrButton>
        <DbrButton variant="danger" size="md">Danger</DbrButton>
      </div>
    `
  })
};

export const Variants: Story = {
  render: () => ({
    components: { DbrButton },
    setup: () => ({
      variants: ["primary", "ghost", "danger"],
      sizes: ["sm", "md", "lg"],
      disabledStates: [false, true]
    }),
    template: `
      <div style="display:grid; gap:16px;">
        <div v-for="variant in variants" :key="variant" style="display:grid; gap:12px;">
          <div style="text-transform: capitalize; font-weight: 600;">{{ variant }}</div>
          <div style="display:flex; gap:12px; flex-wrap: wrap;">
            <template v-for="size in sizes" :key="size">
              <DbrButton :variant="variant" :size="size">{{ size }}</DbrButton>
              <DbrButton :variant="variant" :size="size" :disabled="true">
                {{ size }} disabled
              </DbrButton>
            </template>
          </div>
        </div>
      </div>
    `
  })
};
