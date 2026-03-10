<template>
  <label class="dbru-radio" :class="{ 'dbru-radio--disabled': disabled }">
    <input
      class="dbru-radio__input dbru-reduced-motion"
      type="radio"
      :checked="checked"
      :disabled="disabled"
      :name="name"
      :value="value"
      @change="onChange"
    />
    <span class="dbru-radio__control" aria-hidden="true">
      <svg class="dbru-radio__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M10.5 15.25A.74.74 0 0 1 10 15l-3-3a.75.75 0 0 1 1-1l2.47 2.47L19 5a.75.75 0 0 1 1 1l-9 9a.74.74 0 0 1-.5.25"
        />
        <path
          fill="currentColor"
          d="M12 21a9 9 0 0 1-7.87-4.66a8.7 8.7 0 0 1-1.07-3.41a9 9 0 0 1 4.6-8.81a8.7 8.7 0 0 1 3.41-1.07a8.9 8.9 0 0 1 3.55.34a.75.75 0 1 1-.43 1.43a7.6 7.6 0 0 0-3-.28a7.4 7.4 0 0 0-2.84.89a7.5 7.5 0 0 0-2.2 1.84a7.42 7.42 0 0 0-1.64 5.51a7.4 7.4 0 0 0 .89 2.84a7.5 7.5 0 0 0 1.84 2.2a7.42 7.42 0 0 0 5.51 1.64a7.4 7.4 0 0 0 2.84-.89a7.5 7.5 0 0 0 2.2-1.84a7.42 7.42 0 0 0 1.64-5.51a.75.75 0 1 1 1.57-.15a9 9 0 0 1-4.61 8.81A8.7 8.7 0 0 1 12.93 21z"
        />
      </svg>
    </span>
    <span v-if="label || $slots.default" class="dbru-text-base dbru-text-main">
      <slot>{{ label }}</slot>
    </span>
  </label>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { DbrRadioProps, DbrRadioValue } from './DbrRadio.types';

defineSlots<{
  default?: (props: {}) => any;
}>();

const { modelValue, value = 'on', label, name, disabled = false } = defineProps<DbrRadioProps>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: DbrRadioValue): void;
  (e: 'change', value: DbrRadioValue): void;
}>();

const checked = computed(() => Object.is(modelValue, value));

const onChange = () => {
  emit('update:modelValue', value);
  emit('change', value);
};
</script>

<style scoped>
.dbru-radio {
  --_primary: var(--dbru-color-primary);
  --_border: var(--dbru-color-border);
  --_bg: var(--dbru-color-surface);

  display: inline-flex;
  align-items: center;
  gap: var(--dbru-space-2);
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
}

.dbru-radio__input {
  appearance: none;
  position: absolute;
  opacity: 0;
  margin: 0;
  width: 1px;
  height: 1px;
  pointer-events: none;
}

.dbru-radio__control {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: var(--_bg);
  border: var(--dbru-border-size-1) solid var(--_border);
  position: relative;
  overflow: visible;
  cursor: pointer;
  transition:
    border-color var(--dbru-duration-base) var(--dbru-ease-standard),
    background-color var(--dbru-duration-base) var(--dbru-ease-standard);
}

.dbru-radio:hover .dbru-radio__control {
  border-color: var(--_primary);
}

.dbru-radio__icon {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 28px;
  height: 28px;
  color: var(--_primary);
  transform: translate(-50%, -50%) scale(0.9);
  opacity: 0;
  pointer-events: none;
  transition:
    transform var(--dbru-duration-base) var(--dbru-ease-standard),
    opacity var(--dbru-duration-base) var(--dbru-ease-standard);
}

.dbru-radio__input:checked + .dbru-radio__control {
  border-color: transparent;
  background: transparent;
}

.dbru-radio__input:checked + .dbru-radio__control .dbru-radio__icon {
  transform: translate(-50%, -50%) scale(1);
  opacity: 1;
}

.dbru-radio__input:focus-visible {
  outline: none;
}

.dbru-radio__input:focus-visible + .dbru-radio__control {
  outline: var(--dbru-border-size-2) solid var(--dbru-color-focus);
  outline-offset: 2px;
}

.dbru-radio--disabled {
  cursor: not-allowed;
  opacity: 0.6;
}

.dbru-radio--disabled .dbru-radio__input {
  cursor: not-allowed;
}

.dbru-radio--disabled .dbru-radio__control {
  cursor: not-allowed;
}
</style>
