<template>
  <span
    class="dbru-tooltip"
    :class="variant ? `dbru-tooltip--${variant}` : 'dbru-tooltip--plain'"
  >
    <span class="dbru-tooltip__icon" aria-hidden="true">{{ icon }}</span>
    <span class="dbru-tooltip__text">{{ text }}</span>
  </span>
</template>

<script setup lang="ts">
/**
 * Tooltip component with info icon.
 * Use it to show short helper text on hover.
 */
defineOptions({
  name: "DbrTooltip"
});

import type { DbrTooltipProps } from "./DbrTooltip.types";

const props = withDefaults(defineProps<DbrTooltipProps>(), {
  text: "This is a cool tooltip!",
  variant: undefined
});

const { variant } = props;

const icon =
  variant === "warning"
    ? "!"
    : variant === "error"
      ? "x"
      : variant === "success"
        ? "✓"
        : "i";
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
}

.dbru-tooltip__text {
  visibility: hidden;
  background-color: var(--dbru-color-surface);
  color: var(--dbru-color-text);
  text-align: center;
  border-radius: 5px;
  padding: 8px 12px;
  position: absolute;
  z-index: 1;
  top: 125%;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
  transition: opacity 0.3s;
  border: 1px solid var(--dbru-color-border);
  box-shadow: 0 8px 20px color-mix(in oklab, var(--dbru-color-text) 20%, transparent);
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
  font-size: var(--dbru-font-size-sm);
  line-height: 1;
}

.dbru-tooltip--plain {
  --_icon-bg: var(--dbru-color-primary);
}

.dbru-tooltip--info {
  --_icon-bg: #3b82f6;
}

.dbru-tooltip--warning {
  --_icon-bg: #f59e0b;
}

.dbru-tooltip--error {
  --_icon-bg: #ef4444;
}

.dbru-tooltip--success {
  --_icon-bg: #10b981;
}
</style>
