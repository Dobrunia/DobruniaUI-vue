<template>
  <span class="dbru-skeleton" :style="styleVars"></span>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { DbrSkeletonProps } from './DbrSkeleton.types';

const { width = '100%', height = '0', radius = '0' } = defineProps<DbrSkeletonProps>();

const styleVars = computed(() => ({
  '--dbru-skeleton-width': width,
  '--dbru-skeleton-height': height,
  '--dbru-skeleton-radius': radius,
}));
</script>

<style scoped>
.dbru-skeleton {
  display: inline-block;
  width: var(--dbru-skeleton-width);
  height: var(--dbru-skeleton-height);
  border-radius: var(--dbru-skeleton-radius);
  background: linear-gradient(
    90deg,
    color-mix(in oklab, var(--dbru-color-border) 50%, transparent) 0%,
    color-mix(in oklab, var(--dbru-color-border) 78%, transparent) 50%,
    color-mix(in oklab, var(--dbru-color-border) 50%, transparent) 100%
  );
  background-size: 200% 100%;
  animation: dbru-skeleton 1.2s ease-in-out infinite;
}

@keyframes dbru-skeleton {
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: -200% 50%;
  }
}

@media (prefers-reduced-motion: reduce) {
  .dbru-skeleton {
    animation: none;
  }
}
</style>
