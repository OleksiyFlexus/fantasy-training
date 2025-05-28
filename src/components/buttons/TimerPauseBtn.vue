<template>
  <button class="timerPauseBtn"><AnimationPause />Pause</button>
</template>

<script setup lang="ts">
import { AnimationPause } from "@/constants/importIcons";
</script>

<style scoped>
.timerPauseBtn {
  display: flex;
  align-items: center;
  gap: 5px;
  width: 90px;
  height: 30px;
  color: #c8f558;
}

.timerPauseBtn svg {
  width: 30px;
  height: 30px;
}
</style>
