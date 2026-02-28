export type DbrAttachmentKind = "image" | "file" | "audio";

export interface DbrChatAttachment {
  id: string;
  name: string;
  size: number;
  kind: DbrAttachmentKind;
  url?: string;
  file: File;
}

export interface DbrChatComposerProps {
  /**
   * Message text for v-model.
   * @default ""
   */
  modelValue?: string;
  /**
   * Placeholder text for the input.
   * @default "Message"
   */
  placeholder?: string;
  /**
   * Accessible label for the textarea.
   * @default "Message"
   */
  ariaLabel?: string;
  /**
   * Disable composer controls.
   * @default false
   */
  disabled?: boolean;
  /**
   * Max height for auto-growing textarea (px).
   * @default 120
   */
  maxHeight?: number;
}
