<template>
  <div class="eventScoreSectionWrapp">
    <div class="eventScoreSection">
      <h1>0</h1>
      <span>:</span>
      <h1>0</h1>
    </div>
    <slot name="timer">
      <TheTimer />
    </slot>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.eventScoreSection {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
  width: 100%;
  font-size: 56px;
  color: #ffffff;
  font-weight: bold;
}

.eventScoreSectionWrapp {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}
</style>
