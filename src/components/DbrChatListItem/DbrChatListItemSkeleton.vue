<template>
  <div class="dbru-chat-item dbru-chat-item--loading">
    <div class="dbru-chat-item__avatar">
      <span class="dbru-chat-item__skeleton dbru-chat-item__skeleton--avatar"></span>
    </div>

    <div class="dbru-chat-item__content">
      <div class="dbru-chat-item__row">
        <span class="dbru-chat-item__skeleton dbru-chat-item__skeleton--title"></span>
        <div class="dbru-chat-item__meta">
          <span class="dbru-chat-item__skeleton dbru-chat-item__skeleton--time"></span>
        </div>
      </div>

      <div class="dbru-chat-item__row">
        <span class="dbru-chat-item__skeleton dbru-chat-item__skeleton--line"></span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
/**
 * Skeleton for chat list item.
 */
defineOptions({
  name: 'DbrChatListItemSkeleton',
});
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
}

.dbru-chat-item__avatar {
  width: var(--dbru-control-height-md);
  height: var(--dbru-control-height-md);
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

.dbru-chat-item__meta {
  display: inline-flex;
  align-items: center;
  gap: var(--dbru-space-1);
  flex-shrink: 0;
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
</style>
