import type { Meta, StoryObj } from "@storybook/vue3";
import DbrIconButton from "./DbrIconButton.vue";

const meta: Meta<typeof DbrIconButton> = {
  title: "Components/Icon Button",
  component: DbrIconButton,
  tags: ["autodocs"],
  args: {
    ariaLabel: "Settings",
    size: "md",
    variant: "ghost",
    iconColor: "base",
    disabled: false,
    nativeType: "button",
  },
  argTypes: {
    ariaLabel: { control: "text" },
    size: { control: "select", options: ["sm", "md", "lg"] },
    variant: { control: "select", options: ["ghost", "border"] },
    iconColor: { control: "select", options: ["base", "muted", "primary"] },
    disabled: { control: "boolean" },
    nativeType: { control: "select", options: ["button", "submit", "reset"] },
  },
};

export default meta;
type Story = StoryObj<typeof DbrIconButton>;

const settingsIcon = `
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z" stroke="currentColor" stroke-width="2"/>
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9c.26.6.77 1 1.39 1.51H21a2 2 0 1 1 0 4h-.09c-.62 0-1.13.4-1.39 1Z" stroke="currentColor" stroke-width="2"/>
  </svg>
`;

export const Playground: Story = {
  render: (args) => ({
    components: { DbrIconButton },
    setup: () => ({ args, settingsIcon }),
    template: `
      <DbrIconButton v-bind="args">
        <span v-html="settingsIcon" />
      </DbrIconButton>
    `,
  }),
};

export const Variants: Story = {
  render: () => ({
    components: { DbrIconButton },
    setup: () => ({ settingsIcon }),
    template: `
      <div style="display:grid; gap:20px;">
        <div>
          <div class="dbru-font-size-sm dbru-font-color-muted" style="margin-bottom:10px;">Ghost (default)</div>
          <div style="display:flex; flex-wrap:wrap; align-items:center; gap:12px;">
            <DbrIconButton aria-label="Small ghost" size="sm" variant="ghost"><span v-html="settingsIcon" /></DbrIconButton>
            <DbrIconButton aria-label="Medium ghost" size="md" variant="ghost"><span v-html="settingsIcon" /></DbrIconButton>
            <DbrIconButton aria-label="Large ghost" size="lg" variant="ghost"><span v-html="settingsIcon" /></DbrIconButton>
            <DbrIconButton aria-label="Disabled ghost" size="md" variant="ghost" disabled><span v-html="settingsIcon" /></DbrIconButton>
          </div>
        </div>
        <div>
          <div class="dbru-font-size-sm dbru-font-color-muted" style="margin-bottom:10px;">Border</div>
          <div style="display:flex; flex-wrap:wrap; align-items:center; gap:12px;">
            <DbrIconButton aria-label="Small border" size="sm" variant="border"><span v-html="settingsIcon" /></DbrIconButton>
            <DbrIconButton aria-label="Medium border" size="md" variant="border"><span v-html="settingsIcon" /></DbrIconButton>
            <DbrIconButton aria-label="Large border" size="lg" variant="border"><span v-html="settingsIcon" /></DbrIconButton>
            <DbrIconButton aria-label="Disabled border" size="md" variant="border" disabled><span v-html="settingsIcon" /></DbrIconButton>
          </div>
        </div>
      </div>
    `,
  }),
};
