<template>
  <button
    class="dbru-btn dbru-focusable dbru-reduced-motion"
    :class="[
      `dbru-btn--${variant}`,
      `dbru-size-${size}`,
      `dbru-icon-button--${iconPosition}`
    ]"
    :type="nativeType"
    :disabled="disabled"
  >
    <span v-if="$slots.iconBefore && iconPosition === 'start'" class="dbru-icon-button__icon">
      <slot name="iconBefore" />
    </span>
    <span class="dbru-icon-button__label">{{ label }}</span>
    <span v-if="$slots.iconAfter && iconPosition === 'end'" class="dbru-icon-button__icon">
      <slot name="iconAfter" />
    </span>
  </button>
</template>

<script setup lang="ts">
/**
 * Button with optional icon before or after text.
 * Use slots to provide SVG icons.
 */
defineOptions({
  name: "DbrIconButton"
});

import type { DbrIconButtonProps } from "./DbrIconButton.types";

const props = withDefaults(defineProps<DbrIconButtonProps>(), {
  label: "Button",
  variant: "primary",
  size: "md",
  disabled: false,
  nativeType: "button",
  iconPosition: "start"
});

const { label, variant, size, disabled, nativeType, iconPosition } = props;
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
</style>
