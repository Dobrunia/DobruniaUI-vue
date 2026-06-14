import type { Meta, StoryObj } from '@storybook/vue3';

import DbrText from './DbrText.vue';



const meta: Meta<typeof DbrText> = {

  title: 'Components/Text',

  component: DbrText,

  tags: ['autodocs'],

  args: {

    truncate: false,

  },

  argTypes: {

    size: { control: 'select', options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'] },

    weight: { control: 'select', options: ['regular', 'medium', 'semibold'] },

    color: {

      control: 'select',

      options: ['base', 'muted', 'primary', 'danger', 'success', 'surface', 'on-primary', 'on-danger'],

    },

    lineHeight: { control: 'select', options: ['tight', 'normal', 'relaxed'] },

    align: { control: 'select', options: ['left', 'center', 'right'] },

    transform: { control: 'select', options: ['none', 'uppercase', 'lowercase', 'capitalize'] },

    decoration: { control: 'select', options: ['none', 'underline', 'line-through'] },

    fontStyle: { control: 'select', options: ['normal', 'italic'] },

    wrap: { control: 'select', options: ['wrap', 'nowrap', 'pre-wrap'] },

    letterSpacing: { control: 'select', options: ['normal', 'tight', 'wide'] },

    truncate: { control: 'boolean' },

  },

};



export default meta;

type Story = StoryObj<typeof DbrText>;



export const Playground: Story = {

  render: (args) => ({

    components: { DbrText },

    setup: () => ({ args }),

    template: `<DbrText v-bind="args">The quick brown fox jumps over the lazy dog.</DbrText>`,

  }),

};



export const Variants: Story = {

  render: () => ({

    components: { DbrText },

    template: `

      <div style="display:grid; gap:28px; max-width:720px;">

        <section>

          <DbrText color="muted">Sizes</DbrText>

          <div style="display:grid; gap:8px;">

            <DbrText size="xs">xs — 11px caption</DbrText>

            <DbrText size="sm">sm — 12px secondary</DbrText>

            <DbrText>Default md — 14px body (no props)</DbrText>

            <DbrText size="lg">lg — 16px emphasis</DbrText>

            <DbrText size="xl" weight="semibold">xl — 20px heading</DbrText>

            <DbrText size="2xl" weight="semibold">2xl — 28px display</DbrText>

          </div>

        </section>



        <section>

          <DbrText color="muted">Colors & weight</DbrText>

          <div style="display:flex; flex-wrap:wrap; gap:16px; align-items:center;">

            <DbrText color="base">base</DbrText>

            <DbrText color="muted">muted</DbrText>

            <DbrText color="primary" weight="semibold">primary</DbrText>

            <DbrText color="danger">danger</DbrText>

            <DbrText color="success">success</DbrText>

            <DbrText weight="medium">medium 500</DbrText>

            <span style="background:var(--dbru-color-primary); padding:4px 10px; border-radius:8px;">

              <DbrText color="on-primary">on-primary</DbrText>

            </span>

            <span style="background:var(--dbru-color-danger); padding:4px 10px; border-radius:8px;">

              <DbrText color="on-danger">on-danger</DbrText>

            </span>

          </div>

        </section>



        <section>

          <DbrText color="muted">Line height & spacing</DbrText>

          <div style="display:grid; gap:12px;">

            <div style="max-width:360px;">

              <DbrText line-height="tight">

                tight (1) — compact lines for dense UI labels and badges.

              </DbrText>

            </div>

            <div style="max-width:360px;">

              <DbrText line-height="normal">

                normal (1.5) — default body copy line height for paragraphs.

              </DbrText>

            </div>

            <div style="max-width:360px;">

              <DbrText line-height="relaxed">

                relaxed (1.75) — airy lines for long-form reading blocks.

              </DbrText>

            </div>

            <DbrText letter-spacing="wide" transform="uppercase" size="sm" weight="semibold">

              wide + uppercase label

            </DbrText>

          </div>

        </section>



        <section>

          <DbrText color="muted">Decoration & align</DbrText>

          <DbrText decoration="underline" color="primary">Underlined link style</DbrText>

          <div style="margin-top:8px;">

            <DbrText decoration="line-through" color="muted">Strikethrough price</DbrText>

          </div>

          <div style="margin-top:12px; border:1px dashed var(--dbru-color-border); padding:8px;">

            <div><DbrText align="center">center aligned</DbrText></div>

            <div><DbrText align="right">right aligned</DbrText></div>

          </div>

        </section>



        <section>

          <DbrText color="muted">Truncate</DbrText>

          <div style="width:220px; border:1px dashed var(--dbru-color-border); padding:4px;">

            <DbrText truncate>A very long label that should ellipsize when the container is narrow</DbrText>

          </div>

        </section>



      </div>

    `,

  }),

};

