<template>
  <div class="additionalContent">
    <div class="containerName">
      <h1>PLAYER STATISTIC</h1>
    </div>
    <ul class="playerStatContainer">
      <li class="playerStat" v-for="item in playerStatItems" :key="item.name">
        <component class="componentItem" :is="item.icon" />
        <div class="statName">
          <span>{{ item.name }}</span>
          <p>{{ item.stat }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { GamesIcon, GoalsIcon, AssistsIcon } from "@/constants/importIcons";
import { playerScores } from '@/stores/playerScoreStore';

const props = defineProps<{
  player: Player;
}>();

const playerStats = computed(() => {
  const scoreEntry = playerScores.value.find(p => p.id === props.player.id);
  return {
    games: props.player.games ?? 0,
    goals: scoreEntry?.goals ?? 0,
    assists: scoreEntry?.assists ?? 0
  };
});

const playerStatItems = computed(() => [
  { name: "Games", icon: GamesIcon, stat: playerStats.value.games },
  { name: "Goals", icon: GoalsIcon, stat: playerStats.value.goals },
  { name: "Assists", icon: AssistsIcon, stat: playerStats.value.assists },
]);
</script>

<style scoped>
.additionalContent {
  display: flex;
  flex-direction: column;
  padding: 16px;
  gap: 20px;
  background-color: #1a1a1a;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  transition: all 0.3s ease;
}

.playerStatContainer {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.playerStat {
  display: flex;
  flex-direction: row;
  gap: 5px;
  align-items: center;
}

.statName {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 20px;
  gap: 8px;
  font-weight: bold;
}

.playerStatContainer svg {
  width: 30px;
  fill: #c8f558;
}
</style>
