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

defineOptions({
  name: 'DbrCard',
});

const props = withDefaults(defineProps<DbrCardProps>(), {
  as: 'div',
  variant: 'surface',
  disabled: false,
  hoverable: false,
});

const { as, variant, disabled, hoverable } = props;
</script>

<style scoped>
.dbru-card {
  border-radius: var(--dbru-radius-md);
  border: 2px solid transparent;
  transition:
    color var(--dbru-duration-base) var(--dbru-ease-standard),
    background-color var(--dbru-duration-base) var(--dbru-ease-standard),
    border-color var(--dbru-duration-base) var(--dbru-ease-standard),
    opacity var(--dbru-duration-base) var(--dbru-ease-standard),
    box-shadow var(--dbru-duration-base) var(--dbru-ease-standard);
  transition-property: color, background-color, border-color, opacity, box-shadow;
  transition-duration:
    var(--dbru-duration-base), var(--dbru-duration-base), var(--dbru-duration-base),
    var(--dbru-duration-base), var(--dbru-duration-base);
  transition-timing-function:
    var(--dbru-ease-standard), var(--dbru-ease-standard), var(--dbru-ease-standard),
    var(--dbru-ease-standard), var(--dbru-ease-standard);
  background: var(--dbru-color-surface);
}

.dbru-card--surface.dbru-card--hoverable:not(.dbru-card--disabled):hover {
  border-color: var(--dbru-color-border);
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
