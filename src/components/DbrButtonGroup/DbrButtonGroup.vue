<template>
  <div class="dbru-button-group" :class="[`dbru-button-group--${size}`]" @wheel="onWheel">
    <div class="dbru-button-group__track">
      <button
        v-for="(option, index) in options"
        :key="option.value"
        type="button"
        class="dbru-button-group__item"
        :class="{
          'dbru-button-group__item--active': isActive(option.value),
          'dbru-button-group__item--first': index === 0,
          'dbru-button-group__item--last': index === options.length - 1,
        }"
        :aria-pressed="isActive(option.value)"
        :disabled="disabled || option.disabled"
        @click="select(option)"
      >
        <DbrText
          :size="textSize"
          :color="isActive(option.value) ? 'primary' : 'base'"
          wrap="nowrap"
        >
          {{ option.label }}
        </DbrText>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import DbrText from '../DbrText/DbrText.vue';
import type {
  DbrButtonGroupOption,
  DbrButtonGroupProps,
  DbrButtonGroupValue,
} from './DbrButtonGroup.types';
import type { DbrTextSize } from '../DbrText/DbrText.types';

const { modelValue, options = [], size = 'md', disabled = false } =
  defineProps<DbrButtonGroupProps>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: DbrButtonGroupValue): void;
  (e: 'change', value: DbrButtonGroupValue): void;
}>();

const isActive = (value: DbrButtonGroupValue) => Object.is(modelValue, value);

const textSizeByGroupSize: Record<NonNullable<DbrButtonGroupProps['size']>, DbrTextSize> = {
  sm: 'sm',
  md: 'md',
  lg: 'lg',
};

const textSize = computed(() => textSizeByGroupSize[size]);

const select = (option: DbrButtonGroupOption) => {
  if (disabled || option.disabled) return;
  emit('update:modelValue', option.value);
  emit('change', option.value);
};

const onWheel = (event: WheelEvent) => {
  const container = event.currentTarget as HTMLDivElement | null;
  if (!container) return;
  const hasHorizontalOverflow = container.scrollWidth > container.clientWidth;
  if (!hasHorizontalOverflow) return;

  const dominantDelta = Math.abs(event.deltaX) > Math.abs(event.deltaY) ? event.deltaX : event.deltaY;
  if (!dominantDelta) return;

  const SCROLL_SPEED = 0.45;
  const MAX_STEP = 36;
  const step = Math.max(-MAX_STEP, Math.min(MAX_STEP, dominantDelta * SCROLL_SPEED));

  container.scrollLeft += step;
  event.preventDefault();
};
</script>

<style scoped>
.dbru-button-group {
  box-sizing: border-box;
  display: block;
  border: var(--dbru-border-size-1) solid var(--dbru-color-border);
  border-radius: var(--dbru-radius-md);
  width: fit-content;
  max-width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  background: var(--dbru-color-surface);
  -ms-overflow-style: none;
  scrollbar-width: none;
  justify-self: start;
}

.dbru-button-group--sm {
  height: var(--dbru-control-height-sm);
}

.dbru-button-group--md {
  height: var(--dbru-control-height-md);
}

.dbru-button-group--lg {
  height: var(--dbru-control-height-lg);
}

.dbru-button-group::-webkit-scrollbar {
  display: none;
}

.dbru-button-group__track {
  display: inline-flex;
  align-items: stretch;
  min-width: max-content;
  height: 100%;
}

.dbru-button-group__item {
  flex: 0 0 auto;
  height: 100%;
  border: none;
  border-right: var(--dbru-border-size-1) solid var(--dbru-color-border);
  background: transparent;
  cursor: pointer;
  transition:
    background-color var(--dbru-duration-base) var(--dbru-ease-standard),
    color var(--dbru-duration-base) var(--dbru-ease-standard);
}

.dbru-button-group__item--last {
  border-right: none;
}

.dbru-button-group--sm .dbru-button-group__item {
  padding: 0 var(--dbru-space-3);
}

.dbru-button-group--md .dbru-button-group__item {
  padding: 0 var(--dbru-space-4);
}

.dbru-button-group--lg .dbru-button-group__item {
  padding: 0 var(--dbru-space-5);
}

.dbru-button-group__item:hover:not(:disabled):not(.dbru-button-group__item--active) {
  background: color-mix(in oklab, var(--dbru-color-primary) 10%, transparent);
}

.dbru-button-group__item--active {
  background: color-mix(in oklab, var(--dbru-color-primary) 16%, transparent);
  color: var(--dbru-color-primary);
}

.dbru-button-group__item:focus-visible:not(:disabled) {
  outline: none;
  background: color-mix(in oklab, var(--dbru-color-primary) 16%, transparent);
  position: relative;
  z-index: 1;
}

.dbru-button-group__item:disabled {
  cursor: not-allowed;
  opacity: 0.6;
}

</style>
