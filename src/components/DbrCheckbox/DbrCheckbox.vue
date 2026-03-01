<template>
  <label class="dbru-checkbox" :class="{ 'dbru-checkbox--disabled': disabled }">
    <input
      class="dbru-checkbox__input dbru-reduced-motion"
      type="checkbox"
      :checked="modelValue"
      :disabled="disabled"
      :name="name"
      :value="value"
      @change="onChange"
    />
    <span v-if="label || $slots.default" class="dbru-text-base dbru-text-main">
      <slot>{{ label }}</slot>
    </span>
  </label>
</template>

<script setup lang="ts">
import type { DbrCheckboxProps } from './DbrCheckbox.types';

defineSlots<{
  /** Label text; falls back to the label prop if not provided */
  default?: (props: {}) => any;
}>();

const { modelValue = false, disabled = false, label, name, value } = defineProps<DbrCheckboxProps>();

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
.dbru-checkbox {
  --_primary: var(--dbru-color-primary);
  --_secondary: var(--dbru-color-on-primary);
  --_hover: color-mix(in oklab, var(--dbru-color-primary) 80%, transparent);
  --_border: var(--dbru-color-border);
  --_bg: var(--dbru-color-surface);

  display: inline-flex;
  align-items: center;
  gap: var(--dbru-space-2);
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
}

.dbru-checkbox__input {
  appearance: none;
  width: 20px;
  height: 20px;
  border-radius: 5px;
  background: var(--_bg);
  border: 1px solid var(--_border);
  transition: all 0.3s;
  cursor: pointer;
  position: relative;
}

.dbru-checkbox__input::after {
  content: '';
  position: absolute;
  inset: 0;
  box-shadow: 0 0 0 calc(20px / 2.5) var(--_primary);
  border-radius: inherit;
  opacity: 0;
  transition: all 0.5s cubic-bezier(0.12, 0.4, 0.29, 1.46);
}

.dbru-checkbox__input::before {
  top: 40%;
  left: 50%;
  content: '';
  position: absolute;
  width: 4px;
  height: 7px;
  border-right: 2px solid var(--_secondary);
  border-bottom: 2px solid var(--_secondary);
  transform: translate(-50%, -50%) rotate(45deg) scale(0);
  opacity: 0;
  transition:
    all 0.1s cubic-bezier(0.71, -0.46, 0.88, 0.6),
    opacity 0.1s;
}

.dbru-checkbox__input:hover:not(:disabled) {
  border-color: var(--_primary);
}

.dbru-checkbox__input:checked {
  background: var(--_primary);
  border-color: transparent;
}

.dbru-checkbox__input:checked::before {
  opacity: 1;
  transform: translate(-50%, -50%) rotate(45deg) scale(1.2);
  transition: all 0.2s cubic-bezier(0.12, 0.4, 0.29, 1.46) 0.1s;
}

.dbru-checkbox__input:active:not(:checked)::after {
  transition: none;
  box-shadow: none;
  opacity: 1;
}

.dbru-checkbox__input:focus-visible {
  outline: 2px solid var(--dbru-color-focus);
  outline-offset: 2px;
}

.dbru-checkbox--disabled {
  cursor: not-allowed;
  opacity: 0.6;
}

.dbru-checkbox--disabled .dbru-checkbox__input {
  cursor: not-allowed;
}
</style>
