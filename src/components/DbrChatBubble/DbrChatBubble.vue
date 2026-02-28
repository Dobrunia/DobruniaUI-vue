<template>
  <div
    class="dbru-chat-bubble dbru-text-main"
    :class="[
      `dbru-chat-bubble--${direction}`,
      `dbru-chat-bubble--${kind}`,
      { 'dbru-chat-bubble--no-text': !text }
    ]"
  >
    <div v-if="kind === 'text'" class="dbru-chat-bubble__text dbru-text-base">{{ text }}</div>
    <div v-else-if="kind === 'image'" class="dbru-chat-bubble__media">
      <button class="dbru-chat-bubble__image-btn" type="button" @click="openImage">
        <img class="dbru-chat-bubble__image" :src="mediaSrc" :alt="text || 'Media'" />
      </button>
      <div v-if="text" class="dbru-chat-bubble__caption dbru-text-sm dbru-text-muted">{{ text }}</div>
    </div>
    <div v-else-if="kind === 'audio'" class="dbru-chat-bubble__media">
      <div class="dbru-chat-bubble__audio">
        <button
          class="dbru-chat-bubble__audio-btn dbru-text-main"
          type="button"
          @click="togglePlay"
          :aria-label="isPlaying ? 'Pause audio' : 'Play audio'"
        >
          <span class="dbru-chat-bubble__audio-icon">
            {{ isPlaying ? "⏸" : "▶" }}
          </span>
        </button>
        <div class="dbru-chat-bubble__audio-controls">
          <div class="dbru-chat-bubble__audio-track" @click="seek">
            <div
              class="dbru-chat-bubble__audio-progress"
              :style="{ width: progress + '%' }"
            ></div>
          </div>
          <span class="dbru-chat-bubble__audio-time dbru-text-sm dbru-text-muted">{{ durationLabel }}</span>
        </div>
        <audio
          ref="audioRef"
          class="dbru-chat-bubble__audio-el"
          :src="mediaSrc"
          @timeupdate="onTimeUpdate"
          @loadedmetadata="onLoaded"
          @ended="onEnded"
        ></audio>
      </div>
      <div v-if="text" class="dbru-chat-bubble__caption dbru-text-sm dbru-text-muted">{{ text }}</div>
    </div>
    <div class="dbru-chat-bubble__meta">
      <span class="dbru-chat-bubble__time dbru-text-sm dbru-text-muted">{{ time }}</span>
      <span
        v-if="direction === 'out' && status !== 'none'"
        class="dbru-chat-bubble__status dbru-text-xs dbru-text-muted"
        :class="`dbru-chat-bubble__status--${status}`"
      >
        <span v-if="status === 'sending'" class="dbru-chat-bubble__sending dbru-text-xs">⏳</span>
        <template v-else>
          <span class="dbru-chat-bubble__check">✓</span>
          <span v-if="status === 'read'" class="dbru-chat-bubble__check">✓</span>
        </template>
      </span>
    </div>
  </div>

  <teleport to="body">
    <div
      v-if="isImageOpen"
      class="dbru-chat-bubble__overlay"
      @click="closeImage"
    >
      <img
        class="dbru-chat-bubble__overlay-img"
        :src="mediaSrc"
        :alt="text || 'Media'"
        @click.stop
      />
    </div>
  </teleport>
</template>

<script setup lang="ts">
/**
 * Chat message bubble for incoming or outgoing messages.
 */
defineOptions({
  name: "DbrChatBubble"
});

import type { DbrChatBubbleProps } from "./DbrChatBubble.types";
import { computed, ref, watch } from "vue";
import type { PropType } from "vue";

