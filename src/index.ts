import "./styles/index.css";
import type { App } from "vue";

import DbrButton from "./components/DbrButton/DbrButton.vue";
import DbrIconButton from "./components/DbrIconButton/DbrIconButton.vue";
import DbrButtonGroup from "./components/DbrButtonGroup/DbrButtonGroup.vue";
import DbrEyesLoader from "./components/DbrEyesLoader/DbrEyesLoader.vue";
import DbrLoader from "./components/DbrLoader/DbrLoader.vue";
import DbrTerminalLoader from "./components/DbrTerminalLoader/DbrTerminalLoader.vue";
import DbrCheckbox from "./components/DbrCheckbox/DbrCheckbox.vue";
import DbrMenuToggle from "./components/DbrMenuToggle/DbrMenuToggle.vue";
import DbrToggle from "./components/DbrToggle/DbrToggle.vue";
import DbrInput from "./components/DbrInput/DbrInput.vue";
import DbrTextarea from "./components/DbrTextarea/DbrTextarea.vue";
import DbrSelect from "./components/DbrSelect/DbrSelect.vue";
import DbrTooltip from "./components/DbrTooltip/DbrTooltip.vue";
import DbrAvatar from "./components/DbrAvatar/DbrAvatar.vue";
import DbrBadge from "./components/DbrBadge/DbrBadge.vue";
import DbrChip from "./components/DbrChip/DbrChip.vue";
import DbrChatListItem from "./components/DbrChatListItem/DbrChatListItem.vue";
import DbrChatBubble from "./components/DbrChatBubble/DbrChatBubble.vue";
import DbrChatComposer from "./components/DbrChatComposer/DbrChatComposer.vue";
import DbrThemeToggle from "./components/DbrThemeToggle/DbrThemeToggle.vue";
import DbrCard from "./components/DbrCard/DbrCard.vue";
import DbrRadio from "./components/DbrRadio/DbrRadio.vue";
import DbrSkeleton from "./components/DbrSkeleton/DbrSkeleton.vue";
import DbrText from "./components/DbrText/DbrText.vue";

export {
  DbrButton,
  DbrIconButton,
  DbrButtonGroup,
  DbrEyesLoader,
  DbrLoader,
  DbrTerminalLoader,
  DbrCheckbox,
  DbrMenuToggle,
  DbrToggle,
  DbrInput,
  DbrTextarea,
  DbrSelect,
  DbrTooltip,
  DbrAvatar,
  DbrBadge,
  DbrChip,
  DbrChatListItem,
  DbrChatBubble,
  DbrChatComposer,
  DbrThemeToggle,
  DbrCard,
  DbrRadio,
  DbrSkeleton,
  DbrText,
};

export type { DbrButtonProps, DbrButtonSize, DbrButtonVariant } from "./components/DbrButton/DbrButton.types";
export type {
  DbrIconButtonProps,
  DbrIconButtonSize,
  DbrIconButtonVariant,
  DbrIconButtonIconColor,
} from "./components/DbrIconButton/DbrIconButton.types";
export type { DbrButtonGroupProps, DbrButtonGroupOption, DbrButtonGroupSize, DbrButtonGroupValue } from "./components/DbrButtonGroup/DbrButtonGroup.types";
export type { DbrLoaderProps } from "./components/DbrLoader/DbrLoader.types";
export type { DbrCheckboxProps } from "./components/DbrCheckbox/DbrCheckbox.types";
export type { DbrMenuToggleProps } from "./components/DbrMenuToggle/DbrMenuToggle.types";
export type { DbrToggleProps } from "./components/DbrToggle/DbrToggle.types";
export type { DbrInputProps } from "./components/DbrInput/DbrInput.types";
export type { DbrTextareaProps, DbrTextareaResize } from "./components/DbrTextarea/DbrTextarea.types";
export type { DbrSelectProps, DbrSelectOption, DbrSelectSize, DbrSelectValue } from "./components/DbrSelect/DbrSelect.types";
export type { DbrTooltipProps } from "./components/DbrTooltip/DbrTooltip.types";
export type { DbrAvatarProps } from "./components/DbrAvatar/DbrAvatar.types";
export type { DbrBadgeProps, DbrBadgeVariant } from "./components/DbrBadge/DbrBadge.types";
export type { DbrChipProps, DbrChipVariant } from "./components/DbrChip/DbrChip.types";
export type { DbrChatListItemProps, DbrMessageStatus, DbrMessageType, DbrPresence } from "./components/DbrChatListItem/DbrChatListItem.types";
export type { DbrChatBubbleProps, DbrChatBubbleDirection, DbrChatBubbleStatus, DbrChatBubbleKind } from "./components/DbrChatBubble/DbrChatBubble.types";
export type { DbrChatComposerProps, DbrChatAttachment, DbrAttachmentKind } from "./components/DbrChatComposer/DbrChatComposer.types";
export type { DbrThemeToggleProps } from "./components/DbrThemeToggle/DbrThemeToggle.types";
export type { DbrCardProps, DbrCardVariant } from "./components/DbrCard/DbrCard.types";
export type { DbrRadioProps, DbrRadioValue } from "./components/DbrRadio/DbrRadio.types";
export type { DbrSkeletonProps } from "./components/DbrSkeleton/DbrSkeleton.types";
export type {
  DbrTextProps,
  DbrTextSize,
  DbrTextWeight,
  DbrTextColor,
  DbrTextLineHeight,
  DbrTextAlign,
  DbrTextTransform,
  DbrTextDecoration,
  DbrTextFontStyle,
  DbrTextWrap,
  DbrTextLetterSpacing,
} from "./components/DbrText/DbrText.types";

export default {
  install(app: App) {
    app.component("DbrButton", DbrButton);
    app.component("DbrIconButton", DbrIconButton);
    app.component("DbrButtonGroup", DbrButtonGroup);
    app.component("DbrEyesLoader", DbrEyesLoader);
    app.component("DbrLoader", DbrLoader);
    app.component("DbrTerminalLoader", DbrTerminalLoader);
    app.component("DbrCheckbox", DbrCheckbox);
    app.component("DbrMenuToggle", DbrMenuToggle);
    app.component("DbrToggle", DbrToggle);
    app.component("DbrInput", DbrInput);
    app.component("DbrTextarea", DbrTextarea);
    app.component("DbrSelect", DbrSelect);
    app.component("DbrTooltip", DbrTooltip);
    app.component("DbrAvatar", DbrAvatar);
    app.component("DbrBadge", DbrBadge);
    app.component("DbrChip", DbrChip);
    app.component("DbrChatListItem", DbrChatListItem);
    app.component("DbrChatBubble", DbrChatBubble);
    app.component("DbrChatComposer", DbrChatComposer);
    app.component("DbrThemeToggle", DbrThemeToggle);
    app.component("DbrCard", DbrCard);
    app.component("DbrRadio", DbrRadio);
    app.component("DbrSkeleton", DbrSkeleton);
    app.component("DbrText", DbrText);
  },
};
