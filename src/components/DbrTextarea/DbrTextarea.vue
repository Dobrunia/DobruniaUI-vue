<template>
  <div class="dbru-textarea" :class="{ 'dbru-textarea--disabled': disabled }">
    <DbrText v-if="label" class="dbru-textarea__label" size="sm" color="muted">
      {{ label }}
    </DbrText>
    <textarea
      class="dbru-textarea__field dbru-focus-visible dbru-reduced-motion"
      :class="`dbru-textarea__field--resize-${resize}`"
      :style="textareaStyle"
      :id="textareaId"
      :name="name"
      :disabled="disabled"
      :required="required"
      :autocomplete="resolvedAutocomplete"
      :value="modelValue"
      :placeholder="placeholder"
      :rows="rows"
      @input="onInput"
    ></textarea>
  </div>
</template>

<script setup lang="ts">
import { computed, useId } from 'vue';
import DbrText from '../DbrText/DbrText.vue';
import type { DbrTextareaProps } from './DbrTextarea.types';

const {
  modelValue = '',
  label,
  placeholder,
  name,
  id,
  disabled = false,
  required = false,
  autocomplete,
  rows = 4,
  width = '100%',
  height,
  resize = 'none',
} = defineProps<DbrTextareaProps>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
  (e: 'input', value: string): void;
}>();

const textareaId = id ?? useId();

const resolvedAutocomplete = computed(() => {
  if (autocomplete) return autocomplete;
  return 'off';
});

const textareaStyle = computed(() => ({
  width,
  height,
}));

const onInput = (event: Event) => {
  const target = event.target as HTMLTextAreaElement;
  const nextValue = target.value;
  emit('update:modelValue', nextValue);
  emit('input', nextValue);
};
</script>

<style scoped>
.dbru-textarea {
  display: inline-flex;
  flex-direction: column;
  gap: var(--dbru-space-2);
  max-width: 100%;
  min-width: 0;
}

.dbru-textarea__field {
  box-sizing: border-box;
  min-height: calc(var(--dbru-control-height, var(--dbru-control-height-md)) * 2);
  border: var(--dbru-border-size-1) solid var(--dbru-color-border);
  background-color: var(--dbru-color-surface);
  border-radius: var(--dbru-radius-md);
  color: var(--dbru-text-color-base) !important;
  font-family: var(--dbru-text-font-family) !important;
  font-size: var(--dbru-text-size-md) !important;
  font-weight: var(--dbru-text-weight-regular) !important;
  line-height: var(--dbru-text-line-height-normal) !important;
  letter-spacing: var(--dbru-text-letter-spacing-normal) !important;
  padding: var(--dbru-space-2) var(--dbru-control-px, var(--dbru-space-4));
  transition:
    border-color var(--dbru-duration-base) var(--dbru-ease-standard),
    box-shadow var(--dbru-duration-base) var(--dbru-ease-standard),
    background-color var(--dbru-duration-base) var(--dbru-ease-standard);
}

.dbru-textarea__label {
  flex: 0 0 auto;
  pointer-events: none;
}

.dbru-textarea__field::placeholder {
  color: var(--dbru-text-color-muted) !important;
  opacity: 1 !important;
}

.dbru-textarea__field--resize-none {
  resize: none;
}

.dbru-textarea__field--resize-vertical {
  resize: vertical;
}

.dbru-textarea__field--resize-horizontal {
  resize: horizontal;
}

.dbru-textarea__field--resize-both {
  resize: both;
}

.dbru-textarea__field:hover:not(:disabled) {
  border-color: var(--dbru-color-primary);
}

.dbru-textarea--disabled {
  opacity: 0.6;
}

.dbru-textarea--disabled .dbru-textarea__field {
  cursor: not-allowed;
}
</style>
