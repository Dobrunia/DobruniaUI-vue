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

const props = withDefaults(defineProps<DbrBadgeProps>(), {
  text: "Badge",
  variant: "primary"
});

const { text, variant } = props;
</script>

<style scoped>
.dbru-badge {
  height: var(--dbru-control-height-sm);
  border-radius: 999px;
}
</style>