const props = defineProps({
  /**
   * Message text.
   * @default "Message text"
   */
  text: {
    type: String,
    default: "Message text"
  },
  /**
   * Message kind.
   * @default "text"
   */
  kind: {
    type: String as PropType<NonNullable<DbrChatBubbleProps["kind"]>>,
    default: "text"
  },
  /**
   * Media source (image or audio).
   * @default ""
   */
  mediaSrc: {
    type: String,
    default: ""
  },
  /**
   * Time label.
   * @default "12:45"
   */
  time: {
    type: String,
    default: "12:45"
  },
  /**
   * Direction of the message.
   * @default "in"
   */
  direction: {
    type: String as PropType<NonNullable<DbrChatBubbleProps["direction"]>>,
    default: "in"
  },
  /**
   * Message status for checkmarks.
   * @default "none"
   */
  status: {
    type: String as PropType<NonNullable<DbrChatBubbleProps["status"]>>,
    default: "none"
  }
});

const { text, kind, mediaSrc, time, direction, status } = props;

const audioRef = ref<HTMLAudioElement | null>(null);
const isPlaying = ref(false);
const duration = ref(0);
const current = ref(0);
const isImageOpen = ref(false);
const bodyOverflow = ref<string | null>(null);

const progress = computed(() => {
  if (!duration.value) return 0;
  return Math.min(100, (current.value / duration.value) * 100);
});

const durationLabel = computed(() => {
  const total = Math.round(duration.value);
  const mins = Math.floor(total / 60);
  const secs = String(total % 60).padStart(2, "0");
  return `${mins}:${secs}`;
});

const togglePlay = () => {
  const audio = audioRef.value;
  if (!audio) return;
  if (audio.paused) {
    audio.play();
    isPlaying.value = true;
  } else {
    audio.pause();
    isPlaying.value = false;
  }
};

const onTimeUpdate = () => {
  const audio = audioRef.value;
  if (!audio) return;
  current.value = audio.currentTime;
};

const onLoaded = () => {
  const audio = audioRef.value;
  if (!audio) return;
  duration.value = audio.duration || 0;
};

const onEnded = () => {
  isPlaying.value = false;
  current.value = 0;
};

const seek = (event: MouseEvent) => {
  const track = event.currentTarget as HTMLDivElement;
  const audio = audioRef.value;
  if (!track || !audio || !duration.value) return;
  const rect = track.getBoundingClientRect();
  const pct = (event.clientX - rect.left) / rect.width;
  audio.currentTime = Math.max(0, Math.min(duration.value, pct * duration.value));
};

const openImage = () => {
  if (!mediaSrc) return;
  isImageOpen.value = true;
};

const closeImage = () => {
  isImageOpen.value = false;
};

watch(isImageOpen, (open) => {
  if (typeof document === "undefined") return;
  if (open) {
    bodyOverflow.value = document.body.style.overflow;
    document.body.style.overflow = "hidden";
  } else if (bodyOverflow.value !== null) {
    document.body.style.overflow = bodyOverflow.value;
    bodyOverflow.value = null;
  }
});
</script>

<style scoped>
.dbru-chat-bubble {
  max-width: min(70%, 420px);
  padding: var(--dbru-space-3) var(--dbru-space-4);
  border-radius: var(--dbru-radius-md);
  border: 1px solid var(--dbru-color-border);
  background: var(--dbru-color-surface);
  display: grid;
  gap: var(--dbru-space-2);
  position: relative;
}

.dbru-chat-bubble--in {
  border-top-left-radius: var(--dbru-radius-sm);
  align-self: flex-start;
}

.dbru-chat-bubble--out {
  background: color-mix(in oklab, var(--dbru-color-primary) 12%, transparent);
  border-color: color-mix(in oklab, var(--dbru-color-primary) 35%, var(--dbru-color-border));
  border-top-right-radius: var(--dbru-radius-sm);
  align-self: flex-end;
}

.dbru-chat-bubble--in::before,
.dbru-chat-bubble--in::after,
.dbru-chat-bubble--out::before,
.dbru-chat-bubble--out::after {
  content: "";
  position: absolute;
  width: 0;
  height: 0;
  border-style: solid;
}

