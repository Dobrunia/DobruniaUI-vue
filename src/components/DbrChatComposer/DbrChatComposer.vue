<template>
  <div class="dbru-chat-composer" :class="{ 'dbru-chat-composer--disabled': disabled }">
    <div v-if="attachments.length" class="dbru-chat-composer__attachments">
      <div
        v-for="item in attachments"
        :key="item.id"
        class="dbru-chat-composer__attachment"
      >
        <img
          v-if="item.kind === 'image'"
          class="dbru-chat-composer__thumb"
          :src="item.url"
          :alt="item.name"
        />
        <div v-else class="dbru-chat-composer__file">
          <span class="dbru-chat-composer__file-icon">📎</span>
          <span class="dbru-chat-composer__file-name">{{ item.name }}</span>
        </div>
        <button
          type="button"
          class="dbru-chat-composer__remove"
          :disabled="disabled"
          @click="removeAttachment(item.id)"
          aria-label="Remove attachment"
        >
          ×
        </button>
      </div>
    </div>

    <div class="dbru-chat-composer__row">
      <button
        type="button"
        class="dbru-chat-composer__icon-btn"
        :disabled="disabled"
        aria-label="Attach file"
        @click="openFilePicker"
      >
        <svg class="dbru-chat-composer__icon" viewBox="0 0 24 24" fill="none">
          <path
            d="M21 11.5L12.5 20a5 5 0 01-7.07-7.07l9.19-9.19a3.5 3.5 0 014.95 4.95l-9.2 9.19a2 2 0 11-2.83-2.83l8.49-8.49"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>

      <textarea
        ref="textareaRef"
        class="dbru-chat-composer__input dbru-reduced-motion"
        :value="modelValue"
        :placeholder="placeholder"
        :aria-label="ariaLabel"
        :disabled="disabled"
        rows="1"
        @input="onInput"
        @keydown="onKeydown"
      ></textarea>

      <button
        type="button"
        class="dbru-chat-composer__send"
        :disabled="disabled || !canSend"
        aria-label="Send message"
        @click="send"
      >
        <svg class="dbru-chat-composer__icon" viewBox="0 0 24 24" fill="none">
          <path
            d="M3 11.5L21 3l-8.5 18-2.5-7.5L3 11.5z"
            stroke="currentColor"
            stroke-width="2"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>

    <input
      ref="fileInputRef"
      class="dbru-chat-composer__file-input"
      type="file"
      multiple
      :disabled="disabled"
      @change="onFilesSelected"
    />
  </div>
</template>

<script setup lang="ts">
/**
 * Chat composer with attachments, typing, and send behavior.
 */
defineOptions({
  name: "DbrChatComposer"
});

import { computed, onMounted, ref, toRefs, watch } from "vue";
import type { DbrChatAttachment, DbrChatComposerProps } from "./DbrChatComposer.types";

const props = withDefaults(defineProps<DbrChatComposerProps>(), {
  modelValue: "",
  placeholder: "Message",
  ariaLabel: "Message",
  disabled: false,
  maxHeight: 120
});

const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
  (e: "send", payload: { text: string; attachments: DbrChatAttachment[] }): void;
  (e: "typing", value: boolean): void;
  (e: "attachmentsChange", value: DbrChatAttachment[]): void;
}>();

const { modelValue, disabled, maxHeight } = toRefs(props);

const textareaRef = ref<HTMLTextAreaElement | null>(null);
const fileInputRef = ref<HTMLInputElement | null>(null);
const attachments = ref<DbrChatAttachment[]>([]);

const canSend = computed(() => {
  return modelValue.value.trim().length > 0 || attachments.value.length > 0;
});

const resizeTextarea = () => {
  const el = textareaRef.value;
  if (!el) return;
  el.style.height = "auto";
  const next = Math.min(el.scrollHeight, maxHeight.value);
  el.style.height = `${next}px`;
  el.style.overflowY = el.scrollHeight > maxHeight.value ? "auto" : "hidden";
};

const onInput = (event: Event) => {
  const target = event.target as HTMLTextAreaElement;
  emit("update:modelValue", target.value);
  emit("typing", target.value.trim().length > 0);
  resizeTextarea();
};

const onKeydown = (event: KeyboardEvent) => {
  if (event.key === "Enter" && !event.shiftKey) {
    event.preventDefault();
    send();
  }
};

const send = () => {
  if (!canSend.value || disabled.value) return;
  const payload = {
    text: modelValue.value.trim(),
    attachments: attachments.value
  };
  emit("send", payload);
  emit("update:modelValue", "");
  emit("typing", false);
  clearAttachments();
  resizeTextarea();
};

const openFilePicker = () => {
  if (disabled.value) return;
  fileInputRef.value?.click();
};

