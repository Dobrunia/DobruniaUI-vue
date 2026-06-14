<template>
  <div
    ref="rootRef"
    class="dbru-select"
    :class="{ 'dbru-select--disabled': disabled }"
    @keydown="onKeydown"
  >
    <DbrText v-if="label" class="dbru-select__label" size="sm" color="muted">
      {{ label }}
    </DbrText>

    <input v-if="name" type="hidden" :name="name" :value="hiddenValue" />

    <div class="dbru-select__control-wrap">
      <button
        :id="selectId"
        type="button"
        class="dbru-select__trigger dbru-focus-visible dbru-reduced-motion"
        :class="`dbru-size-${size}`"
        :disabled="disabled"
        :aria-expanded="open"
        :aria-controls="menuId"
        :aria-activedescendant="open ? activeOptionId : undefined"
        :aria-labelledby="valueId"
        :aria-required="required"
        aria-haspopup="listbox"
        v-bind="attrs"
        @click="toggleMenu"
      >
        <span v-if="selectedOption?.icon" class="dbru-select__option-icon" aria-hidden="true">
          <img :src="selectedOption.icon" alt="" />
        </span>
        <DbrText
          :id="valueId"
          class="dbru-select__option-label"
          :color="selectedOption ? 'base' : 'muted'"
          truncate
        >
          {{ selectedOption?.label ?? placeholder }}
        </DbrText>
      </button>

      <ul
        v-if="open"
        :id="menuId"
        class="dbru-select__menu"
        role="listbox"
        :aria-labelledby="selectId"
      >
        <li
          v-for="(option, index) in options"
          :id="getOptionId(index)"
          :key="String(option.value)"
          role="option"
          :aria-selected="option.value === modelValue"
        >
          <button
            type="button"
            class="dbru-select__menu-option dbru-focus-visible dbru-reduced-motion"
            :class="{ 'dbru-select__menu-option--selected': option.value === modelValue }"
            @click="selectOption(option.value)"
            @mouseenter="activeIndex = index"
          >
            <span v-if="option.icon" class="dbru-select__option-icon" aria-hidden="true">
              <img :src="option.icon" alt="" />
            </span>
            <DbrText class="dbru-select__option-label" truncate>
              {{ option.label }}
            </DbrText>
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, useAttrs, useId } from 'vue';
import DbrText from '../DbrText/DbrText.vue';
import type { DbrSelectProps, DbrSelectValue } from './DbrSelect.types';

defineOptions({ inheritAttrs: false });

const {
  modelValue = null,
  options,
  label,
  placeholder = '',
  size = 'md',
  name,
  id,
  disabled = false,
  required = false,
} = defineProps<DbrSelectProps>();

const attrs = useAttrs();

const emit = defineEmits<{
  (e: 'update:modelValue', value: DbrSelectValue): void;
  (e: 'change', value: DbrSelectValue): void;
}>();

const rootRef = ref<HTMLElement | null>(null);
const open = ref(false);
const activeIndex = ref(-1);
const generatedId = useId();

const selectId = id ?? generatedId;
const menuId = `${selectId}-menu`;
const valueId = `${selectId}-value`;

const selectedOption = computed(() => options.find((option) => option.value === modelValue));
const hiddenValue = computed(() => (modelValue === null ? '' : String(modelValue)));
const activeOptionId = computed(() => {
  if (activeIndex.value < 0) return undefined;
  return getOptionId(activeIndex.value);
});

const getOptionId = (index: number) => `${selectId}-option-${index}`;

const setActiveToSelected = () => {
  activeIndex.value = options.findIndex((option) => option.value === modelValue);
};

const openMenu = () => {
  if (disabled || options.length === 0) return;
  setActiveToSelected();
  if (activeIndex.value < 0) activeIndex.value = 0;
  open.value = true;
};

const closeMenu = () => {
  open.value = false;
  activeIndex.value = -1;
};

const toggleMenu = () => {
  if (open.value) {
    closeMenu();
    return;
  }
  openMenu();
};

const selectOption = (value: DbrSelectValue) => {
  emit('update:modelValue', value);
  emit('change', value);
  closeMenu();
};

const moveActive = (delta: number) => {
  if (!open.value) openMenu();
  if (options.length === 0) return;

  const nextIndex = activeIndex.value + delta;
  activeIndex.value = (nextIndex + options.length) % options.length;
};

const selectActiveOption = () => {
  const option = options[activeIndex.value];
  if (!option) return;
  selectOption(option.value);
};

