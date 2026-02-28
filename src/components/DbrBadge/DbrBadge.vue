<template>
  <span class="dbru-badge dbru-btn dbru-size-sm" :class="`dbru-btn--${variant}`">
    {{ text }}
  </span>
</template>

<script setup lang="ts">
/**
 * Badge component for short status labels.
 * Use it to highlight small pieces of information.
 */
defineOptions({
  name: "DbrBadge"
});

import type { DbrBadgeProps } from "./DbrBadge.types";
import type { PropType } from "vue";

const props = defineProps({
  /**
   * Badge text.
   * @default "Badge"
   */
  text: {
    type: String,
    default: "Badge"
  },
  /**
   * Visual style of the badge.
   * @default "primary"
   */
  variant: {
    type: String as PropType<NonNullable<DbrBadgeProps["variant"]>>,
    default: "primary"
  }
});

const { text, variant } = props;
</script>

<style scoped>
.dbru-badge {
  height: var(--dbru-control-height-sm);
  border-radius: 999px;
}
</style>
