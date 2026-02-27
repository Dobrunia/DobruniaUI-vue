import type { Meta, StoryObj } from "@storybook/vue3";
import DbrChatListItem from "./DbrChatListItem.vue";

const meta: Meta<typeof DbrChatListItem> = {
  title: "Chat/List Item",
  component: DbrChatListItem,
  tags: ['autodocs'],
  args: {
    name: "Alex Johnson",
    lastMessage: { text: "Hey! Are you coming today?", type: "text" },
    timestamp: new Date(),
    messageStatus: "read",
    isOutgoing: true,
    status: "online",
    unreadCount: 0,
    isTyping: false,
    loading: false
  },
  argTypes: {
    name: { control: "text" },
    lastMessage: { control: "object" },
    timestamp: { control: "text" },
    messageStatus: {
      control: "select",
      options: ["unread", "read", "error"]
    },
    isOutgoing: { control: "boolean" },
    unreadCount: { control: "number" },
    status: {
      control: "select",
      options: ["online", "away", "offline"]
    },
    isTyping: { control: "boolean" },
    loading: { control: "boolean" }
  }
};

export default meta;
type Story = StoryObj<typeof DbrChatListItem>;

export const Playground: Story = {
  parameters: {
    docs: {
      description: {
        story: "Interactive playground for a single chat list item."
      }
    }
  },
  args: {
    loading: false
  },

  render: (args) => ({
    components: { DbrChatListItem },
    setup: () => ({ args }),
    template: `
      <DbrChatListItem v-bind="args" />
    `
  })
};

export const Showcase: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Incoming vs outgoing with read/unread, typing, error, and unread badge."
      }
    }
  },
  render: () => ({
    components: { DbrChatListItem },
    template: `
      <div style="display:grid; gap:12px; max-width: 420px;">
        <div style="font-weight: 600;">Incoming</div>
        <DbrChatListItem
          name="Mia Wallace"
          :lastMessage="{ text: 'Hey, are you there?', type: 'text' }"
          :timestamp="new Date()"
          :messageStatus="'unread'"
          :isOutgoing="false"
          status="online"
          :unreadCount="3"
        />
        <DbrChatListItem
          name="John Doe"
          :lastMessage="{ text: 'Ok, see you soon.', type: 'text' }"
          :timestamp="new Date()"
          :messageStatus="'read'"
          :isOutgoing="false"
          status="away"
        />
        <DbrChatListItem
          name="Clara Oswald"
          :lastMessage="{ text: '', type: 'image' }"
          :timestamp="new Date()"
          :messageStatus="'read'"
          :isOutgoing="false"
          status="online"
        />
        <DbrChatListItem
          name="Mia Wallace"
          :lastMessage="{ text: '...', type: 'text' }"
          :timestamp="new Date()"
          :messageStatus="'unread'"
          :isOutgoing="false"
          status="online"
          :isTyping="true"
          :unreadCount="0"
        />

        <div style="font-weight: 600; margin-top: 8px;">Outgoing</div>
        <DbrChatListItem
          name="Alex Johnson"
          :lastMessage="{ text: 'Got it!', type: 'text' }"
          :timestamp="new Date()"
          :messageStatus="'unread'"
          :isOutgoing="true"
          status="offline"
        />
        <DbrChatListItem
          name="Alex Johnson"
          :lastMessage="{ text: 'See you!', type: 'text' }"
          :timestamp="new Date()"
          :messageStatus="'read'"
          :isOutgoing="true"
          status="offline"
        />
        <DbrChatListItem
          name="Sam Green"
          :lastMessage="{ text: '', type: 'voice' }"
          :timestamp="new Date()"
          :messageStatus="'error'"
          :isOutgoing="true"
          status="online"
        />

        <div style="font-weight: 600; margin-top: 8px;">Loading</div>
        <DbrChatListItem :loading="true" />
      </div>
    `
  })
};
