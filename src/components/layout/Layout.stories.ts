import type { Meta, StoryObj } from '@storybook/vue3';
import Layout from '../../components/layout/Layout.vue';

const meta: Meta<typeof Layout> = {
  title: 'Layout/Layout',
  component: Layout,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof Layout>;

export const Default: Story = {
  render: () => ({
    components: { Layout },
    template: '<Layout />',
  }),
};

export const WithContent: Story = {
  render: () => ({
    components: { Layout },
    template: `
      <Layout>
        <div class="p-4">
          <h1 class="text-2xl font-bold mb-4">Content</h1>
          <p>This is content inside Layout component</p>
        </div>
      </Layout>
    `,
  }),
};

export const WithSlots: Story = {
  render: () => ({
    components: { Layout },
    template: `
      <Layout>
        <template #header>
          <header class="bg-blue-500 text-white p-4">
            <h1 class="text-xl font-bold">Header</h1>
          </header>
        </template>
        
        <main class="p-4">
          <h2 class="text-2xl font-bold mb-4">Main Content</h2>
          <p>This is the main content area</p>
        </main>
        
        <template #footer>
          <footer class="bg-gray-800 text-white p-4">
            <p>Footer content</p>
          </footer>
        </template>
      </Layout>
    `,
  }),
};
