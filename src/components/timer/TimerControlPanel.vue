<template>
  <div class="timerControlPanel">
    <TimerStartBtn />
    <TimerPauseBtn />
    <TimerStopBtn />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.timerControlPanel {
  display: flex;
  justify-content: space-between;
}
</style>