const onFilesSelected = (event: Event) => {
  const input = event.target as HTMLInputElement;
  const files = Array.from(input.files || []);
  if (!files.length) return;

  const mapped = files.map((file) => {
    const kind = file.type.startsWith("image/") ? "image" : "file";
    const url = kind === "image" ? URL.createObjectURL(file) : undefined;
    return {
      id: `${file.name}-${file.size}-${file.lastModified}`,
      name: file.name,
      size: file.size,
      kind,
      url,
      file
    } satisfies DbrChatAttachment;
  });

  attachments.value = [...attachments.value, ...mapped];
  emit("attachmentsChange", attachments.value);
  input.value = "";
};

const removeAttachment = (id: string) => {
  const target = attachments.value.find((item) => item.id === id);
  if (target?.url) URL.revokeObjectURL(target.url);
  attachments.value = attachments.value.filter((item) => item.id !== id);
  emit("attachmentsChange", attachments.value);
};

const clearAttachments = () => {
  attachments.value.forEach((item) => {
    if (item.url) URL.revokeObjectURL(item.url);
  });
  attachments.value = [];
  emit("attachmentsChange", attachments.value);
};

watch(modelValue, () => resizeTextarea());

onMounted(() => resizeTextarea());
</script>

<style scoped>
.dbru-chat-composer {
  display: grid;
  gap: var(--dbru-space-2);
  padding: var(--dbru-space-3);
  border-radius: var(--dbru-radius-md);
  border: 1px solid var(--dbru-color-border);
  background: var(--dbru-color-surface);
}

.dbru-chat-composer__row {
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: end;
  gap: var(--dbru-space-2);
}

.dbru-chat-composer__input {
  width: 100%;
  min-height: var(--dbru-control-height-md);
  max-height: 120px;
  resize: none;
  border: 1px solid var(--dbru-color-border);
  border-radius: var(--dbru-radius-md);
  padding: var(--dbru-space-2) var(--dbru-space-3);
  font-size: var(--dbru-font-size-base);
  line-height: var(--dbru-line-height-base);
  background: var(--dbru-color-surface);
  color: var(--dbru-color-text);
  transition: border-color var(--dbru-duration-base) var(--dbru-ease-standard),
    box-shadow var(--dbru-duration-base) var(--dbru-ease-standard);
}

.dbru-chat-composer__input:focus {
  border-color: var(--dbru-color-primary);
  box-shadow: 0 0 0 3px color-mix(in oklab, var(--dbru-color-primary) 25%, #0000);
  outline: none;
}

.dbru-chat-composer__icon-btn,
.dbru-chat-composer__send {
  width: var(--dbru-control-height-md);
  height: var(--dbru-control-height-md);
  border-radius: 50%;
  border: 1px solid var(--dbru-color-border);
  background: var(--dbru-color-surface);
  color: var(--dbru-color-text);
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: background var(--dbru-duration-base) var(--dbru-ease-standard),
    border-color var(--dbru-duration-base) var(--dbru-ease-standard),
    color var(--dbru-duration-base) var(--dbru-ease-standard);
}

.dbru-chat-composer__icon {
  width: 18px;
  height: 18px;
  display: block;
}

.dbru-chat-composer__icon-btn:hover:not(:disabled),
.dbru-chat-composer__send:hover:not(:disabled) {
  background: color-mix(in oklab, var(--dbru-color-primary) 12%, transparent);
  border-color: color-mix(in oklab, var(--dbru-color-primary) 55%, var(--dbru-color-border));
}

.dbru-chat-composer__send:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.dbru-chat-composer__attachments {
  display: flex;
  flex-wrap: wrap;
  gap: var(--dbru-space-2);
}

.dbru-chat-composer__attachment {
  position: relative;
  border: 1px solid var(--dbru-color-border);
  border-radius: var(--dbru-radius-md);
  padding: var(--dbru-space-1);
  background: var(--dbru-color-surface);
}

.dbru-chat-composer__thumb {
  width: 84px;
  height: 64px;
  border-radius: var(--dbru-radius-sm);
  object-fit: cover;
  display: block;
}

.dbru-chat-composer__file {
  display: inline-flex;
  align-items: center;
  gap: var(--dbru-space-1);
  padding: var(--dbru-space-1) var(--dbru-space-2);
  font-size: var(--dbru-font-size-sm);
  color: var(--dbru-color-text);
}

.dbru-chat-composer__file-name {
  max-width: 160px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.dbru-chat-composer__remove {
  position: absolute;
  top: -6px;
  right: -6px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid var(--dbru-color-border);
  background: var(--dbru-color-surface);
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  line-height: 1;
}

.dbru-chat-composer__file-input {
  display: none;
}

.dbru-chat-composer--disabled {
  opacity: 0.6;
}
</style>
