import type { Meta, StoryObj } from "@storybook/vue3";
import DbrAvatar from "./DbrAvatar.vue";
import DbrText from "../DbrText/DbrText.vue";

const meta: Meta<typeof DbrAvatar> = {
  title: "Components/Avatar",
  component: DbrAvatar,
  tags: ['autodocs'],
  args: {
    name: "Jane Doe",
    size: "md",
    shape: "circle",
    active: false
  },
  argTypes: {
    src: { control: "text" },
    name: { control: "text" },
    active: { control: "boolean" },
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
    components: { DbrAvatar, DbrText },
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
      <div style="display:grid; gap:28px;">
        <div>
          <div style="margin-bottom:10px;"><DbrText color="muted" size="sm">
            Circle — <code>shape="circle"</code>
          </DbrText></div>
          <div style="display:flex; flex-wrap:wrap; align-items:center; gap:12px;">
            <DbrAvatar name="A B" size="sm" shape="circle" />
            <DbrAvatar name="Jane Doe" size="md" shape="circle" />
            <DbrAvatar name="Samuel Green" size="lg" shape="circle" />
            <DbrAvatar name="Taylor Blue" size="md" shape="circle" active />
          </div>
        </div>
        <div>
          <div style="margin-bottom:10px;"><DbrText color="muted" size="sm">
            Rounded — <code>shape="rounded"</code>
          </DbrText></div>
          <div style="display:flex; flex-wrap:wrap; align-items:center; gap:12px;">
            <DbrAvatar name="A B" size="sm" shape="rounded" />
            <DbrAvatar name="Jane Doe" size="md" shape="rounded" />
            <DbrAvatar name="Samuel Green" size="lg" shape="rounded" />
            <DbrAvatar name="Taylor Blue" size="md" shape="rounded" active />
          </div>
        </div>
      </div>
    `,
  }),
};
