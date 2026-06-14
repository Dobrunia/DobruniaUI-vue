<template>
  <div class="dbru-input" :class="{ 'dbru-input--disabled': disabled }">
    <DbrText v-if="label" class="dbru-input__label" size="sm" color="muted">
      {{ label }}
    </DbrText>
    <span class="dbru-input__control-wrap">
      <input
        class="dbru-input__field dbru-focus-visible dbru-reduced-motion"
        :class="[
          `dbru-size-${size}`,
          {
            'dbru-input__field--has-left-icon': hasLeftIcon,
            'dbru-input__field--has-right-icon': hasRightIcon,
          },
        ]"
        :id="inputId"
        :type="resolvedType"
        :name="name"
        :disabled="disabled"
        :required="required"
        :autocomplete="resolvedAutocomplete"
        :value="modelValue"
        :placeholder="placeholder"
        @input="onInput"
      />
      <span v-if="hasLeftIcon" class="dbru-input__icon dbru-input__icon--left" aria-hidden="true">
        <slot name="icon" />
      </span>
      <button
        v-if="isPasswordType"
        type="button"
        class="dbru-input__icon-btn dbru-focus-visible dbru-input__icon--right"
        :disabled="disabled"
        :aria-label="showPassword ? 'Hide password' : 'Show password'"
        @mousedown.prevent
        @click="togglePassword"
      >
        <svg
          v-if="!showPassword"
          viewBox="0 0 24 24"
          width="16"
          height="16"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        >
          <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6Z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
        <svg
          v-else
          viewBox="0 0 24 24"
          width="16"
          height="16"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        >
          <path d="M3 3l18 18" />
          <path d="M10.58 10.58a2 2 0 0 0 2.83 2.83" />
          <path d="M9.88 5.09A10.94 10.94 0 0 1 12 5c6.5 0 10 7 10 7a16.84 16.84 0 0 1-2.67 3.49" />
          <path d="M6.61 6.61A16.17 16.17 0 0 0 2 12s3.5 7 10 7a10.94 10.94 0 0 0 4.91-1.09" />
        </svg>
      </button>
      <span
        v-if="hasRightCustomIcon"
        class="dbru-input__icon dbru-input__icon--right"
        aria-hidden="true"
      >
        <slot name="icon" />
      </span>
    </span>
  </div>
</template>

<script setup lang="ts">
import type { DbrInputProps } from './DbrInput.types';
import { computed, ref, useId } from 'vue';
import DbrText from '../DbrText/DbrText.vue';

const {
  modelValue = '',
  label,
  placeholder,
  size = 'md',
  type = 'text',
  iconPosition = 'left',
  name,
  id,
  disabled = false,
  required = false,
  autocomplete,
} = defineProps<DbrInputProps>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
  (e: 'input', value: string): void;
}>();

const slots = defineSlots<{
  /** Custom icon displayed inside the input field. Position is controlled by the iconPosition prop. */
  icon?: (props: {}) => any;
}>();

const inputId = id ?? useId();

const showPassword = ref(false);

const isPasswordType = computed(() => type === 'password');
const hasCustomIcon = computed(() => Boolean(slots.icon));
const hasLeftIcon = computed(() => hasCustomIcon.value && iconPosition === 'left');
const hasRightCustomIcon = computed(
  () => hasCustomIcon.value && iconPosition === 'right' && !isPasswordType.value
);
const hasRightIcon = computed(() => isPasswordType.value || hasRightCustomIcon.value);
const resolvedType = computed(() => (isPasswordType.value && showPassword.value ? 'text' : type));
const resolvedAutocomplete = computed(() => {
  if (autocomplete) return autocomplete;
  return 'off';
});

const togglePassword = () => {
  if (disabled) return;
  showPassword.value = !showPassword.value;
};

const onInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  const nextValue = target.value;
  emit('update:modelValue', nextValue);
  emit('input', nextValue);
};
</script>

<style scoped>
.dbru-input {
  display: inline-flex;
  flex-direction: column;
  gap: var(--dbru-space-2);
  max-width: 100%;
  min-width: 0;
}

.dbru-input__label {
  flex: 0 0 auto;
  pointer-events: none;
}

.dbru-input__control-wrap {
  position: relative;
  display: block;
  width: 100%;
}

.dbru-input__field {
  box-sizing: border-box;
  width: 100%;
  border: var(--dbru-border-size-1) solid var(--dbru-color-border);
  background-color: var(--dbru-color-surface);
  border-radius: var(--dbru-radius-md);
  color: var(--dbru-text-color-base) !important;
  font-family: var(--dbru-text-font-family) !important;
  font-size: var(--dbru-text-size-md) !important;
  font-weight: var(--dbru-text-weight-regular) !important;
  line-height: var(--dbru-text-line-height-normal) !important;
  letter-spacing: var(--dbru-text-letter-spacing-normal) !important;
  height: var(--dbru-control-height, var(--dbru-control-height-md));
  padding: 0 var(--dbru-control-px, var(--dbru-space-4));
  transition:
    border-color var(--dbru-duration-base) var(--dbru-ease-standard),
    box-shadow var(--dbru-duration-base) var(--dbru-ease-standard),
    background-color var(--dbru-duration-base) var(--dbru-ease-standard);
}

.dbru-input__field::placeholder {
  color: var(--dbru-text-color-muted) !important;
  opacity: 1 !important;
}

.dbru-input__field--has-left-icon {
  padding-left: calc(var(--dbru-control-px, var(--dbru-space-4)) + 24px);
}

.dbru-input__field--has-right-icon {
  padding-right: calc(var(--dbru-control-px, var(--dbru-space-4)) + 24px);
}

.dbru-input__field:hover:not(:disabled) {
  border-color: var(--dbru-color-primary);
}

.dbru-input--disabled {
  opacity: 0.6;
}

.dbru-input--disabled .dbru-input__field {
  cursor: not-allowed;
}

.dbru-input__icon,
.dbru-input__icon-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  line-height: 0;
  color: color-mix(in oklab, var(--dbru-text-color-base) 65%, transparent);
}

.dbru-input__icon svg {
  display: block;
}

.dbru-input__icon--left {
  left: var(--dbru-space-4);
}

.dbru-input__icon--right,
.dbru-input__icon-btn {
  right: var(--dbru-space-4);
}

.dbru-input__icon-btn {
  border: 0;
  background: transparent;
  padding: 0;
  width: 18px;
  height: 18px;
  border-radius: 4px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.dbru-input--disabled .dbru-input__icon-btn {
  cursor: not-allowed;
}
</style>
