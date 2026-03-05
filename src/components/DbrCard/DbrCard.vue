<template>
  <component
    :is="as"
    class="dbru-card"
    :class="[
      `dbru-card--${variant}`,
      {
        'dbru-card--disabled': disabled,
        'dbru-card--hoverable': hoverable,
      },
    ]"
    :aria-disabled="disabled || undefined"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
import type { DbrCardProps } from './DbrCard.types';

defineSlots<{
  /** Card content */
  default?: (props: {}) => any;
}>();

const { as = 'div', variant = 'surface', disabled = false, hoverable = false } = defineProps<DbrCardProps>();
</script>

<style scoped>
.dbru-card {
  border-radius: var(--dbru-radius-md);
  border: var(--dbru-border-size-2) solid transparent;
  transition:
    color var(--dbru-duration-base) var(--dbru-ease-standard),
    background-color var(--dbru-duration-base) var(--dbru-ease-standard),
    border-color var(--dbru-duration-base) var(--dbru-ease-standard),
    opacity var(--dbru-duration-base) var(--dbru-ease-standard),
    box-shadow var(--dbru-duration-base) var(--dbru-ease-standard);
  background: var(--dbru-color-surface);
  box-shadow: var(--dbru-shadow-sm);
}

.dbru-card--surface.dbru-card--hoverable:not(.dbru-card--disabled):hover {
  border-color: var(--dbru-color-border);
  box-shadow: var(--dbru-shadow-md);
}

.dbru-card--bordered {
  border-style: dashed;
  border-color: rgb(from var(--dbru-color-border) r g b / 50%);
}

.dbru-card--bordered.dbru-card--hoverable:not(.dbru-card--disabled):hover {
  border-color: var(--dbru-color-border);
}

.dbru-card--disabled {
  opacity: 0.65;
  cursor: not-allowed;
}
</style>
