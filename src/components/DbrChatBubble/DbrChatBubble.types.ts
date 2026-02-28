export type DbrChatBubbleDirection = "in" | "out";
export type DbrChatBubbleStatus = "none" | "sending" | "sent" | "read";
export type DbrChatBubbleKind = "text" | "image" | "audio";

export interface DbrChatBubbleProps {
  /**
   * Message text.
   * @default "Message text"
   */
  text?: string;
  /**
   * Message kind.
   * @default "text"
   */
  kind?: DbrChatBubbleKind;
  /**
   * Media source (image or audio).
   * @default ""
   */
  mediaSrc?: string;
  /**
   * Time label.
   * @default "12:45"
   */
  time?: string;
  /**
   * Direction of the message.
   * @default "in"
   */
  direction?: DbrChatBubbleDirection;
  /**
   * Message status for checkmarks.
   * @default "none"
   */
  status?: DbrChatBubbleStatus;
}
