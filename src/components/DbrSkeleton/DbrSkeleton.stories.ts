import type { Meta, StoryObj } from "@storybook/vue3";
import DbrSkeleton from "./DbrSkeleton.vue";

const meta: Meta<typeof DbrSkeleton> = {
  title: "Components/Skeleton",
  component: DbrSkeleton,
  tags: ["autodocs"],
  args: {
    width: "100%",
    height: "12px",
    radius: "6px",
  },
  argTypes: {
    width: { control: "text" },
    height: { control: "text" },
    radius: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof DbrSkeleton>;

export const Playground: Story = {
  render: (args) => ({
    components: { DbrSkeleton },
    setup: () => ({ args }),
    template: `<DbrSkeleton v-bind="args" />`,
  }),
};

export const Variants: Story = {
  render: () => ({
    components: { DbrSkeleton },
    template: `
      <div style="display:grid; gap:14px; max-width: 360px;">
        <div class="dbru-text-sm dbru-text-main">Default (no props: width 100%, height 0, radius 0)</div>
        <div style="border: 1px dashed var(--dbru-color-border); padding: 8px;">
          <DbrSkeleton />
        </div>

        <div class="dbru-text-sm dbru-text-main">Square</div>
        <DbrSkeleton width="32px" height="32px" radius="0" />

        <div class="dbru-text-sm dbru-text-main">Rounded Square</div>
        <DbrSkeleton width="40px" height="40px" radius="8px" />

        <div class="dbru-text-sm dbru-text-main">Circle (avatar)</div>
        <DbrSkeleton width="40px" height="40px" radius="999px" />

        <div class="dbru-text-sm dbru-text-main">Pill</div>
        <DbrSkeleton width="120px" height="20px" radius="999px" />

        <div class="dbru-text-sm dbru-text-main">Text Lines</div>
        <div style="display:grid; gap:8px;">
          <DbrSkeleton width="220px" height="12px" radius="6px" />
          <DbrSkeleton width="180px" height="10px" radius="6px" />
          <DbrSkeleton width="130px" height="10px" radius="6px" />
        </div>
      </div>
    `,
  }),
};
