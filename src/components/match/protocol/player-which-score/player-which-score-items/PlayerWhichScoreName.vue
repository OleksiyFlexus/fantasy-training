<template>
  <div class="playerName">
    <h1>{{ playerName }} {{ playerSurname }}</h1>
    <h2>{{ teamName }}</h2>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  player?: any;
}>();

const playerName = computed(() => {
  return props.player?.name || "Player";
});

const playerSurname = computed(() => {
  return props.player?.surname || "Unknown";
});

const teamName = computed(() => {
  const team = props.player?.team;
  return team === "home" ? "Home Team" : team === "away" ? "Away Team" : "No Team";
});
</script>

<style scoped>
.playerName {
  display: flex;
  flex-direction: column;
  gap: 7px;
}

.playerName h2 {
  font-size: 12px;
  line-height: 14px;
  font-weight: normal;
  color: #ffffff8e;
}

.playerName h1 {
  text-transform: capitalize;
  font-size: 16px;
  font-weight: bold;
}
</style>
