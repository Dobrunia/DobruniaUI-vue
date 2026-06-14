<template>
  <div class="dbru-terminal-loader dbru-reduced-motion" aria-busy="true" aria-live="polite">
    <div class="dbru-terminal-header">
      <DbrText class="dbru-terminal-title" color="surface" size="xs">
        Status
      </DbrText>
      <div class="dbru-terminal-controls">
        <span class="dbru-terminal-control dbru-terminal-control--close"></span>
        <span class="dbru-terminal-control dbru-terminal-control--minimize"></span>
        <span class="dbru-terminal-control dbru-terminal-control--maximize"></span>
      </div>
    </div>
    <DbrText class="dbru-terminal-content" color="success" wrap="nowrap">Loading...</DbrText>
  </div>
</template>

<script setup lang="ts">
import DbrText from '../DbrText/DbrText.vue';
</script>

<style scoped>
@keyframes dbru-terminal-blink {
  50% {
    border-right-color: transparent;
  }
}

@keyframes dbru-terminal-type {
  0%,
  10% {
    width: 0;
  }
  45%,
  55% {
    width: 6.2em;
  }
  90%,
  100% {
    width: 0;
  }
}

.dbru-terminal-loader {
  border: 0.1em solid #333;
  background-color: #1a1a1a;
  padding: 1.5em 1em;
  width: 12em;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  position: relative;
  overflow: hidden;
  cursor: progress;
}

.dbru-terminal-header {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1.5em;
  background-color: #333;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  padding: 0 0.4em;
}

.dbru-terminal-controls {
  float: right;
}

.dbru-terminal-control {
  display: inline-block;
  width: 0.6em;
  height: 0.6em;
  margin-left: 0.4em;
  border-radius: 50%;
  background-color: #777;
}

.dbru-terminal-control--close {
  background-color: #e33;
}

.dbru-terminal-control--minimize {
  background-color: #ee0;
}

.dbru-terminal-control--maximize {
  background-color: #0b0;
}

.dbru-terminal-title {
  float: left;
  padding-top: 0.25em;
}

.dbru-terminal-content {
  display: inline-block;
  overflow: hidden;
  border-right: 0.2em solid green;
  animation:
    dbru-terminal-type 4s steps(11) infinite,
    dbru-terminal-blink 0.5s step-end infinite alternate;
  margin-top: 1.5em;
}
</style>
