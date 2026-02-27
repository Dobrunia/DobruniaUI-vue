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
   */
  modelValue?: string;
  /**
   * Placeholder text for the input.
   */
  placeholder?: string;
  /**
   * Accessible label for the textarea.
   */
  ariaLabel?: string;
  /**
   * Disable composer controls.
   */
  disabled?: boolean;
  /**
   * Max height for auto-growing textarea (px).
   */
  maxHeight?: number;
}
