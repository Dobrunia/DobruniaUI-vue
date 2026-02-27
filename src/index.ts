import "./styles/index.css";

/**
 * Button component with variants and sizes.
 * Use it for primary actions across the UI.
 */
export { default as DbrButton } from "./components/DbrButton/DbrButton.vue";
/**
 * Props for the DbrButton component.
 */
export type {
  DbrButtonProps,
  DbrButtonSize,
  DbrButtonVariant
} from "./components/DbrButton/DbrButton.types";
/**
 * Loader component with animated "eyes".
 * Use it to indicate background activity.
 */
export { default as DbrEyesLoader } from "./components/DbrEyesLoader/DbrEyesLoader.vue";
/**
 * Props for the DbrEyesLoader component.
 */
export type { DbrEyesLoaderProps } from "./components/DbrEyesLoader/DbrEyesLoader.types";
/**
 * Base dot spinner loader.
 * Use it to indicate background activity.
 */
export { default as DbrLoader } from "./components/DbrLoader/DbrLoader.vue";
/**
 * Props for the DbrLoader component.
 */
export type { DbrLoaderProps } from "./components/DbrLoader/DbrLoader.types";
/**
 * Terminal style loader with typing cursor.
 * Use it to convey scripted or developer-focused activity.
 */
export { default as DbrTerminalLoader } from "./components/DbrTerminalLoader/DbrTerminalLoader.vue";
/**
 * Props for the DbrTerminalLoader component.
 */
export type { DbrTerminalLoaderProps } from "./components/DbrTerminalLoader/DbrTerminalLoader.types";
/**
 * Checkbox component with optional label.
 * Use it for binary choices and form inputs.
 */
export { default as DbrCheckbox } from "./components/DbrCheckbox/DbrCheckbox.vue";
/**
 * Props for the DbrCheckbox component.
 */
export type { DbrCheckboxProps } from "./components/DbrCheckbox/DbrCheckbox.types";
/**
 * Toggle icon switch (hamburger to close).
 * Use it for compact on/off controls.
 */
export { default as DbrToggle } from "./components/DbrToggle/DbrToggle.vue";
/**
 * Props for the DbrToggle component.
 */
export type { DbrToggleProps } from "./components/DbrToggle/DbrToggle.types";
/**
 * Base input with floating label.
 * Use it for text entry in forms.
 */
export { default as DbrInput } from "./components/DbrInput/DbrInput.vue";
/**
 * Props for the DbrInput component.
 */
export type { DbrInputProps } from "./components/DbrInput/DbrInput.types";
/**
 * Tooltip component with info icon.
 * Use it to show short helper text on hover.
 */
export { default as DbrTooltip } from "./components/DbrTooltip/DbrTooltip.vue";
/**
 * Props for the DbrTooltip component.
 */
export type { DbrTooltipProps } from "./components/DbrTooltip/DbrTooltip.types";
/**
 * Avatar component with image or initials fallback.
 * Use it to represent a user or entity.
 */
export { default as DbrAvatar } from "./components/DbrAvatar/DbrAvatar.vue";
/**
 * Props for the DbrAvatar component.
 */
export type { DbrAvatarProps } from "./components/DbrAvatar/DbrAvatar.types";
/**
 * Badge component for short status labels.
 * Use it to highlight small pieces of information.
 */
export { default as DbrBadge } from "./components/DbrBadge/DbrBadge.vue";
/**
 * Props for the DbrBadge component.
 */
export type {
  DbrBadgeProps,
  DbrBadgeVariant,
} from "./components/DbrBadge/DbrBadge.types";
/**
 * Button with optional icons and text label.
 * Use slots to provide SVG icons.
 */
export { default as DbrIconButton } from "./components/DbrIconButton/DbrIconButton.vue";
/**
 * Props for the DbrIconButton component.
 */
export type {
  DbrIconButtonProps,
  DbrIconButtonSize,
  DbrIconButtonVariant
} from "./components/DbrIconButton/DbrIconButton.types";
/**
 * Chat list item for a single dialog.
 */
export { default as DbrChatListItem } from "./components/DbrChatListItem/DbrChatListItem.vue";
/**
 * Skeleton for chat list item.
 */
/**
 * Props for the DbrChatListItem component.
 */
export type {
  DbrChatListItemProps,
  DbrMessageStatus,
  DbrMessageType,
  DbrPresence
} from "./components/DbrChatListItem/DbrChatListItem.types";
/**
 * Chat message bubble component.
 */
export { default as DbrChatBubble } from "./components/DbrChatBubble/DbrChatBubble.vue";
/**
 * Props for the DbrChatBubble component.
 */
export type {
  DbrChatBubbleProps,
  DbrChatBubbleDirection,
  DbrChatBubbleStatus,
  DbrChatBubbleKind
} from "./components/DbrChatBubble/DbrChatBubble.types";
/**
 * Chat composer with attachments and send behavior.
 */
export { default as DbrChatComposer } from "./components/DbrChatComposer/DbrChatComposer.vue";
/**
 * Props for the DbrChatComposer component.
 */
export type {
  DbrChatComposerProps,
  DbrChatAttachment,
  DbrAttachmentKind
} from "./components/DbrChatComposer/DbrChatComposer.types";
/**
 * Theme toggle button.
 */
export { default as DbrThemeToggle } from "./components/DbrThemeToggle/DbrThemeToggle.vue";
/**
 * Props for the DbrThemeToggle component.
 */
export type { DbrThemeToggleProps } from "./components/DbrThemeToggle/DbrThemeToggle.types";
/**
 * Neumorphic card container.
 */
export { default as DbrCard } from "./components/DbrCard/DbrCard.vue";
/**
 * Props for the DbrCard component.
 */
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
