<template>
  <button
    class="dbru-icon-btn dbru-focus-visible dbru-reduced-motion"
    :class="[
      `dbru-size-${size}`,
      `dbru-icon-btn--${variant}`,
      { 'dbru-icon-btn--disabled': disabled },
    ]"
    :style="iconColorStyle"
    :type="nativeType"
    :disabled="disabled"
    :aria-label="ariaLabel"
  >
    <span class="dbru-icon-btn__icon" aria-hidden="true">
      <slot />
    </span>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { DbrIconButtonIconColor, DbrIconButtonProps } from './DbrIconButton.types';

defineSlots<{
  /**
   * Icon only: root `<svg>` or a Vue component whose template root is `<svg>`.
   * Crop `viewBox` to artwork (loose boxes look small). No `v-html` / wrapper elements.
   */
  default?: (props: {}) => any;
}>();

const ICON_COLOR_MAP: Record<DbrIconButtonIconColor, string> = {
  base: 'var(--dbru-text-color-base)',
  muted: 'var(--dbru-text-color-muted)',
  primary: 'var(--dbru-color-primary)',
};

const {
  ariaLabel,
  size = 'md',
  variant = 'ghost',
  iconColor = 'base',
  disabled = false,
  nativeType = 'button',
} = defineProps<DbrIconButtonProps>();

const iconColorStyle = computed(() => ({
  '--dbru-icon-btn-icon-color': ICON_COLOR_MAP[iconColor],
  '--dbru-icon-btn-icon-color-hover': 'var(--dbru-color-primary)',
}));
</script>

<style scoped>
.dbru-icon-btn {
  --_radius: var(--dbru-radius-md);
  --_icon-scale: 0.5;

  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  height: var(--dbru-control-height, var(--dbru-control-height-md));
  width: var(--dbru-control-height, var(--dbru-control-height-md));
  padding: 0;
  border-radius: var(--_radius);
  border: none;
  background: transparent;
  cursor: pointer;
  transition:
    transform var(--dbru-duration-fast) var(--dbru-ease-standard),
    background-color var(--dbru-duration-base) var(--dbru-ease-standard),
    color var(--dbru-duration-base) var(--dbru-ease-standard),
    border-color var(--dbru-duration-base) var(--dbru-ease-standard);
}

.dbru-icon-btn.dbru-size-sm {
  --_icon-scale: 0.44;
}

.dbru-icon-btn.dbru-size-md {
  --_icon-scale: 0.54;
}

.dbru-icon-btn.dbru-size-lg {
  --_icon-scale: 0.7;
}

.dbru-icon-btn__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  line-height: 0;
  color: var(--dbru-icon-btn-icon-color, var(--dbru-text-color-base));
  transition: color var(--dbru-duration-base) var(--dbru-ease-standard);
}

.dbru-icon-btn__icon :deep(svg) {
  display: block;
}

.dbru-icon-btn--ghost .dbru-icon-btn__icon {
  width: 100%;
  height: 100%;
}

.dbru-icon-btn--ghost .dbru-icon-btn__icon :deep(svg) {
  width: 100%;
  height: 100%;
}

.dbru-icon-btn--border .dbru-icon-btn__icon :deep(svg) {
  width: calc(var(--dbru-control-height, var(--dbru-control-height-md)) * var(--_icon-scale));
  height: calc(var(--dbru-control-height, var(--dbru-control-height-md)) * var(--_icon-scale));
}

.dbru-icon-btn--ghost:hover:not(:disabled) .dbru-icon-btn__icon,
.dbru-icon-btn--border:hover:not(:disabled) .dbru-icon-btn__icon {
  color: var(--dbru-icon-btn-icon-color-hover, var(--dbru-color-primary));
}

.dbru-icon-btn--border {
  border: var(--dbru-border-size-1) solid var(--dbru-color-border);
}

.dbru-icon-btn--disabled,
.dbru-icon-btn:disabled {
  cursor: not-allowed;
  opacity: 0.6;
}
</style>
