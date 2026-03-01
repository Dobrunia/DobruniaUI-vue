<template>
  <div class="dbru-loader dbru-reduced-motion" aria-busy="true" aria-live="polite"></div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.dbru-loader {
  display: inline-flex;
  gap: 10px;
  cursor: progress;
}

.dbru-loader:before,
.dbru-loader:after {
  content: '';
  height: 20px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: radial-gradient(farthest-side, #000 95%, #0000) 35% 35% / 6px 6px no-repeat #fff;
  transform: scaleX(var(--s, 1)) rotate(0deg);
  animation: dbru-loader-spin 1s infinite linear;
}

.dbru-loader:after {
  --s: -1;
  animation-delay: -0.1s;
}

@keyframes dbru-loader-spin {
  100% {
    transform: scaleX(var(--s, 1)) rotate(360deg);
  }
}
</style>
