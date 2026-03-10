import type { Meta, StoryObj } from "@storybook/vue3";
import { ref } from "vue";
import DbrChip from "./DbrChip.vue";

const meta: Meta<typeof DbrChip> = {
  title: "Components/Chip",
  component: DbrChip,
  tags: ['autodocs'],
  args: {
    variant: "primary",
    type: "default"
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "ghost", "danger"]
    },
    type: {
      control: "select",
      options: ["default", "removable"]
    },
    disabled: { control: "boolean" },
    removeAriaLabel: { control: "text" }
  }
};

export default meta;
type Story = StoryObj<typeof DbrChip>;

export const Playground: Story = {
  render: (args) => ({
    components: { DbrChip },
    setup: () => ({ args }),
    template: `
      <DbrChip v-bind="args">Chip</DbrChip>
    `
  })
};

export const Variants: Story = {
  render: () => ({
    components: { DbrChip },
    template: `
      <div style="display:flex; gap:12px; flex-wrap: wrap;">
        <DbrChip variant="primary">Primary</DbrChip>
        <DbrChip variant="ghost">
          <span>📎</span>
          <span>Ghost</span>
        </DbrChip>
        <DbrChip variant="danger" type="removable">Danger</DbrChip>
      </div>
    `
  })
};

export const WithInputTags: Story = {
  render: () => ({
    components: { DbrChip },
    setup: () => {
      const draft = ref("");
      const tags = ref(["Vue", "Storybook", "DobruniaUI"]);

      const addTag = () => {
        const next = draft.value.trim();
        if (!next) return;
        if (!tags.value.includes(next)) tags.value.push(next);
        draft.value = "";
      };

      const removeTag = (tag: string) => {
        tags.value = tags.value.filter((item) => item !== tag);
      };

      const onKeydown = (event: KeyboardEvent) => {
        if (event.key === "Enter") {
          event.preventDefault();
          addTag();
        }
        if (event.key === "Backspace" && !draft.value && tags.value.length) {
          tags.value = tags.value.slice(0, -1);
        }
      };

      return { draft, tags, addTag, removeTag, onKeydown };
    },
    template: `
      <div style="display:grid; gap:10px; max-width: 520px;">
        <div
          style="
            display:flex;
            flex-wrap:wrap;
            gap:8px;
            align-items:center;
            min-height: var(--dbru-control-height-md);
            padding: var(--dbru-space-2) var(--dbru-space-3);
            border: var(--dbru-border-size-1) solid var(--dbru-color-border);
            border-radius: var(--dbru-radius-md);
            background: var(--dbru-color-surface);
          "
        >
          <DbrChip
            v-for="tag in tags"
            :key="tag"
            type="removable"
            variant="ghost"
            :removeAriaLabel="'Remove tag ' + tag"
            @remove="removeTag(tag)"
          >
            {{ tag }}
          </DbrChip>
          <input
            v-model="draft"
            class="dbru-text-base dbru-text-main"
            placeholder="Type tag and press Enter"
            style="
              border: none;
              outline: none;
              background: transparent;
              min-width: 140px;
              flex: 1 1 140px;
            "
            @keydown="onKeydown"
          />
        </div>
      </div>
    `
  })
};
