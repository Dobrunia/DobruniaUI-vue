<template>
  <span
    class="dbru-chip dbru-btn dbru-size-sm"
    :class="[`dbru-btn--${variant}`, { 'dbru-chip--removable': type === 'removable' }]"
  >
    <DbrText :color="textColor" size="sm">
      <slot />
    </DbrText>
    <button
      v-if="type === 'removable'"
      type="button"
      class="dbru-chip__remove dbru-focus-visible"
      :disabled="disabled"
      :aria-label="removeAriaLabel"
      @click="onRemove"
    >
      <DbrText :color="textColor" size="sm">×</DbrText>
    </button>
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import DbrText from '../DbrText/DbrText.vue';
import type { DbrChipProps } from './DbrChip.types';
import type { DbrTextColor } from '../DbrText/DbrText.types';

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

const textColorByVariant: Record<NonNullable<DbrChipProps['variant']>, DbrTextColor> = {
  primary: 'on-primary',
  ghost: 'base',
  danger: 'on-danger',
};

const textColor = computed(() => textColorByVariant[variant]);

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

.dbru-chip__remove {
  border: none;
  background: transparent;
  width: 18px;
  height: 18px;
  border-radius: 999px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0;
}

.dbru-chip__remove:hover:not(:disabled) {
  background: color-mix(in oklab, currentColor 16%, transparent);
}

.dbru-chip__remove:disabled {
  cursor: not-allowed;
  opacity: 0.6;
}
</style>
