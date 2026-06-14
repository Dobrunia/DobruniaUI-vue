<template>
  <span :style="textStyle">
    <slot />
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { DbrTextProps } from './DbrText.types';

defineSlots<{
  /** Text content */
  default?: (props: {}) => any;
}>();

const {
  size,
  weight,
  color,
  lineHeight,
  align,
  transform,
  decoration,
  fontStyle,
  wrap,
  letterSpacing,
  truncate = false,
} = defineProps<DbrTextProps>();

const textStyle = computed(() => {
  let whiteSpace = 'normal';
  if (wrap === 'nowrap') whiteSpace = 'nowrap';
  if (wrap === 'pre-wrap') whiteSpace = 'pre-wrap';

  const rules = [
    'font-family: var(--dbru-text-font-family) !important',
    `font-size: var(--dbru-text-size-${size ?? 'md'}) !important`,
    `font-weight: var(--dbru-text-weight-${weight ?? 'regular'}) !important`,
    `line-height: var(--dbru-text-line-height-${lineHeight ?? 'normal'}) !important`,
    `letter-spacing: var(--dbru-text-letter-spacing-${letterSpacing ?? 'normal'}) !important`,
    `color: var(--dbru-text-color-${color ?? 'base'}) !important`,
    `text-align: ${align ?? 'start'} !important`,
    `text-transform: ${transform ?? 'none'} !important`,
    `text-decoration: ${decoration ?? 'none'} !important`,
    `font-style: ${fontStyle ?? 'normal'} !important`,
    `white-space: ${whiteSpace} !important`,
    'margin: 0 !important',
    'padding: 0 !important',
  ];

  if (truncate) {
    rules.push(
      'display: inline-block !important',
      'max-width: 100% !important',
      'overflow: hidden !important',
      'text-overflow: ellipsis !important',
      'white-space: nowrap !important',
      'vertical-align: bottom !important'
    );
  }

  return rules.join('; ');
});
</script>
