import type { Meta, StoryObj } from "@storybook/vue3";
import DbrIconButton from "./DbrIconButton.vue";

const meta: Meta<typeof DbrIconButton> = {
  title: "Components/Icon Button",
  component: DbrIconButton,
  tags: ['autodocs'],
  args: {
    label: "Action",
    variant: "primary",
    size: "md",
    iconPosition: "start"
  },
  argTypes: {
    label: { control: "text" },
    variant: {
      control: "select",
      options: ["primary", "ghost", "danger"]
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"]
    },
    iconPosition: {
      control: "select",
      options: ["start", "end"]
    }
  }
};

export default meta;
type Story = StoryObj<typeof DbrIconButton>;

export const Playground: Story = {
  render: (args) => ({
    components: { DbrIconButton },
    setup: () => ({ args }),
    template: `
      <DbrIconButton v-bind="args">
        <template #iconBefore>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M4 12h16M12 4l8 8-8 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </template>
        <template #iconAfter>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M4 12h16M12 4l8 8-8 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </template>
      </DbrIconButton>
    `
  })
};

export const Variants: Story = {
  render: () => ({
    components: { DbrIconButton },
    template: `
      <div style="display:flex; gap:12px; flex-wrap: wrap;">
        <DbrIconButton label="Start" size="sm" iconPosition="start">
          <template #iconBefore>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M4 12h16M12 4l8 8-8 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </template>
        </DbrIconButton>
        <DbrIconButton label="End" size="md" iconPosition="end">
          <template #iconAfter>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M4 12h16M12 4l8 8-8 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </template>
        </DbrIconButton>
        <DbrIconButton label="Ghost" size="lg" variant="ghost" iconPosition="start">
          <template #iconBefore>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M4 12h16M12 4l8 8-8 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </template>
        </DbrIconButton>
        <DbrIconButton label="Danger" size="md" variant="danger" iconPosition="start">
          <template #iconBefore>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M4 12h16M12 4l8 8-8 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </template>
        </DbrIconButton>
      </div>
    `
  })
};
