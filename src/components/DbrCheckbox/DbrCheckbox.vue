<template>
  <label class="dbru-checkbox" :class="{ 'dbru-checkbox--disabled': disabled }">
    <input
      class="dbru-checkbox__input dbru-focus-visible dbru-reduced-motion"
      type="checkbox"
      v-model="checked"
      :disabled="disabled"
      :name="name"
      :value="value"
      @keydown.enter.prevent="toggleFromKeyboard"
      @change="onChange"
    />
    <DbrText v-if="label || $slots.default">
      <slot>{{ label }}</slot>
    </DbrText>
  </label>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import DbrText from '../DbrText/DbrText.vue';
import type { DbrCheckboxProps } from './DbrCheckbox.types';

defineSlots<{
  /** Label text; falls back to the label prop if not provided */
  default?: (props: {}) => any;
}>();

const {
  modelValue = false,
  disabled = false,
  label,
  name,
  value,
} = defineProps<DbrCheckboxProps>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void;
  (e: 'change', value: boolean): void;
}>();

const checked = computed({
  get: () => modelValue,
  set: (next: boolean) => {
    emit('update:modelValue', next);
    emit('change', next);
  },
});

const toggleFromKeyboard = () => {
  if (disabled) return;
  checked.value = !checked.value;
};

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
  border: var(--dbru-border-size-1) solid var(--_border);
  transition:
    background-color var(--dbru-duration-base) var(--dbru-ease-standard),
    border-color var(--dbru-duration-base) var(--dbru-ease-standard);
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
  border-right: var(--dbru-border-size-2) solid var(--_secondary);
  border-bottom: var(--dbru-border-size-2) solid var(--_secondary);
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

.dbru-checkbox--disabled {
  cursor: not-allowed;
  opacity: 0.6;
}

.dbru-checkbox--disabled .dbru-checkbox__input {
  cursor: not-allowed;
}
</style>
