<template>
  <div class="eventScoreSectionWrapp">
    <div class="eventScoreSection">
      <h1>{{ homeScore }}</h1>
      <span>:</span>
      <h1>{{ awayScore }}</h1>
    </div>
    <slot name="timer">
      <TheTimer :time="formattedTime" />
    </slot>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  homeScore: { type: Number, default: 0 },
  awayScore: { type: Number, default: 0 },
  timer: { type: Number, default: 0 },
});

const formattedTime = computed(() => {
  const minutes = Math.floor(props.timer / 60).toString().padStart(2, "0");
  const seconds = (props.timer % 60).toString().padStart(2, "0");
  return `${minutes}:${seconds}`;
});
</script>

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
