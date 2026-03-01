import "./styles/index.css";
import type { App } from "vue";

import DbrButton from "./components/DbrButton/DbrButton.vue";
import DbrEyesLoader from "./components/DbrEyesLoader/DbrEyesLoader.vue";
import DbrLoader from "./components/DbrLoader/DbrLoader.vue";
import DbrTerminalLoader from "./components/DbrTerminalLoader/DbrTerminalLoader.vue";
import DbrCheckbox from "./components/DbrCheckbox/DbrCheckbox.vue";
import DbrToggle from "./components/DbrToggle/DbrToggle.vue";
import DbrInput from "./components/DbrInput/DbrInput.vue";
import DbrTooltip from "./components/DbrTooltip/DbrTooltip.vue";
import DbrAvatar from "./components/DbrAvatar/DbrAvatar.vue";
import DbrBadge from "./components/DbrBadge/DbrBadge.vue";
import DbrIconButton from "./components/DbrIconButton/DbrIconButton.vue";
import DbrChatListItem from "./components/DbrChatListItem/DbrChatListItem.vue";
import DbrChatBubble from "./components/DbrChatBubble/DbrChatBubble.vue";
import DbrChatComposer from "./components/DbrChatComposer/DbrChatComposer.vue";
import DbrThemeToggle from "./components/DbrThemeToggle/DbrThemeToggle.vue";
import DbrCard from "./components/DbrCard/DbrCard.vue";

export {
  DbrButton,
  DbrEyesLoader,
  DbrLoader,
  DbrTerminalLoader,
  DbrCheckbox,
  DbrToggle,
  DbrInput,
  DbrTooltip,
  DbrAvatar,
  DbrBadge,
  DbrIconButton,
  DbrChatListItem,
  DbrChatBubble,
  DbrChatComposer,
  DbrThemeToggle,
  DbrCard,
};

export type { DbrButtonProps, DbrButtonSize, DbrButtonVariant } from "./components/DbrButton/DbrButton.types";
export type { DbrLoaderProps } from "./components/DbrLoader/DbrLoader.types";
export type { DbrCheckboxProps } from "./components/DbrCheckbox/DbrCheckbox.types";
export type { DbrToggleProps } from "./components/DbrToggle/DbrToggle.types";
export type { DbrInputProps } from "./components/DbrInput/DbrInput.types";
export type { DbrTooltipProps } from "./components/DbrTooltip/DbrTooltip.types";
export type { DbrAvatarProps } from "./components/DbrAvatar/DbrAvatar.types";
export type { DbrBadgeProps, DbrBadgeVariant } from "./components/DbrBadge/DbrBadge.types";
export type { DbrIconButtonProps, DbrIconButtonSize, DbrIconButtonVariant } from "./components/DbrIconButton/DbrIconButton.types";
export type { DbrChatListItemProps, DbrMessageStatus, DbrMessageType, DbrPresence } from "./components/DbrChatListItem/DbrChatListItem.types";
export type { DbrChatBubbleProps, DbrChatBubbleDirection, DbrChatBubbleStatus, DbrChatBubbleKind } from "./components/DbrChatBubble/DbrChatBubble.types";
export type { DbrChatComposerProps, DbrChatAttachment, DbrAttachmentKind } from "./components/DbrChatComposer/DbrChatComposer.types";
export type { DbrThemeToggleProps } from "./components/DbrThemeToggle/DbrThemeToggle.types";
export type { DbrCardProps, DbrCardVariant } from "./components/DbrCard/DbrCard.types";

export default {
  install(app: App) {
    app.component("DbrButton", DbrButton);
    app.component("DbrEyesLoader", DbrEyesLoader);
    app.component("DbrLoader", DbrLoader);
    app.component("DbrTerminalLoader", DbrTerminalLoader);
    app.component("DbrCheckbox", DbrCheckbox);
    app.component("DbrToggle", DbrToggle);
    app.component("DbrInput", DbrInput);
    app.component("DbrTooltip", DbrTooltip);
    app.component("DbrAvatar", DbrAvatar);
    app.component("DbrBadge", DbrBadge);
    app.component("DbrIconButton", DbrIconButton);
    app.component("DbrChatListItem", DbrChatListItem);
    app.component("DbrChatBubble", DbrChatBubble);
    app.component("DbrChatComposer", DbrChatComposer);
    app.component("DbrThemeToggle", DbrThemeToggle);
    app.component("DbrCard", DbrCard);
  },
};
