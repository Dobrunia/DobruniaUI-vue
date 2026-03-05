import type { Meta, StoryObj } from "@storybook/vue3";
import DbrAvatar from "../components/DbrAvatar/DbrAvatar.vue";
import DbrBadge from "../components/DbrBadge/DbrBadge.vue";
import DbrButton from "../components/DbrButton/DbrButton.vue";
import DbrCard from "../components/DbrCard/DbrCard.vue";
import DbrChatBubble from "../components/DbrChatBubble/DbrChatBubble.vue";
import DbrChatComposer from "../components/DbrChatComposer/DbrChatComposer.vue";
import DbrChatListItem from "../components/DbrChatListItem/DbrChatListItem.vue";
import DbrCheckbox from "../components/DbrCheckbox/DbrCheckbox.vue";
import DbrEyesLoader from "../components/DbrEyesLoader/DbrEyesLoader.vue";
import DbrIconButton from "../components/DbrIconButton/DbrIconButton.vue";
import DbrInput from "../components/DbrInput/DbrInput.vue";
import DbrLoader from "../components/DbrLoader/DbrLoader.vue";
import DbrTerminalLoader from "../components/DbrTerminalLoader/DbrTerminalLoader.vue";
import DbrThemeToggle from "../components/DbrThemeToggle/DbrThemeToggle.vue";
import DbrToggle from "../components/DbrToggle/DbrToggle.vue";
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
      DbrCard,
      DbrChatBubble,
      DbrChatComposer,
      DbrChatListItem,
      DbrCheckbox,
      DbrEyesLoader,
      DbrIconButton,
      DbrInput,
      DbrLoader,
      DbrTerminalLoader,
      DbrThemeToggle,
      DbrToggle,
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
          <div style="display:flex; flex-wrap:wrap; gap:10px; margin-top:10px;">
            <DbrIconButton variant="primary" label="Edit">
              <template #iconBefore>✏️</template>
            </DbrIconButton>
            <DbrIconButton variant="ghost" label="">
              <template #iconBefore>⚙️</template>
            </DbrIconButton>
          </div>
        </section>

        <section class="dbru-surface" style="padding:14px; border:1px solid var(--dbru-color-border); border-radius: var(--dbru-radius-md);">
          <h4 class="dbru-text-base dbru-text-main">Inputs</h4>
          <div style="display:grid; gap:10px; margin-top:10px;">
            <DbrInput label="Email" model-value="user@mail.com" />
            <DbrInput label="Password" type="password" model-value="secret123" />
            <div style="display:flex; flex-wrap:wrap; gap:10px;">
              <DbrCheckbox label="Remember me" />
              <DbrToggle label="Notifications" />
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
