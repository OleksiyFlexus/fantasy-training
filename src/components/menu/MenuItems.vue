<template>
  <ul class="unorderedList">
    <li class="listItem" v-for="item in menuItems" :key="item.name">
      <router-link class="linkItem" :to="item.path">
        <component class="componentItem" :is="item.icon" />
        {{ item.name }}
      </router-link>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { MatchIcon, PlayerIcon, TeamIcon, StatisticIcon } from "@/constants/importIcons";

const menuItems = [
  { name: "Match", icon: MatchIcon, path: "/match" },
  { name: "Players", icon: PlayerIcon, path: "/players" },
  { name: "Teams", icon: TeamIcon, path: "/teams" },
  { name: "Statistic", icon: StatisticIcon, path: "/statistic" },
];
</script>

<style scoped>
.unorderedList {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.listItem {
  width: 75px;
  display: flex;
  flex-direction: column;
  align-items: center;
  fill: #ffffff;
  font-size: 14px;
}

.linkItem {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #ffffff;
}

.router-link-exact-active.linkItem {
  scale: 1.1;
  padding-bottom: 4px;
  filter: drop-shadow(5px 5px 20px #c8f558);
  color: #c8f558;
}
.linkItem svg {
  width: 40px;
  height: 40px;
}
</style>
