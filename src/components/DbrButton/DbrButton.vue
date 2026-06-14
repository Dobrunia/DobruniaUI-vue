<template>
  <button
    class="dbru-btn dbru-focus-visible dbru-reduced-motion"
    :class="[
      `dbru-btn--${variant}`,
      `dbru-size-${size}`,
      { 'dbru-btn--press-effect': pressEffect },
    ]"
    :type="nativeType"
    :disabled="disabled"
    :aria-pressed="pressed"
  >
    <DbrText :size="textSize" :color="textColor">
      <slot />
    </DbrText>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import DbrText from '../DbrText/DbrText.vue';
import type { DbrButtonProps } from './DbrButton.types';
import type { DbrTextColor, DbrTextSize } from '../DbrText/DbrText.types';

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

const textSizeByButtonSize: Record<NonNullable<DbrButtonProps['size']>, DbrTextSize> = {
  sm: 'sm',
  md: 'md',
  lg: 'lg',
};

const textColorByVariant: Record<NonNullable<DbrButtonProps['variant']>, DbrTextColor> = {
  primary: 'on-primary',
  ghost: 'base',
  danger: 'on-danger',
};

const textSize = computed(() => textSizeByButtonSize[size]);
const textColor = computed(() => textColorByVariant[variant]);
</script>

<style scoped>
.dbru-btn--press-effect:active:not(:disabled) {
  transform: translateY(1px);
}
</style>
