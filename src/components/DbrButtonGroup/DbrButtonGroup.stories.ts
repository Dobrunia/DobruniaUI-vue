import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import DbrButton from '../DbrButton/DbrButton.vue';
import DbrText from '../DbrText/DbrText.vue';
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
    components: { DbrButton, DbrButtonGroup, DbrText },
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
        <DbrText>Interactive (with switching)</DbrText>
        <div style="border:1px dashed var(--dbru-color-border); padding:8px; width: 220px;">
          <DbrButtonGroup v-model="shape" :options="longOptions" size="md" />
        </div>
        <div style="border:1px dashed var(--dbru-color-border); padding:8px; width: 560px; max-width: 100%;">
          <DbrButtonGroup v-model="shape" :options="longOptions" size="md" />
        </div>

        <div style="margin-top:4px;"><DbrText>Locked (without switching)</DbrText></div>
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

        <div style="margin-top:4px;"><DbrText>Size scale (aligned with DbrButton)</DbrText></div>
        <div style="display:flex; flex-wrap:wrap; align-items:center; gap:12px;">
          <DbrButton size="sm" variant="ghost">Button sm</DbrButton>
          <DbrButtonGroup v-model="shape" :options="options" size="sm" />
        </div>
        <div style="display:flex; flex-wrap:wrap; align-items:center; gap:12px;">
          <DbrButton size="md" variant="ghost">Button md</DbrButton>
          <DbrButtonGroup v-model="shape" :options="options" size="md" />
        </div>
        <div style="display:flex; flex-wrap:wrap; align-items:center; gap:12px;">
          <DbrButton size="lg" variant="ghost">Button lg</DbrButton>
          <DbrButtonGroup v-model="shape" :options="options" size="lg" />
        </div>
        <DbrButtonGroup
          v-model="shape"
          :options="[
            ...options.slice(0, 2),
            { label: 'Ellipse', value: 'ellipse', disabled: true },
            options[3],
          ]"
        />
        <DbrText>Active: <b>{{ shape }}</b></DbrText>
      </div>
    `,
  }),
};
