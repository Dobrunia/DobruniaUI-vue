import type { Meta, StoryObj } from "@storybook/vue3";
import DbrButton from "./DbrButton.vue";

const meta: Meta<typeof DbrButton> = {
  title: "Components/Button",
  component: DbrButton,
  tags: ["autodocs"],
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
        <div style="display:grid; gap:12px;">
          <div style="font-weight: 600;">With icons</div>
          <div style="display:flex; gap:12px; flex-wrap: wrap;">
            <DbrButton variant="primary" size="sm">
              <span style="display:inline-flex; align-items:center; gap:8px;">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M4 12h16M12 4l8 8-8 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span>Start</span>
              </span>
            </DbrButton>
            <DbrButton variant="primary" size="md">
              <span style="display:inline-flex; align-items:center; gap:8px;">
                <span>End</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M4 12h16M12 4l8 8-8 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </span>
            </DbrButton>
            <DbrButton variant="ghost" size="lg">
              <span style="display:inline-flex; align-items:center; gap:8px;">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M4 12h16M12 4l8 8-8 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span>Ghost</span>
              </span>
            </DbrButton>
            <DbrButton variant="danger" size="md">
              <span style="display:inline-flex; align-items:center; gap:8px;">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M4 12h16M12 4l8 8-8 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span>Danger</span>
              </span>
            </DbrButton>
            <DbrButton variant="primary" size="md" style="width: 40px; padding: 0;">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M4 12h16M12 4l8 8-8 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </DbrButton>
          </div>
        </div>
      </div>
    `
  })
};
