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

import type { DbrButtonProps } from "./DbrButton.types";

const props = withDefaults(defineProps<DbrButtonProps>(), {
  variant: "primary",
  size: "md",
  disabled: false,
  pressed: undefined,
  nativeType: "button"
});

const { variant, size, disabled, pressed, nativeType } = props;
</script>

<style scoped>
.dbru-btn {
  font-family: var(--dbru-font-family);
}

</style>
