import type { Meta, StoryObj } from "@storybook/vue3";
import DbrAvatar from "./DbrAvatar.vue";

const meta: Meta<typeof DbrAvatar> = {
  title: "Components/Avatar",
  component: DbrAvatar,
  tags: ['autodocs'],
  args: {
    name: "Jane Doe",
    size: "md",
    shape: "circle"
  },
  argTypes: {
    src: { control: "text" },
    name: { control: "text" },
    size: {
      control: "select",
      options: ["sm", "md", "lg"]
    },
    shape: {
      control: "select",
      options: ["circle", "rounded"]
    }
  }
};

export default meta;
type Story = StoryObj<typeof DbrAvatar>;

export const Playground: Story = {
  render: (args) => ({
    components: { DbrAvatar },
    setup: () => ({ args }),
    template: `
      <DbrAvatar v-bind="args" />
    `
  })
};

export const Variants: Story = {
  render: () => ({
    components: { DbrAvatar },
    template: `
      <div style="display:flex; gap:16px; align-items:center;">
        <DbrAvatar name="A B" size="sm" />
        <DbrAvatar name="Jane Doe" size="md" shape="rounded" />
        <DbrAvatar name="Samuel Green" size="lg" />
      </div>
    `
  })
};