const onKeydown = (event: KeyboardEvent) => {
  if (disabled) return;

  const target = event.target as HTMLElement | null;
  if (target?.closest('.dbru-select__menu-option')) return;

  if (event.key === 'Escape') {
    closeMenu();
    return;
  }

  if (event.key === 'ArrowDown') {
    event.preventDefault();
    moveActive(1);
    return;
  }

  if (event.key === 'ArrowUp') {
    event.preventDefault();
    moveActive(-1);
    return;
  }

  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    if (open.value) {
      selectActiveOption();
      return;
    }
    openMenu();
  }
};

const onDocumentClick = (event: MouseEvent) => {
  if (!open.value || !rootRef.value) return;
  if (rootRef.value.contains(event.target as Node)) return;
  closeMenu();
};

onMounted(() => {
  document.addEventListener('click', onDocumentClick);
});

onBeforeUnmount(() => {
  document.removeEventListener('click', onDocumentClick);
});
</script>

<style scoped>
.dbru-select {
  display: inline-flex;
  flex-direction: column;
  gap: var(--dbru-space-2);
  min-width: 0;
}

.dbru-select__label {
  flex: 0 0 auto;
  pointer-events: none;
}

.dbru-select__control-wrap {
  position: relative;
  display: block;
  width: 100%;
}

.dbru-select__control-wrap::after {
  content: '';
  position: absolute;
  top: 50%;
  right: var(--dbru-control-px, var(--dbru-space-4));
  width: 0.45rem;
  height: 0.45rem;
  border-right: 2px solid var(--dbru-text-color-muted);
  border-bottom: 2px solid var(--dbru-text-color-muted);
  pointer-events: none;
  transform: translateY(-65%) rotate(45deg);
}

.dbru-select__trigger {
  display: flex;
  align-items: center;
  gap: var(--dbru-space-2);
  width: 100%;
  min-height: var(--dbru-control-height, var(--dbru-control-height-md));
  padding: 0 calc(var(--dbru-control-px, var(--dbru-space-4)) + 1.125rem) 0
    var(--dbru-control-px, var(--dbru-space-4));
  border: var(--dbru-border-size-1) solid var(--dbru-color-border);
  border-radius: var(--dbru-radius-md);
  background: var(--dbru-color-surface);
  text-align: left;
  cursor: pointer;
  transition:
    border-color var(--dbru-duration-base) var(--dbru-ease-standard),
    box-shadow var(--dbru-duration-base) var(--dbru-ease-standard),
    background-color var(--dbru-duration-base) var(--dbru-ease-standard);
}

.dbru-select__trigger:hover:not(:disabled) {
  border-color: var(--dbru-color-primary);
}

.dbru-select--disabled {
  opacity: 0.6;
}

.dbru-select--disabled .dbru-select__trigger {
  cursor: not-allowed;
}

.dbru-select__option-icon {
  display: inline-flex;
  width: 1.125rem;
  height: 1.125rem;
  flex: 0 0 auto;
}

.dbru-select__option-icon img {
  width: 100%;
  height: 100%;
  border-radius: var(--dbru-radius-sm);
  object-fit: cover;
}

.dbru-select__option-label {
  min-width: 0;
  flex: 1 1 auto;
}

.dbru-select__menu {
  position: absolute;
  top: calc(100% + var(--dbru-space-1));
  right: 0;
  left: 0;
  z-index: 20;
  max-height: 16rem;
  margin: 0;
  padding: var(--dbru-space-1);
  overflow: hidden auto;
  list-style: none;
  border: var(--dbru-border-size-1) solid var(--dbru-color-border);
  border-radius: var(--dbru-radius-md);
  background: var(--dbru-color-surface);
  box-shadow: var(--dbru-shadow-md);
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.dbru-select__menu::-webkit-scrollbar {
  display: none;
}

.dbru-select__menu-option {
  display: flex;
  align-items: center;
  gap: var(--dbru-space-2);
  width: 100%;
  padding: var(--dbru-space-2);
  border: 0;
  border-radius: var(--dbru-radius-sm);
  background: transparent;
  text-align: left;
  cursor: pointer;
  transition: background-color var(--dbru-duration-base) var(--dbru-ease-standard);
}

.dbru-select__menu-option:hover,
.dbru-select__menu-option--selected {
  background: color-mix(in oklab, var(--dbru-color-primary) 10%, transparent);
}
</style>
