<template>
  <ul class="teamStat">
    <li class="teamStatItem" v-for="item in teamStatItems" :key="item.name">
      <component :is="item.icon" />
      <div class="teamStatCount">
        <span>{{ item.name }}</span>
        <p>{{ item.stat }}</p>
      </div>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { TrophyIcon, GamesIcon, GoalsIcon } from "@/constants/importIcons";

const teamStatItems = [
  { name: "Games", icon: GamesIcon, stat: "0" },
  { name: "Wins", icon: TrophyIcon, stat: "0" },
  { name: "Goals", icon: GoalsIcon, stat: "0" },
];
</script>

<style scoped>
.teamStat {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
}

.teamStatItem {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
}
.teamStat svg {
  width: 30px;
  height: 30px;
  fill: #c8f558;
}
.teamStatCount {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.teamStatCount p {
  font-size: 24px;
  font-weight: bold;
}

.teamStatCount span {
  font-size: 16px;
  font-weight: normal;
  color: #ffffff;
}
</style>
