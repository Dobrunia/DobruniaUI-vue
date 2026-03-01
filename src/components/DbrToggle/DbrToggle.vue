<template>
  <label
    class="dbru-toggle"
    :class="[`dbru-size-${size}`, { 'dbru-toggle--disabled': disabled }]"
    :for="inputId"
  >
    <input
      class="dbru-toggle__input dbru-reduced-motion"
      type="checkbox"
      :id="inputId"
      :checked="modelValue"
      :disabled="disabled"
      :name="name"
      :value="value"
      @change="onChange"
    />
    <span class="dbru-toggle__icon" aria-hidden="true">
      <span class="dbru-toggle__bar dbru-toggle__bar--1"></span>
      <span class="dbru-toggle__bar dbru-toggle__bar--2"></span>
      <span class="dbru-toggle__bar dbru-toggle__bar--3"></span>
    </span>
    <span v-if="label || $slots.default" class="dbru-toggle__label">
      <slot>{{ label }}</slot>
    </span>
  </label>
</template>

<script setup lang="ts">
import { useId } from 'vue';
import type { DbrToggleProps } from './DbrToggle.types';

defineOptions({
  name: 'DbrToggle',
});

const { modelValue = false, disabled = false, label, id, name, value, size = 'md' } = defineProps<DbrToggleProps>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void;
  (e: 'change', value: boolean): void;
}>();

const inputId = id ?? useId();

const onChange = (event: Event) => {
  const target = event.target as HTMLInputElement;
  const nextValue = target.checked;
  emit('update:modelValue', nextValue);
  emit('change', nextValue);
};
</script>

<style scoped>
.dbru-toggle {
  --_size: var(--dbru-control-height, var(--dbru-control-height-md));
  --_bar-height: calc(var(--_size) * 0.1);
  --_bar-radius: 4px;
  --_bar-color: var(--dbru-color-primary);
  --_bar-color-hover: color-mix(in oklab, var(--dbru-color-primary) 80%, #0000);

  display: inline-flex;
  align-items: center;
  gap: var(--dbru-space-2);
  cursor: pointer;
}

.dbru-toggle__input {
  display: none;
}

.dbru-toggle__icon {
  position: relative;
  width: var(--_size);
  height: var(--_size);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: calc(var(--_size) * 0.25);
  transition-duration: 0.5s;
}

.dbru-toggle__bar {
  width: 100%;
  height: var(--_bar-height);
  background-color: var(--_bar-color);
  border-radius: var(--_bar-radius);
}

.dbru-toggle__icon:hover .dbru-toggle__bar {
  background-color: var(--_bar-color-hover);
}

.dbru-toggle__bar--2 {
  transition-duration: 0.8s;
}

.dbru-toggle__bar--1,
.dbru-toggle__bar--3 {
  width: 70%;
}

.dbru-toggle__input:checked + .dbru-toggle__icon .dbru-toggle__bar {
  position: absolute;
  transition-duration: 0.5s;
}

.dbru-toggle__input:checked + .dbru-toggle__icon .dbru-toggle__bar--2 {
  transform: scaleX(0);
  transition-duration: 0.5s;
}

.dbru-toggle__input:checked + .dbru-toggle__icon .dbru-toggle__bar--1 {
  width: 100%;
  transform: rotate(45deg);
  transition-duration: 0.5s;
}

.dbru-toggle__input:checked + .dbru-toggle__icon .dbru-toggle__bar--3 {
  width: 100%;
  transform: rotate(-45deg);
  transition-duration: 0.5s;
}

.dbru-toggle__input:checked + .dbru-toggle__icon {
  transition-duration: 0.5s;
  transform: rotate(180deg);
}

.dbru-toggle--disabled {
  cursor: not-allowed;
  opacity: 0.6;
}

.dbru-toggle--disabled .dbru-toggle__icon {
  cursor: not-allowed;
}
</style>
