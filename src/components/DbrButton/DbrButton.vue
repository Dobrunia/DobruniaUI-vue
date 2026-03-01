<template>
  <button
    class="dbru-btn dbru-focusable dbru-reduced-motion"
    :class="[
      `dbru-btn--${variant}`,
      `dbru-size-${size}`,
      resolvedTextSizeClass,
      resolvedTextColorClass,
    ]"
    :type="nativeType"
    :disabled="disabled"
    :aria-pressed="pressed"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { DbrButtonProps } from './DbrButton.types';

defineSlots<{
  /** Button content */
  default?: (props: {}) => any;
}>();

const { variant = 'primary', size = 'md', disabled = false, pressed, nativeType = 'button' } = defineProps<DbrButtonProps>();

const textSizeClass: Record<NonNullable<DbrButtonProps['size']>, string> = {
  sm: 'dbru-text-sm',
  md: 'dbru-text-base',
  lg: 'dbru-text-lg',
};

const textColorClass: Record<NonNullable<DbrButtonProps['variant']>, string> = {
  primary: 'dbru-text-on-primary',
  ghost: 'dbru-text-main',
  danger: 'dbru-text-on-danger',
};

const resolvedTextSizeClass = computed(() => textSizeClass[size]);
const resolvedTextColorClass = computed(() => textColorClass[variant]);
</script>
