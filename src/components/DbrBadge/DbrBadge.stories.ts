import type { Meta, StoryObj } from '@storybook/vue3';
import DbrBadge from './DbrBadge.vue';
import DbrButton from '../DbrButton/DbrButton.vue';

const meta: Meta<typeof DbrBadge> = {
  title: 'Components/Badge',
  component: DbrBadge,
  tags: ['autodocs'],
  args: {
    dot: false,
    variant: 'primary',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'danger', 'neutral'],
    },
    dot: { control: 'boolean' },
    offsetX: { control: 'text' },
    offsetY: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof DbrBadge>;

export const Playground: Story = {
  render: (args) => ({
    components: { DbrBadge, DbrButton },
    setup: () => ({ args }),
    template: `
      <DbrBadge v-bind="args">
        <DbrButton variant="ghost">Messages</DbrButton>
        <template #badge>3</template>
      </DbrBadge>
    `,
  }),
};

export const Variants: Story = {
  render: () => ({
    components: { DbrBadge, DbrButton },
    template: `
      <div style="display:flex; gap:12px; flex-wrap: wrap;">
        <DbrBadge variant="primary">
          <DbrButton variant="ghost">Inbox</DbrButton>
          <template #badge>8</template>
        </DbrBadge>
          <DbrBadge variant="primary">
          <DbrButton variant="ghost">Inbox</DbrButton>
          <template #badge>101</template>
        </DbrBadge>
        <DbrBadge variant="danger">
          <DbrButton variant="ghost">Alerts</DbrButton>
          <template #badge>!</template>
        </DbrBadge>
        <DbrBadge variant="neutral" :dot="true">
          <DbrButton variant="ghost">Status</DbrButton>
        </DbrBadge>
      </div>
    `,
  }),
};
