<template>
  <span class="dbru-tooltip" :class="variant ? `dbru-tooltip--${variant}` : 'dbru-tooltip--plain'">
    <span class="dbru-tooltip__icon dbru-text-sm" aria-hidden="true">{{ icon }}</span>
    <span class="dbru-tooltip__text dbru-text-sm dbru-text-main">{{ text }}</span>
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { DbrTooltipProps } from './DbrTooltip.types';

const { text = 'This is a cool tooltip!', variant } = defineProps<DbrTooltipProps>();

const ICON_MAP: Partial<Record<NonNullable<DbrTooltipProps['variant']>, string>> = {
  warning: '!',
  error: 'x',
  success: '✓',
};

const icon = computed(() => (variant ? ICON_MAP[variant] : undefined) ?? 'i');
</script>

<style scoped>
.dbru-tooltip {
  position: relative;
  display: inline-block;
  cursor: pointer;
}

.dbru-tooltip:hover .dbru-tooltip__text {
  visibility: visible;
  opacity: 1;
  transform: translateX(-50%) translateY(0);
  transition:
    opacity var(--dbru-duration-base) var(--dbru-ease-standard),
    transform var(--dbru-duration-base) var(--dbru-ease-standard),
    visibility 0s;
}

.dbru-tooltip__text {
  visibility: hidden;
  background-color: var(--dbru-color-surface);
  text-align: center;
  border-radius: var(--dbru-radius-sm);
  padding: var(--dbru-space-2) var(--dbru-space-3);
  position: absolute;
  z-index: 1;
  top: 125%;
  left: 50%;
  transform: translateX(-50%) translateY(4px);
  opacity: 0;
  transition:
    opacity var(--dbru-duration-base) var(--dbru-ease-standard),
    transform var(--dbru-duration-base) var(--dbru-ease-standard),
    visibility 0s var(--dbru-duration-base);
  border: var(--dbru-border-size-1) solid var(--dbru-color-border);
  box-shadow: var(--dbru-shadow-md);
  white-space: nowrap;
}

.dbru-tooltip__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  background-color: var(--_icon-bg, var(--dbru-color-primary));
  color: var(--dbru-color-on-primary);
  border-radius: 50%;
  text-align: center;
}

.dbru-tooltip--plain {
  --_icon-bg: var(--dbru-color-primary);
}

.dbru-tooltip--info {
  --_icon-bg: #3b82f6;
}

.dbru-tooltip--warning {
  --_icon-bg: #d97706;
}

.dbru-tooltip--error {
  --_icon-bg: var(--dbru-color-error);
}

.dbru-tooltip--success {
  --_icon-bg: var(--dbru-color-success);
}
</style>
