<template>
  <label
    class="dbru-toggle"
    :class="[
      size === 'xs' ? 'dbru-toggle--xs' : `dbru-size-${size}`,
      { 'dbru-toggle--checked': modelValue, 'dbru-toggle--disabled': disabled },
    ]"
  >
    <input
      class="dbru-toggle__input dbru-reduced-motion"
      type="checkbox"
      :checked="modelValue"
      :disabled="disabled"
      :name="name"
      :value="value"
      @change="onChange"
    />
    <span class="dbru-toggle__track" aria-hidden="true">
      <span class="dbru-toggle__thumb"></span>
    </span>
    <span v-if="label || $slots.default" class="dbru-text-base dbru-text-main">
      <slot>{{ label }}</slot>
    </span>
  </label>
</template>

<script setup lang="ts">
import type { DbrToggleProps } from './DbrToggle.types';

defineSlots<{
  /** Label content; falls back to the label prop if omitted */
  default?: (props: {}) => any;
}>();

const { modelValue = false, disabled = false, label, name, value, size = 'md' } = defineProps<DbrToggleProps>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void;
  (e: 'change', value: boolean): void;
}>();

const onChange = (event: Event) => {
  const target = event.target as HTMLInputElement;
  const nextValue = target.checked;
  emit('update:modelValue', nextValue);
  emit('change', nextValue);
};
</script>

<style scoped>
.dbru-toggle {
  --_height: var(--dbru-control-height, var(--dbru-control-height-md));
  --_track-width: calc(var(--_height) * 1.9);
  --_thumb-size: calc(var(--_height) * 0.78);
  --_thumb-offset: calc((var(--_height) - var(--_thumb-size)) / 2);
  --_thumb-shift: calc(var(--_track-width) - var(--_thumb-size) - (var(--_thumb-offset) * 2));

  display: inline-flex;
  align-items: center;
  gap: var(--dbru-space-2);
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
}

.dbru-toggle--xs {
  --dbru-control-height: 20px;
}

.dbru-toggle__input {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  border: 0;
  overflow: hidden;
  clip: rect(0 0 0 0);
  clip-path: inset(100%);
}

.dbru-toggle__track {
  width: var(--_track-width);
  height: var(--_height);
  border-radius: 999px;
  border: var(--dbru-border-size-1) solid var(--dbru-color-border);
  background: var(--dbru-color-surface);
  position: relative;
  transition:
    background-color var(--dbru-duration-base) var(--dbru-ease-standard),
    border-color var(--dbru-duration-base) var(--dbru-ease-standard);
}

.dbru-toggle__thumb {
  width: var(--_thumb-size);
  height: var(--_thumb-size);
  border-radius: 50%;
  background: var(--dbru-color-surface);
  border: var(--dbru-border-size-1) solid var(--dbru-color-border);
  position: absolute;
  top: 50%;
  left: var(--_thumb-offset);
  transition:
    transform var(--dbru-duration-base) var(--dbru-ease-standard),
    background-color var(--dbru-duration-base) var(--dbru-ease-standard),
    border-color var(--dbru-duration-base) var(--dbru-ease-standard);
  transform: translateY(-50%);
}

.dbru-toggle:hover:not(.dbru-toggle--disabled) .dbru-toggle__track {
  border-color: var(--dbru-color-primary);
}

.dbru-toggle--checked .dbru-toggle__track {
  background: var(--dbru-color-surface);
  border-color: var(--dbru-color-primary);
}

.dbru-toggle--checked .dbru-toggle__thumb {
  transform: translate(var(--_thumb-shift), -50%);
  background: var(--dbru-color-primary);
  border-color: var(--dbru-color-surface);
}

.dbru-toggle__input:focus-visible + .dbru-toggle__track {
  outline: var(--dbru-border-size-2) solid var(--dbru-color-focus);
  outline-offset: 2px;
}

.dbru-toggle--disabled {
  cursor: not-allowed;
  opacity: 0.6;
}
</style>
