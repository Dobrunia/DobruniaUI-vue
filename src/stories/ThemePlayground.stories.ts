import type { Meta, StoryObj } from "@storybook/vue3";
import { ref } from "vue";
import DbrAvatar from "../components/DbrAvatar/DbrAvatar.vue";
import DbrBadge from "../components/DbrBadge/DbrBadge.vue";
import DbrChip from "../components/DbrChip/DbrChip.vue";
import DbrButton from "../components/DbrButton/DbrButton.vue";
import DbrIconButton from "../components/DbrIconButton/DbrIconButton.vue";
import DbrButtonGroup from "../components/DbrButtonGroup/DbrButtonGroup.vue";
import DbrCard from "../components/DbrCard/DbrCard.vue";
import DbrChatBubble from "../components/DbrChatBubble/DbrChatBubble.vue";
import DbrChatComposer from "../components/DbrChatComposer/DbrChatComposer.vue";
import DbrChatListItem from "../components/DbrChatListItem/DbrChatListItem.vue";
import DbrCheckbox from "../components/DbrCheckbox/DbrCheckbox.vue";
import DbrEyesLoader from "../components/DbrEyesLoader/DbrEyesLoader.vue";
import DbrInput from "../components/DbrInput/DbrInput.vue";
import DbrTextarea from "../components/DbrTextarea/DbrTextarea.vue";
import DbrSelect from "../components/DbrSelect/DbrSelect.vue";
import DbrLoader from "../components/DbrLoader/DbrLoader.vue";
import DbrMenuToggle from "../components/DbrMenuToggle/DbrMenuToggle.vue";
import DbrToggle from "../components/DbrToggle/DbrToggle.vue";
import DbrRadio from "../components/DbrRadio/DbrRadio.vue";
import DbrSkeleton from "../components/DbrSkeleton/DbrSkeleton.vue";
import DbrTerminalLoader from "../components/DbrTerminalLoader/DbrTerminalLoader.vue";
import DbrThemeToggle from "../components/DbrThemeToggle/DbrThemeToggle.vue";
import DbrTooltip from "../components/DbrTooltip/DbrTooltip.vue";
import DbrText from "../components/DbrText/DbrText.vue";

const meta: Meta = {
  title: "Foundations/Theme Playground",
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj;

export const AllComponents: Story = {
  render: () => ({
    setup() {
      const rememberMe = ref(false);
      const autoUpdates = ref(false);
      const menuOpen = ref(false);
      const shape = ref("line");
      const section = ref("components");
      const darkTheme = ref(false);
      const sectionOptions = [
        { label: "Components", value: "components" },
        { label: "Tokens", value: "tokens" },
        { label: "Stories", value: "stories" },
      ];
      return { rememberMe, autoUpdates, menuOpen, shape, section, sectionOptions, darkTheme };
    },
    components: {
      DbrAvatar,
      DbrBadge,
      DbrChip,
      DbrButton,
      DbrIconButton,
      DbrButtonGroup,
      DbrCard,
      DbrChatBubble,
      DbrChatComposer,
      DbrChatListItem,
      DbrCheckbox,
      DbrEyesLoader,
      DbrInput,
      DbrTextarea,
      DbrSelect,
      DbrLoader,
      DbrMenuToggle,
      DbrToggle,
      DbrRadio,
      DbrSkeleton,
      DbrTerminalLoader,
      DbrThemeToggle,
      DbrTooltip,
      DbrText,
    },
    template: `
      <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap:16px; align-items:start;">
        <section class="dbru-surface" style="padding:14px; border:1px solid var(--dbru-color-border); border-radius: var(--dbru-radius-md);">
          <DbrText>Buttons</DbrText>
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
            <DbrIconButton aria-label="Settings" size="md">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
                <path d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z" stroke="currentColor" stroke-width="2"/>
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9c.26.6.77 1 1.39 1.51H21a2 2 0 1 1 0 4h-.09c-.62 0-1.13.4-1.39 1Z" stroke="currentColor" stroke-width="2"/>
              </svg>
            </DbrIconButton>
          </div>
        </section>

        <section class="dbru-surface" style="padding:14px; border:1px solid var(--dbru-color-border); border-radius: var(--dbru-radius-md);">
          <DbrText>Inputs</DbrText>
          <div style="display:grid; gap:10px; margin-top:10px;">
            <DbrInput label="Email" model-value="user@mail.com" />
            <DbrInput label="Password" type="password" model-value="secret123" />
            <DbrSelect v-model="section" label="Section" :options="sectionOptions" />
            <DbrTextarea label="Message" placeholder="Write a message..." model-value="Textarea content" height="120px" />
            <div style="display:flex; flex-wrap:wrap; gap:10px;">
              <DbrCheckbox v-model="rememberMe" label="Remember me" />
              <DbrToggle v-model="autoUpdates" label="Auto updates" />
              <DbrMenuToggle v-model="menuOpen" label="Mobile menu" />
            </div>
            <div
              role="radiogroup"
              aria-label="Shape"
              style="display:flex; flex-wrap:wrap; gap:16px; align-items:center;"
            >
              <DbrRadio v-model="shape" name="theme-playground-shape" value="line" label="Line" />
              <DbrRadio v-model="shape" name="theme-playground-shape" value="rectangle" label="Rectangle" />
              <DbrRadio v-model="shape" name="theme-playground-shape" value="ellipse" label="Ellipse" />
            </div>
          </div>
        </section>

        <section class="dbru-surface" style="padding:14px; border:1px solid var(--dbru-color-border); border-radius: var(--dbru-radius-md);">
          <DbrText>Identity</DbrText>
          <div style="display:flex; flex-wrap:wrap; gap:10px; margin-top:10px; align-items:center;">
            <DbrAvatar name="Jane Doe" size="sm" />
            <DbrAvatar name="Jane Doe" size="md" shape="rounded" />
            <DbrAvatar name="Jane Doe" size="lg" />
            <DbrChip variant="primary">New</DbrChip>
            <DbrBadge variant="danger">
              <DbrButton variant="ghost" size="sm">Inbox</DbrButton>
              <template #badge>3</template>
            </DbrBadge>
          </div>
          <div style="display:flex; flex-wrap:wrap; gap:10px; margin-top:10px; align-items:center;">
            <DbrTooltip text="Theme helper" variant="info" />
            <DbrThemeToggle v-model="darkTheme" />
          </div>
        </section>

        <section class="dbru-surface" style="padding:14px; border:1px solid var(--dbru-color-border); border-radius: var(--dbru-radius-md);">
          <DbrText>Cards And Loaders</DbrText>
          <DbrCard hoverable style="margin-top:10px;">
            <div style="display:grid; gap:10px;">
              <DbrText>Card content</DbrText>
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
          <DbrText>Chat</DbrText>
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