.dbru-chat-bubble--in::before {
  left: -10px;
  top: 12px;
  border-width: 8px 10px 8px 0;
  border-color: transparent var(--dbru-color-border) transparent transparent;
}

.dbru-chat-bubble--in::after {
  left: -9px;
  top: 12px;
  border-width: 8px 10px 8px 0;
  border-color: transparent var(--dbru-color-surface) transparent transparent;
}

.dbru-chat-bubble--out::before {
  right: -10px;
  top: 12px;
  border-width: 8px 0 8px 10px;
  border-color: transparent transparent transparent
    color-mix(in oklab, var(--dbru-color-primary) 35%, var(--dbru-color-border));
}

.dbru-chat-bubble--out::after {
  right: -9px;
  top: 12px;
  border-width: 8px 0 8px 10px;
  border-color: transparent transparent transparent
    color-mix(in oklab, var(--dbru-color-primary) 12%, transparent);
}

.dbru-chat-bubble__text {
  white-space: pre-wrap;
}

.dbru-chat-bubble__media {
  display: grid;
  gap: var(--dbru-space-2);
}

.dbru-chat-bubble__image-btn {
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;
}

.dbru-chat-bubble__image {
  width: 100%;
  max-width: 260px;
  border-radius: var(--dbru-radius-md);
  display: block;
  border: 1px solid var(--dbru-color-border);
}

.dbru-chat-bubble--image,
.dbru-chat-bubble--audio {
  padding: var(--dbru-space-2);
}

.dbru-chat-bubble--no-text .dbru-chat-bubble__meta {
  margin-top: -4px;
}

.dbru-chat-bubble--image .dbru-chat-bubble__text,
.dbru-chat-bubble--audio .dbru-chat-bubble__text {
  display: none;
}

.dbru-chat-bubble__audio {
  display: flex;
  align-items: center;
  gap: var(--dbru-space-2);
  padding: 8px 12px;
  border-radius: var(--dbru-radius-md);
  background: color-mix(in oklab, var(--dbru-color-surface) 80%, var(--dbru-color-text) 20%);
  border: 1px solid var(--dbru-color-border);
  max-width: 320px;
}

.dbru-chat-bubble__audio-btn {
  background: none;
  border: none;
  cursor: pointer;
  width: 28px;
  height: 28px;
  padding: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.dbru-chat-bubble__audio-icon {
  width: 18px;
  height: 18px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 1;
}

.dbru-chat-bubble__audio-controls {
  display: flex;
  align-items: center;
  gap: var(--dbru-space-2);
  flex: 1;
}

.dbru-chat-bubble__audio-track {
  flex: none;
  width: 180px;
  height: 8px;
  background: var(--dbru-color-surface);
  border-radius: 4px;
  position: relative;
  cursor: pointer;
}

.dbru-chat-bubble__audio-progress {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  background: var(--dbru-color-primary);
  border-radius: 4px;
}

.dbru-chat-bubble__audio-time {
  white-space: nowrap;
}

.dbru-chat-bubble__audio-el {
  display: none;
}

.dbru-chat-bubble__overlay {
  position: fixed;
  z-index: 2000;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.dbru-chat-bubble__overlay-img {
  max-width: 90vw;
  max-height: 90vh;
  border-radius: var(--dbru-radius-md);
  box-shadow: 0 8px 32px #0008;
  background: #fff;
  cursor: default;
}


.dbru-chat-bubble__meta {
  display: inline-flex;
  align-items: center;
  gap: var(--dbru-space-1);
  justify-content: flex-end;
}

.dbru-chat-bubble__status {
  display: inline-flex;
  align-items: center;
  gap: 2px;
}

.dbru-chat-bubble__status--sending {
  color: color-mix(in oklab, var(--dbru-color-text) 45%, transparent);
}

.dbru-chat-bubble__status--read {
  color: #22c55e;
}

</style>
