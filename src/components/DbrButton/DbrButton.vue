<template>
  <button
    class="dbru-btn dbru-focus-visible dbru-reduced-motion"
    :class="[
      `dbru-btn--${variant}`,
      `dbru-size-${size}`,
      resolvedTextSizeClass,
      resolvedTextColorClass,
      { 'dbru-btn--press-effect': pressEffect },
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

const {
  variant = 'primary',
  size = 'md',
  disabled = false,
  pressed,
  nativeType = 'button',
  pressEffect = false,
} = defineProps<DbrButtonProps>();

const textSizeClass: Record<NonNullable<DbrButtonProps['size']>, string> = {
  sm: 'dbru-font-size-sm',
  md: 'dbru-font-size-base',
  lg: 'dbru-font-size-lg',
};

const textColorClass: Record<NonNullable<DbrButtonProps['variant']>, string> = {
  primary: 'dbru-font-color-on-primary',
  ghost: 'dbru-font-color-base',
  danger: 'dbru-font-color-on-danger',
};

const resolvedTextSizeClass = computed(() => textSizeClass[size]);
const resolvedTextColorClass = computed(() => textColorClass[variant]);
</script>

<style scoped>
.dbru-btn--press-effect:active:not(:disabled) {
  transform: translateY(1px);
}
</style>
