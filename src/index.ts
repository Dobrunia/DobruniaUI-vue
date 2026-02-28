import "./styles/index.css";
export { default as DbrButton } from "./components/DbrButton/DbrButton.vue";
export type {
  DbrButtonProps,
  DbrButtonSize,
  DbrButtonVariant
} from "./components/DbrButton/DbrButton.types";
export { default as DbrEyesLoader } from "./components/DbrEyesLoader/DbrEyesLoader.vue";
export type { DbrEyesLoaderProps } from "./components/DbrEyesLoader/DbrEyesLoader.types";
export { default as DbrLoader } from "./components/DbrLoader/DbrLoader.vue";
export type { DbrLoaderProps } from "./components/DbrLoader/DbrLoader.types";
export { default as DbrTerminalLoader } from "./components/DbrTerminalLoader/DbrTerminalLoader.vue";
export type { DbrTerminalLoaderProps } from "./components/DbrTerminalLoader/DbrTerminalLoader.types";
export { default as DbrCheckbox } from "./components/DbrCheckbox/DbrCheckbox.vue";
export type { DbrCheckboxProps } from "./components/DbrCheckbox/DbrCheckbox.types";
export { default as DbrToggle } from "./components/DbrToggle/DbrToggle.vue";
export type { DbrToggleProps } from "./components/DbrToggle/DbrToggle.types";
export { default as DbrInput } from "./components/DbrInput/DbrInput.vue";
export type { DbrInputProps } from "./components/DbrInput/DbrInput.types";
export { default as DbrTooltip } from "./components/DbrTooltip/DbrTooltip.vue";
export type { DbrTooltipProps } from "./components/DbrTooltip/DbrTooltip.types";
export { default as DbrAvatar } from "./components/DbrAvatar/DbrAvatar.vue";
export type { DbrAvatarProps } from "./components/DbrAvatar/DbrAvatar.types";
export { default as DbrBadge } from "./components/DbrBadge/DbrBadge.vue";
export type {
  DbrBadgeProps,
  DbrBadgeVariant,
} from "./components/DbrBadge/DbrBadge.types";
export { default as DbrIconButton } from "./components/DbrIconButton/DbrIconButton.vue";
export type {
  DbrIconButtonProps,
  DbrIconButtonSize,
  DbrIconButtonVariant
} from "./components/DbrIconButton/DbrIconButton.types";
export { default as DbrChatListItem } from "./components/DbrChatListItem/DbrChatListItem.vue";
export type {
  DbrChatListItemProps,
  DbrMessageStatus,
  DbrMessageType,
  DbrPresence
} from "./components/DbrChatListItem/DbrChatListItem.types";
export { default as DbrChatBubble } from "./components/DbrChatBubble/DbrChatBubble.vue";
export type {
  DbrChatBubbleProps,
  DbrChatBubbleDirection,
  DbrChatBubbleStatus,
  DbrChatBubbleKind
} from "./components/DbrChatBubble/DbrChatBubble.types";
export { default as DbrChatComposer } from "./components/DbrChatComposer/DbrChatComposer.vue";
export type {
  DbrChatComposerProps,
  DbrChatAttachment,
  DbrAttachmentKind
} from "./components/DbrChatComposer/DbrChatComposer.types";
export { default as DbrThemeToggle } from "./components/DbrThemeToggle/DbrThemeToggle.vue";
export type { DbrThemeToggleProps } from "./components/DbrThemeToggle/DbrThemeToggle.types";
export { default as DbrCard } from "./components/DbrCard/DbrCard.vue";
export type { DbrCardProps, DbrCardVariant } from "./components/DbrCard/DbrCard.types";

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

export default {
  install(app: import("vue").App) {
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
  }
};
