<template>
  <div class="timerControlPanel">
    <TimerStartBtn @click="$emit('start')" />
    <TimerPauseBtn @click="$emit('pause')" />
    <TimerStopBtn @click="$emit('stop')" />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.timerControlPanel {
  display: flex;
  justify-content: space-between;
}
</style>
