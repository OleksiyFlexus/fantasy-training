<template>
  <div class="eventTeamNameSection">
    <h1>{{ homeTeamName }}</h1>
    <p>VS</p>
    <h1>{{ awayTeamName }}</h1>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  homeTeamName: {
    type: String,
    default: "Home",
  },
  awayTeamName: {
    type: String,
    default: "Away",
  },
});
</script>

<style scoped>
.eventTeamNameSection {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 20px;
  justify-content: center;
}
</style>
