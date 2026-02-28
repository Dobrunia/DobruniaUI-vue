import type { Meta, StoryObj } from "@storybook/vue3";
import DbrLoader from "./DbrLoader.vue";

const meta: Meta<typeof DbrLoader> = {
  title: "Components/Loader",
  component: DbrLoader,
  tags: ['autodocs'],
  args: {
    size: "md"
  },
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"]
    }
  }
};

export default meta;
type Story = StoryObj<typeof DbrLoader>;

export const Playground: Story = {
  render: () => ({
    components: { DbrLoader },
    template: `
      <div style="display:flex; align-items:center; gap:12px;">
        <DbrLoader v-bind="args" />
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
          <DbrLoader size="sm" />
          <span>Small</span>
        </div>
        <div style="display:flex; align-items:center; gap:10px;">
          <DbrLoader size="md" />
          <span>Medium</span>
        </div>
        <div style="display:flex; align-items:center; gap:10px;">
          <DbrLoader size="lg" />
          <span>Large</span>
        </div>
      </div>
    `
  })
};
