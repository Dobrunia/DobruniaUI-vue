<template>
  <div class="dbru-chat-item dbru-chat-item--loading">
    <div class="dbru-chat-item__avatar">
      <DbrSkeleton width="100%" height="100%" radius="50%" />
    </div>

    <div class="dbru-chat-item__content">
      <div class="dbru-chat-item__row">
        <span class="dbru-chat-item__name-slot">
          <DbrSkeleton width="120px" height="12px" radius="var(--dbru-radius-sm)" />
        </span>
        <div class="dbru-chat-item__meta">
          <span class="dbru-chat-item__meta-slot">
            <DbrSkeleton width="48px" height="10px" radius="var(--dbru-radius-sm)" />
          </span>
        </div>
      </div>

      <div class="dbru-chat-item__row">
        <span class="dbru-chat-item__message-slot">
          <DbrSkeleton width="180px" height="10px" radius="var(--dbru-radius-sm)" />
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import DbrSkeleton from '../DbrSkeleton/DbrSkeleton.vue';
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
  border: var(--dbru-border-size-1) solid var(--dbru-color-border);
  transition:
    background-color var(--dbru-duration-base) var(--dbru-ease-standard),
    border-color var(--dbru-duration-base) var(--dbru-ease-standard),
    box-shadow var(--dbru-duration-base) var(--dbru-ease-standard);
}

.dbru-chat-item__avatar {
  width: var(--dbru-control-height-md);
  height: var(--dbru-control-height-md);
  position: relative;
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

.dbru-chat-item__name-slot {
  min-height: 21px;
  display: inline-flex;
  align-items: center;
}

.dbru-chat-item__message-slot,
.dbru-chat-item__meta-slot {
  min-height: 18px;
  display: inline-flex;
  align-items: center;
}

</style>
