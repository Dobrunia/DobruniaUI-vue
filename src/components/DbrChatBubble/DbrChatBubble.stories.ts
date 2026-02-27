import type { Meta, StoryObj } from "@storybook/vue3";
import DbrChatBubble from "./DbrChatBubble.vue";

const audioUrl = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3";
const imageUrl = "https://cdn.fishki.net/upload/post/2021/02/16/3613245/tn/alberta-2297204-1280.jpg";

const meta: Meta<typeof DbrChatBubble> = {
  title: "Chat/Bubble",
  component: DbrChatBubble,
  args: {
    text: "Hey! Are you coming today?",
    time: "12:45",
    direction: "in",
    status: "none",
    kind: "text",
    mediaSrc: ""
  },
  argTypes: {
    text: { control: "text" },
    time: { control: "text" },
    kind: {
      control: "select",
      options: ["text", "image", "audio"]
    },
    mediaSrc: { control: "text" },
    direction: {
      control: "select",
      options: ["in", "out"]
    },
    status: {
      control: "select",
      options: ["none", "sending", "sent", "read"]
    }
  }
};

export default meta;
type Story = StoryObj<typeof DbrChatBubble>;

export const Playground: Story = {
  render: (args) => ({
    components: { DbrChatBubble },
    setup: () => ({ args }),
    template: `
      <div style="display:flex; flex-direction: column; gap:12px;">
        <DbrChatBubble v-bind="args" />
      </div>
    `
  })
};

export const Showcase: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Compact set: incoming/outgoing text, incoming photo, outgoing audio (sent/read), media-only."
      }
    }
  },
  render: () => ({
    components: { DbrChatBubble },
    setup: () => ({ imageUrl, audioUrl }),
    template: `
      <div style="display:flex; flex-direction: column; gap:16px; max-width: 720px;">
        <div style="font-weight: 600;">Text</div>
        <DbrChatBubble text="Hello!" time="11:20" direction="in" status="none" />
        <DbrChatBubble text="Hi, on my way." time="11:23" direction="out" status="sending" />

        <div style="font-weight: 600; margin-top: 8px;">Media</div>
        <DbrChatBubble
          text="Фото"
          time="11:21"
          direction="in"
          status="none"
          kind="image"
          :mediaSrc="imageUrl"
        />
        <DbrChatBubble
          text="Голосовое"
          time="11:27"
          direction="out"
          status="sent"
          kind="audio"
          :mediaSrc="audioUrl"
        />
        <div style="font-weight: 600; margin-top: 8px;">Media Only</div>
        <DbrChatBubble
          text=""
          time="11:28"
          direction="out"
          status="read"
          kind="audio"
          :mediaSrc="audioUrl"
        />
        <DbrChatBubble
          text=""
          time="11:29"
          direction="in"
          status="none"
          kind="image"
          :mediaSrc="imageUrl"
        />
      </div>
    `
  })
};
