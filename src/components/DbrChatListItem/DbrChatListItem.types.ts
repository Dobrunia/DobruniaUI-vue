export type DbrMessageType = "text" | "image" | "file" | "voice";
export type DbrMessageStatus = "unread" | "read" | "error";
export type DbrPresence = "online" | "away" | "offline";

export interface DbrChatListItemProps {
  /**
   * Unique chat id.
   * @default undefined
   */
  id?: string;
  /**
   * Avatar image source.
   * @default undefined
   */
  avatar?: string;
  /**
   * Avatar alt text.
   * @default undefined
   */
  avatarAlt?: string;
  /**
   * Avatar shape.
   * @default "circle"
   */
  avatarShape?: "circle" | "rounded";
  /**
   * Display name.
   * @default "User"
   */
  name?: string;
  /**
   * Last message object.
   * @default { text: "Last message...", type: "text" }
   */
  lastMessage?: {
    text?: string;
    type?: DbrMessageType;
    authorName?: string;
  };
  /**
   * Timestamp of last message.
   * @default undefined
   */
  timestamp?: number | Date;
  /**
   * Message status (incoming only).
   * @default "read"
   */
  messageStatus?: DbrMessageStatus;
  /**
   * Whether the last message is outgoing.
   * @default false
   */
  isOutgoing?: boolean;
  /**
   * User presence status.
   * @default "offline"
   */
  status?: DbrPresence;
  /**
   * Unread count badge (incoming only).
   * @default 0
   */
  unreadCount?: number;
  /**
   * Shows typing indicator.
   * @default false
   */
  isTyping?: boolean;
  /**
   * Shows loading skeleton when true.
   * @default false
   */
  loading?: boolean;
}
