<template>
  <button
    class="dbru-button dbru-focusable dbru-reduced-motion"
    :class="[`dbru-button--${variant}`, `dbru-button--${size}`, `dbru-size-${size}`]"
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
.dbru-button {
  --_radius: var(--dbru-radius-md);
  --_gap: var(--dbru-space-2);
  --_px: var(--dbru-control-px, var(--dbru-space-4));
  --_font-size: var(--dbru-control-font-size, var(--dbru-font-size-base));

  --_bg: var(--dbru-color-primary);
  --_fg: var(--dbru-color-on-primary);
  --_bg-hover: color-mix(in oklab, var(--_bg) 85%, var(--dbru-color-text));

  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--_gap);
  height: var(--dbru-control-height, var(--dbru-control-height-md));
  padding: 0 var(--_px);
  border-radius: var(--_radius);
  border: 1px solid var(--dbru-color-border);
  font-size: var(--_font-size);
  letter-spacing: 0.01em;
  transition: transform var(--dbru-duration-fast) var(--dbru-ease-standard),
    background-color var(--dbru-duration-base) var(--dbru-ease-standard),
    color var(--dbru-duration-base) var(--dbru-ease-standard),
    border-color var(--dbru-duration-base) var(--dbru-ease-standard);
  cursor: pointer;
  background: var(--_bg);
  color: var(--_fg);
}

.dbru-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.dbru-button:active:not(:disabled) {
  transform: translateY(1px);
}

.dbru-button:hover:not(:disabled) {
  background: var(--_bg-hover);
}

.dbru-button--ghost {
  --_bg: transparent;
  --_fg: var(--dbru-color-border); /* исключение для ghost варианта */
  --_bg-hover: color-mix(in oklab, var(--dbru-color-primary) 12%, transparent);
}

.dbru-button--primary {
  border-color: var(--_bg);
}

.dbru-button--danger {
  --_bg: var(--dbru-color-danger);
  --_fg: var(--dbru-color-on-danger);
  --_bg-hover: color-mix(in oklab, var(--_bg) 85%, var(--dbru-color-text));
  border-color: var(--_bg);
}

.dbru-button--sm {
  --_radius: var(--dbru-radius-sm);
}
</style>
