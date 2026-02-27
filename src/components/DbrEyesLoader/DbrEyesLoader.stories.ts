import type { Meta, StoryObj } from "@storybook/vue3";
import DbrEyesLoader from "./DbrEyesLoader.vue";

const meta: Meta<typeof DbrEyesLoader> = {
  title: "Components/Eyes Loader",
  component: DbrEyesLoader,
  tags: ['autodocs'],
  args: {},
  argTypes: {}
};

export default meta;
type Story = StoryObj<typeof DbrEyesLoader>;

export const Playground: Story = {
  render: () => ({
    components: { DbrEyesLoader },
    template: `
      <div style="display:flex; align-items:center; gap:12px;">
        <DbrEyesLoader />
      </div>
    `
  })
};

export const Variants: Story = {
  render: () => ({
    components: { DbrEyesLoader },
    template: `
      <div style="display:flex; align-items:center; gap:28px; flex-wrap: wrap;">
        <div style="display:flex; align-items:center; gap:10px;">
          <div style="transform: scale(0.8); transform-origin: left center;">
            <DbrEyesLoader />
          </div>
          <span>Small</span>
        </div>
        <div style="display:flex; align-items:center; gap:10px;">
          <DbrEyesLoader />
          <span>Medium</span>
        </div>
        <div style="display:flex; align-items:center; gap:10px;">
          <div style="transform: scale(1.3); transform-origin: left center;">
            <DbrEyesLoader />
          </div>
          <span>Large</span>
        </div>
      </div>
    `
  })
};
