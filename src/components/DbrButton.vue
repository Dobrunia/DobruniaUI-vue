<template>
  <button
    class="dbru-button dbru-focusable dbru-reduced-motion"
    :class="[`dbru-button--${variant}`, `dbru-button--${size}`]"
    :type="nativeType"
    :disabled="disabled"
    :aria-pressed="pressed"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
type ButtonVariant = "primary" | "ghost" | "danger";
type ButtonSize = "sm" | "md" | "lg";

const props = withDefaults(
  defineProps<{
    /**
     * Visual style of the button.
     */
    variant?: ButtonVariant;
    /**
     * Button size scale.
     */
    size?: ButtonSize;
    /**
     * Disables the button and removes pointer interaction.
     */
    disabled?: boolean;
    /**
     * Use for toggle buttons to communicate pressed state to screen readers.
     */
    pressed?: boolean;
    /**
     * Native HTML button type.
     */
    nativeType?: "button" | "submit" | "reset";
  }>(),
  {
    variant: "primary",
    size: "md",
    disabled: false,
    pressed: undefined,
    nativeType: "button"
  }
);

const { variant, size, disabled, pressed, nativeType } = props;
</script>

<style scoped>
.dbru-button {
  --_radius: var(--dbru-radius-md);
  --_gap: var(--dbru-space-2);
  --_py: 10px;
  --_px: var(--dbru-space-4);

  --_bg: var(--dbru-color-primary);
  --_fg: var(--dbru-color-on-primary);
  --_bg-hover: color-mix(in oklab, var(--_bg) 85%, var(--dbru-color-text));

  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--_gap);
  padding: var(--_py) var(--_px);
  border-radius: var(--_radius);
  border: 1px solid var(--dbru-color-border);
  font-family: var(--dbru-font-family);
  font-weight: 600;
  line-height: 1;
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
  --_py: 6px;
  --_px: var(--dbru-space-3);
  font-size: 12px;
}

.dbru-button--md {
  font-size: 14px;
}

.dbru-button--lg {
  --_py: 12px;
  --_px: var(--dbru-space-5);
  font-size: 16px;
}
</style>
