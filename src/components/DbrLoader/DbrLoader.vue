<template>
  <div class="dbru-loader dbru-reduced-motion" aria-busy="true" aria-live="polite">
    <span class="dbru-loader__dot"></span>
    <span class="dbru-loader__dot"></span>
    <span class="dbru-loader__dot"></span>
    <span class="dbru-loader__dot"></span>
    <span class="dbru-loader__dot"></span>
    <span class="dbru-loader__dot"></span>
    <span class="dbru-loader__dot"></span>
    <span class="dbru-loader__dot"></span>
  </div>
</template>

<script setup lang="ts">
/**
 * Base dot spinner loader.
 * Use it to indicate background activity.
 */
defineOptions({
  name: "DbrLoader"
});

import type { DbrLoaderProps } from "./DbrLoader.types";

defineProps<DbrLoaderProps>();
</script>

<style scoped>
.dbru-loader {
  --_size: calc(var(--dbru-space-5) * 1.4);
  --_speed: 0.9s;
  --_color: var(--dbru-color-primary);

  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: var(--_size);
  height: var(--_size);
  cursor: progress;
}

.dbru-loader__dot {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
}

.dbru-loader__dot::before {
  content: "";
  width: 20%;
  height: 20%;
  border-radius: 50%;
  background-color: var(--_color);
  transform: scale(0);
  opacity: 0.5;
  animation: dbru-loader-pulse calc(var(--_speed) * 1.111) ease-in-out infinite;
  box-shadow: 0 0 20px color-mix(in oklab, var(--_color) 35%, transparent);
}

.dbru-loader__dot:nth-child(2) {
  transform: rotate(45deg);
}

.dbru-loader__dot:nth-child(2)::before {
  animation-delay: calc(var(--_speed) * -0.875);
}

.dbru-loader__dot:nth-child(3) {
  transform: rotate(90deg);
}

.dbru-loader__dot:nth-child(3)::before {
  animation-delay: calc(var(--_speed) * -0.75);
}

.dbru-loader__dot:nth-child(4) {
  transform: rotate(135deg);
}

.dbru-loader__dot:nth-child(4)::before {
  animation-delay: calc(var(--_speed) * -0.625);
}

.dbru-loader__dot:nth-child(5) {
  transform: rotate(180deg);
}

.dbru-loader__dot:nth-child(5)::before {
  animation-delay: calc(var(--_speed) * -0.5);
}

.dbru-loader__dot:nth-child(6) {
  transform: rotate(225deg);
}

.dbru-loader__dot:nth-child(6)::before {
  animation-delay: calc(var(--_speed) * -0.375);
}

.dbru-loader__dot:nth-child(7) {
  transform: rotate(270deg);
}

.dbru-loader__dot:nth-child(7)::before {
  animation-delay: calc(var(--_speed) * -0.25);
}

.dbru-loader__dot:nth-child(8) {
  transform: rotate(315deg);
}

.dbru-loader__dot:nth-child(8)::before {
  animation-delay: calc(var(--_speed) * -0.125);
}

@keyframes dbru-loader-pulse {
  0%,
  100% {
    transform: scale(0);
    opacity: 0.5;
  }

  50% {
    transform: scale(1);
    opacity: 1;
  }
}
</style>
