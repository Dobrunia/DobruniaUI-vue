import type { Meta, StoryObj } from "@storybook/vue3";
import DbrLoader from "./DbrLoader.vue";

const meta: Meta<typeof DbrLoader> = {
  title: "Components/Loader",
  component: DbrLoader,
  args: {},
  argTypes: {}
};

export default meta;
type Story = StoryObj<typeof DbrLoader>;

export const Playground: Story = {
  render: () => ({
    components: { DbrLoader },
    template: `
      <div style="display:flex; align-items:center; gap:12px;">
        <DbrLoader />
      </div>
    `
  })
};

export const Variants: Story = {
  render: () => ({
    components: { DbrLoader },
    template: `
      <div style="display:flex; align-items:center; gap:28px; flex-wrap: wrap;">
        <div style="display:flex; align-items:center; gap:10px;">
          <div style="transform: scale(0.8); transform-origin: left center;">
            <DbrLoader />
          </div>
          <span>Small</span>
        </div>
        <div style="display:flex; align-items:center; gap:10px;">
          <DbrLoader />
          <span>Medium</span>
        </div>
        <div style="display:flex; align-items:center; gap:10px;">
          <div style="transform: scale(1.3); transform-origin: left center;">
            <DbrLoader />
          </div>
          <span>Large</span>
        </div>
      </div>
    `
  })
};
