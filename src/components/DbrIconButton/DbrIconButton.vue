<template>
  <button
    class="dbru-btn dbru-focusable dbru-reduced-motion"
    :class="[
      `dbru-btn--${variant}`,
      `dbru-size-${size}`,
      `dbru-icon-button--${iconPosition}`,
      { 'dbru-icon-button--icon-only': !hasLabel },
      resolvedTextSizeClass,
      resolvedTextColorClass,
    ]"
    :type="nativeType"
    :disabled="disabled"
  >
    <span v-if="$slots.iconBefore && iconPosition === 'start'" class="dbru-icon-button__icon">
      <slot name="iconBefore" />
    </span>
    <span v-if="hasLabel" class="dbru-icon-button__label">{{ label }}</span>
    <span v-if="$slots.iconAfter && iconPosition === 'end'" class="dbru-icon-button__icon">
      <slot name="iconAfter" />
    </span>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { DbrIconButtonProps } from './DbrIconButton.types';

defineOptions({
  name: 'DbrIconButton',
});

const props = withDefaults(defineProps<DbrIconButtonProps>(), {
  label: undefined,
  variant: 'primary',
  size: 'md',
  disabled: false,
  nativeType: 'button',
  iconPosition: 'start',
});

const { label, variant, size, disabled, nativeType, iconPosition } = props;

const textSizeClass: Record<NonNullable<DbrIconButtonProps['size']>, string> = {
  sm: 'dbru-text-sm',
  md: 'dbru-text-base',
  lg: 'dbru-text-lg',
};

const textColorClass: Record<NonNullable<DbrIconButtonProps['variant']>, string> = {
  primary: 'dbru-text-on-primary',
  ghost: 'dbru-text-main',
  danger: 'dbru-text-on-danger',
};

const resolvedTextSizeClass = computed(() => textSizeClass[size]);
const resolvedTextColorClass = computed(() => textColorClass[variant]);
const hasLabel = computed(() => Boolean(label?.trim().length));
</script>

<style scoped>
.dbru-icon-button__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.dbru-icon-button__label {
  display: inline-flex;
  align-items: center;
}

.dbru-icon-button--start {
  flex-direction: row;
}

.dbru-icon-button--end {
  flex-direction: row;
}

.dbru-icon-button--icon-only {
  width: var(--dbru-control-height, var(--dbru-control-height-md));
  padding: 0;
  gap: 0;
}
</style>
