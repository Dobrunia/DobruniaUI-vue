export type DbrChatBubbleDirection = "in" | "out";
export type DbrChatBubbleStatus = "none" | "sent" | "read";
export type DbrChatBubbleKind = "text" | "image" | "audio";

export interface DbrChatBubbleProps {
  /**
   * Message text.
   */
  text?: string;
  /**
   * Message kind.
   */
  kind?: DbrChatBubbleKind;
  /**
   * Media source (image or audio).
   */
  mediaSrc?: string;
  /**
   * Time label.
   */
  time?: string;
  /**
   * Direction of the message.
   */
  direction?: DbrChatBubbleDirection;
  /**
   * Message status for checkmarks.
   */
  status?: DbrChatBubbleStatus;
}
