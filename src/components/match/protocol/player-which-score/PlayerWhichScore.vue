<template>
  <div class="playerInfo" v-if="player">
    <div class="playerItemContainer">
      <PlayerWhichScorePhoto :player="player" />
      <PlayerWhichScoreName :player="player" />
    </div>
    <PlayerScoreSection :goals="player.goals" :assists="player.assists" />
  </div>
</template>

<script setup lang="ts">
import { playerScores } from "@/stores/playerScoreStore";

const props = defineProps<{ playerId: string }>();

const player = computed(() => {
  return playerScores.value.find((p) => p.id === props.playerId);
});
</script>

<style scoped>
.playerInfo {
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}

.playerItemContainer {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
}
</style>
