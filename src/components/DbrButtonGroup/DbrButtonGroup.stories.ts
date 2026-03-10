import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import DbrButtonGroup from './DbrButtonGroup.vue';

const OPTIONS = [
  { label: 'Line', value: 'line' },
  { label: 'Rectangle', value: 'rectangle' },
  { label: 'Ellipse', value: 'ellipse' },
  { label: 'Polygon', value: 'polygon' },
];

const meta: Meta<typeof DbrButtonGroup> = {
  title: 'Components/Button Group',
  component: DbrButtonGroup,
  tags: ['autodocs'],
  args: {
    modelValue: 'ellipse',
    options: OPTIONS,
    size: 'md',
    disabled: false,
  },
  argTypes: {
    modelValue: { control: 'text' },
    options: { control: 'object' },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof DbrButtonGroup>;

export const Playground: Story = {
  render: (args) => ({
    components: { DbrButtonGroup },
    setup: () => ({ args }),
    template: `<DbrButtonGroup v-bind="args" />`,
  }),
};

export const Variants: Story = {
  render: () => ({
    components: { DbrButtonGroup },
    setup: () => {
      const shape = ref('ellipse');
      const lockedShape = 'ellipse';
      const longOptions = [
        { label: 'Line tool', value: 'line' },
        { label: 'Rectangle tool', value: 'rectangle' },
        { label: 'Ellipse tool', value: 'ellipse' },
        { label: 'Polygon tool', value: 'polygon' },
        { label: 'Star tool', value: 'star' },
      ];
      const onLockedChange = (value: string | number) => {
        globalThis.alert(`Locked mode: clicked "${value}" (modelValue stays "${lockedShape}")`);
      };
      return { shape, lockedShape, options: OPTIONS, longOptions, onLockedChange };
    },
    template: `
      <div style="display:grid; gap:16px;">
        <div style="font-weight:600;">Interactive (with switching)</div>
        <div style="border:1px dashed var(--dbru-color-border); padding:8px; width: 220px;">
          <DbrButtonGroup v-model="shape" :options="longOptions" size="md" />
        </div>
        <div style="border:1px dashed var(--dbru-color-border); padding:8px; width: 560px; max-width: 100%;">
          <DbrButtonGroup v-model="shape" :options="longOptions" size="md" />
        </div>

        <div style="font-weight:600; margin-top:4px;">Locked (without switching)</div>
        <div style="border:1px dashed var(--dbru-color-border); padding:8px; width: 220px;">
          <DbrButtonGroup
            :model-value="lockedShape"
            :options="longOptions"
            size="md"
            @change="onLockedChange"
          />
        </div>
        <div style="border:1px dashed var(--dbru-color-border); padding:8px; width: 560px; max-width: 100%;">
          <DbrButtonGroup
            :model-value="lockedShape"
            :options="longOptions"
            size="md"
            @change="onLockedChange"
          />
        </div>

        <div style="font-weight:600; margin-top:4px;">Size scale</div>
        <DbrButtonGroup v-model="shape" :options="options" size="sm" />
        <DbrButtonGroup v-model="shape" :options="options" size="md" />
        <DbrButtonGroup v-model="shape" :options="options" size="lg" />
        <DbrButtonGroup
          v-model="shape"
          :options="[
            ...options.slice(0, 2),
            { label: 'Ellipse', value: 'ellipse', disabled: true },
            options[3],
          ]"
        />
        <div class="dbru-text-base dbru-text-main">Active: <b>{{ shape }}</b></div>
      </div>
    `,
  }),
};
