<template>
  <span class="dbru-badge-wrap">
    <slot />
    <span
      class="dbru-badge"
      :class="[
        `dbru-badge--${variant}`,
        { 'dbru-badge--dot': dot, 'dbru-badge--empty': !dot && !hasBadgeContent },
      ]"
      :style="{ right: offsetX, top: offsetY }"
      aria-live="polite"
    >
      <span v-if="!dot && hasBadgeContent" class="dbru-badge__text">
        <template v-if="normalizedBadgeText !== null">{{ normalizedBadgeText }}</template>
        <slot v-else name="badge" />
      </span>
    </span>
  </span>
</template>

<script setup lang="ts">
import { computed, useSlots } from 'vue';
import type { DbrBadgeProps } from './DbrBadge.types';

defineSlots<{
  default?: (props: {}) => any;
  badge?: (props: {}) => any;
}>();

const { variant = 'primary', dot = false, offsetX = '-6px', offsetY = '-6px' } =
  defineProps<DbrBadgeProps>();

const slots = useSlots();
const badgeNodes = computed(() => slots.badge?.() ?? []);
const hasBadgeContent = computed(() => badgeNodes.value.length > 0);
const normalizedBadgeText = computed(() => {
  if (!badgeNodes.value.length) return null;
  if (badgeNodes.value.length !== 1) return null;

  const [node] = badgeNodes.value;
  const rawChild = node.children;
  if (typeof rawChild !== 'string' && typeof rawChild !== 'number') return null;

  const rawText = String(rawChild).trim();
  if (!rawText) return '';
  if (!/^\d+$/.test(rawText)) return rawText;

  const numeric = Number(rawText);
  if (!Number.isFinite(numeric)) return rawText;
  return numeric > 99 ? '99+' : rawText;
});
</script>

<style scoped>
.dbru-badge-wrap {
  position: relative;
  display: inline-flex;
}

.dbru-badge {
  position: absolute;
  right: -6px;
  top: -6px;
  min-width: 18px;
  height: 18px;
  padding: 0 auto;
  border-radius: 999px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--dbru-shadow-sm);
  pointer-events: none;
  z-index: 1;
}

.dbru-badge__text {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 100%;
  line-height: 1;
  font-size: 10px;
  color: var(--dbru-color-on-primary);
  font-weight: var(--dbru-font-weight-semibold);
  transform: translateY(-0.5px);
}

.dbru-badge--primary {
  background: var(--dbru-color-primary);
}

.dbru-badge--danger {
  background: var(--dbru-color-danger);
}

.dbru-badge--neutral {
  background: color-mix(in oklab, var(--dbru-color-text) 65%, var(--dbru-color-surface));
}

.dbru-badge--neutral .dbru-badge__text {
  color: var(--dbru-color-surface);
}

.dbru-badge--dot {
  min-width: 10px;
  width: 10px;
  height: 10px;
  padding: 0;
}

.dbru-badge--empty {
  display: none;
}
</style>
