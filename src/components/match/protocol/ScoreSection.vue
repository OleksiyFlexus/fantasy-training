<template>
  <div class="matchStatisticContainer">
    <div class="headerSection">
      <h1>MATCH PROTOCOL</h1>
    </div>
    <EmptyData v-if="playerScores.length === 0">No player statistics yet</EmptyData>
    <PlayerWhichScore v-for="player in playerScores" :key="player.id" :playerId="player.id" />
  </div>
</template>

<script setup lang="ts">
import { playerScores } from "@/stores/playerScoreStore";
</script>

<style scoped>
.matchStatisticContainer {
  width: 100%;
  background-color: #161616;
  border-radius: 12px;
  padding: 16px;
  display: flex;
  gap: 10px;
  flex-direction: column;
  justify-content: space-between;
  border-bottom: 1px solid #ffffffa1;
}

</style>
