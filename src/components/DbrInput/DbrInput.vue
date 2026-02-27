<template>
  <div :class="{ 'dbru-input--disabled': disabled }">
    <input
      class="dbru-input__field dbru-reduced-motion"
      :class="`dbru-size-${size}`"
      :id="inputId"
      :type="type"
      :name="name"
      :disabled="disabled"
      :required="required"
      :autocomplete="autocomplete"
      :value="modelValue"
      :placeholder="label"
      @input="onInput"
    />
  </div>
</template>

<script setup lang="ts">
/**
 * Base input with label.
 * Use it for text entry in forms.
 */
defineOptions({
  name: "DbrInput"
});

import type { DbrInputProps } from "./DbrInput.types";

const props = withDefaults(defineProps<DbrInputProps>(), {
  modelValue: "",
  label: undefined,
  size: "md",
  type: "text",
  name: undefined,
  id: undefined,
  disabled: false,
  required: false,
  autocomplete: "off"
});

const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
  (e: "input", value: string): void;
}>();

const {
  modelValue,
  label,
  size,
  type,
  name,
  id,
  disabled,
  required,
  autocomplete
} = props;

const inputId =
  id ?? `dbru-input-${Math.random().toString(36).slice(2, 9)}`;

const onInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  const nextValue = target.value;
  emit("update:modelValue", nextValue);
  emit("input", nextValue);
};
</script>

<style scoped>
.dbru-input__field {
  width: 100%;
  outline: none;
  border: 1px solid var(--dbru-color-border);
  background-color: var(--dbru-color-surface);
  border-radius: var(--dbru-radius-md);
  color: var(--dbru-color-text);
  line-height: var(--dbru-line-height-base);
  transition:
    border-color var(--dbru-duration-base) var(--dbru-ease-standard),
    box-shadow var(--dbru-duration-base) var(--dbru-ease-standard),
    background-color var(--dbru-duration-base) var(--dbru-ease-standard);
}

.dbru-input__field:hover:not(:disabled) {
  border-color: color-mix(in oklab, var(--dbru-color-primary) 55%, #0000);
}

.dbru-input__field:focus {
  border-color: var(--dbru-color-primary);
  box-shadow: 0 0 0 3px color-mix(in oklab, var(--dbru-color-primary) 25%, #0000);
}

.dbru-input--disabled {
  opacity: 0.6;
}

.dbru-input--disabled .dbru-input__field {
  cursor: not-allowed;
}
</style>
