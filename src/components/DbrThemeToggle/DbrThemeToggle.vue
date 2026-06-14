<template>
  <label class="dbru-theme-toggle" :class="[`dbru-size-${size}`, `dbru-theme-toggle--${shape}`]">
    <input
      class="dbru-theme-toggle__input dbru-reduced-motion"
      type="checkbox"
      v-model="checked"
      @keydown.enter.prevent="toggleFromKeyboard"
      @keydown.space.prevent="toggleFromKeyboard"
      @change="onToggle"
      aria-label="Toggle theme"
    />
    <span class="dbru-theme-toggle__icon dbru-theme-toggle__icon--moon dbru-font-color-base">
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path
          fill-rule="evenodd"
          d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
          clip-rule="evenodd"
        ></path>
      </svg>
    </span>
    <span class="dbru-theme-toggle__icon dbru-theme-toggle__icon--sun dbru-font-color-base">
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path
          d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"
        ></path>
      </svg>
    </span>
  </label>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, watch } from 'vue';
import type { DbrThemeToggleProps } from './DbrThemeToggle.types';

const { size = 'md', shape = 'circle', modelValue = false, persist = true, storageKey = 'dbru-theme' } = defineProps<DbrThemeToggleProps>();

let themeObserver: MutationObserver | null = null;

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void;
  (e: 'change', value: boolean): void;
}>();

const checked = computed({
  get: () => modelValue,
  set: (next: boolean) => {
    emit('update:modelValue', next);
    emit('change', next);
    applyTheme(next);
  },
});

const applyTheme = (isDark: boolean) => {
  if (typeof document === 'undefined') return;
  document.documentElement.classList.toggle('dbru-theme-dark', isDark);
  if (persist) {
    localStorage.setItem(storageKey, isDark ? 'dark' : 'light');
  }
};

const toggleFromKeyboard = () => {
  checked.value = !checked.value;
};

const onToggle = (event: Event) => {
  const target = event.target as HTMLInputElement;
  applyTheme(target.checked);
};

onMounted(() => {
  const syncFromDom = () => {
    if (typeof document === 'undefined') return;
    const next = document.documentElement.classList.contains('dbru-theme-dark');
    if (modelValue === next) return;
    emit('update:modelValue', next);
  };

  if (!persist || typeof localStorage === 'undefined') {
    applyTheme(modelValue);
  } else {
    const saved = localStorage.getItem(storageKey);
    if (saved === 'dark') {
      emit('update:modelValue', true);
      applyTheme(true);
    } else if (saved === 'light') {
      emit('update:modelValue', false);
      applyTheme(false);
    } else {
      applyTheme(modelValue);
    }
  }

  if (typeof MutationObserver !== 'undefined' && typeof document !== 'undefined') {
    themeObserver = new MutationObserver(syncFromDom);
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });
  }
});

watch(
  () => modelValue,
  (next) => {
    applyTheme(next);
  }
);

onBeforeUnmount(() => {
  themeObserver?.disconnect();
  themeObserver = null;
});
</script>

<style scoped>
.dbru-theme-toggle {
  box-sizing: border-box;
  background-color: var(--dbru-color-surface);
  width: var(--dbru-control-height, var(--dbru-control-height-md));
  height: var(--dbru-control-height, var(--dbru-control-height-md));
  border-radius: 50%;
  display: grid;
  place-items: center;
  cursor: pointer;
  border: var(--dbru-border-size-1) solid var(--dbru-color-border);
  line-height: 1;
  position: relative;
  overflow: visible;
  transition:
    background-color var(--dbru-duration-base) var(--dbru-ease-standard),
    border-color var(--dbru-duration-base) var(--dbru-ease-standard);
}

.dbru-theme-toggle:hover {
  background-color: color-mix(in oklab, var(--dbru-color-primary) 10%, var(--dbru-color-surface));
  border-color: color-mix(in oklab, var(--dbru-color-primary) 45%, var(--dbru-color-border));
}

.dbru-theme-toggle--rounded {
  border-radius: var(--dbru-radius-md);
}

.dbru-theme-toggle__input {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  opacity: 0;
  cursor: pointer;
  z-index: 1;
}

.dbru-theme-toggle__icon {
  grid-column: 1 / 1;
  grid-row: 1 / 1;
  transition: transform 500ms;
  line-height: 0.1;
}

.dbru-theme-toggle__icon svg {
  width: calc(var(--dbru-control-height, var(--dbru-control-height-md)) * 0.57);
  height: calc(var(--dbru-control-height, var(--dbru-control-height-md)) * 0.57);
}

.dbru-theme-toggle__icon--moon {
  transition-delay: 200ms;
}

.dbru-theme-toggle__icon--sun {
  transform: scale(0);
}

.dbru-theme-toggle__input:checked + .dbru-theme-toggle__icon--moon {
  transform: rotate(360deg) scale(0);
}

.dbru-theme-toggle__input:checked ~ .dbru-theme-toggle__icon--sun {
  transition-delay: 200ms;
  transform: scale(1) rotate(360deg);
}

.dbru-theme-toggle__input:focus-visible {
  outline: none;
}

.dbru-theme-toggle:has(.dbru-theme-toggle__input:focus-visible) {
  outline: var(--dbru-border-size-2) solid var(--dbru-color-focus);
  outline-offset: 0;
}

</style>
