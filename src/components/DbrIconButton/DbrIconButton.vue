<template>
  <button
    class="dbru-btn dbru-focusable dbru-reduced-motion"
    :class="[
      `dbru-btn--${variant}`,
      `dbru-size-${size}`,
      `dbru-icon-button--${iconPosition}`,
      resolvedTextSizeClass,
      resolvedTextColorClass
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

import { computed } from "vue";
import type { DbrIconButtonProps } from "./DbrIconButton.types";
import type { PropType } from "vue";

const props = defineProps({
  /**
   * Button text label.
   * @default "Button"
   */
  label: {
    type: String,
    default: "Button"
  },
  /**
   * Visual style of the button.
   * @default "primary"
   */
  variant: {
    type: String as PropType<NonNullable<DbrIconButtonProps["variant"]>>,
    default: "primary"
  },
  /**
   * Button size.
   * @default "md"
   */
  size: {
    type: String as PropType<NonNullable<DbrIconButtonProps["size"]>>,
    default: "md"
  },
  /**
   * Disables the button and removes pointer interaction.
   * @default false
   */
  disabled: {
    type: Boolean,
    default: false
  },
  /**
   * Native HTML button type.
   * @default "button"
   */
  nativeType: {
    type: String as PropType<NonNullable<DbrIconButtonProps["nativeType"]>>,
    default: "button"
  },
  /**
   * Icon position relative to text.
   * @default "start"
   */
  iconPosition: {
    type: String as PropType<NonNullable<DbrIconButtonProps["iconPosition"]>>,
    default: "start"
  }
});

const { label, variant, size, disabled, nativeType, iconPosition } = props;

const textSizeClass: Record<NonNullable<DbrIconButtonProps["size"]>, string> = {
  sm: "dbru-text-sm",
  md: "dbru-text-base",
  lg: "dbru-text-lg"
};

const textColorClass: Record<NonNullable<DbrIconButtonProps["variant"]>, string> = {
  primary: "dbru-text-on-primary",
  ghost: "dbru-text-main",
  danger: "dbru-text-on-danger"
};

const resolvedTextSizeClass = computed(() => textSizeClass[size]);
const resolvedTextColorClass = computed(() => textColorClass[variant]);
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
