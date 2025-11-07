<template>
  <div class="layout min-h-screen flex flex-col">
    <header v-if="$slots.header" class="header">
      <slot name="header" />
    </header>

    <main class="flex-1">
      <slot />
    </main>

    <footer v-if="$slots.footer" class="footer">
      <slot name="footer" />
    </footer>
  </div>
</template>

<script setup lang="ts">
// Layout component
</script>

<style scoped>
.layout {
  @apply bg-gray-50;
}
</style>
