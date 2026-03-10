import type { Meta, StoryObj } from "@storybook/vue3";
import DbrAvatar from "../components/DbrAvatar/DbrAvatar.vue";
import DbrBadge from "../components/DbrBadge/DbrBadge.vue";
import DbrButton from "../components/DbrButton/DbrButton.vue";
import DbrButtonGroup from "../components/DbrButtonGroup/DbrButtonGroup.vue";
import DbrCard from "../components/DbrCard/DbrCard.vue";
import DbrChatBubble from "../components/DbrChatBubble/DbrChatBubble.vue";
import DbrChatComposer from "../components/DbrChatComposer/DbrChatComposer.vue";
import DbrChatListItem from "../components/DbrChatListItem/DbrChatListItem.vue";
import DbrCheckbox from "../components/DbrCheckbox/DbrCheckbox.vue";
import DbrEyesLoader from "../components/DbrEyesLoader/DbrEyesLoader.vue";
import DbrInput from "../components/DbrInput/DbrInput.vue";
import DbrLoader from "../components/DbrLoader/DbrLoader.vue";
import DbrMenuToggle from "../components/DbrMenuToggle/DbrMenuToggle.vue";
import DbrRadio from "../components/DbrRadio/DbrRadio.vue";
import DbrSkeleton from "../components/DbrSkeleton/DbrSkeleton.vue";
import DbrTerminalLoader from "../components/DbrTerminalLoader/DbrTerminalLoader.vue";
import DbrThemeToggle from "../components/DbrThemeToggle/DbrThemeToggle.vue";
import DbrTooltip from "../components/DbrTooltip/DbrTooltip.vue";

const meta: Meta = {
  title: "Foundations/Theme Playground",
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj;

export const AllComponents: Story = {
  render: () => ({
    components: {
      DbrAvatar,
      DbrBadge,
      DbrButton,
      DbrButtonGroup,
      DbrCard,
      DbrChatBubble,
      DbrChatComposer,
      DbrChatListItem,
      DbrCheckbox,
      DbrEyesLoader,
      DbrInput,
      DbrLoader,
      DbrMenuToggle,
      DbrRadio,
      DbrSkeleton,
      DbrTerminalLoader,
      DbrThemeToggle,
      DbrTooltip,
    },
    template: `
      <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap:16px; align-items:start;">
        <section class="dbru-surface" style="padding:14px; border:1px solid var(--dbru-color-border); border-radius: var(--dbru-radius-md);">
          <h4 class="dbru-text-base dbru-text-main">Buttons</h4>
          <div style="display:flex; flex-wrap:wrap; gap:10px; margin-top:10px;">
            <DbrButton variant="primary">Primary</DbrButton>
            <DbrButton variant="ghost">Ghost</DbrButton>
            <DbrButton variant="danger">Danger</DbrButton>
          </div>
          <div style="margin-top:10px;">
            <DbrButtonGroup
              :model-value="'ellipse'"
              :options="[
                { label: 'Line', value: 'line' },
                { label: 'Rectangle', value: 'rectangle' },
                { label: 'Ellipse', value: 'ellipse' }
              ]"
            />
          </div>
          <div style="display:flex; flex-wrap:wrap; gap:10px; margin-top:10px;">
            <DbrButton variant="primary">
              <span style="display:inline-flex; align-items:center; gap:8px;">
                <span>✏️</span>
                <span>Edit</span>
              </span>
            </DbrButton>
            <DbrButton variant="ghost" style="width: 40px; padding: 0;">
              ⚙️
            </DbrButton>
          </div>
        </section>

        <section class="dbru-surface" style="padding:14px; border:1px solid var(--dbru-color-border); border-radius: var(--dbru-radius-md);">
          <h4 class="dbru-text-base dbru-text-main">Inputs</h4>
          <div style="display:grid; gap:10px; margin-top:10px;">
            <DbrInput label="Email" model-value="user@mail.com" />
            <DbrInput label="Password" type="password" model-value="secret123" />
            <div style="display:flex; flex-wrap:wrap; gap:10px;">
              <DbrCheckbox label="Remember me" />
              <DbrMenuToggle label="Mobile menu" />
            </div>
            <div style="display:flex; flex-wrap:wrap; gap:16px; align-items:center;">
              <DbrRadio name="theme-playground-shape" value="line" label="Line" />
              <DbrRadio name="theme-playground-shape" value="rectangle" label="Rectangle" />
              <DbrRadio name="theme-playground-shape" value="ellipse" label="Ellipse" />
            </div>
          </div>
        </section>

        <section class="dbru-surface" style="padding:14px; border:1px solid var(--dbru-color-border); border-radius: var(--dbru-radius-md);">
          <h4 class="dbru-text-base dbru-text-main">Identity</h4>
          <div style="display:flex; flex-wrap:wrap; gap:10px; margin-top:10px; align-items:center;">
            <DbrAvatar name="Jane Doe" size="sm" />
            <DbrAvatar name="Jane Doe" size="md" shape="rounded" />
            <DbrAvatar name="Jane Doe" size="lg" />
            <DbrBadge text="New" variant="primary" />
          </div>
          <div style="display:flex; flex-wrap:wrap; gap:10px; margin-top:10px; align-items:center;">
            <DbrTooltip text="Theme helper" variant="info" />
            <DbrThemeToggle />
          </div>
        </section>

        <section class="dbru-surface" style="padding:14px; border:1px solid var(--dbru-color-border); border-radius: var(--dbru-radius-md);">
          <h4 class="dbru-text-base dbru-text-main">Cards And Loaders</h4>
          <DbrCard hoverable style="margin-top:10px;">
            <div style="display:grid; gap:10px;">
              <span class="dbru-text-base dbru-text-main">Card content</span>
              <div style="display:flex; flex-wrap:wrap; gap:10px; align-items:center;">
                <DbrLoader size="sm" />
                <DbrEyesLoader />
                <DbrTerminalLoader />
                <DbrSkeleton width="64px" height="10px" radius="6px" />
              </div>
            </div>
          </DbrCard>
        </section>

        <section class="dbru-surface" style="padding:14px; border:1px solid var(--dbru-color-border); border-radius: var(--dbru-radius-md);">
          <h4 class="dbru-text-base dbru-text-main">Chat</h4>
          <div style="display:grid; gap:10px; margin-top:10px;">
            <DbrChatListItem
              name="Support"
              :last-message="{ text: 'How can I help?', type: 'text' }"
              status="online"
              :unread-count="2"
            />
            <DbrChatBubble text="Hello!" time="11:20" direction="in" status="none" />
            <DbrChatBubble text="Hi, on my way." time="11:23" direction="out" status="sent" />
            <DbrChatComposer model-value="" placeholder="Write a message..." />
          </div>
        </section>
      </div>
    `,
  }),
};
