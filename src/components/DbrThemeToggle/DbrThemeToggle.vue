<template>
  <label
    class="dbru-theme-toggle"
    :class="[`dbru-size-${size}`, `dbru-theme-toggle--${shape}`]"
  >
    <input
      class="dbru-theme-toggle__input"
      type="checkbox"
      :checked="isDark"
      @change="onToggle"
      aria-label="Toggle theme"
    />
    <span class="dbru-theme-toggle__icon dbru-theme-toggle__icon--moon dbru-text-main">
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path
          fill-rule="evenodd"
          d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
          clip-rule="evenodd"
        ></path>
      </svg>
    </span>
    <span class="dbru-theme-toggle__icon dbru-theme-toggle__icon--sun dbru-text-main">
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path
          d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"
        ></path>
      </svg>
    </span>
  </label>
</template>

<script setup lang="ts">
/**
 * Theme toggle button.
 * Adds/removes `dbru-theme-dark` on documentElement.
 */
defineOptions({
  name: "DbrThemeToggle"
});

import { onBeforeUnmount, onMounted, ref, watch } from "vue";
import type { PropType } from "vue";
import type { DbrThemeToggleProps } from "./DbrThemeToggle.types";

const props = defineProps({
  /**
   * Whether dark theme is enabled.
   * @default false
   */
  modelValue: {
    type: Boolean,
    default: false
  },
  /**
   * Control size from global size scale.
   * @default "md"
   */
  size: {
    type: String as PropType<NonNullable<DbrThemeToggleProps["size"]>>,
    default: "md"
  },
  /**
   * Toggle button shape.
   * @default "circle"
   */
  shape: {
    type: String as PropType<NonNullable<DbrThemeToggleProps["shape"]>>,
    default: "circle"
  },
  /**
   * Persist choice to localStorage.
   * @default true
   */
  persist: {
    type: Boolean,
    default: true
  },
  /**
   * Storage key for persistence.
   * @default "dbru-theme"
   */
  storageKey: {
    type: String,
    default: "dbru-theme"
  }
});

const { size, shape } = props;
const isDark = ref(props.modelValue);
let themeObserver: MutationObserver | null = null;

const emit = defineEmits<{
  (e: "update:modelValue", value: boolean): void;
  (e: "change", value: boolean): void;
}>();

const applyTheme = (isDark: boolean) => {
  if (typeof document === "undefined") return;
  document.documentElement.classList.toggle("dbru-theme-dark", isDark);
  if (props.persist) {
    localStorage.setItem(props.storageKey, isDark ? "dark" : "light");
  }
};

const onToggle = (event: Event) => {
  const target = event.target as HTMLInputElement;
  const next = target.checked;
  isDark.value = next;
  emit("update:modelValue", next);
  emit("change", next);
  applyTheme(next);
};

onMounted(() => {
  const syncFromDom = () => {
    if (typeof document === "undefined") return;
    const next = document.documentElement.classList.contains("dbru-theme-dark");
    if (isDark.value === next) return;
    isDark.value = next;
    emit("update:modelValue", next);
  };

  if (!props.persist || typeof localStorage === "undefined") {
    isDark.value = props.modelValue;
    applyTheme(isDark.value);
  } else {
    const saved = localStorage.getItem(props.storageKey);
    if (saved === "dark") {
      isDark.value = true;
      emit("update:modelValue", true);
      applyTheme(true);
    } else if (saved === "light") {
      isDark.value = false;
      emit("update:modelValue", false);
      applyTheme(false);
    } else {
      isDark.value = props.modelValue;
      applyTheme(isDark.value);
    }
  }

  if (typeof MutationObserver !== "undefined" && typeof document !== "undefined") {
    themeObserver = new MutationObserver(syncFromDom);
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"]
    });
  }
});

watch(
  () => props.modelValue,
  (next) => {
    isDark.value = next;
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
  background-color: var(--dbru-color-surface);
  width: var(--dbru-control-height, var(--dbru-control-height-md));
  height: var(--dbru-control-height, var(--dbru-control-height-md));
  border-radius: 50%;
  display: grid;
  place-items: center;
  cursor: pointer;
  box-shadow: 0 0 24px color-mix(in oklab, var(--dbru-color-text) 15%, transparent);
  border: 1px solid var(--dbru-color-border);
  line-height: 1;
  position: relative;
}

.dbru-theme-toggle--rounded {
  border-radius: var(--dbru-radius-md);
}

.dbru-theme-toggle__input {
  display: none;
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
</style>
