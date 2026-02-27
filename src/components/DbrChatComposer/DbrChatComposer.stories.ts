import type { Meta, StoryObj } from "@storybook/vue3";
import { computed, ref } from "vue";
import DbrChatComposer from "./DbrChatComposer.vue";
import DbrChatBubble from "../DbrChatBubble/DbrChatBubble.vue";

const meta: Meta<typeof DbrChatComposer> = {
  title: "Chat/Composer",
  component: DbrChatComposer,
  args: {
    placeholder: "Message",
    disabled: false
  },
  argTypes: {
    placeholder: { control: "text" },
    disabled: { control: "boolean" }
  }
};

export default meta;
type Story = StoryObj<typeof DbrChatComposer>;

export const Playground: Story = {
  args: {
    disabled: false
  },

  render: (args) => ({
    components: { DbrChatComposer },
    setup: () => {
      const value = ref("");
      const onSend = (payload: { text: string }) => {
        value.value = "";
      };
      const composerArgs = computed(() => ({
        placeholder: args.placeholder,
        disabled: args.disabled
      }));
      return { composerArgs, value, onSend };
    },
    template: `
      <DbrChatComposer
        v-bind="composerArgs"
        v-model="value"
        @send="onSend"
      />
    `
  })
};

export const ChatDemo: Story = {
  render: (args) => ({
    components: { DbrChatComposer, DbrChatBubble },
    setup: () => {
      const value = ref("");
      const messages = ref<
        { id: number; text: string; time: string; status: "sent" | "read" }[]
      >([]);

      const composerArgs = computed(() => ({
        placeholder: args.placeholder,
        disabled: args.disabled
      }));

      const send = (payload: { text: string }) => {
        const now = new Date();
        const time = now.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit"
        });
        messages.value = [
          ...messages.value,
          { id: Date.now(), text: payload.text, time, status: "sent" }
        ];
      };

      return { composerArgs, value, messages, send };
    },
    template: `
      <div style="display:grid; gap:12px; max-width: 640px;">
        <div style="display:flex; flex-direction: column; gap:12px;">
          <DbrChatBubble
            v-for="msg in messages"
            :key="msg.id"
            :text="msg.text"
            :time="msg.time"
            direction="out"
            :status="msg.status"
          />
        </div>
        <DbrChatComposer
          v-bind="composerArgs"
          :modelValue="value"
          @update:modelValue="value = $event"
          @send="send"
        />
      </div>
    `
  })
};
