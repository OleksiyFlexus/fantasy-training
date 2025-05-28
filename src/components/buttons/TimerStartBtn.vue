<template>
  <button class="timerStartBtn"><PlaybackStart />Start</button>
</template>

<script setup lang="ts">
import { PlaybackStart } from "@/constants/importIcons";
</script>

<style scoped>
.timerStartBtn {
  display: flex;
  align-items: center;
  gap: 5px;
  width: 90px;
  height: 30px;
  color: #c8f558;
}

.timerStartBtn svg {
  width: 30px;
  height: 30px;
}
</style>
