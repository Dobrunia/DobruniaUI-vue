import type { Meta, StoryObj } from "@storybook/vue3";
import DbrTerminalLoader from "./DbrTerminalLoader.vue";

const meta: Meta<typeof DbrTerminalLoader> = {
  title: "Components/Terminal Loader",
  component: DbrTerminalLoader,
  tags: ['autodocs'],
  args: {},
  argTypes: {}
};

export default meta;
type Story = StoryObj<typeof DbrTerminalLoader>;

export const Playground: Story = {
  render: () => ({
    components: { DbrTerminalLoader },
    template: `
      <div style="display:flex; align-items:center; gap:12px;">
        <DbrTerminalLoader />
      </div>
    `
  })
};

export const Variants: Story = {
  render: () => ({
    components: { DbrTerminalLoader },
    template: `
      <div style="display:flex; align-items:center; gap:24px; flex-wrap: wrap;">
        <div style="transform: scale(0.85); transform-origin: left center;">
          <DbrTerminalLoader />
        </div>
        <DbrTerminalLoader />
        <div style="transform: scale(1.15); transform-origin: left center;">
          <DbrTerminalLoader />
        </div>
      </div>
    `
  })
};
