<template>
  <label class="dbru-toggle" :class="{ 'dbru-toggle--disabled': disabled }" :for="inputId">
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
/**
 * Toggle icon switch (hamburger to close).
 * Use it for compact on/off controls.
 */
defineOptions({
  name: "DbrToggle"
});

import type { DbrToggleProps } from "./DbrToggle.types";
import type { PropType } from "vue";

const props = defineProps({
  /**
   * Checked state for v-model.
   * @default false
   */
  modelValue: {
    type: Boolean,
    default: false
  },
  /**
   * Disables the toggle and removes pointer interaction.
   * @default false
   */
  disabled: {
    type: Boolean,
    default: false
  },
  /**
   * Optional label text. You can also use the default slot.
   */
  label: {
    type: String,
    default: undefined
  },
  /**
   * Native id used to connect input and label.
   */
  id: {
    type: String,
    default: undefined
  },
  /**
   * Native name attribute for form submission.
   */
  name: {
    type: String,
    default: undefined
  },
  /**
   * Native value attribute for form submission.
   */
  value: {
    type: String as PropType<DbrToggleProps["value"]>,
    default: undefined
  }
});

const emit = defineEmits<{
  (e: "update:modelValue", value: boolean): void;
  (e: "change", value: boolean): void;
}>();

const { modelValue, disabled, name, value, label } = props;

const inputId =
  props.id ?? `dbru-toggle-${Math.random().toString(36).slice(2, 9)}`;

const onChange = (event: Event) => {
  const target = event.target as HTMLInputElement;
  const nextValue = target.checked;
  emit("update:modelValue", nextValue);
  emit("change", nextValue);
};
</script>

<style scoped>
.dbru-toggle {
  --_size: 40px;
  --_bar-height: 4px;
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
  gap: 10px;
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
