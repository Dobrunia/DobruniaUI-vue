<template>
  <span class="dbru-avatar dbru-text-main" :class="[`dbru-size-${size}`, `dbru-avatar--${shape}`]">
    <img v-if="src" class="dbru-avatar__img" :src="src" :alt="altText" />
    <span v-else class="dbru-avatar__initials dbru-text-main">{{ initials }}</span>
  </span>
</template>

<script setup lang="ts">
import type { DbrAvatarProps } from './DbrAvatar.types';

defineOptions({
  name: 'DbrAvatar',
});

const props = withDefaults(defineProps<DbrAvatarProps>(), {
  src: undefined,
  alt: undefined,
  name: '',
  size: 'md',
  shape: 'circle',
});

const { src, alt, name, size, shape } = props;

const altText = alt ?? (name ? `${name} avatar` : 'Avatar');

const initials = (() => {
  if (!name) return '';
  const parts = name.trim().split(/\s+/).slice(0, 2);
  return parts.map((part) => part[0]?.toUpperCase()).join('');
})();
</script>

<style scoped>
.dbru-avatar {
  --_size: var(--dbru-control-height, var(--dbru-control-height-md));
  --_font-size: var(--dbru-control-font-size, var(--dbru-font-size-base));

  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: var(--_size);
  height: var(--_size);
  border-radius: 50%;
  background-color: var(--dbru-color-surface);
  border: 1px solid var(--dbru-color-border);
  font-size: var(--_font-size);
  font-weight: var(--dbru-font-weight-semibold);
  overflow: hidden;
}

.dbru-avatar--rounded {
  border-radius: var(--dbru-radius-md);
}

.dbru-avatar__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.dbru-avatar__initials {
  text-transform: uppercase;
}
</style>
