<template>
  <span
    class="dbru-chip dbru-btn dbru-size-sm dbru-text-sm"
    :class="[`dbru-btn--${variant}`, resolvedTextColorClass, { 'dbru-chip--removable': type === 'removable' }]"
  >
    <span class="dbru-chip__content">
      <slot />
    </span>
    <button
      v-if="type === 'removable'"
      type="button"
      class="dbru-chip__remove"
      :disabled="disabled"
      :aria-label="removeAriaLabel"
      @click="onRemove"
    >
      ×
    </button>
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { DbrChipProps } from './DbrChip.types';

defineSlots<{
  default?: (props: {}) => any;
}>();

const {
  variant = 'primary',
  type = 'default',
  disabled = false,
  removeAriaLabel = 'Remove chip',
} = defineProps<DbrChipProps>();

const emit = defineEmits<(e: 'remove') => void>();

const textColorClass: Record<NonNullable<DbrChipProps['variant']>, string> = {
  primary: 'dbru-text-on-primary',
  ghost: 'dbru-text-main',
  danger: 'dbru-text-on-danger',
};

const resolvedTextColorClass = computed(() => textColorClass[variant]);

const onRemove = (event: MouseEvent) => {
  event.stopPropagation();
  if (disabled) return;
  emit('remove');
};
</script>

<style scoped>
.dbru-chip {
  height: var(--dbru-control-height-sm);
  border-radius: 999px;
  gap: var(--dbru-space-2);
}

.dbru-chip__content {
  display: inline-flex;
  align-items: center;
  gap: var(--dbru-space-1);
}

.dbru-chip__remove {
  border: none;
  background: transparent;
  color: inherit;
  width: 18px;
  height: 18px;
  border-radius: 999px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  line-height: 1;
}

.dbru-chip__remove:hover:not(:disabled) {
  background: color-mix(in oklab, currentColor 16%, transparent);
}

.dbru-chip__remove:focus-visible {
  outline: var(--dbru-border-size-2) solid var(--dbru-color-focus);
  outline-offset: 1px;
}

.dbru-chip__remove:disabled {
  cursor: not-allowed;
  opacity: 0.6;
}
</style>
