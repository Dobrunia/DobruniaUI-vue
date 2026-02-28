<template>
  <DbrChatListItemSkeleton v-if="loading" />
  <div v-else class="dbru-chat-item dbru-chat-item--interactive">
    <div class="dbru-chat-item__avatar">
      <template v-if="!loading">
        <DbrAvatar
          class="dbru-chat-item__avatar-inner"
          :src="avatar"
          :alt="avatarAltText"
          :name="name"
          size="md"
          :shape="avatarShape"
        />
        <span
          class="dbru-chat-item__presence"
          :class="`dbru-chat-item__presence--${status}`"
        ></span>
      </template>
      <span v-else class="dbru-chat-item__skeleton dbru-chat-item__skeleton--avatar"></span>
    </div>

    <div class="dbru-chat-item__content">
      <div class="dbru-chat-item__row">
        <span v-if="!loading" class="dbru-chat-item__name dbru-text-base dbru-text-main">{{ name }}</span>
        <span v-else class="dbru-chat-item__skeleton dbru-chat-item__skeleton--title"></span>

        <div class="dbru-chat-item__meta">
          <span
            v-if="!loading && isOutgoing"
            class="dbru-chat-item__status dbru-text-xs dbru-text-muted"
            :class="`dbru-chat-item__status--${
              messageStatus === 'read'
                ? 'read'
                : messageStatus === 'error'
                  ? 'error'
                  : 'sent'
            }`"
          >
            <span v-if="messageStatus === 'error'" class="dbru-chat-item__check">×</span>
            <template v-else>
              <span class="dbru-chat-item__check">✓</span>
              <span v-if="messageStatus === 'read'" class="dbru-chat-item__check">✓</span>
            </template>
          </span>
          <span v-if="!loading" class="dbru-chat-item__time dbru-text-sm dbru-text-muted">{{ timeLabel }}</span>
          <span v-else class="dbru-chat-item__skeleton dbru-chat-item__skeleton--time"></span>
        </div>
      </div>

      <div class="dbru-chat-item__row">
        <template v-if="!loading">
          <span v-if="isTyping" class="dbru-chat-item__typing dbru-text-sm">typing…</span>
          <span
            v-else
            class="dbru-chat-item__message dbru-text-sm dbru-text-muted"
            :class="{
              'dbru-chat-item__message--unread':
                !isOutgoing && messageStatus === 'unread' && unreadCount
            }"
          >
            <span v-if="messageIcon" class="dbru-chat-item__msg-icon">
              {{ messageIcon }}
            </span>
            {{ messagePreview }}
          </span>
          <DbrBadge
            v-if="!isOutgoing && messageStatus === 'unread' && unreadCount"
            class="dbru-chat-item__badge dbru-text-xs"
            variant="primary"
            :text="String(unreadCount)"
          />
        </template>
        <span v-else class="dbru-chat-item__skeleton dbru-chat-item__skeleton--line"></span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
/**
 * Chat list item for a single dialog.
 * Use it in chat list views.
 */
defineOptions({
  name: "DbrChatListItem"
});

import type { DbrChatListItemProps } from "./DbrChatListItem.types";
import type { PropType } from "vue";
import DbrAvatar from "../DbrAvatar/DbrAvatar.vue";
import DbrBadge from "../DbrBadge/DbrBadge.vue";
import DbrChatListItemSkeleton from "./DbrChatListItemSkeleton.vue";

const props = defineProps({
  /**
   * Unique chat id.
   */
  id: {
    type: String,
    default: undefined
  },
  /**
   * Avatar image source.
   */
  avatar: {
    type: String,
    default: undefined
  },
  /**
   * Avatar alt text.
   */
  avatarAlt: {
    type: String,
    default: undefined
  },
  /**
   * Avatar shape.
   * @default "circle"
   */
  avatarShape: {
    type: String as PropType<NonNullable<DbrChatListItemProps["avatarShape"]>>,
    default: "circle"
  },
  /**
   * Display name.
   * @default "User"
   */
  name: {
    type: String,
    default: "User"
  },
  /**
   * Last message object.
   * @default { text: "Last message...", type: "text" }
   */
  lastMessage: {
    type: Object as PropType<DbrChatListItemProps["lastMessage"]>,
    default: () => ({ text: "Last message...", type: "text" })
  },
  /**
   * Timestamp of last message.
   */
  timestamp: {
    type: [Number, Date] as PropType<DbrChatListItemProps["timestamp"]>,
    default: undefined
  },
  /**
   * Message status (incoming only).
   * @default "read"
   */
  messageStatus: {
    type: String as PropType<NonNullable<DbrChatListItemProps["messageStatus"]>>,
    default: "read"
  },
  /**
   * Whether the last message is outgoing.
   * @default false
   */
  isOutgoing: {
    type: Boolean,
    default: false
  },
  /**
   * User presence status.
   * @default "offline"
   */
  status: {
    type: String as PropType<NonNullable<DbrChatListItemProps["status"]>>,
    default: "offline"
  },
  /**
   * Unread count badge (incoming only).
   * @default 0
   */
  unreadCount: {
    type: Number,
    default: 0
  },
  /**
   * Shows typing indicator.
   * @default false
   */
  isTyping: {
    type: Boolean,
    default: false
  },
  /**
   * Shows loading skeleton when true.
   * @default false
   */
  loading: {
    type: Boolean,
    default: false
  }
});

const {
  avatar,
  avatarAlt,
  avatarShape,
  name,
  lastMessage,
  timestamp,
  messageStatus,
  isOutgoing,
  status,
  unreadCount,
  isTyping,
  loading
} = props;

const avatarAltText = avatarAlt ?? (name ? `${name} avatar` : "Avatar");

const timeLabel = (() => {
  if (!timestamp) return "";
  const date = typeof timestamp === "number" ? new Date(timestamp) : timestamp;
  return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
})();

const messagePreview = (() => {
  if (lastMessage?.type === "image") return "Photo";
  if (lastMessage?.type === "file") return "File";
  if (lastMessage?.type === "voice") return "Voice message";
  return lastMessage?.text ?? "";
})();

const messageIcon = (() => {
  if (lastMessage?.type === "image") return "🖼️";
  if (lastMessage?.type === "file") return "📎";
  if (lastMessage?.type === "voice") return "🎙️";
  return "";
})();
</script>

<style scoped>
.dbru-chat-item {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: var(--dbru-space-3);
  align-items: center;
  padding: var(--dbru-space-3);
  border-radius: var(--dbru-radius-md);
  background: var(--dbru-color-surface);
  border: 1px solid var(--dbru-color-border);
  transition:
    background-color var(--dbru-duration-base) var(--dbru-ease-standard),
    border-color var(--dbru-duration-base) var(--dbru-ease-standard),
    box-shadow var(--dbru-duration-base) var(--dbru-ease-standard);
}

.dbru-chat-item--interactive:hover {
  cursor: pointer;
  background: color-mix(in oklab, var(--dbru-color-primary) 8%, var(--dbru-color-surface));
  border-color: color-mix(in oklab, var(--dbru-color-primary) 35%, var(--dbru-color-border));
  box-shadow: 0 0 0 1px color-mix(in oklab, var(--dbru-color-primary) 18%, transparent);
}

.dbru-chat-item__avatar {
  width: var(--dbru-control-height-md);
  height: var(--dbru-control-height-md);
  position: relative;
}

.dbru-chat-item__avatar-inner {
  width: 100%;
  height: 100%;
}

.dbru-chat-item__presence {
  position: absolute;
  right: -2px;
  bottom: -2px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 2px solid var(--dbru-color-surface);
  background: var(--dbru-color-border);
}

.dbru-chat-item__presence--online {
  background: #22c55e;
}

.dbru-chat-item__presence--away {
  background: #f59e0b;
}

.dbru-chat-item__presence--offline {
  background: #94a3b8;
}

.dbru-chat-item__content {
  min-width: 0;
  display: grid;
  gap: 4px;
}

.dbru-chat-item__row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--dbru-space-2);
}

.dbru-chat-item__name {
  font-weight: var(--dbru-font-weight-semibold);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.dbru-chat-item__message {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: inline-flex;
  align-items: center;
  gap: var(--dbru-space-1);
}

.dbru-chat-item__message--unread {
  color: var(--dbru-color-primary);
  font-weight: var(--dbru-font-weight-semibold);
}

.dbru-chat-item__typing {
  color: var(--dbru-color-primary);
  font-weight: var(--dbru-font-weight-semibold);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.dbru-chat-item__meta {
  display: inline-flex;
  align-items: center;
  gap: var(--dbru-space-1);
  flex-shrink: 0;
}

.dbru-chat-item__status {
  display: inline-flex;
  align-items: center;
  gap: 2px;
  line-height: var(--dbru-line-height-tight);
}

.dbru-chat-item__status--read {
  color: #22c55e;
}

.dbru-chat-item__status--error {
  color: #ef4444;
}

.dbru-chat-item__badge {
  margin-left: auto;
}

.dbru-chat-item__badge.dbru-btn {
  height: 12px;
  padding: 0 var(--dbru-space-2);
  border-radius: 999px;
}

.dbru-chat-item__skeleton {
  display: inline-block;
  height: 10px;
  background: linear-gradient(
    90deg,
    color-mix(in oklab, var(--dbru-color-border) 35%, transparent) 0%,
    color-mix(in oklab, var(--dbru-color-border) 60%, transparent) 50%,
    color-mix(in oklab, var(--dbru-color-border) 35%, transparent) 100%
  );
  background-size: 200% 100%;
  animation: dbru-skeleton 1.2s ease-in-out infinite;
  border-radius: var(--dbru-radius-sm);
}

.dbru-chat-item__skeleton--avatar {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}

.dbru-chat-item__skeleton--title {
  width: 120px;
  height: 12px;
}

.dbru-chat-item__skeleton--line {
  width: 180px;
  height: 10px;
}

.dbru-chat-item__skeleton--time {
  width: 48px;
  height: 10px;
}

@keyframes dbru-skeleton {
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: -200% 50%;
  }
}
.dbru-chat-item__msg-icon {
  line-height: var(--dbru-line-height-tight);
}
</style>
