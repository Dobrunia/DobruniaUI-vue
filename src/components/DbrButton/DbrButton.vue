<template>
  <button
    class="dbru-btn dbru-focusable dbru-reduced-motion"
    :class="[`dbru-btn--${variant}`, `dbru-size-${size}`]"
    :type="nativeType"
    :disabled="disabled"
    :aria-pressed="pressed"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
/**
 * Button component with variants and sizes.
 * Use it for primary actions across the UI.
 */
defineOptions({
  name: "DbrButton"
});

import type { PropType } from "vue";
import type { DbrButtonSize, DbrButtonVariant } from "./DbrButton.types";

const props = defineProps({
  /**
   * Visual style variant.
   * @default "primary"
   */
  variant: {
    type: String as PropType<DbrButtonVariant>,
    default: "primary"
  },
  /**
   * Size from global control scale.
   * @default "md"
   */
  size: {
    type: String as PropType<DbrButtonSize>,
    default: "md"
  },
  /**
   * Disables the button.
   * @default false
   */
  disabled: {
    type: Boolean,
    default: false
  },
  /**
   * ARIA pressed state for toggle-like usage.
   */
  pressed: {
    type: Boolean as PropType<boolean | undefined>,
    default: undefined
  },
  /**
   * Native HTML button type.
   * @default "button"
   */
  nativeType: {
    type: String as PropType<"button" | "submit" | "reset">,
    default: "button"
  }
});

const { variant, size, disabled, pressed, nativeType } = props;
</script>

<style scoped>
.dbru-btn {
  font-family: var(--dbru-font-family);
}

</style>
