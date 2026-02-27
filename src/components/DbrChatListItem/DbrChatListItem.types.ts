export type DbrMessageType = "text" | "image" | "file" | "voice";
export type DbrMessageStatus = "unread" | "read" | "error";
export type DbrPresence = "online" | "away" | "offline";

export interface DbrChatListItemProps {
  /**
   * Unique chat id.
   */
  id?: string;
  /**
   * Avatar image source.
   */
  avatar?: string;
  /**
   * Avatar alt text.
   */
  avatarAlt?: string;
  /**
   * Display name.
   */
  name?: string;
  /**
   * Last message object.
   */
  lastMessage?: {
    text?: string;
    type?: DbrMessageType;
    authorName?: string;
  };
  /**
   * Timestamp of last message.
   */
  timestamp?: number | Date;
  /**
   * Message status (incoming only).
   */
  messageStatus?: DbrMessageStatus;
  /**
   * Whether the last message is outgoing.
   */
  isOutgoing?: boolean;
  /**
   * User presence status.
   */
  status?: DbrPresence;
  /**
   * Unread count badge (incoming only).
   */
  unreadCount?: number;
  /**
   * Shows typing indicator.
   */
  isTyping?: boolean;
  /**
   * Shows loading skeleton when true.
   */
  loading?: boolean;
}
