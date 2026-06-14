<template>
  <span
    class="dbru-avatar"
    :class="[`dbru-size-${size}`, `dbru-avatar--${shape}`, { 'dbru-avatar--active': active }]"
  >
    <img v-if="src" class="dbru-avatar__img" :src="src" :alt="altText" />
    <DbrText v-else :size="textSize" transform="uppercase">
      {{ initials }}
    </DbrText>
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import DbrText from '../DbrText/DbrText.vue';
import type { DbrAvatarProps } from './DbrAvatar.types';
import type { DbrTextSize } from '../DbrText/DbrText.types';

const { src, alt, name = '', size = 'md', shape = 'circle', active = false } =
  defineProps<DbrAvatarProps>();

const altText = computed(() => alt ?? (name ? `${name} avatar` : 'Avatar'));

const initials = computed(() => {
  if (!name) return '';
  const parts = name.trim().split(/\s+/).slice(0, 2);
  return parts.map((part) => part[0]?.toUpperCase()).join('');
});

const textSizeByAvatarSize: Record<NonNullable<DbrAvatarProps['size']>, DbrTextSize> = {
  sm: 'sm',
  md: 'md',
  lg: 'lg',
};

const textSize = computed(() => textSizeByAvatarSize[size]);
</script>

<style scoped>
.dbru-avatar {
  box-sizing: border-box;
  --_size: var(--dbru-control-height, var(--dbru-control-height-md));

  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: var(--_size);
  height: var(--_size);
  border-radius: 50%;
  background-color: var(--dbru-color-surface);
  border: var(--dbru-border-size-1) solid var(--dbru-color-border);
  overflow: hidden;
}

.dbru-avatar--rounded {
  border-radius: var(--dbru-radius-md);
}

.dbru-avatar--active {
  border-color: var(--dbru-color-primary);
}

.dbru-avatar__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

</style>
